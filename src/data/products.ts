import { Product } from '@/types/product';

export const products: Product[] = [
  {
    id: '1',
    name: 'Минималистичная рубашка',
    price: 4990,
    image: 'https://cdn.poehali.dev/projects/e27a01a1-f04b-474b-8af0-865e7cdde5db/files/843fed61-ecff-427e-b21a-ba2a86174508.jpg',
    category: 'Рубашки',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Черный', 'Белый'],
    description: 'Классическая рубашка из премиального хлопка. Идеальна для офиса и повседневной носки.',
    inStock: true
  },
  {
    id: '2',
    name: 'Оверсайз пиджак',
    price: 8990,
    image: 'https://cdn.poehali.dev/projects/e27a01a1-f04b-474b-8af0-865e7cdde5db/files/8f5f408c-1faa-4700-937a-4adfec553760.jpg',
    category: 'Пиджаки',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Черный', 'Серый'],
    description: 'Стильный оверсайз пиджак с минималистичным дизайном. Подходит для создания современных образов.',
    inStock: true
  },
  {
    id: '3',
    name: 'Элегантное платье',
    price: 6990,
    image: 'https://cdn.poehali.dev/projects/e27a01a1-f04b-474b-8af0-865e7cdde5db/files/2f25cc5c-89c5-4621-b21e-3fe00e23e61c.jpg',
    category: 'Платья',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Черный', 'Белый'],
    description: 'Вечернее платье с акцентом на силуэт. Изготовлено из качественных материалов.',
    inStock: true
  },
  {
    id: '4',
    name: 'Базовая футболка',
    price: 2490,
    image: 'https://cdn.poehali.dev/projects/e27a01a1-f04b-474b-8af0-865e7cdde5db/files/f2998eb6-741e-4e3a-be6e-5361745150ae.jpg',
    category: 'Футболки',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Черный', 'Белый', 'Серый'],
    description: 'Базовая футболка из премиального хлопка. Must-have в любом гардеробе.',
    inStock: true
  },
  {
    id: '5',
    name: 'Классические брюки',
    price: 5490,
    image: 'https://cdn.poehali.dev/projects/e27a01a1-f04b-474b-8af0-865e7cdde5db/files/5c65a2c1-ea04-4be9-aeb6-2fe27bf1cee2.jpg',
    category: 'Брюки',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Черный', 'Серый', 'Бежевый'],
    description: 'Классические брюки со стрелками. Отлично сочетаются с любыми верхними изделиями.',
    inStock: true
  },
  {
    id: '6',
    name: 'Трикотажный свитер',
    price: 5990,
    image: 'https://cdn.poehali.dev/projects/e27a01a1-f04b-474b-8af0-865e7cdde5db/files/f39aa1e0-a867-4bf2-bc46-3981b7a9c5cd.jpg',
    category: 'Свитера',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Черный', 'Белый', 'Серый'],
    description: 'Уютный трикотажный свитер для прохладной погоды. Минималистичный дизайн.',
    inStock: true
  },
  {
    id: '7',
    name: 'Кожаная куртка',
    price: 15990,
    image: 'https://cdn.poehali.dev/projects/e27a01a1-f04b-474b-8af0-865e7cdde5db/files/5c65a2c1-ea04-4be9-aeb6-2fe27bf1cee2.jpg',
    category: 'Куртки',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Черный'],
    description: 'Классическая кожаная куртка из натуральной кожи. Вечная классика в вашем гардеробе.',
    inStock: true
  },
  {
    id: '8',
    name: 'Джинсы slim fit',
    price: 4490,
    image: 'https://cdn.poehali.dev/projects/e27a01a1-f04b-474b-8af0-865e7cdde5db/files/f2998eb6-741e-4e3a-be6e-5361745150ae.jpg',
    category: 'Джинсы',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Черный', 'Синий'],
    description: 'Зауженные джинсы премиум качества. Идеальная посадка и комфорт.',
    inStock: true
  }
];