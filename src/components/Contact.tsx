import { useState } from "react";
import { Send, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Oops!",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Show success message
    toast({
      title: "Message sent! ☕",
      description: "We'll get back to you soon. Time for coffee!",
    });

    // Reset form
    setFormData({ name: "", email: "", projectType: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-card">
      <div className="container-max section-padding">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Let's Create Together
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Ceritain dikit aja, sisanya nanti kita ngopi bareng.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-background rounded-2xl p-8 shadow-card">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    placeholder="Siapa nih yang mau bikin web?"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="bg-card border-border rounded-xl h-12"
                  />
                </div>

                <div>
                  <Input
                    type="email"
                    placeholder="Biar kita bisa balas"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="bg-card border-border rounded-xl h-12"
                  />
                </div>

                <div>
                  <select
                    value={formData.projectType}
                    onChange={(e) =>
                      setFormData({ ...formData, projectType: e.target.value })
                    }
                    className="w-full h-12 px-4 bg-card border border-border rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Project type?</option>
                    <option value="website">Website</option>
                    <option value="erp">ERP System</option>
                    <option value="uiux">UI/UX & Branding</option>
                    <option value="consultation">IT Consultation</option>
                  </select>
                </div>

                <div>
                  <Textarea
                    placeholder="Ceritain dikit aja, sisanya nanti kita ngopi bareng..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="bg-card border-border rounded-xl min-h-32 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl h-12 text-lg font-semibold shadow-soft hover-lift"
                >
                  Send Message
                  <Send className="ml-2 w-5 h-5" />
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-background rounded-2xl p-8 shadow-card">
                <h3 className="text-2xl font-heading font-bold text-foreground mb-6">
                  Get in Touch
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground mb-1">
                        Email
                      </div>
                      <a
                        href="mailto:hello@suganrame.com"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        hello@suganrame.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground mb-1">
                        WhatsApp
                      </div>
                      <a
                        href="https://wa.me/6281234567890"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-accent transition-colors"
                      >
                        +62 812-3456-7890
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground mb-1">
                        Location
                      </div>
                      <p className="text-muted-foreground">
                        Jakarta, Indonesia
                        <br />
                        (Remote-friendly ☕)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Response Time */}
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-6 border-2 border-primary/20">
                <div className="text-lg font-semibold text-foreground mb-2">
                  ⚡ Quick Response
                </div>
                <p className="text-muted-foreground">
                  We typically respond within 24 hours. For urgent matters,
                  WhatsApp us directly!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
