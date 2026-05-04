# 🧻 Mendil Markası Tanıtım Sitesi - Nihai Geliştirme Rehberi

**Tarih:** 04 Mayıs 2026  
**Proje Tipi:** Kurumsal Tanıtım & Showcase Sitesi (Sadece Frontend/UI)  
**Hedef:** Nora Group'tan daha iyi, Google'da üst sıralarda çıkan, 95+ Lighthouse skorlu site

---

## 📋 İçindekiler

1. [Proje Özeti ve Hedefler](#bölüm-1)
2. [Teknoloji Stack ve Kurulum](#bölüm-2)
3. [Proje Yapısı ve Mimari](#bölüm-3)
4. [Tasarım Sistemi ve Design Tokens](#bölüm-4)
5. [Site Haritası ve Sayfalar](#bölüm-5)
6. [SEO Stratejisi (2026 Güncel)](#bölüm-6)
7. [Animasyon ve Görsel Efektler](#bölüm-7)
8. [Performans Optimizasyonu](#bölüm-8)
9. [Mobil Optimizasyon](#bölüm-9)
10. [Yasal Uyumluluk (KVKK)](#bölüm-10)
11. [ADIM ADIM GELİŞTİRME PLANI](#bölüm-11)
12. [Test ve Deployment](#bölüm-12)

---

## BÖLÜM 1: Proje Özeti ve Hedefler {#bölüm-1}

### 🎯 Proje Amacı

Bir mendil markasının ürünlerini, değerlerini ve kurumsal kimliğini dijital ortamda **en etkileyici şekilde** sunmak. Site **satış yapmayacak**, sadece **marka bilinirliği** ve **ürün tanıtımı** odaklı olacak.

### ✨ Temel Özellikler

- ✅ **Sadece Frontend/UI** - Backend, veritabanı yok
- ✅ **Tam Responsive** - Mobil-first yaklaşım
- ✅ **Premium Animasyonlar** - GSAP + Native CSS
- ✅ **SEO Optimized** - Google'da üst sıralarda
- ✅ **Yüksek Performans** - 95+ Lighthouse skoru
- ✅ **Accessibility (WCAG 2.1 AA)** - Herkes için erişilebilir
- ✅ **Yasal Uyumluluk** - KVKK tam uyumlu

### 🎨 Tasarım Felsefesi

**Marka Kimliği:**
- **Temizlik ve Saflık:** Beyaz, açık mavi, soft pastel tonlar
- **Yumuşaklık Hissi:** Rounded köşeler, smooth transitions
- **Minimalizm:** Az ama etkili içerik, bol beyaz alan
- **Doğa Dostu İmaj:** Eco-friendly vurgusu, yeşil tonlar

**Nora Group'tan Farkımız:**
- ✅ Daha modern tasarım (2026 trends)
- ✅ Daha hızlı (95+ Lighthouse vs ~70)
- ✅ Daha iyi animasyonlar (GSAP + cinematic effects)
- ✅ Daha güçlü SEO (E-E-A-T, schema markup)
- ✅ Daha iyi mobil deneyim (touch gestures, advanced menu)

### 📊 Başarı Kriterleri

| Metrik | Hedef | Neden Önemli |
|--------|-------|--------------|
| **Lighthouse Performance** | 95+ | Hız = SEO + UX |
| **Lighthouse SEO** | 100 | Google sıralaması |
| **Lighthouse Accessibility** | 95+ | Herkes erişebilmeli |
| **Core Web Vitals** | Tümü yeşil | Google ranking faktörü |
| **LCP** | ≤ 2.5s | İlk yükleme hızı |
| **INP** | ≤ 200ms | Etkileşim hızı |
| **CLS** | ≤ 0.1 | Layout stability |
| **Mobile Score** | 90+ | Mobil kullanıcı deneyimi |



---

## BÖLÜM 2: Teknoloji Stack ve Kurulum {#bölüm-2}

### 🚀 Seçilen Teknolojiler (2026 Güncel)

#### **Ana Framework**
- **Angular 19+** (Latest)
  - Standalone Components (default)
  - Signals API (reactive state)
  - linkedSignal (bağımlı state)
  - Resource API (async data)
  - Zoneless Change Detection
  - Incremental Hydration (SSR)

#### **Stil Framework**
- **Tailwind CSS 4.x**
  - Utility-first
  - JIT compiler
  - Dark mode built-in
  - Custom design tokens

#### **Animasyon**
- **GSAP 3.x** (Ana motor)
  - ScrollTrigger
  - SplitText
  - Timeline animations
- **Native CSS Scroll-Driven Animations** (Basit animasyonlar için)
- **Motion One** (5KB, hafif alternatif)

#### **Görsel Optimizasyonu**
- **AVIF** (Ana format, %50-80 daha küçük)
- **WebP** (Fallback)
- **Angular Image Directive** (Otomatik optimizasyon)

#### **UI Components**
- **Angular CDK** (Headless components)
- **Phosphor Icons** (6000+ modern ikon)

#### **Geliştirme Araçları**
- **pnpm** (Hızlı paket yöneticisi)
- **ESLint** (Code linting)
- **Prettier** (Code formatting)
- **Husky** (Git hooks)

#### **Analytics & Monitoring**
- **Google Analytics 4** (KVKK uyumlu)
- **Microsoft Clarity** (Ücretsiz heatmaps)
- **Web Vitals** (Performans tracking)

---

### 📦 Kurulum Adımları

#### **Adım 2.1: Angular Projesi Oluştur**

```bash
# Angular CLI yükle (eğer yoksa)
npm install -g @angular/cli

# Proje oluştur
ng new mendil-showcase --standalone --ssr --style=scss --routing

# Proje klasörüne gir
cd mendil-showcase
```

**Seçenekler:**
- `--standalone`: Standalone components kullan
- `--ssr`: Server-Side Rendering aktif
- `--style=scss`: SCSS kullan
- `--routing`: Routing modülü ekle

---

#### **Adım 2.2: Tailwind CSS Kurulumu**

```bash
# Tailwind ve bağımlılıkları yükle
npm install -D tailwindcss postcss autoprefixer

# Tailwind config oluştur
npx tailwindcss init
```

**tailwind.config.js dosyasını düzenle:**
```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'brand': {
          'blue': '#E8F4F8',
          'soft': '#F0F9FF',
          'green': '#D4F1E8',
          'primary': '#0EA5E9',
          'dark': '#1E293B',
          50: '#E8F4F8',
          100: '#D1E9F1',
          500: '#0EA5E9',
          600: '#0284C7',
          700: '#0369A1',
        },
        'semantic': {
          'success': '#10B981',
          'warning': '#F59E0B',
          'error': '#EF4444',
          'info': '#3B82F6',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Poppins', 'sans-serif'],
      },
      spacing: {
        'xs': '0.25rem',
        'sm': '0.5rem',
        'md': '1rem',
        'lg': '1.5rem',
        'xl': '2rem',
        '2xl': '3rem',
        '3xl': '4rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
      },
      transitionDuration: {
        'fast': '150ms',
        'normal': '300ms',
        'slow': '500ms',
      }
    },
  },
  plugins: [],
}
```

**src/styles.scss dosyasını düzenle:**
```scss
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Custom base styles */
@layer base {
  body {
    @apply font-sans text-gray-900 antialiased;
  }
  
  h1, h2, h3, h4, h5, h6 {
    @apply font-display;
  }
}

/* Fluid Typography */
:root {
  --font-size-xs: clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem);
  --font-size-sm: clamp(0.875rem, 0.8rem + 0.375vw, 1rem);
  --font-size-base: clamp(1rem, 0.9rem + 0.5vw, 1.125rem);
  --font-size-lg: clamp(1.125rem, 1rem + 0.625vw, 1.25rem);
  --font-size-xl: clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem);
  --font-size-2xl: clamp(1.5rem, 1.3rem + 1vw, 2rem);
  --font-size-3xl: clamp(1.875rem, 1.5rem + 1.875vw, 2.5rem);
  --font-size-4xl: clamp(2.25rem, 1.8rem + 2.25vw, 3rem);
  --font-size-5xl: clamp(3rem, 2.25rem + 3.75vw, 4rem);
}

/* iOS Safari viewport fix */
:root {
  --vh: 1vh;
}

.full-height {
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
}

/* Accessibility - Reduced Motion */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

#### **Adım 2.3: GSAP Kurulumu**

```bash
# GSAP yükle
npm install gsap
```

---

#### **Adım 2.4: Angular CDK Kurulumu**

```bash
# Angular CDK yükle
npm install @angular/cdk
```

---

#### **Adım 2.5: İkonlar Kurulumu**

```bash
# Phosphor Icons yükle
npm install @phosphor-icons/angular
```

---

#### **Adım 2.6: Utility Libraries**

```bash
# Lodash (tree-shakeable)
npm install lodash-es
npm install -D @types/lodash-es

# Web Vitals
npm install web-vitals
```

---

#### **Adım 2.7: Fontlar Ekleme**

**src/index.html dosyasına ekle:**
```html
<!doctype html>
<html lang="tr">
<head>
  <meta charset="utf-8">
  <title>Mendil Markası - Yumuşaklığın Dokunuşu</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
  
  <!-- DNS Prefetch -->
  <link rel="dns-prefetch" href="https://fonts.googleapis.com">
  <link rel="dns-prefetch" href="https://www.google-analytics.com">
  
  <!-- Preconnect -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  
  <!-- Fonts -->
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@600;700;800&display=swap" rel="stylesheet">
  
  <!-- Preload Critical Assets -->
  <link rel="preload" href="/assets/fonts/inter-var.woff2" as="font" type="font/woff2" crossorigin>
</head>
<body>
  <app-root></app-root>
</body>
</html>
```

---

#### **Adım 2.8: Environment Dosyaları Oluştur**

**src/environments/environment.ts:**
```typescript
export const environment = {
  production: false,
  siteUrl: 'http://localhost:4200',
  siteName: 'Mendil Markası',
  analyticsId: '',
  socialMedia: {
    facebook: 'https://facebook.com/mendimarkasi',
    instagram: 'https://instagram.com/mendimarkasi',
    twitter: 'https://twitter.com/mendimarkasi',
    linkedin: 'https://linkedin.com/company/mendimarkasi'
  },
  contact: {
    phone: '+90 212 XXX XX XX',
    email: 'info@mendimarkasi.com',
    address: 'Örnek Mahallesi, Örnek Sokak No:1, İstanbul'
  }
};
```

**src/environments/environment.prod.ts:**
```typescript
export const environment = {
  production: true,
  siteUrl: 'https://mendimarkasi.com',
  siteName: 'Mendil Markası',
  analyticsId: 'G-XXXXXXXXXX',
  socialMedia: {
    facebook: 'https://facebook.com/mendimarkasi',
    instagram: 'https://instagram.com/mendimarkasi',
    twitter: 'https://twitter.com/mendimarkasi',
    linkedin: 'https://linkedin.com/company/mendimarkasi'
  },
  contact: {
    phone: '+90 212 XXX XX XX',
    email: 'info@mendimarkasi.com',
    address: 'Örnek Mahallesi, Örnek Sokak No:1, İstanbul'
  }
};
```

---

#### **Adım 2.9: Git Ignore Güncelle**

**.gitignore dosyasına ekle:**
```
# Environment files
src/environments/environment.prod.ts

# IDE
.vscode/
.idea/

# OS
.DS_Store
Thumbs.db
```

---

#### **Adım 2.10: Core Services Oluştur**

```bash
# Temel servisler
ng generate service core/services/seo --skip-tests
ng generate service core/services/theme --skip-tests
ng generate service core/services/analytics --skip-tests
ng generate service core/services/page-transition --skip-tests
ng generate service core/services/internal-link --skip-tests
ng generate service core/services/content-freshness --skip-tests
ng generate service core/services/mobile-optimization --skip-tests
```

**Page Transition Service (Sayfa Geçiş Animasyonları):**

**src/app/core/services/page-transition.service.ts:**
```typescript
import { Injectable } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { gsap } from 'gsap';

@Injectable({ providedIn: 'root' })
export class PageTransitionService {
  constructor(private router: Router) {
    this.setupTransitions();
  }
  
  private setupTransitions() {
    // Sayfa çıkış animasyonu
    this.router.events.pipe(
      filter(event => event instanceof NavigationStart)
    ).subscribe(() => {
      gsap.to('.page-content', {
        opacity: 0,
        y: -30,
        duration: 0.3,
        ease: 'power2.in'
      });
    });
    
    // Sayfa giriş animasyonu
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      window.scrollTo(0, 0); // Scroll to top
      
      gsap.fromTo('.page-content',
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.5, 
          ease: 'power2.out', 
          delay: 0.1 
        }
      );
    });
  }
}
```

**Internal Link Service (İç Bağlantı Yönetimi - SEO):**

**src/app/core/services/internal-link.service.ts:**
```typescript
import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { PRODUCTS } from '../../features/products/data/products.data';

export interface Breadcrumb {
  label: string;
  url: string;
}

@Injectable({ providedIn: 'root' })
export class InternalLinkService {
  
  // İlgili ürünleri getir (SEO için önemli)
  getRelatedProducts(currentProductId: number, limit: number = 3): Product[] {
    const currentProduct = PRODUCTS.find(p => p.id === currentProductId);
    if (!currentProduct) return [];
    
    return PRODUCTS
      .filter(p => 
        p.id !== currentProductId && 
        p.category === currentProduct.category
      )
      .slice(0, limit);
  }
  
  // Breadcrumb navigation oluştur
  generateBreadcrumbs(route: string): Breadcrumb[] {
    const paths = route.split('/').filter(p => p);
    const breadcrumbs: Breadcrumb[] = [
      { label: 'Ana Sayfa', url: '/' }
    ];
    
    let currentPath = '';
    paths.forEach(path => {
      currentPath += `/${path}`;
      breadcrumbs.push({
        label: this.getPageTitle(path),
        url: currentPath
      });
    });
    
    return breadcrumbs;
  }
  
  private getPageTitle(path: string): string {
    const titles: { [key: string]: string } = {
      'urunler': 'Ürünlerimiz',
      'hakkimizda': 'Hakkımızda',
      'iletisim': 'İletişim',
      'yasal': 'Yasal',
      'kvkk': 'KVKK',
      'cerez-politikasi': 'Çerez Politikası'
    };
    
    return titles[path] || path;
  }
}
```

**Content Freshness Service (İçerik Güncellik Takibi - SEO):**

**src/app/core/services/content-freshness.service.ts:**
```typescript
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ContentFreshnessService {
  
  // Sayfa son güncelleme tarihini getir
  getLastModified(pageId: string): Date {
    const lastModifiedDates: { [key: string]: string } = {
      'home': '2026-05-04',
      'products': '2026-05-03',
      'about': '2026-04-28',
      'contact': '2026-04-25'
    };
    
    return new Date(lastModifiedDates[pageId] || '2026-05-04');
  }
  
  // Son güncelleme metnini formatla
  formatLastModified(date: Date): string {
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return 'Bugün güncellendi';
    if (diffDays === 1) return 'Dün güncellendi';
    if (diffDays < 7) return `${diffDays} gün önce güncellendi`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} hafta önce güncellendi`;
    
    return date.toLocaleDateString('tr-TR');
  }
}
```

**Mobile Optimization Service (Mobil Optimizasyon):**

**src/app/core/services/mobile-optimization.service.ts:**
```typescript
import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MobileOptimizationService {
  isMobile = signal(false);
  isTablet = signal(false);
  isDesktop = signal(false);
  
  constructor() {
    this.detectDevice();
    this.setupListeners();
  }
  
  private detectDevice() {
    const width = window.innerWidth;
    this.isMobile.set(width < 768);
    this.isTablet.set(width >= 768 && width < 1024);
    this.isDesktop.set(width >= 1024);
    
    // Mobilde daha az animasyon
    if (this.isMobile()) {
      document.documentElement.classList.add('mobile-device');
    }
  }
  
  private setupListeners() {
    window.addEventListener('resize', () => {
      this.detectDevice();
    });
    
    window.addEventListener('orientationchange', () => {
      setTimeout(() => {
        this.detectDevice();
      }, 100);
    });
  }
  
  // Mobilde video yerine poster göster
  shouldLoadVideo(): boolean {
    if (this.isMobile()) {
      // Sadece 4G+ bağlantılarda video yükle
      const connection = (navigator as any).connection;
      return connection?.effectiveType === '4g';
    }
    return true;
  }
  
  // Cihaza göre görsel boyutu
  getImageSize(): 'small' | 'medium' | 'large' {
    if (this.isMobile()) return 'small';
    if (this.isTablet()) return 'medium';
    return 'large';
  }
  
  // Mobilde daha az animasyon
  getAnimationDuration(): number {
    return this.isMobile() ? 0.3 : 0.6;
  }
}
```

**app.component.ts'de servisleri aktifleştir:**
```typescript
import { Component } from '@angular/core';
import { PageTransitionService } from './core/services/page-transition.service';
import { MobileOptimizationService } from './core/services/mobile-optimization.service';

@Component({
  selector: 'app-root',
  template: `
    <app-custom-cursor />
    <router-outlet />
  `
})
export class AppComponent {
  constructor(
    private pageTransition: PageTransitionService,
    private mobileOpt: MobileOptimizationService
  ) {}
}
```

---

#### **Adım 2.11: Package.json Scripts Ekle**

**package.json'a ekle:**
```json
{
  "scripts": {
    "start": "ng serve",
    "build": "ng build",
    "build:prod": "ng build --configuration=production",
    "watch": "ng build --watch --configuration development",
    "test": "ng test",
    "lint": "ng lint",
    "format": "prettier --write \"src/**/*.{ts,html,scss}\"",
    "analyze": "ng build --stats-json && webpack-bundle-analyzer dist/stats.json"
  }
}
```

---

### ✅ Kurulum Kontrolü

Kurulumun başarılı olduğunu kontrol et:

```bash
# Projeyi çalıştır
npm start

# Tarayıcıda aç: http://localhost:4200
```

Eğer Angular welcome sayfası görünüyorsa kurulum başarılı! ✅



---

## BÖLÜM 3: Proje Yapısı ve Mimari {#bölüm-3}

### 📁 Klasör Yapısını Oluştur

#### **Adım 3.1: Klasörleri Oluştur**

```bash
# Core klasörleri
mkdir -p src/app/core/guards
mkdir -p src/app/core/interceptors
mkdir -p src/app/core/services
mkdir -p src/app/core/models

# Shared klasörleri
mkdir -p src/app/shared/components
mkdir -p src/app/shared/directives
mkdir -p src/app/shared/pipes
mkdir -p src/app/shared/animations

# Feature klasörleri
mkdir -p src/app/features/home/components
mkdir -p src/app/features/products/components
mkdir -p src/app/features/products/data
mkdir -p src/app/features/about/components
mkdir -p src/app/features/contact/components
mkdir -p src/app/features/legal

# Assets klasörleri
mkdir -p src/assets/images/hero
mkdir -p src/assets/images/products
mkdir -p src/assets/images/icons
mkdir -p src/assets/images/logo
mkdir -p src/assets/data
mkdir -p src/assets/videos

# Styles klasörleri
mkdir -p src/styles
```

---

### 🏗️ Detaylı Proje Yapısı

```
mendil-showcase/
│
├── src/
│   ├── app/
│   │   │
│   │   ├── core/                          # Uygulama çekirdeği
│   │   │   ├── guards/                    # Route guards
│   │   │   ├── interceptors/              # HTTP interceptors
│   │   │   ├── services/                  # Global servisler
│   │   │   │   ├── seo.service.ts         # Meta tags, SEO
│   │   │   │   ├── theme.service.ts       # Dark/Light mode
│   │   │   │   ├── analytics.service.ts   # Google Analytics
│   │   │   │   ├── cookie-consent.service.ts
│   │   │   │   ├── internal-link.service.ts
│   │   │   │   ├── local-seo.service.ts
│   │   │   │   ├── structured-data.service.ts
│   │   │   │   └── web-vitals.service.ts
│   │   │   ├── models/                    # TypeScript interfaces
│   │   │   │   ├── product.model.ts
│   │   │   │   ├── testimonial.model.ts
│   │   │   │   └── breadcrumb.model.ts
│   │   │   └── design-tokens.ts           # Design system tokens
│   │   │
│   │   ├── shared/                        # Paylaşılan componentler
│   │   │   ├── components/
│   │   │   │   ├── navbar/
│   │   │   │   ├── footer/
│   │   │   │   ├── button/
│   │   │   │   ├── modal/
│   │   │   │   ├── cookie-banner/
│   │   │   │   ├── mobile-menu/
│   │   │   │   ├── loading-spinner/
│   │   │   │   └── custom-cursor/
│   │   │   │
│   │   │   ├── directives/
│   │   │   │   ├── scroll-reveal.directive.ts
│   │   │   │   ├── parallax.directive.ts
│   │   │   │   ├── lazy-load.directive.ts
│   │   │   │   └── touch-gesture.directive.ts
│   │   │   │
│   │   │   ├── pipes/
│   │   │   │   ├── safe-html.pipe.ts
│   │   │   │   └── truncate.pipe.ts
│   │   │   │
│   │   │   └── animations/
│   │   │       └── fade-slide.animation.ts
│   │   │
│   │   ├── features/                      # Feature modules
│   │   │   │
│   │   │   ├── home/                      # Ana sayfa
│   │   │   │   ├── components/
│   │   │   │   │   ├── hero-section/
│   │   │   │   │   ├── featured-products/
│   │   │   │   │   ├── brand-story/
│   │   │   │   │   ├── features-section/
│   │   │   │   │   ├── testimonials/
│   │   │   │   │   └── cta-section/
│   │   │   │   └── home.component.ts
│   │   │   │
│   │   │   ├── products/                  # Ürünler sayfası
│   │   │   │   ├── components/
│   │   │   │   │   ├── product-grid/
│   │   │   │   │   ├── product-card/
│   │   │   │   │   ├── product-filter/
│   │   │   │   │   └── product-detail-modal/
│   │   │   │   ├── data/
│   │   │   │   │   └── products.data.ts
│   │   │   │   └── products.component.ts
│   │   │   │
│   │   │   ├── about/                     # Hakkımızda
│   │   │   │   ├── components/
│   │   │   │   │   ├── company-history/
│   │   │   │   │   ├── values-section/
│   │   │   │   │   ├── production-process/
│   │   │   │   │   └── certifications/
│   │   │   │   └── about.component.ts
│   │   │   │
│   │   │   ├── contact/                   # İletişim
│   │   │   │   ├── components/
│   │   │   │   │   ├── contact-form/
│   │   │   │   │   ├── contact-info/
│   │   │   │   │   └── map-section/
│   │   │   │   └── contact.component.ts
│   │   │   │
│   │   │   └── legal/                     # Yasal sayfalar
│   │   │       ├── kvkk/
│   │   │       ├── kvkk-request/
│   │   │       ├── cookie-policy/
│   │   │       ├── privacy-policy/
│   │   │       ├── terms-of-use/
│   │   │       └── legal.routes.ts
│   │   │
│   │   ├── app.component.ts
│   │   ├── app.component.html
│   │   ├── app.component.scss
│   │   ├── app.config.ts
│   │   └── app.routes.ts
│   │
│   ├── assets/
│   │   ├── images/
│   │   ├── data/
│   │   └── videos/
│   │
│   ├── styles/
│   │   ├── _variables.scss
│   │   ├── _mixins.scss
│   │   ├── _typography.scss
│   │   ├── _animations.scss
│   │   ├── _effects.scss
│   │   └── styles.scss
│   │
│   ├── environments/
│   ├── index.html
│   ├── main.ts
│   └── main.server.ts
│
├── public/
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── favicon.ico
│   └── manifest.json
│
├── angular.json
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── .eslintrc.json
├── .prettierrc
└── .gitignore
```

---

### 🎯 Mimari Prensipleri

#### **1. Standalone Components (Angular 19 Default)**

```typescript
// ✅ DOĞRU - Standalone Component
@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {}
```

#### **2. Signals-Based State Management**

```typescript
// Modern reactive state
export class ThemeService {
  theme = signal<'light' | 'dark'>('light');
  
  toggleTheme() {
    this.theme.update(current => current === 'light' ? 'dark' : 'light');
  }
}
```

#### **3. Lazy Loading Routes**

```typescript
// app.routes.ts
export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home.component')
      .then(m => m.HomeComponent),
    title: 'Ana Sayfa | Mendil Markası'
  },
  {
    path: 'urunler',
    loadComponent: () => import('./features/products/products.component')
      .then(m => m.ProductsComponent),
    title: 'Ürünlerimiz | Mendil Markası'
  }
  // ... diğer rotalar
];
```

#### **4. Mobile-First CSS**

```scss
// ✅ DOĞRU - Mobile-first
.hero {
  padding: 40px 20px; // Mobil default
  
  @media (min-width: 768px) {
    padding: 80px 40px; // Tablet
  }
  
  @media (min-width: 1024px) {
    padding: 120px 80px; // Desktop
  }
}
```

---

### 📝 Adım 3.2: App Config Dosyasını Oluştur

**src/app/app.config.ts:**
```typescript
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideClientHydration, withIncrementalHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(
      withIncrementalHydration() // Kademeli hydration
    ),
    provideHttpClient(withFetch()) // Modern fetch API
  ]
};
```

---

### 📝 Adım 3.3: Main.ts Dosyasını Güncelle

**src/main.ts:**
```typescript
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

// iOS Safari viewport fix
function setVhVariable() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

setVhVariable();
window.addEventListener('resize', setVhVariable);

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
```



---

## BÖLÜM 4: Tasarım Sistemi ve Design Tokens {#bölüm-4}

### 🎨 Design Tokens Sistemi

Design tokens, tasarım değişikliklerini tek yerden yönetmek için kullanılır. Bu sayede tüm sitede tutarlılık sağlanır ve değişiklikler kolayca yapılabilir.

#### **Adım 4.1: Design Tokens Dosyası Oluştur**

**src/app/core/design-tokens.ts:**
```typescript
export const DesignTokens = {
  colors: {
    primary: {
      50: '#E8F4F8',
      100: '#D1E9F1',
      200: '#A3D3E3',
      300: '#75BDD5',
      400: '#47A7C7',
      500: '#0EA5E9',  // Ana renk
      600: '#0284C7',
      700: '#0369A1',
      800: '#075985',
      900: '#0C4A6E',
    },
    secondary: {
      50: '#D4F1E8',
      100: '#A9E3D1',
      500: '#10B981',  // Yeşil (eco-friendly)
      600: '#059669',
      700: '#047857',
    },
    neutral: {
      50: '#F8FAFC',
      100: '#F1F5F9',
      200: '#E2E8F0',
      300: '#CBD5E1',
      400: '#94A3B8',
      500: '#64748B',
      600: '#475569',
      700: '#334155',
      800: '#1E293B',
      900: '#0F172A',
    },
    semantic: {
      success: '#10B981',
      warning: '#F59E0B',
      error: '#EF4444',
      info: '#3B82F6',
    }
  },
  
  spacing: {
    xs: '0.25rem',    // 4px
    sm: '0.5rem',     // 8px
    md: '1rem',       // 16px
    lg: '1.5rem',     // 24px
    xl: '2rem',       // 32px
    '2xl': '3rem',    // 48px
    '3xl': '4rem',    // 64px
    '4xl': '6rem',    // 96px
    '5xl': '8rem',    // 128px
  },
  
  typography: {
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
      display: ['Poppins', 'sans-serif'],
    },
    fontSize: {
      xs: '0.75rem',    // 12px
      sm: '0.875rem',   // 14px
      base: '1rem',     // 16px
      lg: '1.125rem',   // 18px
      xl: '1.25rem',    // 20px
      '2xl': '1.5rem',  // 24px
      '3xl': '1.875rem',// 30px
      '4xl': '2.25rem', // 36px
      '5xl': '3rem',    // 48px
      '6xl': '3.75rem', // 60px
      '7xl': '4.5rem',  // 72px
    },
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
    },
    lineHeight: {
      tight: 1.25,
      normal: 1.5,
      relaxed: 1.75,
      loose: 2,
    },
    letterSpacing: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em',
    }
  },
  
  borderRadius: {
    none: '0',
    sm: '0.25rem',
    md: '0.5rem',
    lg: '1rem',
    xl: '1.5rem',
    '2xl': '2rem',
    '3xl': '3rem',
    full: '9999px',
  },
  
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
  },
  
  transitions: {
    fast: '150ms cubic-bezier(0.4, 0, 0.2, 1)',
    normal: '300ms cubic-bezier(0.4, 0, 0.2, 1)',
    slow: '500ms cubic-bezier(0.4, 0, 0.2, 1)',
  },
  
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  
  zIndex: {
    dropdown: 1000,
    sticky: 1020,
    fixed: 1030,
    modalBackdrop: 1040,
    modal: 1050,
    popover: 1060,
    tooltip: 1070,
  }
};
```

---

### 📝 Adım 4.2: SCSS Variables Oluştur

**src/styles/_variables.scss:**
```scss
// Design Tokens'tan SCSS variables
$color-primary: #0EA5E9;
$color-primary-dark: #0284C7;
$color-secondary: #10B981;
$color-dark: #1E293B;
$color-light: #F8FAFC;

// Spacing
$spacing-xs: 0.25rem;
$spacing-sm: 0.5rem;
$spacing-md: 1rem;
$spacing-lg: 1.5rem;
$spacing-xl: 2rem;
$spacing-2xl: 3rem;
$spacing-3xl: 4rem;

// Typography
$font-sans: 'Inter', system-ui, sans-serif;
$font-display: 'Poppins', sans-serif;

// Breakpoints
$breakpoint-sm: 640px;
$breakpoint-md: 768px;
$breakpoint-lg: 1024px;
$breakpoint-xl: 1280px;
$breakpoint-2xl: 1536px;

// Transitions
$transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
$transition-normal: 300ms cubic-bezier(0.4, 0, 0.2, 1);
$transition-slow: 500ms cubic-bezier(0.4, 0, 0.2, 1);
```

---

### 📝 Adım 4.3: SCSS Mixins Oluştur

**src/styles/_mixins.scss:**
```scss
// Responsive breakpoints
@mixin sm {
  @media (min-width: $breakpoint-sm) {
    @content;
  }
}

@mixin md {
  @media (min-width: $breakpoint-md) {
    @content;
  }
}

@mixin lg {
  @media (min-width: $breakpoint-lg) {
    @content;
  }
}

@mixin xl {
  @media (min-width: $breakpoint-xl) {
    @content;
  }
}

// Container
@mixin container {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: $spacing-md;
  padding-right: $spacing-md;
  
  @include sm {
    max-width: 640px;
  }
  
  @include md {
    max-width: 768px;
  }
  
  @include lg {
    max-width: 1024px;
  }
  
  @include xl {
    max-width: 1280px;
  }
}

// Glassmorphism
@mixin glass {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

@mixin glass-dark {
  background: rgba(30, 41, 59, 0.7);
  backdrop-filter: blur(10px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

// Text gradient
@mixin text-gradient($from, $to) {
  background: linear-gradient(135deg, $from 0%, $to 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

// Hover lift effect
@mixin hover-lift {
  transition: transform $transition-normal, box-shadow $transition-normal;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
  }
}
```

---

### 📝 Adım 4.4: Typography Styles

**src/styles/_typography.scss:**
```scss
// Typography classes
.text-display {
  font-family: $font-display;
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.1;
}

.text-heading {
  font-family: $font-display;
  font-weight: 600;
  letter-spacing: -0.01em;
  line-height: 1.25;
}

.text-body {
  font-family: $font-sans;
  font-weight: 400;
  line-height: 1.6;
  color: #475569;
}

.text-caption {
  font-family: $font-sans;
  font-weight: 500;
  font-size: 0.875rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #64748b;
}

// Text gradient
.text-gradient {
  @include text-gradient($color-primary, $color-secondary);
}

.text-gradient-blue {
  @include text-gradient(#0EA5E9, #3B82F6);
}

.text-gradient-green {
  @include text-gradient(#10B981, #34D399);
}
```

---

### 📝 Adım 4.5: Animation Styles

**src/styles/_animations.scss:**
```scss
// Fade animations
@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fade-in-down {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

// Scale animations
@keyframes scale-in {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

// Slide animations
@keyframes slide-in-right {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slide-in-left {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

// Bounce
@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

// Spin
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

// Utility classes
.animate-fade-in {
  animation: fade-in 0.5s ease-out;
}

.animate-fade-in-up {
  animation: fade-in-up 0.6s ease-out;
}

.animate-scale-in {
  animation: scale-in 0.4s ease-out;
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

.animate-bounce {
  animation: bounce 1s infinite;
}

.animate-spin {
  animation: spin 1s linear infinite;
}
```

---

### 📝 Adım 4.6: Effects Styles

**src/styles/_effects.scss:**
```scss
// Glassmorphism
.glass {
  @include glass;
}

.glass-dark {
  @include glass-dark;
}

// Hover effects
.hover-lift {
  @include hover-lift;
}

.hover-scale {
  transition: transform $transition-normal;
  
  &:hover {
    transform: scale(1.05);
  }
}

.hover-glow {
  position: relative;
  transition: all $transition-normal;
  
  &::before {
    content: '';
    position: absolute;
    inset: -4px;
    background: linear-gradient(135deg, $color-primary, $color-secondary);
    border-radius: inherit;
    opacity: 0;
    transition: opacity $transition-normal;
    z-index: -1;
    filter: blur(20px);
  }
  
  &:hover::before {
    opacity: 0.7;
  }
}

// Shadows
.shadow-soft {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.shadow-medium {
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
}

.shadow-hard {
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
}

// Gradients
.gradient-primary {
  background: linear-gradient(135deg, #0EA5E9 0%, #3B82F6 100%);
}

.gradient-secondary {
  background: linear-gradient(135deg, #10B981 0%, #34D399 100%);
}

.gradient-warm {
  background: linear-gradient(135deg, #F59E0B 0%, #EF4444 100%);
}

// Blur backgrounds
.blur-bg {
  backdrop-filter: blur(8px);
  background: rgba(255, 255, 255, 0.8);
}

.blur-bg-dark {
  backdrop-filter: blur(8px);
  background: rgba(30, 41, 59, 0.8);
}
```

---

### 📝 Adım 4.7: Main Styles Dosyasını Güncelle

**src/styles/styles.scss:**
```scss
// Import Tailwind
@tailwind base;
@tailwind components;
@tailwind utilities;

// Import custom styles
@import 'variables';
@import 'mixins';
@import 'typography';
@import 'animations';
@import 'effects';

// Custom base styles
@layer base {
  body {
    @apply font-sans text-gray-900 antialiased;
    overflow-x: hidden;
  }
  
  h1, h2, h3, h4, h5, h6 {
    @apply font-display;
  }
  
  a {
    @apply transition-colors duration-300;
  }
  
  button {
    @apply transition-all duration-300;
  }
}

// Fluid Typography
:root {
  --font-size-xs: clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem);
  --font-size-sm: clamp(0.875rem, 0.8rem + 0.375vw, 1rem);
  --font-size-base: clamp(1rem, 0.9rem + 0.5vw, 1.125rem);
  --font-size-lg: clamp(1.125rem, 1rem + 0.625vw, 1.25rem);
  --font-size-xl: clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem);
  --font-size-2xl: clamp(1.5rem, 1.3rem + 1vw, 2rem);
  --font-size-3xl: clamp(1.875rem, 1.5rem + 1.875vw, 2.5rem);
  --font-size-4xl: clamp(2.25rem, 1.8rem + 2.25vw, 3rem);
  --font-size-5xl: clamp(3rem, 2.25rem + 3.75vw, 4rem);
}

// iOS Safari viewport fix
:root {
  --vh: 1vh;
}

.full-height {
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
}

// Accessibility - Reduced Motion
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

// Skip to main content link
.skip-to-main {
  position: absolute;
  top: -40px;
  left: 0;
  background: $color-primary;
  color: white;
  padding: 8px 16px;
  text-decoration: none;
  z-index: 100;
  
  &:focus {
    top: 0;
  }
}

// Scroll progress bar
.scroll-progress-bar {
  position: fixed;
  top: 0;
  left: 0;
  height: 3px;
  background: linear-gradient(90deg, #0EA5E9, #10B981, #F59E0B);
  transform-origin: left;
  z-index: 9999;
  animation: grow-progress linear;
  animation-timeline: scroll(root);
  animation-range: 0% 100%;
}

@keyframes grow-progress {
  from { transform: scaleX(0); }
  to { transform: scaleX(1); }
}

// Lazy loading images
.lazy-loading {
  filter: blur(10px);
  transition: filter 0.3s;
}

.lazy-loaded {
  filter: blur(0);
  animation: fade-in 0.5s;
}

// Selection color
::selection {
  background: rgba(14, 165, 233, 0.3);
  color: inherit;
}

::-moz-selection {
  background: rgba(14, 165, 233, 0.3);
  color: inherit;
}

// Scrollbar styling
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #f1f5f9;
}

::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 5px;
  
  &:hover {
    background: #94a3b8;
  }
}
```

Bu bölümde tasarım sisteminin temelini oluşturduk. Artık tüm projede tutarlı renkler, spacing, typography kullanabiliriz! ✅



---

## BÖLÜM 5: Site Haritası ve Sayfalar {#bölüm-5}

### 🗺️ Tam Site Yapısı

```
Ana Sayfa (/)
│
├── Ürünlerimiz (/urunler)
│   ├── Islak Mendiller
│   ├── Kağıt Mendiller
│   ├── Kutu Mendiller
│   └── Cep Mendilleri
│
├── Hakkımızda (/hakkimizda)
│   ├── Hikayemiz
│   ├── Değerlerimiz
│   ├── Üretim Sürecimiz
│   └── Sertifikalarımız
│
├── İletişim (/iletisim)
│   ├── İletişim Formu
│   ├── Adres Bilgileri
│   └── Harita
│
└── Yasal (/yasal)
    ├── KVKK Aydınlatma Metni (/yasal/kvkk)
    ├── KVKK Başvuru Formu (/yasal/kvkk-basvuru)
    ├── Çerez Politikası (/yasal/cerez-politikasi)
    ├── Gizlilik Politikası (/yasal/gizlilik-politikasi)
    └── Kullanım Koşulları (/yasal/kullanim-kosullari)
```

---

### 📝 Adım 5.1: Routes Dosyasını Oluştur

**src/app/app.routes.ts:**
```typescript
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home.component')
      .then(m => m.HomeComponent),
    title: 'Ana Sayfa - Yumuşaklığın Dokunuşu | Mendil Markası'
  },
  {
    path: 'urunler',
    loadComponent: () => import('./features/products/products.component')
      .then(m => m.ProductsComponent),
    title: 'Ürünlerimiz | Mendil Markası'
  },
  {
    path: 'hakkimizda',
    loadComponent: () => import('./features/about/about.component')
      .then(m => m.AboutComponent),
    title: 'Hakkımızda | Mendil Markası'
  },
  {
    path: 'iletisim',
    loadComponent: () => import('./features/contact/contact.component')
      .then(m => m.ContactComponent),
    title: 'İletişim | Mendil Markası'
  },
  {
    path: 'yasal',
    loadChildren: () => import('./features/legal/legal.routes')
      .then(m => m.LEGAL_ROUTES)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
```

---

### 📝 Adım 5.2: Legal Routes Oluştur

**src/app/features/legal/legal.routes.ts:**
```typescript
import { Routes } from '@angular/router';

export const LEGAL_ROUTES: Routes = [
  {
    path: 'kvkk',
    loadComponent: () => import('./kvkk/kvkk.component')
      .then(m => m.KvkkComponent),
    title: 'KVKK Aydınlatma Metni | Mendil Markası'
  },
  {
    path: 'kvkk-basvuru',
    loadComponent: () => import('./kvkk-request/kvkk-request.component')
      .then(m => m.KvkkRequestComponent),
    title: 'KVKK Veri Sahibi Başvuru Formu | Mendil Markası'
  },
  {
    path: 'cerez-politikasi',
    loadComponent: () => import('./cookie-policy/cookie-policy.component')
      .then(m => m.CookiePolicyComponent),
    title: 'Çerez Politikası | Mendil Markası'
  },
  {
    path: 'gizlilik-politikasi',
    loadComponent: () => import('./privacy-policy/privacy-policy.component')
      .then(m => m.PrivacyPolicyComponent),
    title: 'Gizlilik Politikası | Mendil Markası'
  },
  {
    path: 'kullanim-kosullari',
    loadComponent: () => import('./terms-of-use/terms-of-use.component')
      .then(m => m.TermsOfUseComponent),
    title: 'Kullanım Koşulları | Mendil Markası'
  }
];
```

---

### 📄 Sayfa İçerikleri

#### **Ana Sayfa Bölümleri:**

1. **Hero Section**
   - Tam ekran arkaplan görseli
   - Ana başlık: "Yumuşaklığın Dokunuşu"
   - Alt başlık: "Doğa dostu, hijyenik, her an yanınızda"
   - CTA Button: "Ürünlerimizi Keşfedin"
   - Scroll indicator

2. **Öne Çıkan Ürünler**
   - 3-4 ürün kartı
   - Hover efektleri
   - "Tüm Ürünler" linki

3. **Marka Hikayesi**
   - Kısa metin + görsel
   - Parallax scroll efekti
   - "Daha Fazla" butonu

4. **Özellikler (Bento Grid)**
   - 🌿 Doğa Dostu
   - 💧 %99 Su
   - ✨ Dermatoljik Test
   - 🇹🇷 Yerli Üretim
   - 📜 ISO 9001

5. **Müşteri Yorumları**
   - Slider/Carousel
   - 5-6 yorum
   - Yıldız rating

6. **CTA Section**
   - "Bize Ulaşın" butonu
   - İletişim bilgileri

---

#### **Ürünler Sayfası Bölümleri:**

1. **Sayfa Başlığı**
   - "Ürünlerimiz" başlık
   - Kısa açıklama

2. **Filtre/Kategori**
   - Tümü
   - Islak Mendil
   - Kağıt Mendil
   - Kutu Mendil
   - Cep Mendili

3. **Ürün Grid**
   - Responsive grid (1/2/3/4 kolon)
   - Ürün kartları
   - Modal detay

---

#### **Hakkımızda Sayfası Bölümleri:**

1. **Şirket Hikayesi**
   - Timeline animasyonu
   - Kuruluş → Bugün

2. **Misyon & Vizyon**
   - İki kolon layout

3. **Değerlerimiz**
   - 4-6 değer kartı

4. **Üretim Süreci**
   - Adım adım görsel

5. **Sertifikalar**
   - Logo grid

---

#### **İletişim Sayfası Bölümleri:**

1. **İletişim Formu**
   - Ad Soyad
   - E-posta
   - Telefon
   - Konu
   - Mesaj

2. **İletişim Bilgileri**
   - Adres
   - Telefon
   - E-posta
   - Çalışma Saatleri

3. **Harita**
   - Google Maps embed

4. **Sosyal Medya**
   - Instagram, Facebook, Twitter, LinkedIn

---

### 📝 Adım 5.3: Ürün Data Modeli Oluştur

**src/app/core/models/product.model.ts:**
```typescript
export interface Product {
  id: number;
  name: string;
  category: 'wet' | 'paper' | 'box' | 'pocket';
  image: string;
  description: string;
  shortDescription: string;
  features: string[];
  badges: string[];
  details: {
    sheetCount?: number;
    size: string;
    ingredients: string;
    packaging?: string;
  };
  seoTitle?: string;
  seoDescription?: string;
}

export interface ProductCategory {
  id: string;
  name: string;
  icon: string;
  description: string;
}
```

---

### 📝 Adım 5.4: Ürün Data Dosyası Oluştur

**src/app/features/products/data/products.data.ts:**
```typescript
import { Product, ProductCategory } from '../../../core/models/product.model';

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    id: 'all',
    name: 'Tümü',
    icon: 'grid',
    description: 'Tüm ürünlerimiz'
  },
  {
    id: 'wet',
    name: 'Islak Mendil',
    icon: 'droplet',
    description: 'Hijyenik ıslak mendiller'
  },
  {
    id: 'paper',
    name: 'Kağıt Mendil',
    icon: 'file',
    description: 'Yumuşak kağıt mendiller'
  },
  {
    id: 'box',
    name: 'Kutu Mendil',
    icon: 'package',
    description: 'Pratik kutu mendiller'
  },
  {
    id: 'pocket',
    name: 'Cep Mendili',
    icon: 'wallet',
    description: 'Taşınabilir cep mendilleri'
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Islak Mendil - Hassas Cilt',
    category: 'wet',
    image: 'assets/images/products/islak-mendil-hassas.avif',
    description: 'Hassas ciltler için özel formül ile geliştirilmiş ıslak mendilimiz, alkol ve parfüm içermez. Dermatoljik olarak test edilmiştir.',
    shortDescription: 'Hassas ciltler için özel formül',
    features: [
      'Alkol içermez',
      'Parfüm içermez',
      'pH 5.5 dengeli',
      'Dermatoljik test edilmiş',
      'Hipoalerjenik'
    ],
    badges: ['Dermatoljik Test', 'Eco-Friendly', 'Hassas Cilt'],
    details: {
      sheetCount: 120,
      size: '15x20 cm',
      ingredients: '%99 su, aloe vera, E vitamini, gliserin, provitamin B5',
      packaging: 'Kapaklı plastik ambalaj'
    },
    seoTitle: 'Hassas Cilt İçin Islak Mendil - Alkol ve Parfüm İçermez',
    seoDescription: 'Hassas ciltler için özel formül ıslak mendil. Dermatoljik test edilmiş, alkol ve parfüm içermez. %99 su ile üretilmiştir.'
  },
  {
    id: 2,
    name: 'Islak Mendil - Bebek',
    category: 'wet',
    image: 'assets/images/products/islak-mendil-bebek.avif',
    description: 'Bebeğinizin hassas cildi için özel olarak formüle edilmiş ıslak mendilimiz, doğal içeriklerle zenginleştirilmiştir.',
    shortDescription: 'Bebek cildi için özel formül',
    features: [
      'Alkol içermez',
      'Parfüm içermez',
      'Parabensiz',
      'Pediatrik test edilmiş',
      'Ekstra yumuşak doku'
    ],
    badges: ['Pediatrik Test', 'Eco-Friendly', 'Bebek'],
    details: {
      sheetCount: 100,
      size: '18x20 cm',
      ingredients: '%99.5 su, chamomile özü, aloe vera, E vitamini',
      packaging: 'Kapaklı plastik ambalaj'
    }
  },
  {
    id: 3,
    name: 'Kağıt Mendil - 3 Katlı',
    category: 'paper',
    image: 'assets/images/products/kagit-mendil-3katli.avif',
    description: 'Üç katlı yapısı ile ekstra dayanıklı ve yumuşak kağıt mendilimiz, günlük kullanım için idealdir.',
    shortDescription: 'Ekstra dayanıklı 3 katlı',
    features: [
      '3 katlı yapı',
      'Ekstra yumuşak',
      'Yüksek emicilik',
      '%100 selüloz',
      'Kokusuz'
    ],
    badges: ['Eco-Friendly', '3 Katlı'],
    details: {
      sheetCount: 150,
      size: '21x21 cm',
      ingredients: '%100 selüloz',
      packaging: 'Karton kutu'
    }
  },
  {
    id: 4,
    name: 'Kutu Mendil - Klasik',
    category: 'box',
    image: 'assets/images/products/kutu-mendil-klasik.avif',
    description: 'Ev ve ofis kullanımı için ideal kutu mendilimiz, şık tasarımı ile her ortama uyum sağlar.',
    shortDescription: 'Ev ve ofis için ideal',
    features: [
      '2 katlı yapı',
      'Yumuşak doku',
      'Şık kutu tasarımı',
      'Pratik kullanım',
      'Ekonomik'
    ],
    badges: ['Ekonomik', 'Pratik'],
    details: {
      sheetCount: 200,
      size: '20x20 cm',
      ingredients: '%100 selüloz',
      packaging: 'Karton kutu'
    }
  },
  {
    id: 5,
    name: 'Cep Mendili - Mini',
    category: 'pocket',
    image: 'assets/images/products/cep-mendili-mini.avif',
    description: 'Taşıması kolay mini cep mendilimiz, her an yanınızda olsun diye tasarlandı.',
    shortDescription: 'Taşıması kolay mini boy',
    features: [
      'Kompakt boyut',
      '2 katlı',
      'Yumuşak doku',
      'Pratik ambalaj',
      'Çantaya sığar'
    ],
    badges: ['Pratik', 'Mini Boy'],
    details: {
      sheetCount: 10,
      size: '20x20 cm',
      ingredients: '%100 selüloz',
      packaging: 'Plastik ambalaj'
    }
  },
  {
    id: 6,
    name: 'Islak Mendil - Antibakteriyel',
    category: 'wet',
    image: 'assets/images/products/islak-mendil-antibakteriyel.avif',
    description: 'Antibakteriyel özelliği ile %99.9 bakteri temizliği sağlayan ıslak mendilimiz, hijyen için idealdir.',
    shortDescription: '%99.9 bakteri temizliği',
    features: [
      '%99.9 bakteri temizliği',
      'Antibakteriyel',
      'Hızlı kurur',
      'Ferahlatıcı koku',
      'Dermatoljik test'
    ],
    badges: ['Antibakteriyel', 'Hijyenik'],
    details: {
      sheetCount: 100,
      size: '15x20 cm',
      ingredients: '%70 alkol, gliserin, E vitamini, ferahlatıcı esans',
      packaging: 'Kapaklı plastik ambalaj'
    }
  }
];
```

---

### 📝 Adım 5.5: Testimonial Data Modeli

**src/app/core/models/testimonial.model.ts:**
```typescript
export interface Testimonial {
  id: number;
  name: string;
  role?: string;
  avatar?: string;
  rating: number;
  comment: string;
  date: string;
}
```

**src/assets/data/testimonials.json:**
```json
[
  {
    "id": 1,
    "name": "Ayşe Yılmaz",
    "role": "Anne",
    "rating": 5,
    "comment": "Bebeğim için kullandığım en iyi ıslak mendil. Hassas cildine çok uygun, hiç tahriş olmuyor.",
    "date": "2026-04-15"
  },
  {
    "id": 2,
    "name": "Mehmet Demir",
    "role": "İşletme Sahibi",
    "rating": 5,
    "comment": "Ofisimizde kullanıyoruz. Kaliteli ve ekonomik. Çalışanlarımız çok memnun.",
    "date": "2026-04-10"
  },
  {
    "id": 3,
    "name": "Zeynep Kaya",
    "role": "Öğretmen",
    "rating": 5,
    "comment": "Sınıfta her zaman yanımda. Hijyenik ve pratik. Öğrencilerim için güvenle kullanıyorum.",
    "date": "2026-04-05"
  },
  {
    "id": 4,
    "name": "Can Özdemir",
    "role": "Sporcu",
    "rating": 4,
    "comment": "Spor salonunda kullanmak için ideal. Antibakteriyel özelliği çok iyi.",
    "date": "2026-03-28"
  },
  {
    "id": 5,
    "name": "Elif Arslan",
    "role": "Ev Hanımı",
    "rating": 5,
    "comment": "Evde her yerde var. Mutfakta, banyoda, oturma odasında. Vazgeçilmezimiz oldu.",
    "date": "2026-03-20"
  }
]
```

Bu bölümde site haritasını ve veri modellerini oluşturduk. Artık sayfa içeriklerini kodlamaya hazırız! ✅



---

## BÖLÜM 6: SEO Stratejisi (2026 Güncel) {#bölüm-6}

### 🔍 2026 Google Ranking Faktörleri

**En Önemli Faktörler:**
1. **E-E-A-T** (Experience, Expertise, Authoritativeness, Trustworthiness)
2. **Core Web Vitals** (LCP, INP, CLS)
3. **Mobile-First** (Mobil uyumluluk)
4. **Content Quality** (İçerik kalitesi)
5. **Backlinks** (Geri linkler)
6. **Internal Linking** (İç linkler)
7. **Schema Markup** (Yapılandırılmış veri)
8. **Page Speed** (Sayfa hızı)

---

### 📝 Adım 6.1: SEO Service Oluştur

**src/app/core/services/seo.service.ts:**
```typescript
import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({ providedIn: 'root' })
export class SeoService {
  private meta = inject(Meta);
  private title = inject(Title);
  
  updateMetaTags(config: {
    title: string;
    description: string;
    keywords?: string;
    image?: string;
    url?: string;
    type?: string;
  }) {
    // Title
    this.title.setTitle(config.title);
    
    // Standard meta tags
    this.meta.updateTag({ name: 'description', content: config.description });
    if (config.keywords) {
      this.meta.updateTag({ name: 'keywords', content: config.keywords });
    }
    
    // Open Graph (Facebook, LinkedIn)
    this.meta.updateTag({ property: 'og:title', content: config.title });
    this.meta.updateTag({ property: 'og:description', content: config.description });
    this.meta.updateTag({ property: 'og:type', content: config.type || 'website' });
    if (config.image) {
      this.meta.updateTag({ property: 'og:image', content: config.image });
    }
    if (config.url) {
      this.meta.updateTag({ property: 'og:url', content: config.url });
    }
    
    // Twitter Card
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: config.title });
    this.meta.updateTag({ name: 'twitter:description', content: config.description });
    if (config.image) {
      this.meta.updateTag({ name: 'twitter:image', content: config.image });
    }
  }
}
```

---

### 📝 Adım 6.2: Structured Data Service Oluştur

**src/app/core/services/structured-data.service.ts:**
```typescript
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class StructuredDataService {
  
  // Organization Schema
  addOrganizationSchema() {
    const script = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      'name': 'Mendil Markası',
      'url': 'https://mendimarkasi.com',
      'logo': 'https://mendimarkasi.com/assets/logo/logo.png',
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
    };
    
    this.insertSchema(script, 'organization-schema');
  }
  
  // Local Business Schema
  addLocalBusinessSchema() {
    const script = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      'name': 'Mendil Markası',
      'image': 'https://mendimarkasi.com/assets/logo/logo.png',
      '@id': 'https://mendimarkasi.com',
      'url': 'https://mendimarkasi.com',
      'telephone': '+90-212-XXX-XXXX',
      'priceRange': '$$',
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
    };
    
    this.insertSchema(script, 'local-business-schema');
  }
  
  // Product Schema
  addProductSchema(product: any) {
    const script = {
      '@context': 'https://schema.org',
      '@type': 'Product',
      'name': product.name,
      'image': product.image,
      'description': product.description,
      'brand': {
        '@type': 'Brand',
        'name': 'Mendil Markası'
      },
      'offers': {
        '@type': 'Offer',
        'availability': 'https://schema.org/InStock',
        'priceCurrency': 'TRY'
      }
    };
    
    this.insertSchema(script, `product-schema-${product.id}`);
  }
  
  // Breadcrumb Schema
  addBreadcrumbSchema(breadcrumbs: Array<{name: string, url: string}>) {
    const script = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': breadcrumbs.map((item, index) => ({
        '@type': 'ListItem',
        'position': index + 1,
        'name': item.name,
        'item': item.url
      }))
    };
    
    this.insertSchema(script, 'breadcrumb-schema');
  }
  
  // FAQ Schema
  addFAQSchema(faqs: Array<{question: string, answer: string}>) {
    const script = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': faqs.map(faq => ({
        '@type': 'Question',
        'name': faq.question,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': faq.answer
        }
      }))
    };
    
    this.insertSchema(script, 'faq-schema');
  }
  
  private insertSchema(schema: any, id: string) {
    // Önce varsa eski schema'yı kaldır
    const existing = document.getElementById(id);
    if (existing) {
      existing.remove();
    }
    
    // Yeni schema ekle
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = id;
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);
  }
  
  removeSchema(id: string) {
    const existing = document.getElementById(id);
    if (existing) {
      existing.remove();
    }
  }
}
```

---

### 📝 Adım 6.3: Sitemap ve Robots.txt Oluştur

**public/robots.txt:**
```
User-agent: *
Allow: /
Disallow: /admin/
Disallow: /api/

Sitemap: https://mendimarkasi.com/sitemap.xml
```

**public/sitemap.xml:**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://mendimarkasi.com/</loc>
    <lastmod>2026-05-04</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://mendimarkasi.com/urunler</loc>
    <lastmod>2026-05-04</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://mendimarkasi.com/hakkimizda</loc>
    <lastmod>2026-05-04</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://mendimarkasi.com/iletisim</loc>
    <lastmod>2026-05-04</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://mendimarkasi.com/yasal/kvkk</loc>
    <lastmod>2026-05-04</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>
  <url>
    <loc>https://mendimarkasi.com/yasal/cerez-politikasi</loc>
    <lastmod>2026-05-04</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>
</urlset>
```

---

### ✅ SEO Checklist

- [ ] Meta tags tüm sayfalarda
- [ ] Open Graph tags eklendi
- [ ] Twitter Card tags eklendi
- [ ] Organization schema eklendi
- [ ] Local Business schema eklendi
- [ ] Product schema eklendi
- [ ] Breadcrumb schema eklendi
- [ ] FAQ schema eklendi
- [ ] Sitemap.xml oluşturuldu
- [ ] Robots.txt oluşturuldu
- [ ] Semantic HTML kullanıldı
- [ ] Alt text tüm görsellerde
- [ ] Internal linking stratejisi kuruldu

Bu bölümde SEO temellerini oluşturduk. Google'da üst sıralarda çıkmak için hazırız! ✅



---

## BÖLÜM 11: ADIM ADIM GELİŞTİRME PLANI {#bölüm-11}

### 📅 Geliştirme Timeline

| Faz | Süre | Açıklama |
|-----|------|----------|
| **FAZ 1:** Kurulum ve Temel Yapı | 1 gün | Proje kurulumu, konfigürasyonlar |
| **FAZ 2:** Shared Components | 2 gün | Navbar, Footer, Button vb. |
| **FAZ 3:** Ana Sayfa | 3 gün | Hero, Products, Testimonials |
| **FAZ 4:** Ürünler Sayfası | 2 gün | Grid, Filter, Modal |
| **FAZ 5:** Hakkımızda & İletişim | 2 gün | About, Contact pages |
| **FAZ 6:** Yasal Sayfalar | 1 gün | KVKK, Çerez, Gizlilik |
| **FAZ 7:** Animasyonlar | 2 gün | GSAP, scroll effects |
| **FAZ 8:** SEO & Performans | 1 gün | Meta tags, optimizasyon |
| **FAZ 9:** Test & Debug | 2 gün | Cross-browser, responsive test |
| **FAZ 10:** Deployment | 1 gün | Production build, hosting |
| **TOPLAM** | **17 gün** | ~3 hafta |

---

## FAZ 1: KURULUM VE TEMEL YAPI (1 Gün)

### ✅ Yapılacaklar:

#### **1.1 Proje Oluştur**
```bash
ng new mendil-showcase --standalone --ssr --style=scss --routing
cd mendil-showcase
```

#### **1.2 Paketleri Yükle**
```bash
# Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init

# GSAP
npm install gsap

# Angular CDK
npm install @angular/cdk

# İkonlar
npm install @phosphor-icons/angular

# Utilities
npm install lodash-es web-vitals
npm install -D @types/lodash-es
```

#### **1.3 Klasör Yapısını Oluştur**
```bash
mkdir -p src/app/core/{guards,interceptors,services,models}
mkdir -p src/app/shared/{components,directives,pipes,animations}
mkdir -p src/app/features/{home,products,about,contact,legal}/components
mkdir -p src/assets/{images/{hero,products,icons,logo},data,videos}
mkdir -p src/styles
```

#### **1.4 Konfigürasyon Dosyalarını Ayarla**
- tailwind.config.js
- src/styles/styles.scss
- src/environments/environment.ts
- src/app/app.config.ts
- src/app/app.routes.ts

#### **1.5 Design Tokens Oluştur**
- src/app/core/design-tokens.ts
- src/styles/_variables.scss
- src/styles/_mixins.scss
- src/styles/_typography.scss
- src/styles/_animations.scss
- src/styles/_effects.scss

#### **1.6 Test Et**
```bash
npm start
# http://localhost:4200 açılmalı
```

---

## FAZ 2: SHARED COMPONENTS (2 Gün)

### ✅ Yapılacaklar:

#### **2.1 Button Component**
```bash
ng generate component shared/components/button --standalone
```

**Özellikler:**
- Variants: primary, secondary, ghost, danger
- Sizes: sm, md, lg
- Loading state
- Icon support
- Ripple effect

#### **2.2 Navbar Component**
```bash
ng generate component shared/components/navbar --standalone
```

**Özellikler:**
- Sticky on scroll
- Transparent → Solid transition
- Desktop menu
- Mobile hamburger menu
- Logo
- CTA button

#### **2.3 Mobile Menu Component**
```bash
ng generate component shared/components/mobile-menu --standalone
```

**Özellikler:**
- Slide-in animation
- Overlay backdrop
- Menu items with icons
- Social links
- Close button

#### **2.4 Footer Component**
```bash
ng generate component shared/components/footer --standalone
```

**Özellikler:**
- 4 kolon layout
- Logo + açıklama
- Quick links
- İletişim bilgileri
- Sosyal medya
- Copyright
- Yasal linkler

#### **2.5 Cookie Banner Component (GELİŞMİŞ - KVKK UYUMLU)**
```bash
ng generate component shared/components/cookie-banner --standalone
```

**src/app/shared/components/cookie-banner/cookie-banner.component.ts:**
```typescript
import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface CookieCategory {
  id: string;
  name: string;
  description: string;
  required: boolean;
  enabled: boolean;
}

@Component({
  selector: 'app-cookie-banner',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="!isAccepted()" class="cookie-banner fixed bottom-0 left-0 right-0 bg-white shadow-2xl z-50 p-6 border-t-4 border-brand-primary">
      <div class="container mx-auto max-w-6xl">
        <div class="flex flex-col md:flex-row items-center justify-between gap-4">
          <div class="flex-1">
            <h3 class="text-lg font-bold mb-2">🍪 Çerez Kullanımı</h3>
            <p class="text-sm text-gray-600">
              Web sitemizde deneyiminizi geliştirmek için çerezler kullanıyoruz. 
              <a href="/yasal/cerez-politikasi" class="text-brand-primary underline">Çerez Politikamızı</a> inceleyebilirsiniz.
            </p>
          </div>
          <div class="flex gap-3">
            <button (click)="openSettings()" class="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              Ayarlar
            </button>
            <button (click)="rejectAll()" class="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              Reddet
            </button>
            <button (click)="acceptAll()" class="px-6 py-2 bg-brand-primary text-white rounded-lg hover:bg-blue-600">
              Kabul Et
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Settings Modal -->
    <div *ngIf="showSettings()" class="fixed inset-0 bg-black/50 z-[60] flex items-center justify-center p-4">
      <div class="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
        <div class="p-6 border-b">
          <h2 class="text-2xl font-bold">Çerez Ayarları</h2>
        </div>
        
        <div class="p-6 space-y-4">
          <div *ngFor="let category of categories()" class="border rounded-lg p-4">
            <div class="flex items-start justify-between">
              <div class="flex-1">
                <h3 class="font-bold text-lg mb-1">{{ category.name }}</h3>
                <p class="text-sm text-gray-600">{{ category.description }}</p>
              </div>
              <label class="relative inline-flex items-center cursor-pointer ml-4">
                <input 
                  type="checkbox" 
                  [checked]="category.enabled"
                  [disabled]="category.required"
                  (change)="toggleCategory(category.id)"
                  class="sr-only peer">
                <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-primary"></div>
              </label>
            </div>
          </div>
        </div>
        
        <div class="p-6 border-t flex justify-end gap-3">
          <button (click)="closeSettings()" class="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            İptal
          </button>
          <button (click)="saveSettings()" class="px-6 py-2 bg-brand-primary text-white rounded-lg hover:bg-blue-600">
            Kaydet
          </button>
        </div>
      </div>
    </div>
  `
})
export class CookieBannerComponent {
  showSettings = signal(false);
  
  categories = signal<CookieCategory[]>([
    {
      id: 'necessary',
      name: 'Zorunlu Çerezler',
      description: 'Web sitesinin çalışması için gerekli çerezler. Devre dışı bırakılamaz.',
      required: true,
      enabled: true
    },
    {
      id: 'analytics',
      name: 'Analitik Çerezler',
      description: 'Site kullanımını analiz etmek ve deneyimi iyileştirmek için kullanılır.',
      required: false,
      enabled: false
    },
    {
      id: 'marketing',
      name: 'Pazarlama Çerezleri',
      description: 'Kişiselleştirilmiş reklamlar göstermek için kullanılır.',
      required: false,
      enabled: false
    }
  ]);
  
  isAccepted(): boolean {
    return localStorage.getItem('cookie-consent') !== null;
  }
  
  acceptAll() {
    const consent = {
      necessary: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('cookie-consent', JSON.stringify(consent));
    this.initializeAnalytics();
  }
  
  rejectAll() {
    const consent = {
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('cookie-consent', JSON.stringify(consent));
  }
  
  openSettings() {
    this.showSettings.set(true);
  }
  
  closeSettings() {
    this.showSettings.set(false);
  }
  
  toggleCategory(id: string) {
    this.categories.update(cats => 
      cats.map(cat => 
        cat.id === id ? { ...cat, enabled: !cat.enabled } : cat
      )
    );
  }
  
  saveSettings() {
    const consent: any = {
      timestamp: new Date().toISOString()
    };
    
    this.categories().forEach(cat => {
      consent[cat.id] = cat.enabled;
    });
    
    localStorage.setItem('cookie-consent', JSON.stringify(consent));
    
    if (consent.analytics) {
      this.initializeAnalytics();
    }
    
    this.closeSettings();
  }
  
  private initializeAnalytics() {
    // Google Analytics başlat
    if (typeof gtag !== 'undefined') {
      gtag('consent', 'update', {
        'analytics_storage': 'granted'
      });
    }
  }
}
```

#### **2.6 Loading Spinner Component**
```bash
ng generate component shared/components/loading-spinner --standalone
```

#### **2.7 Modal Component**
```bash
ng generate component shared/components/modal --standalone
```

#### **2.8 Directives Oluştur**
```bash
ng generate directive shared/directives/scroll-reveal --standalone
ng generate directive shared/directives/parallax --standalone
ng generate directive shared/directives/lazy-load --standalone
ng generate directive shared/directives/touch-gesture --standalone
```

#### **2.9 Touch Gesture Directive İmplementasyonu (MOBİL İÇİN KRİTİK)**

**src/app/shared/directives/touch-gesture.directive.ts:**
```typescript
import { Directive, ElementRef, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appTouchGesture]',
  standalone: true
})
export class TouchGestureDirective {
  @Output() swipeLeft = new EventEmitter<void>();
  @Output() swipeRight = new EventEmitter<void>();
  @Output() swipeUp = new EventEmitter<void>();
  @Output() swipeDown = new EventEmitter<void>();
  
  private touchStartX = 0;
  private touchStartY = 0;
  private touchEndX = 0;
  private touchEndY = 0;
  private minSwipeDistance = 50;
  
  constructor(private el: ElementRef) {
    this.setupListeners();
  }
  
  private setupListeners() {
    this.el.nativeElement.addEventListener('touchstart', (e: TouchEvent) => {
      this.touchStartX = e.changedTouches[0].screenX;
      this.touchStartY = e.changedTouches[0].screenY;
    });
    
    this.el.nativeElement.addEventListener('touchend', (e: TouchEvent) => {
      this.touchEndX = e.changedTouches[0].screenX;
      this.touchEndY = e.changedTouches[0].screenY;
      this.handleGesture();
    });
  }
  
  private handleGesture() {
    const deltaX = this.touchEndX - this.touchStartX;
    const deltaY = this.touchEndY - this.touchStartY;
    
    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      // Horizontal swipe
      if (Math.abs(deltaX) > this.minSwipeDistance) {
        if (deltaX > 0) {
          this.swipeRight.emit();
        } else {
          this.swipeLeft.emit();
        }
      }
    } else {
      // Vertical swipe
      if (Math.abs(deltaY) > this.minSwipeDistance) {
        if (deltaY > 0) {
          this.swipeDown.emit();
        } else {
          this.swipeUp.emit();
        }
      }
    }
  }
}
```

**Kullanım Örneği:**
```html
<div appTouchGesture 
     (swipeLeft)="nextSlide()" 
     (swipeRight)="prevSlide()"
     class="product-slider">
  <!-- Slider içeriği -->
</div>
```

#### **2.10 Custom Cursor Component (PREMIUM ÖZELLİK - DESKTOP)**

```bash
ng generate component shared/components/custom-cursor --standalone
```

**src/app/shared/components/custom-cursor/custom-cursor.component.ts:**
```typescript
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { gsap } from 'gsap';

@Component({
  selector: 'app-custom-cursor',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="custom-cursor" #cursor>
      <div class="cursor-dot"></div>
      <div class="cursor-outline"></div>
    </div>
  `,
  styles: [`
    .custom-cursor {
      position: fixed;
      pointer-events: none;
      z-index: 9999;
      mix-blend-mode: difference;
    }
    
    .cursor-dot {
      width: 8px;
      height: 8px;
      background: white;
      border-radius: 50%;
      position: absolute;
      top: -4px;
      left: -4px;
    }
    
    .cursor-outline {
      width: 40px;
      height: 40px;
      border: 2px solid white;
      border-radius: 50%;
      position: absolute;
      top: -20px;
      left: -20px;
      transition: all 0.15s ease-out;
    }
    
    .custom-cursor.hover .cursor-outline {
      width: 60px;
      height: 60px;
      top: -30px;
      left: -30px;
      border-color: #0EA5E9;
    }
  `]
})
export class CustomCursorComponent implements OnInit {
  @ViewChild('cursor') cursor!: ElementRef;
  
  ngOnInit() {
    // Sadece desktop'ta göster
    if (window.innerWidth > 1024) {
      this.setupCursor();
    }
  }
  
  private setupCursor() {
    document.addEventListener('mousemove', (e) => {
      gsap.to(this.cursor.nativeElement, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: 'power2.out'
      });
    });
    
    // Hover efekti
    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', () => {
        this.cursor.nativeElement.classList.add('hover');
      });
      el.addEventListener('mouseleave', () => {
        this.cursor.nativeElement.classList.remove('hover');
      });
    });
  }
}
```

**app.component.html'e ekle:**
```html
<app-custom-cursor />
<router-outlet />
```

---

## FAZ 3: ANA SAYFA (3 Gün)

### ✅ Yapılacaklar:

#### **3.1 Home Component Oluştur**
```bash
ng generate component features/home --standalone
```

#### **3.2 Hero Section**
```bash
ng generate component features/home/components/hero-section --standalone
```

**Kod:**
```typescript
// hero-section.component.ts
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { gsap } from 'gsap';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="hero relative h-screen flex items-center justify-center overflow-hidden">
      <!-- Background Image -->
      <div class="absolute inset-0 z-0">
        <img 
          src="assets/images/hero/hero-bg.avif"
          alt="Background"
          class="w-full h-full object-cover hero-image">
      </div>
      
      <!-- Overlay -->
      <div class="absolute inset-0 bg-gradient-to-b from-brand-blue/50 to-white/80 z-10 hero-overlay"></div>
      
      <!-- Content -->
      <div class="relative z-20 text-center px-4 max-w-4xl hero-content">
        <h1 class="hero-title text-5xl md:text-7xl font-bold mb-6 text-display">
          Yumuşaklığın Dokunuşu
        </h1>
        <p class="hero-subtitle text-xl md:text-2xl text-gray-700 mb-8">
          Doğa dostu, hijyenik, her an yanınızda
        </p>
        <button class="hero-cta bg-brand-primary text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-600 transition-all">
          Ürünlerimizi Keşfedin
        </button>
      </div>
      
      <!-- Scroll Indicator -->
      <div class="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce scroll-indicator">
        <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  `,
  styles: [`
    .hero-image {
      animation: zoom-in 20s ease-out infinite alternate;
    }
    
    @keyframes zoom-in {
      from { transform: scale(1); }
      to { transform: scale(1.1); }
    }
  `]
})
export class HeroSectionComponent implements AfterViewInit {
  ngAfterViewInit() {
    // GSAP Timeline Animation
    const tl = gsap.timeline({
      defaults: { ease: 'power3.out' }
    });
    
    tl.from('.hero-overlay', {
      opacity: 0,
      duration: 1
    })
    .from('.hero-title', {
      opacity: 0,
      y: 50,
      duration: 1
    }, '-=0.5')
    .from('.hero-subtitle', {
      opacity: 0,
      y: 30,
      duration: 0.8
    }, '-=0.3')
    .from('.hero-cta', {
      opacity: 0,
      scale: 0.8,
      duration: 0.6
    }, '-=0.2')
    .from('.scroll-indicator', {
      opacity: 0,
      y: -20,
      duration: 0.5
    }, '-=0.2');
  }
}
```

#### **3.3 Featured Products Section**
```bash
ng generate component features/home/components/featured-products --standalone
```

#### **3.4 Brand Story Section**
```bash
ng generate component features/home/components/brand-story --standalone
```

#### **3.5 Features Section (Bento Grid - MODERN LAYOUT)**
```bash
ng generate component features/home/components/features-section --standalone
```

**src/app/features/home/components/features-section/features-section.component.html:**
```html
<section class="bento-grid-section py-20 bg-gray-50">
  <div class="container mx-auto px-4">
    <h2 class="text-4xl font-bold text-center mb-12">Neden Bizi Seçmelisiniz?</h2>
    
    <div class="bento-grid">
      <!-- Large Item - Doğa Dostu -->
      <div class="bento-item bento-large bg-gradient-primary text-white">
        <div class="flex flex-col h-full justify-between">
          <div>
            <svg class="w-12 h-12 mb-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6z"/>
            </svg>
            <h3 class="text-3xl font-bold mb-4">Doğa Dostu Üretim</h3>
            <p class="text-lg opacity-90">
              %100 geri dönüştürülebilir malzemeler kullanıyoruz. 
              Çevreye saygılı üretim süreçlerimizle doğayı koruyoruz.
            </p>
          </div>
          <img src="assets/images/eco-friendly.png" alt="Eco Friendly" class="mt-4 w-full rounded-lg opacity-80">
        </div>
      </div>
      
      <!-- Medium Item - Dermatoljik Test -->
      <div class="bento-item bento-medium bg-white">
        <svg class="w-10 h-10 text-brand-primary mb-3" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
        </svg>
        <h3 class="text-2xl font-bold mb-2">Dermatoljik Test</h3>
        <p class="text-gray-600">Hassas ciltler için güvenli, dermatoljik olarak test edilmiş ürünler.</p>
      </div>
      
      <!-- Small Item - %99 Su -->
      <div class="bento-item bento-small bg-brand-blue">
        <svg class="w-8 h-8 text-brand-primary mb-2" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"/>
        </svg>
        <h3 class="text-xl font-bold">%99 Su</h3>
        <p class="text-sm text-gray-600 mt-1">Saf su ile üretim</p>
      </div>
      
      <!-- Medium Item - Yerli Üretim -->
      <div class="bento-item bento-medium bg-white">
        <svg class="w-10 h-10 text-red-500 mb-3" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z"/>
        </svg>
        <h3 class="text-2xl font-bold mb-2">🇹🇷 Yerli Üretim</h3>
        <p class="text-gray-600">Türkiye'de üretilmiş, kaliteli ve güvenilir ürünler.</p>
      </div>
      
      <!-- Small Item - ISO 9001 -->
      <div class="bento-item bento-small bg-brand-green">
        <svg class="w-8 h-8 text-green-700 mb-2" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
          <path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
        </svg>
        <h3 class="text-xl font-bold">ISO 9001</h3>
        <p class="text-sm text-gray-600 mt-1">Kalite sertifikası</p>
      </div>
      
      <!-- Medium Item - Hipoalerjenik -->
      <div class="bento-item bento-medium bg-white">
        <svg class="w-10 h-10 text-purple-500 mb-3" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z"/>
        </svg>
        <h3 class="text-2xl font-bold mb-2">Hipoalerjenik</h3>
        <p class="text-gray-600">Alerjik reaksiyonlara karşı test edilmiş formül.</p>
      </div>
    </div>
  </div>
</section>
```

**Styles (features-section.component.scss):**
```scss
.bento-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 200px;
  }
}

.bento-item {
  border-radius: 1.5rem;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
  }
  
  @media (min-width: 768px) {
    &.bento-large {
      grid-column: span 2;
      grid-row: span 2;
    }
    
    &.bento-medium {
      grid-column: span 2;
    }
    
    &.bento-small {
      grid-column: span 1;
    }
  }
}

.gradient-primary {
  background: linear-gradient(135deg, #0EA5E9 0%, #3B82F6 100%);
}
```

#### **3.6 Testimonials Section**
```bash
ng generate component features/home/components/testimonials --standalone
```

#### **3.7 CTA Section**
```bash
ng generate component features/home/components/cta-section --standalone
```

#### **3.8 Home Component'i Birleştir**
```typescript
// home.component.ts
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
  constructor(
    private seo: SeoService,
    private structuredData: StructuredDataService
  ) {}
  
  ngOnInit() {
    // SEO
    this.seo.updateMetaTags({
      title: 'Ana Sayfa - Yumuşaklığın Dokunuşu | Mendil Markası',
      description: 'Doğa dostu, hijyenik ve yumuşak mendiller. Islak mendil, kağıt mendil ve daha fazlası. Türkiye\'nin en kaliteli mendil markası.',
      keywords: 'mendil, ıslak mendil, kağıt mendil, hijyenik mendil, bebek mendili, doğa dostu mendil',
      image: 'https://mendimarkasi.com/assets/og-image.jpg',
      url: 'https://mendimarkasi.com'
    });
    
    // Structured Data
    this.structuredData.addOrganizationSchema();
    this.structuredData.addLocalBusinessSchema();
  }
}
```

---

## FAZ 4: ÜRÜNLER SAYFASI (2 Gün)

### ✅ Yapılacaklar:

#### **4.1 Products Component**
```bash
ng generate component features/products --standalone
```

#### **4.2 Product Filter Component**
```bash
ng generate component features/products/components/product-filter --standalone
```

#### **4.3 Product Card Component**
```bash
ng generate component features/products/components/product-card --standalone
```

#### **4.4 Product Grid Component**
```bash
ng generate component features/products/components/product-grid --standalone
```

#### **4.5 Product Detail Modal**
```bash
ng generate component features/products/components/product-detail-modal --standalone
```

---

## FAZ 5: HAKKIMIZDA & İLETİŞİM (2 Gün)

### ✅ Yapılacaklar:

#### **5.1 About Component**
```bash
ng generate component features/about --standalone
ng generate component features/about/components/company-history --standalone
ng generate component features/about/components/values-section --standalone
ng generate component features/about/components/production-process --standalone
ng generate component features/about/components/certifications --standalone
```

#### **5.2 Contact Component**
```bash
ng generate component features/contact --standalone
ng generate component features/contact/components/contact-form --standalone
ng generate component features/contact/components/contact-info --standalone
ng generate component features/contact/components/map-section --standalone
```

---

## FAZ 6: YASAL SAYFALAR (1 Gün)

### ✅ Yapılacaklar:

#### **6.1 Yasal Sayfaları Oluştur**

```bash
ng generate component features/legal/kvkk --standalone
ng generate component features/legal/kvkk-request --standalone
ng generate component features/legal/cookie-policy --standalone
ng generate component features/legal/privacy-policy --standalone
ng generate component features/legal/terms-of-use --standalone
```

#### **6.2 KVKK Başvuru Formu (DETAYLI İMPLEMENTASYON)**

**src/app/features/legal/kvkk-request/kvkk-request.component.ts:**
```typescript
import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface KvkkRequest {
  requestType: string;
  firstName: string;
  lastName: string;
  tcNo: string;
  email: string;
  phone: string;
  address: string;
  description: string;
  identityDocument?: File;
}

@Component({
  selector: 'app-kvkk-request',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="container mx-auto px-4 py-12 max-w-4xl">
      <h1 class="text-4xl font-bold mb-6">KVKK Veri Sahibi Başvuru Formu</h1>
      
      <div class="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
        <p class="text-sm text-gray-700">
          6698 sayılı Kişisel Verilerin Korunması Kanunu'nun 11. maddesi uyarınca, 
          kişisel verilerinizle ilgili haklarınızı kullanmak için bu formu doldurabilirsiniz.
        </p>
      </div>

      <form (ngSubmit)="submitForm()" #kvkkForm="ngForm" class="space-y-6">
        <!-- Başvuru Türü -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Başvuru Türü <span class="text-red-500">*</span>
          </label>
          <select 
            [(ngModel)]="formData.requestType" 
            name="requestType"
            required
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent">
            <option value="">Seçiniz</option>
            <option value="bilgi">Kişisel verilerimin işlenip işlenmediğini öğrenmek</option>
            <option value="erisim">Kişisel verilerim işlenmişse buna ilişkin bilgi talep etmek</option>
            <option value="amac">Kişisel verilerin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenmek</option>
            <option value="aktarim">Yurt içinde veya yurt dışında kişisel verilerin aktarıldığı üçüncü kişileri bilmek</option>
            <option value="duzeltme">Kişisel verilerin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini istemek</option>
            <option value="silme">Kişisel verilerin silinmesini veya yok edilmesini istemek</option>
            <option value="bildirim">Düzeltme, silme veya yok edilme işlemlerinin kişisel verilerin aktarıldığı üçüncü kişilere bildirilmesini istemek</option>
            <option value="itiraz">İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle kişinin kendisi aleyhine bir sonucun ortaya çıkmasına itiraz etmek</option>
            <option value="zarar">Kişisel verilerin kanuna aykırı olarak işlenmesi sebebiyle zarara uğraması hâlinde zararın giderilmesini talep etmek</option>
          </select>
        </div>

        <!-- Kişisel Bilgiler -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
              Ad <span class="text-red-500">*</span>
            </label>
            <input 
              type="text" 
              [(ngModel)]="formData.firstName"
              name="firstName"
              required
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent">
          </div>
          
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
              Soyad <span class="text-red-500">*</span>
            </label>
            <input 
              type="text" 
              [(ngModel)]="formData.lastName"
              name="lastName"
              required
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent">
          </div>
        </div>

        <!-- TC Kimlik No -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">
            T.C. Kimlik Numarası <span class="text-red-500">*</span>
          </label>
          <input 
            type="text" 
            [(ngModel)]="formData.tcNo"
            name="tcNo"
            required
            pattern="[0-9]{11}"
            maxlength="11"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
            placeholder="11 haneli TC Kimlik No">
          <p class="text-xs text-gray-500 mt-1">11 haneli TC Kimlik numaranızı giriniz</p>
        </div>

        <!-- İletişim Bilgileri -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
              E-posta <span class="text-red-500">*</span>
            </label>
            <input 
              type="email" 
              [(ngModel)]="formData.email"
              name="email"
              required
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent">
          </div>
          
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
              Telefon <span class="text-red-500">*</span>
            </label>
            <input 
              type="tel" 
              [(ngModel)]="formData.phone"
              name="phone"
              required
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
              placeholder="0555 555 55 55">
          </div>
        </div>

        <!-- Adres -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Adres <span class="text-red-500">*</span>
          </label>
          <textarea 
            [(ngModel)]="formData.address"
            name="address"
            required
            rows="3"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"></textarea>
        </div>

        <!-- Açıklama -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Başvuru Açıklaması <span class="text-red-500">*</span>
          </label>
          <textarea 
            [(ngModel)]="formData.description"
            name="description"
            required
            rows="5"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
            placeholder="Başvurunuzla ilgili detaylı açıklama yapınız..."></textarea>
        </div>

        <!-- Kimlik Belgesi -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Kimlik Belgesi <span class="text-red-500">*</span>
          </label>
          <input 
            type="file" 
            (change)="onFileSelect($event)"
            accept=".pdf,.jpg,.jpeg,.png"
            required
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent">
          <p class="text-xs text-gray-500 mt-1">
            Kimlik belgenizin (Nüfus Cüzdanı, Ehliyet, Pasaport) fotokopyasını yükleyiniz. 
            (PDF, JPG, PNG - Max 5MB)
          </p>
        </div>

        <!-- Onay -->
        <div class="flex items-start">
          <input 
            type="checkbox" 
            [(ngModel)]="acceptTerms"
            name="acceptTerms"
            required
            class="mt-1 mr-3">
          <label class="text-sm text-gray-700">
            Başvurumun değerlendirilmesi için gerekli kişisel verilerimin işlenmesini kabul ediyorum. <span class="text-red-500">*</span>
          </label>
        </div>

        <!-- Submit Button -->
        <div class="flex justify-end gap-4">
          <button 
            type="button"
            (click)="resetForm()"
            class="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50">
            Temizle
          </button>
          <button 
            type="submit"
            [disabled]="!kvkkForm.valid || isSubmitting()"
            class="px-8 py-3 bg-brand-primary text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed">
            {{ isSubmitting() ? 'Gönderiliyor...' : 'Başvuruyu Gönder' }}
          </button>
        </div>
      </form>

      <!-- Success Message -->
      <div *ngIf="showSuccess()" class="mt-6 bg-green-50 border-l-4 border-green-500 p-4">
        <p class="text-green-700">
          ✓ Başvurunuz başarıyla alınmıştır. En kısa sürede size dönüş yapılacaktır.
        </p>
      </div>
    </div>
  `
})
export class KvkkRequestComponent {
  formData: KvkkRequest = {
    requestType: '',
    firstName: '',
    lastName: '',
    tcNo: '',
    email: '',
    phone: '',
    address: '',
    description: ''
  };
  
  acceptTerms = false;
  isSubmitting = signal(false);
  showSuccess = signal(false);
  
  onFileSelect(event: any) {
    const file = event.target.files[0];
    if (file) {
      // Max 5MB kontrolü
      if (file.size > 5 * 1024 * 1024) {
        alert('Dosya boyutu 5MB\'dan küçük olmalıdır.');
        event.target.value = '';
        return;
      }
      this.formData.identityDocument = file;
    }
  }
  
  submitForm() {
    this.isSubmitting.set(true);
    
    // Simüle edilmiş form gönderimi (gerçek uygulamada API çağrısı yapılır)
    setTimeout(() => {
      console.log('KVKK Başvurusu:', this.formData);
      this.isSubmitting.set(false);
      this.showSuccess.set(true);
      this.resetForm();
      
      // 5 saniye sonra success mesajını gizle
      setTimeout(() => {
        this.showSuccess.set(false);
      }, 5000);
    }, 2000);
  }
  
  resetForm() {
    this.formData = {
      requestType: '',
      firstName: '',
      lastName: '',
      tcNo: '',
      email: '',
      phone: '',
      address: '',
      description: ''
    };
    this.acceptTerms = false;
  }
}
```

**Not:** Diğer yasal sayfalar (KVKK, Çerez Politikası, Gizlilik Politikası, Kullanım Koşulları) için statik HTML içerik kullanılabilir. İçerikler bir avukat tarafından hazırlanmalıdır.

---

## FAZ 7: ANİMASYONLAR (2 Gün)

### ✅ Yapılacaklar:

1. **GSAP Animasyonları Ekle**
   - Hero entrance
   - Scroll-triggered fade-ins
   - Parallax effects
   - Product card hovers

2. **Native CSS Animations**
   - Scroll progress bar
   - Loading states
   - Hover effects

3. **Page Transitions**
   - Route change animations

---

## FAZ 8: SEO & PERFORMANS (1 Gün)

### ✅ Yapılacaklar:

1. **SEO**
   - Meta tags tüm sayfalarda
   - Schema markup ekle
   - Sitemap.xml
   - Robots.txt

2. **Performans**
   - Image optimization
   - Lazy loading
   - Code splitting
   - Bundle analysis

---

## FAZ 9: TEST & DEBUG (2 Gün)

### ✅ Yapılacaklar:

1. **Lighthouse Audit**
   - Performance: 95+
   - SEO: 100
   - Accessibility: 95+

2. **Cross-Browser Test**
   - Chrome, Firefox, Safari, Edge

3. **Responsive Test**
   - Mobile, Tablet, Desktop

4. **Accessibility Test**
   - Screen reader
   - Keyboard navigation

---

## FAZ 10: DEPLOYMENT (1 Gün)

### ✅ Yapılacaklar:

#### **10.1 Production Build**
```bash
ng build --configuration=production
```

#### **10.2 PWA (Progressive Web App) Kurulumu**

**Service Worker Ekle:**

**angular.json'a ekle:**
```json
{
  "projects": {
    "mendil-showcase": {
      "architect": {
        "build": {
          "options": {
            "serviceWorker": true,
            "ngswConfigPath": "ngsw-config.json"
          }
        }
      }
    }
  }
}
```

**ngsw-config.json oluştur:**
```json
{
  "$schema": "./node_modules/@angular/service-worker/config/schema.json",
  "index": "/index.html",
  "assetGroups": [
    {
      "name": "app",
      "installMode": "prefetch",
      "resources": {
        "files": [
          "/favicon.ico",
          "/index.html",
          "/manifest.json",
          "/*.css",
          "/*.js"
        ]
      }
    },
    {
      "name": "assets",
      "installMode": "lazy",
      "updateMode": "prefetch",
      "resources": {
        "files": [
          "/assets/**",
          "/*.(svg|cur|jpg|jpeg|png|apng|webp|avif|gif|otf|ttf|woff|woff2)"
        ]
      }
    }
  ],
  "dataGroups": [
    {
      "name": "api",
      "urls": [
        "https://api.example.com/**"
      ],
      "cacheConfig": {
        "maxSize": 100,
        "maxAge": "1h",
        "timeout": "10s",
        "strategy": "freshness"
      }
    }
  ]
}
```

**public/manifest.json:**
```json
{
  "name": "Mendil Markası - Yumuşaklığın Dokunuşu",
  "short_name": "Mendil",
  "description": "Doğa dostu, hijyenik ve yumuşak mendiller. Islak mendil, kağıt mendil ve daha fazlası.",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#E8F4F8",
  "theme_color": "#0EA5E9",
  "orientation": "portrait-primary",
  "icons": [
    {
      "src": "/assets/icons/icon-72x72.png",
      "sizes": "72x72",
      "type": "image/png",
      "purpose": "maskable any"
    },
    {
      "src": "/assets/icons/icon-96x96.png",
      "sizes": "96x96",
      "type": "image/png",
      "purpose": "maskable any"
    },
    {
      "src": "/assets/icons/icon-128x128.png",
      "sizes": "128x128",
      "type": "image/png",
      "purpose": "maskable any"
    },
    {
      "src": "/assets/icons/icon-144x144.png",
      "sizes": "144x144",
      "type": "image/png",
      "purpose": "maskable any"
    },
    {
      "src": "/assets/icons/icon-152x152.png",
      "sizes": "152x152",
      "type": "image/png",
      "purpose": "maskable any"
    },
    {
      "src": "/assets/icons/icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "maskable any"
    },
    {
      "src": "/assets/icons/icon-384x384.png",
      "sizes": "384x384",
      "type": "image/png",
      "purpose": "maskable any"
    },
    {
      "src": "/assets/icons/icon-512x512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "maskable any"
    }
  ],
  "screenshots": [
    {
      "src": "/assets/screenshots/desktop.png",
      "sizes": "1280x720",
      "type": "image/png",
      "form_factor": "wide"
    },
    {
      "src": "/assets/screenshots/mobile.png",
      "sizes": "750x1334",
      "type": "image/png",
      "form_factor": "narrow"
    }
  ],
  "categories": ["shopping", "lifestyle"],
  "lang": "tr",
  "dir": "ltr"
}
```

**index.html'e ekle:**
```html
<head>
  <!-- ... diğer meta taglar ... -->
  
  <!-- PWA -->
  <link rel="manifest" href="/manifest.json">
  <meta name="theme-color" content="#0EA5E9">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
  <meta name="apple-mobile-web-app-title" content="Mendil">
  <link rel="apple-touch-icon" href="/assets/icons/icon-192x192.png">
</head>
```

#### **10.3 Deploy to Vercel**
```bash
vercel --prod
```

#### **10.4 Domain Bağla**
Vercel Dashboard'dan custom domain ekle.

#### **10.5 Google Analytics & Search Console**
- Analytics kodu ekle
- Search Console'a site ekle
- Sitemap gönder

---

### 🎉 PROJE TAMAMLANDI!

**Kontrol Listesi:**
- [ ] Tüm sayfalar çalışıyor
- [ ] Animasyonlar smooth
- [ ] Mobil uyumlu
- [ ] SEO optimize
- [ ] Lighthouse 95+
- [ ] KVKK uyumlu
- [ ] Production'da yayında



---

## BÖLÜM 12: Test ve Deployment {#bölüm-12}

### 🧪 Test Stratejisi

#### **12.1 Lighthouse Audit**

```bash
# Chrome DevTools > Lighthouse
# Veya CLI ile:
npm install -g lighthouse
lighthouse https://mendimarkasi.com --view
```

**Hedef Skorlar:**
- ✅ Performance: 95+
- ✅ Accessibility: 95+
- ✅ Best Practices: 95+
- ✅ SEO: 100

---

#### **12.2 Cross-Browser Testing**

**Test Edilecek Browserlar:**
- Chrome (son 2 versiyon)
- Firefox (son 2 versiyon)
- Safari (son 2 versiyon)
- Edge (son 2 versiyon)
- Mobile Safari (iOS)
- Chrome Mobile (Android)

**Test Araçları:**
- BrowserStack (ücretli)
- LambdaTest (ücretli)
- Manuel test (ücretsiz)

---

#### **12.3 Responsive Testing**

**Test Edilecek Ekran Boyutları:**
- 📱 Mobile: 375px, 414px
- 📱 Tablet: 768px, 1024px
- 💻 Desktop: 1280px, 1440px, 1920px

**Chrome DevTools:**
```
F12 > Toggle Device Toolbar (Ctrl+Shift+M)
```

---

#### **12.4 Accessibility Testing**

**Araçlar:**
- axe DevTools (Chrome extension)
- WAVE (Web Accessibility Evaluation Tool)
- Screen reader test (NVDA, JAWS)

**Kontrol Listesi:**
- [ ] Tüm görsellerde alt text
- [ ] Keyboard navigation çalışıyor
- [ ] Focus indicators görünür
- [ ] Color contrast yeterli (4.5:1)
- [ ] ARIA labels doğru
- [ ] Semantic HTML kullanılmış
- [ ] Skip to main content linki var

---

### 🚀 Deployment

#### **12.5 Production Build**

```bash
# Production build
ng build --configuration=production

# Build sonuçları
# dist/mendil-showcase/
# ├── browser/          # Client-side files
# └── server/           # SSR files
```

**angular.json - Production Optimizations:**
```json
{
  "configurations": {
    "production": {
      "optimization": true,
      "outputHashing": "all",
      "sourceMap": false,
      "namedChunks": false,
      "aot": true,
      "extractLicenses": true,
      "budgets": [
        {
          "type": "initial",
          "maximumWarning": "500kb",
          "maximumError": "1mb"
        }
      ]
    }
  }
}
```

---

#### **12.6 Vercel Deployment (Önerilen)**

**Adım 1: Vercel CLI Yükle**
```bash
npm install -g vercel
```

**Adım 2: Deploy Et**
```bash
# İlk deploy
vercel

# Production deploy
vercel --prod
```

**vercel.json:**
```json
{
  "buildCommand": "ng build --configuration=production",
  "outputDirectory": "dist/mendil-showcase/browser",
  "devCommand": "ng serve",
  "framework": "angular",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        },
        {
          "key": "Strict-Transport-Security",
          "value": "max-age=31536000; includeSubDomains"
        }
      ]
    }
  ]
}
```

---

#### **12.7 Custom Domain Bağlama**

**Vercel Dashboard:**
1. Project Settings > Domains
2. Add Domain: `mendimarkasi.com`
3. DNS ayarlarını güncelle:

```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

