import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const MfoPage = () => {
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

  const offers = [
    {
      name: "Webbankir",
      amount: "3 000 - 30 000 ₽",
      rate: "От 0%",
      term: "5 - 30 дн.",
      features: ["Деньги на карту", "Одобрение: 79%", "Дней без %: 30"],
      image: "https://cdn.poehali.dev/projects/45b3c409-a171-49d8-9e53-0561cae7a268/files/c69a2055-d2bb-430c-9e57-c1290e14b970.jpg"
    },
    {
      name: "MoneyMan",
      amount: "1 500 - 30 000 ₽",
      rate: "От 0%",
      term: "5 - 33 дн.",
      features: ["Деньги на карту", "Одобрение: 72%", "Дней без %: 21"],
      image: "https://cdn.poehali.dev/files/595aac20-943e-479a-8906-ff32ce615da5.jpg"
    },
    {
      name: "Lime-zaim",
      amount: "2 000 - 100 000 ₽",
      rate: "От 0%",
      term: "10 - 365 дн.",
      features: ["Деньги на карту", "Одобрение: 73%", "Дней без %: 40"],
      image: "https://cdn.poehali.dev/files/7a5fd849-9eee-410a-bfb0-53e172c0fd42.png"
    },
    {
      name: "Займер",
      amount: "2 000 - 30 000 ₽",
      rate: "От 0%",
      term: "7 - 30 дн.",
      features: ["Деньги на карту", "Одобрение: 70%", "Дней без %: 30"],
      image: "https://cdn.poehali.dev/files/779fdcf4-f436-4483-9c28-a7fc21a21c53.png"
    },
    {
      name: "еКапуста",
      amount: "100 - 30 000 ₽",
      rate: "От 0%",
      term: "7 - 21 дн.",
      features: ["Деньги на карту", "Одобрение: 55%", "Дней без %: 31"],
      image: "https://cdn.poehali.dev/files/9909d2f8-c01e-4483-a072-a2bf6aa30ac3.jpg",
      link: "https://clck.ru/3QVFuL"
    },
    {
      name: "Max Credit",
      amount: "1 000 - 30 000 ₽",
      rate: "От 0%",
      term: "5 - 30 дн.",
      features: ["Первый бесплатно", "Одобрение: 75%", "Дней без %: 30"],
      image: "https://cdn.poehali.dev/files/ea853c5c-d811-45a0-9413-12f495734159.png"
    },
    {
      name: "Умные наличные",
      amount: "3 000 - 50 000 ₽",
      rate: "От 0%",
      term: "7 - 30 дн.",
      features: ["Первый бесплатно", "Одобрение: 70%", "Дней без %: 21"],
      image: "https://cdn.poehali.dev/files/placeholder-mfo.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="container mx-auto px-4 md:px-6 py-3 md:py-4">
          <div className="flex items-center justify-between">
            <Button variant="ghost" size="sm" onClick={() => navigate(-1)}>
              <Icon name="ArrowLeft" className="mr-1 md:mr-2" size={18} />
              <span className="text-sm md:text-base">Назад</span>
            </Button>
            <h1 className="text-lg md:text-xl font-bold">МФО</h1>
            <div className="w-16 md:w-24"></div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-12 md:py-16 px-4 md:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 via-background to-background" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto max-w-4xl relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Icon name="Wallet" size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary">Микрофинансовые организации</span>
          </div>
          
          <h1 className="text-3xl md:text-6xl font-bold mb-4 md:mb-6 px-4">
            Быстрые займы на выгодных условиях
          </h1>
          
          <p className="text-base md:text-xl text-muted-foreground mb-6 md:mb-8 px-4">
            Получите деньги на карту за 5 минут. Минимум документов, максимум удобства
          </p>
          
          <div className="grid grid-cols-3 gap-3 md:gap-6 max-w-3xl mx-auto px-4">
            <div className="p-4 md:p-6 rounded-xl bg-card/50 border border-border/50">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1 md:mb-2">5 мин</div>
              <div className="text-xs md:text-sm text-muted-foreground">Время одобрения</div>
            </div>
            <div className="p-4 md:p-6 rounded-xl bg-card/50 border border-border/50">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1 md:mb-2">0%</div>
              <div className="text-xs md:text-sm text-muted-foreground">Первый займ</div>
            </div>
            <div className="p-4 md:p-6 rounded-xl bg-card/50 border border-border/50">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1 md:mb-2">24/7</div>
              <div className="text-xs md:text-sm text-muted-foreground">Круглосуточно</div>
            </div>
          </div>
        </div>
      </section>

      {/* Offers */}
      <section className="py-12 md:py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center">Лучшие предложения</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {offers.map((offer, index) => (
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
              <Card className="relative border-2 border-green-500 hover:border-green-600 transition-colors h-full bg-white">
                {/* Номер карточки */}
                <div className="absolute top-3 left-3 w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-700">
                  {index + 1}
                </div>
                
                {/* Звёздочка */}
                <div className="absolute top-3 right-3">
                  <Icon name="Star" size={20} className="text-yellow-500 fill-yellow-500" />
                </div>

                <CardContent className="pt-10 pb-4 px-3 space-y-2.5">
                  {/* Логотип и название */}
                  {offer.image && (
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <div className="w-10 h-10 flex-shrink-0">
                        <img src={offer.image} alt={offer.name} className="w-full h-full object-contain" />
                      </div>
                      <h3 className="text-base font-bold uppercase tracking-wide">{offer.name}</h3>
                    </div>
                  )}
                  
                  {/* Синяя плашка */}
                  <div className="bg-blue-100 text-blue-900 text-center py-1.5 rounded-lg font-medium text-xs">
                    {offer.name === "Max Credit" || offer.name === "Умные наличные" ? "Деньги на карту" : "Первый бесплатно"}
                  </div>
                  
                  {/* Название компании */}
                  <h4 className="text-center font-bold text-base">{offer.name}</h4>
                  
                  {/* Характеристики */}
                  <div className="text-center space-y-0.5 text-xs">
                    <div><span className="text-gray-600">Одобрение:</span> <span className="font-semibold">{offer.features[1]?.replace('Одобрение: ', '')}</span></div>
                    <div><span className="text-gray-600">Сумма:</span> <span className="font-semibold">{offer.amount}</span></div>
                    <div><span className="text-gray-600">Срок:</span> <span className="font-semibold">{offer.term}</span></div>
                    <div><span className="text-gray-600">Дней без %:</span> <span className="font-semibold">{offer.features[2]?.replace('Дней без %: ', '')}</span></div>
                  </div>
                  
                  {/* Кнопка */}
                  <Button 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 text-sm"
                    onClick={() => {
                      if (offer.link) {
                        window.open(offer.link, '_blank');
                      }
                    }}
                  >
                    Получить
                  </Button>
                </CardContent>
              </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 px-6 bg-card/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center">Как получить займ</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Выберите сумму", desc: "Укажите нужную сумму и срок" },
              { step: "2", title: "Заполните анкету", desc: "Введите свои данные онлайн" },
              { step: "3", title: "Получите решение", desc: "Ответ в течение 5 минут" },
              { step: "4", title: "Деньги на карте", desc: "Перевод на вашу карту" }
            ].map((item, index) => (
              <div key={index} className="text-center space-y-3">
                <div className="w-16 h-16 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center text-2xl font-bold text-primary mx-auto">
                  {item.step}
                </div>
                <h3 className="font-bold text-lg">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MfoPage;