import { Component, Input, Output, EventEmitter, OnInit, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DOCUMENT } from '@angular/common';
import { modalAnimation, backdropAnimation } from '../../animations/fade-slide.animation';

export type ModalSize = 'sm' | 'md' | 'lg' | 'xl' | 'full';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  animations: [modalAnimation, backdropAnimation],
  template: `
    @if (isOpen) {
      <!-- Backdrop -->
      <div
        class="modal-backdrop"
        [@backdropAnimation]
        (click)="onBackdropClick()"
        aria-hidden="true">
      </div>

      <!-- Modal -->
      <div
        class="modal-container"
        [class]="'modal-' + size"
        [@modalAnimation]
        role="dialog"
        aria-modal="true"
        [attr.aria-label]="title">

        <!-- Header -->
        @if (showHeader) {
          <div class="modal-header">
            <h2 class="modal-title">{{ title }}</h2>
            @if (showClose) {
              <button
                class="modal-close-btn"
                (click)="close.emit()"
                aria-label="Kapat">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M18 6L6 18M6 6l12 12"/>
                </svg>
              </button>
            }
          </div>
        }

        <!-- Body -->
        <div class="modal-body">
          <ng-content />
        </div>

        <!-- Footer -->
        @if (showFooter) {
          <div class="modal-footer">
            <ng-content select="[modal-footer]" />
          </div>
        }
      </div>
    }
  `,
  styles: [`
    .modal-backdrop {
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.55);
      z-index: var(--z-modal-backdrop, 1040);
      backdrop-filter: blur(4px);
    }

    .modal-container {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: var(--z-modal, 1050);
      background: white;
      border-radius: 1.5rem;
      box-shadow: 0 24px 64px rgba(0, 0, 0, 0.18);
      max-height: 90vh;
      overflow-y: auto;
      width: calc(100vw - 2rem);

      &.modal-sm  { max-width: 400px; }
      &.modal-md  { max-width: 560px; }
      &.modal-lg  { max-width: 720px; }
      &.modal-xl  { max-width: 900px; }
      &.modal-full { max-width: calc(100vw - 2rem); max-height: calc(100vh - 2rem); }
    }

    .modal-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1.5rem 1.5rem 0;
      position: sticky;
      top: 0;
      background: white;
      z-index: 1;
      border-bottom: 1px solid #f1f5f9;
      padding-bottom: 1rem;
    }

    .modal-title {
      font-size: 1.125rem;
      font-weight: 700;
      color: var(--color-dark);
      margin: 0;
    }

    .modal-close-btn {
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
      transition: all 150ms;
      flex-shrink: 0;

      &:hover { background: #e2e8f0; color: var(--color-dark); }
    }

    .modal-body {
      padding: 1.5rem;
    }

    .modal-footer {
      padding: 1rem 1.5rem 1.5rem;
      border-top: 1px solid #f1f5f9;
      display: flex;
      justify-content: flex-end;
      gap: 0.75rem;
    }
  `]
})
export class ModalComponent implements OnInit, OnDestroy {
  @Input() isOpen = false;
  @Input() title = '';
  @Input() size: ModalSize = 'md';
  @Input() showHeader = true;
  @Input() showFooter = false;
  @Input() showClose = true;
  @Input() closeOnBackdrop = true;

  @Output() close = new EventEmitter<void>();

  private doc = inject(DOCUMENT);

  ngOnInit(): void {
    this.toggleBodyScroll();
  }

  ngOnDestroy(): void {
    this.doc.body.style.overflow = '';
  }

  onBackdropClick(): void {
    if (this.closeOnBackdrop) this.close.emit();
  }

  private toggleBodyScroll(): void {
    this.doc.body.style.overflow = this.isOpen ? 'hidden' : '';
  }
}
