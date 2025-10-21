import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';

export default function Header() {
  const { items } = useCart();
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="text-2xl font-bold font-display tracking-tight">
            NOIR<span className="text-primary">.</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              Главная
            </Link>
            <Link to="/catalog" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              Каталог
            </Link>
            <Link to="/contact" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              Контакты
            </Link>
          </nav>

          <Link to="/cart">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingBag className="h-5 w-5" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-[10px] font-bold text-white flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Button>
          </Link>
        </div>

        <nav className="md:hidden flex items-center gap-6 pb-4 border-t pt-4 mt-2">
          <Link to="/" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
            Главная
          </Link>
          <Link to="/catalog" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
            Каталог
          </Link>
          <Link to="/contact" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
            Контакты
          </Link>
        </nav>
      </div>
    </header>
  );
}
