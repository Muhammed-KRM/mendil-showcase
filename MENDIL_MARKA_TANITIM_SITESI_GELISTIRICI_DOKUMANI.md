# 🧻 Mendil Markası Tanıtım Sitesi - Kapsamlı Geliştirici Dökümanı

**Tarih:** 04 Mayıs 2026  
**Proje Tipi:** Kurumsal Tanıtım & Showcase Sitesi (Sadece Frontend/UI)  
**Hedef:** Modern, performanslı, SEO-uyumlu, animasyon-zengin bir marka deneyimi

---

## 📋 İçindekiler

1. [Proje Özeti ve Hedefler](#proje-özeti)
2. [Teknoloji Stack (2026 Güncel)](#teknoloji-stack)
3. [Mimari Yapı ve Tasarım Prensipleri](#mimari-yapı)
4. [Dosya ve Klasör Yapısı](#dosya-yapısı)
5. [Site Haritası ve Sayfalar](#site-haritası)
6. [Animasyon ve Görsel Efektler](#animasyon-stratejisi)
7. [Performans ve SEO Optimizasyonu](#performans-seo)
8. [Adım Adım Geliştirme Yol Haritası](#geliştirme-yol-haritası)
9. [Deployment ve Hosting](#deployment)
10. [Test ve Kalite Kontrol](#test-kalite)
11. [Yasal Gereklilikler (Türkiye)](#yasal-gereklilikler)
12. [Bakım ve Güncelleme Stratejisi](#bakım)

---

## 1. Proje Özeti ve Hedefler {#proje-özeti}

### 🎯 Proje Amacı
Bir mendil markasının ürünlerini, değerlerini ve kurumsal kimliğini dijital ortamda en etkileyici şekilde sunmak. Site **satış yapmayacak**, sadece **marka bilinirliği** ve **ürün tanıtımı** odaklı olacak.

### ✨ Temel Özellikler
- ✅ **Sadece Frontend/UI** - Backend, veritabanı veya e-ticaret entegrasyonu yok
- ✅ **Tam Responsive** - Mobil-first yaklaşımla tüm cihazlarda mükemmel görünüm
- ✅ **Premium Animasyonlar** - Yumuşak, profesyonel ve marka kimliğini yansıtan hareketler
- ✅ **SEO Optimized** - Server-Side Rendering ile arama motorlarında üst sıralarda
- ✅ **Yüksek Performans** - Core Web Vitals hedefi: 90+ Lighthouse skoru
- ✅ **Accessibility (WCAG 2.1 AA)** - Herkes için erişilebilir tasarım
- ✅ **Yasal Uyumluluk** - KVKK, çerez politikası ve diğer zorunlu sayfalar

### 🎨 Tasarım Felsefesi
- **Temizlik ve Saflık:** Beyaz, açık mavi, soft pastel tonlar
- **Yumuşaklık Hissi:** Rounded köşeler, smooth transitions, gentle animations
- **Minimalizm:** Az ama etkili içerik, bol beyaz alan
- **Doğa Dostu İmaj:** Eco-friendly vurgusu, yeşil tonlar, doğa görselleri



---

## 2. Teknoloji Stack (2026 Güncel) {#teknoloji-stack}

### 🚀 Ana Framework ve Dil

#### **Angular 19+ (Latest)**
- **Neden Angular?** Sizin tecrübeniz + enterprise-grade yapı + TypeScript güvenliği
- **Yeni Özellikler (2026):**
  - ✅ **Standalone Components** (Artık default) - NgModule karmaşası yok
  - ✅ **Signals API** - Reactive state management, RxJS'e alternatif
  - ✅ **linkedSignal** - Bağımlı state yönetimi için
  - ✅ **Resource API** - Async data handling için modern yaklaşım
  - ✅ **Zoneless Change Detection** - Daha hızlı performans
  - ✅ **Incremental Hydration** - SSR sonrası kademeli interaktivite

**Kurulum:**
```bash
ng new mendil-showcase --standalone --ssr --style=scss
cd mendil-showcase
```

---

### 🎨 Stil ve UI Framework

#### **Tailwind CSS 4.x**
- **Neden?** 2026'da %37 kullanım oranıyla endüstri standardı
- **Avantajlar:**
  - Utility-first yaklaşım = hızlı geliştirme
  - Minimal bundle size (sadece kullanılan classlar)
  - JIT (Just-In-Time) compiler
  - Dark mode desteği built-in
  
**Kurulum:**
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```

**tailwind.config.js - Marka Renkleri:**
```javascript
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#E8F4F8',
        'brand-soft': '#F0F9FF',
        'brand-green': '#D4F1E8',
        'brand-primary': '#0EA5E9',
        'brand-dark': '#1E293B',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Poppins', 'sans-serif'],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      }
    },
  },
  plugins: [],
}
```

#### **Alternatif: UnoCSS** (Daha hafif, daha hızlı)
- Tailwind'e göre %200 daha hızlı build
- Daha küçük bundle size
- Angular ile uyumlu

---

### ✨ Animasyon Kütüphaneleri

#### **1. GSAP 3.x (GreenSock) - Ana Animasyon Motoru**
- **Neden?** 2026'da hala en güçlü ve performanslı animasyon kütüphanesi
- **Özellikler:**
  - ScrollTrigger (scroll-based animations)
  - SplitText (text animations)
  - MorphSVG (SVG morph animations)
  - 60 FPS garantili performans
  
**Kurulum:**
```bash
npm install gsap
```

**Kullanım Örneği:**
```typescript
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Scroll'da fade-in animasyonu
gsap.from('.product-card', {
  scrollTrigger: {
    trigger: '.product-card',
    start: 'top 80%',
  },
  opacity: 0,
  y: 50,
  duration: 1,
  stagger: 0.2
});
```

#### **2. Native CSS Scroll-Driven Animations** (2026 Yeniliği!)
- **Neden?** Artık tüm modern browserlarda destekleniyor
- **Avantaj:** JavaScript'siz, main thread dışında çalışır (120 FPS)
- **Kullanım:** Basit scroll animasyonları için GSAP'e alternatif

```css
@keyframes fade-in {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.product-card {
  animation: fade-in linear;
  animation-timeline: view();
  animation-range: entry 0% cover 30%;
}
```

#### **3. Motion One (Framer Motion'ın hafif versiyonu)**
- Bundle size: sadece 5KB
- Web Animations API tabanlı
- Angular ile uyumlu

---

### 🖼️ Görsel ve Medya Optimizasyonu

#### **Modern Görsel Formatları (2026)**

**1. AVIF (Ana Format)**
- JPEG'e göre %50-80 daha küçük dosya boyutu
- WebP'ye göre %20-30 daha iyi sıkıştırma
- 2026'da %95 browser desteği

**2. WebP (Fallback)**
- AVIF desteklemeyen browserlar için
- JPEG'e göre %30 daha küçük

**Kullanım:**
```html
<picture>
  <source srcset="mendil-hero.avif" type="image/avif">
  <source srcset="mendil-hero.webp" type="image/webp">
  <img src="mendil-hero.jpg" alt="Yumuşacık Mendiller" loading="lazy">
</picture>
```

#### **Angular Image Directive (Built-in)**
```typescript
import { NgOptimizedImage } from '@angular/common';

// Component'te
<img ngSrc="assets/products/islak-mendil.avif" 
     width="600" 
     height="400" 
     priority 
     alt="Islak Mendil">
```

**Avantajlar:**
- Otomatik lazy loading
- Automatic srcset generation
- LCP optimizasyonu
- CLS (layout shift) önleme



---

### 🎭 UI Component Kütüphaneleri

#### **Angular CDK (Component Dev Kit)**
- **Neden?** Headless UI components - tam stil kontrolü
- **İçerik:** Overlay, Dialog, Menu, Accordion gibi temel yapılar
- **Avantaj:** Material Design'ın ağırlığı olmadan sadece mantık

```bash
npm install @angular/cdk
```

#### **Alternatif: Spartan UI** (2026 Yeni Trend)
- Angular için shadcn/ui benzeri
- Tailwind + Angular CDK kombinasyonu
- Copy-paste component sistemi

---

### 🔤 İkon ve Font Sistemleri

#### **İkonlar: Phosphor Icons**
- Modern, ince hatlı, temiz tasarım
- 6000+ ikon
- Mendil markası için ideal estetik

```bash
npm install @phosphor-icons/angular
```

**Alternatif: Lucide Icons**
- Feather Icons'ın devamı
- 1000+ ikon, çok hafif

#### **Fontlar:**
```html
<!-- index.html -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@600;700;800&display=swap" rel="stylesheet">
```

- **Inter:** Body text için (okunabilirlik)
- **Poppins:** Başlıklar için (modern, friendly)

---

### 🛠️ Geliştirme Araçları

#### **Paket Yöneticisi: pnpm** (npm'e göre daha hızlı)
```bash
npm install -g pnpm
pnpm install
```

#### **Code Quality:**
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Husky** - Git hooks (pre-commit checks)

#### **AI-Powered IDE: Cursor** (Önerilen)
- VS Code fork'u
- AI code completion
- Hızlı component generation

---

### 📊 Analytics ve Monitoring (Opsiyonel)

#### **Google Analytics 4**
- Ziyaretçi takibi
- KVKK uyumlu kullanım

#### **Microsoft Clarity** (Ücretsiz)
- Heatmaps
- Session recordings
- User behavior analysis



---

## 3. Mimari Yapı ve Tasarım Prensipleri {#mimari-yapı}

### 🏗️ Angular Mimari Yaklaşımı

#### **Standalone Components (2026 Default)**
```typescript
// Eski yöntem (NgModule) - KULLANMA
@NgModule({
  declarations: [ProductCardComponent],
  imports: [CommonModule],
  exports: [ProductCardComponent]
})

// Yeni yöntem (Standalone) - KULLAN
@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {}
```

**Avantajlar:**
- Daha az boilerplate kod
- Daha iyi tree-shaking
- Lazy loading daha kolay
- Daha modüler yapı

---

#### **Signals-Based State Management**

**Eski yöntem (RxJS):**
```typescript
// Karmaşık ve verbose
private themeSubject = new BehaviorSubject<'light' | 'dark'>('light');
theme$ = this.themeSubject.asObservable();

setTheme(theme: 'light' | 'dark') {
  this.themeSubject.next(theme);
}
```

**Yeni yöntem (Signals):**
```typescript
// Basit ve reactive
theme = signal<'light' | 'dark'>('light');

setTheme(newTheme: 'light' | 'dark') {
  this.theme.set(newTheme);
}

// Template'te
<div [class.dark]="theme() === 'dark'">
```

**linkedSignal Kullanımı:**
```typescript
// Bağımlı state yönetimi
export class ProductFilterComponent {
  categories = signal(['Islak Mendil', 'Kağıt Mendil', 'Kutu Mendil']);
  
  // İlk kategori otomatik seçili
  selectedCategory = linkedSignal(() => this.categories()[0]);
  
  selectCategory(index: number) {
    this.selectedCategory.set(this.categories()[index]);
  }
}
```

---

### 🎯 Tasarım Prensipleri

#### **1. Mobile-First Yaklaşım**
```scss
// ❌ YANLIŞ - Desktop-first
.hero {
  padding: 120px 80px;
  
  @media (max-width: 768px) {
    padding: 40px 20px;
  }
}

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

**Tailwind ile:**
```html
<div class="p-5 md:p-10 lg:p-20">
  <!-- Mobil: p-5, Tablet: p-10, Desktop: p-20 -->
</div>
```

---

#### **2. Component-Driven Development**

**Atomic Design Prensibi:**
```
Atoms (En küçük parçalar)
  └─ Button, Input, Icon, Badge

Molecules (Atom kombinasyonları)
  └─ SearchBar, ProductCard, NavItem

Organisms (Karmaşık bileşenler)
  └─ Navbar, ProductGrid, Footer

Templates (Sayfa şablonları)
  └─ HomeTemplate, ProductTemplate

Pages (Gerçek sayfalar)
  └─ HomePage, AboutPage, ContactPage
```

**Örnek Component Hiyerarşisi:**
```
HomePage
├─ HeroSection (organism)
│  ├─ HeroTitle (atom)
│  ├─ HeroDescription (atom)
│  └─ CTAButton (atom)
├─ ProductShowcase (organism)
│  └─ ProductCard (molecule)
│     ├─ ProductImage (atom)
│     ├─ ProductTitle (atom)
│     └─ ProductBadge (atom)
└─ TestimonialSlider (organism)
   └─ TestimonialCard (molecule)
```

---

#### **3. Lazy Loading Stratejisi**

```typescript
// app.routes.ts
export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component')
      .then(m => m.HomeComponent)
  },
  {
    path: 'urunler',
    loadComponent: () => import('./pages/products/products.component')
      .then(m => m.ProductsComponent)
  },
  {
    path: 'hakkimizda',
    loadComponent: () => import('./pages/about/about.component')
      .then(m => m.AboutComponent)
  },
  {
    path: 'iletisim',
    loadComponent: () => import('./pages/contact/contact.component')
      .then(m => m.ContactComponent)
  },
  // Yasal sayfalar - en az ziyaret edilen, en son yüklenir
  {
    path: 'yasal',
    loadChildren: () => import('./pages/legal/legal.routes')
      .then(m => m.LEGAL_ROUTES)
  }
];
```

**Avantajlar:**
- İlk yükleme süresi %40-60 azalır
- Kullanıcı sadece ihtiyacı olan kodu indirir
- Lighthouse Performance skoru artar

---

#### **4. SSR (Server-Side Rendering) + Hydration**

**Neden SSR?**
- ✅ SEO: Google botları tam render edilmiş HTML görür
- ✅ İlk görüntüleme hızı: Kullanıcı anında içerik görür
- ✅ Social media preview: Facebook/Twitter kartları düzgün çalışır

**Incremental Hydration (2026 Yeniliği):**
```typescript
// Sadece görünür componentler hydrate edilir
@Component({
  selector: 'app-product-grid',
  standalone: true,
  // Experimental feature
  hydration: 'incremental'
})
```

**Avantajlar:**
- INP (Interaction to Next Paint) metriği iyileşir
- JavaScript execution süresi azalır
- Sayfa daha hızlı interaktif hale gelir

---

### 🔒 Güvenlik ve Best Practices

#### **1. Content Security Policy (CSP)**
```typescript
// angular.json - headers
"headers": {
  "Content-Security-Policy": "default-src 'self'; img-src 'self' data: https:; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;"
}
```

#### **2. Sanitization**
```typescript
import { DomSanitizer } from '@angular/platform-browser';

// Kullanıcıdan gelen HTML'i temizle
constructor(private sanitizer: DomSanitizer) {}

getSafeHtml(html: string) {
  return this.sanitizer.sanitize(SecurityContext.HTML, html);
}
```

#### **3. Environment Variables**
```typescript
// environment.ts
export const environment = {
  production: false,
  apiUrl: 'https://api.example.com',
  analyticsId: 'GA-XXXXXXXXX'
};

// .gitignore'a ekle
environment.prod.ts
```



---

## 4. Dosya ve Klasör Yapısı {#dosya-yapısı}

### 📁 Detaylı Proje Yapısı

```
mendil-showcase/
│
├── src/
│   ├── app/
│   │   │
│   │   ├── core/                          # Uygulama çekirdeği
│   │   │   ├── guards/                    # Route guards
│   │   │   │   └── auth.guard.ts
│   │   │   ├── interceptors/              # HTTP interceptors
│   │   │   │   └── error.interceptor.ts
│   │   │   ├── services/                  # Global servisler
│   │   │   │   ├── seo.service.ts         # Meta tags, title yönetimi
│   │   │   │   ├── theme.service.ts       # Dark/Light mode
│   │   │   │   ├── analytics.service.ts   # Google Analytics
│   │   │   │   └── cookie-consent.service.ts
│   │   │   └── models/                    # TypeScript interfaces
│   │   │       ├── product.model.ts
│   │   │       └── testimonial.model.ts
│   │   │
│   │   ├── shared/                        # Paylaşılan componentler
│   │   │   ├── components/
│   │   │   │   ├── navbar/
│   │   │   │   │   ├── navbar.component.ts
│   │   │   │   │   ├── navbar.component.html
│   │   │   │   │   └── navbar.component.scss
│   │   │   │   ├── footer/
│   │   │   │   │   ├── footer.component.ts
│   │   │   │   │   ├── footer.component.html
│   │   │   │   │   └── footer.component.scss
│   │   │   │   ├── button/                # Reusable button
│   │   │   │   ├── modal/                 # Modal dialog
│   │   │   │   ├── cookie-banner/         # KVKK çerez banner
│   │   │   │   └── loading-spinner/
│   │   │   │
│   │   │   ├── directives/                # Custom directives
│   │   │   │   ├── scroll-reveal.directive.ts  # GSAP scroll animations
│   │   │   │   ├── parallax.directive.ts
│   │   │   │   └── lazy-load.directive.ts
│   │   │   │
│   │   │   ├── pipes/                     # Custom pipes
│   │   │   │   ├── safe-html.pipe.ts
│   │   │   │   └── truncate.pipe.ts
│   │   │   │
│   │   │   └── animations/                # Reusable animations
│   │   │       └── fade-slide.animation.ts
│   │   │
│   │   ├── features/                      # Feature modules
│   │   │   │
│   │   │   ├── home/                      # Ana sayfa
│   │   │   │   ├── components/
│   │   │   │   │   ├── hero-section/
│   │   │   │   │   │   ├── hero-section.component.ts
│   │   │   │   │   │   ├── hero-section.component.html
│   │   │   │   │   │   └── hero-section.component.scss
│   │   │   │   │   ├── featured-products/
│   │   │   │   │   ├── brand-story/
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
│   │   │   │   │   └── products.data.ts   # Static product data
│   │   │   │   └── products.component.ts
│   │   │   │
│   │   │   ├── about/                     # Hakkımızda
│   │   │   │   ├── components/
│   │   │   │   │   ├── company-history/
│   │   │   │   │   ├── values-section/
│   │   │   │   │   ├── team-section/
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
│   │   │       │   └── kvkk.component.ts
│   │   │       ├── cookie-policy/
│   │   │       ├── privacy-policy/
│   │   │       ├── terms-of-use/
│   │   │       └── legal.routes.ts
│   │   │
│   │   ├── app.component.ts               # Root component
│   │   ├── app.component.html
│   │   ├── app.component.scss
│   │   ├── app.config.ts                  # App configuration
│   │   └── app.routes.ts                  # Routing configuration
│   │
│   ├── assets/                            # Static assets
│   │   ├── images/
│   │   │   ├── hero/
│   │   │   │   ├── hero-bg.avif
│   │   │   │   ├── hero-bg.webp
│   │   │   │   └── hero-bg.jpg
│   │   │   ├── products/
│   │   │   │   ├── islak-mendil.avif
│   │   │   │   ├── kagit-mendil.avif
│   │   │   │   └── kutu-mendil.avif
│   │   │   ├── icons/
│   │   │   └── logo/
│   │   │       ├── logo.svg
│   │   │       └── logo-white.svg
│   │   │
│   │   ├── fonts/                         # Custom fonts (opsiyonel)
│   │   │
│   │   ├── data/                          # JSON data files
│   │   │   ├── products.json
│   │   │   ├── testimonials.json
│   │   │   └── faq.json
│   │   │
│   │   └── videos/                        # Video assets
│   │       └── brand-story.mp4
│   │
│   ├── styles/                            # Global styles
│   │   ├── _variables.scss                # SCSS variables
│   │   ├── _mixins.scss                   # SCSS mixins
│   │   ├── _typography.scss               # Font styles
│   │   ├── _animations.scss               # Global animations
│   │   └── styles.scss                    # Main stylesheet
│   │
│   ├── environments/                      # Environment configs
│   │   ├── environment.ts                 # Development
│   │   └── environment.prod.ts            # Production
│   │
│   ├── index.html                         # Main HTML
│   ├── main.ts                            # Bootstrap file
│   └── main.server.ts                     # SSR bootstrap
│
├── public/                                # Public static files
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── favicon.ico
│   └── manifest.json                      # PWA manifest
│
├── .vscode/                               # VS Code settings
│   ├── settings.json
│   └── extensions.json
│
├── angular.json                           # Angular CLI config
├── package.json                           # Dependencies
├── tsconfig.json                          # TypeScript config
├── tailwind.config.js                     # Tailwind config
├── .eslintrc.json                         # ESLint rules
├── .prettierrc                            # Prettier config
├── .gitignore
└── README.md

```

---

### 📝 Önemli Dosya Açıklamaları

#### **app.config.ts (Angular 19 Yeni Yapı)**
```typescript
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(), // SSR hydration
    provideHttpClient(withFetch()) // Modern fetch API
  ]
};
```

#### **app.routes.ts (Lazy Loading)**
```typescript
import { Routes } from '@angular/router';

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

## 5. Site Haritası ve Sayfalar {#site-haritası}

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
    ├── Çerez Politikası (/yasal/cerez-politikasi)
    ├── Gizlilik Politikası (/yasal/gizlilik-politikasi)
    └── Kullanım Koşulları (/yasal/kullanim-kosullari)
```

---

### 📄 Sayfa Detayları

#### **1. Ana Sayfa (Home Page)**

**Bölümler:**

**A. Hero Section (Yukarı Bölüm)**
- Tam ekran arkaplan görseli (mendil dokusu veya doğa)
- Ana başlık: "Yumuşaklığın Dokunuşu"
- Alt başlık: "Doğa dostu, hijyenik, her an yanınızda"
- CTA Button: "Ürünlerimizi Keşfedin"
- Scroll indicator (aşağı kaydırma animasyonu)

```typescript
// hero-section.component.ts
export class HeroSectionComponent implements OnInit {
  ngOnInit() {
    // GSAP animasyonu
    gsap.from('.hero-title', {
      opacity: 0,
      y: 50,
      duration: 1,
      delay: 0.3
    });
    
    gsap.from('.hero-subtitle', {
      opacity: 0,
      y: 30,
      duration: 1,
      delay: 0.6
    });
    
    gsap.from('.hero-cta', {
      opacity: 0,
      scale: 0.8,
      duration: 0.8,
      delay: 0.9
    });
  }
}
```

**B. Öne Çıkan Ürünler (Featured Products)**
- 3-4 ürün kartı
- Hover efektleri (scale, shadow)
- "Tüm Ürünler" linki

**C. Marka Hikayesi (Brand Story)**
- Kısa metin + görsel
- Parallax scroll efekti
- "Daha Fazla" butonu → Hakkımızda sayfasına

**D. Özellikler (Features)**
- 4 ikon + başlık + açıklama
  - 🌿 Doğa Dostu
  - 💧 %99 Su
  - ✨ Dermatoljik Test
  - 🇹🇷 Yerli Üretim

**E. Müşteri Yorumları (Testimonials)**
- Slider/Carousel
- 5-6 yorum
- Yıldız rating

**F. CTA Section**
- "Bize Ulaşın" formu veya butonu
- İletişim bilgileri

---

#### **2. Ürünlerimiz Sayfası (Products Page)**

**Bölümler:**

**A. Sayfa Başlığı**
- "Ürünlerimiz" başlık
- Kısa açıklama

**B. Filtre/Kategori Seçimi**
```typescript
// product-filter.component.ts
export class ProductFilterComponent {
  categories = signal([
    { id: 'all', name: 'Tümü', icon: 'grid' },
    { id: 'wet', name: 'Islak Mendil', icon: 'droplet' },
    { id: 'paper', name: 'Kağıt Mendil', icon: 'file' },
    { id: 'box', name: 'Kutu Mendil', icon: 'package' },
    { id: 'pocket', name: 'Cep Mendili', icon: 'wallet' }
  ]);
  
  selectedCategory = signal('all');
  
  selectCategory(id: string) {
    this.selectedCategory.set(id);
  }
}
```

**C. Ürün Grid**
- Responsive grid (mobil: 1 kolon, tablet: 2, desktop: 3-4)
- Her ürün kartı:
  - Ürün görseli (AVIF format)
  - Ürün adı
  - Kısa açıklama
  - Özellik badge'leri (Eco-friendly, Dermatoljik Test, vb.)
  - "Detayları Gör" butonu → Modal açar

**D. Ürün Detay Modal**
- Büyük görsel
- Detaylı açıklama
- Teknik özellikler
- Kullanım alanları
- Kapatma butonu

**Örnek Ürün Data:**
```typescript
// products.data.ts
export const PRODUCTS = [
  {
    id: 1,
    name: 'Islak Mendil - Hassas Cilt',
    category: 'wet',
    image: 'assets/images/products/islak-mendil-hassas.avif',
    description: 'Hassas ciltler için özel formül',
    features: ['Alkol içermez', 'Parfüm içermez', 'pH 5.5'],
    badges: ['Dermatoljik Test', 'Eco-Friendly'],
    details: {
      sheetCount: 120,
      size: '15x20 cm',
      ingredients: '%99 su, aloe vera, E vitamini'
    }
  },
  // ... diğer ürünler
];
```

---

#### **3. Hakkımızda Sayfası (About Page)**

**Bölümler:**

**A. Şirket Hikayesi**
- Timeline animasyonu
- Kuruluş yılı → Bugün
- Önemli kilometre taşları

**B. Misyon & Vizyon**
- İki kolon layout
- İkonlar + metinler

**C. Değerlerimiz**
- 4-6 değer kartı
- Kalite, Sürdürülebilirlik, İnovasyon, Müşteri Memnuniyeti

**D. Üretim Süreci**
- Adım adım görsel anlatım
- Animasyonlu infografik

**E. Sertifikalar & Ödüller**
- Logo grid
- ISO, TSE, Eco-Label vb.

**F. Ekibimiz (Opsiyonel)**
- Yönetim kadrosu fotoğrafları
- İsim + Pozisyon

---

#### **4. İletişim Sayfası (Contact Page)**

**Bölümler:**

**A. İletişim Formu**
```typescript
// contact-form.component.ts
export class ContactFormComponent {
  contactForm = signal({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  isSubmitting = signal(false);
  
  async submitForm() {
    this.isSubmitting.set(true);
    
    // Sadece UI - gerçek gönderim yok
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Success toast göster
    this.showSuccessToast();
    
    // Formu temizle
    this.contactForm.set({
      name: '', email: '', phone: '', subject: '', message: ''
    });
    
    this.isSubmitting.set(false);
  }
  
  showSuccessToast() {
    // Toast notification kütüphanesi kullan
    // Örn: ngx-toastr, primeng toast
  }
}
```

**B. İletişim Bilgileri**
- 📍 Adres
- 📞 Telefon
- 📧 E-posta
- 🕐 Çalışma Saatleri

**C. Harita**
- Google Maps embed veya Leaflet
```html
<iframe 
  src="https://www.google.com/maps/embed?pb=..." 
  width="100%" 
  height="400" 
  style="border:0;" 
  allowfullscreen="" 
  loading="lazy">
</iframe>
```

**D. Sosyal Medya Linkleri**
- Instagram, Facebook, Twitter, LinkedIn
- İkon butonlar

---

#### **5. Yasal Sayfalar (Legal Pages)**

**A. KVKK Aydınlatma Metni** (`/yasal/kvkk`)
- Veri sorumlusu bilgileri
- İşlenen kişisel veriler
- Veri işleme amaçları
- Veri sahibinin hakları
- İletişim bilgileri

**B. Çerez Politikası** (`/yasal/cerez-politikasi`)
- Çerez tanımı
- Kullanılan çerez türleri
- Çerez yönetimi
- Çerez tablosu

**C. Gizlilik Politikası** (`/yasal/gizlilik-politikasi`)
- Toplanan bilgiler
- Bilgi kullanımı
- Bilgi paylaşımı
- Güvenlik önlemleri

**D. Kullanım Koşulları** (`/yasal/kullanim-kosullari`)
- Site kullanım kuralları
- Fikri mülkiyet hakları
- Sorumluluk reddi
- Değişiklik hakkı

**Yasal Sayfa Template:**
```html
<!-- legal-page.component.html -->
<div class="legal-page max-w-4xl mx-auto px-4 py-16">
  <h1 class="text-4xl font-bold mb-8">{{ title }}</h1>
  <div class="prose prose-lg">
    <p class="text-gray-600 mb-4">Son Güncelleme: {{ lastUpdated }}</p>
    <div [innerHTML]="content | safeHtml"></div>
  </div>
</div>
```

---

### 🍪 Çerez Onay Banner (Cookie Consent)

**Tüm sayfalarda görünür:**
```typescript
// cookie-banner.component.ts
export class CookieBannerComponent implements OnInit {
  showBanner = signal(true);
  
  ngOnInit() {
    // LocalStorage'dan kontrol et
    const consent = localStorage.getItem('cookie-consent');
    if (consent) {
      this.showBanner.set(false);
    }
  }
  
  acceptCookies() {
    localStorage.setItem('cookie-consent', 'accepted');
    this.showBanner.set(false);
  }
  
  rejectCookies() {
    localStorage.setItem('cookie-consent', 'rejected');
    this.showBanner.set(false);
  }
}
```

**Banner Tasarımı:**
- Sayfanın altında fixed position
- "Kabul Et" ve "Reddet" butonları
- "Detaylı Bilgi" linki → Çerez Politikası sayfası



---

## 6. Animasyon ve Görsel Efektler {#animasyon-stratejisi}

### ✨ Animasyon Felsefesi

**Prensip:** "Yumuşak, doğal, dikkat dağıtmayan"
- Animasyonlar marka kimliğini desteklemeli (yumuşaklık, temizlik)
- Performansı düşürmemeli (60 FPS hedef)
- Accessibility'yi engellemem eli (prefers-reduced-motion desteği)

---

### 🎬 GSAP ile Ana Animasyonlar

#### **1. Scroll-Triggered Fade-In (En Yaygın)**

```typescript
// scroll-reveal.directive.ts
import { Directive, ElementRef, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Directive({
  selector: '[appScrollReveal]',
  standalone: true
})
export class ScrollRevealDirective implements OnInit {
  constructor(private el: ElementRef) {}
  
  ngOnInit() {
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.from(this.el.nativeElement, {
      scrollTrigger: {
        trigger: this.el.nativeElement,
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      },
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power2.out'
    });
  }
}
```

**Kullanım:**
```html
<div appScrollReveal class="product-card">
  <!-- İçerik -->
</div>
```

---

#### **2. Stagger Animation (Sıralı Animasyon)**

```typescript
// product-grid.component.ts
export class ProductGridComponent implements AfterViewInit {
  @ViewChildren('productCard') productCards!: QueryList<ElementRef>;
  
  ngAfterViewInit() {
    gsap.from(this.productCards.map(card => card.nativeElement), {
      scrollTrigger: {
        trigger: '.product-grid',
        start: 'top 80%'
      },
      opacity: 0,
      y: 60,
      duration: 0.8,
      stagger: 0.15, // Her kart 0.15s arayla
      ease: 'power3.out'
    });
  }
}
```

---

#### **3. Parallax Scroll Effect**

```typescript
// parallax.directive.ts
@Directive({
  selector: '[appParallax]',
  standalone: true
})
export class ParallaxDirective implements OnInit {
  @Input() speed: number = 0.5; // Parallax hızı
  
  constructor(private el: ElementRef) {}
  
  ngOnInit() {
    gsap.to(this.el.nativeElement, {
      scrollTrigger: {
        trigger: this.el.nativeElement,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true // Smooth scroll sync
      },
      y: (i, target) => -ScrollTrigger.maxScroll(window) * this.speed,
      ease: 'none'
    });
  }
}
```

**Kullanım:**
```html
<div class="hero-section">
  <img appParallax [speed]="0.3" src="hero-bg.jpg" alt="Background">
  <div class="hero-content">
    <h1>Yumuşaklığın Dokunuşu</h1>
  </div>
</div>
```

---

#### **4. Text Split Animation (Harf Harf Animasyon)**

```typescript
// hero-section.component.ts
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText'; // GSAP Club plugin

export class HeroSectionComponent implements OnInit {
  ngOnInit() {
    gsap.registerPlugin(SplitText);
    
    const split = new SplitText('.hero-title', { type: 'chars' });
    
    gsap.from(split.chars, {
      opacity: 0,
      y: 50,
      rotateX: -90,
      stagger: 0.02,
      duration: 0.8,
      ease: 'back.out'
    });
  }
}
```

---

#### **5. Smooth Scroll (Yumuşak Kaydırma)**

```typescript
// app.component.ts
import { gsap } from 'gsap';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

export class AppComponent implements OnInit {
  ngOnInit() {
    gsap.registerPlugin(ScrollSmoother);
    
    ScrollSmoother.create({
      smooth: 1.5, // Yumuşaklık seviyesi
      effects: true, // data-speed attribute desteği
      smoothTouch: 0.1 // Mobil için hafif smooth
    });
  }
}
```

---

### 🎨 Native CSS Scroll-Driven Animations (2026)

**Avantaj:** JavaScript'siz, main thread dışında çalışır

#### **Basit Fade-In:**
```css
/* styles.scss */
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

.scroll-animate {
  animation: fade-in-up linear;
  animation-timeline: view();
  animation-range: entry 0% cover 40%;
}
```

**HTML:**
```html
<div class="scroll-animate product-card">
  <!-- İçerik -->
</div>
```

---

#### **Progress Bar (Scroll İlerlemesi):**
```css
.progress-bar {
  position: fixed;
  top: 0;
  left: 0;
  height: 4px;
  background: linear-gradient(to right, #0EA5E9, #10B981);
  transform-origin: left;
  animation: grow-progress linear;
  animation-timeline: scroll();
}

@keyframes grow-progress {
  from { transform: scaleX(0); }
  to { transform: scaleX(1); }
}
```

---

### 🖱️ Hover ve Micro-Interactions

#### **Product Card Hover:**
```scss
.product-card {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    
    .product-image {
      transform: scale(1.1);
    }
    
    .product-badge {
      animation: pulse 0.6s ease-in-out;
    }
  }
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}
```

---

#### **Button Ripple Effect:**
```typescript
// button.component.ts
export class ButtonComponent {
  createRipple(event: MouseEvent) {
    const button = event.currentTarget as HTMLElement;
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.classList.add('ripple');
    
    button.appendChild(ripple);
    
    setTimeout(() => ripple.remove(), 600);
  }
}
```

```scss
.button {
  position: relative;
  overflow: hidden;
  
  .ripple {
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.6);
    transform: scale(0);
    animation: ripple-animation 0.6s ease-out;
  }
}

@keyframes ripple-animation {
  to {
    transform: scale(4);
    opacity: 0;
  }
}
```

---

### ♿ Accessibility - Reduced Motion

**Tüm animasyonlar için:**
```scss
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

**Angular'da kontrol:**
```typescript
// animation.service.ts
export class AnimationService {
  prefersReducedMotion = signal(false);
  
  constructor() {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    this.prefersReducedMotion.set(mediaQuery.matches);
    
    mediaQuery.addEventListener('change', (e) => {
      this.prefersReducedMotion.set(e.matches);
    });
  }
  
  shouldAnimate(): boolean {
    return !this.prefersReducedMotion();
  }
}
```

---

### 🎭 Loading States ve Skeleton Screens

```html
<!-- product-card-skeleton.component.html -->
<div class="product-card-skeleton animate-pulse">
  <div class="h-48 bg-gray-200 rounded-lg mb-4"></div>
  <div class="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
  <div class="h-4 bg-gray-200 rounded w-1/2"></div>
</div>
```

```scss
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
```

---

### 🌊 Lottie Animations (Opsiyonel)

**Kullanım Alanları:**
- Loading spinners
- Success/Error icons
- Dekoratif animasyonlar

```bash
npm install lottie-web
```

```typescript
// lottie-animation.component.ts
import lottie from 'lottie-web';

export class LottieAnimationComponent implements OnInit {
  @ViewChild('lottieContainer') container!: ElementRef;
  
  ngOnInit() {
    lottie.loadAnimation({
      container: this.container.nativeElement,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'assets/animations/success.json'
    });
  }
}
```



---

## 7. Performans ve SEO Optimizasyonu {#performans-seo}

### 🎯 Core Web Vitals Hedefleri (2026)

| Metrik | Hedef | Açıklama |
|--------|-------|----------|
| **LCP** (Largest Contentful Paint) | ≤ 2.5s | En büyük içerik ne kadar sürede yüklenir |
| **INP** (Interaction to Next Paint) | ≤ 200ms | Kullanıcı etkileşimine ne kadar hızlı yanıt verir |
| **CLS** (Cumulative Layout Shift) | ≤ 0.1 | Sayfa ne kadar "zıplar" |
| **FCP** (First Contentful Paint) | ≤ 1.8s | İlk içerik ne kadar sürede görünür |
| **TTFB** (Time to First Byte) | ≤ 600ms | Sunucudan ilk byte ne kadar sürede gelir |

---

### 🚀 Performans Optimizasyon Stratejileri

#### **1. Görsel Optimizasyonu**

**A. Modern Format Kullanımı (AVIF + WebP)**
```html
<picture>
  <source 
    srcset="hero-mobile.avif 480w, hero-tablet.avif 768w, hero-desktop.avif 1920w"
    type="image/avif"
    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 1200px">
  <source 
    srcset="hero-mobile.webp 480w, hero-tablet.webp 768w, hero-desktop.webp 1920w"
    type="image/webp"
    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 1200px">
  <img 
    src="hero-desktop.jpg" 
    alt="Yumuşacık Mendiller"
    width="1920"
    height="1080"
    loading="lazy"
    decoding="async">
</picture>
```

**B. Angular Image Directive ile Otomatik Optimizasyon**
```typescript
// app.config.ts
import { provideImgixLoader } from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [
    // ... diğer providers
    provideImgixLoader('https://your-cdn.com') // Opsiyonel CDN
  ]
};
```

```html
<!-- Kullanım -->
<img 
  ngSrc="products/islak-mendil.avif"
  width="600"
  height="400"
  priority  <!-- LCP için kritik görseller -->
  alt="Islak Mendil">
```

**C. Lazy Loading**
```html
<!-- Viewport dışındaki görseller -->
<img 
  src="product.avif" 
  loading="lazy"  <!-- Native lazy loading -->
  decoding="async"  <!-- Async decode -->
  alt="Ürün">
```

---

#### **2. Font Optimizasyonu**

**A. Font Preloading**
```html
<!-- index.html -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<!-- Critical fonts preload -->
<link 
  rel="preload" 
  href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" 
  as="style"
  onload="this.onload=null;this.rel='stylesheet'">
```

**B. Font Display Strategy**
```css
@font-face {
  font-family: 'Inter';
  src: url('/assets/fonts/inter.woff2') format('woff2');
  font-display: swap; /* FOIT yerine FOUT - daha iyi UX */
  font-weight: 400;
}
```

**C. Variable Fonts (Tek dosya, birden fazla weight)**
```css
@font-face {
  font-family: 'Inter Variable';
  src: url('/assets/fonts/inter-variable.woff2') format('woff2-variations');
  font-weight: 100 900; /* Tüm weight'ler tek dosyada */
  font-display: swap;
}
```

---

#### **3. JavaScript Bundle Optimizasyonu**

**A. Lazy Loading Routes**
```typescript
// app.routes.ts - Zaten yukarıda gösterildi
// Her route ayrı chunk olarak yüklenir
```

**B. Component-Level Code Splitting**
```typescript
// Ağır componentleri dinamik import et
export class HomeComponent {
  async loadHeavyComponent() {
    const { HeavyChartComponent } = await import('./heavy-chart.component');
    // Component'i dinamik olarak yükle
  }
}
```

**C. Tree Shaking**
```typescript
// ❌ YANLIŞ - Tüm kütüphaneyi import eder
import * as _ from 'lodash';

// ✅ DOĞRU - Sadece kullanılan fonksiyonu import eder
import { debounce } from 'lodash-es';
```

**D. Bundle Analyzer**
```bash
npm install -D webpack-bundle-analyzer
ng build --stats-json
npx webpack-bundle-analyzer dist/stats.json
```

---

#### **4. CSS Optimizasyonu**

**A. Critical CSS Inlining**
```html
<!-- index.html - Above-the-fold CSS -->
<style>
  /* Hero section için kritik CSS */
  .hero { min-height: 100vh; background: #E8F4F8; }
  .hero-title { font-size: 3rem; font-weight: 700; }
</style>
```

**B. Tailwind CSS Purging (Otomatik)**
```javascript
// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{html,ts}'], // Kullanılmayan classlar otomatik temizlenir
  // ...
}
```

**C. CSS Containment**
```css
.product-card {
  contain: layout style paint; /* Browser'a optimizasyon ipucu */
}
```

---

#### **5. SSR ve Hydration Optimizasyonu**

**A. Incremental Hydration (Angular 19)**
```typescript
// app.config.ts
import { provideClientHydration, withIncrementalHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(
      withIncrementalHydration() // Kademeli hydration
    )
  ]
};
```

**B. Defer Blocks (Angular 17+)**
```html
<!-- Viewport'a girince yükle -->
@defer (on viewport) {
  <app-testimonial-slider />
} @placeholder {
  <div class="skeleton-loader"></div>
}

<!-- Idle olunca yükle -->
@defer (on idle) {
  <app-newsletter-form />
}

<!-- Hover'da yükle -->
@defer (on hover) {
  <app-product-detail-modal />
}
```

---

### 🔍 SEO Optimizasyonu

#### **1. Meta Tags Yönetimi**

```typescript
// seo.service.ts
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
  }) {
    // Title
    this.title.setTitle(config.title);
    
    // Standard meta tags
    this.meta.updateTag({ name: 'description', content: config.description });
    this.meta.updateTag({ name: 'keywords', content: config.keywords || '' });
    
    // Open Graph (Facebook, LinkedIn)
    this.meta.updateTag({ property: 'og:title', content: config.title });
    this.meta.updateTag({ property: 'og:description', content: config.description });
    this.meta.updateTag({ property: 'og:image', content: config.image || '' });
    this.meta.updateTag({ property: 'og:url', content: config.url || '' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    
    // Twitter Card
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: config.title });
    this.meta.updateTag({ name: 'twitter:description', content: config.description });
    this.meta.updateTag({ name: 'twitter:image', content: config.image || '' });
  }
}
```

**Kullanım:**
```typescript
// home.component.ts
export class HomeComponent implements OnInit {
  private seo = inject(SeoService);
  
  ngOnInit() {
    this.seo.updateMetaTags({
      title: 'Yumuşaklığın Dokunuşu | Mendil Markası',
      description: 'Doğa dostu, hijyenik ve yumuşacık mendiller. Islak mendil, kağıt mendil ve daha fazlası.',
      keywords: 'mendil, ıslak mendil, kağıt mendil, hijyenik mendil, bebek mendili',
      image: 'https://mendimarkasi.com/assets/og-image.jpg',
      url: 'https://mendimarkasi.com'
    });
  }
}
```

---

#### **2. Structured Data (Schema.org)**

```typescript
// structured-data.service.ts
@Injectable({ providedIn: 'root' })
export class StructuredDataService {
  addOrganizationSchema() {
    const script = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      'name': 'Mendil Markası',
      'url': 'https://mendimarkasi.com',
      'logo': 'https://mendimarkasi.com/assets/logo.png',
      'contactPoint': {
        '@type': 'ContactPoint',
        'telephone': '+90-212-XXX-XXXX',
        'contactType': 'customer service',
        'areaServed': 'TR',
        'availableLanguage': 'Turkish'
      },
      'sameAs': [
        'https://www.facebook.com/mendimarkasi',
        'https://www.instagram.com/mendimarkasi',
        'https://twitter.com/mendimarkasi'
      ]
    };
    
    this.insertSchema(script);
  }
  
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
        'availability': 'https://schema.org/InStock'
      }
    };
    
    this.insertSchema(script);
  }
  
  private insertSchema(schema: any) {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);
  }
}
```

---

#### **3. Sitemap ve Robots.txt**

**sitemap.xml:**
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
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://mendimarkasi.com/hakkimizda</loc>
    <lastmod>2026-05-04</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>https://mendimarkasi.com/iletisim</loc>
    <lastmod>2026-05-04</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
</urlset>
```

