import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import Masonry from 'react-responsive-masonry';
import {
  Car,
  Shield,
  Clock,
  Users,
  MapPin,
  Star,
  Phone,
  Mail,
  CheckCircle,
  Trophy,
  Smile,
  Navigation,
  DollarSign,
  Sparkles,
  Camera,
  HeartHandshake,
  Bus,
  Film,
  Heart,
  MessageCircle,
  Calendar,
  Award,
  Zap,
  ThumbsUp,
  Globe,
  ChevronRight,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
} from 'lucide-react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';

// Counter animation hook
function useCounter(end: number, duration: number = 2000, shouldStart: boolean = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;
    
    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / duration;

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, shouldStart]);

  return count;
}

export default function App() {
  const [statsInView, setStatsInView] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsInView(true);
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const yearsCount = useCounter(20, 2000, statsInView);
  const customersCount = useCounter(50000, 2000, statsInView);
  const vehiclesCount = useCounter(100, 2000, statsInView);

  return (
    <div className="min-h-screen bg-[#FFFDF8]">
      {/* Header */}
      <header className="bg-[#0B3C5D] text-white py-3 sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-[#FFC107] p-2 rounded-lg">
                <Car className="h-8 w-8 text-[#0B3C5D]" />
              </div>
              <div>
                <h1 className="text-2xl font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  RidePlus Travels
                </h1>
                <p className="text-xs text-[#FFC107]">Your Journey, Our Priority</p>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#services" className="hover:text-[#FFC107] transition-colors">Services</a>
              <a href="#fleet" className="hover:text-[#FFC107] transition-colors">Fleet</a>
              <a href="#packages" className="hover:text-[#FFC107] transition-colors">Tour Packages</a>
              <a href="#contact" className="bg-[#FFC107] text-[#0B3C5D] px-6 py-2 rounded-full font-semibold hover:bg-[#FFD54F] transition-all">
                Book Now
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0B3C5D] via-[#1565C0] to-[#0B3C5D] text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1614295334477-885b757c8ad3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXhpJTIwY2FyJTIwcmVudGFsJTIwaW5kaWF8ZW58MXx8fHwxNzY1NjQ3MjM5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl md:text-6xl mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Trusted Taxi & Car Rental Services <span className="text-[#FFC107]">Across India</span>
              </h2>
              <p className="text-xl mb-8 text-gray-200">
                15+ Years | Professional Drivers | Safe & Affordable
              </p>
              
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border-2 border-[#1ABC9C]">
                  <CheckCircle className="h-8 w-8 text-[#1ABC9C] mb-2" />
                  <p className="text-sm">Verified Drivers</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border-2 border-[#1ABC9C]">
                  <Navigation className="h-8 w-8 text-[#1ABC9C] mb-2" />
                  <p className="text-sm">GPS Enabled</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border-2 border-[#1ABC9C]">
                  <Clock className="h-8 w-8 text-[#1ABC9C] mb-2" />
                  <p className="text-sm">24×7 Service</p>
                </div>
              </div>
            </motion.div>

            {/* Right Booking Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-2xl p-8"
            >
              <div className="bg-[#FFC107] text-[#0B3C5D] px-4 py-2 rounded-lg inline-block mb-6">
                <p className="font-bold">🎉 Book Now & Get 10% OFF!</p>
              </div>
              
              <h3 className="text-2xl text-[#0B3C5D] mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Quick Booking Form
              </h3>
              
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#FFC107] outline-none text-gray-800"
                />
                <input
                  type="tel"
                  placeholder="Mobile Number"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#FFC107] outline-none text-gray-800"
                />
                <input
                  type="text"
                  placeholder="Pickup Location"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#FFC107] outline-none text-gray-800"
                />
                <input
                  type="text"
                  placeholder="Drop Location"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#FFC107] outline-none text-gray-800"
                />
                <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#FFC107] outline-none text-gray-800">
                  <option>Select Car Type</option>
                  <option>Hatchback</option>
                  <option>Sedan</option>
                  <option>SUV</option>
                  <option>Luxury</option>
                </select>
                <input
                  type="date"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#FFC107] outline-none text-gray-800"
                />
                <button
                  type="button"
                  className="w-full bg-[#FFC107] text-[#0B3C5D] py-4 rounded-lg font-bold text-lg hover:bg-[#FFD54F] transition-all hover:scale-105 shadow-lg"
                >
                  Book Your Cab Now →
                </button>
              </form>
              
              <p className="text-center text-gray-500 text-sm mt-4">
                ⚡ 45-Minute Guaranteed Confirmation
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section
        ref={statsRef}
        className="bg-gradient-to-r from-[#FF6F00] via-[#FFC107] to-[#FF6F00] py-12"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Trophy className="h-12 w-12 mx-auto mb-3" />
              <p className="text-4xl mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {yearsCount}+
              </p>
              <p>Years Experience</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Smile className="h-12 w-12 mx-auto mb-3" />
              <p className="text-4xl mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {customersCount.toLocaleString()}+
              </p>
              <p>Happy Customers</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Car className="h-12 w-12 mx-auto mb-3" />
              <p className="text-4xl mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {vehiclesCount}+
              </p>
              <p>Vehicles</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Globe className="h-12 w-12 mx-auto mb-3" />
              <p className="text-4xl mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Pan-India
              </p>
              <p>Service Coverage</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl mb-4 text-[#0B3C5D]" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Why Choose <span className="text-[#FFC107]">RidePlus?</span>
            </h2>
            <p className="text-xl text-gray-600">
              Your Safety, Comfort & Satisfaction is Our Mission
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="h-12 w-12" />,
                title: 'Hassle-Free Online Booking',
                desc: 'Book your cab in just 2 minutes with our simple online system',
                color: 'bg-gradient-to-br from-[#FFC107] to-[#FF6F00]',
              },
              {
                icon: <Clock className="h-12 w-12" />,
                title: '45-Minute Guaranteed Confirmation',
                desc: 'Get instant confirmation within 45 minutes or your money back',
                color: 'bg-gradient-to-br from-[#1ABC9C] to-[#16A085]',
              },
              {
                icon: <DollarSign className="h-12 w-12" />,
                title: 'Transparent Pricing',
                desc: 'No hidden charges. What you see is what you pay',
                color: 'bg-gradient-to-br from-[#0B3C5D] to-[#1565C0]',
              },
              {
                icon: <Users className="h-12 w-12" />,
                title: 'Professional & Polite Drivers',
                desc: 'Verified, trained, and experienced drivers for your safety',
                color: 'bg-gradient-to-br from-[#FF6F00] to-[#E65100]',
              },
              {
                icon: <Sparkles className="h-12 w-12" />,
                title: 'Clean & Sanitized Cars',
                desc: 'Regular cleaning and sanitization after every ride',
                color: 'bg-gradient-to-br from-[#8E24AA] to-[#6A1B9A]',
              },
              {
                icon: <Phone className="h-12 w-12" />,
                title: '24×7 Customer Support',
                desc: 'Round-the-clock support for all your queries and emergencies',
                color: 'bg-gradient-to-br from-[#D32F2F] to-[#C62828]',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-2xl shadow-lg p-8 border-2 border-gray-100 hover:border-[#FFC107] transition-all cursor-pointer"
              >
                <div className={`${item.color} text-white w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                  {item.icon}
                </div>
                <h3 className="text-xl mb-3 text-[#0B3C5D]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Fleet */}
      <section id="fleet" className="py-20 bg-gradient-to-br from-[#FFFDF8] to-[#FFF8E1]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl mb-4 text-[#0B3C5D]" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Our <span className="text-[#FFC107]">Premium Fleet</span>
            </h2>
            <p className="text-xl text-gray-600">Choose the Perfect Ride for Your Journey</p>
          </motion.div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {[
              {
                name: 'Hatchback',
                image: 'https://images.unsplash.com/photo-1671053390750-524f723898a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXRjaGJhY2slMjBjYXIlMjBjaXR5fGVufDF8fHx8MTc2NTY0NzI0MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
                seats: '4 Seater',
                price: '₹10/km',
                color: 'bg-[#FFC107]',
              },
              {
                name: 'Sedan',
                image: 'https://images.unsplash.com/photo-1720248800225-78d6bc3442de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWRhbiUyMGNhciUyMHdoaXRlfGVufDF8fHx8MTc2NTYwMTE4NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
                seats: '4 Seater',
                price: '₹12/km',
                color: 'bg-[#1ABC9C]',
              },
              {
                name: 'SUV',
                image: 'https://images.unsplash.com/photo-1758411898280-2dc7c95e0ba7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXYlMjBjYXIlMjBtb2Rlcm58ZW58MXx8fHwxNzY1NTMxOTMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
                seats: '6-7 Seater',
                price: '₹16/km',
                color: 'bg-[#0B3C5D]',
              },
              {
                name: 'Tempo Traveller',
                image: 'https://images.unsplash.com/photo-1758411898280-2dc7c95e0ba7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXYlMjBjYXIlMjBtb2Rlcm58ZW58MXx8fHwxNzY1NTMxOTMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
                seats: '12-17 Seater',
                price: '₹25/km',
                color: 'bg-[#FF6F00]',
              },
              {
                name: 'Luxury Cars',
                image: 'https://images.unsplash.com/photo-1619026006598-48adcab69152?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBpbmRpYXxlbnwxfHx8fDE3NjU2NDcyNDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
                seats: '4 Seater',
                price: '₹30/km',
                color: 'bg-[#8E24AA]',
              },
            ].map((vehicle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden cursor-pointer group"
              >
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl mb-2 text-[#0B3C5D]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {vehicle.name}
                  </h3>
                  <p className="text-gray-600 mb-2">{vehicle.seats}</p>
                  <p className="text-2xl text-[#FFC107] mb-4">{vehicle.price}</p>
                  <button
                    className={`w-full ${vehicle.color} text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-all transform group-hover:translate-y-0 translate-y-2 opacity-0 group-hover:opacity-100`}
                  >
                    Book Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl mb-4 text-[#0B3C5D]" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Our <span className="text-[#FFC107]">Services</span>
            </h2>
            <p className="text-xl text-gray-600">Comprehensive Taxi & Rental Solutions</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <MapPin className="h-12 w-12" />,
                title: 'Local Taxi Service',
                desc: 'City tours, shopping, meetings, and local transportation',
                gradient: 'from-[#FFC107] to-[#FF6F00]',
              },
              {
                icon: <Navigation className="h-12 w-12" />,
                title: 'One-Way Taxi Service',
                desc: 'Travel without worrying about return fare. Pay only one way',
                gradient: 'from-[#1ABC9C] to-[#16A085]',
              },
              {
                icon: <Car className="h-12 w-12" />,
                title: 'Airport Taxi Service',
                desc: 'Timely pickup & drop from all major airports',
                gradient: 'from-[#0B3C5D] to-[#1565C0]',
              },
              {
                icon: <Users className="h-12 w-12" />,
                title: 'Corporate Taxi Service',
                desc: 'Professional transportation for businesses and executives',
                gradient: 'from-[#8E24AA] to-[#6A1B9A]',
              },
              {
                icon: <Globe className="h-12 w-12" />,
                title: 'Outstation Taxi Service',
                desc: 'Long-distance travel with comfortable and safe rides',
                gradient: 'from-[#FF6F00] to-[#E65100]',
              },
              {
                icon: <Heart className="h-12 w-12" />,
                title: 'Wedding & Events',
                desc: 'Special packages for weddings and celebrations',
                gradient: 'from-[#D32F2F] to-[#C62828]',
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="relative bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg p-8 border-2 border-gray-100 hover:border-[#FFC107] transition-all cursor-pointer overflow-hidden group"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.gradient} opacity-10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500`}></div>
                <div className={`bg-gradient-to-br ${service.gradient} text-white w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                  {service.icon}
                </div>
                <h3 className="text-xl mb-3 text-[#0B3C5D]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.desc}</p>
                <ChevronRight className="absolute bottom-4 right-4 h-6 w-6 text-[#FFC107] opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tour Packages */}
      <section id="packages" className="py-20 bg-gradient-to-br from-[#0B3C5D] to-[#1565C0] text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Popular <span className="text-[#FFC107]">Tour Packages</span>
            </h2>
            <p className="text-xl text-gray-200">Explore India with Our Curated Travel Packages</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Delhi–Agra One Day Tour',
                image: 'https://images.unsplash.com/photo-1716896427993-ddad7c7ec891?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWolMjBtYWhhbCUyMGFncmElMjBpbmRpYXxlbnwxfHx8fDE3NjU2NDcyNDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
                duration: '1 Day',
                price: '₹4,999',
                badge: 'Best Seller',
                badgeColor: 'bg-[#FF6F00]',
              },
              {
                name: 'Delhi–Mathura–Vrindavan',
                image: 'https://images.unsplash.com/photo-1712999533944-9200e6b20e27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZW1wbGUlMjByZWxpZ2lvdXMlMjBpbmRpYXxlbnwxfHx8fDE3NjU2NDcyNDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
                duration: '2 Days',
                price: '₹6,999',
                badge: 'Popular',
                badgeColor: 'bg-[#1ABC9C]',
              },
              {
                name: 'Golden Triangle (5N 6D)',
                image: 'https://images.unsplash.com/photo-1534406589251-8bd571e55d60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYWlwdXIlMjBwaW5rJTIwY2l0eXxlbnwxfHx8fDE3NjU2NDcyNDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
                duration: '6 Days',
                price: '₹29,999',
                badge: 'Trending',
                badgeColor: 'bg-[#FFC107]',
              },
              {
                name: 'Delhi–Manali (3N 4D)',
                image: 'https://images.unsplash.com/photo-1743634360054-63490c53da40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW5hbGklMjBoaW1hY2hhbCUyMG1vdW50YWluc3xlbnwxfHx8fDE3NjU2NDcyNDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
                duration: '4 Days',
                price: '₹18,999',
                badge: 'Family Special',
                badgeColor: 'bg-[#8E24AA]',
              },
              {
                name: 'Chardham Yatra',
                image: 'https://images.unsplash.com/photo-1712999533944-9200e6b20e27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZW1wbGUlMjByZWxpZ2lvdXMlMjBpbmRpYXxlbnwxfHx8fDE3NjU2NDcyNDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
                duration: '10 Days',
                price: '₹49,999',
                badge: 'Sacred Journey',
                badgeColor: 'bg-[#FF6F00]',
              },
              {
                name: 'Rajasthan Heritage Tour',
                image: 'https://images.unsplash.com/photo-1534406589251-8bd571e55d60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYWlwdXIlMjBwaW5rJTIwY2l0eXxlbnwxfHx8fDE3NjU2NDcyNDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
                duration: '7 Days',
                price: '₹35,999',
                badge: 'Luxury',
                badgeColor: 'bg-[#D32F2F]',
              },
            ].map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white text-gray-800 rounded-2xl shadow-2xl overflow-hidden cursor-pointer group"
              >
                <div className="relative h-56 overflow-hidden">
                  <ImageWithFallback
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute top-4 right-4 ${pkg.badgeColor} text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg`}>
                    {pkg.badge}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <p className="text-white text-sm">
                      <Calendar className="inline h-4 w-4 mr-1" />
                      {pkg.duration}
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl mb-4 text-[#0B3C5D]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {pkg.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-500 text-sm">Starting from</p>
                      <p className="text-3xl text-[#FFC107]">{pkg.price}</p>
                    </div>
                    <button className="bg-[#0B3C5D] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#1565C0] transition-all">
                      View Details
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Locations */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl mb-4 text-[#0B3C5D]" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Our <span className="text-[#FFC107]">Service Locations</span>
            </h2>
            <p className="text-xl text-gray-600">Serving Across Major Cities in India</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: 'Agra', icon: '🕌' },
              { name: 'Delhi', icon: '🏛️' },
              { name: 'Jaipur', icon: '🏰' },
              { name: 'Himachal', icon: '🏔️' },
              { name: 'Uttarakhand', icon: '🗻' },
              { name: 'Chandigarh', icon: '🌳' },
              { name: 'Mumbai', icon: '🌆' },
              { name: 'Goa', icon: '🏖️' },
              { name: 'Kerala', icon: '🌴' },
              { name: 'Bangalore', icon: '💼' },
              { name: 'Hyderabad', icon: '🏙️' },
              { name: 'Pune', icon: '🎓' },
            ].map((location, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.1, backgroundColor: '#FFC107' }}
                className="bg-gradient-to-br from-[#FFFDF8] to-white border-2 border-[#FFC107] rounded-xl p-6 text-center cursor-pointer transition-all hover:shadow-xl"
              >
                <div className="text-4xl mb-2">{location.icon}</div>
                <p className="text-[#0B3C5D]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {location.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-20 bg-gradient-to-br from-[#FFFDF8] to-[#FFF8E1]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl mb-4 text-[#0B3C5D]" style={{ fontFamily: 'Poppins, sans-serif' }}>
              What Our <span className="text-[#FFC107]">Customers Say</span>
            </h2>
            <p className="text-xl text-gray-600">Real Stories from Real Travelers</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Rajesh Kumar',
                type: 'Family Tour',
                rating: 5,
                review: 'Excellent service! The driver was professional and the car was spotless. Our family trip to Agra was memorable.',
                color: 'bg-gradient-to-br from-[#FFC107] to-[#FFD54F]',
              },
              {
                name: 'Priya Sharma',
                type: 'Corporate Travel',
                rating: 5,
                review: 'Very reliable for corporate travel. Always on time and well-maintained vehicles. Highly recommended!',
                color: 'bg-gradient-to-br from-[#1ABC9C] to-[#16A085]',
              },
              {
                name: 'Amit Patel',
                type: 'Wedding Event',
                rating: 5,
                review: 'Booked their service for our wedding. They provided 15 cars and all were perfectly coordinated. Amazing!',
                color: 'bg-gradient-to-br from-[#FF6F00] to-[#E65100]',
              },
              {
                name: 'Sunita Reddy',
                type: 'Chardham Yatra',
                rating: 5,
                review: 'Safe and comfortable journey throughout our pilgrimage. The driver was respectful and knowledgeable.',
                color: 'bg-gradient-to-br from-[#8E24AA] to-[#6A1B9A]',
              },
              {
                name: 'Vikram Singh',
                type: 'Tourist',
                rating: 5,
                review: 'Best taxi service in Delhi! Used them for Golden Triangle tour. Perfect experience from start to finish.',
                color: 'bg-gradient-to-br from-[#0B3C5D] to-[#1565C0]',
              },
              {
                name: 'Neha Gupta',
                type: 'Airport Transfer',
                rating: 5,
                review: 'Quick booking, timely pickup, and professional service. Will definitely use again for airport transfers!',
                color: 'bg-gradient-to-br from-[#D32F2F] to-[#C62828]',
              },
            ].map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl shadow-lg p-8 border-2 border-gray-100 hover:border-[#FFC107] transition-all"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-[#FFC107] text-[#FFC107]" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{review.review}"</p>
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full ${review.color} flex items-center justify-center text-white text-xl`}>
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-[#0B3C5D]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      {review.name}
                    </p>
                    <p className="text-sm text-gray-500">{review.type}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* We Are Trusted By */}
      <section className="py-20 bg-gradient-to-br from-[#0B3C5D] to-[#1565C0] text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              We Are <span className="text-[#FFC107]">Trusted By</span>
            </h2>
            <p className="text-xl text-gray-200">Our Prestigious Associations & Clientele</p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: <Camera className="h-16 w-16" />,
                title: 'CID TV Show Shoot',
                desc: 'Official transport partner for CID TV production',
                gradient: 'from-[#FFC107] to-[#FF6F00]',
              },
              {
                icon: <Heart className="h-16 w-16" />,
                title: 'Wedding Events',
                desc: 'Over 1000+ weddings with seamless coordination',
                gradient: 'from-[#FF6F00] to-[#E65100]',
              },
              {
                icon: <Film className="h-16 w-16" />,
                title: 'Film & Media Shoots',
                desc: 'Trusted by Bollywood and regional film productions',
                gradient: 'from-[#8E24AA] to-[#6A1B9A]',
              },
              {
                icon: <Bus className="h-16 w-16" />,
                title: 'Political Rally Transport',
                desc: 'Convoy management for political events & rallies',
                gradient: 'from-[#1ABC9C] to-[#16A085]',
              },
              {
                icon: <Users className="h-16 w-16" />,
                title: 'Religious Yatra Groups',
                desc: 'Chardham, Amarnath, Vaishno Devi pilgrimages',
                gradient: 'from-[#D32F2F] to-[#C62828]',
              },
              {
                icon: <HeartHandshake className="h-16 w-16" />,
                title: 'Corporate Events',
                desc: 'Executive transport for Fortune 500 companies',
                gradient: 'from-[#0B3C5D] to-[#1565C0]',
              },
              {
                icon: <Award className="h-16 w-16" />,
                title: 'Family Tours',
                desc: 'Thousands of happy families across India',
                gradient: 'from-[#FF6F00] to-[#FFC107]',
              },
              {
                icon: <Globe className="h-16 w-16" />,
                title: 'International Tourists',
                desc: 'Guided tours for tourists from 50+ countries',
                gradient: 'from-[#1ABC9C] to-[#16A085]',
              },
            ].map((association, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-2 border-white/20 hover:border-[#FFC107] transition-all cursor-pointer"
              >
                <div className={`bg-gradient-to-br ${association.gradient} w-24 h-24 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-2xl`}>
                  {association.icon}
                </div>
                <h3 className="text-xl mb-3 text-center" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {association.title}
                </h3>
                <p className="text-gray-200 text-center text-sm">{association.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery & Memories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl mb-4 text-[#0B3C5D]" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Our Journey & <span className="text-[#FFC107]">Travel Memories</span>
            </h2>
            <p className="text-xl text-gray-600">Capturing Beautiful Moments with Our Customers</p>
          </motion.div>

          <Masonry columnsCount={3} gutter="20px">
            {[
              {
                image: 'https://images.unsplash.com/photo-1716896427993-ddad7c7ec891?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWolMjBtYWhhbCUyMGFncmElMjBpbmRpYXxlbnwxfHx8fDE3NjU2NDcyNDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
                title: 'Taj Mahal Tour',
              },
              {
                image: 'https://images.unsplash.com/photo-1743634360054-63490c53da40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW5hbGklMjBoaW1hY2hhbCUyMG1vdW50YWluc3xlbnwxfHx8fDE3NjU2NDcyNDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
                title: 'Manali Adventure',
              },
              {
                image: 'https://images.unsplash.com/photo-1634351357279-c22fe1889467?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBmYW1pbHklMjB0cmF2ZWx8ZW58MXx8fHwxNzY1NjQ3MjQyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
                title: 'Family Trip',
              },
              {
                image: 'https://images.unsplash.com/photo-1534406589251-8bd571e55d60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYWlwdXIlMjBwaW5rJTIwY2l0eXxlbnwxfHx8fDE3NjU2NDcyNDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
                title: 'Jaipur Heritage',
              },
              {
                image: 'https://images.unsplash.com/photo-1611086287080-d3823629dd77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2FkJTIwdHJpcCUyMG1vdW50YWluc3xlbnwxfHx8fDE3NjU2NDcyNDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
                title: 'Mountain Road Trip',
              },
              {
                image: 'https://images.unsplash.com/photo-1712999533944-9200e6b20e27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZW1wbGUlMjByZWxpZ2lvdXMlMjBpbmRpYXxlbnwxfHx8fDE3NjU2NDcyNDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
                title: 'Temple Pilgrimage',
              },
              {
                image: 'https://images.unsplash.com/photo-1734851561126-75ed6a55a5ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWxoaSUyMGluZGlhJTIwZ2F0ZXxlbnwxfHx8fDE3NjU2NDIwNDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
                title: 'Delhi Exploration',
              },
              {
                image: 'https://images.unsplash.com/photo-1720248800225-78d6bc3442de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWRhbiUyMGNhciUyMHdoaXRlfGVufDF8fHx8MTc2NTYwMTE4NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
                title: 'Luxury Fleet',
              },
              {
                image: 'https://images.unsplash.com/photo-1758411898280-2dc7c95e0ba7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXYlMjBjYXIlMjBtb2Rlcm58ZW58MXx8fHwxNzY1NTMxOTMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
                title: 'SUV Collection',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="relative rounded-2xl overflow-hidden shadow-lg cursor-pointer group"
              >
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-white text-xl" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      {item.title}
                    </p>
                    <p className="text-[#FFC107] text-sm">View Journey →</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </Masonry>
        </div>
      </section>

      {/* About Us */}
      <section className="py-20 bg-gradient-to-br from-[#FFFDF8] to-[#FFF8E1]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl mb-6 text-[#0B3C5D]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Our <span className="text-[#FFC107]">Story</span>
              </h2>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-[#FFC107] rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <Trophy className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2 text-[#0B3C5D]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      Established in 2000
                    </h3>
                    <p className="text-gray-600">
                      Started with just 3 vehicles, now operating a fleet of 100+ premium cars across India.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-[#1ABC9C] rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2 text-[#0B3C5D]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      Safe & Reliable
                    </h3>
                    <p className="text-gray-600">
                      All drivers undergo rigorous background checks and training. GPS tracking and 24/7 monitoring for your safety.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-[#0B3C5D] rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2 text-[#0B3C5D]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      Corporate & VIP Services
                    </h3>
                    <p className="text-gray-600">
                      Trusted by government officials, celebrities, and major corporations for executive transportation.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-[#FF6F00] rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <Globe className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2 text-[#0B3C5D]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      Nationwide Coverage
                    </h3>
                    <p className="text-gray-600">
                      From Kashmir to Kanyakumari, we provide seamless travel solutions across India.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1614295334477-885b757c8ad3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXhpJTIwY2FyJTIwcmVudGFsJTIwaW5kaWF8ZW58MXx8fHwxNzY1NjQ3MjM5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Our Fleet"
                  className="rounded-2xl shadow-lg h-48 w-full object-cover"
                />
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1720248800225-78d6bc3442de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWRhbiUyMGNhciUyMHdoaXRlfGVufDF8fHx8MTc2NTYwMTE4NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Premium Cars"
                  className="rounded-2xl shadow-lg h-48 w-full object-cover mt-8"
                />
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1758411898280-2dc7c95e0ba7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXYlMjBjYXIlMjBtb2Rlcm58ZW58MXx8fHwxNzY1NTMxOTMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="SUV Collection"
                  className="rounded-2xl shadow-lg h-48 w-full object-cover -mt-8"
                />
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1619026006598-48adcab69152?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBpbmRpYXxlbnwxfHx8fDE3NjU2NDcyNDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Luxury Cars"
                  className="rounded-2xl shadow-lg h-48 w-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="contact" className="py-20 bg-gradient-to-r from-[#FF6F00] via-[#FFC107] to-[#FF6F00] text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Looking for a Reliable Cab?
            </h2>
            <p className="text-2xl mb-12">
              Book Now & Travel <span className="font-bold">Stress-Free!</span>
            </p>

            <div className="flex flex-wrap gap-6 justify-center">
              <motion.a
                href="tel:+919999999999"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#0B3C5D] px-8 py-4 rounded-full font-bold text-lg shadow-2xl flex items-center gap-3 hover:bg-gray-100 transition-all"
              >
                <Phone className="h-6 w-6" />
                Call Now: +91 99999 99999
              </motion.a>

              <motion.a
                href="https://wa.me/919999999999"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="bg-[#25D366] text-white px-8 py-4 rounded-full font-bold text-lg shadow-2xl flex items-center gap-3 hover:bg-[#20BA5A] transition-all"
              >
                <MessageCircle className="h-6 w-6" />
                WhatsApp Booking
              </motion.a>

              <motion.a
                href="mailto:info@rideplustravels.com"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#0B3C5D] text-white px-8 py-4 rounded-full font-bold text-lg shadow-2xl flex items-center gap-3 hover:bg-[#1565C0] transition-all"
              >
                <Mail className="h-6 w-6" />
                Instant Enquiry
              </motion.a>
            </div>

            <div className="mt-12 flex flex-wrap gap-8 justify-center text-left">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border-2 border-white/20">
                <Phone className="h-8 w-8 mb-3" />
                <p className="text-sm">24/7 Helpline</p>
                <p className="text-xl">+91 99999 99999</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border-2 border-white/20">
                <Mail className="h-8 w-8 mb-3" />
                <p className="text-sm">Email Us</p>
                <p className="text-xl">info@rideplustravels.com</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border-2 border-white/20">
                <MapPin className="h-8 w-8 mb-3" />
                <p className="text-sm">Head Office</p>
                <p className="text-xl">Delhi, India</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0B3C5D] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Company Info */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-[#FFC107] p-2 rounded-lg">
                  <Car className="h-8 w-8 text-[#0B3C5D]" />
                </div>
                <h3 className="text-2xl" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  RidePlus Travels
                </h3>
              </div>
              <p className="text-gray-300 mb-6">
                Your trusted partner for safe, reliable, and comfortable travel across India since 2000.
              </p>
              <div className="flex gap-4">
                <a href="#" className="bg-white/10 p-3 rounded-lg hover:bg-[#FFC107] transition-all">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="bg-white/10 p-3 rounded-lg hover:bg-[#FFC107] transition-all">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="bg-white/10 p-3 rounded-lg hover:bg-[#FFC107] transition-all">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="bg-white/10 p-3 rounded-lg hover:bg-[#FFC107] transition-all">
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl mb-6 text-[#FFC107]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Quick Links
              </h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-[#FFC107] transition-colors">About Us</a></li>
                <li><a href="#services" className="text-gray-300 hover:text-[#FFC107] transition-colors">Our Services</a></li>
                <li><a href="#fleet" className="text-gray-300 hover:text-[#FFC107] transition-colors">Our Fleet</a></li>
                <li><a href="#packages" className="text-gray-300 hover:text-[#FFC107] transition-colors">Tour Packages</a></li>
                <li><a href="#contact" className="text-gray-300 hover:text-[#FFC107] transition-colors">Contact Us</a></li>
                <li><a href="#" className="text-gray-300 hover:text-[#FFC107] transition-colors">Careers</a></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-xl mb-6 text-[#FFC107]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Our Services
              </h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-[#FFC107] transition-colors">Local Taxi</a></li>
                <li><a href="#" className="text-gray-300 hover:text-[#FFC107] transition-colors">Outstation Cab</a></li>
                <li><a href="#" className="text-gray-300 hover:text-[#FFC107] transition-colors">Airport Transfer</a></li>
                <li><a href="#" className="text-gray-300 hover:text-[#FFC107] transition-colors">Corporate Travel</a></li>
                <li><a href="#" className="text-gray-300 hover:text-[#FFC107] transition-colors">Wedding Events</a></li>
                <li><a href="#" className="text-gray-300 hover:text-[#FFC107] transition-colors">Tour Packages</a></li>
              </ul>
            </div>

            {/* Popular Locations */}
            <div>
              <h4 className="text-xl mb-6 text-[#FFC107]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Popular Locations
              </h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-[#FFC107] transition-colors">Delhi</a></li>
                <li><a href="#" className="text-gray-300 hover:text-[#FFC107] transition-colors">Agra</a></li>
                <li><a href="#" className="text-gray-300 hover:text-[#FFC107] transition-colors">Jaipur</a></li>
                <li><a href="#" className="text-gray-300 hover:text-[#FFC107] transition-colors">Manali</a></li>
                <li><a href="#" className="text-gray-300 hover:text-[#FFC107] transition-colors">Shimla</a></li>
                <li><a href="#" className="text-gray-300 hover:text-[#FFC107] transition-colors">Uttarakhand</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <p className="text-gray-300">
                © 2024 RidePlus Travels. All Rights Reserved.
              </p>
              <div className="flex gap-6">
                <a href="#" className="text-gray-300 hover:text-[#FFC107] transition-colors">Privacy Policy</a>
                <a href="#" className="text-gray-300 hover:text-[#FFC107] transition-colors">Terms & Conditions</a>
                <a href="#" className="text-gray-300 hover:text-[#FFC107] transition-colors">Cancellation Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
