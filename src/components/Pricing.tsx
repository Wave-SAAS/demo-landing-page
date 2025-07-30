/** @format */

import Price from "./Price";

const Pricing = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <h2 className="text-2xl font-medium text-center text-gray-900 mb-16">
        Pricing
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-stretch md:grid-cols-4 md:gap-8">
        {pricingData.map((data) => (
          <Price
            name={data.name}
            description={data.description}
            monthlyPrice={data.monthlyPrice}
            m={data.m}
            features={data.features}
          />
        ))}
      </div>
    </div>
  );
};

export default Pricing;

const pricingData = [
  {
    name: "Startup",
    description: "Startup plan",
    monthlyPrice: "$9",
    m: "/m",
    features: [
      "AI-powered segmentation",
      "Basic bulk emailing",
      "Import custom designs",
    ],
  },
  {
    name: "Teams",
    description: "Team plan",
    monthlyPrice: "$12",
    m: "/m",
    features: [
      "Enhanced filtering",
      "Integrations (Canva, Figma)",
      "Personalization tools",
    ],
  },
  {
    name: "NGO",
    description: "NGO plan",
    monthlyPrice: "$15",
    m: "/m",
    features: ["Advanced analytics", "Priority support", "Larger send limits"],
  },
  {
    name: "Business",
    description: "Enterprise plan",
    monthlyPrice: "Custom",
    m: "",
    features: [
      "AI-powered segmentation",
      "Basic bulk emailing",
      "Import custom designs",
    ],
  },
];