**robots.txt:**
```
User-agent: *
Allow: /
Disallow: /admin/
Disallow: /api/

Sitemap: https://mendimarkasi.com/sitemap.xml
```

---

#### **4. Semantic HTML**

```html
<!-- ❌ YANLIŞ - Div soup -->
<div class="header">
  <div class="nav">
    <div class="nav-item">Ana Sayfa</div>
  </div>
</div>

<!-- ✅ DOĞRU - Semantic HTML -->
<header>
  <nav>
    <a href="/">Ana Sayfa</a>
  </nav>
</header>

<main>
  <article>
    <h1>Ürünlerimiz</h1>
    <section>
      <h2>Islak Mendiller</h2>
      <p>Açıklama...</p>
    </section>
  </article>
</main>

<footer>
  <address>İletişim bilgileri</address>
</footer>
```

---

### 📊 Performans Monitoring

#### **Lighthouse CI (Otomatik Test)**
```bash
npm install -g @lhci/cli

# .lighthouserc.json
{
  "ci": {
    "collect": {
      "url": ["http://localhost:4200"],
      "numberOfRuns": 3
    },
    "assert": {
      "assertions": {
        "categories:performance": ["error", {"minScore": 0.9}],
        "categories:accessibility": ["error", {"minScore": 0.9}],
        "categories:seo": ["error", {"minScore": 0.9}]
      }
    }
  }
}
```

