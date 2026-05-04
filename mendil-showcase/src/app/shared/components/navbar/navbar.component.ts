import { Component, OnInit, signal, HostListener, inject, PLATFORM_ID } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { MobileMenuComponent } from '../mobile-menu/mobile-menu.component';

interface NavItem {
  label: string;
  path: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule, MobileMenuComponent],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isScrolled = signal(false);
  isMobileMenuOpen = signal(false);

  navItems: NavItem[] = [
    { label: 'Ana Sayfa',   path: '/' },
    { label: 'Ürünlerimiz', path: '/urunler' },
    { label: 'Hakkımızda',  path: '/hakkimizda' },
    { label: 'İletişim',    path: '/iletisim' },
  ];

  private platform = inject(PLATFORM_ID);

  @HostListener('window:scroll')
  onScroll(): void {
    if (isPlatformBrowser(this.platform)) {
      this.isScrolled.set(window.scrollY > 50);
    }
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platform)) {
      this.onScroll();
    }
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen.update(v => !v);
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen.set(false);
  }
}
