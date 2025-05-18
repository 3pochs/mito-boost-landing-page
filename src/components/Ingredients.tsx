
interface Ingredient {
  name: string;
  description: string;
  image: string;
  benefits: string[];
}

const Ingredients = () => {
  const ingredients: Ingredient[] = [
    {
      name: "Maqui Berry",
      description: "Exotic purple fruit packed full of the special antioxidant anthocyanin",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
      benefits: [
        "Promotes mitochondria",
        "Supports a healthy heart",
        "Supports healthy cholesterol"
      ]
    },
    {
      name: "Rhodiola",
      description: "Adaptogen bursting with over 140 polyphenols like rosavin and salidroside",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
      benefits: [
        "Promotes mitochondria",
        "Reduces stress & improves mood",
        "Supports brain health"
      ]
    },
    {
      name: "Haematococcus",
      description: "Unique red algae crammed full of the mighty red antioxidant astaxanthin",
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843",
      benefits: [
        "Promotes mitochondria",
        "Supports healthy joints",
        "Supports immune response"
      ]
    },
    {
      name: "Amla",
      description: "Special fruit rich in flavonoids, antioxidants and essential nutrients",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
      benefits: [
        "Promotes mitochondria",
        "Supports healthy digestion",
        "Supports vision"
      ]
    },
    {
      name: "Theobroma Cacao",
      description: "Tropical superfood overflowing with epicatechin - a natural flavonoid",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
      benefits: [
        "Promotes mitochondria",
        "Supports healthy blood pressure",
        "Natural aphrodisiac"
      ]
    },
    {
      name: "Schisandra",
      description: "Powerful calorie-burning red berries brimming with antioxidant compounds",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
      benefits: [
        "Promotes mitochondria",
        "Supports liver health",
        "Maintains skin elasticity"
      ]
    }
  ];

  return (
    <section id="ingredients" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-mitolyn-primary">
          Powerful Natural Ingredients
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ingredients.map((ingredient, index) => (
            <div key={index} className="bg-mitolyn-background p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-48 mb-4 overflow-hidden rounded-md">
                <img 
                  src={ingredient.image} 
                  alt={ingredient.name} 
                  className="w-full h-full object-cover"
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
