import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-brand-story',
  standalone: true,
  imports: [RouterLink, ScrollRevealDirective],
  templateUrl: './brand-story.component.html',
  styleUrls: ['./brand-story.component.scss']
})
export class BrandStoryComponent {
  values = [
    { icon: '🌿', title: 'Doğa Dostu',       desc: 'Çevre dostu malzemeler ve üretim' },
    { icon: '🔬', title: 'Bilimsel Formül',   desc: 'Dermatoljik olarak test edilmiş' },
    { icon: '🏭', title: 'Yerli Üretim',      desc: 'Türkiye\'de üretilmiş, kaliteli' },
    { icon: '❤️', title: 'Aile Güvencesi',    desc: 'Tüm yaş grupları için güvenli' },
  ];
}
