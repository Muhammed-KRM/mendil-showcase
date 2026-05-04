import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../../../core/models/product.model';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-product-grid',
  standalone: true,
  imports: [ProductCardComponent, ScrollRevealDirective],
  template: `
    @if (products.length === 0) {
      <div class="empty-state" role="status">
        <span aria-hidden="true">🔍</span>
        <p>Bu kategoride ürün bulunamadı.</p>
      </div>
    } @else {
      <div class="product-grid" role="list" aria-label="Ürün listesi">
        @for (product of products; track product.id; let i = $index) {
          <div role="listitem" appScrollReveal [srDelay]="(i % 4) * 0.08">
            <app-product-card
              [product]="product"
              (openDetail)="openDetail.emit($event)" />
          </div>
        }
      </div>
    }
  `,
  styles: [`
    .product-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1.5rem;

      @media (min-width: 640px)  { grid-template-columns: repeat(2, 1fr); }
      @media (min-width: 1024px) { grid-template-columns: repeat(3, 1fr); }
      @media (min-width: 1280px) { grid-template-columns: repeat(4, 1fr); }
    }

    .empty-state {
      text-align: center;
      padding: 4rem 2rem;
      color: #94a3b8;

      span { font-size: 3rem; display: block; margin-bottom: 1rem; }
      p { font-size: 1rem; }
    }
  `]
})
export class ProductGridComponent {
  @Input() products: Product[] = [];
  @Output() openDetail = new EventEmitter<Product>();
}