#### **Web Vitals Tracking**
```typescript
// web-vitals.service.ts
import { onCLS, onFID, onLCP, onINP } from 'web-vitals';

export class WebVitalsService {
  trackVitals() {
    onCLS(console.log);
    onINP(console.log);
    onLCP(console.log);
    
    // Analytics'e gönder
    onLCP((metric) => {
      // Google Analytics'e gönder
      gtag('event', 'web_vitals', {
        event_category: 'Web Vitals',
        event_label: metric.name,
        value: Math.round(metric.value),
        non_interaction: true
      });
    });
  }
}
```



---

## 8. Adım Adım Geliştirme Yol Haritası {#geliştirme-yol-haritası}

### 📅 Geliştirme Timeline (Tahmini)

| Faz | Süre | Açıklama |
|-----|------|----------|
| **Faz 1:** Kurulum ve Temel Yapı | 1-2 gün | Proje kurulumu, konfigürasyonlar |
| **Faz 2:** Shared Components | 2-3 gün | Navbar, Footer, Button vb. |
| **Faz 3:** Ana Sayfa | 3-4 gün | Hero, Products, Testimonials |
| **Faz 4:** Ürünler Sayfası | 2-3 gün | Grid, Filter, Modal |
| **Faz 5:** Hakkımızda & İletişim | 2-3 gün | About, Contact pages |
| **Faz 6:** Yasal Sayfalar | 1 gün | KVKK, Çerez, Gizlilik |
| **Faz 7:** Animasyonlar | 2-3 gün | GSAP, scroll effects |
| **Faz 8:** SEO & Performans | 1-2 gün | Meta tags, optimizasyon |
| **Faz 9:** Test & Debug | 2-3 gün | Cross-browser, responsive test |
| **Faz 10:** Deployment | 1 gün | Production build, hosting |
| **TOPLAM** | **17-25 gün** | ~3-4 hafta |

