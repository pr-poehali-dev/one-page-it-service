import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Сообщение отправлено!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              IT.DEV
            </div>
            <div className="hidden md:flex gap-8">
              <button onClick={() => scrollToSection('hero')} className="hover:text-primary transition-colors">
                Главная
              </button>
              <button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">
                Описание
              </button>
              <button onClick={() => scrollToSection('services')} className="hover:text-primary transition-colors">
                Услуги
              </button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-primary transition-colors">
                Связаться
              </button>
            </div>
          </div>
        </div>
      </nav>

      <section id="hero" className="min-h-screen flex items-center justify-center relative pt-20">
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Разработка IT-решений
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Создаём современные веб-сайты, мобильные приложения и веб-программы, которые решают бизнес-задачи
          </p>
          <Button 
            size="lg" 
            className="animate-fade-in text-lg px-8 py-6" 
            style={{ animationDelay: '0.4s' }}
            onClick={() => scrollToSection('contact')}
          >
            Обсудить проект
            <Icon name="ArrowRight" className="ml-2" size={20} />
          </Button>
        </div>
      </section>

      <section id="about" className="py-32 relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 animate-fade-in">
              О нас
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Мы — команда профессиональных разработчиков с многолетним опытом создания IT-решений для бизнеса. 
              Наша миссия — помогать компаниям расти через современные технологии.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Используем передовые инструменты разработки, современные фреймворки и проверенные методологии, 
              чтобы создавать продукты, которые работают безупречно.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="py-32 relative">
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-in">
            Наши услуги
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary transition-all duration-300 group animate-fade-in">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <Icon name="Globe" size={32} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Программирование сайтов</h3>
              <p className="text-muted-foreground leading-relaxed">
                Разрабатываем корпоративные сайты, интернет-магазины и веб-порталы с современным дизайном 
                и высокой производительностью. Адаптивная верстка под все устройства.
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8 hover:border-secondary transition-all duration-300 group animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
                <Icon name="Smartphone" size={32} className="text-secondary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Мобильные приложения</h3>
              <p className="text-muted-foreground leading-relaxed">
                Создаём нативные и кроссплатформенные приложения для iOS и Android. 
                Интуитивный интерфейс, быстрая работа и интеграция с любыми сервисами.
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8 hover:border-accent transition-all duration-300 group animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <Icon name="Code" size={32} className="text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Веб-программы</h3>
              <p className="text-muted-foreground leading-relaxed">
                Разработка сложных веб-приложений и CRM-систем для автоматизации бизнес-процессов. 
                Масштабируемость, безопасность и удобство использования.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-32 relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 animate-fade-in">
              Свяжитесь с нами
            </h2>
            <p className="text-center text-muted-foreground mb-12 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Расскажите о вашем проекте, и мы предложим оптимальное решение
            </p>
            <form onSubmit={handleSubmit} className="space-y-6 bg-card border border-border rounded-2xl p-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Ваше имя
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Иван Иванов"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-background"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-background"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Сообщение
                </label>
                <Textarea
                  id="message"
                  placeholder="Расскажите о вашем проекте..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="bg-background resize-none"
                />
              </div>
              <Button type="submit" size="lg" className="w-full">
                Отправить сообщение
                <Icon name="Send" className="ml-2" size={18} />
              </Button>
            </form>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-border relative z-10">
        <div className="container mx-auto px-6 text-center text-muted-foreground">
          <p>&copy; 2024 IT.DEV. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
