import { Directive, ElementRef, Input, OnInit, OnDestroy, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appLazyLoad]',
  standalone: true
})
export class LazyLoadDirective implements OnInit, OnDestroy {
  @Input('appLazyLoad') src = '';
  @Input() placeholder = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect width="400" height="300" fill="%23E8F4F8"/%3E%3C/svg%3E';

  private el = inject(ElementRef);
  private observer?: IntersectionObserver;

  private platform = inject(PLATFORM_ID);

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platform)) return;

    const img = this.el.nativeElement as HTMLImageElement;
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
