import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { environment } from '../../environments/environment';

@Component({
  selector: 'brew-request-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="brew-request-form">
      <h2>Request a Brew</h2>
      <form (ngSubmit)="submitForm()" #brewForm="ngForm" novalidate>
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" id="name" name="name" [(ngModel)]="form.name" required class="form-control" />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" name="email" [(ngModel)]="form.email" required class="form-control" />
        </div>
        <div class="form-group">
          <label for="message">Your Brew Request</label>
          <textarea id="message" name="message" [(ngModel)]="form.message" rows="5" required class="form-control"></textarea>
        </div>
        <button type="submit" class="btn btn-primary" [disabled]="loading || !brewForm.form.valid">Send Request</button>
        <div *ngIf="successMessage" class="success-message">{{successMessage}}</div>
        <div *ngIf="errorMessage" class="error-message">{{errorMessage}}</div>
      </form>
    </div>
  `,
  styleUrls: ['./brew-request-form.component.scss']
})
export class BrewRequestFormComponent {
  @Output() formSuccess = new EventEmitter<void>();
  form = {
    name: '',
    email: '',
    message: ''
  };
  loading = false;
  successMessage = '';
  errorMessage = '';

  // TODO: Replace these with your actual EmailJS credentials
  private EMAILJS_SERVICE_ID = environment.EMAILJS_SERVICE_ID;
  private EMAILJS_TEMPLATE_ID = environment.EMAILJS_TEMPLATE_ID;
  private EMAILJS_USER_ID = environment.EMAILJS_USER_ID;

  submitForm() {
    if (!this.form.name || !this.form.email || !this.form.message) {
      this.errorMessage = 'Please fill out all fields.';
      return;
    }
    this.loading = true;
    this.errorMessage = '';
    this.successMessage = '';

    emailjs.send(
      this.EMAILJS_SERVICE_ID,
      this.EMAILJS_TEMPLATE_ID,
      {
        name: this.form.name,
        email: this.form.email,
        message: this.form.message,
        time: new Date().toLocaleString()
      },
      this.EMAILJS_USER_ID
    ).then((result: EmailJSResponseStatus) => {
      this.loading = false;
      this.successMessage = 'Your brew request has been sent!';
      this.form = { name: '', email: '', message: '' };
      setTimeout(() => {
        this.formSuccess.emit();
      }, 5000);
    }, (error) => {
      this.loading = false;
      this.errorMessage = 'Failed to send request. Please try again later.';
    });
  }
}
