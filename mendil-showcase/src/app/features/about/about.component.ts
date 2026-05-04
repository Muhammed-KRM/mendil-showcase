import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../core/services/seo.service';
import { StructuredDataService } from '../../core/services/structured-data.service';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';
import { CompanyHistoryComponent } from './components/company-history/company-history.component';
import { ValuesSectionComponent } from './components/values-section/values-section.component';
import { ProductionProcessComponent } from './components/production-process/production-process.component';
import { CertificationsComponent } from './components/certifications/certifications.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    RouterLink,
    ScrollRevealDirective,
    CompanyHistoryComponent,
    ValuesSectionComponent,
    ProductionProcessComponent,
    CertificationsComponent
  ],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  private seo = inject(SeoService);
  private structuredData = inject(StructuredDataService);

  ngOnInit(): void {
    this.seo.updateMetaTags({
      title: 'Hakkımızda',
      description: '2010\'dan bu yana kaliteli mendil üretimi. Doğa dostu, ISO sertifikalı, Türkiye\'nin güvenilir mendil markası.',
      url: 'https://mendimarkasi.com/hakkimizda'
    });

    this.structuredData.addOrganizationSchema();
  }
}
