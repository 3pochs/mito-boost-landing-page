
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

interface Testimonial {
  name: string;
  age: number;
  text: string;
  initials: string;
}

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      name: "Lisa M.",
      age: 43,
      text: "After 3 weeks, I noticed real changes in my energy levels. I used to need multiple coffees to get through the day, but now I feel naturally energized from morning to evening.",
      initials: "LM"
    },
    {
      name: "David S.",
      age: 51,
      text: "I didn't expect to feel this good again. The difference in my metabolism is noticeable, and friends have been asking what my secret is. I'm sleeping better and waking up refreshed.",
      initials: "DS"
    },
    {
      name: "Sarah T.",
      age: 38,
      text: "As someone who's tried many supplements over the years, this is one of the few that has made a tangible difference. My focus is sharper and I feel more resilient to stress.",
      initials: "ST"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-mitolyn-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-mitolyn-primary">
          What People Are Saying
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <Avatar className="h-12 w-12 mr-4 bg-mitolyn-primary text-white">
                    <AvatarFallback>{testimonial.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-bold">{testimonial.name}, {testimonial.age}</p>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-400">★</span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.text}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
