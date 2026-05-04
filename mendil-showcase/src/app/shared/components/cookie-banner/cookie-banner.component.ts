import { Component, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface CookieCategory {
  id: string;
  name: string;
  description: string;
  required: boolean;
  enabled: boolean;
}

@Component({
  selector: 'app-cookie-banner',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cookie-banner.component.html',
  styleUrls: ['./cookie-banner.component.scss']
})
export class CookieBannerComponent implements OnInit {
  isVisible  = signal(false);
  showModal  = signal(false);

  categories = signal<CookieCategory[]>([
    {
      id: 'necessary',
      name: 'Zorunlu Çerezler',
      description: 'Web sitesinin temel işlevleri için gereklidir. Devre dışı bırakılamaz.',
      required: true,
      enabled: true
    },
    {
      id: 'analytics',
      name: 'Analitik Çerezler',
      description: 'Site kullanımını analiz etmek ve deneyimi iyileştirmek için kullanılır (Google Analytics).',
      required: false,
      enabled: false
    },
    {
      id: 'marketing',
      name: 'Pazarlama Çerezleri',
      description: 'Kişiselleştirilmiş içerik ve reklamlar göstermek için kullanılır.',
      required: false,
      enabled: false
    }
  ]);

  ngOnInit(): void {
    if (typeof localStorage !== 'undefined') {
      const stored = localStorage.getItem('cookie-consent');
      if (!stored) {
        setTimeout(() => this.isVisible.set(true), 1500);
      }
    }
  }

  acceptAll(): void {
    this.saveConsent({ necessary: true, analytics: true, marketing: true });
  }

  rejectAll(): void {
    this.saveConsent({ necessary: true, analytics: false, marketing: false });
  }

  openModal(): void {
    this.showModal.set(true);
  }

  closeModal(): void {
    this.showModal.set(false);
  }

  toggleCategory(id: string): void {
    this.categories.update(cats =>
      cats.map(c => c.id === id && !c.required ? { ...c, enabled: !c.enabled } : c)
    );
  }

  saveSettings(): void {
    const consent: Record<string, boolean> = {};
    this.categories().forEach(c => { consent[c.id] = c.enabled; });
    this.saveConsent(consent);
    this.closeModal();
  }

  private saveConsent(consent: Record<string, boolean>): void {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('cookie-consent', JSON.stringify({
        ...consent,
        timestamp: new Date().toISOString()
      }));
    }
    this.isVisible.set(false);
  }
}
