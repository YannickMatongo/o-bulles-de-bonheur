import { Check } from "lucide-react";

export default function Pricing(){

  return(
    <div className="py-24 bg-white" id="products">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-serif text-zen-stone mb-4">Experience Serenity</h2>
        <p className="text-zen-stone/80 max-w-2xl mx-auto">
          Choose the perfect package for your relaxation journey
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <PriceCard
          title="Weekend Escape"
          price={299}
          period="per night"
          description="Perfect for a quick relaxing getaway"
          features={[
            "Deluxe Room",
            "Breakfast Included",
            "Access to Garden",
            "Welcome Drink"
          ]}
          buttonText="Book Weekend"
          isPopular={false}
        />

        <PriceCard
          title="Spa Retreat"
          price={499}
          period="per night"
          description="Immerse yourself in wellness"
          features={[
            "Luxury Suite",
            "Full Board",
            "2 Spa Treatments",
            "Private Hammam Session",
            "Wellness Consultation"
          ]}
          buttonText="Book Retreat"
          isPopular={true}
        />

        <PriceCard
          title="Romantic Package"
          price={599}
          period="per night"
          description="Create unforgettable moments"
          features={[
            "Premium Suite",
            "Champagne & Chocolates",
            "Couples Massage",
            "Private Dinner",
            "Rose Petal Turndown"
          ]}
          buttonText="Book Romance"
          isPopular={false}
        />

        <PriceCard
          title="Serenity Complete"
          price={899}
          period="per night"
          description="The ultimate luxury experience"
          features={[
            "Royal Suite",
            "Full Board Gourmet",
            "Unlimited Spa Access",
            "Private Yoga Session",
            "Airport Transfer",
            "Personal Concierge"
          ]}
          buttonText="Book Complete"
          isPopular={false}
        />
      </div>
    </div>
  </div>
  )
}

function PriceCard({
  title,
  price,
  period,
  description,
  features,
  buttonText,
  isPopular
}: {
  title: string;
  price: number;
  period: string;
  description: string;
  features: string[];
  buttonText: string;
  isPopular: boolean;
}) {
  return (
    <div className={`relative rounded-2xl ${isPopular ? 'ring-2 ring-zen-sage' : 'ring-1 ring-zen-stone/10'} p-8 h-full flex flex-col`}>
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="bg-zen-sage text-white text-sm px-3 py-1 rounded-full">
            Most Popular
          </span>
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-xl font-serif text-zen-stone mb-2">{title}</h3>
        <p className="text-zen-stone/70 text-sm mb-4">{description}</p>
        <div className="flex items-baseline">
          <span className="text-4xl font-serif text-zen-stone">${price}</span>
          <span className="ml-2 text-zen-stone/70">{period}</span>
        </div>
      </div>

      <ul className="space-y-3 mb-8 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-3">
            <Check className="h-5 w-5 text-zen-sage flex-shrink-0" />
            <span className="text-zen-stone/80">{feature}</span>
          </li>
        ))}
      </ul>

      <button
        className={`w-full px-4 py-3 rounded-md transition-colors ${
          isPopular
            ? 'bg-zen-sage text-white hover:bg-zen-moss'
            : 'bg-zen-cream text-zen-stone hover:bg-zen-beige'
        }`}
      >
        {buttonText}
      </button>
    </div>
  );
}