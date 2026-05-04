import { Directive, ElementRef, Input, OnInit, OnDestroy, inject } from '@angular/core';

@Directive({
  selector: '[appLazyLoad]',
  standalone: true
})
export class LazyLoadDirective implements OnInit, OnDestroy {
  @Input('appLazyLoad') src = '';
  @Input() placeholder = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect width="400" height="300" fill="%23E8F4F8"/%3E%3C/svg%3E';

  private el = inject(ElementRef);
  private observer?: IntersectionObserver;

  ngOnInit(): void {
    const img = this.el.nativeElement as HTMLImageElement;

    // Set placeholder immediately
    img.src = this.placeholder;
    img.classList.add('lazy-loading');

    if ('IntersectionObserver' in window) {
      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              this.loadImage(img);
              this.observer?.unobserve(img);
            }
          });
        },
        { rootMargin: '200px 0px', threshold: 0.01 }
      );
      this.observer.observe(img);
    } else {
      // Fallback for browsers without IntersectionObserver
      this.loadImage(img);
    }
  }

  private loadImage(img: HTMLImageElement): void {
    const tempImg = new Image();
    tempImg.onload = () => {
      img.src = this.src;
      img.classList.remove('lazy-loading');
      img.classList.add('lazy-loaded');
    };
    tempImg.onerror = () => {
      img.classList.remove('lazy-loading');
    };
    tempImg.src = this.src;
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
