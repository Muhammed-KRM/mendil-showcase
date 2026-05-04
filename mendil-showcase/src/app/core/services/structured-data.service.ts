import { Injectable, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class StructuredDataService {
  private doc = inject(DOCUMENT);

  addOrganizationSchema(): void {
    this.insertSchema({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      'name': 'Mendil Markası',
      'url': 'https://mendimarkasi.com',
      'logo': 'https://mendimarkasi.com/assets/images/logo/logo.png',
      'description': 'Doğa dostu, hijyenik ve yumuşak mendiller. Islak mendil, kağıt mendil ve daha fazlası.',
      'contactPoint': {
        '@type': 'ContactPoint',
        'telephone': '+90-212-XXX-XXXX',
        'contactType': 'customer service',
        'areaServed': 'TR',
        'availableLanguage': ['Turkish']
      },
      'sameAs': [
        'https://www.facebook.com/mendimarkasi',
        'https://www.instagram.com/mendimarkasi',
        'https://twitter.com/mendimarkasi',
        'https://www.linkedin.com/company/mendimarkasi'
      ]
    }, 'organization-schema');
  }

  addLocalBusinessSchema(): void {
    this.insertSchema({
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      'name': 'Mendil Markası',
      'image': 'https://mendimarkasi.com/assets/images/logo/logo.png',
      '@id': 'https://mendimarkasi.com',
      'url': 'https://mendimarkasi.com',
      'telephone': '+90-212-XXX-XXXX',
      'priceRange': '$',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'Örnek Mahallesi, Örnek Sokak No:1',
        'addressLocality': 'İstanbul',
        'postalCode': '34000',
        'addressCountry': 'TR'
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': 41.0082,
        'longitude': 28.9784
      },
      'openingHoursSpecification': {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        'opens': '09:00',
        'closes': '18:00'
      }
    }, 'local-business-schema');
  }

  addProductSchema(product: any): void {
    this.insertSchema({
      '@context': 'https://schema.org',
      '@type': 'Product',
      'name': product.name,
      'image': product.image,
      'description': product.description,
      'brand': { '@type': 'Brand', 'name': 'Mendil Markası' },
      'offers': {
        '@type': 'Offer',
        'availability': 'https://schema.org/InStock',
        'priceCurrency': 'TRY'
      }
    }, `product-schema-${product.id}`);
  }

  addBreadcrumbSchema(breadcrumbs: Array<{ name: string; url: string }>): void {
    this.insertSchema({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': breadcrumbs.map((item, index) => ({
        '@type': 'ListItem',
        'position': index + 1,
        'name': item.name,
        'item': item.url
      }))
    }, 'breadcrumb-schema');
  }

  addFAQSchema(faqs: Array<{ question: string; answer: string }>): void {
    this.insertSchema({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': faqs.map(faq => ({
        '@type': 'Question',
        'name': faq.question,
        'acceptedAnswer': { '@type': 'Answer', 'text': faq.answer }
      }))
    }, 'faq-schema');
  }

  removeSchema(id: string): void {
    const el = this.doc.getElementById(id);
    if (el) el.remove();
  }

  private insertSchema(schema: object, id: string): void {
    this.removeSchema(id);
    const script = this.doc.createElement('script');
    script.type = 'application/ld+json';
    script.id = id;
    script.text = JSON.stringify(schema);
    this.doc.head.appendChild(script);
  }
}