---

### 🛠️ Faz 1: Kurulum ve Temel Yapı (1-2 gün)

#### **Adım 1.1: Proje Oluşturma**
```bash
# Angular CLI ile proje oluştur
ng new mendil-showcase --standalone --ssr --style=scss --routing

cd mendil-showcase
```

#### **Adım 1.2: Gerekli Paketleri Yükle**
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

# Utility libraries
npm install lodash-es
npm install -D @types/lodash-es

# Web Vitals
npm install web-vitals
```

#### **Adım 1.3: Tailwind Konfigürasyonu**
```javascript
// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        'brand': {
          'blue': '#E8F4F8',
          'soft': '#F0F9FF',
          'green': '#D4F1E8',
          'primary': '#0EA5E9',
          'dark': '#1E293B',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
```

```scss
/* styles.scss */
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
```

#### **Adım 1.4: Klasör Yapısını Oluştur**
```bash
# Core klasörleri
mkdir -p src/app/core/{guards,interceptors,services,models}

# Shared klasörleri
mkdir -p src/app/shared/{components,directives,pipes,animations}

# Feature klasörleri
mkdir -p src/app/features/{home,products,about,contact,legal}

# Assets klasörleri
mkdir -p src/assets/{images/{hero,products,icons,logo},data,videos}
```

#### **Adım 1.5: Environment Dosyaları**
```typescript
// src/environments/environment.ts
export const environment = {
  production: false,
  siteUrl: 'http://localhost:4200',
  siteName: 'Mendil Markası',
  analyticsId: '',
  socialMedia: {
    facebook: 'https://facebook.com/mendimarkasi',
    instagram: 'https://instagram.com/mendimarkasi',
    twitter: 'https://twitter.com/mendimarkasi'
  }
};

