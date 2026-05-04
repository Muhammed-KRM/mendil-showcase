import { Component, OnInit, signal, computed, inject } from '@angular/core';
import { SeoService } from '../../core/services/seo.service';
import { StructuredDataService } from '../../core/services/structured-data.service';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';
import { ProductFilterComponent } from './components/product-filter/product-filter.component';
import { ProductGridComponent } from './components/product-grid/product-grid.component';
import { ProductDetailModalComponent } from './components/product-detail-modal/product-detail-modal.component';
import { PRODUCTS, PRODUCT_CATEGORIES } from './data/products.data';
import { Product } from '../../core/models/product.model';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    ScrollRevealDirective,
    ProductFilterComponent,
    ProductGridComponent,
    ProductDetailModalComponent
  ],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  private seo = inject(SeoService);
  private structuredData = inject(StructuredDataService);

  categories = PRODUCT_CATEGORIES;
  allProducts = PRODUCTS;
  activeCategory = signal('all');
  selectedProduct = signal<Product | null>(null);

  filteredProducts = computed(() => {
    const cat = this.activeCategory();
    return cat === 'all' ? this.allProducts : this.allProducts.filter(p => p.category === cat);
  });

  ngOnInit(): void {
    this.seo.updateMetaTags({
      title: 'Ürünlerimiz',
      description: 'Islak mendil, kağıt mendil, kutu mendil ve cep mendili çeşitlerimizi keşfedin. Doğa dostu, dermatoljik test edilmiş ürünler.',
      keywords: 'ıslak mendil, kağıt mendil, kutu mendil, cep mendili, bebek mendili',
      url: 'https://mendimarkasi.com/urunler'
    });

    // Add product schemas
    this.allProducts.forEach(p => this.structuredData.addProductSchema(p));
  }

  setCategory(id: string): void {
    this.activeCategory.set(id);
  }

  openModal(product: Product): void {
    this.selectedProduct.set(product);
  }

  closeModal(): void {
    this.selectedProduct.set(null);
  }
}
