import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const workouts = [
    {
      title: "Силовые тренировки",
      description: "Наращивайте мышечную массу и увеличивайте силу",
      icon: "Dumbbell",
      features: ["Свободные веса", "Тренажеры", "Персональный план"]
    },
    {
      title: "Кардио программы",
      description: "Улучшите выносливость и сожгите калории",
      icon: "Activity",
      features: ["Беговые дорожки", "Велотренажеры", "Функциональный тренинг"]
    },
    {
      title: "Групповые занятия",
      description: "Тренируйтесь в команде единомышленников",
      icon: "Users",
      features: ["Кроссфит", "Бокс", "Йога"]
    }
  ];

  const plans = [
    {
      name: "Пробная тренировка",
      price: "Бесплатно",
      period: "1 день",
      features: [
        "Доступ ко всем зонам",
        "Консультация тренера",
        "Оценка физической формы",
        "Персональная программа"
      ],
      popular: false,
      cta: "Записаться"
    },
    {
      name: "Месячный",
      price: "3 990 ₽",
      period: "месяц",
      features: [
        "Безлимитный доступ",
        "Все групповые занятия",
        "Зона кардио и силовых",
        "Душевые и раздевалки",
        "Поддержка тренеров"
      ],
      popular: true,
      cta: "Выбрать план"
    },
    {
      name: "Годовой",
      price: "39 900 ₽",
      period: "год",
      features: [
        "Все из месячного",
        "2 персональные тренировки",
        "Заморозка 14 дней",
        "Скидка на спортпит 15%",
        "Приоритетная запись"
      ],
      popular: false,
      cta: "Выбрать план"
    }
  ];

  const schedule = [
    { time: "07:00", monday: "Кроссфит", tuesday: "Йога", wednesday: "Кроссфит", thursday: "Бокс", friday: "Кроссфит" },
    { time: "09:00", monday: "Силовая", tuesday: "Кардио", wednesday: "Силовая", thursday: "Функц.", friday: "Силовая" },
    { time: "12:00", monday: "Йога", tuesday: "Бокс", wednesday: "Йога", thursday: "Кардио", friday: "Йога" },
    { time: "18:00", monday: "Кроссфит", tuesday: "Силовая", wednesday: "Кроссфит", thursday: "Силовая", friday: "Кроссфит" },
    { time: "20:00", monday: "Бокс", tuesday: "Кроссфит", wednesday: "Бокс", thursday: "Кроссфит", friday: "Бокс" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Flame" className="text-primary" size={32} />
            <span className="text-2xl font-bold">POWERHOUSE</span>
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#home" className="hover:text-primary transition-colors">Главная</a>
            <a href="#workouts" className="hover:text-primary transition-colors">Тренировки</a>
            <a href="#pricing" className="hover:text-primary transition-colors">Цены</a>
            <a href="#schedule" className="hover:text-primary transition-colors">Расписание</a>
          </div>
          <Button className="bg-primary hover:bg-primary/90">
            <Icon name="Phone" size={16} className="mr-2" />
            Позвонить
          </Button>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-primary/20 text-primary border-primary">💪 Твой путь к силе</Badge>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Преврати <span className="text-primary">цели</span> в результаты
              </h1>
              <p className="text-xl text-muted-foreground">
                Современное оборудование, профессиональные тренеры и мотивирующая атмосфера. 
                Начни бесплатную пробную тренировку уже сегодня.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <Icon name="Zap" size={20} className="mr-2" />
                  Пробная тренировка
                </Button>
                <Button size="lg" variant="outline">
                  <Icon name="Play" size={20} className="mr-2" />
                  Смотреть тур
                </Button>
              </div>
              <div className="flex gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-primary">1200+</div>
                  <div className="text-sm text-muted-foreground">Членов клуба</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">15</div>
                  <div className="text-sm text-muted-foreground">Тренеров</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">500м²</div>
                  <div className="text-sm text-muted-foreground">Площадь зала</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg blur-3xl"></div>
              <img 
                src="https://cdn.poehali.dev/projects/7b64dfac-6022-4682-9072-b79780e298cb/files/9ddaece7-e6fa-4b58-a0bb-7ad958493218.jpg" 
                alt="Fitness gym"
                className="relative rounded-lg shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="workouts" className="py-20 px-4 bg-card">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary">Тренировки</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Программы тренировок</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Выберите направление, которое соответствует вашим целям
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {workouts.map((workout, index) => (
              <Card key={index} className="bg-background border-border hover:border-primary transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={workout.icon as any} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{workout.title}</CardTitle>
                  <CardDescription className="text-base">{workout.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {workout.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Icon name="Check" size={16} className="text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Узнать больше
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary">Цены</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Выберите свой план</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Гибкие условия абонементов для достижения ваших целей
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative ${plan.popular ? 'border-primary border-2 scale-105' : 'border-border'}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground">Популярный</Badge>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="pt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.price !== "Бесплатно" && (
                      <span className="text-muted-foreground ml-2">/ {plan.period}</span>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary/90' : ''}`}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    {plan.cta}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="schedule" className="py-20 px-4 bg-card">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary">Расписание</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Расписание занятий</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Планируйте тренировки на неделю вперед
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="p-4 text-left font-bold">Время</th>
                    <th className="p-4 text-center font-bold">Пн</th>
                    <th className="p-4 text-center font-bold">Вт</th>
                    <th className="p-4 text-center font-bold">Ср</th>
                    <th className="p-4 text-center font-bold">Чт</th>
                    <th className="p-4 text-center font-bold">Пт</th>
                  </tr>
                </thead>
                <tbody>
                  {schedule.map((row, index) => (
                    <tr key={index} className="border-b border-border hover:bg-background/50 transition-colors">
                      <td className="p-4 font-bold text-primary">{row.time}</td>
                      <td className="p-4 text-center">
                        <Badge variant="outline" className="bg-primary/10">{row.monday}</Badge>
                      </td>
                      <td className="p-4 text-center">
                        <Badge variant="outline" className="bg-primary/10">{row.tuesday}</Badge>
                      </td>
                      <td className="p-4 text-center">
                        <Badge variant="outline" className="bg-primary/10">{row.wednesday}</Badge>
                      </td>
                      <td className="p-4 text-center">
                        <Badge variant="outline" className="bg-primary/10">{row.thursday}</Badge>
                      </td>
                      <td className="p-4 text-center">
                        <Badge variant="outline" className="bg-primary/10">{row.friday}</Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-8 text-center">
              <p className="text-muted-foreground mb-4">Выходные: свободные тренировки с 09:00 до 21:00</p>
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Icon name="Calendar" size={20} className="mr-2" />
                Записаться на занятие
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-border">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Flame" className="text-primary" size={28} />
                <span className="text-xl font-bold">POWERHOUSE</span>
              </div>
              <p className="text-muted-foreground">
                Современный фитнесс клуб для достижения ваших целей
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Контакты</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (495) 123-45-67
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@powerhouse.ru
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  Москва, ул. Спортивная, 1
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Режим работы</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Пн-Пт: 06:00 - 23:00</li>
                <li>Сб-Вс: 09:00 - 21:00</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Социальные сети</h3>
              <div className="flex gap-4">
                <Button variant="outline" size="icon">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button variant="outline" size="icon">
                  <Icon name="Facebook" size={20} />
                </Button>
                <Button variant="outline" size="icon">
                  <Icon name="Youtube" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground">
            <p>© 2024 POWERHOUSE. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
