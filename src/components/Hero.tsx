
import { Button } from "@/components/ui/button";

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
              Discover how mitochondrial support can supercharge your energy, metabolism, and fat-burning potential.
            </p>
            <Button 
              size="lg" 
              className="bg-mitolyn-accent hover:bg-green-600 text-white px-8 py-6 text-lg rounded-md"
              onClick={() => window.open("https://mitolyn.com/science/?affiliate=nassoro77", "_blank")}
            >
              Learn More
            </Button>
          </div>
          <div className="hidden md:block">
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-white/10 blur-xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb" 
                alt="Healthy living concept" 
                className="w-full h-auto rounded-xl shadow-2xl relative z-10 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
