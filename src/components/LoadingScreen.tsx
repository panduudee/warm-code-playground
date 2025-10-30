import { useEffect, useState } from "react";
import { Coffee } from "lucide-react";

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 300);
          return 100;
        }
        return prev + 2;
      });
    }, 16);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-primary via-accent to-background animate-fade-in-up">
      <div className="text-center space-y-6">
        <Coffee className="w-16 h-16 mx-auto text-primary-foreground animate-float" />
        <h2 className="text-2xl md:text-3xl font-heading font-semibold text-primary-foreground">
          Ngopi bentar ya... ☕
        </h2>
        <div className="w-64 h-2 bg-primary-foreground/20 rounded-full overflow-hidden">
          <div
            className="h-full bg-primary-foreground transition-all duration-300 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};
