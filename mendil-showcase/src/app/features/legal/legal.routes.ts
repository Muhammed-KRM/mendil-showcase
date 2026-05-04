import { Routes } from '@angular/router';

export const LEGAL_ROUTES: Routes = [
  {
    path: 'kvkk',
    loadComponent: () => import('./kvkk/kvkk.component').then(m => m.KvkkComponent),
    title: 'KVKK Aydınlatma Metni | Mendil Markası'
  },
  {
    path: 'kvkk-basvuru',
    loadComponent: () => import('./kvkk-request/kvkk-request.component').then(m => m.KvkkRequestComponent),
    title: 'KVKK Başvuru Formu | Mendil Markası'
  },
  {
    path: 'cerez-politikasi',
    loadComponent: () => import('./cookie-policy/cookie-policy.component').then(m => m.CookiePolicyComponent),
    title: 'Çerez Politikası | Mendil Markası'
  },
  {
    path: 'gizlilik-politikasi',
    loadComponent: () => import('./privacy-policy/privacy-policy.component').then(m => m.PrivacyPolicyComponent),
    title: 'Gizlilik Politikası | Mendil Markası'
  },
  {
    path: 'kullanim-kosullari',
    loadComponent: () => import('./terms-of-use/terms-of-use.component').then(m => m.TermsOfUseComponent),
    title: 'Kullanım Koşulları | Mendil Markası'
  },
  { path: '', redirectTo: 'kvkk', pathMatch: 'full' }
];