// src/environments/environment.prod.ts
export const environment = {
  production: true,
  siteUrl: 'https://mendimarkasi.com',
  siteName: 'Mendil Markası',
  analyticsId: 'G-XXXXXXXXXX',
  socialMedia: {
    facebook: 'https://facebook.com/mendimarkasi',
    instagram: 'https://instagram.com/mendimarkasi',
    twitter: 'https://twitter.com/mendimarkasi'
  }
};
```

---

### 🧩 Faz 2: Shared Components (2-3 gün)

#### **Adım 2.1: Button Component**
```bash
ng generate component shared/components/button --standalone
```

```typescript
// button.component.ts
@Component({
  selector: 'app-button',
  standalone: true,
  template: `
    <button 
      [class]="buttonClasses"
      [disabled]="disabled()"
      (click)="handleClick($event)">
      <ng-content></ng-content>
    </button>
  `,
  styles: [`
    button {
      @apply px-6 py-3 rounded-xl font-semibold transition-all duration-300;
      @apply disabled:opacity-50 disabled:cursor-not-allowed;
    }
    
    .btn-primary {
      @apply bg-brand-primary text-white hover:bg-blue-600;
      @apply shadow-lg hover:shadow-xl;
    }
    
    .btn-secondary {
      @apply bg-white text-brand-primary border-2 border-brand-primary;
      @apply hover:bg-brand-primary hover:text-white;
    }
  `]
})
export class ButtonComponent {
  @Input() variant: 'primary' | 'secondary' = 'primary';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  disabled = input(false);
  
