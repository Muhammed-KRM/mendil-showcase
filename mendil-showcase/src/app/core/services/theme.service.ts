import { Injectable, signal, effect, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

export type Theme = 'light' | 'dark';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private doc = inject(DOCUMENT);

  theme = signal<Theme>(this.getStoredTheme());

  constructor() {
    effect(() => {
      const t = this.theme();
      this.doc.documentElement.classList.toggle('dark', t === 'dark');
      localStorage.setItem('theme', t);
    });
  }

  toggleTheme(): void {
    this.theme.update(t => t === 'light' ? 'dark' : 'light');
  }

  private getStoredTheme(): Theme {
    if (typeof localStorage === 'undefined') return 'light';
    return (localStorage.getItem('theme') as Theme) || 'light';
  }
}
