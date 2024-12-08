import React from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

type MediaItem = {
  type: 'image' | 'video';
  src: string;
  title: string;
  description: string;
  videoSrc?: string; // Optionnel pour les images
};

const mediaItems: MediaItem[] = [
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39',
    title: 'Luxury Suite',
    description: 'Experience unparalleled comfort in our premium suites',
  },
  {
    type: 'video',
    src: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d',
    videoSrc: 'https://player.vimeo.com/video/476281703',
    title: 'Suite Tour',
    description: 'Take a virtual walk through our luxurious accommodations',
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1610708275938-7f736a7f9184',
    title: 'Traditional Hammam',
    description: 'Authentic hammam experience',
  },
  {
    type: 'video',
    src: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a',
    videoSrc: 'https://player.vimeo.com/video/476281703',
    title: 'Spa Journey',
    description: 'Discover our wellness facilities',
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1545579133-99bb5ab189bd',
    title: 'Luxury Sauna',
    description: 'Modern sauna with chromotherapy',
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1582653291997-079a1c04e5a1',
    title: 'Spa Treatment',
    description: 'Professional spa treatments',
  },
];

export default function MediaCarousel() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [activeVideo, setActiveVideo] = React.useState<string | null>(null);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % mediaItems.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + mediaItems.length) % mediaItems.length);
  };

  const handleThumbnailClick = (index: number) => {
    setActiveIndex(index);
    setActiveVideo(mediaItems[index].type === 'video' ? mediaItems[index].videoSrc || null : null);
  };

  return (
    <div className="bg-white rounded-2xl p-8 md:p-12">
      <h2 className="text-3xl font-serif text-zen-stone mb-8 text-center">
        Discover Our Haven
      </h2>

      {/* Main Display */}
      <div className="mb-8">
        <div className="relative aspect-[16/9] rounded-xl overflow-hidden">
          {mediaItems[activeIndex].type === 'video' ? (
            <button
              onClick={() => setActiveVideo(mediaItems[activeIndex].videoSrc || null)}
              className="group relative w-full h-full"
            >
              <img
                src={`${mediaItems[activeIndex].src}?auto=format&fit=crop&w=1920&q=80`}
                alt={mediaItems[activeIndex].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition-colors">
                <Play className="w-20 h-20 text-white opacity-80 group-hover:opacity-100 transition-opacity" />
              </div>
            </button>
          ) : (
            <img
              src={`${mediaItems[activeIndex].src}?auto=format&fit=crop&w=1920&q=80`}
              alt={mediaItems[activeIndex].title}
              className="w-full h-full object-cover"
            />
          )}
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white bg-gradient-to-t from-black/70 to-transparent">
            <h3 className="font-serif text-2xl mb-2">{mediaItems[activeIndex].title}</h3>
            <p className="text-white/90">{mediaItems[activeIndex].description}</p>
          </div>
        </div>
      </div>

      {/* Thumbnails Navigation */}
      <div className="relative px-12">
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 p-2 bg-zen-sage/10 hover:bg-zen-sage/20 rounded-full text-zen-sage transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-4">
          {mediaItems.map((item, idx) => (
            <button
              key={idx}
              onClick={() => handleThumbnailClick(idx)}
              className={`relative aspect-video rounded-lg overflow-hidden ${
                idx === activeIndex ? 'ring-2 ring-zen-sage' : 'opacity-60 hover:opacity-100'
              }`}
            >
              <img
                src={`${item.src}?auto=format&fit=crop&w=300&q=80`}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              {item.type === 'video' && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                  <Play className="w-8 h-8 text-white" />
                </div>
              )}
            </button>
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 p-2 bg-zen-sage/10 hover:bg-zen-sage/20 rounded-full text-zen-sage transition-colors"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Video Modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          onClick={() => setActiveVideo(null)}
        >
          <div className="w-full max-w-6xl mx-4">
            <div className="relative pt-[56.25%]">
              <iframe
                src={activeVideo}
                className="absolute inset-0 w-full h-full"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
