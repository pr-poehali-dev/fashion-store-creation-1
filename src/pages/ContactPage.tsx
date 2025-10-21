import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { toast } from 'sonner';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success('Сообщение отправлено! Мы свяжемся с вами в ближайшее время.');
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', message: '' });
      setSubmitted(false);
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold font-display mb-4">
              Свяжитесь с нами
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Есть вопросы? Мы всегда рады помочь. Напишите нам, и мы ответим в ближайшее время.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="border border-border rounded-lg p-6 bg-card flex items-start gap-4">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Icon name="Phone" className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold font-display mb-2">Телефон</h3>
                <p className="text-muted-foreground mb-1">+7 (999) 123-45-67</p>
                <p className="text-sm text-muted-foreground">Пн-Вс: 10:00 - 22:00</p>
              </div>
            </div>

            <div className="border border-border rounded-lg p-6 bg-card flex items-start gap-4">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Icon name="Mail" className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold font-display mb-2">Email</h3>
                <p className="text-muted-foreground mb-1">info@noir.shop</p>
                <p className="text-sm text-muted-foreground">Ответим в течение 24 часов</p>
              </div>
            </div>

            <div className="border border-border rounded-lg p-6 bg-card flex items-start gap-4">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Icon name="MapPin" className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold font-display mb-2">Адрес</h3>
                <p className="text-muted-foreground mb-1">Москва, ул. Примерная, 123</p>
                <p className="text-sm text-muted-foreground">Шоурум работает по записи</p>
              </div>
            </div>

            <div className="border border-border rounded-lg p-6 bg-card flex items-start gap-4">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Icon name="MessageCircle" className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold font-display mb-2">Социальные сети</h3>
                <p className="text-muted-foreground mb-1">@noir.shop</p>
                <p className="text-sm text-muted-foreground">Instagram, Facebook, Telegram</p>
              </div>
            </div>
          </div>

          <div className="border border-border rounded-lg p-8 bg-card">
            <h2 className="text-2xl font-bold font-display mb-6">Форма обратной связи</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Имя <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Ваше имя"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Телефон <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="+7 (999) 123-45-67"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Email <span className="text-destructive">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="example@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Сообщение <span className="text-destructive">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Расскажите, чем мы можем помочь..."
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full md:w-auto px-8"
                disabled={submitted}
              >
                {submitted ? (
                  <>
                    <Icon name="Check" className="mr-2 h-5 w-5" />
                    Отправлено
                  </>
                ) : (
                  <>
                    <Icon name="Send" className="mr-2 h-5 w-5" />
                    Отправить сообщение
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
