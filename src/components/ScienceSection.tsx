
const ScienceSection = () => {
  return (
    <section id="science" className="py-20 bg-mitolyn-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-mitolyn-primary animate-fadeIn">
          The Science Behind Energy & Weight Loss
        </h2>
        
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <p className="text-lg text-gray-700 mb-6 animate-fadeIn animation-delay-200">
            Mitochondria are the powerhouses inside each cell that convert food into usable energy. When these cellular engines are functioning optimally, your metabolism works efficiently, energy levels increase, and fat-burning potential is maximized.
          </p>
          
          <p className="text-lg text-gray-700 mb-8 animate-fadeIn animation-delay-300">
            <span className="font-semibold">The key to sustainable weight management</span> isn't just about calories in versus calories out—it's about how efficiently your body <span className="text-mitolyn-accent font-bold">transforms those calories into energy rather than storing them as fat</span>. Mitolyn targets this fundamental process at the cellular level.
          </p>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <h3 className="text-xl font-bold mb-4 text-mitolyn-primary">
              Natural Support for Your Weight Management
            </h3>
            <ul className="text-left grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Enhances cellular energy production",
                "Optimizes fat metabolism",
                "Supports healthy weight management",
                "Reduces fatigue during workouts",
                "Powered by natural ingredients",
                "Boosts metabolic efficiency"
              ].map((item, index) => (
                <li key={index} className="flex items-center animate-fadeIn" style={{animationDelay: `${index * 100}ms`}}>
                  <span className="text-mitolyn-accent mr-2">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScienceSection;
