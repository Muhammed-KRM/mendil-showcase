import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal.directive';

interface Certification {
  name: string;
  desc: string;
  icon: string;
  color: string;
}

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [ScrollRevealDirective],
  template: `
    <div class="certs-grid" role="list">
      @for (c of certifications; track c.name; let i = $index) {
        <div class="cert-card" role="listitem" appScrollReveal [srDelay]="i * 0.1">
          <div class="cert-icon-wrap" [style.background]="c.color" aria-hidden="true">
            <span>{{ c.icon }}</span>
          </div>
          <h3>{{ c.name }}</h3>
          <p>{{ c.desc }}</p>
        </div>
      }
    </div>
  `,
  styles: [`
    .certs-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1.25rem;

      @media (min-width: 768px) { grid-template-columns: repeat(4, 1fr); }
    }

    .cert-card {
      background: white;
      border-radius: 1.5rem;
      padding: 2rem 1.5rem;
      text-align: center;
      border: 1px solid #f1f5f9;
      transition: all 300ms;

      &:hover {
        transform: translateY(-4px);
        box-shadow: 0 12px 32px rgba(0,0,0,0.08);
      }

      h3 {
        font-size: 1rem;
        font-weight: 700;
        color: var(--color-dark);
        margin: 0.75rem 0 0.5rem;
      }

      p {
        font-size: 0.8125rem;
        color: #64748b;
        margin: 0;
      }
    }

    .cert-icon-wrap {
      width: 64px;
      height: 64px;
      border-radius: 1.25rem;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto;
      font-size: 2rem;
    }
  `]
})
export class CertificationsComponent {
  certifications: Certification[] = [
    { name: 'ISO 9001:2015', desc: 'Kalite Yönetim Sistemi',   icon: '🏅', color: '#DBEAFE' },
    { name: 'ISO 14001:2015', desc: 'Çevre Yönetim Sistemi',  icon: '🌿', color: '#D4F1E8' },
    { name: 'TSE',            desc: 'Türk Standartları',       icon: '🇹🇷', color: '#FEE2E2' },
    { name: 'Dermatoljik',    desc: 'Hassas Cilt Onaylı',      icon: '🔬', color: '#EDE9FE' },
  ];
}