  get buttonClasses() {
    return `btn-${this.variant} btn-${this.size}`;
  }
  
  handleClick(event: MouseEvent) {
    // Ripple effect
    this.createRipple(event);
  }
  
  private createRipple(event: MouseEvent) {
    // Ripple logic (yukarıda gösterildi)
  }
}
```

#### **Adım 2.2: Navbar Component**
```bash
ng generate component shared/components/navbar --standalone
```

```typescript
// navbar.component.ts
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isMenuOpen = signal(false);
  isScrolled = signal(false);
  
  navItems = [
    { label: 'Ana Sayfa', route: '/' },
    { label: 'Ürünlerimiz', route: '/urunler' },
    { label: 'Hakkımızda', route: '/hakkimizda' },
    { label: 'İletişim', route: '/iletisim' }
  ];
  
  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled.set(window.scrollY > 50);
  }
  
  toggleMenu() {
    this.isMenuOpen.update(v => !v);
  }
}
```

```html
<!-- navbar.component.html -->
<nav 
  class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
  [class.bg-white]="isScrolled()"
  [class.shadow-lg]="isScrolled()">
  
  <div class="container mx-auto px-4">
    <div class="flex items-center justify-between h-20">
      
      <!-- Logo -->
      <a routerLink="/" class="flex items-center space-x-2">
        <img src="assets/logo/logo.svg" alt="Logo" class="h-10">
        <span class="text-xl font-bold">Mendil Markası</span>
      </a>
      
      <!-- Desktop Menu -->
      <ul class="hidden md:flex space-x-8">
        @for (item of navItems; track item.route) {
          <li>
            <a 
              [routerLink]="item.route"
              routerLinkActive="text-brand-primary"
              class="hover:text-brand-primary transition-colors">
              {{ item.label }}
            </a>
          </li>
        }
      </ul>
      
      <!-- Mobile Menu Button -->
      <button 
        class="md:hidden"
        (click)="toggleMenu()">
        <span class="sr-only">Menu</span>
        <!-- Hamburger icon -->
      </button>
    </div>
  </div>
  
  <!-- Mobile Menu -->
  @if (isMenuOpen()) {
    <div class="md:hidden bg-white border-t">
      <ul class="py-4">
        @for (item of navItems; track item.route) {
          <li>
            <a 
              [routerLink]="item.route"
              (click)="toggleMenu()"
              class="block px-4 py-3 hover:bg-gray-50">
              {{ item.label }}
            </a>
          </li>
        }
      </ul>
    </div>
  }
