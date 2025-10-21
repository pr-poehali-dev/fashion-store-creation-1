import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import Icon from '@/components/ui/icon';

const CheckoutPage = () => {
  const { items, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    paymentMethod: 'card',
    comment: '',
  });

  const [orderSubmitted, setOrderSubmitted] = useState(false);

  if (items.length === 0 && !orderSubmitted) {
    navigate('/cart');
    return null;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderSubmitted(true);
    clearCart();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (orderSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto text-center">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="Check" size={40} className="text-white" />
            </div>
            <h1 className="text-3xl font-bold mb-4">Заказ оформлен!</h1>
            <p className="text-muted-foreground mb-8">
              Спасибо за покупку! Мы отправили подтверждение на вашу почту. Наш менеджер свяжется с вами в ближайшее время.
            </p>
            <button
              onClick={() => navigate('/')}
              className="bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
            >
              Вернуться на главную
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Оформление заказа</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="border border-border rounded-lg p-6 bg-card">
                <h2 className="text-2xl font-semibold mb-6">Контактные данные</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Имя <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Иван Иванов"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Телефон <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="+7 (999) 123-45-67"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-2">
                      Email <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="example@email.com"
                    />
                  </div>
                </div>
              </div>

              <div className="border border-border rounded-lg p-6 bg-card">
                <h2 className="text-2xl font-semibold mb-6">Адрес доставки</h2>
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Город <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Москва"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Адрес <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="ул. Примерная, д. 1, кв. 10"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Индекс <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="text"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="123456"
                    />
                  </div>
                </div>
              </div>

              <div className="border border-border rounded-lg p-6 bg-card">
                <h2 className="text-2xl font-semibold mb-6">Способ оплаты</h2>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="card"
                      checked={formData.paymentMethod === 'card'}
                      onChange={handleChange}
                      className="w-4 h-4 text-primary"
                    />
                    <span className="flex items-center gap-2">
                      <Icon name="CreditCard" size={20} />
                      Оплата картой онлайн
                    </span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cash"
                      checked={formData.paymentMethod === 'cash'}
                      onChange={handleChange}
                      className="w-4 h-4 text-primary"
                    />
                    <span className="flex items-center gap-2">
                      <Icon name="Wallet" size={20} />
                      Оплата при получении
                    </span>
                  </label>
                </div>
              </div>

              <div className="border border-border rounded-lg p-6 bg-card">
                <h2 className="text-2xl font-semibold mb-6">Комментарий к заказу</h2>
                <textarea
                  name="comment"
                  value={formData.comment}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Укажите дополнительную информацию для курьера или пожелания к заказу"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-4 rounded-md font-semibold text-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
              >
                Подтвердить заказ
                <Icon name="Check" size={20} />
              </button>
            </form>
          </div>

          <div className="lg:col-span-1">
            <div className="border border-border rounded-lg p-6 bg-card sticky top-20">
              <h2 className="text-2xl font-semibold mb-6">Ваш заказ</h2>
              
              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <div key={`${item.product.id}-${item.size}-${item.color}`} className="flex gap-3">
                    <div className="w-16 h-20 bg-muted rounded-md overflow-hidden flex-shrink-0">
                      <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                        <Icon name="Image" size={20} className="text-gray-400" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-sm">{item.product.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {item.size} • {item.color} • {item.quantity} шт.
                      </p>
                      <p className="font-semibold mt-1">
                        {(item.product.price * item.quantity).toLocaleString('ru-RU')} ₽
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-border pt-4 space-y-2">
                <div className="flex justify-between text-muted-foreground">
                  <span>Товары</span>
                  <span>{totalPrice.toLocaleString('ru-RU')} ₽</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Доставка</span>
                  <span className="text-green-600 font-medium">Бесплатно</span>
                </div>
                <div className="border-t border-border pt-2 mt-2">
                  <div className="flex justify-between text-xl font-bold">
                    <span>Итого</span>
                    <span>{totalPrice.toLocaleString('ru-RU')} ₽</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