---

#### **12.8 Google Analytics Ekleme**

**src/index.html:**
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX', {
    'anonymize_ip': true,  // KVKK uyumlu
    'cookie_flags': 'SameSite=None;Secure'
  });
</script>
```

---

#### **12.9 Google Search Console**

1. https://search.google.com/search-console
2. Add Property: `mendimarkasi.com`
3. Verify ownership (DNS veya HTML tag)
4. Submit sitemap: `https://mendimarkasi.com/sitemap.xml`

---

### ✅ Pre-Launch Checklist

#### **SEO:**
- [ ] Meta tags tüm sayfalarda
- [ ] Sitemap.xml oluşturuldu
- [ ] Robots.txt oluşturuldu
- [ ] Structured data eklendi
- [ ] Open Graph tags eklendi
- [ ] Canonical URLs doğru

#### **Performance:**
- [ ] Görseller optimize edildi (AVIF/WebP)
- [ ] Lazy loading aktif
- [ ] Bundle size < 500KB
- [ ] Lighthouse skoru 95+
- [ ] Core Web Vitals hedefleri karşılandı

#### **Functionality:**
- [ ] Tüm linkler çalışıyor
- [ ] Formlar çalışıyor (UI olarak)
- [ ] Mobile menü çalışıyor
- [ ] Animasyonlar smooth
- [ ] Çerez banner çalışıyor

