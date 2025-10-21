import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { products } from '@/data/products';
import Icon from '@/components/ui/icon';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const Home = () => {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="min-h-screen">
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary to-background opacity-90 z-10"></div>
        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: 'url(https://cdn.poehali.dev/projects/e27a01a1-f04b-474b-8af0-865e7cdde5db/files/287611d7-f8e9-4fb3-8799-ac9c804201d5.jpg)'}}></div>
        <div className="container mx-auto px-4 text-center relative z-20">
          <h1 className="text-6xl md:text-8xl font-display font-bold mb-6 tracking-tighter">
            NOIR<span className="text-primary">.</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto font-light">
            Минималистичная одежда для современных людей
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/catalog">
              <Button size="lg" className="text-lg px-10 h-14 w-full sm:w-auto">
                Смотреть каталог
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="text-lg px-10 h-14 w-full sm:w-auto">
                Связаться
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Новые поступления</h2>
            <p className="text-muted-foreground text-lg">
              Актуальные модели этого сезона
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <Link to={`/product/${product.id}`} key={product.id}>
                <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300">
                  <div className="aspect-[3/4] overflow-hidden bg-secondary">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                    <p className="text-muted-foreground text-sm mb-2">{product.category}</p>
                    <p className="text-xl font-bold">{product.price.toLocaleString('ru-RU')} ₽</p>
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/catalog">
              <Button size="lg" variant="outline">
                Смотреть весь каталог
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Почему выбирают нас</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground mb-4">
                <Icon name="ShieldCheck" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Качество</h3>
              <p className="text-muted-foreground">
                Только проверенные бренды и материалы премиум класса
              </p>
            </div>

            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground mb-4">
                <Icon name="Truck" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Быстрая доставка</h3>
              <p className="text-muted-foreground">
                Доставка по всей России в течение 2-5 дней
              </p>
            </div>

            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground mb-4">
                <Icon name="RefreshCw" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Легкий возврат</h3>
              <p className="text-muted-foreground">
                14 дней на возврат без объяснения причин
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Частые вопросы</h2>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left text-lg">
                Как оформить заказ?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Выберите понравившийся товар, добавьте его в корзину, укажите размер и цвет.
                Затем перейдите в корзину и оформите заказ, заполнив форму доставки.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left text-lg">
                Какие способы оплаты доступны?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Мы принимаем оплату банковскими картами (Visa, MasterCard, МИР) онлайн,
                а также наличными при получении заказа.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left text-lg">
                Сколько стоит доставка?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Стоимость доставки зависит от региона и составляет от 300 до 600 рублей.
                При заказе от 5000 рублей — доставка бесплатная.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left text-lg">
                Можно ли вернуть товар?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Да, вы можете вернуть товар в течение 14 дней с момента получения,
                если он не был в использовании и сохранены все ярлыки.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left text-lg">
                Как выбрать правильный размер?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                На странице каждого товара доступна таблица размеров.
                Если у вас возникли вопросы, свяжитесь с нами через форму обратной связи.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Подпишитесь на новости
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Получайте информацию о новых коллекциях и эксклюзивных предложениях
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Ваш email"
              className="flex-1 px-4 py-3 rounded-md text-foreground"
            />
            <Button variant="secondary" size="lg">
              Подписаться
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;