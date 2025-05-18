
import { Button } from "@/components/ui/button";
import { Star, ShoppingCart } from "lucide-react";

const MiddleCTA = () => {
  return (
    <section id="middle-cta" className="py-16 bg-mitolyn-primary text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fadeIn">
          Ready to Transform Your Energy Levels?
        </h2>
        <div className="flex justify-center items-center mb-8 animate-fadeIn animation-delay-200">
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="text-yellow-400 fill-yellow-400" size={24} />
            ))}
          </div>
          <span className="ml-2 text-yellow-100">Trusted by thousands of happy customers</span>
        </div>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto opacity-90 animate-fadeIn animation-delay-300">
          Your body deserves the ultimate cellular upgrade that only Mitolyn can provide. Experience the transformation in your energy and vitality today!
        </p>
        
        <div className="flex flex-col items-center animate-fadeIn animation-delay-400">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-6 inline-block">
            <p className="text-lg font-semibold mb-1">Limited Time Offer:</p>
            <p className="text-2xl font-bold text-mitolyn-accent">FREE Shipping on All Orders!</p>
          </div>
          
          <Button 
            size="lg" 
            className="bg-mitolyn-accent hover:bg-green-600 text-white px-8 py-6 text-lg rounded-md transition-all duration-300 shadow-lg hover:shadow-xl animate-bounce-slow"
            onClick={() => window.open("https://mitolyn.com/welcome/?affiliate=nassoro77&tid=homepage", "_blank")}
          >
            <ShoppingCart className="mr-2" /> 
            Start Your Transformation
          </Button>
          <p className="mt-4 text-sm opacity-75">60-day satisfaction guarantee • Secure checkout</p>
        </div>
      </div>
    </section>
  );
};

export default MiddleCTA;
