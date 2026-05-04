import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal.directive';
import { TouchGestureDirective } from '../../../../shared/directives/touch-gesture.directive';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  rating: number;
  comment: string;
  avatar: string;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective, TouchGestureDirective],
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent {
  activeIndex = signal(0);

  testimonials: Testimonial[] = [
    { id: 1, name: 'Ayşe Yılmaz',   role: 'Anne',           rating: 5, comment: 'Bebeğim için kullandığım en iyi ıslak mendil. Hassas cildine çok uygun, hiç tahriş olmuyor. Kesinlikle tavsiye ederim!', avatar: '👩' },
    { id: 2, name: 'Mehmet Demir',  role: 'İşletme Sahibi', rating: 5, comment: 'Ofisimizde kullanıyoruz. Kaliteli ve ekonomik. Çalışanlarımız çok memnun, tekrar sipariş vereceğiz.', avatar: '👨‍💼' },
    { id: 3, name: 'Zeynep Kaya',   role: 'Öğretmen',       rating: 5, comment: 'Sınıfta her zaman yanımda. Hijyenik ve pratik. Öğrencilerim için güvenle kullanıyorum.', avatar: '👩‍🏫' },
    { id: 4, name: 'Can Özdemir',   role: 'Sporcu',          rating: 5, comment: 'Spor salonunda kullanmak için ideal. Antibakteriyel özelliği çok iyi, her antrenmanda yanımda.', avatar: '🏋️' },
    { id: 5, name: 'Elif Arslan',   role: 'Ev Hanımı',       rating: 5, comment: 'Evde her yerde var. Mutfakta, banyoda, oturma odasında. Vazgeçilmezimiz oldu.', avatar: '👩‍🍳' },
  ];

  get stars(): number[] {
    return [1, 2, 3, 4, 5];
  }

  prev(): void {
    this.activeIndex.update(i => (i - 1 + this.testimonials.length) % this.testimonials.length);
  }

  next(): void {
    this.activeIndex.update(i => (i + 1) % this.testimonials.length);
  }

  goTo(index: number): void {
    this.activeIndex.set(index);
  }
}
