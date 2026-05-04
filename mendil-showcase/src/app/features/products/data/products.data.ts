import { Product, ProductCategory } from '../../../core/models/product.model';

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  { id: 'all',    name: 'Tümü',        icon: '🗂️', description: 'Tüm ürünlerimiz' },
  { id: 'wet',    name: 'Islak Mendil', icon: '💧', description: 'Hijyenik ıslak mendiller' },
  { id: 'paper',  name: 'Kağıt Mendil', icon: '📄', description: 'Yumuşak kağıt mendiller' },
  { id: 'box',    name: 'Kutu Mendil',  icon: '📦', description: 'Pratik kutu mendiller' },
  { id: 'pocket', name: 'Cep Mendili',  icon: '👜', description: 'Taşınabilir cep mendilleri' },
];

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Islak Mendil - Hassas Cilt',
    category: 'wet',
    image: 'assets/images/products/islak-mendil-hassas.jpg',
    description: 'Hassas ciltler için özel formül ile geliştirilmiş ıslak mendilimiz, alkol ve parfüm içermez. Dermatoljik olarak test edilmiştir.',
    shortDescription: 'Hassas ciltler için özel formül',
    features: ['Alkol içermez', 'Parfüm içermez', 'pH 5.5 dengeli', 'Dermatoljik test edilmiş', 'Hipoalerjenik'],
    badges: ['Dermatoljik Test', 'Eco-Friendly', 'Hassas Cilt'],
    details: {
      sheetCount: 120,
      size: '15x20 cm',
      ingredients: '%99 su, aloe vera, E vitamini, gliserin, provitamin B5',
      packaging: 'Kapaklı plastik ambalaj'
    },
    seoTitle: 'Hassas Cilt İçin Islak Mendil - Alkol ve Parfüm İçermez',
    seoDescription: 'Hassas ciltler için özel formül ıslak mendil. Dermatoljik test edilmiş, alkol ve parfüm içermez.'
  },
  {
    id: 2,
    name: 'Islak Mendil - Bebek',
    category: 'wet',
    image: 'assets/images/products/islak-mendil-bebek.jpg',
    description: 'Bebeğinizin hassas cildi için özel olarak formüle edilmiş ıslak mendilimiz, doğal içeriklerle zenginleştirilmiştir.',
    shortDescription: 'Bebek cildi için özel formül',
    features: ['Alkol içermez', 'Parfüm içermez', 'Parabensiz', 'Pediatrik test edilmiş', 'Ekstra yumuşak doku'],
    badges: ['Pediatrik Test', 'Eco-Friendly', 'Bebek'],
    details: {
      sheetCount: 100,
      size: '18x20 cm',
      ingredients: '%99.5 su, chamomile özü, aloe vera, E vitamini',
      packaging: 'Kapaklı plastik ambalaj'
    }
  },
  {
    id: 3,
    name: 'Kağıt Mendil - 3 Katlı',
    category: 'paper',
    image: 'assets/images/products/kagit-mendil-3katli.jpg',
    description: 'Üç katlı yapısı ile ekstra dayanıklı ve yumuşak kağıt mendilimiz, günlük kullanım için idealdir.',
    shortDescription: 'Ekstra dayanıklı 3 katlı',
    features: ['3 katlı yapı', 'Ekstra yumuşak', 'Yüksek emicilik', '%100 selüloz', 'Kokusuz'],
    badges: ['Eco-Friendly', '3 Katlı'],
    details: {
      sheetCount: 150,
      size: '21x21 cm',
      ingredients: '%100 selüloz',
      packaging: 'Karton kutu'
    }
  },
  {
    id: 4,
    name: 'Kutu Mendil - Klasik',
    category: 'box',
    image: 'assets/images/products/kutu-mendil-klasik.jpg',
    description: 'Ev ve ofis kullanımı için ideal kutu mendilimiz, şık tasarımı ile her ortama uyum sağlar.',
    shortDescription: 'Ev ve ofis için ideal',
    features: ['2 katlı yapı', 'Yumuşak doku', 'Şık kutu tasarımı', 'Pratik kullanım', 'Ekonomik'],
    badges: ['Ekonomik', 'Pratik'],
    details: {
      sheetCount: 200,
      size: '20x20 cm',
      ingredients: '%100 selüloz',
      packaging: 'Karton kutu'
    }
  },
  {
    id: 5,
    name: 'Cep Mendili - Mini',
    category: 'pocket',
    image: 'assets/images/products/cep-mendili-mini.jpg',
    description: 'Taşıması kolay mini cep mendilimiz, her an yanınızda olsun diye tasarlandı.',
    shortDescription: 'Taşıması kolay mini boy',
    features: ['Kompakt boyut', '2 katlı', 'Yumuşak doku', 'Pratik ambalaj', 'Çantaya sığar'],
    badges: ['Pratik', 'Mini Boy'],
    details: {
      sheetCount: 10,
      size: '20x20 cm',
      ingredients: '%100 selüloz',
      packaging: 'Plastik ambalaj'
    }
  },
  {
    id: 6,
    name: 'Islak Mendil - Antibakteriyel',
    category: 'wet',
    image: 'assets/images/products/islak-mendil-antibakteriyel.jpg',
    description: 'Antibakteriyel özelliği ile %99.9 bakteri temizliği sağlayan ıslak mendilimiz, hijyen için idealdir.',
    shortDescription: '%99.9 bakteri temizliği',
    features: ['%99.9 bakteri temizliği', 'Antibakteriyel', 'Hızlı kurur', 'Ferahlatıcı koku', 'Dermatoljik test'],
    badges: ['Antibakteriyel', 'Hijyenik'],
    details: {
      sheetCount: 100,
      size: '15x20 cm',
      ingredients: '%70 alkol, gliserin, E vitamini, ferahlatıcı esans',
      packaging: 'Kapaklı plastik ambalaj'
    }
  }
];
