'use client';

import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  title?: string;
  description?: string;
}

interface GalleryProps {
  items: GalleryItem[];
  columns?: number;
}

export default function Gallery({ items, columns = 3 }: GalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  const goToNext = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % items.length);
  };

  const goToPrevious = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex - 1 + items.length) % items.length);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') goToNext();
    if (e.key === 'ArrowLeft') goToPrevious();
  };

  const gridCols = columns === 2 ? 'grid-cols-1 md:grid-cols-2' : 
                   columns === 3 ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' :
                   'grid-cols-1 md:grid-cols-2 lg:grid-cols-4';

  return (
    <>
      <div className={`grid ${gridCols} gap-6`}>
        {items.map((item, index) => (
          <div
            key={item.id}
            className="group relative overflow-hidden rounded-2xl aspect-square cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300"
            onClick={() => openLightbox(index)}
          >
            <img
              src={item.src}
              alt={item.alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            {item.title && (
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h4 className="font-bold text-lg">{item.title}</h4>
                {item.description && (
                  <p className="text-sm opacity-90">{item.description}</p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={closeLightbox}
          >
            <X size={32} />
          </button>

          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
          >
            <ChevronLeft size={48} />
          </button>

          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
          >
            <ChevronRight size={48} />
          </button>

          <div className="max-w-5xl max-h-[90vh]">
            <img
              src={items[selectedIndex].src}
              alt={items[selectedIndex].alt}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            {items[selectedIndex].title && (
              <div className="text-white text-center mt-4">
                <h3 className="text-xl font-bold">{items[selectedIndex].title}</h3>
                {items[selectedIndex].description && (
                  <p className="text-gray-300">{items[selectedIndex].description}</p>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
