import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { gsap } from 'gsap';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss']
})
export class HeroSectionComponent implements AfterViewInit, OnDestroy {
  private tl?: gsap.core.Timeline;

  ngAfterViewInit(): void {
    this.tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    this.tl
      .from('.hero-badge',    { opacity: 0, y: 20, duration: 0.6 })
      .from('.hero-title',    { opacity: 0, y: 50, duration: 0.9 }, '-=0.3')
      .from('.hero-subtitle', { opacity: 0, y: 30, duration: 0.7 }, '-=0.4')
      .from('.hero-actions',  { opacity: 0, y: 20, duration: 0.6 }, '-=0.3')
      .from('.hero-stats',    { opacity: 0, y: 20, duration: 0.6, stagger: 0.1 }, '-=0.2')
      .from('.hero-scroll',   { opacity: 0, y: -10, duration: 0.5 }, '-=0.1');
  }

  ngOnDestroy(): void {
    this.tl?.kill();
  }
}
