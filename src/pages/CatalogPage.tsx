import { useState } from 'react';
import { Link } from 'react-router-dom';
import { products } from '@/data/products';
import Icon from '@/components/ui/icon';

const CatalogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Все');
  
  const categories = ['Все', ...Array.from(new Set(products.map(p => p.category)))];
  
  const filteredProducts = selectedCategory === 'Все' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Каталог</h1>
        
        <div className="flex flex-wrap gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-foreground hover:bg-muted/80'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="group"
            >
              <div className="aspect-[3/4] bg-muted rounded-lg overflow-hidden mb-4">
                <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <Icon name="Image" size={64} className="text-gray-400" />
                </div>
              </div>
              <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
                {product.name}
              </h3>
              <p className="text-muted-foreground text-sm mb-2">{product.category}</p>
              <p className="font-bold text-xl">{product.price.toLocaleString('ru-RU')} ₽</p>
            </Link>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <Icon name="PackageOpen" size={64} className="mx-auto mb-4 text-muted-foreground" />
            <p className="text-xl text-muted-foreground">Товары не найдены</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CatalogPage;
