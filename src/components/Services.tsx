import { useEffect, useRef, useState } from "react";
import { Globe, Database, Palette, Lightbulb } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description: "Responsive, fast, and beautiful websites that convert visitors into customers.",
    features: ["Modern UI/UX", "SEO Optimized", "Mobile First"],
  },
  {
    icon: Database,
    title: "ERP & System Integration",
    description: "Streamline operations with custom ERP solutions tailored to your business.",
    features: ["Custom Workflows", "Data Integration", "Automation"],
  },
  {
    icon: Palette,
    title: "UI/UX & Branding",
    description: "Create memorable brand identities and user experiences that stand out.",
    features: ["Brand Strategy", "User Research", "Design Systems"],
  },
  {
    icon: Lightbulb,
    title: "IT Consultation",
    description: "Strategic tech guidance to help your business grow and scale efficiently.",
    features: ["Tech Stack", "Strategy", "Best Practices"],
  },
];

export const Services = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          services.forEach((_, index) => {
            setTimeout(() => {
              setVisibleCards((prev) => [...prev, index]);
            }, index * 120);
          });
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-20 md:py-32 bg-gradient-to-b from-background via-card to-background"
    >
      <div className="container-max section-padding">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Services Playground
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            From coffee-fueled brainstorms to production-ready solutions. We've
            got you covered.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`group bg-card rounded-2xl p-8 shadow-card hover:shadow-lifted transition-all duration-500 cursor-pointer border-2 border-transparent hover:border-secondary ${
                  visibleCards.includes(index)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: `${index * 120}ms`,
                }}
              >
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                </div>

                <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                  {service.title}
                </h3>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center text-sm text-muted-foreground"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => {
                    const element = document.querySelector("#contact");
                    element?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="mt-6 text-primary font-semibold hover:text-accent transition-colors"
                >
                  Ask about this →
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
