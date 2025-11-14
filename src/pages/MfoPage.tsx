import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useNavigate } from "react-router-dom";

const MfoPage = () => {
  const navigate = useNavigate();

  const offers = [
    {
      name: "Digcashe",
      amount: "До 75 000 ₽",
      rate: "От 0.1%",
      term: "До 30 дней",
      features: ["Первый займ под 0%", "Одобрение за 5 минут", "Без справок о доходах"],
      image: "https://cdn.poehali.dev/files/89150fd6-1dbb-403c-8768-ee2ac412c734.png"
    },
    {
      name: "Кеш UP",
      amount: "До 75 000 ₽",
      rate: "От 0.1%",
      term: "До 30 дней",
      features: ["Первый займ бесплатно", "Мгновенное одобрение", "Без скрытых комиссий"],
      image: "https://cdn.poehali.dev/files/83540891-27b0-4c6b-a6dd-88b6c95f16c2.png"
    },
    {
      name: "Credit7",
      amount: "До 30 000 ₽",
      rate: "От 0%",
      term: "До 30 дней",
      features: ["Первый займ под 0%", "Решение за 5 минут", "Без проверки КИ"],
      image: "https://cdn.poehali.dev/files/b5608183-b577-46c9-9f90-a99a4e14557e.png"
    },
    {
      name: "Moneyman",
      amount: "До 100 000 ₽",
      rate: "От 0%",
      term: "До 126 дней",
      features: ["Онлайн оформление", "На карту любого банка", "Лояльные условия"],
      image: "https://cdn.poehali.dev/files/595aac20-943e-479a-8906-ff32ce615da5.jpg"
    },
    {
      name: "Займер",
      amount: "До 30 000 ₽",
      rate: "От 0%",
      term: "До 30 дней",
      features: ["Без отказа", "Круглосуточно", "Моментальное одобрение"],
      image: "https://cdn.poehali.dev/files/779fdcf4-f436-4483-9c28-a7fc21a21c53.png"
    },
    {
      name: "Макс Кредит",
      amount: "До 30 000 ₽",
      rate: "От 0.8%",
      term: "До 30 дней",
      features: ["Быстрое одобрение", "На карту через 5 минут", "Без проверки кредитной истории"],
      image: "https://cdn.poehali.dev/files/16133f03-525a-4e29-b8f9-ad1507367e45.png"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Button variant="ghost" onClick={() => navigate(-1)}>
              <Icon name="ArrowLeft" className="mr-2" size={20} />
              Назад
            </Button>
            <h1 className="text-xl font-bold">МФО</h1>
            <div className="w-24"></div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 via-background to-background" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto max-w-4xl relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Icon name="Wallet" size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary">Микрофинансовые организации</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Быстрые займы на выгодных условиях
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8">
            Получите деньги на карту за 5 минут. Минимум документов, максимум удобства
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="p-6 rounded-xl bg-card/50 border border-border/50">
              <div className="text-3xl font-bold text-primary mb-2">5 мин</div>
              <div className="text-sm text-muted-foreground">Время одобрения</div>
            </div>
            <div className="p-6 rounded-xl bg-card/50 border border-border/50">
              <div className="text-3xl font-bold text-primary mb-2">0%</div>
              <div className="text-sm text-muted-foreground">Первый займ</div>
            </div>
            <div className="p-6 rounded-xl bg-card/50 border border-border/50">
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Круглосуточно</div>
            </div>
          </div>
        </div>
      </section>

      {/* Offers */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center">Лучшие предложения</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {offers.map((offer, index) => (
              <Card key={index} className="hover:border-primary/50 transition-colors">
                {offer.image && (
                  <div className="w-full">
                    <img src={offer.image} alt={offer.name} className="w-full h-auto rounded-t-lg" />
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{offer.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Сумма:</span>
                      <span className="font-semibold">{offer.amount}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Ставка:</span>
                      <span className="font-semibold">{offer.rate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Срок:</span>
                      <span className="font-semibold">{offer.term}</span>
                    </div>
                  </div>
                  
                  <div className="border-t border-border pt-4 space-y-2">
                    {offer.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <Icon name="CheckCircle2" size={16} className="text-primary" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    className="w-full"
                    onClick={() => {
                      if (offer.link) {
                        window.open(offer.link, '_blank');
                      }
                    }}
                  >
                    Получить займ
                  </Button>
                </CardContent>
              </Card>
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