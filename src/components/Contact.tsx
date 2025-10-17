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
      title: "Message Sent!",
      description: "Thank you for your interest. I'll get back to you within 24 hours.",
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
            Start Your Language Journey Today
          </h2>
          <p className="text-lg text-muted-foreground">
            Ready to take the first step? Get in touch to schedule your free consultation
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
                <CardTitle className="text-lg">Email Me</CardTitle>
                <CardDescription>
                  Get a response within 24 hours
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
                  Quick questions? Chat with me
                </CardDescription>
              </CardHeader>
              <CardContent>
                <a 
                  href="https://wa.me/1234567890" 
                  className="text-accent hover:underline font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Message on WhatsApp
                </a>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardHeader>
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mb-2">
                  <Calendar className="w-5 h-5 text-accent" />
                </div>
                <CardTitle className="text-lg">Availability</CardTitle>
                <CardDescription>
                  Flexible scheduling options
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-foreground">
                  Mon-Sat: 9 AM - 8 PM<br />
                  Online & In-Person
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="lg:col-span-2 border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl">Send Me a Message</CardTitle>
              <CardDescription>
                Fill out the form below and I'll get back to you as soon as possible
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="language">Language Interest</Label>
                  <Input
                    id="language"
                    name="language"
                    value={formData.language}
                    onChange={handleChange}
                    placeholder="English, Chinese, or Both"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Your Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your language learning goals..."
                    className="min-h-[120px]"
                    required
                  />
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full">
                  Send Message
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
