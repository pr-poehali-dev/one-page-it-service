import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Icon from "@/components/ui/icon";

const Index = () => {
  const navigate = useNavigate();
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleCards((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.1 }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const products = [
    {
      id: 1,
      category: "МФО",
      title: "Digcashe",
      description: "Быстрые займы на выгодных условиях. Одобрение за 5 минут.",
      icon: "Wallet",
      features: ["До 100 000 ₽", "Без справок", "На карту моментально"],
      gradient: "from-red-600/20 to-red-700/20",
      link: "https://digcashe.su/"
    },
    {
      id: 2,
      category: "Кредитные карты",
      title: "Лучшие кредитные карты",
      description: "Подборка выгодных предложений от ведущих банков России.",
      icon: "CreditCard",
      features: ["0% на 100 дней", "Кэшбэк до 30%", "Без годового обслуживания"],
      gradient: "from-red-500/20 to-red-600/20",
      link: "/cards"
    },
    {
      id: 3,
      category: "РКО",
      title: "Расчетно-кассовое обслуживание",
      description: "Открытие счета для бизнеса с удобным онлайн-банкингом.",
      icon: "Building2",
      features: ["Открытие за 1 день", "Низкие тарифы", "Бесплатные переводы"],
      gradient: "from-red-700/20 to-red-800/20",
      link: "/rko"
    },
    {
      id: 4,
      category: "ИП",
      title: "Регистрация ИП",
      description: "Помощь в открытии и ведении индивидуального предпринимательства.",
      icon: "FileText",
      features: ["Под ключ", "Онлайн консультация", "Помощь бухгалтера"],
      gradient: "from-red-800/20 to-red-900/20",
      link: "/ip"
    }
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Decorative Icons */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.02] z-0">
        <Icon name="DollarSign" size={120} className="absolute top-20 left-10 text-primary rotate-12" />
        <Icon name="TrendingUp" size={100} className="absolute top-40 right-20 text-primary -rotate-12" />
        <Icon name="Wallet" size={90} className="absolute bottom-60 left-1/4 text-primary rotate-45" />
        <Icon name="CreditCard" size={110} className="absolute top-1/3 right-1/3 text-primary -rotate-6" />
        <Icon name="PiggyBank" size={95} className="absolute bottom-40 right-20 text-primary rotate-12" />
        <Icon name="CircleDollarSign" size={85} className="absolute top-2/3 left-16 text-primary -rotate-12" />
        <Icon name="Coins" size={75} className="absolute bottom-20 left-1/2 text-primary rotate-6" />
        <Icon name="Landmark" size={105} className="absolute top-1/2 right-12 text-primary rotate-12" />
      </div>
      
      {/* Header with Logo */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center text-2xl font-bold text-primary-foreground">
              F
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <Button variant="ghost" onClick={() => scrollToSection('products')}>Продукты</Button>
              <Button onClick={() => scrollToSection('contact')}>Контакты</Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-6 md:py-32 mt-20 pb-32">
        <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 via-background to-background" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full blur-[150px] bg-red-700/30" />
        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}} />
        <div className="absolute top-20 right-1/4 w-[300px] h-[300px] bg-yellow-500/5 rounded-full blur-2xl" />
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Icon name="TrendingUp" size={16} className="text-primary" />
              <span className="text-sm font-medium text-primary">Финансовые решения</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-red-500 via-orange-400 to-red-600 bg-clip-text text-transparent animate-gradient">ФиНавигатор</h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Подбираем лучшие финансовые продукты для бизнеса и личных целей
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <Button size="lg" className="text-lg px-8 py-6 shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all hover:scale-105" onClick={() => scrollToSection('products')}>
                Выбрать продукт
                <Icon name="ArrowDown" className="ml-2" size={20} />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 hover:bg-primary/10 hover:scale-105 transition-all" onClick={() => scrollToSection('contact')}>
                Консультация
                <Icon name="MessageCircle" className="ml-2" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section id="products" className="py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-red-700/5 via-background to-background -z-10" />
        <div className="absolute top-40 right-10 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-[400px] h-[400px] bg-orange-500/5 rounded-full blur-3xl" />
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Наши продукты
            </h2>
            <p className="text-xl text-muted-foreground">
              Полный спектр финансовых услуг в одном месте
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {products.map((product, index) => (
              <div
                key={product.id}
                ref={(el) => (cardRefs.current[index] = el)}
                data-index={index}
                className={`transform transition-all duration-700 ${
                  visibleCards.includes(index)
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <Card 
                  className="group hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 border-purple-500/30 bg-gradient-to-br from-purple-950/50 to-violet-950/50 backdrop-blur-sm hover:border-purple-400/50 overflow-hidden relative h-full"
                >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-violet-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="absolute -right-8 -bottom-8 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                  <Icon name={product.icon} size={200} className="text-purple-400" />
                </div>
                
                <div className="absolute -left-6 -top-6 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-300">
                  <Icon name={product.icon} size={120} className="text-purple-400 rotate-12" />
                </div>
                
                <div className="absolute right-16 top-8 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity duration-300">
                  <Icon name={product.icon} size={80} className="text-purple-400 -rotate-12" />
                </div>
                
                <CardHeader className="relative z-10">
                  <div className="flex items-start justify-between mb-2">
                    <div className="p-3 rounded-xl bg-purple-500/20 border border-purple-400/30 group-hover:bg-purple-500/30 transition-colors">
                      <Icon name={product.icon} size={28} className="text-purple-400" />
                    </div>
                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-300">
                      {product.category}
                    </span>
                  </div>
                  
                  <CardTitle className="text-2xl mb-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">{product.title}</CardTitle>
                  <CardDescription className="text-base">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="relative z-10 space-y-4">
                  <div className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <Icon name="CheckCircle2" size={18} className="text-purple-400 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    className="w-full bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 group-hover:shadow-md group-hover:shadow-purple-500/30 transition-all border-0"
                    onClick={() => {
                      if (product.link.startsWith('http')) {
                        window.open(product.link, '_blank');
                      } else {
                        navigate(product.link);
                      }
                    }}
                  >
                    Подробно
                  </Button>
                </CardContent>
              </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-background to-card/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-500 via-orange-400 to-red-600 bg-clip-text text-transparent">
              Почему выбирают нас
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "Shield",
                title: "Безопасность",
                description: "Работаем только с проверенными партнерами"
              },
              {
                icon: "Zap",
                title: "Быстро",
                description: "Оформление и одобрение за несколько минут"
              },
              {
                icon: "Users",
                title: "Поддержка",
                description: "Консультируем на всех этапах сотрудничества"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="text-center space-y-4 p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-colors animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex p-4 rounded-2xl bg-primary/10 border border-primary/20">
                  <Icon name={feature.icon} size={32} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-red-400 via-orange-400 to-red-500 bg-clip-text text-transparent">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-red-800/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        
        <div className="container mx-auto max-w-4xl relative z-10 text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold animate-fade-in bg-gradient-to-r from-red-500 via-orange-400 to-red-600 bg-clip-text text-transparent">
            Готовы начать?
          </h2>
          <p className="text-xl text-muted-foreground animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Получите бесплатную консультацию и подберите идеальный финансовый продукт
          </p>
          
          <div className="flex flex-col items-center gap-4 pt-4">
            <Button 
              size="lg" 
              className="animate-fade-in text-lg px-12 py-6 shadow-xl shadow-primary/20" 
              style={{ animationDelay: '0.2s' }}
              onClick={() => setIsContactOpen(true)}
            >
              Связаться с нами
              <Icon name="Phone" className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Dialog */}
      <Dialog open={isContactOpen} onOpenChange={setIsContactOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl">Свяжитесь с нами</DialogTitle>
            <DialogDescription>
              Выберите удобный способ связи
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <a
              href="tel:+79332304495"
              className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all group"
            >
              <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Icon name="Phone" size={24} className="text-primary" />
              </div>
              <div className="flex-1">
                <div className="font-semibold">Позвонить</div>
                <div className="text-sm text-muted-foreground">+7 (933) 230-44-95 c 8:00 до 22:00 по МСК</div>
              </div>
              <Icon name="ChevronRight" size={20} className="text-muted-foreground" />
            </a>
            
            <a
              href="https://vk.com/dinero228"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all group"
            >
              <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Icon name="MessageCircle" size={24} className="text-primary" />
              </div>
              <div className="flex-1">
                <div className="font-semibold">Написать ВКонтакте</div>
                <div className="text-sm text-muted-foreground">Онлайн c 8:00 до 22:00 по МСК</div>
              </div>
              <Icon name="ChevronRight" size={20} className="text-muted-foreground" />
            </a>
            
            <a
              href="https://t.me/helper1338"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all group"
            >
              <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Icon name="Send" size={24} className="text-primary" />
              </div>
              <div className="flex-1">
                <div className="font-semibold">Написать в Telegram</div>
                <div className="text-sm text-muted-foreground">Онлайн c 8:00 до 22:00 по МСК</div>
              </div>
              <Icon name="ChevronRight" size={20} className="text-muted-foreground" />
            </a>
          </div>
        </DialogContent>
      </Dialog>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border/50 bg-card/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">ФиНавигатор</h3>
              <p className="text-sm text-muted-foreground">
                Ваш надежный помощник в мире финансов
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Продукты</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>МФО</li>
                <li>Кредитные карты</li>
                <li>РКО для бизнеса</li>
                <li>Регистрация ИП</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <span>businessilya228@mail.ru</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (933) 230 44-95</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">© 2025 ФиНавигатор. Все права защищены</div>
        </div>
      </footer>
    </div>
  );
};

export default Index;