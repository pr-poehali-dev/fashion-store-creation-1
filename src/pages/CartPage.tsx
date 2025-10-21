import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import Icon from '@/components/ui/icon';

const CartPage = () => {
  const { items, removeFromCart, updateQuantity, totalPrice } = useCart();
  const navigate = useNavigate();

  if (items.length === 0) {
    return (
      <div className="min-h-screen py-12">
        <div className="container mx-auto px-4">
          <div className="text-center py-20">
            <Icon name="ShoppingCart" size={64} className="mx-auto mb-4 text-muted-foreground" />
            <h2 className="text-2xl font-bold mb-4">Ваша корзина пуста</h2>
            <p className="text-muted-foreground mb-8">Добавьте товары из каталога</p>
            <Link
              to="/catalog"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
            >
              <Icon name="ArrowLeft" size={20} />
              Перейти в каталог
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Корзина</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div
                key={`${item.product.id}-${item.size}-${item.color}`}
                className="flex gap-4 border border-border rounded-lg p-4 bg-card"
              >
                <div className="w-24 h-32 bg-muted rounded-md overflow-hidden flex-shrink-0">
                  <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <Icon name="Image" size={32} className="text-gray-400" />
                  </div>
                </div>

                <div className="flex-1">
                  <Link
                    to={`/product/${item.product.id}`}
                    className="font-semibold text-lg hover:text-primary transition-colors"
                  >
                    {item.product.name}
                  </Link>
                  <p className="text-sm text-muted-foreground mt-1">
                    Размер: {item.size} • Цвет: {item.color}
                  </p>
                  <p className="font-bold text-xl mt-2">
                    {item.product.price.toLocaleString('ru-RU')} ₽
                  </p>
                </div>

                <div className="flex flex-col justify-between items-end">
                  <button
                    onClick={() => removeFromCart(item.product.id, item.size, item.color)}
                    className="text-muted-foreground hover:text-destructive transition-colors"
                  >
                    <Icon name="Trash2" size={20} />
                  </button>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQuantity(item.product.id, item.size, item.color, item.quantity - 1)}
                      className="w-8 h-8 border border-border rounded-md hover:bg-muted transition-colors"
                    >
                      <Icon name="Minus" size={14} className="mx-auto" />
                    </button>
                    <span className="font-semibold w-8 text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.product.id, item.size, item.color, item.quantity + 1)}
                      className="w-8 h-8 border border-border rounded-md hover:bg-muted transition-colors"
                    >
                      <Icon name="Plus" size={14} className="mx-auto" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-1">
            <div className="border border-border rounded-lg p-6 bg-card sticky top-20">
              <h2 className="text-2xl font-bold mb-6">Итого</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-muted-foreground">
                  <span>Товары ({items.reduce((sum, item) => sum + item.quantity, 0)} шт.)</span>
                  <span>{totalPrice.toLocaleString('ru-RU')} ₽</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Доставка</span>
                  <span className="text-green-600 font-medium">Бесплатно</span>
                </div>
                <div className="border-t border-border pt-3">
                  <div className="flex justify-between text-2xl font-bold">
                    <span>К оплате</span>
                    <span>{totalPrice.toLocaleString('ru-RU')} ₽</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => navigate('/checkout')}
                className="w-full bg-primary text-primary-foreground py-4 rounded-md font-semibold text-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
              >
                Оформить заказ
                <Icon name="ArrowRight" size={20} />
              </button>

              <Link
                to="/catalog"
                className="block text-center mt-4 text-muted-foreground hover:text-foreground transition-colors"
              >
                Продолжить покупки
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
