import React, { useState } from 'react';
import Header from './components/Header';
import HeroSlider from './components/HeroSlider';
import BookingForm from './components/BookingForm';
import DoctorProfile from './components/DoctorProfile';
import GoogleReviews from './components/GoogleReviews';
import FacilityGallerySlider from './components/FacilityGallerySlider';
import FeaturedTreatments from './components/FeaturedTreatments';
import BeforeAfterBanner from './components/BeforeAfterBanner';
import WhyChooseUs from './components/WhyChooseUs';
import SkinTreatmentsGrid from './components/SkinTreatmentsGrid';
import HairTreatmentsGrid from './components/HairTreatmentsGrid';
import FAQAccordion from './components/FAQAccordion';
import LocationMapSection from './components/LocationMapSection';
import Footer from './components/Footer';
import TreatmentDetailModal from './components/TreatmentDetailModal';
import FloatingWidgets from './components/FloatingWidgets';

// Comprehensive Page Views
import SkinTreatmentsPage from './pages/SkinTreatmentsPage';
import HairTreatmentsPage from './pages/HairTreatmentsPage';
import CosmeticTreatmentsPage from './pages/CosmeticTreatmentsPage';
import LaserTreatmentsPage from './pages/LaserTreatmentsPage';
import AllTreatmentsPage from './pages/AllTreatmentsPage';
import AboutUsPage from './pages/AboutUsPage';
import AboutDoctorPage from './pages/AboutDoctorPage';
import PatientReviewsPage from './pages/PatientReviewsPage';
import GalleryPage from './pages/GalleryPage';
import BlogPage from './pages/BlogPage';
import LocalSeoPage from './pages/LocalSeoPage';
import FaqsPage from './pages/FaqsPage';
import BookAppointmentPage from './pages/BookAppointmentPage';
import ContactPage from './pages/ContactPage';
import LegalPage from './pages/LegalPage';
import SeoAuditReportPage from './pages/SeoAuditReportPage';

const PATH_TO_TAB = {
  '/': 'home',
  '/about-us': 'about',
  '/about': 'about',
  '/treatments': 'treatments',
  '/skin-treatments': 'skin',
  '/hair-treatments': 'hair',
  '/cosmetic-treatments': 'cosmetic',
  '/laser-treatments': 'laser',
  '/about-doctor': 'doctor',
  '/patient-reviews': 'reviews',
  '/gallery': 'gallery',
  '/blog': 'blog',
  '/areas-we-serve': 'local',
  '/faqs': 'faqs',
  '/book-appointment': 'book',
  '/contact-us': 'contact',
  '/contact': 'contact'
};

const TAB_TO_PATH = {
  'home': '/',
  'about': '/about-us',
  'doctor': '/about-doctor',
  'treatments': '/treatments',
  'skin': '/skin-treatments',
  'hair': '/hair-treatments',
  'cosmetic': '/cosmetic-treatments',
  'laser': '/laser-treatments',
  'reviews': '/patient-reviews',
  'gallery': '/gallery',
  'blog': '/blog',
  'local': '/areas-we-serve',
  'faqs': '/faqs',
  'book': '/book-appointment',
  'contact': '/contact-us'
};

import TreatmentDetailPage from './pages/TreatmentDetailPage';
import TrustStrip from './components/TrustStrip';
import SkinConcernNavigatorModal from './components/SkinConcernNavigatorModal';
import TreatmentCostPlannerModal from './components/TreatmentCostPlannerModal';
import MobileActionBar from './components/MobileActionBar';

// Mobile Blueprint Components
import './components/mobile/mobileView.css';
import MobileHomeView from './components/mobile/MobileHomeView';
import MobileSmartBookingModal from './components/mobile/MobileSmartBookingModal';
import MobilePatientPortalModal from './components/mobile/MobilePatientPortalModal';
import MobileViewDeviceSimulator from './components/mobile/MobileViewDeviceSimulator';

// Desktop Blueprint View (Blueprint 1)
import './components/desktop/desktopView.css';
import DesktopHomeView from './components/desktop/DesktopHomeView';

import {
  SKIN_CONDITIONS,
  HAIR_CONDITIONS,
  COSMETIC_TREATMENTS,
  LASER_TREATMENTS,
  MEDICAL_DERMATOLOGY_TREATMENTS
} from './data/clinicData';
import { Sparkles, Calculator, Compass, ArrowRight } from 'lucide-react';

const ALL_CLINIC_TREATMENTS = [
  ...SKIN_CONDITIONS,
  ...HAIR_CONDITIONS,
  ...COSMETIC_TREATMENTS,
  ...LASER_TREATMENTS,
  ...MEDICAL_DERMATOLOGY_TREATMENTS
];

