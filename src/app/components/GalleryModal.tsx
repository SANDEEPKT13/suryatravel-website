import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

interface GalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  galleryData: {
    title: string;
    description: string;
    images: Array<{ url: string; caption: string }>;
  };
}

export function GalleryModal({ isOpen, onClose, galleryData }: GalleryModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryData.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryData.images.length) % galleryData.images.length);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/90 z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="fixed inset-4 md:inset-8 lg:inset-12 z-50 bg-gradient-to-br from-[#0B3C5D] to-[#1565C0] rounded-3xl shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-white/10 backdrop-blur-sm p-4 md:p-6 border-b border-white/20">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl text-white mb-2 md:mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {galleryData.title}
                  </h2>
                  <p className="text-sm md:text-base lg:text-lg text-gray-200 leading-relaxed">
                    {galleryData.description}
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="bg-white/90 hover:bg-white p-2 md:p-4 rounded-full transition-all hover:scale-110 flex-shrink-0"
                >
                  <X className="h-5 w-5 md:h-6 md:w-6 text-gray-800" />
                </button>
              </div>
            </div>

            {/* Main Image Display */}
            <div className="flex-1 flex items-center justify-center p-3 md:p-4 relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImageIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-11/12 md:w-4/5 lg:w-3/4 flex flex-col items-center justify-center"
                >
                  <img
                    src={galleryData.images[currentImageIndex].url}
                    alt={galleryData.images[currentImageIndex].caption}
                    loading="lazy"
                    decoding="async"
                    className="max-w-full max-h-96 object-contain rounded-2xl shadow-2xl"
                  />
                  <p
  className="mt-4 md:mt-6 text-base md:text-lg lg:text-xl text-white text-center px-3"
  style={{ fontFamily: 'Poppins, sans-serif' }}
>
                    {galleryData.images[currentImageIndex].caption}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Buttons */}
              {galleryData.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 md:p-4 rounded-full transition-all hover:scale-110"
                  >
                    <ChevronLeft className="h-5 w-5 md:h-6 md:w-6 text-gray-800" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 md:p-4 rounded-full transition-all hover:scale-110"
                  >
                    <ChevronRight className="h-5 w-5 md:h-6 md:w-6 text-gray-800" />
                  </button>
                </>
              )}
            </div>

            {/* Thumbnails */}
            {galleryData.images.length > 1 && (
              <div className="bg-white/10 backdrop-blur-sm p-3 md:p-4 border-t border-white/20">
                <div className="flex gap-2 md:gap-4 overflow-x-auto pb-2">
                  {galleryData.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`flex-shrink-0 w-8 h-8 md:w-12 md:h-12 rounded-lg overflow-hidden border-2 transition-all ${
                        currentImageIndex === index
                          ? 'border-[#FFC107] scale-110'
                          : 'border-white/30 opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={image.url}
                        alt={image.caption}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Image Counter */}
            <div className="absolute top-20 md:top-24 right-4 md:right-8 bg-black/70 text-white px-3 md:px-4 py-1 md:py-2 rounded-full text-sm md:text-base">
              {currentImageIndex + 1} / {galleryData.images.length}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default GalleryModal;
