
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className="hero-gradient text-white min-h-[90vh] flex items-center relative overflow-hidden">
      {/* Mobile background image */}
      <div className="absolute inset-0 md:hidden">
        <img 
          src="/lovable-uploads/6227a778-6434-4bf0-b28c-ec07b9df19c9.png" 
          alt="Woman running with headphones" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-mitolyn-primary/90 to-mitolyn-primary/70"></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="animate-fadeIn z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Revitalize Your Body From the Inside Out
            </h1>
            <p className="text-lg md:text-xl mb-4 opacity-90">
              Discover how Mitolyn can supercharge your energy, metabolism, and fat-burning potential.
            </p>
            <p className="text-lg md:text-xl mb-8 opacity-90 animate-fadeIn animation-delay-200">
              <span className="font-bold text-mitolyn-accent">Unlock your body's natural weight loss ability</span> by enhancing cellular energy production where it matters most.
            </p>
            <Button 
              size="lg" 
              className="bg-mitolyn-accent hover:bg-green-600 text-white px-8 py-6 text-lg rounded-md transition-all duration-300 animate-pulse-slow"
              onClick={() => window.open("https://mitolyn.com/science/?affiliate=nassoro77", "_blank")}
            >
              Learn How It Works 
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
          <div className="hidden md:block">
            <div className="relative animate-fadeIn animation-delay-300">
              <div className="absolute -inset-4 rounded-full bg-white/10 blur-xl"></div>
              <img 
                src="/lovable-uploads/6227a778-6434-4bf0-b28c-ec07b9df19c9.png" 
                alt="Woman running with headphones" 
                className="w-full h-auto rounded-xl shadow-2xl relative z-10 object-cover hover:shadow-glow transition-all duration-500 transform hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
