
import { Button } from "@/components/ui/button";

const MiddleCTA = () => {
  return (
    <section id="middle-cta" className="py-16 bg-mitolyn-primary text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Feel the Difference?
        </h2>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto opacity-90">
          Your body is waiting for the cellular upgrade it deserves. Support your mitochondria and experience the transformation in your energy and vitality.
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

export default MiddleCTA;