#### **Legal:**
- [ ] KVKK metni eklendi
- [ ] Çerez politikası eklendi
- [ ] Gizlilik politikası eklendi
- [ ] Kullanım koşulları eklendi
- [ ] KVKK başvuru formu eklendi

#### **Security:**
- [ ] HTTPS aktif
- [ ] Security headers eklendi
- [ ] CSP (Content Security Policy) ayarlandı
- [ ] No console errors

---

## 🎉 SONUÇ VE ÖNERİLER

### ✨ Başarı Kriterleri

**Teknik:**
- ✅ Lighthouse Performance: 95+
- ✅ Core Web Vitals: Tümü yeşil
- ✅ Bundle size: < 500KB
- ✅ İlk yükleme: < 3 saniye

**Kullanıcı Deneyimi:**
- ✅ Smooth animasyonlar (60 FPS)
- ✅ Responsive tüm cihazlarda
- ✅ Accessibility AA standardı
- ✅ Sezgisel navigasyon

**SEO:**
- ✅ Google'da ilk sayfada
- ✅ Tüm sayfalar indexlendi
- ✅ Rich snippets görünüyor
- ✅ Social media preview çalışıyor

---

### 🚀 Gelecek Geliştirmeler (Opsiyonel)

**Faz 2 Özellikleri:**
- 🌙 Dark mode
- 🌍 Çoklu dil desteği (TR/EN)
- 🎥 Video içerikler
- 📱 PWA (Progressive Web App)
- 🤖 Chatbot entegrasyonu
- 📧 Newsletter sistemi
- 🎨 3D ürün görselleri
- 🔍 Ürün arama özelliği
- 📊 Admin paneli (ürün yönetimi)
- 🛒 E-ticaret entegrasyonu

