import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
}

interface CartItem extends Product {
  quantity: number;
}

const products: Product[] = [
  {
    id: 1,
    name: "Чёрное платье",
    price: 8990,
    image: "https://cdn.poehali.dev/projects/e27a01a1-f04b-474b-8af0-865e7cdde5db/files/f444d66b-2da2-447a-b2e5-71f139dcefd7.jpg",
    category: "Платья",
    description: "Элегантное чёрное платье из премиального материала"
  },
  {
    id: 2,
    name: "Белый свитер оверсайз",
    price: 5490,
    image: "https://cdn.poehali.dev/projects/e27a01a1-f04b-474b-8af0-865e7cdde5db/files/12991e9b-b0b8-4745-bb0a-9d0da7c919e4.jpg",
    category: "Свитеры",
    description: "Уютный свитер свободного кроя из мягкой шерсти"
  },
  {
    id: 3,
    name: "Кожаная куртка",
    price: 15990,
    image: "https://cdn.poehali.dev/projects/e27a01a1-f04b-474b-8af0-865e7cdde5db/files/cd0a0eb6-a644-4cee-8536-094919b7e762.jpg",
    category: "Верхняя одежда",
    description: "Классическая куртка из натуральной кожи"
  },
  {
    id: 4,
    name: "Базовая футболка",
    price: 2490,
    image: "https://cdn.poehali.dev/projects/e27a01a1-f04b-474b-8af0-865e7cdde5db/files/12991e9b-b0b8-4745-bb0a-9d0da7c919e4.jpg",
    category: "Футболки",
    description: "Минималистичная футболка из органического хлопка"
  },
  {
    id: 5,
    name: "Джинсы прямого кроя",
    price: 6990,
    image: "https://cdn.poehali.dev/projects/e27a01a1-f04b-474b-8af0-865e7cdde5db/files/f444d66b-2da2-447a-b2e5-71f139dcefd7.jpg",
    category: "Брюки",
    description: "Классические джинсы универсального кроя"
  },
  {
    id: 6,
    name: "Шерстяное пальто",
    price: 18990,
    image: "https://cdn.poehali.dev/projects/e27a01a1-f04b-474b-8af0-865e7cdde5db/files/cd0a0eb6-a644-4cee-8536-094919b7e762.jpg",
    category: "Верхняя одежда",
    description: "Элегантное пальто из итальянской шерсти"
  }
];

