import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Сара Чен",
      role: "Бизнес-профессионал",
      content: "Методы преподавания Аружан помогли мне сдать экзамен HSK 4 с отличием! Её терпеливый подход и культурные знания сделали изучение китайского языка приятным и эффективным.",
      rating: 5
    },
    {
      name: "Михаил Родригес",
      role: "Студент университета",
      content: "Я перешёл от трудностей с английскими эссе к уверенному написанию диссертации. Персонализированная обратная связь и структурированные уроки Аружан были именно тем, что мне было нужно.",
      rating: 5
    },
    {
      name: "Ли Вей",
      role: "Смена карьеры",
      content: "Благодаря Аружан я значительно улучшил свой деловой английский. Она понимала мои цели и адаптировала каждый урок, чтобы помочь мне преуспеть на новой международной должности.",
      rating: 5
    },
    {
      name: "Эмма Томпсон",
      role: "Энтузиаст языков",
      content: "Изучение китайского казалось невозможным, пока я не нашла Аружан. Её стиль преподавания увлекательный и эффективный. Теперь я уверенно веду разговоры на китайском!",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Что говорят ученики
          </h2>
          <p className="text-lg text-muted-foreground">
            Присоединяйтесь к сотням довольных учеников, которые достигли своих языковых целей
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="hover:shadow-xl transition-all duration-300 border-border/50"
            >
              <CardContent className="p-6 space-y-4">
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                
                <p className="text-foreground leading-relaxed">
                  "{testimonial.content}"
                </p>

                <div className="pt-4 border-t border-border/50">
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
