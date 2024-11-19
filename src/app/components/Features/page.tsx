'use client'
import { Bath, Bed, Coffee, Wifi } from "lucide-react";

export default function Features() {

  return (
    <div className="py-24 bg-zen-cream" id="concept">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-serif text-zen-stone mb-4">Nos services</h2>
        <p className="text-zen-stone/80 max-w-2xl mx-auto">
          Immerse yourself in comfort with our carefully curated amenities designed for your relaxation
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <FeatureCard
          icon={<Bed className="h-8 w-8" />}
          title="Luxury Rooms"
          description="Spacious rooms with premium bedding and stunning views"
        />
        <FeatureCard
          icon={<Bath className="h-8 w-8" />}
          title="Spa & Hammam"
          description="Traditional hammam and modern spa treatments"
        />
        <FeatureCard
          icon={<Coffee className="h-8 w-8" />}
          title="Gourmet Breakfast"
          description="Fresh, local ingredients served daily"
        />
        <FeatureCard
          icon={<Wifi className="h-8 w-8" />}
          title="Modern Amenities"
          description="High-speed WiFi and modern conveniences"
        />
      </div>
    </div>
  </div>
  );
}

function FeatureCard({ icon, title, description }: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="text-zen-sage mb-4">{icon}</div>
      <h3 className="text-xl font-serif text-zen-stone mb-2">{title}</h3>
      <p className="text-zen-stone/70">{description}</p>
    </div>
  );
}