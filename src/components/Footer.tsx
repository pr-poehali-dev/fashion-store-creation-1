import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-foreground text-background mt-auto">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold font-display mb-4">
              NOIR<span className="text-primary">.</span>
            </h3>
            <p className="text-sm text-background/70">
              Минималистичная одежда для современных людей
            </p>
          </div>

          <div>
            <h4 className="font-semibold font-display mb-4">Навигация</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-background/70 hover:text-primary transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/catalog" className="text-background/70 hover:text-primary transition-colors">
                  Каталог
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-background/70 hover:text-primary transition-colors">
                  Контакты
                </Link>
              </li>
              <li>
                <Link to="/cart" className="text-background/70 hover:text-primary transition-colors">
                  Корзина
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold font-display mb-4">Контакты</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href="tel:+79991234567" className="hover:text-primary transition-colors">
                  +7 (999) 123-45-67
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:info@noir.shop" className="hover:text-primary transition-colors">
                  info@noir.shop
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span>Москва, ул. Примерная, 123</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold font-display mb-4">Социальные сети</h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="mailto:info@noir.shop"
                className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-white/50">
          <p>&copy; {new Date().getFullYear()} NOIR. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}