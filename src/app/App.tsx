import React, { useState, useEffect, useRef } from 'react';
import { motion, MotionConfig } from 'motion/react';
import Masonry from 'react-responsive-masonry';
import {
  Car,
  Shield,
  Clock,
  Users,
  MapPin,
  Star,
  StarHalf,
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
  Globe,
  ChevronRight,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  Menu,
  X,
  FlameKindling,
} from 'lucide-react';
import finallogo from "../assets/images/finallogo.png";
import logo1 from "../assets/images/logo1.png";
import cid1 from "../assets/images/cid1.png";
import cid2 from "../assets/images/cid2.png";
import cid3 from "../assets/images/cid3.jpeg";
import cid4 from "../assets/images/cid4.png";
import wedding1 from "../assets/images/wedding1.png";
import wedding2 from "../assets/images/wedding2.png";
import wedding3 from "../assets/images/wedding3.png";
import wedding4 from "../assets/images/wedding4.png";
import wedding5 from "../assets/images/wedding5.png";
import wedding6 from "../assets/images/wedding6.png";
import film1 from "../assets/images/film1.png";
import film2 from "../assets/images/film2.png";
import film3 from "../assets/images/film3.png";
import film4 from "../assets/images/film4.png";
import film5 from "../assets/images/film5.png";
import film6 from "../assets/images/film6.png";
import film7 from "../assets/images/film7.png";
import corp1 from "../assets/images/corp1.png";
import post1 from "../assets/images/post1.png";
import post2 from "../assets/images/post2.png";
import post3 from "../assets/images/post3.png";
import post4 from "../assets/images/post4.png";
import post5 from "../assets/images/post5.png";
import post6 from "../assets/images/post6.png";
import post7 from "../assets/images/post7.png";
import post8 from "../assets/images/post8.png";
import post9 from "../assets/images/post9.png";
import dzire from "../assets/images/dzire.png";
import etios from "../assets/images/etios.png";
import innova from "../assets/images/innova.png";
import bus2 from "../assets/images/bus2.png";
import ertiga from "../assets/images/ertiga.png";
import carens from "../assets/images/carens.png";
import urbania from "../assets/images/urbania.png";
import traveller from "../assets/images/traveller.png";
import intourist from "../assets/images/intourist.png";
import family1 from "../assets/images/family1.png";
import family2 from "../assets/images/family2.png";
import family3 from "../assets/images/family3.png";
import family4 from "../assets/images/family4.png";
import family5 from "../assets/images/family5.png";
import yatri from "../assets/images/yatri.png";
//import corp2 from "../assets/images/corp2.png";
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { PackageModal } from './components/PackageModal';
const GalleryModal = React.lazy(() => import('./components/GalleryModal'));

