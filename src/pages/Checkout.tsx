import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

const Checkout = () => {
  const { items, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    paymentMethod: 'card' as 'card' | 'cash',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    alert('Заказ успешно оформлен! Спасибо за покупку.');
    clearCart();
    navigate('/');
  };

  if (items.length === 0) {
    navigate('/cart');
    return null;
  }

  const deliveryPrice = totalPrice >= 5000 ? 0 : 500;
  const finalPrice = totalPrice + deliveryPrice;

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Оформление заказа</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <Card className="p-6">
                <h2 className="text-2xl font-bold mb-6">Контактные данные</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">Имя *</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Фамилия *</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Телефон *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h2 className="text-2xl font-bold mb-6">Адрес доставки</h2>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="city">Город *</Label>
                    <Input
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="address">Адрес *</Label>
                    <Input
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="Улица, дом, квартира"
                      required
                    />
                  </div>
                  <div className="md:w-1/2">
                    <Label htmlFor="postalCode">Индекс *</Label>
                    <Input
                      id="postalCode"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h2 className="text-2xl font-bold mb-6">Способ оплаты</h2>
                <div className="space-y-3">
                  <label className="flex items-center p-4 border rounded-md cursor-pointer hover:bg-secondary transition-colors">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="card"
                      checked={formData.paymentMethod === 'card'}
                      onChange={handleChange}
                      className="mr-3"
                    />
                    <Icon name="CreditCard" size={24} className="mr-3 text-primary" />
                    <div>
                      <p className="font-semibold">Банковская карта</p>
                      <p className="text-sm text-muted-foreground">Visa, MasterCard, МИР</p>
                    </div>
                  </label>

                  <label className="flex items-center p-4 border rounded-md cursor-pointer hover:bg-secondary transition-colors">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cash"
                      checked={formData.paymentMethod === 'cash'}
                      onChange={handleChange}
                      className="mr-3"
                    />
                    <Icon name="Banknote" size={24} className="mr-3 text-primary" />
                    <div>
                      <p className="font-semibold">Наличными при получении</p>
                      <p className="text-sm text-muted-foreground">Оплата курьеру</p>
                    </div>
                  </label>
                </div>
              </Card>

              <Button type="submit" size="lg" className="w-full md:w-auto">
                Подтвердить заказ
                <Icon name="Check" size={20} className="ml-2" />
              </Button>
            </form>
          </div>

          <div className="lg:col-span-1">
            <Card className="p-6 sticky top-20">
              <h2 className="text-2xl font-bold mb-6">Ваш заказ</h2>

              <div className="space-y-4 mb-6 max-h-64 overflow-y-auto">
                {items.map((item) => (
                  <div key={`${item.product.id}-${item.size}-${item.color}`} className="flex gap-3">
                    <div className="w-16 h-20 bg-secondary rounded-md overflow-hidden flex-shrink-0">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-sm line-clamp-1">{item.product.name}</h4>
                      <p className="text-xs text-muted-foreground">
                        {item.size} / {item.color}
                      </p>
                      <p className="text-sm">
                        {item.quantity} × {item.product.price.toLocaleString('ru-RU')} ₽
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t pt-4 space-y-3">
                <div className="flex justify-between text-muted-foreground">
                  <span>Товары</span>
                  <span>{totalPrice.toLocaleString('ru-RU')} ₽</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Доставка</span>
                  <span>{deliveryPrice === 0 ? 'Бесплатно' : `${deliveryPrice} ₽`}</span>
                </div>
                <div className="flex justify-between text-2xl font-bold pt-3 border-t">
                  <span>Итого</span>
                  <span>{finalPrice.toLocaleString('ru-RU')} ₽</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
