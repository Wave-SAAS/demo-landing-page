/** @format */

import Price from "./Price";

const Pricing = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
        Pricing
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-stretch md:grid-cols-4 md:gap-8">
        {pricingData.map((data) => (
          <Price
            key={data.id}
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
    id: "60be839d-1a55-4a02-884b-1c96f363e3c4",
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
    id: "8fdb45d3-ee85-462a-9c71-38d9d016b9c9",
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
    id: "7ab04437-10f4-4ebc-ac20-1cd43ed8da27",
    name: "NGO",
    description: "NGO plan",
    monthlyPrice: "$15",
    m: "/m",
    features: ["Advanced analytics", "Priority support", "Larger send limits"],
  },
  {
    id: "7d21caca-3b11-41c5-ace4-fe7ab708c624",
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
