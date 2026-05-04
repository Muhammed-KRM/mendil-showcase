import { Injectable } from '@angular/core';
import { Breadcrumb } from '../models/breadcrumb.model';

@Injectable({ providedIn: 'root' })
export class InternalLinkService {

  generateBreadcrumbs(route: string): Breadcrumb[] {
    const paths = route.split('/').filter(p => p);
    const breadcrumbs: Breadcrumb[] = [{ label: 'Ana Sayfa', url: '/' }];

    let currentPath = '';
    paths.forEach(path => {
      currentPath += `/${path}`;
      breadcrumbs.push({ label: this.getPageTitle(path), url: currentPath });
    });

    return breadcrumbs;
  }

  private getPageTitle(path: string): string {
    const titles: Record<string, string> = {
      'urunler':           'Ürünlerimiz',
      'hakkimizda':        'Hakkımızda',
      'iletisim':          'İletişim',
      'yasal':             'Yasal',
      'kvkk':              'KVKK Aydınlatma Metni',
      'kvkk-basvuru':      'KVKK Başvuru Formu',
      'cerez-politikasi':  'Çerez Politikası',
      'gizlilik-politikasi': 'Gizlilik Politikası',
      'kullanim-kosullari': 'Kullanım Koşulları',
    };
    return titles[path] || path;
  }
}
