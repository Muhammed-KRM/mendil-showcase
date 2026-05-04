import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal.directive';
import { PRODUCTS } from '../../../products/data/products.data';

@Component({
  selector: 'app-featured-products',
  standalone: true,
  imports: [RouterLink, ScrollRevealDirective],
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.scss']
})
export class FeaturedProductsComponent {
  products = PRODUCTS.slice(0, 4);
}
