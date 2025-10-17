import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import tutorPhoto from "@/assets/tutor-photo.jpg";

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
          <div className="flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 to-primary/20 rounded-3xl blur-xl" />
              <img 
                src={tutorPhoto} 
                alt="Аружан Калаубайкызы - Репетитор" 
                className="relative rounded-2xl shadow-2xl w-full max-w-md lg:max-w-lg object-cover"
              />
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
