
const ScienceSection = () => {
  return (
    <section id="science" className="py-20 bg-mitolyn-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-mitolyn-primary">
          The Science Behind Energy & Fat Loss
        </h2>
        
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <p className="text-lg text-gray-700 mb-8">
            Mitochondria are the powerhouses inside each cell that convert food into usable energy. When these cellular engines are functioning optimally, your metabolism works efficiently, energy levels increase, and fat-burning potential is maximized. Natural support for your mitochondria creates a foundation for better overall health and vitality.
          </p>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4 text-mitolyn-primary">
              Natural Support for Your Cellular Health
            </h3>
            <ul className="text-left grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Boosts cellular energy production",
                "Supports healthy metabolism",
                "Helps reduce fatigue",
                "Powered by natural ingredients"
              ].map((item, index) => (
                <li key={index} className="flex items-center">
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
