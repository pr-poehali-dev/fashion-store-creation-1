import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { products } from '@/data/products';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function HomePage() {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="min-h-screen">
      <section className="relative h-[90vh] flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-20"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display mb-6 animate-fade-in">
            МИНИМАЛИСТИЧНЫЙ<br />
            <span className="text-primary">СТИЛЬ</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Одежда, которая подчеркивает вашу индивидуальность. Качество и дизайн в каждой детали.
          </p>
          <Link to="/catalog">
            <Button size="lg" className="text-base px-8 py-6 font-semibold group">
              Смотреть каталог
              <Icon name="ArrowRight" className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>

      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Icon name="Truck" className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold font-display mb-2">Быстрая доставка</h3>
              <p className="text-sm text-muted-foreground">
                Доставка по Москве в течение 1-2 дней
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Icon name="Shield" className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold font-display mb-2">Гарантия качества</h3>
              <p className="text-sm text-muted-foreground">
                100% оригинальная продукция премиум качества
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Icon name="Star" className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold font-display mb-2">Лучший сервис</h3>
              <p className="text-sm text-muted-foreground">
                Поддержка клиентов 24/7 и легкий возврат
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
              Популярные товары
            </h2>
            <p className="text-muted-foreground">
              Самые востребованные позиции из нашей коллекции
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {featuredProducts.map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="group block"
              >
                <div className="relative overflow-hidden rounded-lg bg-secondary mb-4 aspect-[3/4]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-semibold font-display mb-1 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-2">
                  {product.category}
                </p>
                <p className="font-bold">{product.price.toLocaleString('ru-RU')} ₽</p>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link to="/catalog">
              <Button variant="outline" size="lg" className="group">
                Показать все товары
                <Icon name="ArrowRight" className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-8 text-center">
              Часто задаваемые вопросы
            </h2>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-white/20">
                <AccordionTrigger className="text-left hover:text-primary">
                  Как долго доставляется заказ?
                </AccordionTrigger>
                <AccordionContent className="text-white/70">
                  Доставка по Москве осуществляется в течение 1-2 рабочих дней. 
                  По России — 3-7 дней в зависимости от региона. Вы получите трек-номер 
                  для отслеживания посылки сразу после отправки.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-white/20">
                <AccordionTrigger className="text-left hover:text-primary">
                  Можно ли вернуть товар?
                </AccordionTrigger>
                <AccordionContent className="text-white/70">
                  Да, вы можете вернуть товар в течение 14 дней с момента получения. 
                  Товар должен быть в оригинальной упаковке, без следов использования, 
                  с сохраненными бирками.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-white/20">
                <AccordionTrigger className="text-left hover:text-primary">
                  Какие способы оплаты доступны?
                </AccordionTrigger>
                <AccordionContent className="text-white/70">
                  Мы принимаем оплату банковскими картами (Visa, Mastercard, МИР), 
                  электронными кошельками, а также оплату при получении (для Москвы).
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-white/20">
                <AccordionTrigger className="text-left hover:text-primary">
                  Как подобрать правильный размер?
                </AccordionTrigger>
                <AccordionContent className="text-white/70">
                  На странице каждого товара есть таблица размеров. Мы рекомендуем 
                  снять мерки и сверить их с таблицей. При возникновении вопросов 
                  наши консультанты помогут подобрать размер.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border-white/20">
                <AccordionTrigger className="text-left hover:text-primary">
                  Есть ли программа лояльности?
                </AccordionTrigger>
                <AccordionContent className="text-white/70">
                  Да! При регистрации вы получаете 5% скидку на первый заказ. 
                  Постоянные клиенты участвуют в программе накопительных баллов 
                  и получают доступ к эксклюзивным акциям.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            Готовы обновить гардероб?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Откройте для себя нашу коллекцию минималистичной одежды 
            высочайшего качества
          </p>
          <Link to="/catalog">
            <Button size="lg" className="text-base px-8 py-6 font-semibold">
              Перейти в каталог
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
