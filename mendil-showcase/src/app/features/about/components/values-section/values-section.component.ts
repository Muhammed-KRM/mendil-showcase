import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal.directive';

interface Value {
  icon: string;
  title: string;
  desc: string;
  color: string;
}

@Component({
  selector: 'app-values-section',
  standalone: true,
  imports: [ScrollRevealDirective],
  template: `
    <div class="values-grid" role="list">
      @for (v of values; track v.title; let i = $index) {
        <div
          class="value-card"
          role="listitem"
          appScrollReveal
          [srDelay]="i * 0.08">
          <div class="value-icon-wrap" [style.background]="v.color" aria-hidden="true">
            <span>{{ v.icon }}</span>
          </div>
          <h3>{{ v.title }}</h3>
          <p>{{ v.desc }}</p>
        </div>
      }
    </div>
  `,
  styles: [`
    .values-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1.25rem;

      @media (min-width: 768px)  { grid-template-columns: repeat(3, 1fr); }
      @media (min-width: 1024px) { grid-template-columns: repeat(6, 1fr); }
    }

    .value-card {
      background: white;
      border-radius: 1.5rem;
      padding: 1.5rem 1.25rem;
      text-align: center;
      border: 1px solid #f1f5f9;
      transition: all 300ms;

      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 12px 32px rgba(0,0,0,0.08);
        border-color: rgba(14,165,233,0.2);
      }

      h3 {
        font-size: 0.875rem;
        font-weight: 700;
        color: var(--color-dark);
        margin: 0.75rem 0 0.5rem;
      }

      p {
        font-size: 0.8rem;
        color: #64748b;
        margin: 0;
        line-height: 1.5;
      }
    }

    .value-icon-wrap {
      width: 56px;
      height: 56px;
      border-radius: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto;
      font-size: 1.75rem;
    }
  `]
})
export class ValuesSectionComponent {
  values: Value[] = [
    { icon: '🌿', title: 'Sürdürülebilirlik', desc: 'Çevreye saygılı üretim ve ambalaj.',       color: '#D4F1E8' },
    { icon: '🔬', title: 'Kalite',             desc: 'Her ürün titizlikle test edilir.',          color: '#DBEAFE' },
    { icon: '❤️', title: 'Güven',              desc: 'Ailenizin sağlığı önceliğimiz.',           color: '#FCE7F3' },
    { icon: '🤝', title: 'Dürüstlük',          desc: 'Şeffaf ve dürüst iş anlayışı.',            color: '#FEF3C7' },
    { icon: '💡', title: 'İnovasyon',           desc: 'Sürekli gelişim ve yenilik.',              color: '#EDE9FE' },
    { icon: '🏆', title: 'Mükemmellik',         desc: 'En iyisini sunmak için çalışıyoruz.',     color: '#FFF7ED' },
  ];
}
