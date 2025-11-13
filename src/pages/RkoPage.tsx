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
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-12 text-center">Лучшие банки для открытия РКО</h2>
          
          <div className="grid gap-6">
            {[
              { title: "Расчётный счёт", desc: "Для ведения безналичных расчётов" },
              { title: "Интернет-банк", desc: "Управление счётом 24/7 онлайн" },
              { title: "Эквайринг", desc: "Приём платежей по картам" },
              { title: "Бухгалтерия", desc: "Интеграция с 1С и другими системами" },
              { title: "Зарплатный проект", desc: "Выплаты сотрудникам" },
              { title: "Кредитование", desc: "Кредиты для бизнеса" }
            ].map((item, index) => (
              <Card key={index} className="hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Icon name="CheckCircle2" size={24} className="text-primary" />
                    </div>
                    <div>
                      <CardTitle className="mb-2">{item.title}</CardTitle>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" className="px-12">
              Открыть расчётный счёт
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RkoPage;