import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const CardsPage = () => {
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

  const cards = [
    {
      name: "Тинькофф Платинум",
      cashback: "До 30%",
      grace: "120 дней",
      limit: "До 700 000 ₽",
      features: ["Кэшбэк баллами", "Бесплатное обслуживание", "Снятие без комиссии"],
      image: "https://cdn.poehali.dev/files/952e28ea-0eff-4877-928b-835d1aa6bc2e.jpg",
      link: "https://clck.ru/3QwXgi"
    },
    {
      name: "Альфа-Банк 100 дней",
      cashback: "До 10%",
      grace: "100 дней",
      limit: "До 500 000 ₽",
      features: ["Кэшбэк рублями", "Доставка за 1 день", "Льготный период"],
      image: "https://cdn.poehali.dev/files/e179cae9-7ab6-4797-a936-c611576e8754.png"
    },
    {
      name: "Сбер Кредитная",
      cashback: "До 20%",
      grace: "120 дней",
      limit: "До 600 000 ₽",
      features: ["Бонусы СберСпасибо", "Без годовой платы", "Защита покупок"],
      image: "https://cdn.poehali.dev/files/7c00afb4-418c-480f-b56e-b9b408bf368a.jpg",
      link: ""
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="container mx-auto px-4 md:px-6 py-3 md:py-4">
          <div className="flex items-center justify-between">
            <Button variant="ghost" size="sm" onClick={() => navigate(-1)}>
              <Icon name="ArrowLeft" className="mr-1 md:mr-2" size={18} />
              <span className="text-sm md:text-base">Назад</span>
            </Button>
            <h1 className="text-base md:text-xl font-bold">Кредитные карты</h1>
            <div className="w-16 md:w-24"></div>
          </div>
        </div>
      </header>

      <section className="py-12 md:py-16 px-4 md:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 via-background to-background" />
        <div className="container mx-auto max-w-4xl relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4 md:mb-6">
            <Icon name="CreditCard" size={16} className="text-primary" />
            <span className="text-xs md:text-sm font-medium text-primary">Кредитные карты</span>
          </div>
          
          <h1 className="text-3xl md:text-6xl font-bold mb-4 md:mb-6 px-4">Лучшие кредитные карты 2025</h1>
          
          <p className="text-base md:text-xl text-muted-foreground mb-6 md:mb-8 px-4">
            Выгодные условия, высокий кэшбэк и длительный льготный период
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {cards.map((card, index) => (
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
              <Card className="hover:border-primary/50 transition-colors h-full flex flex-col">
                {card.image && (
                  <div className="w-full">
                    <img src={card.image} alt={card.name} className="w-full h-48 object-cover rounded-t-lg" />
                  </div>
                )}
                <CardHeader className="pb-3 md:pb-6">
                  <CardTitle className="text-xl md:text-2xl">{card.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 md:space-y-4 flex flex-col flex-grow">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Кэшбэк:</span>
                      <span className="font-semibold text-primary">{card.cashback}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Льготный период:</span>
                      <span className="font-semibold">{card.grace}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Лимит:</span>
                      <span className="font-semibold">{card.limit}</span>
                    </div>
                  </div>
                  
                  <div className="border-t border-border pt-4 space-y-2 flex-grow">
                    {card.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <Icon name="CheckCircle2" size={16} className="text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    className="w-full mt-auto"
                    onClick={() => {
                      if (card.link && card.link !== "") {
                        window.open(card.link, '_blank');
                      } else if (card.link !== "") {
                        window.open('https://clck.ru/3QvqWS', '_blank');
                      }
                    }}
                  >
                    Оформить карту
                  </Button>
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

export default CardsPage;