</nav>
```

#### **Adım 2.3: Footer Component**
```bash
ng generate component shared/components/footer --standalone
```

#### **Adım 2.4: Cookie Banner Component**
```bash
ng generate component shared/components/cookie-banner --standalone
```

#### **Adım 2.5: Scroll Reveal Directive**
```bash
ng generate directive shared/directives/scroll-reveal --standalone
```

---

### 🏠 Faz 3: Ana Sayfa (3-4 gün)

#### **Adım 3.1: Home Component Oluştur**
```bash
ng generate component features/home --standalone
```

#### **Adım 3.2: Hero Section**
```bash
ng generate component features/home/components/hero-section --standalone
```

```typescript
// hero-section.component.ts
export class HeroSectionComponent implements OnInit {
  ngOnInit() {
    // GSAP animasyonları
    gsap.from('.hero-title', {
      opacity: 0,
      y: 50,
      duration: 1,
      delay: 0.3,
      ease: 'power3.out'
    });
  }
}
```

```html
<!-- hero-section.component.html -->
<section class="hero relative h-screen flex items-center justify-center overflow-hidden">
  <!-- Background Image -->
  <div class="absolute inset-0 z-0">
    <img 
      ngSrc="assets/images/hero/hero-bg.avif"
      fill
      priority
      alt="Background"
      class="object-cover">
  </div>
  
  <!-- Overlay -->
  <div class="absolute inset-0 bg-gradient-to-b from-brand-blue/50 to-white/80 z-10"></div>
  
  <!-- Content -->
  <div class="relative z-20 text-center px-4">
    <h1 class="hero-title text-5xl md:text-7xl font-bold mb-6">
      Yumuşaklığın Dokunuşu
    </h1>
    <p class="hero-subtitle text-xl md:text-2xl text-gray-700 mb-8">
      Doğa dostu, hijyenik, her an yanınızda
    </p>
    <app-button variant="primary" size="lg">
      Ürünlerimizi Keşfedin
    </app-button>
  </div>
  
  <!-- Scroll Indicator -->
  <div class="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
    </svg>
  </div>
</section>
```

#### **Adım 3.3: Featured Products Section**
```bash
ng generate component features/home/components/featured-products --standalone
```

#### **Adım 3.4: Brand Story Section**
```bash
ng generate component features/home/components/brand-story --standalone
```

#### **Adım 3.5: Testimonials Section**
```bash
ng generate component features/home/components/testimonials --standalone
```

---

### 📦 Faz 4: Ürünler Sayfası (2-3 gün)

#### **Adım 4.1: Products Component**
```bash
ng generate component features/products --standalone
```

#### **Adım 4.2: Product Data Oluştur**
```typescript
// features/products/data/products.data.ts
export interface Product {
  id: number;
  name: string;
  category: 'wet' | 'paper' | 'box' | 'pocket';
  image: string;
  description: string;
  features: string[];
  badges: string[];
  details: {
    sheetCount?: number;
    size: string;
    ingredients: string;
  };
}

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Islak Mendil - Hassas Cilt',
    category: 'wet',
    image: 'assets/images/products/islak-mendil-hassas.avif',
    description: 'Hassas ciltler için özel formül, alkol ve parfüm içermez',
    features: ['Alkol içermez', 'Parfüm içermez', 'pH 5.5', 'Dermatoljik test'],
    badges: ['Eco-Friendly', 'Dermatoljik Test'],
    details: {
      sheetCount: 120,
      size: '15x20 cm',
      ingredients: '%99 su, aloe vera, E vitamini, gliserin'
    }
  },
  // ... diğer ürünler
];
```

#### **Adım 4.3: Product Card Component**
```bash
ng generate component features/products/components/product-card --standalone
```

#### **Adım 4.4: Product Filter Component**
```bash
ng generate component features/products/components/product-filter --standalone
```

#### **Adım 4.5: Product Detail Modal**
```bash
ng generate component features/products/components/product-detail-modal --standalone
```

---

### 📝 Faz 5-10: Devam Eden Adımlar

**Faz 5:** Hakkımızda & İletişim sayfaları
**Faz 6:** Yasal sayfalar (KVKK, Çerez, vb.)
**Faz 7:** GSAP animasyonları ekle
**Faz 8:** SEO meta tags, structured data
**Faz 9:** Cross-browser test, responsive test
**Faz 10:** Production build ve deployment



---

## 9. Deployment ve Hosting {#deployment}

### 🚀 Deployment Seçenekleri (2026)

#### **Önerilen Platform: Vercel** (En Kolay + En Hızlı)

**Avantajlar:**
- ✅ Angular SSR tam desteği
- ✅ Otomatik CI/CD (Git push = deploy)
- ✅ Global CDN (Edge Network)
- ✅ Ücretsiz SSL sertifikası
- ✅ Preview deployments (her PR için)
- ✅ Ücretsiz plan: 100 GB bandwidth

**Kurulum:**
```bash
# Vercel CLI yükle
npm install -g vercel

# Projeyi deploy et
vercel

# Production deploy
vercel --prod
```

**vercel.json:**
```json
{
  "buildCommand": "ng build",
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
        }
      ]
    }
  ]
}
```

---

#### **Alternatif 1: Netlify**

**Avantajlar:**
- ✅ Kolay kullanım
- ✅ Form handling (iletişim formu için)
- ✅ Split testing
- ✅ Ücretsiz plan: 100 GB bandwidth

**netlify.toml:**
```toml
[build]
  command = "ng build --configuration=production"
  publish = "dist/mendil-showcase/browser"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
```

---

#### **Alternatif 2: Cloudflare Pages**

**Avantajlar:**
- ✅ Ücretsiz unlimited bandwidth
- ✅ En hızlı CDN (300+ lokasyon)
- ✅ DDoS koruması
- ✅ Web Analytics (ücretsiz)

**Build Settings:**
```
Build command: ng build --configuration=production
Build output directory: dist/mendil-showcase/browser
```

---

#### **Alternatif 3: Firebase Hosting**

**Avantajlar:**
- ✅ Google altyapısı
- ✅ Ücretsiz SSL
- ✅ Kolay custom domain
- ✅ Ücretsiz plan: 10 GB storage, 360 MB/day transfer

```bash
# Firebase CLI yükle
npm install -g firebase-tools

# Firebase'e login
firebase login

# Projeyi başlat
firebase init hosting

