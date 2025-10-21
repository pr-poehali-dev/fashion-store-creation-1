import { Product } from '@/types/product';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link to={`/product/${product.id}`}>
      <Card className="group overflow-hidden border-border hover:border-primary transition-all duration-300 cursor-pointer">
        <div className="aspect-[3/4] overflow-hidden bg-secondary">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="p-4 space-y-2">
          <div className="flex justify-between items-start gap-2">
            <h3 className="font-display font-semibold text-lg leading-tight group-hover:text-primary transition-colors">
              {product.name}
            </h3>
          </div>
          <p className="text-sm text-muted-foreground">{product.category}</p>
          <div className="flex justify-between items-center pt-2">
            <span className="text-xl font-display font-bold">{product.price.toLocaleString('ru-RU')} ₽</span>
            <Button size="sm" variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-colors">
              Подробнее
            </Button>
          </div>
        </div>
      </Card>
    </Link>
  );
};
