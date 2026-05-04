import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class WebVitalsService {

  init(): void {
    if (typeof window === 'undefined') return;

    // Dynamic import to avoid SSR issues
    import('web-vitals').then(({ onCLS, onINP, onLCP, onFCP, onTTFB }) => {
      onCLS(this.sendToAnalytics.bind(this));
      onINP(this.sendToAnalytics.bind(this));
      onLCP(this.sendToAnalytics.bind(this));
      onFCP(this.sendToAnalytics.bind(this));
      onTTFB(this.sendToAnalytics.bind(this));
    }).catch(() => {
      // web-vitals not available, skip
    });
  }

  private sendToAnalytics(metric: any): void {
    // Log to console in development
    if (typeof console !== 'undefined') {
      const rating = metric.rating ?? 'unknown';
      const color = rating === 'good' ? '✅' : rating === 'needs-improvement' ? '⚠️' : '❌';
      console.log(`${color} ${metric.name}: ${Math.round(metric.value)}ms (${rating})`);
    }

    // Send to Google Analytics if available
    if (typeof (window as any).gtag !== 'undefined') {
      (window as any).gtag('event', metric.name, {
        event_category: 'Web Vitals',
        event_label: metric.id,
        value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
        non_interaction: true
      });
    }
  }
}
