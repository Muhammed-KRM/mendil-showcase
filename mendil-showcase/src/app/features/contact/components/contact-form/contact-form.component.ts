import { Component, Output, EventEmitter, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
    <div class="form-wrap">
      <h2>Mesaj Gönderin</h2>

      @if (showSuccess()) {
        <div class="success-msg" role="alert" aria-live="polite">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
          Mesajınız başarıyla alındı! En kısa sürede dönüş yapacağız.
        </div>
      }

      <form (ngSubmit)="onSubmit(f)" #f="ngForm" novalidate>
        <div class="form-row">
          <div class="form-group">
            <label for="name">Ad Soyad <span aria-hidden="true">*</span></label>
            <input
              id="name"
              type="text"
              [(ngModel)]="formData.name"
              name="name"
              required
              minlength="2"
              placeholder="Adınız Soyadınız"
              [class.error]="f.submitted && f.controls['name']?.invalid"
              aria-required="true">
            @if (f.submitted && f.controls['name']?.invalid) {
              <span class="error-msg" role="alert">Ad Soyad zorunludur.</span>
            }
          </div>
          <div class="form-group">
            <label for="email">E-posta <span aria-hidden="true">*</span></label>
            <input
              id="email"
              type="email"
              [(ngModel)]="formData.email"
              name="email"
              required
              email
              placeholder="ornek@email.com"
              [class.error]="f.submitted && f.controls['email']?.invalid"
              aria-required="true">
            @if (f.submitted && f.controls['email']?.invalid) {
              <span class="error-msg" role="alert">Geçerli bir e-posta giriniz.</span>
            }
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label for="phone">Telefon</label>
            <input
              id="phone"
              type="tel"
              [(ngModel)]="formData.phone"
              name="phone"
              placeholder="0555 555 55 55">
          </div>
          <div class="form-group">
            <label for="subject">Konu <span aria-hidden="true">*</span></label>
            <select
              id="subject"
              [(ngModel)]="formData.subject"
              name="subject"
              required
              [class.error]="f.submitted && f.controls['subject']?.invalid"
              aria-required="true">
              <option value="">Konu seçin</option>
              <option value="urun">Ürün Bilgisi</option>
              <option value="toplu">Toplu Sipariş</option>
              <option value="kurumsal">Kurumsal İşbirliği</option>
              <option value="sikayet">Şikayet / Öneri</option>
              <option value="diger">Diğer</option>
            </select>
          </div>
        </div>

        <div class="form-group">
          <label for="message">Mesaj <span aria-hidden="true">*</span></label>
          <textarea
            id="message"
            [(ngModel)]="formData.message"
            name="message"
            required
            minlength="10"
            rows="5"
            placeholder="Mesajınızı buraya yazın..."
            [class.error]="f.submitted && f.controls['message']?.invalid"
            aria-required="true"></textarea>
          @if (f.submitted && f.controls['message']?.invalid) {
            <span class="error-msg" role="alert">Mesaj en az 10 karakter olmalıdır.</span>
          }
        </div>

        <button
          type="submit"
          class="btn-submit"
          [disabled]="isSubmitting()">
          @if (isSubmitting()) {
            <span class="spinner" aria-hidden="true"></span>
            Gönderiliyor...
          } @else {
            Mesaj Gönder
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <line x1="22" y1="2" x2="11" y2="13"/>
              <polygon points="22 2 15 22 11 13 2 9 22 2"/>
            </svg>
          }
        </button>
      </form>
    </div>
  `,
  styles: [`
    .form-wrap h2 {
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--color-dark);
      margin: 0 0 1.5rem;
    }

    .success-msg {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      background: #f0fdf4;
      border: 1px solid #bbf7d0;
      border-radius: 1rem;
      padding: 1rem 1.25rem;
      color: #166534;
      font-size: 0.9rem;
      margin-bottom: 1.5rem;
    }

    .form-row {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1rem;
      margin-bottom: 1rem;

      @media (min-width: 640px) { grid-template-columns: repeat(2, 1fr); }
    }

    .form-group {
      display: flex;
      flex-direction: column;
      gap: 0.375rem;
      margin-bottom: 1rem;

      label {
        font-size: 0.875rem;
        font-weight: 600;
        color: var(--color-dark);
        span { color: var(--color-error); }
      }

      input, select, textarea {
        padding: 0.75rem 1rem;
        border: 1.5px solid #e2e8f0;
        border-radius: 1rem;
        font-size: 0.9375rem;
        color: var(--color-dark);
        background: white;
        transition: all 150ms;
        font-family: inherit;
        width: 100%;

        &:focus {
          outline: none;
          border-color: var(--color-primary);
          box-shadow: 0 0 0 3px rgba(14,165,233,0.1);
        }

        &.error { border-color: var(--color-error); }
        &::placeholder { color: #94a3b8; }
      }

      textarea { resize: vertical; min-height: 120px; }
    }

    .error-msg {
      font-size: 0.8rem;
      color: var(--color-error);
    }

    .btn-submit {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      width: 100%;
      padding: 0.875rem;
      background: var(--color-primary);
      color: white;
      border: none;
      border-radius: 9999px;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 300ms;
      box-shadow: 0 4px 16px rgba(14,165,233,0.3);
      font-family: inherit;

      &:hover:not(:disabled) {
        background: var(--color-primary-dark);
        transform: translateY(-1px);
        box-shadow: 0 8px 24px rgba(14,165,233,0.4);
      }

      &:disabled { opacity: 0.6; cursor: not-allowed; }
    }

    .spinner {
      width: 18px;
      height: 18px;
      border: 2px solid rgba(255,255,255,0.3);
      border-top-color: white;
      border-radius: 50%;
      animation: spin 0.8s linear infinite;
    }

    @keyframes spin { to { transform: rotate(360deg); } }
  `]
})
export class ContactFormComponent {
  @Output() formSubmitted = new EventEmitter<ContactFormData>();

  formData: ContactFormData = { name: '', email: '', phone: '', subject: '', message: '' };
  isSubmitting = signal(false);
  showSuccess = signal(false);

  onSubmit(form: NgForm): void {
    if (form.invalid) return;

    this.isSubmitting.set(true);
    setTimeout(() => {
      this.formSubmitted.emit({ ...this.formData });
      this.isSubmitting.set(false);
      this.showSuccess.set(true);
      form.resetForm();
      this.formData = { name: '', email: '', phone: '', subject: '', message: '' };
      setTimeout(() => this.showSuccess.set(false), 6000);
    }, 1500);
  }
}
