import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { useNavigate } from 'react-router-dom';
import Icon from '@/components/ui/icon';

export const CartPage = () => {
  const { items, removeFromCart, updateQuantity, totalPrice, totalItems } = useCart();
  const navigate = useNavigate();

  if (items.length === 0) {
    return (
      <div className="min-h-screen py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-md mx-auto">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-secondary flex items-center justify-center">
              <Icon name="ShoppingBag" size={48} className="text-muted-foreground" />
            </div>
            <h1 className="font-display font-bold text-3xl mb-4">Корзина пуста</h1>
            <p className="text-muted-foreground mb-8">
              Добавьте товары из каталога, чтобы продолжить покупки
            </p>
            <Button onClick={() => navigate('/catalog')} size="lg">
              Перейти в каталог
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="font-display font-bold text-4xl mb-8">Корзина ({totalItems})</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <Card key={`${item.product.id}-${item.size}-${item.color}`} className="p-6">
                <div className="flex gap-6">
                  <div className="w-32 h-32 bg-secondary rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-display font-semibold text-lg mb-1">
                          {item.product.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {item.size} / {item.color}
                        </p>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeFromCart(item.product.id, item.size, item.color)}
                      >
                        <Icon name="Trash2" size={20} />
                      </Button>
                    </div>

                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => updateQuantity(item.product.id, item.size, item.color, item.quantity - 1)}
                        >
                          <Icon name="Minus" size={16} />
                        </Button>
                        <span className="w-12 text-center font-semibold">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => updateQuantity(item.product.id, item.size, item.color, item.quantity + 1)}
                        >
                          <Icon name="Plus" size={16} />
                        </Button>
                      </div>
                      <p className="font-display font-bold text-xl">
                        {(item.product.price * item.quantity).toLocaleString('ru-RU')} ₽
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="lg:col-span-1">
            <Card className="p-6 sticky top-24">
              <h2 className="font-display font-bold text-2xl mb-6">Итого</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-muted-foreground">
                  <span>Товары ({totalItems})</span>
                  <span>{totalPrice.toLocaleString('ru-RU')} ₽</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Доставка</span>
                  <span>{totalPrice >= 5000 ? 'Бесплатно' : '500 ₽'}</span>
                </div>
              </div>

              <Separator className="my-6" />

              <div className="flex justify-between text-xl font-display font-bold mb-6">
                <span>Итого:</span>
                <span>{(totalPrice + (totalPrice >= 5000 ? 0 : 500)).toLocaleString('ru-RU')} ₽</span>
              </div>

              <Button
                size="lg"
                className="w-full"
                onClick={() => navigate('/checkout')}
              >
                Оформить заказ
              </Button>

              <div className="mt-6 space-y-3 text-sm text-muted-foreground">
                <div className="flex items-start gap-2">
                  <Icon name="Shield" size={16} className="mt-0.5 flex-shrink-0" />
                  <span>Безопасная оплата</span>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="Truck" size={16} className="mt-0.5 flex-shrink-0" />
                  <span>Бесплатная доставка от 5000 ₽</span>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="RefreshCw" size={16} className="mt-0.5 flex-shrink-0" />
                  <span>Возврат в течение 14 дней</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;