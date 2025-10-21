import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-xl font-bold mb-4">FASHION</h2>
            <p className="text-muted-foreground text-sm">
              Минималистичная мода для современных людей. Качество и стиль в каждой детали.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/catalog" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Каталог
                </Link>
              </li>
              <li>
                <Link to="/contacts" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Контакты
                </Link>
              </li>
              <li>
                <Link to="/cart" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Корзина
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Контакты</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Icon name="Phone" size={16} />
                <span>+7 (999) 123-45-67</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Mail" size={16} />
                <span>info@fashion.ru</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="MapPin" size={16} />
                <span>Москва, ул. Примерная, 1</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Социальные сети</h3>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Instagram" size={24} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Facebook" size={24} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Twitter" size={24} />
              </a>
            </div>
            <button className="mt-6 w-full bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
              <Icon name="MessageCircle" size={16} />
              Написать нам
            </button>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} FASHION. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
