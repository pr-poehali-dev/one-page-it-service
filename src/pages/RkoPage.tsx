import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useNavigate } from "react-router-dom";

const RkoPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Button variant="ghost" onClick={() => navigate(-1)}>
              <Icon name="ArrowLeft" className="mr-2" size={20} />
              Назад
            </Button>
            <h1 className="text-xl font-bold">РКО</h1>
            <div className="w-24"></div>
          </div>
        </div>
      </header>

      <section className="py-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 via-background to-background" />
        <div className="container mx-auto max-w-4xl relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Icon name="Building2" size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary">Для бизнеса</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Расчетно-кассовое обслуживание
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8">
            Откройте счёт для бизнеса онлайн за 1 день
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mt-12">
            {[
              { icon: "Clock", title: "Быстро", desc: "Открытие от 3 до 5 дней" },
              { icon: "Percent", title: "Выгодно", desc: "Низкие тарифы" },
              { icon: "Shield", title: "Надёжно", desc: "Лицензированные банки" }
            ].map((item, index) => (
              <Card key={index} className="border-border/50">
                <CardContent className="pt-6 text-center space-y-3">
                  <div className="inline-flex p-3 rounded-xl bg-primary/10">
                    <Icon name={item.icon} size={32} className="text-primary" />
                  </div>
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center">Лучшие банки для открытия РКО</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { 
                name: "Альфа Бизнес",
                fee: "0 ₽/мес",
                opening: "1 день",
                features: ["Бесплатное обслуживание", "Интернет-банк", "Интеграция с 1С"],
                image: ""
              },
              { 
                name: "Газпром Бизнес",
                fee: "0 ₽/мес",
                opening: "1 день",
                features: ["Онлайн открытие", "Мобильное приложение", "Кэшбэк за переводы"],
                image: ""
              },
              { 
                name: "Точка Банк",
                fee: "0 ₽/мес",
                opening: "1 день",
                features: ["Для ИП и ООО", "Бесплатные переводы", "Поддержка 24/7"],
                image: ""
              }
            ].map((bank, index) => (
              <Card key={index} className="hover:border-primary/50 transition-colors">
                {bank.image && (
                  <div className="w-full">
                    <img src={bank.image} alt={bank.name} className="w-full h-auto rounded-t-lg" />
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{bank.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
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
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default RkoPage;