# Deploy
firebase deploy
```

**firebase.json:**
```json
{
  "hosting": {
    "public": "dist/mendil-showcase/browser",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ],
    "headers": [
      {
        "source": "**/*.@(jpg|jpeg|gif|png|svg|webp|avif)",
        "headers": [
          {
            "key": "Cache-Control",
            "value": "max-age=31536000"
          }
        ]
      }
    ]
  }
}
```

---

### 🔧 Production Build Optimizasyonu

```bash
# Production build
ng build --configuration=production

# Build sonuçları
# dist/mendil-showcase/
# ├── browser/          # Client-side files
# │   ├── index.html
# │   ├── main.*.js     # Main bundle
# │   ├── polyfills.*.js
# │   └── assets/
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
        },
        {
          "type": "anyComponentStyle",
          "maximumWarning": "6kb",
          "maximumError": "10kb"
        }
      ]
    }
  }
}
```

---

### 🌐 Custom Domain Bağlama

**Vercel:**
```bash
vercel domains add mendimarkasi.com
```

**DNS Ayarları:**
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

---

## 10. Test ve Kalite Kontrol {#test-kalite}

### 🧪 Test Stratejisi

#### **1. Lighthouse Audit**
```bash
# Chrome DevTools > Lighthouse
# Veya CLI ile:
npm install -g lighthouse

lighthouse https://mendimarkasi.com --view
```

**Hedef Skorlar:**
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

---

#### **2. Cross-Browser Testing**

**Test Edilmesi Gereken Browserlar:**
- ✅ Chrome (son 2 versiyon)
- ✅ Firefox (son 2 versiyon)
- ✅ Safari (son 2 versiyon)
- ✅ Edge (son 2 versiyon)
- ✅ Mobile Safari (iOS)
- ✅ Chrome Mobile (Android)

**Araçlar:**
- BrowserStack (ücretli)
- LambdaTest (ücretli)
- Playwright (ücretsiz, otomatik)

---

#### **3. Responsive Testing**

**Test Edilmesi Gereken Ekran Boyutları:**
- 📱 Mobile: 375px, 414px
- 📱 Tablet: 768px, 1024px
- 💻 Desktop: 1280px, 1440px, 1920px

**Chrome DevTools:**
```
F12 > Toggle Device Toolbar (Ctrl+Shift+M)
```

---

#### **4. Accessibility Testing**

**Araçlar:**
- axe DevTools (Chrome extension)
- WAVE (Web Accessibility Evaluation Tool)
- Screen reader test (NVDA, JAWS)

**Kontrol Listesi:**
- ✅ Tüm görsellerde alt text
- ✅ Keyboard navigation çalışıyor
- ✅ Focus indicators görünür
- ✅ Color contrast yeterli (4.5:1)
- ✅ ARIA labels doğru
- ✅ Semantic HTML kullanılmış

---

#### **5. Performance Testing**

**WebPageTest:**
```
https://www.webpagetest.org/
```

**Test Metrikleri:**
- First Byte Time < 600ms
- Start Render < 1.5s
- Speed Index < 3.0s
- Fully Loaded < 5.0s

---

### ✅ Pre-Launch Checklist

**SEO:**
- [ ] Meta tags tüm sayfalarda
- [ ] Sitemap.xml oluşturuldu
- [ ] Robots.txt oluşturuldu
- [ ] Structured data eklendi
- [ ] Open Graph tags eklendi
- [ ] Canonical URLs doğru

**Performance:**
- [ ] Görseller optimize edildi (AVIF/WebP)
- [ ] Lazy loading aktif
- [ ] Bundle size < 500KB
- [ ] Lighthouse skoru 90+
- [ ] Core Web Vitals hedefleri karşılandı

**Functionality:**
- [ ] Tüm linkler çalışıyor
- [ ] Formlar çalışıyor (UI olarak)
- [ ] Mobile menü çalışıyor
- [ ] Animasyonlar smooth
- [ ] Çerez banner çalışıyor

**Legal:**
- [ ] KVKK metni eklendi
- [ ] Çerez politikası eklendi
- [ ] Gizlilik politikası eklendi
- [ ] Kullanım koşulları eklendi

**Security:**
- [ ] HTTPS aktif
- [ ] Security headers eklendi
- [ ] CSP (Content Security Policy) ayarlandı
- [ ] No console errors

---

## 11. Yasal Gereklilikler (Türkiye) {#yasal-gereklilikler}

### 📜 Zorunlu Sayfalar ve İçerikler

#### **1. KVKK Aydınlatma Metni**

**Zorunlu Bölümler:**
```markdown
# KVKK Aydınlatma Metni

## 1. Veri Sorumlusu
[Şirket Adı]
[Adres]
[Telefon]
[E-posta]

## 2. İşlenen Kişisel Veriler
- Kimlik Bilgileri (Ad, Soyad)
- İletişim Bilgileri (E-posta, Telefon)
- İşlem Güvenliği Bilgileri (IP adresi, çerez bilgileri)

## 3. Kişisel Verilerin İşlenme Amacı
- İletişim taleplerinin yanıtlanması
- Yasal yükümlülüklerin yerine getirilmesi
- Site kullanım deneyiminin iyileştirilmesi

## 4. Kişisel Verilerin Aktarılması
Kişisel verileriniz, yasal zorunluluklar dışında üçüncü kişilerle paylaşılmamaktadır.

## 5. Veri Sahibinin Hakları
- Kişisel verilerinizin işlenip işlenmediğini öğrenme
- İşlenmişse bilgi talep etme
- Düzeltme veya silme talep etme
- Şikayette bulunma

## 6. İletişim
kvkk@mendimarkasi.com
```

---

#### **2. Çerez Politikası**

**Çerez Tablosu:**
| Çerez Adı | Türü | Süre | Amaç |
|-----------|------|------|------|
| cookie-consent | Zorunlu | 1 yıl | Çerez onayı kaydı |
| _ga | Analitik | 2 yıl | Google Analytics |
| _gid | Analitik | 1 gün | Google Analytics |

**Çerez Yönetimi:**
```typescript
// cookie-consent.service.ts
export class CookieConsentService {
  acceptAnalytics() {
    // Google Analytics'i aktifleştir
    gtag('consent', 'update', {
      'analytics_storage': 'granted'
    });
  }
  
  rejectAnalytics() {
    // Google Analytics'i devre dışı bırak
    gtag('consent', 'update', {
      'analytics_storage': 'denied'
    });
  }
}
```

---

#### **3. İletişim Bilgileri**

**Footer'da Zorunlu Bilgiler:**
- Şirket ünvanı
- Mersis numarası
- Vergi numarası
- Adres
- Telefon
- E-posta

---

## 12. Bakım ve Güncelleme Stratejisi {#bakım}

### 🔄 Düzenli Bakım Görevleri

#### **Haftalık:**
- [ ] Broken link kontrolü
- [ ] Lighthouse audit
- [ ] Analytics kontrolü

#### **Aylık:**
- [ ] Dependency güncellemeleri
- [ ] Security audit
- [ ] Backup kontrolü
- [ ] Content güncellemeleri

#### **3 Ayda Bir:**
- [ ] Angular versiyon güncellemesi
- [ ] Design refresh değerlendirmesi
- [ ] User feedback analizi

---

### 📦 Dependency Güncellemeleri

```bash
# Güncel olmayan paketleri kontrol et
npm outdated

# Güvenlik açıklarını kontrol et
npm audit

# Güvenlik açıklarını düzelt
npm audit fix

# Angular güncelleme
ng update @angular/core @angular/cli
```

---

### 📊 Analytics ve Monitoring

**Google Analytics 4 Setup:**
```html
<!-- index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

**Takip Edilmesi Gereken Metrikler:**
- Sayfa görüntülenmeleri
- Bounce rate
- Ortalama oturum süresi
- En çok ziyaret edilen sayfalar
- Trafik kaynakları
- Cihaz dağılımı

---

## 🎉 Sonuç ve Öneriler

### ✨ Başarı Kriterleri

**Teknik:**
- ✅ Lighthouse Performance: 90+
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

---

## 📞 Destek ve İletişim

Bu döküman hakkında sorularınız için:
- 📧 E-posta: [email]
- 💬 Discord: [server]
- 🐦 Twitter: [handle]

---

**Son Güncelleme:** 04 Mayıs 2026  
**Versiyon:** 1.0.0  
**Yazar:** AI Yazılım Mühendisi

---

> **Not:** Bu döküman, 2026 yılının en güncel teknolojileri ve best practice'leri baz alınarak hazırlanmıştır. Teknoloji hızla değiştiğinden, düzenli olarak güncellenmesi önerilir.

