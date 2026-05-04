import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-kvkk',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="legal-page">
      <div class="container-custom">
        <div class="legal-header">
          <span class="section-label">Yasal</span>
          <h1>KVKK Aydınlatma Metni</h1>
          <p class="update-date">Son güncelleme: 04 Mayıs 2026</p>
        </div>
        <div class="legal-content">
          <h2>1. Veri Sorumlusu</h2>
          <p>Mendil Markası A.Ş. ("Şirket"), 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") kapsamında veri sorumlusu sıfatıyla hareket etmektedir.</p>

          <h2>2. İşlenen Kişisel Veriler</h2>
          <p>Şirketimiz tarafından aşağıdaki kişisel veriler işlenmektedir:</p>
          <ul>
            <li>Kimlik bilgileri (ad, soyad)</li>
            <li>İletişim bilgileri (e-posta, telefon, adres)</li>
            <li>İşlem güvenliği bilgileri (IP adresi, çerez verileri)</li>
          </ul>

          <h2>3. Kişisel Verilerin İşlenme Amaçları</h2>
          <p>Kişisel verileriniz; iletişim taleplerinizin yanıtlanması, hizmet kalitesinin artırılması ve yasal yükümlülüklerin yerine getirilmesi amacıyla işlenmektedir.</p>

          <h2>4. Kişisel Verilerin Aktarılması</h2>
          <p>Kişisel verileriniz, yasal zorunluluklar dışında üçüncü kişilerle paylaşılmamaktadır.</p>

          <h2>5. Veri Sahibinin Hakları</h2>
          <p>KVKK'nın 11. maddesi uyarınca aşağıdaki haklara sahipsiniz:</p>
          <ul>
            <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
            <li>İşlenmişse buna ilişkin bilgi talep etme</li>
            <li>Verilerin düzeltilmesini isteme</li>
            <li>Verilerin silinmesini isteme</li>
            <li>İşlemeye itiraz etme</li>
          </ul>

          <h2>6. Başvuru</h2>
          <p>Haklarınızı kullanmak için <a routerLink="/yasal/kvkk-basvuru">KVKK Başvuru Formu</a>'nu doldurabilir veya <a href="mailto:kvkk@mendimarkasi.com">kvkk&#64;mendimarkasi.com</a> adresine e-posta gönderebilirsiniz.</p>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['../legal.shared.scss']
})
export class KvkkComponent {}
