import React from 'react';
import { Facebook, Instagram, Leaf, Mail, MapPin, Phone } from 'lucide-react';
import Logo from "/public/img/logo2.png";
import Image from 'next/image';
export default function Footer(){

  return(
    <footer className="bg-zen-stone text-zen-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className='flex flex-col items-center text-center'>
            <div className="flex items-center gap-2 mb-4">
              {/* <Leaf className="h-6 w-6" /> */}
              <Image
              src={Logo}
              alt="logo"
              width={100} 
              height={100} 
              className="w-15 h-15 sm:w-20 sm:h-18 lg:w-22 lg:h-20" 
            />
              <span className="text-2xlfont-serif">O Bulles De Bonheur</span>
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
          <div className='flex flex-col items-center text-center'>
            <h3 className="font-serif text-2xl mb-4">Liens</h3>
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
          <div className='flex flex-col items-center text-center'>
            <h3 className="font-serif text-2xl mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 shrink-0 mt-1" />
                <span className="text-zen-beige/80">1 chemin du val d'Yerres,<br/> 77111 SOIGNOLLES-EN-BRIE</span>
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