import { Injectable, inject } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { DOCUMENT } from '@angular/common';

declare let gtag: Function;

@Injectable({ providedIn: 'root' })
export class AnalyticsService {
  private doc = inject(DOCUMENT);
  private router = inject(Router);
  private readonly GA_ID = 'G-XXXXXXXXXX'; // Gerçek ID ile değiştir
  private isInitialized = false;

  init(): void {
    if (this.isInitialized || typeof window === 'undefined') return;

    // Consent kontrolü
    const consent = this.getConsent();
    if (!consent?.analytics) return;

    this.loadGtag();
    this.trackPageViews();
    this.isInitialized = true;
  }

  trackPageView(url: string): void {
    if (!this.hasGtag()) return;
    gtag('config', this.GA_ID, {
      page_path: url,
      anonymize_ip: true
    });
  }

  trackEvent(category: string, action: string, label?: string, value?: number): void {
    if (!this.hasGtag()) return;
    gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value
    });
  }

  trackContactForm(): void {
    this.trackEvent('engagement', 'contact_form_submit', 'contact_page');
  }

  trackProductView(productName: string): void {
    this.trackEvent('product', 'view', productName);
  }

  private loadGtag(): void {
    const script = this.doc.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${this.GA_ID}`;
    this.doc.head.appendChild(script);

    const inlineScript = this.doc.createElement('script');
    inlineScript.text = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${this.GA_ID}', {
        'anonymize_ip': true,
        'cookie_flags': 'SameSite=None;Secure'
      });
    `;
    this.doc.head.appendChild(inlineScript);
  }

  private trackPageViews(): void {
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd)
    ).subscribe((e: any) => {
      this.trackPageView(e.urlAfterRedirects);
    });
  }

  private hasGtag(): boolean {
    return typeof gtag !== 'undefined';
  }

  private getConsent(): any {
    try {
      const stored = localStorage.getItem('cookie-consent');
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  }
}
