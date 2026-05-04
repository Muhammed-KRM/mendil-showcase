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
