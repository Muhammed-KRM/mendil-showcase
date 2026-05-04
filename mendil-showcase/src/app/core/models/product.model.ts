export interface Product {
  id: number;
  name: string;
  category: 'wet' | 'paper' | 'box' | 'pocket';
  image: string;
  description: string;
  shortDescription: string;
  features: string[];
  badges: string[];
  details: {
    sheetCount?: number;
    size: string;
    ingredients: string;
    packaging?: string;
  };
  seoTitle?: string;
  seoDescription?: string;
}

export interface ProductCategory {
  id: string;
  name: string;
  icon: string;
  description: string;
}
