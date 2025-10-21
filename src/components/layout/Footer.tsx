import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Separator } from '@/components/ui/separator';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-display font-bold text-xl mb-4">
              FASHION<span className="text-primary">.</span>
            </h3>
            <p className="text-sm text-muted-foreground">
              Минималистичная одежда для создания безупречных образов
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Навигация</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/catalog" className="text-muted-foreground hover:text-primary transition-colors">
                  Каталог
                </Link>
              </li>
              <li>
                <Link to="/contacts" className="text-muted-foreground hover:text-primary transition-colors">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Информация</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#delivery" className="text-muted-foreground hover:text-primary transition-colors">
                  Доставка и оплата
                </a>
              </li>
              <li>
                <a href="#return" className="text-muted-foreground hover:text-primary transition-colors">
                  Возврат товара
                </a>
              </li>
              <li>
                <a href="#privacy" className="text-muted-foreground hover:text-primary transition-colors">
                  Политика конфиденциальности
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Контакты</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Icon name="Phone" size={16} />
                <a href="tel:+74951234567" className="hover:text-primary transition-colors">
                  +7 (495) 123-45-67
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Mail" size={16} />
                <a href="mailto:info@fashion.ru" className="hover:text-primary transition-colors">
                  info@fashion.ru
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="MapPin" size={16} />
                <span>Москва, ул. Примерная, 1</span>
              </li>
            </ul>
            <div className="flex gap-3 mt-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Facebook" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Twitter" size={20} />
              </a>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© {currentYear} FASHION. Все права защищены</p>
          <p className="mt-2 md:mt-0">Разработано с любовью</p>
        </div>
      </div>
    </footer>
  );
};