// Package data for all tours
const packagesData = {
  agraLocal: {
    name: 'Agra Local Taxi Service',
    image: 'https://images.unsplash.com/photo-1716896427993-ddad7c7ec891?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWolMjBtYWhhbCUyMGFncmElMjBpbmRpYXxlbnwxfHx8fDE3NjU2NDcyNDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    duration: 'Full Day',
    price: '₹2000',
    overview: 'Explore the magnificent city of Agra with our comfortable local taxi service. Visit the iconic Taj Mahal, Agra Fort, and other historical monuments with ease. Our experienced drivers know the best routes and timings to avoid crowds and make your Agra experience memorable.',
    carTypes: [
      { name: 'Sedan', price: '₹ 2500', seats: '4 Passengers' },
      { name: 'SUV', price: '₹ 3000', seats: '6-7 Passengers' },
      { name: 'Urbania', price: '₹ 5000', seats: '14 Passengers' },
    ],
    pricing: [
      { item: 'Full Day Service (8 Hours)', detail: 'Included' },
      { item: 'Driver Allowance', detail: '₹500' },
      { item: 'Fuel', detail: 'Included (80 Km)' },
      { item: 'Parking & Tolls', detail: 'Extra' },
      { item: 'Monument Entry Fees', detail: 'Extra' },
    ],
    whyChoose: [
      'Expert local drivers with complete knowledge of Agra',
      'Flexible timings and customizable itinerary',
      'Clean and well-maintained vehicles',
      'Hassle-free booking and instant confirmation',
      ' 24/7 customer support during your trip',
      'Best rates guaranteed with no hidden charges',
    ],
    highlights: [
      'Visit Taj Mahal at sunrise for magical views',
      'Explore Agra Fort and its stunning architecture',
      'Stop at Mehtab Bagh for sunset Taj Mahal views',
      'Visit Itmad-ud-Daulah (Baby Taj)',
      'Shopping at local markets for marble handicrafts',
      'Taste authentic Mughlai cuisine at famous restaurants',
    ],
  },
  mathuraVrindavan: {
    name: 'Delhi to Mathura Vrindavan Same Day Tour',
    image: 'https://images.unsplash.com/photo-1660280037297-a3b5e79a3d20?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    duration: '1 Day',
    price: '₹5,499',
    overview: 'Experience divine spirituality with our same-day tour from Delhi to Mathura and Vrindavan. Visit the holy birthplace of Lord Krishna and explore the numerous beautiful temples. This spiritual journey is perfect for families and devotees seeking blessings.',
    carTypes: [
      { name: 'A/C SEDAN', price: '₹5,499', seats: '4 Passengers' },
      { name: 'A/C MUV'  , price: '₹6,499', seats: '6-7 Passengers' },
      { name: 'A/C SUV'  , price: '₹7,999', seats: '6 Passengers' },
    ],
    pricing: [
      { item: 'Round Trip from Delhi', detail: 'Included' },
      { item: 'Distance Coverage', detail: '320 Km' },
      { item: 'Driver Allowance', detail: '₹500' },
      { item: 'Fuel Charges', detail: 'Included' },
      { item: 'Parking & Tolls', detail: 'Extra (Approx ₹400)' },
    ],
    whyChoose: [
      'Early morning departure for maximum temple coverage',
      'Visit all major temples in both Mathura & Vrindavan',
      'Experienced drivers familiar with religious sites',
      'Comfortable air-conditioned vehicles',
      'Flexible stop options for prasad and offerings',
      'Return to Delhi by evening same day',
    ],
    highlights: [
      'Shri Krishna Janmabhoomi Temple in Mathura',
      'Dwarkadhish Temple - architectural marvel',
      'Banke Bihari Temple in Vrindavan',
      'ISKCON Temple with evening aarti',
      'Prem Mandir - stunning illuminated temple',
      'Nidhivan - the mysterious forest of Radha Krishna',
    ],
  },
  delhiAgra: {
    name: 'Delhi Agra One Day Tour',
    image: 'https://images.unsplash.com/photo-1609258678760-ba05d9b95bb9?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: '₹5,499',
    overview: 'The most popular same-day tour from Delhi to Agra! Witness the breathtaking beauty of the Taj Mahal, one of the Seven Wonders of the World. This tour includes comfortable transportation, experienced guides, and ample time to explore Agra\'s UNESCO World Heritage Sites.',
    carTypes: [
      { name: 'Sedan', price: '₹5,499', seats: '4 Passengers' },
      { name: 'Innova/ Marazzo', price: '₹8,499', seats: '6-7 Passengers' },
      { name: 'Innova Crysta', price: '₹8,499', seats: '6-7 Passengers' },
    ],
    pricing: [
      { item: 'Delhi to Agra Round Trip', detail: '420 Km' },
      { item: 'AC Vehicle with Fuel', detail: 'Included' },
      { item: 'Driver Allowance', detail: '₹500' },
      { item: 'Parking & Tolls', detail: 'Extra (Approx ₹600)' },
      { item: 'Tour Guide (Optional)', detail: '₹1,500 per group' },
    ],
    whyChoose: [
      'Early morning start to catch Taj Mahal at sunrise',
      'Travel on comfortable Yamuna Expressway',
      'Professional drivers with excellent track record',
      'Flexible itinerary - customize as per your wish',
      'Stop for breakfast and lunch at quality restaurants',
      'Return to Delhi by evening with memories',
    ],
    highlights: [
      'Taj Mahal - Symbol of eternal love',
      'Agra Fort - UNESCO World Heritage Site',
      'Itmad-ud-Daulah (Baby Taj)',
      'Mehtab Bagh for Taj sunset view (if time permits)',
      'Marble inlay workshop demonstration',
      'Local cuisine tasting at famous Agra restaurants',
    ],
  },
  goldenTriangle: {
    name: 'Golden Triangle Tour (5 Nights / 6 Days)',
    image: 'https://images.unsplash.com/photo-1602643163983-ed0babc39797?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    duration: '6 Days',
    price: '₹19,599',
    overview: 'Experience the essence of India with our comprehensive Golden Triangle Tour covering Delhi, Agra, and Jaipur. This 6-day journey takes you through India\'s rich cultural heritage, magnificent monuments, colorful markets, and royal palaces. Perfect for first-time visitors to India!',
    carTypes: [
      { name: 'A/C SEDAN', price: '₹19,599', seats: '4 Passengers' },
      { name: 'A/C MUV'  , price: '₹26,599', seats: '6 Passengers' },
      { name: 'A/C SUV'  , price: '₹28,599', seats: '6 Passengers' },
      { name: 'A/C Tempo Traveller', price: '₹29,999', seats: '12-30 Passengers' },
    ],
    pricing: [
      { item: 'All Transportation', detail: 'AC Vehicle for 6 Days' },
      { item: 'Total Distance', detail: 'Approx 900 Km' },
      { item: 'Driver Charges', detail: 'Included' },
      { item: 'Accommodation', detail: 'Not Included' },
      { item: 'Meals & Monuments', detail: 'Not Included' },
    ],
    whyChoose: [
      'Complete cultural immersion in North India',
      'Visit 7+ UNESCO World Heritage Sites',
      'Expert drivers with multi-day tour experience',
      'Comfortable stays can be arranged on request',
      'Perfect balance of sightseeing and relaxation',
      'Best value for money tour package',
    ],
    highlights: [
      'Delhi: Red Fort, Qutub Minar, India Gate, Lotus Temple',
      'Agra: Taj Mahal, Agra Fort, Fatehpur Sikri',
      'Jaipur: Amber Fort, City Palace, Hawa Mahal',
      'Jantar Mantar - UNESCO Heritage Observatory',
      'Local bazaar shopping in all three cities',
      'Traditional Rajasthani cultural evening in Jaipur',
    ],
  },
  delhiHaridwar: {
    name: 'Delhi to Haridwar Same Day Trip by Taxi',
    image: 'https://images.unsplash.com/photo-1622611908679-cbeda47d9404?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    duration: '1 Day',
    price: '₹5,499',
    overview: 'Take a spiritual journey from Delhi to Haridwar, one of the seven holiest places in Hinduism. Experience the sacred Ganga Aarti at Har Ki Pauri, take a holy dip in the Ganges, and seek blessings at ancient temples. This same-day tour offers a perfect spiritual escape from city life.',
    carTypes: [
      { name: 'A/C SEDAN', price: '₹5,499', seats: '4 Passengers' },
      { name: 'A/C MUV'  , price: '₹7,499', seats: '6-7 Passengers' },
      { name: 'A/C SUV'  , price: '₹8,999', seats: '6 Passengers' },
    ],
    pricing: [
      { item: 'Round Trip from Delhi', detail: '440 Km' },
      { item: 'AC Vehicle & Fuel', detail: 'Included' },
      { item: 'Driver Allowance', detail: '₹500' },
      { item: 'Parking & Tolls', detail: 'Extra (Approx ₹500)' },
      { item: 'Rishikesh Extension', detail: '+₹1,500' },
    ],
    whyChoose: [
      'Early morning departure for full-day experience',
      'Attend evening Ganga Aarti at Har Ki Pauri',
      'Comfortable journey via National Highway',
      'Option to extend to Rishikesh',
      'Experienced drivers familiar with mountain roads',
      'Return safely to Delhi by late night',
    ],
    highlights: [
      'Har Ki Pauri - Most sacred ghat of Haridwar',
      'Ganga Aarti ceremony at sunset',
      'Mansa Devi Temple via cable car',
      'Chandi Devi Temple darshan',
      'Holy dip in River Ganges',
      'Shopping for religious items and local sweets',
    ],
  },
  delhiManali: {
    name: 'Delhi to Manali Tour Package (3 Nights / 4 Days)',
    image: 'https://images.unsplash.com/photo-1743634360054-63490c53da40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW5hbGklMjBoaW1hY2hhbCUyMG1vdW50YWluc3xlbnwxfHx8fDE3NjU2NDcyNDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    duration: '4 Days',
    price: '------',
    overview: 'Escape to the mountains with our Manali tour package! Experience the breathtaking beauty of Himachal Pradesh, enjoy adventure activities, visit ancient temples, and relax in the lap of nature. Perfect for families, couples, and adventure enthusiasts.',
    carTypes: [
      { name: 'Sedan', price: '------', seats: '4 Passengers' },
      { name: 'SUV', price: '------', seats: '6-7 Passengers' },
      { name: 'MUV', price: '------', seats: '6 Passengers' },
    ],
    pricing: [
      { item: 'All Transportation (4 Days)', detail: 'AC Vehicle' },
      { item: 'Total Distance', detail: 'Approx 1,100 Km' },
      { item: 'Driver Charges & Allowance', detail: 'Included' },
      { item: 'Accommodation', detail: 'Not Included' },
      { item: 'Meals & Activities', detail: 'Not Included' },
    ],
    whyChoose: [
      'Scenic journey through mountains and valleys',
      'Experienced hill drivers for safe journey',
      'Flexible sightseeing schedule',
      'Hotel booking assistance available',
      'Visit both popular and offbeat locations',
      'Perfect 4-day itinerary for Manali exploration',
    ],
    highlights: [
      'Solang Valley - Adventure sports hub',
      'Rohtang Pass (if open - seasonal)',
      'Hadimba Devi Temple',
      'Old Manali cafes and shopping',
      'Vashisht Hot Water Springs',
      'Mall Road evening walks and shopping',
    ],
  },
  chardham: {
    name: 'Chardham Yatra',
    image: 'https://images.unsplash.com/photo-1612438214708-f428a707dd4e?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    duration: '10 Days',
    price: '₹41,999',
    overview: 'Embark on the sacred Chardham Yatra covering Yamunotri, Gangotri, Kedarnath, and Badrinath. This spiritual journey through the Himalayas is considered one of the most auspicious pilgrimages in Hinduism. Our experienced team ensures a safe, comfortable, and spiritually enriching experience.',
    carTypes: [
      { name: 'Sedan', price: '₹41,999', seats: '4 Passengers' },
      { name: 'SUV', price: '₹48,999', seats: '6-7 Passengers' },
      { name: 'MUV', price: '₹81,999', seats: '6 Passengers' },
    ],
    pricing: [
      { item: 'All Transportation (10 Days)', detail: 'AC Vehicle' },
      { item: 'Total Distance', detail: 'Approx 1,800 Km' },
      { item: 'Experienced Hill Driver', detail: 'Included' },
      { item: 'Driver Accommodation', detail: 'Included' },
      { item: 'Your Stay & Meals', detail: 'Not Included' },
    ],
    whyChoose: [
      'Specialized Chardham Yatra drivers with experience',
      'Complete route planning and guidance',
      'Safe driving on challenging mountain roads',
      'Flexible darshan timings as per your preference',
      'Assistance with hotel bookings and permits',
      'Emergency support throughout the journey',
    ],
    highlights: [
      'Yamunotri - Source of River Yamuna',
      'Gangotri - Origin of holy River Ganga',
      'Kedarnath - One of 12 Jyotirlingas (trek/helicopter)',
      'Badrinath - Abode of Lord Vishnu',
      'Rishikesh Ganga Aarti on return',
      'Scenic Himalayan beauty throughout the journey',
    ],
  },
};

