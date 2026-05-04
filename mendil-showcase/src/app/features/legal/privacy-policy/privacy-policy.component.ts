import { Component } from '@angular/core';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  template: `
    <div class="legal-page">
      <div class="container-custom">
        <div class="legal-header">
          <span class="section-label">Yasal</span>
          <h1>Gizlilik Politikası</h1>
          <p class="update-date">Son güncelleme: 04 Mayıs 2026</p>
        </div>
        <div class="legal-content">
          <h2>1. Giriş</h2>
          <p>Mendil Markası A.Ş. olarak gizliliğinize saygı duyuyor ve kişisel verilerinizi korumayı taahhüt ediyoruz.</p>

          <h2>2. Topladığımız Bilgiler</h2>
          <p>İletişim formları aracılığıyla ad, e-posta ve telefon bilgilerinizi topluyoruz. Ayrıca site kullanımına ilişkin anonim analitik veriler toplanmaktadır.</p>

          <h2>3. Bilgilerin Kullanımı</h2>
          <ul>
            <li>İletişim taleplerinizi yanıtlamak</li>
            <li>Hizmet kalitesini iyileştirmek</li>
            <li>Yasal yükümlülükleri yerine getirmek</li>
          </ul>

          <h2>4. Güvenlik</h2>
          <p>Verileriniz SSL şifreleme ile korunmaktadır. Yetkisiz erişime karşı teknik ve idari önlemler alınmaktadır.</p>

          <h2>5. İletişim</h2>
          <p>Gizlilik politikamız hakkında sorularınız için <a href="mailto:info@mendimarkasi.com">info&#64;mendimarkasi.com</a> adresine yazabilirsiniz.</p>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['../legal.shared.scss']
})
export class PrivacyPolicyComponent {}
