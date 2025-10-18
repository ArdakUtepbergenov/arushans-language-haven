import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Book, MessageSquare, Trophy, Users } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Book,
      title: "Уроки английского языка",
      description: "От начального до продвинутого уровня, освойте английскую грамматику, словарный запас и разговорные навыки с проверенными методами обучения.",
      features: ["Деловой английский", "Академическое письмо", "Разговорная практика", "Подготовка к экзаменам"]
    },
    {
      icon: MessageSquare,
      title: "Уроки китайского языка (путунхуа)",
      description: "Изучайте китайский язык с культурно-насыщенными уроками, охватывающими разговорную речь, чтение и письмо.",
      features: ["Подготовка к HSK", "Пиньинь и иероглифы", "Повседневный разговор", "Культурный контекст"]
    },
    {
      icon: Users,
      title: "Индивидуальное обучение",
      description: "Каждый ученик уникален. Получите индивидуальные планы уроков, адаптированные под ваши цели, темп и стиль обучения.",
      features: ["Индивидуальные занятия", "Гибкое расписание", "Персональные материалы", "Отслеживание прогресса"]
    },
    {
      icon: Trophy,
      title: "Результативный подход",
      description: "Достигайте своих языковых целей с структурированной программой, разработанной для измеримого прогресса и успеха.",
      features: ["Постановка целей", "Регулярная оценка", "Подготовка к сертификации", "Проверенные методы"]
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Профессиональные языковые услуги
          </h2>
          <p className="text-lg text-muted-foreground">
            Комплексные программы обучения, разработанные для достижения беглости и уверенности
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-border/50 animate-fade-in hover:border-accent/50 bg-gradient-to-br from-card to-card/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-14 h-14 bg-gradient-to-br from-accent/20 to-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 group-hover:rotate-6">
                    <Icon className="w-7 h-7 text-accent" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base pt-2">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
