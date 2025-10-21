import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Cart = () => {
  const { items, removeFromCart, updateQuantity, totalPrice, totalItems } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Icon name="ShoppingCart" size={64} className="mx-auto text-muted-foreground mb-4" />
          <h2 className="text-3xl font-bold mb-2">Корзина пуста</h2>
          <p className="text-muted-foreground mb-6">
            Добавьте товары из каталога, чтобы начать покупки
          </p>
          <Link to="/catalog">
            <Button size="lg">
              <Icon name="Store" size={20} className="mr-2" />
              Перейти в каталог
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">Корзина</h1>
        <p className="text-muted-foreground mb-8">
          {totalItems} {totalItems === 1 ? 'товар' : totalItems < 5 ? 'товара' : 'товаров'}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <Card key={`${item.product.id}-${item.size}-${item.color}`} className="p-4">
                <div className="flex gap-4">
                  <div className="w-24 h-32 bg-secondary rounded-md overflow-hidden flex-shrink-0">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <Link to={`/product/${item.product.id}`}>
                      <h3 className="font-semibold text-lg mb-1 hover:text-primary transition-colors">
                        {item.product.name}
                      </h3>
                    </Link>
                    <p className="text-sm text-muted-foreground mb-2">{item.product.category}</p>
                    <div className="flex gap-4 text-sm mb-3">
                      <span>Размер: <strong>{item.size}</strong></span>
                      <span>Цвет: <strong>{item.color}</strong></span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateQuantity(item.product.id, item.size, item.color, item.quantity - 1)}
                        >
                          <Icon name="Minus" size={14} />
                        </Button>
                        <span className="w-8 text-center font-semibold">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateQuantity(item.product.id, item.size, item.color, item.quantity + 1)}
                        >
                          <Icon name="Plus" size={14} />
                        </Button>
                      </div>

                      <div className="flex items-center gap-4">
                        <p className="text-xl font-bold">
                          {(item.product.price * item.quantity).toLocaleString('ru-RU')} ₽
                        </p>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeFromCart(item.product.id, item.size, item.color)}
                        >
                          <Icon name="Trash2" size={18} className="text-destructive" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="lg:col-span-1">
            <Card className="p-6 sticky top-20">
              <h2 className="text-2xl font-bold mb-6">Итого</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-muted-foreground">
                  <span>Товары ({totalItems})</span>
                  <span>{totalPrice.toLocaleString('ru-RU')} ₽</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Доставка</span>
                  <span>{totalPrice >= 5000 ? 'Бесплатно' : '500 ₽'}</span>
                </div>
                <div className="border-t pt-3 mt-3">
                  <div className="flex justify-between text-xl font-bold">
                    <span>Итого</span>
                    <span>
                      {(totalPrice >= 5000 ? totalPrice : totalPrice + 500).toLocaleString('ru-RU')} ₽
                    </span>
                  </div>
                </div>
              </div>

              <Link to="/checkout">
                <Button size="lg" className="w-full mb-3">
                  Оформить заказ
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
              </Link>
              
              <Link to="/catalog">
                <Button variant="outline" size="lg" className="w-full">
                  Продолжить покупки
                </Button>
              </Link>

              {totalPrice < 5000 && (
                <div className="mt-6 p-4 bg-secondary rounded-md">
                  <p className="text-sm text-muted-foreground">
                    <Icon name="Truck" size={16} className="inline mr-2" />
                    Добавьте товаров на {(5000 - totalPrice).toLocaleString('ru-RU')} ₽ для бесплатной доставки
                  </p>
                </div>
              )}
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
