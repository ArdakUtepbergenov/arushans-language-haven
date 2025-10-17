import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MessageCircle, Calendar } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    language: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Сообщение отправлено!",
      description: "Спасибо за ваш интерес. Я отвечу вам в течение 24 часов.",
    });
    setFormData({ name: "", email: "", language: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Начните свой языковой путь сегодня
          </h2>
          <p className="text-lg text-muted-foreground">
            Готовы сделать первый шаг? Свяжитесь со мной, чтобы запланировать бесплатную консультацию
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            <Card className="border-border/50">
              <CardHeader>
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mb-2">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <CardTitle className="text-lg">Напишите мне</CardTitle>
                <CardDescription>
                  Ответ в течение 24 часов
                </CardDescription>
              </CardHeader>
              <CardContent>
                <a 
                  href="mailto:aruzhan.tutor@example.com" 
                  className="text-accent hover:underline font-medium"
                >
                  aruzhan.tutor@example.com
                </a>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardHeader>
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mb-2">
                  <MessageCircle className="w-5 h-5 text-accent" />
                </div>
                <CardTitle className="text-lg">WhatsApp</CardTitle>
                <CardDescription>
                  Быстрые вопросы? Напишите мне
                </CardDescription>
              </CardHeader>
              <CardContent>
                <a 
                  href="https://wa.me/1234567890" 
                  className="text-accent hover:underline font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Написать в WhatsApp
                </a>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardHeader>
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mb-2">
                  <Calendar className="w-5 h-5 text-accent" />
                </div>
                <CardTitle className="text-lg">Доступность</CardTitle>
                <CardDescription>
                  Гибкие варианты расписания
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-foreground">
                  Пн-Сб: 9:00 - 20:00<br />
                  Онлайн и очно
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="lg:col-span-2 border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl">Отправьте мне сообщение</CardTitle>
              <CardDescription>
                Заполните форму ниже, и я свяжусь с вами как можно скорее
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Ваше имя</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Иван Иванов"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Электронная почта</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="ivan@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="language">Интерес к языку</Label>
                  <Input
                    id="language"
                    name="language"
                    value={formData.language}
                    onChange={handleChange}
                    placeholder="Английский, китайский или оба"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Ваше сообщение</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Расскажите мне о ваших целях изучения языка..."
                    className="min-h-[120px]"
                    required
                  />
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full">
                  Отправить сообщение
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