// Gallery data moved to `src/app/galleryData.ts` and is lazy-loaded when a user opens a gallery (reduces initial bundle size)


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
  const [selectedPackage, setSelectedPackage] = useState<keyof typeof packagesData | null>(null);
  const [selectedGallery, setSelectedGallery] = useState<string | null>(null);
  const [activeGalleryData, setActiveGalleryData] = useState<any | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  const openGallery = async (key: string) => {
    const mod = await import('./galleryData');
    setActiveGalleryData((mod as any).galleryData[key]);
    setSelectedGallery(key);
  }; 
  const statsRef = useRef<HTMLDivElement>(null);

  // Travel memories: selected image modal
  const [selectedMemory, setSelectedMemory] = useState<string | null>(null);
  const memoryContainerRef = useRef<HTMLDivElement | null>(null);

  // Match media once and keep in state for conditional rendering without layout shifts
  useEffect(() => {
    const setupMedia = () => {
      if (typeof window === 'undefined') return () => {};
      const mobileQuery = window.matchMedia('(max-width: 639px)');
      const tabletQuery = window.matchMedia('(max-width: 1023px)');

      const handleMobile = (event: MediaQueryListEvent) => setIsMobile(event.matches);
      const handleTablet = (event: MediaQueryListEvent) => setIsTablet(event.matches);

      setIsMobile(mobileQuery.matches);
      setIsTablet(tabletQuery.matches);

      mobileQuery.addEventListener('change', handleMobile);
      tabletQuery.addEventListener('change', handleTablet);

      return () => {
        mobileQuery.removeEventListener('change', handleMobile);
        tabletQuery.removeEventListener('change', handleTablet);
      };
    };

    const cleanup = setupMedia();
    return () => {
      if (typeof cleanup === 'function') cleanup();
    };
  }, []);

  useEffect(() => {
    if (!statsRef.current) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsInView(true);
          if (statsRef.current) observer.unobserve(statsRef.current);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  const yearsCount = useCounter(25, 2000, statsInView);
  const customersCount = useCounter(10000, 2000, statsInView);
  const vehiclesCount = useCounter(25, 2000, statsInView);

  // Form state management
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    pickup: '',
    drop: '',
    carType: '',
    date: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formMessage, setFormMessage] = useState('');

  // Google Apps Script URL - Replace with your deployed script URL
  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxOAiccy171HsX5LECDrUkCDo2-imolyzWRr9NmxHnsmEfH3XSVS-tLW3lypydUDW2jrg/exec';

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.fullName || !formData.mobile || !formData.pickup || !formData.drop || !formData.carType || !formData.date) {
      setFormStatus('error');
      setFormMessage('Please fill in all fields');
      setTimeout(() => setFormStatus('idle'), 3000);
      return;
    }

    // Validate mobile number
    const mobileRegex = /^[6-9]\d{9}$/;
    if (!mobileRegex.test(formData.mobile)) {
      setFormStatus('error');
      setFormMessage('Please enter a valid 10-digit mobile number');
      setTimeout(() => setFormStatus('idle'), 3000);
      return;
    }

    setFormStatus('loading');

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      // With no-cors mode, we can't read the response, so assume success
      setFormStatus('success');
      setFormMessage('🎉 Booking request sent! We\'ll contact you within 45 minutes.');
      
      // Reset form
      setFormData({
        fullName: '',
        mobile: '',
        pickup: '',
        drop: '',
        carType: '',
        date: ''
      });

      // Reset the visible date input
      const visibleDateInput = document.getElementById('bookingDateVisible') as HTMLInputElement;
      if (visibleDateInput) visibleDateInput.value = '';

      setTimeout(() => setFormStatus('idle'), 5000);
    } catch (error) {
      console.error('Form submission error:', error);
      setFormStatus('error');
      setFormMessage('Failed to send request. Please try calling us directly.');
      setTimeout(() => setFormStatus('idle'), 5000);
    }
  };

  return (
    // Global reduced motion trims JS-driven animations for better INP/LCP
    <MotionConfig reducedMotion="always">
      <div className="min-h-screen bg-[#FFFDF8] pt-12 md:pt-14 overflow-x-hidden">
        {/* Skip link for accessibility */}
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 bg-white text-[#0B3C5D] px-3 py-2 rounded shadow">Skip to main content</a>
      {/* Modals */}
      {selectedPackage && (
        <PackageModal
          isOpen={!!selectedPackage}
          onClose={() => setSelectedPackage(null)}
          packageData={packagesData[selectedPackage]}
        />
      )}
      
      {selectedGallery && activeGalleryData && (
        <React.Suspense fallback={<div />}> 
          <GalleryModal
            isOpen={!!selectedGallery}
            onClose={() => { setSelectedGallery(null); setActiveGalleryData(null); }}
            galleryData={activeGalleryData}
          />
        </React.Suspense>
      )}

      {/* Header */}
      <header className="bg-[#0B3C5D] text-white py-2 md:py-1.5 fixed top-0 left-0 right-0 z-40 shadow-lg" aria-label="Primary">
        <div className="container mx-auto px-3 site-container">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 md:gap-3">
            <img src={finallogo} alt="Main Logo" className="h-10 md:h-16 w-auto object-contain [mix-blend-mode:screen]" loading="eager" decoding="async" fetchpriority="high" />
              <div>
                <h1 className="text-xl md:text-2xl font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Surya Travels
                </h1>
                <p className="text-xs text-[#FFC107] block mt-0.5">COMFORT. SAFETY. RELIABILITY.</p>
              </div>
            </div>
            
            {/* Desktop Menu (semantic nav for SEO/AX) */}
            <nav className="hidden lg:flex items-center gap-6 text-base" aria-label="Primary">
              <a href="#services" className="hover:text-[#FFC107] transition-colors">Services</a>
              <a href="#fleet" className="hover:text-[#FFC107] transition-colors">Fleet</a>
              <a href="#packages" className="hover:text-[#FFC107] transition-colors">Tour Packages</a>
              <a href="#booking" className="bg-[#FFC107] text-[#0B3C5D] px-3 py-1.5 rounded-full font-semibold hover:bg-[#FFD54F] transition-all text-xs">
                Book Now
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div id="mobile-menu" className="lg:hidden mt-4 pb-4 space-y-3 max-w-full overflow-x-hidden" role="navigation" aria-label="Mobile">
              <a href="#services" className="block py-1.5 hover:text-[#FFC107] transition-colors text-base" onClick={() => setMobileMenuOpen(false)}>
                Services
              </a>
              <a href="#fleet" className="block py-1.5 hover:text-[#FFC107] transition-colors text-base" onClick={() => setMobileMenuOpen(false)}>
                Fleet
              </a>
              <a href="#packages" className="block py-1.5 hover:text-[#FFC107] transition-colors text-base" onClick={() => setMobileMenuOpen(false)}>
                Tour Packages
              </a>
              <a href="#booking" className="block bg-[#FFC107] text-[#0B3C5D] px-4 py-1.5 rounded-full font-semibold text-center text-sm" onClick={() => setMobileMenuOpen(false)}>
                Book Now
              </a>
            </div>
          )}
        </div>
      </header>

      <main id="main-content" role="main" tabIndex={-1}>
      {/* Hero Section */}
      {/* Floating Call Button */}
      <a
        href="tel:+919412157562"
        className={`fixed ${mobileMenuOpen ? 'top-[10rem]' : 'top-32'} right-4 sm:right-8 md:right-8 lg:right-20 z-50 bg-[#16a34a] text-white shadow-2xl rounded-full px-4 py-2 md:px-5 md:py-2.5 flex items-center gap-2 hover:bg-[#0f7a34] hover:shadow-amber-400/30 transition-colors`}
        aria-label="Call Surya Travels"
        role="button"
        title="Call Surya Travels"
      >
        <Phone className="h-5 w-5 " />
        <span className="hidden sm:inline font-semibold">Call Now</span>
      </a>

      {/* Floating Book Now Button */}
      <a
        href="#booking"
        className={`fixed ${mobileMenuOpen ? 'top-[13.5rem]' : 'top-48'} right-4 sm:right-8 md:right-8 lg:right-20 z-50 bg-[#FFC107] text-[#0B3C5D] shadow-2xl rounded-full px-4 py-2 md:px-5 md:py-2.5 flex items-center gap-2 hover:bg-[#FFD54F] hover:shadow-yellow-400/30 transition-colors`}
        aria-label="Book Now"
        role="button"
        title="Book Now"
      >
        <Calendar className="h-5 w-5" />
        <span className="hidden sm:inline font-semibold">Book Now</span>
      </a>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919412157562"
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed ${mobileMenuOpen ? 'top-[17rem]' : 'top-64'} right-4 sm:right-8 md:right-8 lg:right-20 z-50 rounded-full bg-[#25D366] text-white p-2.5 md:p-3 shadow-xl ring-2 ring-white/10 hover:shadow-green-400/40 hover:scale-105 transition-transform transition-shadow`}
        aria-label="WhatsApp Surya Travels"
        role="button"
        title="WhatsApp Surya Travels"
      >
        <MessageCircle className="h-10 w-10 md:h-11 md:w-11 drop-shadow" aria-hidden="true" />
      </a>

      <section className="relative bg-gradient-to-br from-[#0B3C5D] via-[#1565C0] to-[#0B3C5D] text-white py-12 md:py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20" aria-hidden="true">
          {/* Decorative BG image: hidden from AT; keeps layout unchanged */}
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1614295334477-885b757c8ad3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXhpJTIwY2FyJTIwcmVudGFsJTIwaW5kaWF8ZW58MXx8fHwxNzY1NjQ3MjM5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt=""
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
            fetchpriority="low"
          />
        </div>
        
        <div className="container mx-auto px-3 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-3 mb-3">
                <span className="h-1 w-10 bg-[#FFC107] rounded-full" />
                <span className="uppercase tracking-[0.25em] text-sm sm:text-base md:text-lg font-semibold text-white/80">Since 2000</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight font-black" style={{ fontFamily: 'Poppins, sans-serif' }}>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#FFC107] via-[#FFD54F] to-white drop-shadow-[0_4px_24px_rgba(255,193,7,0.35)]">
                  Surya Travels
                </span>
                <span className="block text-white/85 text-2xl sm:text-3xl md:text-4xl lg:text-4xl mt-2">
                 24 Hours Taxi Service Company in
                </span>
                <span className="inline-flex items-center gap-2 text-lg sm:text-xl md:text-2xl text-[#FFC107] mt-3">
                  <Sparkles className="h-5 w-5" />
                  <span>INDIA & Beyond</span>
                </span>
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
                25+ Years | Safe & Affordable | Best Cars & Luxury Buses | Experienced Drivers (25+ Years) | Friendly, Safe & Comfortable Service | On-Time Every Time | Easy Booking | Agra and beyond.
                <span className="ml-2 inline-flex items-center gap-2">
                  <span className="text-white/80">Owner:</span>
                  <span className="uppercase tracking-wide font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FFC107] via-[#FFD54F] to-white drop-shadow-[0_2px_12px_rgba(255,193,7,0.35)]">
                    D.K SHARMA
                  </span>
                </span>
              </p>
              
              <div className="grid grid-cols-3 gap-3 md:gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur-sm p-3 md:p-4 rounded-lg border-2 border-[#1ABC9C]">
                  <CheckCircle className="h-6 w-6 md:h-8 md:w-8 text-[#1ABC9C] mb-2" />
                  <p className="text-xs md:text-sm leading-snug">Verified Drivers</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-3 md:p-4 rounded-lg border-2 border-[#1ABC9C]">
                  <Navigation className="h-6 w-6 md:h-8 md:w-8 text-[#1ABC9C] mb-2" />
                  <p className="text-xs md:text-sm leading-snug">GPS Enabled</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-3 md:p-4 rounded-lg border-2 border-[#1ABC9C]">
                  <Clock className="h-6 w-6 md:h-8 md:w-8 text-[#1ABC9C] mb-2" />
                  <p className="text-xs md:text-sm leading-snug">24×7 Service</p>
                </div>
              </div>
            </motion.div>

            {/* Right Booking Form */}
            <motion.div
              id="booking"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-2xl p-6 md:p-8"
            >
              <div className="bg-[#FFC107] text-[#0B3C5D] px-3 py-2 rounded-lg inline-block mb-4">
                <p className="font-bold text-sm md:text-base">🎉 Book Now & Get 10% OFF!</p>
              </div>
              
              <h3 className="text-2xl md:text-3xl text-[#0B3C5D] mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Quick Booking Form
              </h3>
              
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleFormChange}
                  placeholder="Your Name"
                  required
                  className="w-full px-3 py-2 md:py-2.5 border-2 border-gray-200 rounded-lg focus:border-[#FFC107] outline-none text-gray-800 text-sm"
                />
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleFormChange}
                  placeholder="Mobile Number"
                  required
                  pattern="[6-9]\d{9}"
                  title="Please enter a valid 10-digit mobile number"
                  className="w-full px-3 py-2 md:py-2.5 border-2 border-gray-200 rounded-lg focus:border-[#FFC107] outline-none text-gray-800 text-sm"
                />
                <input
                  type="text"
                  name="pickup"
                  value={formData.pickup}
                  onChange={handleFormChange}
                  placeholder="Pickup Location"
                  required
                  className="w-full px-3 py-2 md:py-2.5 border-2 border-gray-200 rounded-lg focus:border-[#FFC107] outline-none text-gray-800 text-sm"
                />
                <input
                  type="text"
                  name="drop"
                  value={formData.drop}
                  onChange={handleFormChange}
                  placeholder="Drop Location"
                  required
                  className="w-full px-3 py-2 md:py-2.5 border-2 border-gray-200 rounded-lg focus:border-[#FFC107] outline-none text-gray-800 text-sm"
                />
                {/* <select className="w-full px-3 py-2 md:py-2.5 border-2 border-gray-200 rounded-lg focus:border-[#FFC107] outline-none text-gray-800 text-sm">
                  <option>Select Trip Type</option>
                  <option>One Way</option>
                  <option>Round Trip</option>
                  <option>Local</option>
                  <option>Outstation</option>
                </select>
                <input
                  type="number"
                  min="1"
                  max="50"
                  placeholder="Number of Passengers"
                  className="w-full px-3 py-2 md:py-2.5 border-2 border-gray-200 rounded-lg focus:border-[#FFC107] outline-none text-gray-800 text-sm"
                /> */}
                <select 
                  name="carType"
                  value={formData.carType}
                  onChange={handleFormChange}
                  required
                  className="w-full px-3 py-2 md:py-2.5 border-2 border-gray-200 rounded-lg focus:border-[#FFC107] outline-none text-gray-800 text-sm"
                >
                  <option value="">Select Car Type</option>
                  <option value="Dzire">Dzire</option>
                  <option value="Sedan">Sedan</option>
                  <option value="Ertiga">Ertiga</option>
                  <option value="Kia Carens">Kia Carens</option>
                  <option value="Innova Crysta">Innova Crysta</option>
                  <option value="Bus">Bus</option>
                  <option value="Tempo Travellor">Tempo Travellor</option>
                </select>
                <div className="relative">
                  <div className="flex items-center w-full">
                    <input
                      id="bookingDateVisible"
                      type="text"
                      inputMode="numeric"
                      maxLength={8}
                      placeholder="DD-MM-YY"
                      aria-label="Booking date (DD-MM-YY)"
                      pattern="\d{2}-\d{2}-\d{2}"
                      title="Enter date as DD-MM-YY"
                      onInput={(e) => {
                        const input = e.currentTarget as HTMLInputElement;
                        // Clear any previous custom validity messages
                        input.setCustomValidity('');
                        
                        const digits = input.value.replace(/\D/g, '').slice(0, 6);
                        let out = '';
                        if (digits.length <= 2) out = digits;
                        else if (digits.length <= 4) out = digits.slice(0,2) + '-' + digits.slice(2);
                        else out = digits.slice(0,2) + '-' + digits.slice(2,4) + '-' + digits.slice(4);
                        input.value = out;
                      }}
                      onBlur={(e) => {
                        const input = e.currentTarget as HTMLInputElement;
                        const v = input.value;
                        const re = /^(\d{2})-(\d{2})-(\d{2})$/;
                        const m = v.match(re);
                        if (!m) {
                          if (v) {
                            input.setCustomValidity('Please enter date as DD-MM-YY (e.g., 25-06-25)');
                          } else {
                            input.setCustomValidity('');
                          }
                        } else {
                          const day = parseInt(m[1], 10);
                          const month = parseInt(m[2], 10);
                          if (month < 1 || month > 12) {
                            input.setCustomValidity('Month must be between 01 and 12');
                          } else if (day < 1 || day > 31) {
                            input.setCustomValidity('Invalid day for the given month');
                          } else if (month === 2 && day > 29) {
                            input.setCustomValidity('February can have at most 29 days');
                          } else if ([4,6,9,11].includes(month) && day > 30) {
                            input.setCustomValidity('This month has only 30 days');
                          } else {
                            input.setCustomValidity('');
                          }
                        }
                        input.reportValidity();
                      }}
                      className="w-full px-3 py-2 md:py-2.5 border-2 border-gray-200 rounded-l-lg focus:border-[#FFC107] outline-none text-gray-800 text-sm"
                    />

                    <button
                      type="button"
                      onClick={() => {
                        const hidden = document.getElementById('bookingDateHidden') as HTMLInputElement | null;
                        if (!hidden) return;
                        if (typeof (hidden as any).showPicker === 'function') {
                          try { (hidden as any).showPicker(); return; } catch (err) { /* ignore */ }
                        }
                        hidden.click();
                      }}
                      className="bg-white border-2 border-l-0 border-gray-200 rounded-r-lg px-3 py-2 flex items-center justify-center text-gray-700 hover:bg-gray-50"
                      aria-label="Open calendar"
                    >
                      <Calendar className="h-5 w-5" />
                    </button>
                  </div>

                  <input
                    id="bookingDateHidden"
                    type="date"
                    name="date"
                    className="sr-only"
                    onChange={(e) => {
                      const val = e.currentTarget.value; // YYYY-MM-DD
                      if (!val) return;
                      const parts = val.split('-');
                      if (parts.length !== 3) return;
                      const y = parts[0].slice(2); // last two digits
                      const m = parts[1];
                      const d = parts[2];
                      const visible = document.getElementById('bookingDateVisible') as HTMLInputElement | null;
                      if (visible) visible.value = `${d}-${m}-${y}`;
                      // Also update form data
                      setFormData(prev => ({ ...prev, date: `${d}-${m}-${y}` }));
                    }}
                  />
                  
                </div>
                <button
                  type="submit"
                  disabled={formStatus === 'loading'}
                  className={`w-full py-1.5 md:py-2 rounded-lg font-bold text-xs md:text-sm transition-all hover:scale-105 shadow-lg ${
                    formStatus === 'loading' 
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                      : 'bg-[#FFC107] text-[#0B3C5D] hover:bg-[#FFD54F]'
                  }`}
                >
                  {formStatus === 'loading' ? 'Sending...' : 'Book Your Cab Now →'}
                </button>

                {/* Status Messages */}
                {formStatus === 'success' && (
                  <div className="bg-green-100 border-2 border-green-500 text-green-700 px-4 py-3 rounded-lg text-sm">
                    {formMessage}
                  </div>
                )}
                {formStatus === 'error' && (
                  <div className="bg-red-100 border-2 border-red-500 text-red-700 px-4 py-3 rounded-lg text-sm">
                    {formMessage}
                  </div>
                )}
              </form>
              
              <p className="text-center text-gray-500 text-sm md:text-base mt-4">
                ⚡ 45-Minute Guaranteed Confirmation
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section
        ref={statsRef}
        className="bg-gradient-to-r from-[#FF6F00] via-[#FFC107] to-[#FF6F00] py-4 sm:py-5 md:py-7"
      >
        <div className="container mx-auto px-3 site-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-5 text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Trophy className="h-8 w-8 md:h-10 md:w-10 mx-auto mb-1" />
              <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {yearsCount}+
              </p>
              <p className="text-base md:text-lg">Years Experience</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Smile className="h-8 w-8 md:h-10 md:w-10 mx-auto mb-1" />
              <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {customersCount.toLocaleString()}+
              </p>
              <p className="text-base md:text-lg">Happy Customers</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Car className="h-8 w-8 md:h-10 md:w-10 mx-auto mb-1" />
              <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {vehiclesCount}+
              </p>
              <p className="text-base md:text-lg">Vehicles</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Globe className="h-8 w-8 md:h-10 md:w-10 mx-auto mb-1" />
              <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Pan-India
              </p>
              <p className="text-base md:text-lg">Service Coverage</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-10 md:py-12 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl mb-3 text-[#0B3C5D] leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Why Choose <span className="text-[#FFC107]">Surya Travels?</span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600">
              Your Safety, Comfort & Satisfaction is Our Mission
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              {
                icon: <Zap className="h-6 w-6 md:h-8 md:w-8" />,
                title: 'Hassle-Free Online Booking',
                desc: 'Book your cab in just 2 minutes with our simple online system',
                color: 'bg-gradient-to-br from-[#FFC107] to-[#FF6F00]',
              },
              {
                icon: <Clock className="h-5 w-5 md:h-6 md:w-6" />,
                title: '45-Minute Guaranteed Confirmation',
                desc: 'Get instant confirmation within 45 minutes ',
                color: 'bg-gradient-to-br from-[#1ABC9C] to-[#16A085]',
              },
              {
                icon: <DollarSign className="h-5 w-5 md:h-6 md:w-6" />,
                title: 'Transparent Pricing',
                desc: 'No hidden charges. What you see is what you pay',
                color: 'bg-gradient-to-br from-[#0B3C5D] to-[#1565C0]',
              },
              {
                icon: <Users className="h-5 w-5 md:h-6 md:w-6" />,
                title: 'Professional & Polite Drivers',
                desc: 'Verified, trained, and experienced drivers for your safety',
                color: 'bg-gradient-to-br from-[#FF6F00] to-[#E65100]',
              },

              {
                icon: <Sparkles className="h-5 w-5 md:h-6 md:w-6" />,
                title: 'Clean & Sanitized Cars',
                desc: 'Regular cleaning and sanitization after every ride',
                color: 'bg-gradient-to-br from-[#8E24AA] to-[#6A1B9A]',
              },

              {
                icon: <Phone className="h-5 w-5 md:h-6 md:w-6" />,
                title: 'On Call Customer Support',
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
                whileHover={{ y: -8, scale: 1.01 }}
                className="bg-white rounded-2xl shadow p-4 md:p-6 border border-gray-100 hover:border-[#FFC107] transition-all cursor-pointer"
              >
                <div className={`${item.color} text-white w-8 h-8 md:w-10 md:h-10 rounded-2xl flex items-center justify-center mb-4 shadow`}>
                  {item.icon}
                </div>
                <h3 className="text-sm md:text-base lg:text-lg mb-2 text-[#0B3C5D] leading-snug" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Fleet */}
      <section id="fleet" className="py-16 md:py-20 bg-gradient-to-br from-[#FFFDF8] to-[#FFF8E1]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl mb-3 text-[#0B3C5D] leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Our <span className="text-[#FFC107]">Premium Fleet</span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600">Choose the Perfect Ride for Your Journey</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 md:gap-8">
            {[
              {
                name: 'Dzire',
                image: dzire,
                seats: '4 Seater',
                bags: '4 Bags',
                running: '250 Km Per day',
                allowance: 'Rs.500/-',
                price: '₹11/km',
                color: 'bg-[#FFC107]',
              },
              {
                name: 'Etios',
                image: etios,
                seats: '4 Seater',
                bags: '4 Bags',
                running: '250 Km Per day',
                allowance: 'Rs.500/=',
                price: '₹11/km',
                color: 'bg-[#FFC107]',
              },
              {
                name: 'Ertiga',
                image: ertiga,
                seats: '6-7 Seater',
                bags: '5 Bags',
                running: '250 Km Per day',
                allowance: 'Rs.500/-',
                price: '₹16/km',
                color: 'bg-[#0B3C5D]',
              },
              {
                name: 'Innova Crysta',
                image: innova,
                seats: '6-7 Seater',
                bags: '4 Bags',
                running: '250 Km Per day',
                allowance: 'Rs.500/-',
                price: '₹18/km',
                color: 'bg-[#8E24AA]',
              },
              {
                name: 'Kia Carens',
                image: carens,
                seats: '7 Seater',
                bags: '4 Bags',
                running: '250 Km Per day',
                allowance: 'Rs.500/-',
                price: '₹15/km',
                color: 'bg-[#D32F2F]',
              },
              {
                name: 'Urbania',
                image: urbania,
                seats: '17 Seater',
                bags: '8 Bags',
                running: '250 Km Per day',
                allowance: 'Rs.500/=',
                price: '₹32/km',
                color: 'bg-[#1976D2]',
                },
                 {
                name: 'Mini Bus',
                image: traveller,
                seats: '12-20 Passenger',
                bags: '5 Bags',
                running: '250 Km Per day',
                allowance: 'Rs.500/-',
                price: '₹30/km',
                color: 'bg-[#FF6F00]',
              },
                {
                name: 'Bus',
                image: bus2,
                seats: '28 Seater',
                bags: '6 Bags',
                running: '250 Km Per day',
                allowance: 'Rs.500/-',
                price: '₹35/km',
                color: 'bg-[#1ABC9C]',
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
                <div className="relative h-36 sm:h-40 md:h-48 flex items-center justify-center bg-gray-50 overflow-hidden">
                  <ImageWithFallback
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-full object-contain p-3 md:p-4 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 md:p-6">
                  <h3 className="text-lg md:text-xl lg:text-2xl mb-4 text-[#0B3C5D] leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {vehicle.name}
                  </h3>
                  
                  {/* Specifications with red checkmarks */}
                  <div className="space-y-2 mb-4 text-sm md:text-base text-gray-700">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-[#DC2626] flex-shrink-0 mt-0.5" />
                      <span className="leading-snug">{vehicle.seats}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-[#DC2626] flex-shrink-0 mt-0.5" />
                      <span className="leading-snug">{vehicle.bags}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-[#DC2626] flex-shrink-0 mt-0.5" />
                      <span className="leading-snug">{vehicle.running} Minimum Running</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-[#DC2626] flex-shrink-0 mt-0.5" />
                      <span className="leading-snug">Driver Allowance {vehicle.allowance}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-[#DC2626] flex-shrink-0 mt-0.5" />
                      <span className="leading-snug">Toll, State Tax & Parking Extra</span>
                    </div>
                  </div>
                  
                  <p className="text-2xl md:text-3xl text-[#FFC107] mb-4">{vehicle.price}</p>
                  <button
                    className={`w-full ${vehicle.color} text-white py-2 md:py-2.5 rounded-lg font-semibold text-sm hover:opacity-90 transition-all transform group-hover:translate-y-0 translate-y-2 opacity-0 group-hover:opacity-100`}
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
      <section id="services" className="py-10 md:py-12 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl mb-3 text-[#0B3C5D] leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Our <span className="text-[#FFC107]">Services</span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600">Comprehensive Taxi & Rental Solutions</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              {
                icon: <MapPin className="h-8 w-8 md:h-10 md:w-10" />,
                title: 'Local Taxi Service',
                desc: 'City tours, shopping, meetings, and local transportation',
                gradient: 'from-[#FFC107] to-[#FF6F00]',
              },
              {
                icon: <Navigation className="h-10 w-10 md:h-12 md:w-12" />,
                title: 'One-Way Taxi Service',
                desc: 'Travel without worrying about return fare. Pay only one way',
                gradient: 'from-[#1ABC9C] to-[#16A085]',
              },
              {
                icon: <Car className="h-10 w-10 md:h-12 md:w-12" />,
                title: 'Airport Taxi Service',
                desc: 'Timely pickup & drop from all major airports',
                gradient: 'from-[#0B3C5D] to-[#1565C0]',
              },
              {
                icon: <Users className="h-10 w-10 md:h-12 md:w-12" />,
                title: 'Corporate Taxi Service',
                desc: 'Professional transportation for businesses and executives',
                gradient: 'from-[#8E24AA] to-[#6A1B9A]',
              },
              {
                icon: <Globe className="h-10 w-10 md:h-12 md:w-12" />,
                title: 'Outstation Taxi Service',
                desc: 'Long-distance travel with comfortable and safe rides',
                gradient: 'from-[#FF6F00] to-[#E65100]',
              },
              {
                icon: <Heart className="h-10 w-10 md:h-12 md:w-12" />,
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
                className="relative bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg p-4 md:p-6 border-2 border-gray-100 hover:border-[#FFC107] transition-all cursor-pointer overflow-hidden group"
              >
                <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br ${service.gradient} opacity-10 rounded-full -mr-8 -mt-8 group-hover:scale-150 transition-transform duration-500`}></div>
                <div className={`bg-gradient-to-br ${service.gradient} text-white w-8 h-8 md:w-10 md:h-10 rounded-2xl flex items-center justify-center mb-4 shadow-lg`}>
                  {service.icon}
                </div>
                <h3 className="text-sm md:text-base lg:text-lg mb-2 text-[#0B3C5D] leading-snug" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {service.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">{service.desc}</p>
                <ChevronRight className="absolute bottom-4 right-4 h-6 w-6 text-[#FFC107] opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tour Packages */}
      <section id="packages" className="py-10 md:py-12 bg-gradient-to-br from-[#0B3C5D] to-[#1565C0] text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-3 leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Popular <span className="text-[#FFC107]">Tour Packages</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-200">Explore India with Our Curated Travel Packages</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              { key: 'agraLocal', badge: 'Local Favorite', badgeColor: 'bg-[#1ABC9C]' },
              { key: 'delhiAgra', badge: 'Best Seller', badgeColor: 'bg-[#FF6F00]' },
              { key: 'mathuraVrindavan', badge: 'Popular', badgeColor: 'bg-[#1ABC9C]' },
              { key: 'goldenTriangle', badge: 'Trending', badgeColor: 'bg-[#FFC107]' },
              { key: 'delhiManali', badge: 'Family Special', badgeColor: 'bg-[#8E24AA]' },
              { key: 'chardham', badge: 'Sacred Journey', badgeColor: 'bg-[#FF6F00]' },
              { key: 'delhiHaridwar', badge: 'Spiritual', badgeColor: 'bg-[#D32F2F]' },
            ].map((meta, index) => {
              const data = packagesData[meta.key as keyof typeof packagesData];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-white text-gray-800 rounded-2xl shadow-lg overflow-hidden cursor-pointer group"
                >
                  <div className="relative h-48 sm:h-52 md:h-56 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
                    <ImageWithFallback
                      src={data.image}
                      alt={data.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className={`absolute top-3 right-3 ${meta.badgeColor} text-white px-2.5 py-1 rounded-full text-xs font-bold shadow-lg`}>
                      {meta.badge}
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                      <p className="text-white text-xs md:text-sm">
                        <Calendar className="inline h-3 w-3 mr-1" />
                        {data.duration}
                      </p>
                    </div>
                  </div>
                  <div className="p-4 md:p-5">
                    <h3 className="text-base md:text-lg lg:text-xl mb-3 text-[#0B3C5D] leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      {data.name}
                    </h3>
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-gray-500 text-sm md:text-sm">Starting from</p>
                        <p className="text-xl md:text-2xl text-[#FFC107]">{data.price}</p>
                      </div>
                      <button 
                        onClick={() => setSelectedPackage(meta.key as keyof typeof packagesData)}
                        className="bg-[#0B3C5D] text-white px-3 md:px-4 py-1.5 md:py-2 rounded-lg font-semibold hover:bg-[#1565C0] transition-all text-xs md:text-sm whitespace-nowrap"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Locations */}
      <section className="py-10 md:py-12 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl mb-3 text-[#0B3C5D] leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Our <span className="text-[#FFC107]">Service Locations</span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600">Serving Across Major Cities in India</p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
            {[
              { name: 'Agra', icon: '🕌' },
              { name: 'Delhi', icon: '🏛️' },
              { name: 'Jaipur', icon: '🏰' },
              { name: 'Himachal', icon: '🏔️' },
              { name: 'Uttarakhand', icon: '🗻' },
              { name: 'Chandigarh', icon: '🌳' },

            ].map((location, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.1, backgroundColor: '#FFC107' }}
                className="bg-gradient-to-br from-[#FFFDF8] to-white border-2 border-[#FFC107] rounded-xl p-3 md:p-4 text-center cursor-pointer transition-all hover:shadow-xl"
              >
                <div className="text-2xl md:text-3xl mb-1">{location.icon}</div>
                <p className="text-sm md:text-sm lg:text-base text-[#0B3C5D]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {location.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-10 md:py-12 bg-gradient-to-br from-[#FFFDF8] to-[#FFF8E1]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl mb-3 text-[#0B3C5D] leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
              What Our <span className="text-[#FFC107]">Customers Say</span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600">Real Stories from Real Travelers</p>
          </motion.div>

          {/* Reviews data and Google-style rating */}
          {(() => {
            const reviews = [
              {
                name: 'Rajesh Kumar',
                type: 'Family Tour',
                rating: 4,
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
                rating: 4,
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
                rating: 4,
                review: 'Quick booking, timely pickup, and professional service. Will definitely use again for airport transfers!',
                color: 'bg-gradient-to-br from-[#D32F2F] to-[#C62828]',
              },
            ];

            const avg = reviews.reduce((s, r) => s + r.rating, 0) / reviews.length;
            const roundedAvg = Math.round(avg * 10) / 10;
            const full = Math.floor(avg);
            const hasHalf = avg - full >= 0.5;

            return (
              <>
                <div className="flex items-center justify-center mb-6">
                  <div className="inline-flex items-center gap-3 bg-white rounded-full px-4 py-2 shadow-sm">
                    <div className="flex items-center gap-1">
                      {[0,1,2,3,4].map((i) => (
                        i < full ? (
                          <Star key={i} className="h-4 w-4 fill-[#FFC107] text-[#FFC107]" />
                        ) : i === full && hasHalf ? (
                          <StarHalf key={i} className="h-4 w-4 fill-[#FFC107] text-[#FFC107]" />
                        ) : (
                          <Star key={i} className="h-4 w-4 text-gray-300" />
                        )
                      ))}
                    </div>
                    <div className="text-left">
                      <div className="text-lg font-bold text-[#0B3C5D]">{roundedAvg}</div>
                      <div className="text-xs text-gray-500">{reviews.length} reviews</div>
                    </div>
                    <div className="text-xs text-gray-400 ml-2">• Google</div>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                  {reviews.map((review, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -5 }}
                      className="bg-white rounded-2xl shadow-lg p-4 md:p-6 border-2 border-gray-100 hover:border-[#FFC107] transition-all"
                    >
                      <div className="flex items-center gap-1 mb-3">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 md:h-5 md:w-5 fill-[#FFC107] text-[#FFC107]" />
                        ))}
                      </div>
                      <p className="text-sm md:text-base text-gray-700 mb-4 italic leading-relaxed">"{review.review}"</p>
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full ${review.color} flex items-center justify-center text-white text-lg md:text-xl`}>
                          {review.name.charAt(0)}
                        </div>
                        <div>
                          <p className="text-base md:text-lg text-[#0B3C5D]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                            {review.name}
                          </p>
                          <p className="text-sm md:text-base text-gray-500">{review.type}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </>
            );
          })() }
        </div>
      </section>

      {/* We Are Trusted By */}
      <section className="py-10 md:py-12 bg-gradient-to-br from-[#0B3C5D] to-[#1565C0] text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-3 leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
              We Are <span className="text-[#FFC107]">Trusted By</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-200">Our Prestigious Associations & Clientele</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              {
                key: 'cidShoot',
                icon: <Camera className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12" />,
                title: 'CID TV Show Shoot',
                desc: 'Official transport partner for CID TV production',
                gradient: 'from-[#FFC107] to-[#FF6F00]',
              },
              {
                key: 'weddings',
                icon: <Heart className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12" />,
                title: 'Wedding Events',
                desc: 'Over 1000+ weddings with seamless coordination',
                gradient: 'from-[#FF6F00] to-[#E65100]',
              },
              {
                key: 'filmShoots',
                icon: <Film className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12" />,
                title: 'Film & Media Shoots',
                desc: 'Trusted by Bollywood and regional film productions',
                gradient: 'from-[#8E24AA] to-[#6A1B9A]',
              },
              // {
              //   key: 'yatra',
              //   icon: <Users className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12" />,
              //   title: 'Religious Yatra Groups',
              //   desc: 'Chardham, Amarnath, Vaishno Devi pilgrimages',
              //   gradient: 'from-[#D32F2F] to-[#C62828]',
              // },
              // {
              //   key: 'familyTours',
              //   icon: <Award className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12" />,
              //   title: 'Family Tours',
              //   desc: 'Thousands of happy families across India',
              //   gradient: 'from-[#FF6F00] to-[#FFC107]',
              // },
              // {
              //   key: 'international',
              //   icon: <Globe className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12" />,
              //   title: 'International Tourists',
              //   desc: 'Guided tours for tourists from 50+ countries',
              //   gradient: 'from-[#1ABC9C] to-[#16A085]',
              // },
            ].map((association, index) => (
              <motion.button
                key={index}
                onClick={() => openGallery(association.key)}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-6 border-2 border-white/20 hover:border-[#FFC107] transition-all cursor-pointer text-left"
              >
                <div className={`bg-gradient-to-br ${association.gradient} w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-2xl`}>
                  {association.icon}
                </div>
                <h3 className="text-base md:text-lg lg:text-xl mb-2 text-center leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {association.title}
                </h3>
                <p className="text-gray-200 text-center text-sm md:text-sm leading-relaxed">{association.desc}</p>
                <p className="text-[#FFC107] text-center text-xs md:text-sm mt-3">Click to view gallery →</p>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery & Memories */}
      <section className="py-10 md:py-12 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl mb-3 text-[#0B3C5D] leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Our Journey & <span className="text-[#FFC107]">Travel Memories</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600">Capturing Beautiful Moments with Our Customers</p>
          </motion.div>

          {/* On mobile use a horizontal slider; on larger screens keep Masonry */}
          {isMobile ? (
            <div className="-mx-4 px-4 pb-4">
              <div
                className="flex gap-4 overflow-x-auto snap-x snap-mandatory touch-pan-x -mx-2 py-2"
              >
                {[
                  { image: 'https://images.unsplash.com/photo-1716896427993-ddad7c7ec891?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWolMjBtYWhhbCUyMGFncmElMjBpbmRpYXxlbnwxfHx8fDE3NjU2NDcyNDF8MA&ixlib=rb-4.1.0&q=80&w=1080', title: 'Taj Mahal Tour' },
                  { image: cid1, title: 'CID TV Show Shoot'},
                  { image: post6, title: 'Happy Customers' },
                  { image: post7, title: 'Trusted by Government' },
                  { image: post5, title: 'SUV Collection' },
                  { image: 'https://images.unsplash.com/photo-1611086287080-d3823629dd77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2FkJTIwdHJpcCUyMG1vdW50YWluc3xlbnwxfHx8fDE3NjU2NDcyNDN8MA&ixlib=rb-4.1.0&q=80&w=1080', title: 'Mountain Road Trip' },
                  { image: 'https://images.unsplash.com/photo-1734851561126-75ed6a55a5ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWxoaSUyMGluZGlhJTIwZ2F0ZXxlbnwxfHx8fDE3NjU2NDIwNDV8MA&ixlib=rb-4.1.0&q=80&w=1080', title: 'Delhi Exploration' },
                  {image: wedding3, title: 'Wedding Events' },
                  { image: 'https://images.unsplash.com/photo-1712999533944-9200e6b20e27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZW1wbGUlMjByZWxpZ2lvdXMlMjBpbmRpYXxlbnwxfHx8fDE3NjU2NDcyNDN8MA&ixlib=rb-4.1.0&q=80&w=1080', title: 'Temple Pilgrimage' },
                  { image: post9, title: 'Visting Card' },
                  {image :film1, title: 'TV & Film Shoots' },
                  { image: post4, title: 'Luxury Fleet' },
                  { image: post8, title: 'Daily Use' },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.02 }}
                    onClick={() => setSelectedMemory(item.image)}
                    className="min-w-[82%] flex-shrink-0 relative rounded-2xl overflow-hidden shadow-lg cursor-pointer group snap-center"
                  >
                    <ImageWithFallback
                      src={item.image}
                      alt={item.title}
                      className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                      decoding="async"
                      sizes="(max-width: 640px) 82vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-3">
                        <p className="text-white text-sm md:text-base lg:text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>
                          {item.title}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}

                {selectedMemory && (
                  <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
                    role="dialog"
                    aria-modal="true"
                    onClick={() => setSelectedMemory(null)}
                  >
                    <div className="relative max-w-[90vw] max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
                      <button
                        aria-label="Close"
                        onClick={() => setSelectedMemory(null)}
                        className="absolute -top-3 -right-3 bg-white rounded-full p-1 shadow-lg"
                      >
                        <X className="h-5 w-5 text-[#0B3C5D]" />
                      </button>
                      <img src={selectedMemory} alt="Travel memory" loading="lazy" decoding="async" width={1200} height={800} className="rounded-lg shadow-lg object-contain max-w-[90vw] max-h-[90vh] w-auto h-auto" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <Masonry columnsCount={isTablet ? 2 : 3} gutter="0.5rem">
              {[
                { image: 'https://images.unsplash.com/photo-1716896427993-ddad7c7ec891?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWolMjBtYWhhbCUyMGFncmElMjBpbmRpYXxlbnwxfHx8fDE3NjU2NDcyNDF8MA&ixlib=rb-4.1.0&q=80&w=1080', title: 'Taj Mahal Tour' },
                { image: cid1, title: 'CID TV Show Shoot'},
                { image: post6, title: 'Happy Customers' },
                { image: post7, title: 'Trusted by Government' },
                 { image: post5, title: 'SUV Collection' },
                { image: 'https://images.unsplash.com/photo-1611086287080-d3823629dd77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2FkJTIwdHJpcCUyMG1vdW50YWluc3xlbnwxfHx8fDE3NjU2NDcyNDN8MA&ixlib=rb-4.1.0&q=80&w=1080', title: 'Mountain Road Trip' },
                 { image: 'https://images.unsplash.com/photo-1734851561126-75ed6a55a5ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWxoaSUyMGluZGlhJTIwZ2F0ZXxlbnwxfHx8fDE3NjU2NDIwNDV8MA&ixlib=rb-4.1.0&q=80&w=1080', title: 'Delhi Exploration' },
                {image: wedding3, title: 'Wedding Events' },
                { image: 'https://images.unsplash.com/photo-1712999533944-9200e6b20e27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZW1wbGUlMjByZWxpZ2lvdXMlMjBpbmRpYXxlbnwxfHx8fDE3NjU2NDcyNDN8MA&ixlib=rb-4.1.0&q=80&w=1080', title: 'Temple Pilgrimage' },
                { image: post9, title: 'Visting Card' },
                {image :film1, title: 'TV & Film Shoots' },
                { image: post4, title: 'Luxury Fleet' },
                { image: post8, title: 'Daily Use' },
               
              
               
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
                    loading="lazy"
                    decoding="async"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                      <p className="text-white text-sm md:text-base lg:text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        {item.title}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </Masonry>
          )}
        </div>
      </section>

      {/* About Us */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#FFFDF8] to-[#FFF8E1]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 text-[#0B3C5D] leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Our <span className="text-[#FFC107]">Story</span>
              </h2>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-[#FFC107] rounded-full w-12 h-12 md:w-14 md:h-14 flex items-center justify-center flex-shrink-0">
                    <Trophy className="h-6 w-6 md:h-7 md:w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl lg:text-2xl mb-2 text-[#0B3C5D] leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      Established in 2000
                    </h3>
                    <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                      Started with just 3 vehicles, now operating a fleet of 100+ premium cars across India.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-[#1ABC9C] rounded-full w-12 h-12 md:w-14 md:h-14 flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 md:h-7 md:w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl lg:text-2xl mb-2 text-[#0B3C5D] leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      Safe & Reliable
                    </h3>
                    <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                      All drivers undergo rigorous background checks and training. GPS tracking and 24/7 monitoring for your safety.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-[#0B3C5D] rounded-full w-12 h-12 md:w-14 md:h-14 flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 md:h-7 md:w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl lg:text-2xl mb-2 text-[#0B3C5D] leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      Corporate & VIP Services
                    </h3>
                    <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                      Trusted by government officials, celebrities, and major corporations for executive transportation.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-[#FF6F00] rounded-full w-12 h-12 md:w-14 md:h-14 flex items-center justify-center flex-shrink-0">
                    <Globe className="h-6 w-6 md:h-7 md:w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl lg:text-2xl mb-2 text-[#0B3C5D] leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      Nationwide Coverage
                    </h3>
                    <p className="text-base md:text-lg text-gray-600 leading-relaxed">
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
              {/* <div className="grid grid-cols-2 gap-4">
                <ImageWithFallback
                  src={post1}
                  alt="my image"
                  className="rounded-2xl shadow-lg h-32 md:h-40 w-full object-fullcover"
                />
                <ImageWithFallback
                  src={post2}
                  alt="Premium Cars"
                  className="rounded-2xl shadow-lg h-28 md:h-36 w-full object-cover mt-6"
                />
                <ImageWithFallback
                  src={post3}
                  alt="SUV Collection"
                  className="rounded-2xl shadow-lg h-28 md:h-36 w-full object-cover -mt-4"
                />
                <ImageWithFallback
                  src={post4}
                  alt="Luxury Cars"
                  className="rounded-2xl shadow-lg h-32 md:h-40 w-full object-cover"
                />
              </div> */}
              <div className="grid grid-cols-2 gap-4">
  <div className="rounded-2xl shadow-lg overflow-hidden h-52 md:h-64 w-full">
    <ImageWithFallback
      src={post1}
      alt="My image"
      className="w-full h-full object-cover"
      loading="lazy"
      decoding="async"
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
    />
  </div>

  <div className="rounded-2xl shadow-lg overflow-hidden h-52 md:h-64 w-full">
    <ImageWithFallback
      src={post2}
      alt="Premium Cars"
      className="w-full h-full object-cover"
      loading="lazy"
      decoding="async"
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
    />
  </div>
</div>




            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="contact" className="py-16 md:py-20 bg-gradient-to-r from-[#FF6F00] via-[#c8a94d] to-[#FF6F00] text-white">
        <div className="container mx-auto px-3 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Looking for a Reliable Cab?
            </h2>
            <p className="text-xl sm:text-2xl md:text-3xl mb-12">
              Book Now & Travel <span className="font-bold">Stress-Free!</span>
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4 md:gap-6 justify-center">
              <motion.a
                href="tel:+919412157562"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#0B3C5D] px-3 md:px-4 py-2 md:py-3 rounded-full font-bold text-xs md:text-sm shadow-2xl flex items-center justify-center gap-2 hover:bg-gray-100 transition-all"
              >
                <Phone className="h-6 w-6" />
                Call Now: +91 9412157562
              </motion.a>

              <motion.a
                href="#booking"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#FFC107] text-[#0B3C5D] px-3 md:px-4 py-2 md:py-3 rounded-full font-bold text-xs md:text-sm shadow-2xl flex items-center justify-center gap-2 hover:bg-[#FFD54F] transition-all"
              >
                <MessageCircle className="h-6 w-6" />
                Book Now
              </motion.a>
            </div>

            <div className="mt-12 flex flex-wrap gap-8 justify-center text-left">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border-2 border-white/20">
                <Phone className="h-8 w-8 mb-3" />
                <p className="text-md">24/7 Helpline</p>
                <p className="text-xl">+91 8534067086</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border-2 border-white/20">
                <Mail className="h-8 w-8 mb-3" />
                <p className="text-md">Email Us</p>
                <p className="text-xl">suryatravels_dk@rediffmail.com</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border-2 border-white/20">
                <MapPin className="h-8 w-8 mb-3" />
                <p className="text-md">Head Office</p>
                <p className="text-xl">Minto Rd Shahid Nagar,Vibhav Nagar,Tajganj, Agra-282001</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#0B3C5D] text-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
            {/* Company Info */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 flex items-center justify-center">
                  <img src={logo1} alt="Surya Travels Logo" loading="lazy" decoding="async" className="h-14 rounded-md w-auto object-contain"/>
                  </div>
                <h3 className="text-3xl" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Surya Travels
                </h3>
              </div>
              <p className="text-sm md:text-base text-gray-300 mb-6 leading-relaxed">
                Your trusted partner for safe, reliable, and comfortable travel across India since 2000.
              </p>
              <div className="flex gap-4">
                <a href="https://www.facebook.com/profile.php?id=61581724743306" className="bg-white/10 p-3 rounded-lg hover:bg-[#FFC107] transition-all">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="https://www.instagram.com/surya_travels__/?fbclid=IwY2xjawOrkExleHRuA2FlbQIxMABicmlkETA2c00wcWdCMmxJWWFlTWlYc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHtlCnCvqTP2CpmsvdukJ069CiqrbbBby8TOBqxEYpVKU-fWXjAOOkPrRAlQS_aem_Cx1amo2rQoBAtOrSPDxh-g&brid=2tcnUJa9pAUyUIte3NMZ8A#" className="bg-white/10 p-3 rounded-lg hover:bg-[#FFC107] transition-all">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="suryatravelsd.k24@gmail.com" className="bg-white/10 p-3 rounded-lg hover:bg-[#FFC107] transition-all">
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg md:text-xl mb-6 text-[#FFC107]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Quick Links
              </h4>
              <ul className="space-y-3 text-sm md:text-base">
                <li><a href="#" className="text-gray-300 hover:text-[#FFC107] transition-colors">About Us</a></li>
                <li><a href="#services" className="text-gray-300 hover:text-[#FFC107] transition-colors">Our Services</a></li>
                <li><a href="#fleet" className="text-gray-300 hover:text-[#FFC107] transition-colors">Our Fleet</a></li>
                <li><a href="#packages" className="text-gray-300 hover:text-[#FFC107] transition-colors">Tour Packages</a></li>
                <li><a href="#contact" className="text-gray-300 hover:text-[#FFC107] transition-colors">Contact Us</a></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg md:text-xl mb-6 text-[#FFC107]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Our Services
              </h4>
              <ul className="space-y-3 text-sm md:text-base">
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
              <h4 className="text-lg md:text-xl mb-6 text-[#FFC107]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Popular Locations
              </h4>
              <ul className="space-y-3 text-sm md:text-base">
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
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm md:text-base">
              <p className="text-gray-300">
                © 2026 SuryaTravels Travels. All Rights Reserved.
              </p>
              <div className="flex flex-wrap gap-6 justify-center">
                <a href="#" className="text-gray-300 hover:text-[#FFC107] transition-colors">Privacy Policy</a>
                <a href="#" className="text-gray-300 hover:text-[#FFC107] transition-colors">Terms & Conditions</a>
                <a href="#" className="text-gray-300 hover:text-[#FFC107] transition-colors">Cancellation Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
    </MotionConfig>
  );
}
