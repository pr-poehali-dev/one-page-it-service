import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const RkoPage = () => {
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

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="container mx-auto px-4 md:px-6 py-3 md:py-4">
          <div className="flex items-center justify-between">
            <Button variant="ghost" size="sm" onClick={() => navigate(-1)}>
              <Icon name="ArrowLeft" className="mr-1 md:mr-2" size={18} />
              <span className="text-sm md:text-base">Назад</span>
            </Button>
            <h1 className="text-lg md:text-xl font-bold">РКО</h1>
            <div className="w-16 md:w-24"></div>
          </div>
        </div>
      </header>

      <section className="py-12 md:py-16 px-4 md:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 via-background to-background" />
        <div className="container mx-auto max-w-4xl relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4 md:mb-6">
            <Icon name="Building2" size={16} className="text-primary" />
            <span className="text-xs md:text-sm font-medium text-primary">Для бизнеса</span>
          </div>
          
          <h1 className="text-3xl md:text-6xl font-bold mb-4 md:mb-6 px-4">
            Расчетно-кассовое обслуживание
          </h1>
          
          <p className="text-base md:text-xl text-muted-foreground mb-6 md:mb-8 px-4">
            Откройте счёт для бизнеса онлайн за 1 день
          </p>

          <div className="grid grid-cols-3 gap-3 md:gap-6 max-w-3xl mx-auto mt-8 md:mt-12 px-4">
            {[
              { icon: "Clock", title: "Быстро", desc: "Открытие от 3 до 5 дней" },
              { icon: "Percent", title: "Выгодно", desc: "Низкие тарифы" },
              { icon: "Shield", title: "Надёжно", desc: "Лицензированные банки" }
            ].map((item, index) => (
              <Card key={index} className="border-border/50">
                <CardContent className="pt-4 md:pt-6 text-center space-y-2 md:space-y-3">
                  <div className="inline-flex p-2 md:p-3 rounded-xl bg-primary/10">
                    <Icon name={item.icon} size={24} className="text-primary md:w-8 md:h-8" />
                  </div>
                  <h3 className="font-bold text-sm md:text-lg">{item.title}</h3>
                  <p className="text-xs md:text-sm text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center">Лучшие банки для открытия РКО</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              { 
                name: "Альфа Бизнес",
                fee: "0 ₽/мес",
                opening: "1 день",
                features: ["Для ИП и ООО", "Интернет-банк", "Интеграция с 1С"],
                image: "https://cdn.poehali.dev/files/52a2a5ff-b7a6-458d-802d-6acf2f2f3e03.png"
              },
              { 
                name: "Газпром Бизнес",
                fee: "0 ₽/мес",
                opening: "1 день",
                features: ["Для ИП и ООО", "Мобильное приложение", "Кэшбэк за переводы"],
                image: "https://cdn.poehali.dev/files/a503082d-e162-4a1d-bf04-4e7e20e17476.jpg"
              },
              { 
                name: "Точка Банк",
                fee: "0 ₽/мес",
                opening: "1 день",
                features: ["Для ИП и ООО", "Бесплатные переводы", "Поддержка 24/7"],
                image: "https://cdn.poehali.dev/files/092dce40-60e9-4c0e-bb07-665abb0c5634.png"
              }
            ].map((bank, index) => (
              <div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                data-index={index}
                className={`transform transition-all duration-700 ${
                  visibleCards.includes(index)
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
              <Card className="hover:border-primary/50 transition-colors flex flex-col h-full">
                {bank.image && (
                  <div className="w-full h-40 md:h-48 overflow-hidden">
                    <img src={bank.image} alt={bank.name} className="w-full h-full object-cover rounded-t-lg" />
                  </div>
                )}
                <CardHeader className="pb-3 md:pb-6">
                  <CardTitle className="text-xl md:text-2xl">{bank.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 md:space-y-4 flex-1">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Обслуживание:</span>
                      <span className="font-semibold text-primary">{bank.fee}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Открытие:</span>
                      <span className="font-semibold">{bank.opening}</span>
                    </div>
                  </div>
                  
                  <div className="border-t border-border pt-4 space-y-2">
                    {bank.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <Icon name="CheckCircle2" size={16} className="text-primary" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button className="w-full">Открыть счёт</Button>
                </CardContent>
              </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default RkoPage;