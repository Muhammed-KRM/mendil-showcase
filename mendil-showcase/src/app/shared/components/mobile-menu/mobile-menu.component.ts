import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mobile-menu',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.scss']
})
export class MobileMenuComponent {
  @Input() isOpen = false;
  @Input() navItems: Array<{ label: string; path: string }> = [];
  @Output() closeMenu = new EventEmitter<void>();

  close(): void {
    this.closeMenu.emit();
  }
}
