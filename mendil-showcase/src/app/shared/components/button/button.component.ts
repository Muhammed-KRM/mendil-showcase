import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger' | 'outline';
export type ButtonSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      [type]="type"
      [disabled]="disabled || loading"
      [class]="buttonClasses"
      (click)="onClick.emit($event)"
      [attr.aria-busy]="loading"
      [attr.aria-label]="ariaLabel">

      @if (loading) {
        <span class="btn-spinner" aria-hidden="true"></span>
      }

      @if (iconLeft && !loading) {
        <span class="btn-icon-left" aria-hidden="true">{{ iconLeft }}</span>
      }

      <span [class.sr-only]="iconOnly">
        <ng-content />
      </span>

      @if (iconRight && !loading) {
        <span class="btn-icon-right" aria-hidden="true">{{ iconRight }}</span>
      }
    </button>
  `,
  styles: [`
    button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      font-weight: 600;
      border-radius: 9999px;
      border: none;
      cursor: pointer;
      transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
      white-space: nowrap;
      position: relative;
      overflow: hidden;
      font-family: inherit;
      letter-spacing: 0.01em;

      &:focus-visible {
        outline: 2px solid var(--color-primary);
        outline-offset: 2px;
      }

      &:disabled {
        opacity: 0.55;
        cursor: not-allowed;
        transform: none !important;
      }

      /* Sizes */
      &.btn-sm { padding: 0.5rem 1.125rem; font-size: 0.8125rem; }
      &.btn-md { padding: 0.6875rem 1.5rem;  font-size: 0.9375rem; }
      &.btn-lg { padding: 0.875rem 2rem;     font-size: 1.0625rem; }

      /* Variants */
      &.btn-primary {
        background: var(--color-primary);
        color: white;
        box-shadow: 0 4px 14px rgba(14, 165, 233, 0.3);
        &:hover:not(:disabled) {
          background: var(--color-primary-dark);
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(14, 165, 233, 0.4);
        }
        &:active:not(:disabled) { transform: translateY(0); }
      }

      &.btn-secondary {
        background: rgba(14, 165, 233, 0.1);
        color: var(--color-primary);
        &:hover:not(:disabled) {
          background: rgba(14, 165, 233, 0.18);
          transform: translateY(-1px);
        }
      }

      &.btn-outline {
        background: transparent;
        color: var(--color-primary);
        border: 1.5px solid var(--color-primary);
        &:hover:not(:disabled) {
          background: var(--color-primary);
          color: white;
          transform: translateY(-1px);
        }
      }

      &.btn-ghost {
        background: transparent;
        color: #475569;
        &:hover:not(:disabled) {
          background: #f1f5f9;
          color: var(--color-dark);
        }
      }

      &.btn-danger {
        background: var(--color-error);
        color: white;
        box-shadow: 0 4px 14px rgba(239, 68, 68, 0.3);
        &:hover:not(:disabled) {
          background: #dc2626;
          transform: translateY(-2px);
        }
      }

      &.btn-full { width: 100%; }
    }

    .btn-spinner {
      width: 16px;
      height: 16px;
      border: 2px solid rgba(255,255,255,0.3);
      border-top-color: currentColor;
      border-radius: 50%;
      animation: spin 0.7s linear infinite;
      flex-shrink: 0;
    }

    .sr-only {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0,0,0,0);
      white-space: nowrap;
      border-width: 0;
    }

    @keyframes spin {
      to { transform: rotate(360deg); }
    }
  `]
})
export class ButtonComponent {
  @Input() variant: ButtonVariant = 'primary';
  @Input() size: ButtonSize = 'md';
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() disabled = false;
  @Input() loading = false;
  @Input() fullWidth = false;
  @Input() iconLeft = '';
  @Input() iconRight = '';
  @Input() iconOnly = false;
  @Input() ariaLabel = '';

  @Output() onClick = new EventEmitter<MouseEvent>();

  get buttonClasses(): string {
    return [
      `btn-${this.variant}`,
      `btn-${this.size}`,
      this.fullWidth ? 'btn-full' : ''
    ].filter(Boolean).join(' ');
  }
}
