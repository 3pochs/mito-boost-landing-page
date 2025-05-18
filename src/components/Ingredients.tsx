
import { useState } from 'react';

interface Ingredient {
  name: string;
  description: string;
  image: string;
  benefits: string[];
}

const Ingredients = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const ingredients: Ingredient[] = [
    {
      name: "Maqui Berry",
      description: "Power-packed purple superfruit loaded with rare anthocyanins for cellular vitality",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
      benefits: [
        "Enhances Mitolyn effectiveness",
        "Supports cardiovascular wellness",
        "Optimizes cholesterol balance"
      ]
    },
    {
      name: "Rhodiola",
      description: "Legendary adaptogenic herb containing 140+ polyphenols that revitalize from within",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
      benefits: [
        "Maximizes Mitolyn potency",
        "Elevates mood & reduces tension",
        "Sharpens cognitive function"
      ]
    },
    {
      name: "Haematococcus",
      description: "Extraordinary red algae concentrated with premium astaxanthin for cellular protection",
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843",
      benefits: [
        "Boosts Mitolyn performance",
        "Enhances joint flexibility",
        "Strengthens immune defenses"
      ]
    },
    {
      name: "Amla",
      description: "Ancient rejuvenating fruit bursting with flavonoids and vital micronutrients",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
      benefits: [
        "Amplifies Mitolyn benefits",
        "Supports optimal digestion",
        "Enhances visual clarity"
      ]
    },
    {
      name: "Theobroma Cacao",
      description: "Luxurious tropical ingredient rich in epicatechin for whole-body rejuvenation",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
      benefits: [
        "Intensifies Mitolyn action",
        "Maintains healthy blood flow",
        "Naturally boosts pleasure response"
      ]
    },
    {
      name: "Schisandra",
      description: "Potent metabolism-boosting berries packed with unique antioxidant compounds",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
      benefits: [
        "Empowers Mitolyn efficacy",
        "Supports liver detoxification",
        "Preserves youthful skin quality"
      ]
    }
  ];

  return (
    <section id="ingredients" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-mitolyn-primary animate-fadeIn">
          Premium Natural Ingredients
        </h2>
        <p className="text-lg text-center max-w-3xl mx-auto mb-12 animate-fadeIn animation-delay-200">
          Each Mitolyn capsule delivers a precise blend of nature's most powerful cellular energizers
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ingredients.map((ingredient, index) => (
            <div 
              key={index} 
              className="bg-mitolyn-background p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative h-48 mb-4 overflow-hidden rounded-md">
                <img 
                  src={ingredient.image} 
                  alt={ingredient.name} 
                  className={`w-full h-full object-cover transition-transform duration-500 ${hoveredIndex === index ? 'scale-110' : 'scale-100'}`}
                />
              </div>
              <h3 className="text-xl font-bold mb-2 text-mitolyn-primary">{ingredient.name}</h3>
              <p className="text-gray-600 mb-4">{ingredient.description}</p>
              <ul>
                {ingredient.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start mb-2">
                    <span className="text-mitolyn-accent mr-2 font-bold">✓</span>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ingredients;
