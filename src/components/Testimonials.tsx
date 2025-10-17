import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Business Professional",
      content: "Aruzhan's teaching methods helped me pass my HSK 4 exam with flying colors! Her patient approach and cultural insights made learning Chinese enjoyable and effective.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      role: "University Student",
      content: "I went from struggling with English essays to confidently writing my thesis. Aruzhan's personalized feedback and structured lessons were exactly what I needed.",
      rating: 5
    },
    {
      name: "Li Wei",
      role: "Career Changer",
      content: "Thanks to Aruzhan, I improved my business English significantly. She understood my goals and tailored every lesson to help me succeed in my new international role.",
      rating: 5
    },
    {
      name: "Emma Thompson",
      role: "Language Enthusiast",
      content: "Learning Mandarin seemed impossible until I found Aruzhan. Her teaching style is engaging and effective. I'm now confidently having conversations in Chinese!",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            What Students Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Join hundreds of satisfied students who've achieved their language goals
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
