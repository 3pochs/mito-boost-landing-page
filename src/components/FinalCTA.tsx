
import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  return (
    <section id="final-cta" className="py-20 bg-mitolyn-primary text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Support Your Cells. Feel the Change.
        </h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
          Take the first step toward a more energized, healthier you. Your mitochondria are waiting for the support they deserve.
        </p>
        <Button 
          size="lg" 
          className="bg-mitolyn-accent hover:bg-green-600 text-white px-8 py-6 text-lg rounded-md"
          onClick={() => window.open("https://mitolyn.com/welcome/?affiliate=nassoro77&tid=homepage", "_blank")}
        >
          Buy Now
        </Button>
      </div>
    </section>
  );
};

export default FinalCTA;
