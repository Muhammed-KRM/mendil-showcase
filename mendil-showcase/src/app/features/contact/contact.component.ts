import { Component, OnInit, inject } from '@angular/core';
import { SeoService } from '../../core/services/seo.service';
import { StructuredDataService } from '../../core/services/structured-data.service';
import { AnalyticsService } from '../../core/services/analytics.service';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';
import { ContactInfoComponent } from './components/contact-info/contact-info.component';
import { MapSectionComponent } from './components/map-section/map-section.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    ScrollRevealDirective,
    ContactInfoComponent,
    MapSectionComponent
  ],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  private seo = inject(SeoService);
  private structuredData = inject(StructuredDataService);
  private analytics = inject(AnalyticsService);

  ngOnInit(): void {
    this.seo.updateMetaTags({
      title: 'İletişim',
      description: 'Mendil Markası ile iletişime geçin. Adres, telefon ve e-posta bilgilerimiz.',
      url: 'https://mendimarkasi.com/iletisim'
    });

    this.structuredData.addLocalBusinessSchema();
  }


}
