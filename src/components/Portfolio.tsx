import { useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Modern E-Commerce Platform",
    type: "Website Development",
    description: "Built a scalable online store with seamless checkout and inventory management.",
    metrics: "2x conversion rate, 50% faster load time",
    tags: ["React", "Tailwind", "Stripe"],
  },
  {
    title: "Manufacturing ERP System",
    type: "ERP Integration",
    description: "Custom ERP solution for production tracking, inventory, and reporting.",
    metrics: "40% efficiency increase, real-time insights",
    tags: ["Custom Backend", "Dashboard", "API"],
  },
  {
    title: "Legal Firm Branding",
    type: "UI/UX & Branding",
    description: "Complete brand identity redesign with modern website and marketing materials.",
    metrics: "Professional presence, client trust +60%",
    tags: ["Figma", "Brand Strategy", "Web Design"],
  },
  {
    title: "Laundry Management App",
    type: "Web App",
    description: "End-to-end laundry tracking system with customer portal and admin dashboard.",
    metrics: "Automated operations, happy customers",
    tags: ["React", "Database", "Automation"],
  },
];

export const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const currentProject = projects[currentIndex];

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-background">
      <div className="container-max section-padding">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Proof of Coffee ☕
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Real projects, real results. Swipe to explore our work.
          </p>
        </div>

        {/* Portfolio Slider */}
        <div className="relative max-w-5xl mx-auto">
          <div className="bg-card rounded-3xl shadow-lifted overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Project Visual */}
              <div className="bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 p-12 md:p-16 flex items-center justify-center min-h-[400px]">
                <div className="text-center space-y-4">
                  <div className="text-6xl md:text-8xl font-heading font-bold text-primary/30">
                    {currentIndex + 1}
                  </div>
                  <div className="text-xl font-heading text-foreground/60">
                    of {projects.length}
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-semibold mb-4 w-fit">
                  {currentProject.type}
                </div>

                <h3 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                  {currentProject.title}
                </h3>

                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  {currentProject.description}
                </p>

                <div className="mb-6">
                  <div className="text-sm font-semibold text-primary mb-2">
                    Results
                  </div>
                  <div className="text-foreground">{currentProject.metrics}</div>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {currentProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 rounded-lg bg-muted/20 text-muted-foreground text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Button
                  onClick={() => {
                    const element = document.querySelector("#contact");
                    element?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl w-full md:w-auto"
                >
                  Start Your Project
                  <ExternalLink className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevProject}
              className="w-12 h-12 rounded-full bg-card shadow-card hover:shadow-lifted flex items-center justify-center text-foreground transition-all hover-lift"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextProject}
              className="w-12 h-12 rounded-full bg-card shadow-card hover:shadow-lifted flex items-center justify-center text-foreground transition-all hover-lift"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-primary w-8"
                    : "bg-muted-foreground/30"
                }`}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-xl text-foreground mb-6">
            Want your project here? ☕ Let's chat.
          </p>
          <Button
            onClick={() => {
              const element = document.querySelector("#contact");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
            variant="outline"
            className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground rounded-xl px-8 py-6 text-lg font-semibold"
          >
            See More Projects
          </Button>
        </div>
      </div>
    </section>
  );
};
