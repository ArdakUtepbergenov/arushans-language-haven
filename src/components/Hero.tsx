import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, MessageCircle, Award, Users, BookOpen } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import aruzhanPhoto from "@/assets/aruzhan-photo.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/75" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-20 mx-auto">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text */}
          <div className="space-y-8 animate-fade-in text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 backdrop-blur-sm rounded-full border border-accent/30 mb-6">
              <Globe className="w-4 h-4 text-accent-foreground" />
              <span className="text-sm font-medium text-accent-foreground">Репетитор английского и китайского языка</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
              Освойте языки с{" "}
              <span className="text-accent">Аружан Калаубайкызы</span>
            </h1>
            
            <p className="text-lg md:text-xl text-primary-foreground/90">
              Раскройте свой потенциал в английском и китайском языке с персонализированным обучением, направленным на ваш успех
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center pt-6">
              <Button 
                variant="hero" 
                size="lg"
                onClick={scrollToContact}
                className="text-lg px-8 py-6 h-auto"
              >
                Записаться на первое занятие
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                variant="heroOutline" 
                size="lg"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-lg px-8 py-6 h-auto"
              >
                <MessageCircle className="mr-2 w-5 h-5" />
                Узнать больше
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto lg:mx-0 pt-12">
              <div className="text-center lg:text-left">
                <div className="text-3xl md:text-4xl font-bold text-accent-foreground mb-2">500+</div>
                <div className="text-sm text-primary-foreground/80">Довольных учеников</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl md:text-4xl font-bold text-accent-foreground mb-2">5+</div>
                <div className="text-sm text-primary-foreground/80">Лет опыта</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl md:text-4xl font-bold text-accent-foreground mb-2">2</div>
                <div className="text-sm text-primary-foreground/80">Языка обучения</div>
              </div>
            </div>
          </div>

          {/* Right side - Photo */}
          <div className="flex justify-center lg:justify-end animate-slide-in-right">
            <div className="relative group">
              <div className="absolute -inset-6 bg-gradient-to-r from-accent via-accent/50 to-primary opacity-30 rounded-3xl blur-2xl group-hover:opacity-50 transition-opacity duration-500" />
              <div className="absolute -inset-4 bg-gradient-to-br from-accent/30 to-primary/30 rounded-3xl blur-xl animate-pulse-slow" />
              <div className="relative overflow-hidden rounded-3xl shadow-2xl border-4 border-accent/20 backdrop-blur-sm">
                <img 
                  src={aruzhanPhoto} 
                  alt="Аружан Калаубайкызы - Профессиональный репетитор английского и китайского языка" 
                  className="w-full max-w-md lg:max-w-lg object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-accent text-white px-4 py-2 rounded-full shadow-lg animate-float flex items-center gap-2">
                <Award className="w-4 h-4" />
                <span className="font-semibold text-sm">5+ лет</span>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-primary text-white px-4 py-2 rounded-full shadow-lg animate-float-delayed flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span className="font-semibold text-sm">500+ учеников</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
