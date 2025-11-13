import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useNavigate } from "react-router-dom";

const CardsPage = () => {
  const navigate = useNavigate();

  const cards = [
    {
      name: "Тинькофф Платинум",
      cashback: "До 30%",
      grace: "120 дней",
      limit: "До 700 000 ₽",
      features: ["Кэшбэк баллами", "Бесплатное обслуживание", "Снятие без комиссии"],
      image: "https://cdn.poehali.dev/files/952e28ea-0eff-4877-928b-835d1aa6bc2e.jpg"
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
      image: ""
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Button variant="ghost" onClick={() => navigate(-1)}>
              <Icon name="ArrowLeft" className="mr-2" size={20} />
              Назад
            </Button>
            <h1 className="text-xl font-bold">Кредитные карты</h1>
            <div className="w-24"></div>
          </div>
        </div>
      </header>

      <section className="py-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 via-background to-background" />
        <div className="container mx-auto max-w-4xl relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Icon name="CreditCard" size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary">Кредитные карты</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Лучшие кредитные карты 2024
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8">
            Выгодные условия, высокий кэшбэк и длительный льготный период
          </p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cards.map((card, index) => (
              <Card key={index} className="hover:border-primary/50 transition-colors">
                {card.image && (
                  <div className="w-full">
                    <img src={card.image} alt={card.name} className="w-full h-auto rounded-t-lg" />
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{card.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
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
                  
                  <div className="border-t border-border pt-4 space-y-2">
                    {card.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <Icon name="CheckCircle2" size={16} className="text-primary" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button className="w-full">Оформить карту</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CardsPage;