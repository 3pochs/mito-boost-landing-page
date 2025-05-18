
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className="hero-gradient text-white min-h-[90vh] flex items-center">
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="animate-fadeIn">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Revitalize Your Body From the Inside Out
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Discover how Mitolyn can supercharge your energy, metabolism, and fat-burning potential.
            </p>
            <Button 
              size="lg" 
              className="bg-mitolyn-accent hover:bg-green-600 text-white px-8 py-6 text-lg rounded-md group transition-all duration-300 transform hover:scale-105"
              onClick={() => window.open("https://mitolyn.com/science/?affiliate=nassoro77", "_blank")}
            >
              Learn More 
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
          <div className="hidden md:block">
            <div className="relative animate-fadeIn animation-delay-300">
              <div className="absolute -inset-4 rounded-full bg-white/10 blur-xl"></div>
              <img 
                src="/lovable-uploads/c6fe58b9-d791-4299-9992-e29ec39ffc1c.png" 
                alt="Energetic woman in athletic wear" 
                className="w-full h-auto rounded-xl shadow-2xl relative z-10 object-cover hover:shadow-glow transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
