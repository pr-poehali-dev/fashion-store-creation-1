import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '@/data/products';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

export const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { toast } = useToast();
  
  const product = products.find(p => p.id === Number(id));
  const [selectedSize, setSelectedSize] = useState('');

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Товар не найден</h1>
        <Button onClick={() => navigate('/catalog')}>Вернуться в каталог</Button>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast({
        title: 'Выберите размер',
        description: 'Пожалуйста, выберите размер товара',
        variant: 'destructive',
      });
      return;
    }

    addToCart(product, selectedSize);
    toast({
      title: 'Товар добавлен в корзину',
      description: `${product.name} - ${selectedSize}`,
    });
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="mb-8"
        >
          <Icon name="ArrowLeft" size={20} className="mr-2" />
          Назад
        </Button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="aspect-[3/4] bg-secondary rounded-lg overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col">
            <div className="mb-6">
              <p className="text-sm text-muted-foreground mb-2">{product.category}</p>
              <h1 className="font-display font-bold text-4xl mb-4">{product.name}</h1>
              <p className="text-3xl font-display font-bold">{product.price.toLocaleString('ru-RU')} ₽</p>
            </div>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              {product.description}
            </p>

            <div className="space-y-6 mb-8">
              <div>
                <label className="block font-semibold mb-3">Размер</label>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <Button
                      key={size}
                      variant={selectedSize === size ? 'default' : 'outline'}
                      onClick={() => setSelectedSize(size)}
                      className="min-w-[60px]"
                    >
                      {size}
                    </Button>
                  ))}
                </div>
              </div>


            </div>

            <div className="flex gap-4 mt-auto">
              <Button
                size="lg"
                onClick={handleAddToCart}
                className="flex-1"
              >
                <Icon name="ShoppingBag" size={20} className="mr-2" />
                Добавить в корзину
              </Button>
            </div>

            <div className="mt-8 pt-8 border-t border-border space-y-4">
              <div className="flex items-start gap-3">
                <Icon name="Truck" size={20} className="text-primary mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Бесплатная доставка</h3>
                  <p className="text-sm text-muted-foreground">При заказе от 5000 ₽</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Icon name="RefreshCw" size={20} className="text-primary mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Возврат 14 дней</h3>
                  <p className="text-sm text-muted-foreground">Легкий возврат без вопросов</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Icon name="Shield" size={20} className="text-primary mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Гарантия качества</h3>
                  <p className="text-sm text-muted-foreground">Только оригинальная продукция</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;