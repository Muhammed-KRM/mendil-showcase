import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../../../core/models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  template: `
    <article class="product-card" [attr.aria-label]="product.name">
      <!-- Image -->
      <div class="card-image">
        <div class="card-placeholder" aria-hidden="true">
          <span>{{ emoji }}</span>
        </div>
        <div class="card-badges" aria-label="Ürün etiketleri">
          @for (badge of product.badges.slice(0, 2); track badge) {
            <span class="badge">{{ badge }}</span>
          }
        </div>
      </div>

      <!-- Info -->
      <div class="card-info">
        <h3 class="card-name">{{ product.name }}</h3>
        <p class="card-desc">{{ product.shortDescription }}</p>

        <ul class="card-features" aria-label="Özellikler">
          @for (f of product.features.slice(0, 3); track f) {
            <li>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              {{ f }}
            </li>
          }
        </ul>

        <button
          class="card-btn"
          (click)="openDetail.emit(product)"
          [attr.aria-label]="product.name + ' detaylarını gör'">
          Detayları Gör
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </button>
      </div>
    </article>
  `,
  styles: [`
    .product-card {
      background: white;
      border-radius: 1.5rem;
      overflow: hidden;
      border: 1px solid #f1f5f9;
      transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
      display: flex;
      flex-direction: column;
      height: 100%;

      &:hover {
        transform: translateY(-6px);
        box-shadow: 0 16px 40px rgba(0,0,0,0.1);
        border-color: rgba(14,165,233,0.2);

        .card-placeholder { transform: scale(1.08); }
      }
    }

    .card-image {
      position: relative;
      overflow: hidden;
      background: linear-gradient(135deg, #E8F4F8, #F0F9FF);
      height: 180px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .card-placeholder {
      font-size: 4.5rem;
      transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1);
      filter: drop-shadow(0 4px 8px rgba(0,0,0,0.1));
    }

    .card-badges {
      position: absolute;
      top: 0.75rem;
      left: 0.75rem;
      display: flex;
      flex-wrap: wrap;
      gap: 0.375rem;
    }

    .badge {
      background: rgba(255,255,255,0.9);
      backdrop-filter: blur(4px);
      color: var(--color-primary);
      font-size: 0.7rem;
      font-weight: 600;
      padding: 0.2rem 0.6rem;
      border-radius: 9999px;
      border: 1px solid rgba(14,165,233,0.2);
    }

    .card-info {
      padding: 1.25rem;
      flex: 1;
      display: flex;
      flex-direction: column;
    }

    .card-name {
      font-size: 0.9375rem;
      font-weight: 700;
      color: var(--color-dark);
      margin: 0 0 0.375rem;
      line-height: 1.3;
    }

    .card-desc {
      font-size: 0.8125rem;
      color: #64748b;
      margin: 0 0 0.875rem;
    }

    .card-features {
      list-style: none;
      padding: 0;
      margin: 0 0 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.375rem;
      flex: 1;

      li {
        display: flex;
        align-items: center;
        gap: 0.375rem;
        font-size: 0.8rem;
        color: #475569;

        svg { color: #10B981; flex-shrink: 0; }
      }
    }

    .card-btn {
      display: inline-flex;
      align-items: center;
      gap: 0.375rem;
      font-size: 0.875rem;
      font-weight: 600;
      color: var(--color-primary);
      background: none;
      border: none;
      cursor: pointer;
      padding: 0;
      transition: gap 150ms;

      &:hover { gap: 0.625rem; }
    }
  `]
})
export class ProductCardComponent {
  @Input({ required: true }) product!: Product;
  @Output() openDetail = new EventEmitter<Product>();

  get emoji(): string {
    const map: Record<string, string> = { wet: '💧', paper: '📄', box: '📦', pocket: '👜' };
    return map[this.product.category] ?? '🧻';
  }
}
