import React from 'react';

export default function Massage() {
  return (
    <div className="container mx-auto px-4 lg:px-8 pb-12">
      <div className="flex flex-col lg:flex-row lg:gap-12 gap-8 items-stretch">
        {/* Image Section */}
        <div className="lg:w-1/2">
          <div className="relative h-full rounded-xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80"
              alt="Luxury spa treatment room"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          </div>
        </div>

        {/* Pricing Card */}
        <div className="lg:w-1/2">
          <div className="h-full relative rounded-xl ring-1 ring-zen-sage/30 p-6 bg-white shadow-sm">
            <div className="mb-4">
              <h3 className="text-2xl font-serif text-zen-stone">Serenity Complete</h3>
              <div className="flex items-baseline mt-2">
                <span className="text-3xl font-serif text-zen-stone">$899</span>
                <span className="ml-2 text-zen-stone/70">per night</span>
              </div>
            </div>

            <p className="text-zen-stone/70 mb-6">
              The ultimate luxury wellness experience
            </p>

            <ul className="space-y-3 mb-6">
              <Feature price="$200" text="Royal Suite with Premium Amenities" />
              <Feature price="$150" text="Full Board Gourmet Dining" />
              <Feature price="$100" text="Unlimited Access to Spa & Hammam" />
              <Feature price="$80" text="Daily Private Yoga Session" />
              <Feature price="$60" text="Complimentary Airport Transfer" />
              <Feature price="$120" text="Personal Wellness Concierge" />
            </ul>

            <button className="w-full px-6 py-3 bg-zen-sage text-white rounded-md hover:bg-zen-moss transition-colors">
              Book Your Experience
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Feature Component with price and text
function Feature({ price, text }: { price: string, text: string }) {
  return (
    <li className="flex items-center gap-3">
      <span className="text-zen-sage font-semibold">{price}</span>
      <span className="text-zen-stone/80">{text}</span>
    </li>
  );
}
