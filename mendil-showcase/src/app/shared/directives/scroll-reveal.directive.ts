import { Directive, ElementRef, Input, OnInit, OnDestroy, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Directive({ selector: '[appScrollReveal]', standalone: true })
export class ScrollRevealDirective implements OnInit, OnDestroy {
  @Input() srDelay     = 0;
  @Input() srDirection: 'up' | 'down' | 'left' | 'right' = 'up';
  @Input() srDistance  = 40;
  @Input() srDuration  = 0.7;

  private el       = inject(ElementRef);
  private platform = inject(PLATFORM_ID);
  private st?: ScrollTrigger;

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platform)) return;

    gsap.registerPlugin(ScrollTrigger);

    const from: gsap.TweenVars = { opacity: 0, duration: this.srDuration, delay: this.srDelay };
    if (this.srDirection === 'up')    from['y'] =  this.srDistance;
    if (this.srDirection === 'down')  from['y'] = -this.srDistance;
    if (this.srDirection === 'left')  from['x'] = -this.srDistance;
    if (this.srDirection === 'right') from['x'] =  this.srDistance;

    gsap.from(this.el.nativeElement, {
      ...from,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: this.el.nativeElement,
        start: 'top 88%',
        toggleActions: 'play none none none'
      }
    });
  }

  ngOnDestroy(): void { this.st?.kill(); }
}
