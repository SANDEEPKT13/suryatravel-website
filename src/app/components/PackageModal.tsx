import { motion, AnimatePresence } from 'motion/react';
import { X, Car, DollarSign, Star, MapPin, Clock, Users, CheckCircle, Sparkles } from 'lucide-react';

interface PackageModalProps {
  isOpen: boolean;
  onClose: () => void;
  packageData: {
    name: string;
    image: string;
    duration: string;
    price: string;
    overview: string;
    carTypes: Array<{ name: string; price: string; seats: string }>;
    pricing: Array<{ item: string; detail: string }>;
    whyChoose: string[];
    highlights: string[];
  };
}

export function PackageModal({ isOpen, onClose, packageData }: PackageModalProps) {
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
            className="fixed inset-0 bg-black/70 z-50 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="fixed inset-4 md:inset-8 lg:inset-16 z-50 rounded-3xl shadow-2xl overflow-hidden flex flex-col"
            style={{
              backgroundImage: `url(${packageData.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80 pointer-events-none" />
            
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 bg-white/90 hover:bg-white p-2 md:p-3 rounded-full transition-all hover:scale-110 z-20 cursor-pointer"
              type="button"
            >
              <X className="h-5 w-5 md:h-6 md:w-6 text-gray-800" />
            </button>

            {/* Header Section */}
            <div className="relative z-10 pt-6 md:pt-8 px-4 md:px-8">
              <h2 className="text-2xl md:text-4xl lg:text-5xl text-white mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {packageData.name}
              </h2>
              <div className="flex flex-wrap gap-4 text-white text-sm md:text-base">
                <span className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  {packageData.duration}
                </span>
                <span className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5" />
                  Starting {packageData.price}
                </span>
              </div>
            </div>

            {/* Scrollable Content with Glass Effect */}
            <div className="flex-1 overflow-y-auto p-4 md:p-8 relative z-10 mt-4">
              <div className="max-w-6xl mx-auto space-y-6 md:space-y-8">
                {/* Overview */}
                <section className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 md:p-6 shadow-lg">
                  <h3 className="text-xl md:text-2xl lg:text-3xl mb-3 md:mb-4 text-[#0B3C5D]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Package Overview
                  </h3>
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                    {packageData.overview}
                  </p>
                </section>

                {/* Car Types Available */}
                <section className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 md:p-6 shadow-lg">
                  <h3 className="text-xl md:text-2xl lg:text-3xl mb-4 md:mb-6 text-[#0B3C5D] flex items-center gap-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    <Car className="h-6 w-6 md:h-8 md:w-8 text-[#FFC107]" />
                    Available Car Options
                  </h3>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {packageData.carTypes.map((car, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-gradient-to-br from-[#FFFDF8] to-white border-2 border-[#FFC107] rounded-xl p-4 md:p-6"
                      >
                        <h4 className="text-lg md:text-xl mb-2 md:mb-3 text-[#0B3C5D]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                          {car.name}
                        </h4>
                        <p className="text-sm md:text-base text-gray-600 mb-2 flex items-center gap-2">
                          <Users className="h-4 w-4 md:h-5 md:w-5 text-[#1ABC9C]" />
                          {car.seats}
                        </p>
                        <p className="text-xl md:text-2xl text-[#FFC107]">{car.price}</p>
                      </motion.div>
                    ))}
                  </div>
                </section>

                {/* Pricing Details */}
                <section className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 md:p-6 shadow-lg">
                  <h3 className="text-xl md:text-2xl lg:text-3xl mb-4 md:mb-6 text-[#0B3C5D] flex items-center gap-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    <DollarSign className="h-6 w-6 md:h-8 md:w-8 text-[#1ABC9C]" />
                    Pricing Details
                  </h3>
                  <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-4 md:p-6 border-2 border-gray-200">
                    <div className="space-y-3 md:space-y-4">
                      {packageData.pricing.map((item, index) => (
                        <div key={index} className="flex justify-between items-start gap-4 pb-3 md:pb-4 border-b border-gray-200 last:border-0">
                          <span className="text-sm md:text-base lg:text-lg text-gray-700">{item.item}</span>
                          <span className="text-sm md:text-base lg:text-lg text-[#0B3C5D] font-semibold text-right">{item.detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* Why Choose This Package */}
                <section className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 md:p-6 shadow-lg">
                  <h3 className="text-xl md:text-2xl lg:text-3xl mb-4 md:mb-6 text-[#0B3C5D] flex items-center gap-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    <Star className="h-6 w-6 md:h-8 md:w-8 text-[#FF6F00]" />
                    Why Choose This Package
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-3 md:gap-4">
                    {packageData.whyChoose.map((reason, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-3 bg-white p-3 md:p-4 rounded-lg shadow-md"
                      >
                        <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-[#1ABC9C] flex-shrink-0 mt-1" />
                        <span className="text-sm md:text-base lg:text-lg text-gray-700">{reason}</span>
                      </motion.div>
                    ))}
                  </div>
                </section>

                {/* Tour Highlights */}
                <section className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 md:p-6 shadow-lg">
                  <h3 className="text-xl md:text-2xl lg:text-3xl mb-4 md:mb-6 text-[#0B3C5D] flex items-center gap-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    <Sparkles className="h-6 w-6 md:h-8 md:w-8 text-[#FFC107]" />
                    Tour Highlights
                  </h3>
                  <div className="bg-gradient-to-br from-[#FFC107] to-[#FF6F00] rounded-xl p-4 md:p-6 text-white">
                    <div className="space-y-2 md:space-y-3">
                      {packageData.highlights.map((highlight, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start gap-3"
                        >
                          <MapPin className="h-5 w-5 md:h-6 md:w-6 flex-shrink-0 mt-1" />
                          <span className="text-sm md:text-base lg:text-lg">{highlight}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* Book Now Button */}
                <div className="flex gap-4 pt-4 pb-4">
                  <button className="flex-1 bg-gradient-to-r from-[#FFC107] to-[#FF6F00] text-white py-2 md:py-3 px-4 md:px-6 rounded-xl text-sm md:text-base font-semibold hover:shadow-xl transition-all hover:scale-105">
                    Book This Package Now
                  </button>
                  <button 
                    onClick={onClose}
                    className="px-4 md:px-6 py-2 md:py-3 border-2 border-white text-white rounded-xl text-sm md:text-base font-semibold hover:bg-white/20 transition-all"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
