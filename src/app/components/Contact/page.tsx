import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';


export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };
  return (
    <div id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-serif text-zen-stone mb-6">Prendre contact</h2>
            <p className="text-zen-stone/80 mb-12">
              Veuillez remplir le formulaire ci-dessous ou nous contacter en utilisant nos coordonnées.
            </p>

            <div className="space-y-6">
              <ContactInfo
                icon={<MapPin className="h-6 w-6" />}
                title="Adresse"
                detail="1 chemin du val d'Yerres, 77111 SOIGNOLLES-EN-BRIE"
              />
              <ContactInfo
                icon={<Phone className="h-6 w-6" />}
                title="Téléphone"
                detail="+33 7 69 89 21 08"
              />
              <ContactInfo
                icon={<Mail className="h-6 w-6" />}
                title="Adresse mail"
                detail="silly.laetitia@gmail.com"
              />
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="bg-zen-cream p-8 rounded-lg">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-zen-stone mb-2">
                  Prénom
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full px-4 py-2 rounded-md border border-zen-sage/20 focus:outline-none focus:ring-2 focus:ring-zen-sage"
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-zen-stone mb-2">
                  Nom
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="w-full px-4 py-2 rounded-md border border-zen-sage/20 focus:outline-none focus:ring-2 focus:ring-zen-sage"
                  required
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium text-zen-stone mb-2">
                Adresse mail
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 rounded-md border border-zen-sage/20 focus:outline-none focus:ring-2 focus:ring-zen-sage"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="subject" className="block text-sm font-medium text-zen-stone mb-2">
                Sujet
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-2 rounded-md border border-zen-sage/20 focus:outline-none focus:ring-2 focus:ring-zen-sage"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-zen-stone mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 rounded-md border border-zen-sage/20 focus:outline-none focus:ring-2 focus:ring-zen-sage"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-zen-sage text-white rounded-md hover:bg-zen-moss transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

function ContactInfo({ icon, title, detail }: {
  icon: React.ReactNode;
  title: string;
  detail: string;
}) {
  return (
    <div className="flex items-start space-x-4">
      <div className="text-zen-sage">{icon}</div>
      <div>
        <h3 className="font-serif text-lg text-zen-stone">{title}</h3>
        <p className="text-zen-stone/70">{detail}</p>
      </div>
    </div>
  );
}