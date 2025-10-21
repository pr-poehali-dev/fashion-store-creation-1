import { Link } from 'react-router-dom';
import { products } from '@/data/products';
import Icon from '@/components/ui/icon';

const HomePage = () => {
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="min-h-screen">
      <section className="relative h-[80vh] flex items-center justify-center bg-gradient-to-b from-muted to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Минимализм в каждой детали
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Откройте для себя коллекцию стильной одежды в черно-белой гамме с яркими акцентами
          </p>
          <Link 
            to="/catalog"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-md text-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Смотреть каталог
            <Icon name="ArrowRight" size={20} />
          </Link>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Популярные товары</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="group"
              >
                <div className="aspect-[3/4] bg-muted rounded-lg overflow-hidden mb-4">
                  <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <Icon name="Image" size={64} className="text-gray-400" />
                  </div>
                </div>
                <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-muted-foreground mb-2">{product.category}</p>
                <p className="font-bold text-xl">{product.price.toLocaleString('ru-RU')} ₽</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/catalog"
              className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-md font-medium hover:bg-muted transition-colors"
            >
              Посмотреть все товары
              <Icon name="ArrowRight" size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Почему мы?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Truck" size={32} className="text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-xl mb-2">Быстрая доставка</h3>
              <p className="text-muted-foreground">Доставим ваш заказ в течение 1-3 дней</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="ShieldCheck" size={32} className="text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-xl mb-2">Гарантия качества</h3>
              <p className="text-muted-foreground">Только проверенные материалы и производство</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="RefreshCw" size={32} className="text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-xl mb-2">Легкий возврат</h3>
              <p className="text-muted-foreground">30 дней на возврат без вопросов</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Часто задаваемые вопросы</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            <details className="group border border-border rounded-lg p-6">
              <summary className="font-semibold text-lg cursor-pointer list-none flex justify-between items-center">
                Как выбрать правильный размер?
                <Icon name="ChevronDown" size={20} className="group-open:rotate-180 transition-transform" />
              </summary>
              <p className="mt-4 text-muted-foreground">
                На странице каждого товара есть подробная таблица размеров. Измерьте свои параметры и сравните с таблицей.
              </p>
            </details>
            <details className="group border border-border rounded-lg p-6">
              <summary className="font-semibold text-lg cursor-pointer list-none flex justify-between items-center">
                Какие способы оплаты доступны?
                <Icon name="ChevronDown" size={20} className="group-open:rotate-180 transition-transform" />
              </summary>
              <p className="mt-4 text-muted-foreground">
                Мы принимаем оплату картой онлайн, наличными при получении, а также переводом на карту.
              </p>
            </details>
            <details className="group border border-border rounded-lg p-6">
              <summary className="font-semibold text-lg cursor-pointer list-none flex justify-between items-center">
                Сколько времени занимает доставка?
                <Icon name="ChevronDown" size={20} className="group-open:rotate-180 transition-transform" />
              </summary>
              <p className="mt-4 text-muted-foreground">
                По Москве доставка занимает 1-2 дня, по России — 3-7 дней в зависимости от региона.
              </p>
            </details>
            <details className="group border border-border rounded-lg p-6">
              <summary className="font-semibold text-lg cursor-pointer list-none flex justify-between items-center">
                Можно ли вернуть товар?
                <Icon name="ChevronDown" size={20} className="group-open:rotate-180 transition-transform" />
              </summary>
              <p className="mt-4 text-muted-foreground">
                Да, вы можете вернуть товар в течение 30 дней с момента получения, если он не был в использовании.
              </p>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
