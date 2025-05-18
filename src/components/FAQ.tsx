
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqItems = [
    {
      question: "What are mitochondria and why do they matter?",
      answer: "Mitochondria are specialized structures within your cells that convert nutrients into energy. They're often called the 'powerhouses of the cell.' They matter because their function directly impacts your energy levels, metabolism, aging process, and overall health. Supporting mitochondrial health can help improve energy production and cellular function throughout your body."
    },
    {
      question: "Is this supplement made with natural ingredients?",
      answer: "Yes, this mitochondrial support supplement is formulated with natural ingredients like Maqui Berry, Rhodiola, Haematococcus algae, Amla, Cacao, and Schisandra. Each ingredient is selected for its specific benefits to cellular health and mitochondrial function."
    },
    {
      question: "How long until I see results?",
      answer: "Most people begin to notice improvements in energy levels within 2-3 weeks of consistent use. However, because the supplement works at the cellular level, optimal results typically develop over 1-3 months of regular use as your body's cells respond to the nutritional support."
    },
    {
      question: "Is it safe for older adults?",
      answer: "Yes, the supplement is particularly beneficial for older adults, as mitochondrial function naturally declines with age. The natural ingredients are well-tolerated across age groups. However, as with any supplement, it's always recommended to consult with your healthcare provider before starting, especially if you have existing health conditions or take medications."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-mitolyn-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-mitolyn-primary">
          Frequently Asked Questions
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="bg-white p-6 rounded-lg shadow-md">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-semibold text-mitolyn-primary">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
