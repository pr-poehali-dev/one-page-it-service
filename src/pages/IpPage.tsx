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
      logo: "https://cdn.poehali.dev/files/52a2a5ff-b7a6-458d-802d-6acf2f2f3e03.png",
      description: "Регистрация ИП + РКО бесплатно"
    },
    {
      name: "Т-Банк",
      logo: "https://cdn.poehali.dev/files/fbcf16ba-71c9-4f34-b4b7-249f25971855.png",
      description: "Регистрация ИП + РКО бесплатно"
    },
    {
      name: "Точка Банк",
      logo: "https://cdn.poehali.dev/files/092dce40-60e9-4c0e-bb07-665abb0c5634.png",
      description: "Регистрация ИП + РКО бесплатно"
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
            <h1 className="text-xl font-bold">Регистрация ИП</h1>
            <div className="w-24"></div>
          </div>
        </div>
      </header>

      <section className="py-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 via-background to-background" />
        <div className="container mx-auto max-w-4xl relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Icon name="FileText" size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary">Для предпринимателей</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Регистрация ИП под ключ
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8">
            Поможем открыть ИП быстро и без лишних хлопот
          </p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center">Наши услуги</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
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
                <CardHeader>
                  <CardTitle className="text-2xl mb-2">{tariff.title}</CardTitle>
                  <div className="text-3xl font-bold text-primary">{tariff.price}</div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {tariff.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <Icon name="CheckCircle2" size={20} className="text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full" onClick={() => setIsDialogOpen(true)}>Выбрать банк</Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-card/50">
            <CardHeader>
              <CardTitle className="text-3xl text-center mb-8">Как это работает</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                  { step: "1", title: "Заявка", desc: "Оставьте заявку онлайн" },
                  { step: "2", title: "Документы", desc: "Подготовим за вас" },
                  { step: "3", title: "Подача", desc: "Отправим в налоговую" },
                  { step: "4", title: "Готово", desc: "Получите статус ИП" }
                ].map((item, index) => (
                  <div key={index} className="text-center space-y-3">
                    <div className="w-16 h-16 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center text-2xl font-bold text-primary mx-auto">
                      {item.step}
                    </div>
                    <h3 className="font-bold">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="mt-12 text-center">
            <Button size="lg" className="px-12" onClick={() => setIsDialogOpen(true)}>
              Начать регистрацию
            </Button>
          </div>
        </div>
      </section>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">Выберите банк для регистрации ИП</DialogTitle>
          </DialogHeader>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
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