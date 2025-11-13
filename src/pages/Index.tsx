import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const products = [
    {
      id: 1,
      category: "МФО",
      title: "Микрофинансовые организации",
      description: "Быстрые займы на выгодных условиях. Одобрение за 5 минут.",
      icon: "Wallet",
      features: ["До 100 000 ₽", "Без справок", "На карту моментально"],
      gradient: "from-blue-500/20 to-blue-600/20"
    },
    {
      id: 2,
      category: "Кредитные карты",
      title: "Лучшие кредитные карты",
      description: "Подборка выгодных предложений от ведущих банков России.",
      icon: "CreditCard",
      features: ["0% на 100 дней", "Кэшбэк до 30%", "Без годового обслуживания"],
      gradient: "from-cyan-500/20 to-blue-500/20"
    },
    {
      id: 3,
      category: "РКО",
      title: "Расчетно-кассовое обслуживание",
      description: "Открытие счета для бизнеса с удобным онлайн-банкингом.",
      icon: "Building2",
      features: ["Открытие за 1 день", "Низкие тарифы", "Бесплатные переводы"],
      gradient: "from-indigo-500/20 to-blue-600/20"
    },
    {
      id: 4,
      category: "ИП",
      title: "Регистрация ИП",
      description: "Помощь в открытии и ведении индивидуального предпринимательства.",
      icon: "FileText",
      features: ["Под ключ", "Онлайн консультация", "Помощь бухгалтера"],
      gradient: "from-blue-600/20 to-indigo-500/20"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-6 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-background to-background" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Icon name="TrendingUp" size={16} className="text-primary" />
              <span className="text-sm font-medium text-primary">Финансовые решения</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Ваш финансовый навигатор
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Подбираем лучшие финансовые продукты для бизнеса и личных целей
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <Button size="lg" className="text-lg px-8 py-6 shadow-lg shadow-primary/20" onClick={() => scrollToSection('products')}>
                Выбрать продукт
                <Icon name="ArrowRight" className="ml-2" size={20} />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6" onClick={() => window.open('https://vk.com/dinero228', '_blank')}>
                Консультация
                <Icon name="MessageCircle" className="ml-2" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section id="products" className="py-20 px-6 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Наши продукты
            </h2>
            <p className="text-xl text-muted-foreground">
              Полный спектр финансовых услуг в одном месте
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {products.map((product, index) => (
              <Card 
                key={product.id}
                className="group hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 animate-fade-in overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                <CardHeader className="relative z-10">
                  <div className="flex items-start justify-between mb-2">
                    <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                      <Icon name={product.icon} size={28} className="text-primary" />
                    </div>
                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-secondary/50 text-secondary-foreground">
                      {product.category}
                    </span>
                  </div>
                  
                  <CardTitle className="text-2xl mb-2">{product.title}</CardTitle>
                  <CardDescription className="text-base">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="relative z-10 space-y-4">
                  <div className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <Icon name="CheckCircle2" size={18} className="text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button className="w-full group-hover:shadow-md group-hover:shadow-primary/20 transition-shadow">
                    Подробнее
                    <Icon name="ArrowRight" className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-background to-card/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
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
                <h3 className="text-2xl font-bold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-600/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        
        <div className="container mx-auto max-w-4xl relative z-10 text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold animate-fade-in">
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
            >
              Связаться с нами
              <Icon name="Phone" className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border/50 bg-card/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <Icon name="Landmark" size={24} className="text-primary" />
                ФинНавигатор
              </h3>
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
                  <span>info@finnavigator.ru</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (800) 555-35-35</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
            © 2024 ФинНавигатор. Все права защищены
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;