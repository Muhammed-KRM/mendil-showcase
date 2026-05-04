import { Injectable, signal, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { DOCUMENT } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class MobileOptimizationService {
  private doc      = inject(DOCUMENT);
  private platform = inject(PLATFORM_ID);

  isMobile  = signal(false);
  isTablet  = signal(false);
  isDesktop = signal(true);

  constructor() {
    if (!isPlatformBrowser(this.platform)) return;
    this.detectDevice();
    window.addEventListener('resize', () => this.detectDevice());
    window.addEventListener('orientationchange', () => setTimeout(() => this.detectDevice(), 100));
  }

  private detectDevice(): void {
    const w = window.innerWidth;
    this.isMobile.set(w < 768);
    this.isTablet.set(w >= 768 && w < 1024);
    this.isDesktop.set(w >= 1024);
    this.doc.documentElement.classList.toggle('mobile-device', w < 768);
  }

  getAnimationDuration(): number { return this.isMobile() ? 0.3 : 0.6; }

  shouldLoadVideo(): boolean {
    if (!isPlatformBrowser(this.platform) || !this.isMobile()) return true;
    return (navigator as any).connection?.effectiveType === '4g';
  }

  getImageSize(): 'small' | 'medium' | 'large' {
    if (this.isMobile()) return 'small';
    if (this.isTablet()) return 'medium';
    return 'large';
  }
}
