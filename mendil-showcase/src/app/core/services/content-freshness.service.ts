import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ContentFreshnessService {

  private lastModified: Record<string, string> = {
    home:     '2026-05-04',
    products: '2026-05-04',
    about:    '2026-05-04',
    contact:  '2026-05-04',
  };

  getLastModified(pageId: string): Date {
    return new Date(this.lastModified[pageId] || '2026-05-04');
  }

  formatLastModified(date: Date): string {
    const diffDays = Math.ceil(
      Math.abs(new Date().getTime() - date.getTime()) / (1000 * 60 * 60 * 24)
    );
    if (diffDays === 0) return 'Bugün güncellendi';
    if (diffDays === 1) return 'Dün güncellendi';
    if (diffDays < 7)  return `${diffDays} gün önce güncellendi`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} hafta önce güncellendi`;
    return date.toLocaleDateString('tr-TR');
  }
}
