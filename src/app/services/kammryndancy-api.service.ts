import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class KammryndancyApiService {
  private apiUrl = environment.APIURL;

  constructor(private http: HttpClient) {}

  // Example: Get all beer recipes
  getBeerRecipes(): Observable<any> {
    return this.http.get(`${this.apiUrl}/beerrecipes`);
  }

  // Example: Get beer recipes by name
  getBeerRecipesByName(name: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/beerrecipes/by-name/${encodeURIComponent(name)}`);
  }

  // Example: Health check
  getHealth(): Observable<any> {
    return this.http.get(this.apiUrl.replace('/api', '/health'));
  }

  // Get scavenger hunt items by filter
  getScavengerHuntFiltered(params: any): Observable<any> {
    return this.http.get(`${this.apiUrl}/scavengerhunt/filter`, { params });
  }
}
