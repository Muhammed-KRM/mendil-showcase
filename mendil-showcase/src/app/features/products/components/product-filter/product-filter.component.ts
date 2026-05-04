import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ProductCategory } from '../../../../core/models/product.model';

@Component({
  selector: 'app-product-filter',
  standalone: true,
  template: `
    <div class="filter-bar" role="tablist" aria-label="Ürün kategorileri">
      @for (cat of categories; track cat.id) {
        <button
          class="filter-btn"
          [class.active]="activeCategory === cat.id"
          (click)="categoryChange.emit(cat.id)"
          role="tab"
          [attr.aria-selected]="activeCategory === cat.id"
          [attr.aria-label]="cat.name + ' kategorisini göster'">
          <span aria-hidden="true">{{ cat.icon }}</span>
          {{ cat.name }}
        </button>
      }
    </div>
  `,
  styles: [`
    .filter-bar {
      display: flex;
      gap: 0.5rem;
      flex-wrap: wrap;
      margin-bottom: 2.5rem;
      padding: 0.5rem;
      background: #f8fafc;
      border-radius: 1.5rem;
      border: 1px solid #f1f5f9;
    }

    .filter-btn {
      display: inline-flex;
      align-items: center;
      gap: 0.375rem;
      padding: 0.625rem 1.25rem;
      background: transparent;
      border: none;
      border-radius: 1rem;
      font-size: 0.875rem;
      font-weight: 500;
      color: #64748b;
      cursor: pointer;
      transition: all 150ms;
      font-family: inherit;

      &:hover { background: white; color: var(--color-dark); }

      &.active {
        background: white;
        color: var(--color-primary);
        font-weight: 600;
        box-shadow: 0 2px 8px rgba(0,0,0,0.08);
      }

      &:focus-visible {
        outline: 2px solid var(--color-primary);
        outline-offset: 2px;
      }
    }
  `]
})
export class ProductFilterComponent {
  @Input() categories: ProductCategory[] = [];
  @Input() activeCategory = 'all';
  @Output() categoryChange = new EventEmitter<string>();
}
