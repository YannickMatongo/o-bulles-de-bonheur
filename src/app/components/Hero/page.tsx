import React from 'react';
import Image from 'next/image';
import Logo from '/public/img/logo2.png';  // Vérifiez que le chemin est correct

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-zen-cream" id="home">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80"
          className="w-full h-full object-cover"
          alt="Peaceful bedroom interior"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        {/* Logo avec Image de Next.js */}
        {/* <Image
          src={Logo}
          alt="Logo"  // Ajoutez un alt pour l'accessibilité
          className='mx-auto h-100 mb-8'  // Augmentation de la taille de l'image
        /> */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-white mb-6">
          Bienvenue au O Bulles de Bonheur
        </h1>
        <p className="text-xl sm:text-2xl text-zen-beige mb-8 max-w-3xl mx-auto">
          Offrez-vous un moment de pure détente dans notre spa privé
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-zen-sage text-white rounded-md hover:bg-zen-moss transition-colors">
            Réserver
          </button>
          <button className="px-8 py-3 bg-white/10 backdrop-blur-sm text-white border-2 border-white rounded-md hover:bg-white/20 transition-colors">
            Les services
          </button>
        </div>
      </div>
    </div>
  );
}
