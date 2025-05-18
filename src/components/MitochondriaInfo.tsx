
import { Activity, Zap, Heart } from "lucide-react";

const MitochondriaInfo = () => {
  const infoItems = [
    {
      icon: <Zap size={48} className="text-mitolyn-primary" />,
      title: "Your Cellular Power Plants",
      description: "Mitochondria convert nutrients into ATP, the energy currency your body needs for everything from thinking to exercising."
    },
    {
      icon: <Activity size={48} className="text-mitolyn-primary" />,
      title: "Essential for Fat-Burning",
      description: "Healthy mitochondria are crucial for metabolizing fat and maintaining optimal weight through efficient energy production."
    },
    {
      icon: <Heart size={48} className="text-mitolyn-primary" />,
      title: "Linked to Longevity & Health",
      description: "Research shows that mitochondrial health is directly connected to aging processes and overall wellness."
    }
  ];

  return (
    <section id="what-are-mitochondria" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-mitolyn-primary">
          What Are Mitochondria?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {infoItems.map((item, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-mitolyn-primary">{item.title}</h3>
              <p className="text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MitochondriaInfo;
