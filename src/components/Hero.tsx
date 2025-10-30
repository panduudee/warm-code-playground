import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-illustration.jpg";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        background: "var(--gradient-hero)",
      }}
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container-max section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-primary-foreground leading-tight">
              We Craft Digital Experiences —{" "}
              <span className="text-secondary">With Heart</span> and Code.
            </h1>
            
            <p className="text-xl md:text-2xl text-primary-foreground/90 font-body">
              Ngoding sambil ngopi, hasilnya tetep rapi.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                onClick={() => scrollToSection("#contact")}
                size="lg"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 rounded-xl px-8 py-6 text-lg font-semibold shadow-lifted hover-lift"
              >
                Start Your Project
              </Button>
              <Button
                onClick={() => scrollToSection("#about")}
                size="lg"
                variant="outline"
                className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 rounded-xl px-8 py-6 text-lg font-semibold"
              >
                Scroll to Enter
                <ArrowDown className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="relative animate-float">
            <img
              src={heroImage}
              alt="Developer working at coffee shop"
              className="w-full h-auto rounded-2xl shadow-lifted"
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => scrollToSection("#about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/80 hover:text-primary-foreground transition-colors animate-bounce"
      >
        <ArrowDown size={32} />
      </button>
    </section>
  );
};
