import { Component } from '@angular/core';

@Component({
  selector: 'app-cookie-policy',
  standalone: true,
  template: `
    <div class="legal-page">
      <div class="container-custom">
        <div class="legal-header">
          <span class="section-label">Yasal</span>
          <h1>Çerez Politikası</h1>
          <p class="update-date">Son güncelleme: 04 Mayıs 2026</p>
        </div>
        <div class="legal-content">
          <h2>1. Çerez Nedir?</h2>
          <p>Çerezler, web sitelerinin tarayıcınıza yerleştirdiği küçük metin dosyalarıdır. Siteyi daha iyi bir deneyimle kullanmanızı sağlarlar.</p>

          <h2>2. Kullandığımız Çerez Türleri</h2>
          <table>
            <thead>
              <tr><th>Çerez Türü</th><th>Amaç</th><th>Süre</th></tr>
            </thead>
            <tbody>
              <tr><td>Zorunlu</td><td>Sitenin çalışması için gerekli</td><td>Oturum</td></tr>
              <tr><td>Analitik</td><td>Site kullanımı analizi (Google Analytics)</td><td>2 yıl</td></tr>
              <tr><td>Pazarlama</td><td>Kişiselleştirilmiş içerik</td><td>1 yıl</td></tr>
            </tbody>
          </table>

          <h2>3. Çerezleri Kontrol Etme</h2>
          <p>Tarayıcı ayarlarınızdan çerezleri devre dışı bırakabilirsiniz. Ancak bu durumda sitenin bazı özellikleri çalışmayabilir.</p>

          <h2>4. İletişim</h2>
          <p>Çerez politikamız hakkında sorularınız için <a href="mailto:info@mendimarkasi.com">info&#64;mendimarkasi.com</a> adresine yazabilirsiniz.</p>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['../legal.shared.scss']
})
export class CookiePolicyComponent {}
