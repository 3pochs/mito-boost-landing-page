
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
      mitochondrial: "Sustained natural energy throughout the day"
    },
    {
      category: "Root cause focus",
      typical: "Addresses symptoms only",
      mitochondrial: "Targets cellular health for lasting results"
    },
    {
      category: "Fat metabolism",
      typical: "Limited effect on metabolism",
      mitochondrial: "Optimizes cells' ability to burn fat efficiently"
    },
    {
      category: "Long-term benefits",
      typical: "Minimal long-term health advantages",
      mitochondrial: "Supports overall vitality and longevity"
    }
  ];

  return (
    <section id="comparison" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-mitolyn-primary">
          Why Mitochondrial Support Makes the Difference
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-1/3">Category</TableHead>
                  <TableHead className="w-1/3">Typical Supplements</TableHead>
                  <TableHead className="w-1/3">Mitochondria Support</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {comparisonItems.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{item.category}</TableCell>
                    <TableCell className="text-gray-700">{item.typical}</TableCell>
                    <TableCell className="text-mitolyn-primary font-semibold">{item.mitochondrial}</TableCell>
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
