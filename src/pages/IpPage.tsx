import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useNavigate } from "react-router-dom";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";

const IpPage = () => {
  const navigate = useNavigate();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const banks = [
    {
      name: "Альфа-Банк",
      logo: "https://cdn.poehali.dev/files/8d87d572-bb72-452c-ba1c-351780259352.png",
      description: "Регистрация ИП + РКО бесплатно"
    },
    {
      name: "Т-Банк",
      logo: "https://cdn.poehali.dev/files/bbaa498e-4f4e-41fc-85c2-1600821b2406.png",
      description: "Регистрация ИП + РКО бесплатно"
    },
    {
      name: "Точка Банк",
      logo: "https://cdn.poehali.dev/files/5663aad1-fbed-467d-a957-937c1f3c002b.png",
      description: "Регистрация ИП + РКО бесплатно"
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
            <h1 className="text-base md:text-xl font-bold">Регистрация ИП</h1>
            <div className="w-16 md:w-24"></div>
          </div>
        </div>
      </header>

      <section className="py-12 md:py-16 px-4 md:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 via-background to-background" />
        <div className="container mx-auto max-w-4xl relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4 md:mb-6">
            <Icon name="FileText" size={16} className="text-primary" />
            <span className="text-xs md:text-sm font-medium text-primary">Для будущих предпринимателей</span>
          </div>
          
          <h1 className="text-3xl md:text-6xl font-bold mb-4 md:mb-6 px-4">
            Регистрация ИП под ключ
          </h1>
          
          <p className="text-base md:text-xl text-muted-foreground mb-6 md:mb-8 px-4">
            Поможем открыть ИП быстро и без лишних хлопот
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center">Наши услуги</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-12">
            {[
              {
                title: "Базовая регистрация",
                price: "Бесплатно",
                features: [
                  "Подготовка документов",
                  "Подача в налоговую",
                  "Получение свидетельства",
                  "Онлайн консультация"
                ]
              },
              {
                title: "Под ключ",
                price: "От 5 000 ₽",
                features: [
                  "Всё из базового пакета",
                  "Открытие расчётного счёта",
                  "Печать и документы",
                  "Настройка бухгалтерии"
                ]
              }
            ].map((tariff, index) => (
              <Card key={index} className="hover:border-primary/50 transition-colors">
                <CardHeader className="pb-3 md:pb-6">
                  <CardTitle className="text-xl md:text-2xl mb-2">{tariff.title}</CardTitle>
                  <div className="text-2xl md:text-3xl font-bold text-primary">{tariff.price}</div>
                </CardHeader>
                <CardContent className="space-y-3 md:space-y-4">
                  <div className="space-y-2 md:space-y-3">
                    {tariff.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 md:gap-3">
                        <Icon name="CheckCircle2" size={18} className="text-primary flex-shrink-0 md:w-5 md:h-5" />
                        <span className="text-sm md:text-base">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full text-sm md:text-base" onClick={() => setIsDialogOpen(true)}>Выбрать банк</Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-card/50">
            <CardHeader className="pb-4 md:pb-6">
              <CardTitle className="text-2xl md:text-3xl text-center mb-4 md:mb-8">Как это работает</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                {[
                  { step: "1", title: "Заявка", desc: "Оставьте заявку онлайн" },
                  { step: "2", title: "Документы", desc: "Подготовим за вас" },
                  { step: "3", title: "Подача", desc: "Отправим в налоговую" },
                  { step: "4", title: "Готово", desc: "Получите статус ИП" }
                ].map((item, index) => (
                  <div key={index} className="text-center space-y-2 md:space-y-3">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center text-xl md:text-2xl font-bold text-primary mx-auto">
                      {item.step}
                    </div>
                    <h3 className="font-bold text-sm md:text-base">{item.title}</h3>
                    <p className="text-xs md:text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="mt-8 md:mt-12 text-center px-4">
            <Button size="lg" className="px-8 md:px-12 w-full sm:w-auto" onClick={() => setIsDialogOpen(true)}>
              Начать регистрацию
            </Button>
          </div>
        </div>
      </section>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-[95vw] md:max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-xl md:text-2xl">Выберите банк для регистрации ИП</DialogTitle>
          </DialogHeader>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-4 md:mt-6">
            {banks.map((bank, index) => (
              <Card key={index} className="hover:border-primary transition-colors cursor-pointer">
                <CardContent className="p-6 space-y-4">
                  <div className="h-32 flex items-center justify-center">
                    <img src={bank.logo} alt={bank.name} className="max-w-full max-h-full object-contain" />
                  </div>
                  <div className="text-center space-y-2">
                    <h3 className="font-bold text-lg">{bank.name}</h3>
                    <p className="text-sm text-muted-foreground">{bank.description}</p>
                  </div>
                  <Button className="w-full">Выбрать</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default IpPage;