export default function Index() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('Все');
  const [activeSection, setActiveSection] = useState<'home' | 'catalog' | 'checkout' | 'contact'>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const categories = ['Все', ...Array.from(new Set(products.map(p => p.category)))];
  
  const filteredProducts = selectedCategory === 'Все' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: number) => {
    setCart(prev => prev.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId: number, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === productId) {
        const newQuantity = item.quantity + delta;
        return newQuantity > 0 ? { ...item, quantity: newQuantity } : item;
      }
      return item;
    }).filter(item => item.quantity > 0));
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 bg-white border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-display font-bold tracking-tight cursor-pointer" onClick={() => setActiveSection('home')}>
              NOVA
            </h1>
            
            <nav className="hidden md:flex items-center gap-8">
              <button onClick={() => setActiveSection('home')} className="text-sm font-medium hover:text-primary transition-colors">
                Главная
              </button>
              <button onClick={() => setActiveSection('catalog')} className="text-sm font-medium hover:text-primary transition-colors">
                Каталог
              </button>
              <button onClick={() => setActiveSection('contact')} className="text-sm font-medium hover:text-primary transition-colors">
                Контакты
              </button>
            </nav>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="relative">
                  <Icon name="ShoppingBag" size={20} />
                  {totalItems > 0 && (
                    <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs">
                      {totalItems}
                    </Badge>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent className="w-full sm:max-w-lg">
                <SheetHeader>
                  <SheetTitle className="font-display">Корзина</SheetTitle>
                </SheetHeader>
                <div className="mt-8 flex flex-col gap-4">
                  {cart.length === 0 ? (
                    <p className="text-muted-foreground text-center py-8">Корзина пуста</p>
                  ) : (
                    <>
                      <div className="flex flex-col gap-4 max-h-[60vh] overflow-y-auto">
                        {cart.map(item => (
                          <Card key={item.id}>
                            <CardContent className="p-4">
                              <div className="flex gap-4">
                                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
                                <div className="flex-1">
                                  <h3 className="font-medium">{item.name}</h3>
                                  <p className="text-sm text-muted-foreground">{item.price.toLocaleString()} ₽</p>
                                  <div className="flex items-center gap-2 mt-2">
                                    <Button
                                      size="icon"
                                      variant="outline"
                                      className="h-8 w-8"
                                      onClick={() => updateQuantity(item.id, -1)}
                                    >
                                      <Icon name="Minus" size={14} />
                                    </Button>
                                    <span className="text-sm w-8 text-center">{item.quantity}</span>
                                    <Button
                                      size="icon"
                                      variant="outline"
                                      className="h-8 w-8"
                                      onClick={() => updateQuantity(item.id, 1)}
                                    >
                                      <Icon name="Plus" size={14} />
                                    </Button>
                                    <Button
                                      size="icon"
                                      variant="ghost"
                                      className="h-8 w-8 ml-auto"
                                      onClick={() => removeFromCart(item.id)}
                                    >
                                      <Icon name="Trash2" size={14} />
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                      <div className="border-t pt-4">
                        <div className="flex justify-between items-center mb-4">
                          <span className="font-display font-semibold">Итого:</span>
                          <span className="text-2xl font-display font-bold">{totalPrice.toLocaleString()} ₽</span>
                        </div>
                        <Button className="w-full" size="lg" onClick={() => setActiveSection('checkout')}>
                          Оформить заказ
                        </Button>
                      </div>
                    </>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <main>
        {activeSection === 'home' && (
          <>
            <section className="relative h-[70vh] flex items-center justify-center bg-secondary">
              <div className="container mx-auto px-4 text-center">
                <h2 className="text-5xl md:text-7xl font-display font-bold mb-6 animate-fade-in">
                  Минимализм.<br />Стиль.<br />Качество.
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Создавайте свой уникальный образ с коллекцией базовых вещей премиального качества
                </p>
                <Button size="lg" className="text-lg px-8" onClick={() => setActiveSection('catalog')}>
                  Смотреть каталог
                </Button>
              </div>
            </section>

            <section className="py-20">
              <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name="Truck" size={28} className="text-primary" />
                    </div>
                    <h3 className="font-display font-semibold text-lg mb-2">Бесплатная доставка</h3>
                    <p className="text-muted-foreground">При заказе от 5000 ₽</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name="Shield" size={28} className="text-primary" />
                    </div>
                    <h3 className="font-display font-semibold text-lg mb-2">Гарантия качества</h3>
                    <p className="text-muted-foreground">Возврат в течение 14 дней</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name="Heart" size={28} className="text-primary" />
                    </div>
                    <h3 className="font-display font-semibold text-lg mb-2">Забота о клиентах</h3>
                    <p className="text-muted-foreground">Поддержка 24/7</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="py-20 bg-secondary">
              <div className="container mx-auto px-4">
                <h2 className="text-4xl font-display font-bold text-center mb-12">Часто задаваемые вопросы</h2>
                <Accordion type="single" collapsible className="max-w-3xl mx-auto">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-left font-medium">
                      Как оформить заказ?
                    </AccordionTrigger>
                    <AccordionContent>
                      Выберите понравившиеся товары, добавьте их в корзину и нажмите "Оформить заказ". 
                      Заполните форму с контактными данными и адресом доставки.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-left font-medium">
                      Какие способы оплаты доступны?
                    </AccordionTrigger>
                    <AccordionContent>
                      Мы принимаем оплату картами Visa, MasterCard, МИР, а также наличными при получении.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-left font-medium">
                      Сколько времени занимает доставка?
                    </AccordionTrigger>
                    <AccordionContent>
                      Доставка по Москве занимает 1-2 дня, по России - 3-7 дней в зависимости от региона.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger className="text-left font-medium">
                      Можно ли вернуть товар?
                    </AccordionTrigger>
                    <AccordionContent>
                      Да, вы можете вернуть товар в течение 14 дней с момента получения, если он не был в использовании и сохранены все бирки.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </section>
          </>
        )}

        {activeSection === 'catalog' && (
          <section className="py-12">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-display font-bold mb-8">Каталог</h2>
              
              <div className="flex gap-3 mb-8 overflow-x-auto pb-2">
                {categories.map(cat => (
                  <Button
                    key={cat}
                    variant={selectedCategory === cat ? "default" : "outline"}
                    onClick={() => setSelectedCategory(cat)}
                    className="whitespace-nowrap"
                  >
                    {cat}
                  </Button>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map(product => (
                  <Card 
                    key={product.id} 
                    className="group cursor-pointer overflow-hidden hover:shadow-lg transition-all duration-300"
                    onClick={() => setSelectedProduct(product)}
                  >
                    <div className="aspect-[3/4] overflow-hidden bg-secondary">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-display font-semibold text-lg">{product.name}</h3>
                        <Badge variant="secondary">{product.category}</Badge>
                      </div>
                      <p className="text-muted-foreground text-sm mb-4">{product.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-display font-bold">{product.price.toLocaleString()} ₽</span>
                        <Button
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            addToCart(product);
                          }}
                        >
                          <Icon name="ShoppingBag" size={16} className="mr-2" />
                          В корзину
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {activeSection === 'checkout' && (
          <section className="py-12">
            <div className="container mx-auto px-4 max-w-2xl">
              <h2 className="text-4xl font-display font-bold mb-8">Оформление заказа</h2>
              
              {cart.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-muted-foreground mb-4">Ваша корзина пуста</p>
                  <Button onClick={() => setActiveSection('catalog')}>Перейти в каталог</Button>
                </div>
              ) : (
                <div className="space-y-8">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-display font-semibold text-lg mb-4">Ваш заказ</h3>
                      <div className="space-y-3">
                        {cart.map(item => (
                          <div key={item.id} className="flex justify-between text-sm">
                            <span>{item.name} × {item.quantity}</span>
                            <span className="font-medium">{(item.price * item.quantity).toLocaleString()} ₽</span>
                          </div>
                        ))}
                        <div className="border-t pt-3 flex justify-between font-display font-bold text-lg">
                          <span>Итого:</span>
                          <span>{totalPrice.toLocaleString()} ₽</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-display font-semibold text-lg mb-4">Контактные данные</h3>
                      <div className="space-y-4">
                        <div>
                          <label className="text-sm font-medium mb-2 block">Имя</label>
                          <Input placeholder="Ваше имя" />
                        </div>
                        <div>
                          <label className="text-sm font-medium mb-2 block">Телефон</label>
                          <Input placeholder="+7 (___) ___-__-__" />
                        </div>
                        <div>
                          <label className="text-sm font-medium mb-2 block">Email</label>
                          <Input type="email" placeholder="example@email.com" />
                        </div>
                        <div>
                          <label className="text-sm font-medium mb-2 block">Адрес доставки</label>
                          <Textarea placeholder="Укажите полный адрес доставки" rows={3} />
                        </div>
                        <div>
                          <label className="text-sm font-medium mb-2 block">Комментарий к заказу</label>
                          <Textarea placeholder="Дополнительная информация (необязательно)" rows={2} />
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Button size="lg" className="w-full">
                    Подтвердить заказ
                  </Button>
                </div>
              )}
            </div>
          </section>
        )}

        {activeSection === 'contact' && (
          <section className="py-12">
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="text-4xl font-display font-bold mb-8">Контакты</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-display font-semibold text-xl mb-4">Свяжитесь с нами</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Icon name="Mail" size={20} className="text-primary mt-1" />
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-muted-foreground">info@nova-store.ru</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Phone" size={20} className="text-primary mt-1" />
                      <div>
                        <p className="font-medium">Телефон</p>
                        <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="MapPin" size={20} className="text-primary mt-1" />
                      <div>
                        <p className="font-medium">Адрес</p>
                        <p className="text-muted-foreground">Москва, ул. Примерная, д. 1</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Clock" size={20} className="text-primary mt-1" />
                      <div>
                        <p className="font-medium">Режим работы</p>
                        <p className="text-muted-foreground">Пн-Вс: 10:00 - 22:00</p>
                      </div>
                    </div>
                  </div>
                </div>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-display font-semibold text-lg mb-4">Форма обратной связи</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">Имя</label>
                        <Input placeholder="Ваше имя" />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Email</label>
                        <Input type="email" placeholder="example@email.com" />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Сообщение</label>
                        <Textarea placeholder="Ваше сообщение" rows={4} />
                      </div>
                      <Button className="w-full">Отправить</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        )}

        {selectedProduct && (
          <div 
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProduct(null)}
          >
            <Card 
              className="max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-scale-in"
              onClick={(e) => e.stopPropagation()}
            >
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="aspect-square bg-secondary">
                    <img
                      src={selectedProduct.image}
                      alt={selectedProduct.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-4">
                      <Badge variant="secondary">{selectedProduct.category}</Badge>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setSelectedProduct(null)}
                      >
                        <Icon name="X" size={20} />
                      </Button>
                    </div>
                    <h2 className="text-3xl font-display font-bold mb-4">{selectedProduct.name}</h2>
                    <p className="text-muted-foreground mb-6">{selectedProduct.description}</p>
                    <div className="flex items-baseline gap-2 mb-8">
                      <span className="text-4xl font-display font-bold">{selectedProduct.price.toLocaleString()} ₽</span>
                    </div>
                    <Button 
                      size="lg" 
                      className="w-full"
                      onClick={() => {
                        addToCart(selectedProduct);
                        setSelectedProduct(null);
                      }}
                    >
                      <Icon name="ShoppingBag" size={20} className="mr-2" />
                      Добавить в корзину
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </main>

      <footer className="bg-foreground text-background py-12 mt-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-display font-bold text-xl mb-4">NOVA</h3>
              <p className="text-sm opacity-80">Минималистичная мода премиального качества</p>
            </div>
            <div>
              <h4 className="font-display font-semibold mb-4">Навигация</h4>
              <ul className="space-y-2 text-sm">
                <li><button onClick={() => setActiveSection('home')} className="opacity-80 hover:opacity-100 transition-opacity">Главная</button></li>
                <li><button onClick={() => setActiveSection('catalog')} className="opacity-80 hover:opacity-100 transition-opacity">Каталог</button></li>
                <li><button onClick={() => setActiveSection('contact')} className="opacity-80 hover:opacity-100 transition-opacity">Контакты</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-display font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>+7 (495) 123-45-67</li>
                <li>info@nova-store.ru</li>
                <li>Москва, ул. Примерная, 1</li>
              </ul>
            </div>
            <div>
              <h4 className="font-display font-semibold mb-4">Соцсети</h4>
              <div className="flex gap-4">
                <Button variant="ghost" size="icon" className="text-background hover:text-primary">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="text-background hover:text-primary">
                  <Icon name="Facebook" size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="text-background hover:text-primary">
                  <Icon name="Twitter" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 text-center text-sm opacity-80">
            © 2024 NOVA. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}