import { Component } from '@angular/core';

interface ContactItem {
  icon: string;
  label: string;
  value: string;
  href?: string;
  isMultiLine?: boolean;
}

@Component({
  selector: 'app-contact-info',
  standalone: true,
  template: `
    <div class="contact-info-wrap">
      <h2>İletişim Bilgileri</h2>
      <div class="info-list">
        @for (item of items; track item.label) {
          <div class="info-item">
            <div class="info-icon" aria-hidden="true">{{ item.icon }}</div>
            <div class="info-text">
              <strong>{{ item.label }}</strong>
              @if (item.href) {
                <a [href]="item.href">{{ item.value }}</a>
              } @else {
                <span [innerHTML]="item.value"></span>
              }
            </div>
          </div>
        }
      </div>
    </div>
  `,
  styles: [`
    .contact-info-wrap h2 {
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--color-dark);
      margin: 0 0 1.5rem;
    }

    .info-list {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .info-item {
      display: flex;
      align-items: flex-start;
      gap: 1rem;
      padding: 1rem;
      background: #f8fafc;
      border-radius: 1rem;
      border: 1px solid #f1f5f9;
      transition: all 150ms;

      &:hover {
        border-color: rgba(14,165,233,0.2);
        box-shadow: 0 4px 12px rgba(14,165,233,0.08);
      }
    }

    .info-icon {
      font-size: 1.5rem;
      width: 44px;
      height: 44px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: white;
      border-radius: 0.75rem;
      box-shadow: 0 2px 8px rgba(0,0,0,0.06);
      flex-shrink: 0;
    }

    .info-text {
      display: flex;
      flex-direction: column;
      gap: 0.2rem;

      strong {
        font-size: 0.875rem;
        font-weight: 700;
        color: var(--color-dark);
      }

      span, a {
        font-size: 0.875rem;
        color: #64748b;
        text-decoration: none;
        line-height: 1.5;

        &:hover { color: var(--color-primary); }
      }
    }
  `]
})
export class ContactInfoComponent {
  items: ContactItem[] = [
    {
      icon: '📍',
      label: 'Adres',
      value: 'Örnek Mahallesi, Örnek Sokak No:1<br>Bağcılar, İstanbul 34200',
      isMultiLine: true
    },
    {
      icon: '📞',
      label: 'Telefon',
      value: '+90 212 000 00 00',
      href: 'tel:+902120000000'
    },
    {
      icon: '✉️',
      label: 'E-posta',
      value: 'info@mendimarkasi.com',
      href: 'mailto:info@mendimarkasi.com'
    },
    {
      icon: '🕐',
      label: 'Çalışma Saatleri',
      value: 'Pazartesi - Cuma: 09:00 - 18:00'
    }
  ];
}
