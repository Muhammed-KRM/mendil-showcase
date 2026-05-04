import { Component, Input } from '@angular/core';

export type SpinnerSize = 'sm' | 'md' | 'lg' | 'xl';
export type SpinnerColor = 'primary' | 'white' | 'gray';

@Component({
  selector: 'app-loading-spinner',
  standalone: true,
  template: `
    <div
      class="spinner-wrap"
      [class]="'spinner-' + size"
      role="status"
      [attr.aria-label]="label">
      <div class="spinner" [class]="'spinner-color-' + color"></div>
      @if (showLabel) {
        <span class="spinner-label">{{ label }}</span>
      }
    </div>
  `,
  styles: [`
    .spinner-wrap {
      display: inline-flex;
      flex-direction: column;
      align-items: center;
      gap: 0.75rem;
    }

    .spinner {
      border-radius: 50%;
      border-style: solid;
      animation: spin 0.75s linear infinite;

      &.spinner-color-primary {
        border-color: rgba(14, 165, 233, 0.2);
        border-top-color: var(--color-primary);
      }
      &.spinner-color-white {
        border-color: rgba(255,255,255,0.3);
        border-top-color: white;
      }
      &.spinner-color-gray {
        border-color: #e2e8f0;
        border-top-color: #64748b;
      }
    }

    .spinner-sm .spinner  { width: 20px; height: 20px; border-width: 2px; }
    .spinner-md .spinner  { width: 32px; height: 32px; border-width: 3px; }
    .spinner-lg .spinner  { width: 48px; height: 48px; border-width: 4px; }
    .spinner-xl .spinner  { width: 64px; height: 64px; border-width: 5px; }

    .spinner-label {
      font-size: 0.875rem;
      color: #64748b;
      font-weight: 500;
    }

    @keyframes spin {
      to { transform: rotate(360deg); }
    }
  `]
})
export class LoadingSpinnerComponent {
  @Input() size: SpinnerSize = 'md';
  @Input() color: SpinnerColor = 'primary';
  @Input() label = 'Yükleniyor...';
  @Input() showLabel = false;
}
