
import { Button } from "@/components/ui/button";
import { ShoppingCart, ZapIcon } from "lucide-react";

const FinalCTA = () => {
  return (
    <section id="final-cta" className="py-20 bg-mitolyn-primary text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-transparent"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 animate-fadeIn">
          Support Your Cells. Feel the Change.
        </h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90 animate-fadeIn animation-delay-200">
          Take the first step toward a more energized, healthier you. Mitolyn is waiting to transform your daily vitality.
        </p>
        <div className="flex flex-col items-center animate-fadeIn animation-delay-300">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-6 inline-block">
            <div className="flex items-center justify-center space-x-4">
              <div className="text-center">
                <p className="text-sm uppercase tracking-wide">Was: <span className="line-through">$79.95</span></p>
                <p className="text-3xl font-bold text-mitolyn-accent">Now: $59.95</p>
              </div>
              <div className="h-12 w-px bg-white/30"></div>
              <div className="text-center">
                <p className="text-sm uppercase tracking-wide">Save</p>
                <p className="text-2xl font-bold text-mitolyn-accent">25%</p>
              </div>
            </div>
          </div>
          
          <Button 
            size="lg" 
            className="bg-mitolyn-accent hover:bg-green-600 text-white px-8 py-6 text-lg rounded-md group transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-glow animate-pulse-slow"
            onClick={() => window.open("https://mitolyn.com/welcome/?affiliate=nassoro77&tid=homepage", "_blank")}
          >
            <ShoppingCart className="mr-2" />
            Buy Now - 100% Guaranteed
          </Button>
          <p className="mt-4 text-sm opacity-75">Free shipping • 60-day money back guarantee • Secure payment</p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
