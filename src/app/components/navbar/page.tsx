import { Menu, X } from "lucide-react";
import React from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <h1 className="text-2xl font-serif text-zen-stone">O bulle de bonheur</h1>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#home">Accueil</NavLink>
            <NavLink href="#concept">Concept</NavLink>
            <NavLink href="#news">Actualités</NavLink>
            <NavLink href="#products">Nos produits</NavLink>
            <NavLink href="#contact">Contact</NavLink>
            <NavLink href="#faq">FAQ</NavLink>
            <button className="px-6 py-2 bg-zen-sage text-white rounded-md hover:bg-zen-moss transition-colors">
              Reserver
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-zen-stone">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
            <MobileNavLink href="#home">Accueil</MobileNavLink>
            <MobileNavLink href="#concept">Concept</MobileNavLink>
            <MobileNavLink href="#news">Actualités</MobileNavLink>
            <MobileNavLink href="#products">Nos produits</MobileNavLink>
            <MobileNavLink href="#contact">Contact</MobileNavLink>
            <MobileNavLink href="#faq">FAQ</MobileNavLink>
            <button className="w-full text-left block px-3 py-2 bg-zen-sage text-white rounded-md">
              Reserver
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="text-zen-stone hover:text-zen-sage transition-colors font-medium"
    >
      {children}
    </a>
  );
}

function MobileNavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="block px-3 py-2 text-zen-stone hover:bg-zen-beige rounded-md transition-colors"
    >
      {children}
    </a>
  );
}