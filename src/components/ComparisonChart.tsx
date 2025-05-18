
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const ComparisonChart = () => {
  const comparisonItems = [
    {
      category: "Energy sustainability",
      typical: "Temporary energy boost that fades quickly",
      mitolyn: "Sustained natural energy throughout the day"
    },
    {
      category: "Root cause focus",
      typical: "Addresses symptoms only",
      mitolyn: "Targets cellular health for lasting results"
    },
    {
      category: "Fat metabolism",
      typical: "Limited effect on metabolism",
      mitolyn: "Optimizes cells' ability to burn fat efficiently"
    },
    {
      category: "Long-term benefits",
      typical: "Minimal long-term health advantages",
      mitolyn: "Supports overall vitality and longevity"
    }
  ];

  return (
    <section id="comparison" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-mitolyn-primary animate-fadeIn">
          Why Mitolyn Makes the Difference
        </h2>
        
        <div className="max-w-4xl mx-auto animate-fadeIn animation-delay-300">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-1/3">Category</TableHead>
                  <TableHead className="w-1/3">Typical Supplements</TableHead>
                  <TableHead className="w-1/3">Mitolyn</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {comparisonItems.map((item, index) => (
                  <TableRow key={index} className={`animate-fadeIn animation-delay-${index*2 + 4}00`}>
                    <TableCell className="font-medium">{item.category}</TableCell>
                    <TableCell className="text-gray-700">{item.typical}</TableCell>
                    <TableCell className="text-mitolyn-primary font-semibold">{item.mitolyn}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonChart;
