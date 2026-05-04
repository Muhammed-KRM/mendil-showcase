import { Injectable, signal, computed } from '@angular/core';

export interface CookieConsent {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  timestamp: string;
}

@Injectable({ providedIn: 'root' })
export class CookieConsentService {
  private _consent = signal<CookieConsent | null>(this.loadFromStorage());

  // Public signals
  consent = this._consent.asReadonly();
  hasConsented = computed(() => this._consent() !== null);
  hasAnalyticsConsent = computed(() => this._consent()?.analytics === true);
  hasMarketingConsent = computed(() => this._consent()?.marketing === true);

  acceptAll(): void {
    this.save({ necessary: true, analytics: true, marketing: true, timestamp: new Date().toISOString() });
  }

  rejectAll(): void {
    this.save({ necessary: true, analytics: false, marketing: false, timestamp: new Date().toISOString() });
  }

  updateConsent(partial: Partial<CookieConsent>): void {
    const current = this._consent() ?? { necessary: true, analytics: false, marketing: false, timestamp: '' };
    this.save({ ...current, ...partial, timestamp: new Date().toISOString() });
  }

  reset(): void {
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem('cookie-consent');
    }
    this._consent.set(null);
  }

  private save(consent: CookieConsent): void {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('cookie-consent', JSON.stringify(consent));
    }
    this._consent.set(consent);
  }

  private loadFromStorage(): CookieConsent | null {
    if (typeof localStorage === 'undefined') return null;
    try {
      const stored = localStorage.getItem('cookie-consent');
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  }
}
