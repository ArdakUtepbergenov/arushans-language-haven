import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const About = () => {
  const qualifications = [
    "Свободное владение английским и китайским языками",
    "Более 5 лет профессионального преподавательского опыта",
    "Специализация на подготовке к экзаменам (IELTS, TOEFL, HSK)",
    "Подтвержденный опыт работы с более чем 500 успешными учениками",
    "Индивидуальная методика обучения",
    "Гибкие онлайн и очные занятия"
  ];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="inline-block">
                <span className="px-4 py-1.5 bg-accent/10 text-accent text-sm font-semibold rounded-full">
                  О вашем репетиторе
                </span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Привет, я Аружан Калаубайкызы
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Как страстный преподаватель языков, я верю, что изучение нового языка открывает двери к 
                бесчисленным возможностям. Имея большой опыт преподавания английского и китайского языков, 
                я помогла сотням студентов достичь своих языковых целей — от бизнес-профессионалов до 
                студентов, готовящихся к экзаменам.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Моя философия преподавания основана на создании увлекательных, персонализированных уроков, 
                которые адаптируются к вашему уникальному стилю обучения. Независимо от того, начинаете ли 
                вы с нуля или хотите усовершенствовать свои навыки, я здесь, чтобы направлять вас на каждом 
                этапе пути.
              </p>

              <div className="space-y-3 pt-4">
                {qualifications.map((qual, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{qual}</span>
                  </div>
                ))}
              </div>

              <Button 
                variant="hero" 
                size="lg"
                onClick={scrollToContact}
                className="mt-8"
              >
                Запланировать бесплатную консультацию
              </Button>
            </div>

            {/* Right Content - Stats */}
            <div className="grid grid-cols-2 gap-6">
              <Card title="Успех учеников" value="98%" description="Достигают своих целей" />
              <Card title="Средняя оценка" value="4.9/5" description="По отзывам учеников" />
              <Card title="Часов уроков" value="3000+" description="Преподавательского опыта" />
              <Card title="Языки" value="3" description="Английский, китайский, казахский" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Card = ({ title, value, description }: { title: string; value: string; description: string }) => (
  <div className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
    <div className="text-3xl font-bold text-accent mb-2">{value}</div>
    <div className="text-sm font-semibold text-foreground mb-1">{title}</div>
    <div className="text-xs text-muted-foreground">{description}</div>
  </div>
);

export default About;
