import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const About = () => {
  const qualifications = [
    "Native-level fluency in English and Chinese",
    "5+ years of professional teaching experience",
    "Specialized in exam preparation (IELTS, TOEFL, HSK)",
    "Proven track record with 500+ successful students",
    "Personalized teaching methodology",
    "Flexible online and in-person sessions"
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
                  About Your Tutor
                </span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Hi, I'm Aruzhan Kalaubaykyzy
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                As a passionate language educator, I believe that learning a new language opens doors to countless opportunities. 
                With extensive experience teaching both English and Chinese, I've helped hundreds of students achieve their 
                language goals—from business professionals to students preparing for exams.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                My teaching philosophy centers on creating engaging, personalized lessons that adapt to your unique learning 
                style. Whether you're starting from scratch or looking to refine your skills, I'm here to guide you every step 
                of the way.
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
                Schedule a Free Consultation
              </Button>
            </div>

            {/* Right Content - Stats */}
            <div className="grid grid-cols-2 gap-6">
              <Card title="Student Success" value="98%" description="Achieve their goals" />
              <Card title="Average Rating" value="4.9/5" description="From student reviews" />
              <Card title="Lesson Hours" value="3000+" description="Of teaching experience" />
              <Card title="Languages" value="3" description="English, Chinese, Kazakh" />
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
