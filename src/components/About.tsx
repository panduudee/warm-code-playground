import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import teamImage from "@/assets/team-warkop.jpg";

export const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 md:py-32 bg-background"
    >
      <div className="container-max section-padding">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image */}
          <div
            className={`relative transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-16"
            }`}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-card hover-lift">
              <img
                src={teamImage}
                alt="Team collaboration at warkop"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent" />
            </div>
          </div>

          {/* Content */}
          <div
            className={`space-y-6 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
              The Warkop Story
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Dimulai dari obrolan santai di warkop, kami bantu banyak bisnis
              bertransformasi digital tanpa drama. Kopi kami selalu hangat, kode
              kami selalu bersih, dan komitmen kami selalu nyata.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              We believe great technology should feel human. That's why we combine
              technical expertise with genuine care for your business goals. No
              jargon, no complications — just honest conversations and
              exceptional results.
            </p>

            <div className="pt-4">
              <Button
                onClick={() => {
                  const element = document.querySelector("#contact");
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-xl px-8 py-6 text-lg font-semibold shadow-soft hover-lift"
              >
                Get to Know Us
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-heading font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground mt-1">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-heading font-bold text-primary">100+</div>
                <div className="text-sm text-muted-foreground mt-1">Projects Done</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-heading font-bold text-primary">∞</div>
                <div className="text-sm text-muted-foreground mt-1">Cups of Coffee</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
