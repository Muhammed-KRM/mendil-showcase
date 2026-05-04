import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { Product } from '../../../../core/models/product.model';
import { backdropAnimation, modalAnimation } from '../../../../shared/animations/fade-slide.animation';

@Component({
  selector: 'app-product-detail-modal',
  standalone: true,
  imports: [CommonModule],
  animations: [modalAnimation, backdropAnimation],
  template: `
    @if (product) {
      <div class="modal-backdrop" [@backdropAnimation] (click)="close.emit()" aria-hidden="true"></div>

      <div
        class="product-modal"
        [@modalAnimation]
        role="dialog"
        aria-modal="true"
        [attr.aria-label]="product.name + ' detayları'">

        <button class="modal-close" (click)="close.emit()" aria-label="Kapat">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>

        <div class="modal-layout">
          <!-- Image -->
          <div class="modal-image" aria-hidden="true">
            <span>{{ emoji }}</span>
          </div>

          <!-- Info -->
          <div class="modal-info">
            <div class="modal-badges">
              @for (badge of product.badges; track badge) {
                <span class="badge">{{ badge }}</span>
              }
            </div>

            <h2>{{ product.name }}</h2>
            <p class="modal-desc">{{ product.description }}</p>

            <!-- Details -->
            <div class="detail-section">
              <h3>Ürün Detayları</h3>
              <dl>
                @if (product.details.sheetCount) {
                  <div><dt>Yaprak Sayısı</dt><dd>{{ product.details.sheetCount }} adet</dd></div>
                }
                <div><dt>Boyut</dt><dd>{{ product.details.size }}</dd></div>
                <div><dt>İçerik</dt><dd>{{ product.details.ingredients }}</dd></div>
                @if (product.details.packaging) {
                  <div><dt>Ambalaj</dt><dd>{{ product.details.packaging }}</dd></div>
                }
              </dl>
            </div>

            <!-- Features -->
            <div class="detail-section">
              <h3>Özellikler</h3>
              <ul class="features-list">
                @for (f of product.features; track f) {
                  <li>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    {{ f }}
                  </li>
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    }
  `,
  styles: [`
    .modal-backdrop {
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.6);
      z-index: var(--z-modal-backdrop, 1040);
      backdrop-filter: blur(4px);
    }

    .product-modal {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: var(--z-modal, 1050);
      background: white;
      border-radius: 2rem;
      width: min(700px, calc(100vw - 2rem));
      max-height: 88vh;
      overflow-y: auto;
      box-shadow: 0 24px 64px rgba(0,0,0,0.2);
    }

    .modal-close {
      position: absolute;
      top: 1rem;
      right: 1rem;
      width: 36px;
      height: 36px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #f1f5f9;
      border: none;
      border-radius: 0.5rem;
      cursor: pointer;
      color: #64748b;
      z-index: 1;
      transition: all 150ms;

      &:hover { background: #e2e8f0; color: var(--color-dark); }
    }

    .modal-layout {
      display: grid;
      grid-template-columns: 1fr;

      @media (min-width: 640px) { grid-template-columns: 1fr 1.5fr; }
    }

    .modal-image {
      background: linear-gradient(135deg, #E8F4F8, #D4F1E8);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 3rem;
      font-size: 6rem;
      min-height: 200px;
      border-radius: 2rem 0 0 2rem;

      @media (max-width: 639px) {
        border-radius: 2rem 2rem 0 0;
        min-height: 160px;
        font-size: 5rem;
      }
    }

    .modal-info {
      padding: 2rem;
    }

    .modal-badges {
      display: flex;
      flex-wrap: wrap;
      gap: 0.375rem;
      margin-bottom: 0.875rem;
    }

    .badge {
      background: rgba(14,165,233,0.1);
      color: var(--color-primary);
      font-size: 0.7rem;
      font-weight: 600;
      padding: 0.2rem 0.6rem;
      border-radius: 9999px;
      border: 1px solid rgba(14,165,233,0.2);
    }

    .modal-info h2 {
      font-size: 1.375rem;
      font-weight: 700;
      color: var(--color-dark);
      margin: 0 0 0.75rem;
    }

    .modal-desc {
      font-size: 0.9rem;
      color: #64748b;
      line-height: 1.7;
      margin: 0 0 1.5rem;
    }

    .detail-section {
      margin-bottom: 1.25rem;

      h3 {
        font-size: 0.8rem;
        font-weight: 700;
        color: var(--color-dark);
        text-transform: uppercase;
        letter-spacing: 0.06em;
        margin: 0 0 0.75rem;
      }
    }

    dl {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      div { display: flex; gap: 0.5rem; font-size: 0.875rem; }
      dt { font-weight: 600; color: var(--color-dark); min-width: 100px; flex-shrink: 0; }
      dd { color: #64748b; margin: 0; }
    }

    .features-list {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 0.375rem;

      li {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-size: 0.875rem;
        color: #475569;

        svg { color: #10B981; flex-shrink: 0; }
      }
    }
  `]
})
export class ProductDetailModalComponent {
  @Input() product: Product | null = null;
  @Output() close = new EventEmitter<void>();

  private doc = inject(DOCUMENT);

  get emoji(): string {
    const map: Record<string, string> = { wet: '💧', paper: '📄', box: '📦', pocket: '👜' };
    return map[this.product?.category ?? ''] ?? '🧻';
  }
}