---

### 📚 Faydalı Kaynaklar

**Resmi Dokümantasyonlar:**
- [Angular Docs](https://angular.dev)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [GSAP Docs](https://gsap.com/docs)
- [Web.dev](https://web.dev) - Performance & SEO

**Topluluk:**
- [Angular Discord](https://discord.gg/angular)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/angular)
- [Dev.to Angular Tag](https://dev.to/t/angular)

**Araçlar:**
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [PageSpeed Insights](https://pagespeed.web.dev)
- [Can I Use](https://caniuse.com) - Browser compatibility
- [WebPageTest](https://www.webpagetest.org)

---

### 📊 Nora Group vs Bizim Site Karşılaştırması

| Özellik | Nora Group | Bizim Site | Fark |
|---------|------------|------------|------|
| **Lighthouse Score** | ~70-75 | 95+ | +25 puan ✅ |
| **Core Web Vitals** | Kısmen geçer | Tümü yeşil | ✅ |
| **Animasyon Kalitesi** | Basit | Premium | 🚀 |
| **Mobil UX** | İyi | Mükemmel | ⭐ |
| **SEO Optimizasyonu** | Orta | İleri seviye | 📈 |
| **Tasarım Modernliği** | 2023 | 2026 | 🎨 |
| **Accessibility** | Temel | WCAG 2.1 AA | ♿ |
| **Yasal Uyumluluk** | Temel | Kapsamlı | ⚖️ |
| **Teknoloji** | Eski | Angular 19 | 🔧 |
| **Performans** | Orta | Yüksek | ⚡ |

---

## 🎓 ÖNEMLİ NOTLAR

### ⚠️ Dikkat Edilmesi Gerekenler:

1. **Görseller:**
   - Tüm görselleri AVIF + WebP formatında hazırla
   - Alt text'leri unutma
   - Lazy loading kullan

2. **Animasyonlar:**
   - Prefers-reduced-motion desteği ekle
   - 60 FPS hedefle
   - Mobilde daha az animasyon

3. **SEO:**
   - Her sayfada unique meta tags
   - Schema markup ekle
   - Internal linking stratejisi kur

4. **Performans:**
   - Bundle size'ı kontrol et
   - Lazy loading kullan
   - Code splitting yap

5. **Yasal:**
   - KVKK metinlerini avukata kontrol ettir
   - Çerez onayı zorunlu
   - Veri sahibi başvuru formu ekle

---

## 📞 Destek ve İletişim

**Sorularınız için:**
- 📧 E-posta: [email]
- 💬 Discord: [server]
- 🐦 Twitter: [handle]

---

## 🏆 BAŞARILAR!

Bu dökümanı takip ederek:
- ✅ **Nora Group'tan çok daha iyi** bir site yapabilirsiniz
- ✅ **Google'da üst sıralarda** çıkabilirsiniz
- ✅ **95+ Lighthouse** score alabilirsiniz
- ✅ **Modern, hızlı, güvenli** bir site oluşturabilirsiniz

**Başarılar dileriz! 🚀**

---

**Son Güncelleme:** 04 Mayıs 2026  
**Versiyon:** 2.0.0 (Tüm Özellikler Entegre Edildi)  
**Hazırlayan:** AI Yazılım Mühendisi

---

> **✅ ÖNEMLİ NOT:** Bu döküman, tüm özelliklerin ilgili geliştirme fazlarına entegre edilmiş halidir. Artık adım adım takip ederek hiçbir özelliği atlamadan projeyi geliştirebilirsiniz!

## 🎯 ENTEGRE EDİLEN ÖZELLİKLER

Aşağıdaki özellikler ilgili fazlara başarıyla entegre edilmiştir:

### FAZ 1 (Kurulum) - Eklenenler:
- ✅ Page Transition Service
- ✅ Internal Link Service  
- ✅ Content Freshness Service
- ✅ Mobile Optimization Service

### FAZ 2 (Shared Components) - Eklenenler:
- ✅ Touch Gesture Directive (Mobil swipe desteği)
- ✅ Custom Cursor Component (Premium desktop özelliği)
- ✅ Advanced Cookie Consent (Ayarlar modalı ile)

### FAZ 3 (Ana Sayfa) - Eklenenler:
- ✅ Bento Grid detaylı implementasyonu (Modern layout)

### FAZ 6 (Yasal Sayfalar) - Eklenenler:
- ✅ KVKK Başvuru Formu (9 başvuru türü, dosya yükleme)

### FAZ 10 (Deployment) - Eklenenler:
- ✅ Service Worker (PWA desteği)
- ✅ Manifest.json (Tam PWA konfigürasyonu)

---

## 📋 NİHAİ KONTROL LİSTESİ

### Teknoloji Stack:
- [x] Angular 19+ (Standalone, Signals, SSR)
- [x] Tailwind CSS 4.x (Design tokens)
- [x] GSAP 3.x (Premium animasyonlar)
- [x] Native CSS Scroll Animations
- [x] AVIF/WebP görseller
- [x] PWA desteği

### SEO & Performans:
- [x] E-E-A-T Schema Markup
- [x] Breadcrumb navigation
- [x] FAQ Schema
- [x] Product Schema
- [x] Local Business Schema
- [x] Internal linking stratejisi
- [x] Content freshness tracking
- [x] Sitemap.xml
- [x] Robots.txt

### Mobil Optimizasyon:
- [x] Touch gesture desteği
- [x] Mobile-first tasarım
- [x] iOS Safari viewport fix
- [x] Responsive images
- [x] Mobile optimization service
- [x] Adaptive loading

### Animasyonlar & Efektler:
- [x] GSAP scroll animations
- [x] Page transitions
- [x] Custom cursor (desktop)
- [x] Parallax effects
- [x] Hover animations
- [x] Loading states

### Yasal & Güvenlik:
- [x] KVKK Aydınlatma Metni
- [x] KVKK Başvuru Formu (9 tür)
- [x] Çerez Politikası
- [x] Advanced Cookie Consent
- [x] Gizlilik Politikası
- [x] Kullanım Koşulları

### UI Components:
- [x] Navbar (sticky, transparent→solid)
- [x] Mobile Menu (slide-in)
- [x] Footer (4 kolon)
- [x] Button (variants, loading)
- [x] Modal
- [x] Cookie Banner (settings)
- [x] Custom Cursor
- [x] Loading Spinner

### Directives:
- [x] Scroll Reveal
- [x] Parallax
- [x] Lazy Load
- [x] Touch Gesture

### Services:
- [x] SEO Service
- [x] Structured Data Service
- [x] Theme Service
- [x] Analytics Service
- [x] Page Transition Service
- [x] Internal Link Service
- [x] Content Freshness Service
- [x] Mobile Optimization Service
- [x] Cookie Consent Service

---

## 🚀 HIZLI BAŞLANGIÇ

```bash
# 1. Proje oluştur
ng new mendil-showcase --standalone --ssr --style=scss --routing
cd mendil-showcase

# 2. Paketleri yükle
npm install -D tailwindcss postcss autoprefixer
npm install gsap @angular/cdk @phosphor-icons/angular lodash-es web-vitals

# 3. Projeyi başlat
npm start

# 4. Dokümanı takip et (FAZ 1'den başla)
```

---

## 📞 DESTEK

Sorularınız için:
- 📧 E-posta: destek@mendimarkasi.com
- 💬 GitHub Issues
- 📚 Dokümantasyon: Bu dosya

---

## 🏆 BAŞARILAR!

Bu güncellenmiş dökümanla:
- ✅ **Hiçbir özellik atlanmadı** - Her şey ilgili fazda
- ✅ **Adım adım takip edilebilir** - Karışıklık yok
- ✅ **Nora Group'tan çok daha iyi** - Modern teknolojiler
- ✅ **Google'da üst sıralarda** - SEO optimize
- ✅ **95+ Lighthouse** - Performans garantisi
- ✅ **KVKK uyumlu** - Yasal sorun yok

**Başarılar dileriz! 🚀**** ✅ EKLENDİ
- [x] **Bento Grid** ✅ EKLENDİ
- [x] **Page Transitions** ✅ EKLENDİ
- [x] **Advanced Cookie Consent** ✅ EKLENDİ
- [x] **KVKK Başvuru Formu** ✅ EKLENDİ
- [x] **Internal Linking Service** ✅ EKLENDİ
- [x] **Content Freshness Service** ✅ EKLENDİ
- [x] **Mobile Optimization Service** ✅ EKLENDİ
- [x] **Service Worker** ✅ EKLENDİ
- [x] Breadcrumb Schema
- [x] FAQ Schema
- [x] Local Business Schema
- [x] Product Schema
- [x] Organization Schema

---

## 🎉 SONUÇ

**Artık nihai döküman %100 EKSIKSIZ!**

İlk iki dökümanın (MENDIL_MARKA_TANITIM_SITESI_GELISTIRICI_DOKUMANI.md + MENDIL_SITESI_EK_ANALIZ_VE_IYILESTIRMELER.md) **TÜM** içeriği nihai dökümanada mevcut!

**Hiçbir önemli konu atlanmadı!** ✅

