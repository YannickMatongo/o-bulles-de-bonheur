import { Check } from "lucide-react";

export default function Pricing() {
  return (
    <div className="py-24 bg-white" id="tarif">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {/* title */}
          <h2 className="text-3xl font-serif text-zen-stone mb-4">Tarifs</h2>
          <p className="text-zen-stone/80 max-w-2xl mx-auto">
            Choisissez le forfait idéal pour votre parcours de détente
          </p>
        </div>

        {/* Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <PriceCard
            title="2h - Session Spa Simple"
            price={55}
            period="par personne"
            description="Ne comprend pas de snack ni de boisson"
            features={["Jacuzzi", "Sauna", "Hammam", "2h"]}
            buttonText="Réserver 2h"
            link="#contact"
            isPopular={false}
          />

          <PriceCard
            title="Session Spa Gourmand"
            price={70}
            period="par personne"
            description="Une assiette salée ou sucrée au choix par personne"
            features={[
              "Jacuzzi",
              "Sauna",
              "Hammam",
              "Une assiette sucrée ou salée par personne",
              "2h",
            ]}
            buttonText="Réserver 2h"
            link="#contact"
            isPopular={true}
          />

          <PriceCard
            title="Session Spa Brunch"
            price={90}
            period="par personne"
            description="Uniquement le dimanche à partir de 11h"
            features={[
              "Jacuzzi",
              "Sauna",
              "Hammam",
              "Un brunch par personne",
              "3h",
            ]}
            buttonText="Réserver 3h"
            link="#contact"
            isPopular={false}
          />

          <PriceCard
            title="Session Spa Montagnard"
            price={90}
            period="par personne"
            description="1 repas à partager (adapté au nombre de personnes)"
            features={[
              "Jacuzzi",
              "Sauna",
              "Hammam",
              "Private Yoga Session",
              "1 repas à partager au choix",
              "Raclette (halal sur demande), tartiflette, fondue savoyarde",
              "3h",
            ]}
            buttonText="Réserver 3h"
            link="#contact"
            isPopular={false}
          />
        </div>
      </div>
    </div>
  );
}

function PriceCard({
  title,
  price,
  period,
  description,
  features,
  buttonText,
  link,
  isPopular,
}: {
  title: string;
  price: number;
  period: string;
  description: string;
  features: string[];
  buttonText: string;
  link: string;
  isPopular: boolean;
}) {
  return (
    <a
      href={link}
      className={`block relative rounded-2xl ${isPopular ? 'ring-2 ring-zen-sage' : 'ring-1 ring-zen-stone/10'} p-8 h-full flex flex-col transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:ring-2 hover:ring-[#8B9D83]`}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="bg-zen-sage text-white text-sm px-3 py-1 rounded-full">
            Populaire
          </span>
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-xl font-serif text-zen-stone mb-2">{title}</h3>
        <p className="text-zen-stone/70 text-sm mb-4">{description}</p>
        <div className="flex items-baseline">
          <span className="text-4xl font-serif text-zen-stone">{price}€</span>
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
        className={`w-full px-4 py-3 rounded-md transition-colors duration-300 ${
          isPopular
            ? 'bg-zen-sage text-white hover:bg-[#8B9D83]'
            : 'bg-zen-cream text-zen-stone hover:bg-[#8B9D83] hover:text-white'
        }`}
      >
        {buttonText}
      </button>
    </a>
  );
}
