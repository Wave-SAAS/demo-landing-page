import Button from "./Button";

const Price = ({ name, description, monthlyPrice, m, features }: PriceProps) => {
  return (
    <div className="rounded-2xl border border-gray-200 shadow-xs">
      <div className="p-6 sm:px-8">
        <h2 className="text-lg font-medium text-gray-900">{name}</h2>
        <p className="text-gray-700">{description}</p>

        <p className="mt-2 sm:mt-4">
          <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">
            {monthlyPrice}
          </strong>
          <span className="text-sm font-medium text-gray-500">{m}</span>
        </p>
      </div>

      <div className="p-6 sm:px-8">
        <p className="text-lg font-medium text-gray-900">This plan includes:</p>

        <ul className="mt-2 space-y-2 sm:mt-4 text-sm font-medium">
          {features.map((feature) => (
            <li key={feature}> ● {feature}</li>
          ))}
        </ul>
      </div>

      <div className="mx-16 my-10">
        <Button />
      </div>
    </div>
  );
};

export default Price

interface PriceProps {
  name: string;
  description: string;
  monthlyPrice: string;
  m: string
  features: Array<string>;
}