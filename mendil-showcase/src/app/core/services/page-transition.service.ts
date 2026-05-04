import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { gsap } from 'gsap';

@Injectable({ providedIn: 'root' })
export class PageTransitionService {
  private router   = inject(Router);
  private platform = inject(PLATFORM_ID);

  constructor() {
    if (!isPlatformBrowser(this.platform)) return;
    this.setupTransitions();
  }

  private setupTransitions(): void {
    this.router.events.pipe(filter(e => e instanceof NavigationStart)).subscribe(() => {
      gsap.to('.page-content', { opacity: 0, y: -20, duration: 0.25, ease: 'power2.in' });
    });

    this.router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe(() => {
      window.scrollTo({ top: 0, behavior: 'instant' });
      gsap.fromTo('.page-content',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out', delay: 0.05 }
      );
    });
  }
}
