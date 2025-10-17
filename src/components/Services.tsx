import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Book, MessageSquare, Trophy, Users } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Book,
      title: "English Tutoring",
      description: "From beginner to advanced, master English grammar, vocabulary, and conversation skills with proven teaching methods.",
      features: ["Business English", "Academic Writing", "Conversational Practice", "Exam Preparation"]
    },
    {
      icon: MessageSquare,
      title: "Chinese (Mandarin) Tutoring",
      description: "Learn Mandarin Chinese with culturally immersive lessons covering speaking, reading, and writing.",
      features: ["HSK Preparation", "Pinyin & Characters", "Daily Conversation", "Cultural Context"]
    },
    {
      icon: Users,
      title: "Personalized Learning",
      description: "Every student is unique. Get customized lesson plans tailored to your goals, pace, and learning style.",
      features: ["One-on-One Sessions", "Flexible Scheduling", "Custom Materials", "Progress Tracking"]
    },
    {
      icon: Trophy,
      title: "Results-Driven Approach",
      description: "Achieve your language goals with structured curriculum designed for measurable progress and success.",
      features: ["Goal Setting", "Regular Assessments", "Certification Prep", "Proven Methods"]
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Professional Language Services
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive tutoring programs designed to help you achieve fluency and confidence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border/50"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-accent" />
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
