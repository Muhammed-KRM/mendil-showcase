import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal.directive';

interface Step {
  step: number;
  icon: string;
  title: string;
  desc: string;
}

@Component({
  selector: 'app-production-process',
  standalone: true,
  imports: [ScrollRevealDirective],
  template: `
    <div class="process-wrap">
      <div class="process-steps" role="list">
        @for (s of steps; track s.step; let i = $index; let last = $last) {
          <div class="process-step" role="listitem" appScrollReveal [srDelay]="i * 0.1">
            <div class="step-icon" aria-hidden="true">{{ s.icon }}</div>
            <div class="step-number" aria-hidden="true">{{ s.step }}</div>
            <h3>{{ s.title }}</h3>
            <p>{{ s.desc }}</p>
          </div>
          @if (!last) {
            <div class="step-arrow" aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </div>
          }
        }
      </div>
    </div>
  `,
  styles: [`
    .process-wrap {
      overflow-x: auto;
      padding-bottom: 1rem;
    }

    .process-steps {
      display: flex;
      align-items: flex-start;
      gap: 0;
      min-width: 600px;
    }

    .process-step {
      flex: 1;
      text-align: center;
      padding: 1.5rem 1rem;
      position: relative;

      h3 {
        font-size: 0.9rem;
        font-weight: 700;
        color: var(--color-dark);
        margin: 0.5rem 0 0.375rem;
      }

      p {
        font-size: 0.8rem;
        color: #64748b;
        margin: 0;
        line-height: 1.5;
      }
    }

    .step-icon {
      font-size: 2.5rem;
      display: block;
      margin-bottom: 0.5rem;
    }

    .step-number {
      width: 28px;
      height: 28px;
      background: var(--color-primary);
      color: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.8rem;
      font-weight: 700;
      margin: 0 auto 0.5rem;
    }

    .step-arrow {
      display: flex;
      align-items: center;
      padding-top: 2.5rem;
      color: #cbd5e1;
      flex-shrink: 0;
    }
  `]
})
export class ProductionProcessComponent {
  steps: Step[] = [
    { step: 1, icon: '🌱', title: 'Hammadde Seçimi',   desc: 'Sertifikalı, doğa dostu hammaddeler temin edilir.' },
    { step: 2, icon: '🏭', title: 'Üretim',             desc: 'ISO standartlarında hijyenik üretim.' },
    { step: 3, icon: '🔬', title: 'Kalite Kontrol',     desc: 'Her parti dermatoljik testlerden geçer.' },
    { step: 4, icon: '📦', title: 'Paketleme',          desc: 'Geri dönüştürülebilir ambalajlama.' },
    { step: 5, icon: '🚚', title: 'Dağıtım',            desc: 'Türkiye genelinde hızlı teslimat.' },
  ];
}
