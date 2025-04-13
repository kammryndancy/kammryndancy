import { Injectable } from '@angular/core';
import { Observable, from, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ImageProcessingService {
  constructor() {}

  private getLuminance(color: string): number {
    const hex = color.replace('#', '');
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    
    // Calculate relative luminance (https://www.w3.org/TR/WCAG20/#relativeluminancedef)
    const a = [r, g, b].map(v => {
      v /= 255;
      return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    
    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
  }

  private getAverageColor(imagePath: string): Observable<string> {
    return from(new Promise<string>((resolve, reject) => {
      const img = new Image();
      img.src = imagePath;
      
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          reject('Canvas not supported');
          return;
        }

        // Set canvas size to match image
        canvas.width = img.width;
        canvas.height = img.height;
        
        // Draw image to canvas
        ctx.drawImage(img, 0, 0);
        
        // Get image data
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;
        
        // Calculate average color
        let r = 0, g = 0, b = 0;
        for (let i = 0; i < data.length; i += 4) {
          r += data[i];
          g += data[i + 1];
          b += data[i + 2];
        }
        
        const numPixels = data.length / 4;
        r = Math.floor(r / numPixels);
        g = Math.floor(g / numPixels);
        b = Math.floor(b / numPixels);
        
        // Convert RGB to hex
        const avgColor = `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
        resolve(avgColor);
      };

      img.onerror = () => {
        reject('Image loading failed');
      };
    }));
  }

  getContrastColor(imagePath: string): Observable<string> {
    return this.getAverageColor(imagePath).pipe(
      map(avgColor => {
        const luminance = this.getLuminance(avgColor);
        // Return white text for dark backgrounds, black for light backgrounds
        return luminance > 0.5 ? '#000000' : '#ffffff';
      }),
      catchError(error => of('#ffffff')) // Fallback to white if anything fails
    );
  }
}
