import { Component, AfterViewInit, ViewChild, ElementRef, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, DOCUMENT } from '@angular/common';
import { gsap } from 'gsap';

@Component({
  selector: 'app-custom-cursor',
  standalone: true,
  template: `
    <div class="custom-cursor" #cursor aria-hidden="true">
      <div class="cursor-dot"></div>
      <div class="cursor-outline"></div>
    </div>
  `,
  styles: [`
    .custom-cursor {
      position: fixed;
      pointer-events: none;
      z-index: 9999;
      mix-blend-mode: difference;
      display: none;
    }
    @media (hover: hover) and (pointer: fine) {
      .custom-cursor { display: block; }
    }
    .cursor-dot {
      width: 8px; height: 8px;
      background: white; border-radius: 50%;
      position: absolute; top: -4px; left: -4px;
    }
    .cursor-outline {
      width: 36px; height: 36px;
      border: 2px solid white; border-radius: 50%;
      position: absolute; top: -18px; left: -18px;
      transition: width .2s, height .2s, top .2s, left .2s, border-color .2s;
    }
    :host-context(.cursor-hover) .cursor-outline {
      width: 56px; height: 56px; top: -28px; left: -28px;
      border-color: #0EA5E9;
    }
  `]
})
export class CustomCursorComponent implements AfterViewInit {
  @ViewChild('cursor') cursorRef!: ElementRef<HTMLElement>;
  private doc      = inject(DOCUMENT);
  private platform = inject(PLATFORM_ID);

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platform)) return;
    if (window.innerWidth <= 1024) return;

    const cursor = this.cursorRef.nativeElement;

    this.doc.addEventListener('mousemove', (e: MouseEvent) => {
      gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.25, ease: 'power2.out' });
    });

    this.doc.querySelectorAll('a, button, [role="button"]').forEach(el => {
      el.addEventListener('mouseenter', () => this.doc.body.classList.add('cursor-hover'));
      el.addEventListener('mouseleave', () => this.doc.body.classList.remove('cursor-hover'));
    });
  }
}
