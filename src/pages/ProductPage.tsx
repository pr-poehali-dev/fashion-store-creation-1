import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import Icon from '@/components/ui/icon';

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const product = products.find(p => p.id === id);
  
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(1);
  const [addedToCart, setAddedToCart] = useState<boolean>(false);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Icon name="PackageX" size={64} className="mx-auto mb-4 text-muted-foreground" />
          <h2 className="text-2xl font-bold mb-4">Товар не найден</h2>
          <button
            onClick={() => navigate('/catalog')}
            className="bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
          >
            Вернуться в каталог
          </button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert('Пожалуйста, выберите размер и цвет');
      return;
    }
    
    addToCart(product, selectedSize, selectedColor, quantity);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          <Icon name="ArrowLeft" size={20} />
          Назад
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="aspect-[3/4] bg-muted rounded-lg overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
              <Icon name="Image" size={96} className="text-gray-400" />
            </div>
          </div>

          <div className="flex flex-col">
            <span className="text-sm text-muted-foreground mb-2">{product.category}</span>
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            <p className="text-3xl font-bold text-primary mb-6">
              {product.price.toLocaleString('ru-RU')} ₽
            </p>
            
            <p className="text-muted-foreground mb-8 leading-relaxed">
              {product.description}
            </p>

            <div className="mb-6">
              <label className="block font-semibold mb-3">Размер</label>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 border rounded-md font-medium transition-colors ${
                      selectedSize === size
                        ? 'border-primary bg-primary text-primary-foreground'
                        : 'border-border hover:border-primary'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <label className="block font-semibold mb-3">Цвет</label>
              <div className="flex flex-wrap gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 border rounded-md font-medium transition-colors ${
                      selectedColor === color
                        ? 'border-primary bg-primary text-primary-foreground'
                        : 'border-border hover:border-primary'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <label className="block font-semibold mb-3">Количество</label>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border border-border rounded-md hover:bg-muted transition-colors"
                >
                  <Icon name="Minus" size={16} className="mx-auto" />
                </button>
                <span className="text-xl font-semibold w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border border-border rounded-md hover:bg-muted transition-colors"
                >
                  <Icon name="Plus" size={16} className="mx-auto" />
                </button>
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              className={`w-full py-4 rounded-md font-semibold text-lg transition-all flex items-center justify-center gap-2 ${
                addedToCart
                  ? 'bg-green-500 text-white'
                  : 'bg-primary text-primary-foreground hover:bg-primary/90'
              }`}
            >
              {addedToCart ? (
                <>
                  <Icon name="Check" size={24} />
                  Добавлено в корзину
                </>
              ) : (
                <>
                  <Icon name="ShoppingCart" size={24} />
                  Добавить в корзину
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
