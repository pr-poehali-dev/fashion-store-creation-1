import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Контакты</h1>
          <p className="text-muted-foreground text-lg">
            Свяжитесь с нами любым удобным способом
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Адрес</h3>
                  <p className="text-muted-foreground">
                    Москва, ул. Примерная, дом 1, офис 100
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Телефон</h3>
                  <p className="text-muted-foreground mb-1">+7 (999) 123-45-67</p>
                  <p className="text-sm text-muted-foreground">Пн-Пт: 9:00 - 20:00, Сб-Вс: 10:00 - 18:00</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0">
                  <Icon name="Mail" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Email</h3>
                  <p className="text-muted-foreground">info@fashion.ru</p>
                  <p className="text-muted-foreground">support@fashion.ru</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-4">Мы в социальных сетях</h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                >
                  <Icon name="Instagram" size={24} />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                >
                  <Icon name="Facebook" size={24} />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                >
                  <Icon name="Twitter" size={24} />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                >
                  <Icon name="MessageCircle" size={24} />
                </a>
              </div>
            </Card>
          </div>

          <div>
            <Card className="p-6 lg:p-8">
              <h2 className="text-3xl font-bold mb-6">Напишите нам</h2>
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-green-500 text-white flex items-center justify-center mx-auto mb-4">
                    <Icon name="Check" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Сообщение отправлено!</h3>
                  <p className="text-muted-foreground">
                    Мы свяжемся с вами в ближайшее время
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Имя *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Телефон</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Сообщение *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Отправить сообщение
                    <Icon name="Send" size={20} className="ml-2" />
                  </Button>
                </form>
              )}
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