export default function App() {
  const [selectedItem, setSelectedItem] = useState(() => {
    const path = window.location.pathname.toLowerCase();
    if (path.startsWith('/treatment/')) {
      const slug = path.replace('/treatment/', '');
      return ALL_CLINIC_TREATMENTS.find(t =>
        t.id.toLowerCase() === slug ||
        t.title.toLowerCase().replace(/[^a-z0-9]+/g, '-') === slug
      ) || ALL_CLINIC_TREATMENTS[0];
    }
    return null;
  });

  const [currentTab, setCurrentTabState] = React.useState(() => {
    const path = window.location.pathname.toLowerCase();
    if (path.startsWith('/treatment/')) return 'treatment-detail';
    return PATH_TO_TAB[path] || 'home';
  });

  const [isMobileViewport, setIsMobileViewport] = useState(() => {
    return typeof window !== 'undefined' ? window.innerWidth <= 850 : false;
  });
  const [isSimulatorOpen, setIsSimulatorOpen] = useState(false);
  const [isPortalOpen, setIsPortalOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isNavigatorOpen, setIsNavigatorOpen] = useState(false);
  const [isCostPlannerOpen, setIsCostPlannerOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  // Theme Management (Permanently Light Liquid Glass Design)
  const [isDarkMode, setIsDarkMode] = useState(false);

  React.useEffect(() => {
    document.documentElement.classList.remove('dark-theme');
    try {
      localStorage.setItem('medicare_theme', 'light');
    } catch (_) {}
  }, []);

  const toggleTheme = () => {};


  // Lock body scroll whenever any modal, simulator, or portal is open
  React.useEffect(() => {
    const isAnyModalOpen = isSimulatorOpen || isPortalOpen || isBookingModalOpen || isNavigatorOpen || isCostPlannerOpen;
    if (isAnyModalOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isSimulatorOpen, isPortalOpen, isBookingModalOpen, isNavigatorOpen, isCostPlannerOpen]);

  // Global ESC key listener to dismiss open modal
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsSimulatorOpen(false);
        setIsPortalOpen(false);
        setIsBookingModalOpen(false);
        setIsNavigatorOpen(false);
        setIsCostPlannerOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobileViewport(window.innerWidth <= 850);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const setCurrentTab = (tabId) => {
    setCurrentTabState(tabId);
    const targetPath = TAB_TO_PATH[tabId] || '/';
    if (window.location.pathname !== targetPath) {
      window.history.pushState({ tab: tabId }, '', targetPath);
    }
  };

  React.useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.toLowerCase();
      if (path.startsWith('/treatment/')) {
        const slug = path.replace('/treatment/', '');
        const matched = ALL_CLINIC_TREATMENTS.find(t =>
          t.id.toLowerCase() === slug ||
          t.title.toLowerCase().replace(/[^a-z0-9]+/g, '-') === slug
        );
        if (matched) setSelectedItem(matched);
        setCurrentTabState('treatment-detail');
      } else {
        setCurrentTabState(PATH_TO_TAB[path] || 'home');
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 5000);
  };

  const handleOpenBooking = () => {
    setIsBookingModalOpen(true);
  };

  const handleSelectItem = (item) => {
    setSelectedItem(item);
    setCurrentTabState('treatment-detail');
    const slug = item.id ? item.id.toLowerCase() : item.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    window.history.pushState({ tab: 'treatment-detail', item }, '', `/treatment/${slug}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`app-root ${currentTab === 'home' ? 'is-home-page' : 'is-inner-page'}`}>
      {/* Ambient Liquid Light Spheres for VisionOS-style Glass Refraction */}
      <div className="liquid-ambient-backdrop" aria-hidden="true">
        <div className="liquid-ambient-orb liquid-orb-1" />
        <div className="liquid-ambient-orb liquid-orb-2" />
        <div className="liquid-ambient-orb liquid-orb-3" />
        <div className="liquid-ambient-orb liquid-orb-4" />
      </div>

      {/* Header Navigation with Mega Menu & Theme Control */}
      <Header
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        onOpenBooking={handleOpenBooking}
        onSelectItem={handleSelectItem}
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
      />

      {/* Main View Router */}
      <main>
        {currentTab === 'treatment-detail' && selectedItem && (
          <TreatmentDetailPage
            item={selectedItem}
            onBack={() => setCurrentTab('treatments')}
            onOpenBooking={handleOpenBooking}
            onSuccessToast={showToast}
          />
        )}
        {currentTab === 'home' && (
          <DesktopHomeView
            onOpenBooking={handleOpenBooking}
            onOpenNavigator={() => setIsNavigatorOpen(true)}
            onOpenCostPlanner={() => setIsCostPlannerOpen(true)}
            onSelectTreatment={handleSelectItem}
            onTabChange={setCurrentTab}
          />
        )}

        {currentTab === 'skin' && (
          <SkinTreatmentsPage
            onSelectCondition={handleSelectItem}
            onSelectTreatment={handleSelectItem}
            onOpenBooking={handleOpenBooking}
          />
        )}

        {currentTab === 'hair' && (
          <HairTreatmentsPage
            onSelectCondition={handleSelectItem}
            onSelectTreatment={handleSelectItem}
            onOpenBooking={handleOpenBooking}
          />
        )}

        {currentTab === 'cosmetic' && (
          <CosmeticTreatmentsPage
            onSelectCondition={handleSelectItem}
            onSelectTreatment={handleSelectItem}
            onOpenBooking={handleOpenBooking}
          />
        )}

        {currentTab === 'laser' && (
          <LaserTreatmentsPage
            onSelectCondition={handleSelectItem}
            onSelectTreatment={handleSelectItem}
            onOpenBooking={handleOpenBooking}
          />
        )}

        {currentTab === 'treatments' && (
          <AllTreatmentsPage
            onSelectCondition={handleSelectItem}
            onSelectTreatment={handleSelectItem}
            onOpenBooking={handleOpenBooking}
          />
        )}

        {currentTab === 'about' && (
          <AboutUsPage onOpenBooking={handleOpenBooking} />
        )}

        {currentTab === 'doctor' && (
          <AboutDoctorPage onOpenBooking={handleOpenBooking} />
        )}

        {currentTab === 'reviews' && (
          <PatientReviewsPage onOpenBooking={handleOpenBooking} />
        )}

        {currentTab === 'gallery' && (
          <GalleryPage onOpenBooking={handleOpenBooking} />
        )}

        {currentTab === 'blog' && (
          <BlogPage onOpenBooking={handleOpenBooking} />
        )}

        {currentTab === 'local' && (
          <LocalSeoPage initialLocality="kanakapura-road" onOpenBooking={handleOpenBooking} />
        )}

        {currentTab === 'dermatologist-kanakapura-road' && (
          <LocalSeoPage initialLocality="kanakapura-road" onOpenBooking={handleOpenBooking} />
        )}

        {currentTab === 'dermatologist-jp-nagar' && (
          <LocalSeoPage initialLocality="jp-nagar" onOpenBooking={handleOpenBooking} />
        )}

        {currentTab === 'skin-clinic-banashankari' && (
          <LocalSeoPage initialLocality="banashankari" onOpenBooking={handleOpenBooking} />
        )}

        {currentTab === 'dermatologist-jayanagar' && (
          <LocalSeoPage initialLocality="jayanagar" onOpenBooking={handleOpenBooking} />
        )}

        {currentTab === 'areas-we-serve' && (
          <LocalSeoPage initialLocality="areas-we-serve" onOpenBooking={handleOpenBooking} />
        )}

        {currentTab === 'faqs' && (
          <FaqsPage onOpenBooking={handleOpenBooking} />
        )}

        {currentTab === 'book' && (
          <BookAppointmentPage onSuccessToast={showToast} />
        )}

        {currentTab === 'contact' && (
          <ContactPage onOpenBooking={handleOpenBooking} />
        )}

        {['privacy', 'terms', 'cancellation', 'disclaimer'].includes(currentTab) && (
          <LegalPage type={currentTab} />
        )}

        {currentTab === 'seo-audit' && (
          <SeoAuditReportPage />
        )}
      </main>


      {/* Footer */}
      <Footer onOpenBooking={handleOpenBooking} onTabChange={setCurrentTab} />

      {/* Sticky Badge & Floating WhatsApp */}
      <FloatingWidgets onOpenBooking={handleOpenBooking} />

      {/* Mobile Sticky Action Bar (Section 1.4 & 7.3 of spec & Blueprint 1 Screen 12) */}
      <MobileActionBar onOpenBooking={handleOpenBooking} />

      {/* AI-Era Skin Concern Navigator Modal (Blueprint 2 Screens 6–8) */}
      <SkinConcernNavigatorModal
        isOpen={isNavigatorOpen}
        onClose={() => setIsNavigatorOpen(false)}
        onOpenBooking={handleOpenBooking}
      />

      {/* CRO Treatment Cost Planner Modal (Blueprint 2 Screen 9) */}
      <TreatmentCostPlannerModal
        isOpen={isCostPlannerOpen}
        onClose={() => setIsCostPlannerOpen(false)}
        onOpenBooking={handleOpenBooking}
      />

      {/* Smart 5-Step Mobile Booking Journey (Blueprint 2 Screens 1–5) */}
      <MobileSmartBookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        onSuccessToast={showToast}
      />

      {/* Mobile Patient Portal, Aftercare & CRM Journey (Blueprint 2 Screens 10–12) */}
      <MobilePatientPortalModal
        isOpen={isPortalOpen}
        onClose={() => setIsPortalOpen(false)}
        onOpenBooking={handleOpenBooking}
      />

      {/* Desktop Simulator Frame for Mobile Blueprint */}
      <MobileViewDeviceSimulator
        isOpen={isSimulatorOpen}
        onClose={() => setIsSimulatorOpen(false)}
        onOpenBooking={handleOpenBooking}
        onOpenNavigator={() => setIsNavigatorOpen(true)}
        onOpenCostPlanner={() => setIsCostPlannerOpen(true)}
        onOpenPortal={() => setIsPortalOpen(true)}
        onSelectTreatment={handleSelectItem}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="toast-notification">
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
