import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { products } from '@/data/products';
import Icon from '@/components/ui/icon';

const Catalog = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Все');

  const categories = ['Все', ...Array.from(new Set(products.map(p => p.category)))];

  const filteredProducts = selectedCategory === 'Все'
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4">Каталог</h1>
          <p className="text-muted-foreground text-lg">
            Вся коллекция в одном месте
          </p>
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
            <Link to={`/product/${product.id}`} key={product.id}>
              <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="aspect-[3/4] overflow-hidden bg-secondary relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                </div>
                <div className="p-4">
                  <p className="text-xs text-muted-foreground mb-1">{product.category}</p>
                  <h3 className="font-semibold text-lg mb-2 line-clamp-1">{product.name}</h3>
                  <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="text-2xl font-bold">{product.price.toLocaleString('ru-RU')} ₽</p>
                    <Button size="sm" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Icon name="ShoppingCart" size={16} />
                    </Button>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <Icon name="Package" size={64} className="mx-auto text-muted-foreground mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Товары не найдены</h3>
            <p className="text-muted-foreground">
              Попробуйте выбрать другую категорию
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Catalog;