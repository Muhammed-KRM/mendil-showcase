import { Component } from '@angular/core';

@Component({
  selector: 'app-terms-of-use',
  standalone: true,
  template: `
    <div class="legal-page">
      <div class="container-custom">
        <div class="legal-header">
          <span class="section-label">Yasal</span>
          <h1>Kullanım Koşulları</h1>
          <p class="update-date">Son güncelleme: 04 Mayıs 2026</p>
        </div>
        <div class="legal-content">
          <h2>1. Kabul</h2>
          <p>Bu web sitesini kullanarak aşağıdaki kullanım koşullarını kabul etmiş sayılırsınız.</p>

          <h2>2. Hizmet Tanımı</h2>
          <p>Bu site, Mendil Markası A.Ş.'nin ürünlerini tanıtmak amacıyla hazırlanmış bir tanıtım sitesidir. Satış işlemi gerçekleştirilmemektedir.</p>

          <h2>3. Fikri Mülkiyet</h2>
          <p>Sitedeki tüm içerik, görseller ve tasarım Mendil Markası A.Ş.'ye aittir. İzinsiz kullanım yasaktır.</p>

          <h2>4. Sorumluluk Sınırlaması</h2>
          <p>Site içeriğinin doğruluğu için azami özen gösterilmekle birlikte, olası hatalardan doğacak zararlardan sorumluluk kabul edilmemektedir.</p>

          <h2>5. Değişiklikler</h2>
          <p>Kullanım koşulları önceden haber verilmeksizin değiştirilebilir. Güncel koşullar bu sayfada yayınlanır.</p>

          <h2>6. İletişim</h2>
          <p>Sorularınız için <a href="mailto:info@mendimarkasi.com">info&#64;mendimarkasi.com</a> adresine yazabilirsiniz.</p>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['../legal.shared.scss']
})
export class TermsOfUseComponent {}
