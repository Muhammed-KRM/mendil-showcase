import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Milestone {
  year: string;
  title: string;
  desc: string;
  icon: string;
}

@Component({
  selector: 'app-company-history',
  standalone: true,
  template: `
    <div class="timeline" role="list" aria-label="Şirket tarihçesi">
      @for (m of milestones; track m.year; let i = $index) {
        <div
          class="timeline-item"
          [class.right]="i % 2 !== 0"
          role="listitem">
          <div class="timeline-content">
            <div class="timeline-icon" aria-hidden="true">{{ m.icon }}</div>
            <span class="timeline-year">{{ m.year }}</span>
            <h3>{{ m.title }}</h3>
            <p>{{ m.desc }}</p>
          </div>
          <div class="timeline-dot" aria-hidden="true"></div>
        </div>
      }
    </div>
  `,
  styles: [`
    .timeline {
      position: relative;
      max-width: 760px;
      margin: 0 auto;

      &::before {
        content: '';
        position: absolute;
        left: 50%;
        top: 0;
        bottom: 0;
        width: 2px;
        background: linear-gradient(to bottom, #0EA5E9, #10B981);
        transform: translateX(-50%);

        @media (max-width: 767px) { left: 1.5rem; }
      }
    }

    .timeline-item {
      display: flex;
      justify-content: flex-end;
      padding-right: calc(50% + 2.5rem);
      margin-bottom: 2.5rem;
      position: relative;

      @media (max-width: 767px) {
        padding-right: 0;
        padding-left: 4rem;
        justify-content: flex-start;
      }

      &.right {
        justify-content: flex-start;
        padding-right: 0;
        padding-left: calc(50% + 2.5rem);

        @media (max-width: 767px) { padding-left: 4rem; }
      }
    }

    .timeline-content {
      background: white;
      border-radius: 1.25rem;
      padding: 1.5rem;
      border: 1px solid #f1f5f9;
      box-shadow: 0 4px 16px rgba(0,0,0,0.06);
      max-width: 300px;
      width: 100%;
      transition: all 300ms;

      &:hover {
        transform: translateY(-3px);
        box-shadow: 0 8px 24px rgba(0,0,0,0.1);
        border-color: rgba(14,165,233,0.2);
      }

      h3 {
        font-size: 1rem;
        font-weight: 700;
        color: var(--color-dark);
        margin: 0.25rem 0 0.5rem;
      }

      p {
        font-size: 0.875rem;
        color: #64748b;
        margin: 0;
        line-height: 1.6;
      }
    }

    .timeline-icon {
      font-size: 1.75rem;
      margin-bottom: 0.5rem;
    }

    .timeline-year {
      font-size: 0.8rem;
      font-weight: 700;
      color: var(--color-primary);
      letter-spacing: 0.06em;
      text-transform: uppercase;
    }

    .timeline-dot {
      position: absolute;
      left: 50%;
      top: 1.5rem;
      width: 16px;
      height: 16px;
      background: var(--color-primary);
      border-radius: 50%;
      transform: translateX(-50%);
      border: 3px solid white;
      box-shadow: 0 0 0 2px var(--color-primary);

      @media (max-width: 767px) { left: 1.5rem; }
    }
  `]
})
export class CompanyHistoryComponent implements AfterViewInit, OnDestroy {
  milestones: Milestone[] = [
    { year: '2010', title: 'Kuruluş',         icon: '🏭', desc: 'İstanbul\'da küçük bir fabrikayla başladık. İlk ürünümüz hassas cilt ıslak mendiliydi.' },
    { year: '2013', title: 'İlk Büyüme',      icon: '📈', desc: 'Üretim kapasitemizi 3 katına çıkardık. Türkiye genelinde dağıtım ağımızı kurduk.' },
    { year: '2016', title: 'ISO 9001',         icon: '🏅', desc: 'Kalite yönetim sistemi sertifikamızı aldık. Ürün kalitemizi uluslararası standartlara taşıdık.' },
    { year: '2019', title: 'Eco-Friendly',     icon: '🌿', desc: 'Çevre dostu üretim sürecine geçtik. %100 geri dönüştürülebilir ambalaj kullanmaya başladık.' },
    { year: '2022', title: 'Dijital Dönüşüm', icon: '💻', desc: 'Online platformlarda güçlü varlık oluşturduk. E-ticaret kanallarımızı açtık.' },
    { year: '2026', title: 'Bugün',            icon: '🚀', desc: '1 milyon+ mutlu müşteri ile büyümeye devam ediyoruz. Yeni ürün serimizi hazırlıyoruz.' },
  ];

  private triggers: ScrollTrigger[] = [];

  ngAfterViewInit(): void {
    const items = document.querySelectorAll('.timeline-item');
    items.forEach((item, i) => {
      const trig = ScrollTrigger.create({
        trigger: item,
        start: 'top 85%',
        onEnter: () => {
          gsap.from(item.querySelector('.timeline-content'), {
            opacity: 0,
            x: i % 2 === 0 ? -30 : 30,
            duration: 0.6,
            ease: 'power3.out',
            delay: 0.05
          });
        }
      });
      this.triggers.push(trig);
    });
  }

  ngOnDestroy(): void {
    this.triggers.forEach(t => t.kill());
  }
}
