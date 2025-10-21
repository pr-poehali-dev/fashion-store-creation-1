import { useState } from 'react';
import Icon from '@/components/ui/icon';

const ContactsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
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
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Контакты</h1>
        <p className="text-xl text-muted-foreground mb-12 text-center max-w-2xl mx-auto">
          Свяжитесь с нами любым удобным способом. Мы всегда рады помочь!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-2xl font-bold mb-8">Наши контакты</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" size={24} className="text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Адрес</h3>
                  <p className="text-muted-foreground">
                    Москва, ул. Примерная, д. 1<br />
                    Время работы: Пн-Пт 10:00-20:00, Сб-Вс 11:00-19:00
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" size={24} className="text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Телефон</h3>
                  <p className="text-muted-foreground">
                    <a href="tel:+79991234567" className="hover:text-primary transition-colors">
                      +7 (999) 123-45-67
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Mail" size={24} className="text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Email</h3>
                  <p className="text-muted-foreground">
                    <a href="mailto:info@fashion.ru" className="hover:text-primary transition-colors">
                      info@fashion.ru
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="MessageCircle" size={24} className="text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Социальные сети</h3>
                  <div className="flex gap-3 mt-2">
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      <Icon name="Instagram" size={28} />
                    </a>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      <Icon name="Facebook" size={28} />
                    </a>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      <Icon name="Twitter" size={28} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Обратная связь</h2>
            
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Check" size={32} className="text-white" />
                </div>
                <p className="text-lg font-semibold mb-2">Сообщение отправлено!</p>
                <p className="text-muted-foreground text-center">
                  Мы свяжемся с вами в ближайшее время
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
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
                    className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Ваше имя"
                  />
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
                    className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="example@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Тема <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Тема обращения"
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
                    rows={5}
                    className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Ваше сообщение"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-3 rounded-md font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                >
                  Отправить сообщение
                  <Icon name="Send" size={18} />
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="bg-muted rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Часто задаваемые вопросы</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div>
              <h3 className="font-semibold mb-2">Как я могу отследить свой заказ?</h3>
              <p className="text-muted-foreground text-sm">
                После оформления заказа вы получите трек-номер на email для отслеживания доставки.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Возможен ли возврат товара?</h3>
              <p className="text-muted-foreground text-sm">
                Да, вы можете вернуть товар в течение 30 дней с момента покупки.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Есть ли у вас физический магазин?</h3>
              <p className="text-muted-foreground text-sm">
                Да, наш шоурум находится по адресу: Москва, ул. Примерная, д. 1.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Какие способы оплаты вы принимаете?</h3>
              <p className="text-muted-foreground text-sm">
                Мы принимаем оплату картой онлайн и наличными при получении.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactsPage;
