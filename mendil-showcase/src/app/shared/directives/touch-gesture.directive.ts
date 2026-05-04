import { Directive, ElementRef, Output, EventEmitter, OnInit, inject } from '@angular/core';

@Directive({
  selector: '[appTouchGesture]',
  standalone: true
})
export class TouchGestureDirective implements OnInit {
  @Output() swipeLeft  = new EventEmitter<void>();
  @Output() swipeRight = new EventEmitter<void>();
  @Output() swipeUp    = new EventEmitter<void>();
  @Output() swipeDown  = new EventEmitter<void>();

  private el = inject(ElementRef);
  private touchStartX = 0;
  private touchStartY = 0;
  private readonly minSwipeDistance = 50;

  ngOnInit(): void {
    const el = this.el.nativeElement;
    el.addEventListener('touchstart', (e: TouchEvent) => {
      this.touchStartX = e.changedTouches[0].screenX;
      this.touchStartY = e.changedTouches[0].screenY;
    }, { passive: true });

    el.addEventListener('touchend', (e: TouchEvent) => {
      const dx = e.changedTouches[0].screenX - this.touchStartX;
      const dy = e.changedTouches[0].screenY - this.touchStartY;

      if (Math.abs(dx) > Math.abs(dy)) {
        if (Math.abs(dx) > this.minSwipeDistance) {
          dx > 0 ? this.swipeRight.emit() : this.swipeLeft.emit();
        }
      } else {
        if (Math.abs(dy) > this.minSwipeDistance) {
          dy > 0 ? this.swipeDown.emit() : this.swipeUp.emit();
        }
      }
    }, { passive: true });
  }
}
