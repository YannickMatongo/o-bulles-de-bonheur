import React from 'react';
import { Facebook, Instagram, Leaf, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer(){

  return(
    <footer className="bg-zen-stone text-zen-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="h-6 w-6" />
              <span className="text-xl font-serif">Serenity Haven</span>
            </div>
            <p className="text-zen-beige/80 mb-4">
              Your sanctuary of peace and wellness in the heart of nature.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="#" icon={<Facebook className="h-5 w-5" />} />
              <SocialLink href="#" icon={<Instagram className="h-5 w-5" />} />
              <SocialLink href="#" icon={<Mail className="h-5 w-5" />} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <FooterLink href="#home">Accueil</FooterLink>
              <FooterLink href="#concept">Concept</FooterLink>
              <FooterLink href="#news">Actualités</FooterLink>
              <FooterLink href="#products">Nos produits</FooterLink>
              <FooterLink href="#contact">Contact</FooterLink>
              <FooterLink href="#faq">FAQ</FooterLink>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-lg mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 shrink-0 mt-1" />
                <span className="text-zen-beige/80">1 chemin du val d'Yerres, 77111 SOIGNOLLES-EN-BRIE</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0" />
                <span className="text-zen-beige/80">+33 7 69 89 21 08</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0" />
                <span className="text-zen-beige/80">silly.laetitia@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-serif text-lg mb-4">Newsletter</h3>
            <p className="text-zen-beige/80 mb-4">
              Subscribe to receive updates about our latest offers and wellness tips.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 bg-white/10 rounded-md placeholder-zen-beige/50 border border-zen-beige/20 focus:outline-none focus:ring-2 focus:ring-zen-sage"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-zen-sage text-white rounded-md hover:bg-zen-moss transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 mt-8 border-t border-zen-beige/20 text-center text-zen-beige/60">
          <p>© {new Date().getFullYear()} Serenity Haven. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <a
        href={href}
        className="text-zen-beige/80 hover:text-zen-beige transition-colors"
      >
        {children}
      </a>
    </li>
  );
}