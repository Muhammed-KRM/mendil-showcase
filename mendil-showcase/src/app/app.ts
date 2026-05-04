import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { CookieBannerComponent } from './shared/components/cookie-banner/cookie-banner.component';
import { PageTransitionService } from './core/services/page-transition.service';
import { MobileOptimizationService } from './core/services/mobile-optimization.service';
import { AnalyticsService } from './core/services/analytics.service';
import { WebVitalsService } from './core/services/web-vitals.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    FooterComponent,
    CookieBannerComponent
  ],
  template: `
    <a href="#main-content" class="skip-to-main">Ana içeriğe geç</a>
    <div class="scroll-progress-bar" aria-hidden="true"></div>

    <app-navbar />

    <main id="main-content" class="page-content">
      <router-outlet />
    </main>

    <app-footer />
    <app-cookie-banner />
  `,
  styles: [`
    .page-content {
      min-height: 100vh;
    }
  `]
})
export class AppComponent implements OnInit {
  private pageTransition = inject(PageTransitionService);
  private mobileOpt = inject(MobileOptimizationService);
  private analytics = inject(AnalyticsService);
  private webVitals = inject(WebVitalsService);

  ngOnInit(): void {
    // Initialize analytics (checks cookie consent first)
    this.analytics.init();
    // Initialize Web Vitals tracking
    this.webVitals.init();
  }
}
