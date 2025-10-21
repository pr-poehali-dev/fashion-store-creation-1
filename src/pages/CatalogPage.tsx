import { useState } from 'react';
import { ProductCard } from '@/components/ui/product-card';
import { products, categories } from '@/data/products';
import { Button } from '@/components/ui/button';

export const CatalogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('Все');

  const filteredProducts = selectedCategory === 'Все' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h1 className="font-display font-bold text-4xl md:text-5xl mb-4">Каталог</h1>
          <p className="text-muted-foreground text-lg">Вся наша коллекция одежды</p>
        </div>

        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category)}
              className="transition-all"
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg">В этой категории пока нет товаров</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CatalogPage;
