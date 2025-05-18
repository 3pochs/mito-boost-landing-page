
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
      image: "https://www.lifegate.com/app/uploads/ING_42323_01740-e1448492536261.jpg",
      benefits: [
        "Enhances Mitolyn effectiveness",
        "Supports cardiovascular wellness",
        "Optimizes cholesterol balance"
      ]
    },
    {
      name: "Rhodiola",
      description: "Legendary adaptogenic herb containing 140+ polyphenols that revitalize from within",
      image: "https://media.post.rvohealth.io/wp-content/uploads/2020/09/rhodiola-rosea-thumb-732x549.jpg",
      benefits: [
        "Maximizes Mitolyn potency",
        "Elevates mood & reduces tension",
        "Sharpens cognitive function"
      ]
    },
    {
      name: "Haematococcus",
      description: "Extraordinary red algae concentrated with premium astaxanthin for cellular protection",
      image: "https://www.algaebarn.com/wp-content/uploads/2020/08/red-macro-scaled.jpg",
      benefits: [
        "Boosts Mitolyn performance",
        "Enhances joint flexibility",
        "Strengthens immune defenses"
      ]
    },
    {
      name: "Amla",
      description: "Ancient rejuvenating fruit bursting with flavonoids and vital micronutrients",
      image: "https://post.healthline.com/wp-content/uploads/2020/10/indian-gooseberry-1296x728-header.jpg",
      benefits: [
        "Amplifies Mitolyn benefits",
        "Supports optimal digestion",
        "Enhances visual clarity"
      ]
    },
    {
      name: "Theobroma Cacao",
      description: "Luxurious tropical ingredient rich in epicatechin for whole-body rejuvenation",
      image: "https://storage.googleapis.com/powop-assets/kew_profiles/Theobroma_cacao_STE_The_cac_20100413AM013_crop_web_fullsize.jpg",
      benefits: [
        "Intensifies Mitolyn action",
        "Maintains healthy blood flow",
        "Naturally boosts pleasure response"
      ]
    },
    {
      name: "Schisandra",
      description: "Potent metabolism-boosting berries packed with unique antioxidant compounds",
      image: "https://cdn.shopify.com/s/files/1/0528/8266/9745/files/3_023e48af-fef9-4791-b1f5-d2a35b2811de.jpg?v=1711691985",
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
