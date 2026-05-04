import { Component, OnInit, inject } from '@angular/core';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { FeaturedProductsComponent } from './components/featured-products/featured-products.component';
import { BrandStoryComponent } from './components/brand-story/brand-story.component';
import { FeaturesSectionComponent } from './components/features-section/features-section.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { CtaSectionComponent } from './components/cta-section/cta-section.component';
import { SeoService } from '../../core/services/seo.service';
import { StructuredDataService } from '../../core/services/structured-data.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroSectionComponent,
    FeaturedProductsComponent,
    BrandStoryComponent,
    FeaturesSectionComponent,
    TestimonialsComponent,
    CtaSectionComponent
  ],
  template: `
    <app-hero-section />
    <app-featured-products />
    <app-brand-story />
    <app-features-section />
    <app-testimonials />
    <app-cta-section />
  `
})
export class HomeComponent implements OnInit {
  private seo = inject(SeoService);
  private structuredData = inject(StructuredDataService);

  ngOnInit(): void {
    this.seo.updateMetaTags({
      title: 'Ana Sayfa - Yumuşaklığın Dokunuşu',
      description: 'Doğa dostu, hijyenik ve yumuşak mendiller. Islak mendil, kağıt mendil ve daha fazlası. Türkiye\'nin en kaliteli mendil markası.',
      keywords: 'mendil, ıslak mendil, kağıt mendil, hijyenik mendil, bebek mendili, doğa dostu mendil',
      url: 'https://mendimarkasi.com'
    });

    this.structuredData.addOrganizationSchema();
    this.structuredData.addLocalBusinessSchema();
  }
}
