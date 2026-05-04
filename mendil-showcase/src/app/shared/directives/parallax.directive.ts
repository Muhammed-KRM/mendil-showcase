import { Directive, ElementRef, Input, OnInit, OnDestroy, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Directive({ selector: '[appParallax]', standalone: true })
export class ParallaxDirective implements OnInit, OnDestroy {
  @Input() parallaxSpeed = 0.3;

  private el       = inject(ElementRef);
  private platform = inject(PLATFORM_ID);
  private tween?: gsap.core.Tween;

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platform)) return;

    gsap.registerPlugin(ScrollTrigger);

    this.tween = gsap.to(this.el.nativeElement, {
      yPercent: -100 * this.parallaxSpeed,
      ease: 'none',
      scrollTrigger: {
        trigger: this.el.nativeElement,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });
  }

  ngOnDestroy(): void { this.tween?.kill(); }
}
