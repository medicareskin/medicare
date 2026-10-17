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
import QSwitchedLaserTreatmentPage from './pages/QSwitchedLaserTreatmentPage';
import HydraFacialTreatmentPage from './pages/HydraFacialTreatmentPage';
import TreatmentComparisonSection from './components/TreatmentComparisonSection';

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
  '/contact': 'contact',
  '/q-switched-laser-melasma-pigmentation-bangalore': 'q-switched-laser',
  '/q-switched-laser-melasma-pigmentation-bangalore/': 'q-switched-laser',
  '/hydrafacial-bangalore': 'hydrafacial',
  '/hydrafacial-bangalore/': 'hydrafacial',
  '/treatment-comparison': 'comparison',
  '/treatment-comparison/': 'comparison',
  '/dermatologist-yelachenahalli': 'local-yelachenahalli',
  '/dermatologist-yelachenahalli/': 'local-yelachenahalli',
  '/dermatologist-kanakapura-road': 'local-kanakapura-road',
  '/dermatologist-kanakapura-road/': 'local-kanakapura-road',
  '/dermatologist-jp-nagar': 'local-jp-nagar',
  '/dermatologist-jp-nagar/': 'local-jp-nagar',
  '/skin-clinic-banashankari': 'local-banashankari',
  '/skin-clinic-banashankari/': 'local-banashankari',
  '/dermatologist-jayanagar': 'local-jayanagar',
  '/dermatologist-jayanagar/': 'local-jayanagar',
  '/dermatologist-kumaraswamy-layout': 'local-kumaraswamy-layout',
  '/dermatologist-kumaraswamy-layout/': 'local-kumaraswamy-layout',
  '/dermatologist-konanakunte': 'local-konanakunte',
  '/dermatologist-konanakunte/': 'local-konanakunte',
  '/dermatologist-padmanabhanagar': 'local-padmanabhanagar',
  '/dermatologist-padmanabhanagar/': 'local-padmanabhanagar',
  '/dermatologist-btm-layout': 'local-btm-layout',
  '/dermatologist-btm-layout/': 'local-btm-layout',
  '/acne-laser': 'skin',
  '/acne-laser/': 'skin',
  '/hair-care': 'hair',
  '/hair-care/': 'hair',
  '/chemical-peels': 'cosmetic',
  '/chemical-peels/': 'cosmetic',
  '/dermal-fillers-anti-wrinkle-injections': 'cosmetic',
  '/dermal-fillers-anti-wrinkle-injections/': 'cosmetic',
  '/microneedling-for-skin-tightening': 'cosmetic',
  '/microneedling-for-skin-tightening/': 'cosmetic',
  '/vitiligo-surgery': 'skin',
  '/vitiligo-surgery/': 'skin'
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
  'contact': '/contact-us',
  'q-switched-laser': '/q-switched-laser-melasma-pigmentation-bangalore/',
  'hydrafacial': '/hydrafacial-bangalore/',
  'comparison': '/treatment-comparison/',
  'local-yelachenahalli': '/dermatologist-yelachenahalli/',
  'local-kanakapura-road': '/dermatologist-kanakapura-road/',
  'local-jp-nagar': '/dermatologist-jp-nagar/',
  'local-banashankari': '/skin-clinic-banashankari/',
  'local-jayanagar': '/dermatologist-jayanagar/',
  'local-kumaraswamy-layout': '/dermatologist-kumaraswamy-layout/',
  'local-konanakunte': '/dermatologist-konanakunte/',
  'local-padmanabhanagar': '/dermatologist-padmanabhanagar/',
  'local-btm-layout': '/dermatologist-btm-layout/'
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
    if (path === '/q-switched-laser-melasma-pigmentation-bangalore' || path === '/q-switched-laser-melasma-pigmentation-bangalore/') return 'q-switched-laser';
    if (path === '/hydrafacial-bangalore' || path === '/hydrafacial-bangalore/') return 'hydrafacial';
    if (path === '/treatment-comparison' || path === '/treatment-comparison/') return 'comparison';
    if (path.startsWith('/treatment/')) {
      const slug = path.replace('/treatment/', '');
      if (slug === 'q-switched-laser-melasma-pigmentation-bangalore' || slug === 'q-switched-laser-toning') return 'q-switched-laser';
      if (slug === 'hydrafacial-bangalore' || slug === 'hydrafacial') return 'hydrafacial';
      return 'treatment-detail';
    }
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
      if (path === '/q-switched-laser-melasma-pigmentation-bangalore' || path === '/q-switched-laser-melasma-pigmentation-bangalore/') {
        setCurrentTabState('q-switched-laser');
      } else if (path === '/hydrafacial-bangalore' || path === '/hydrafacial-bangalore/') {
        setCurrentTabState('hydrafacial');
      } else if (path === '/treatment-comparison' || path === '/treatment-comparison/') {
        setCurrentTabState('comparison');
      } else if (path.startsWith('/treatment/')) {
        const slug = path.replace('/treatment/', '');
        if (slug === 'q-switched-laser-melasma-pigmentation-bangalore' || slug === 'q-switched-laser-toning') {
          setCurrentTabState('q-switched-laser');
          return;
        }
        if (slug === 'hydrafacial-bangalore' || slug === 'hydrafacial') {
          setCurrentTabState('hydrafacial');
          return;
        }
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

  const [initialBookingConcern, setInitialBookingConcern] = useState('acne');

  const handleOpenBooking = (concern) => {
    if (concern) {
      let key = 'acne';
      const cLower = String(concern).toLowerCase();
      if (cLower.includes('hair') && !cLower.includes('laser')) key = 'hair';
      else if (cLower.includes('laser')) key = 'laser';
      else if (cLower.includes('pigment') || cLower.includes('melasma') || cLower.includes('peel')) key = 'pigmentation';
      else if (cLower.includes('anti') || cLower.includes('filler') || cLower.includes('medical') || cLower.includes('allergy') || cLower.includes('eczema')) key = 'other';
      setInitialBookingConcern(key);
    }
    setIsBookingModalOpen(true);
  };

  const handleSelectItem = (item) => {
    if (!item) return;
    if (
      item.id === 'q-switched-laser-melasma-pigmentation-bangalore' ||
      item.id === 'q-switched-laser-toning' ||
      item.slug === 'q-switched-laser-melasma-pigmentation-bangalore'
    ) {
      setCurrentTab('q-switched-laser');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (
      item.id === 'hydrafacial-bangalore' ||
      item.id === 'hydrafacial' ||
      item.slug === 'hydrafacial-bangalore'
    ) {
      setCurrentTab('hydrafacial');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
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
          isMobileViewport ? (
            <MobileHomeView
              onOpenBooking={handleOpenBooking}
              onOpenNavigator={() => setIsNavigatorOpen(true)}
              onOpenCostPlanner={() => setIsCostPlannerOpen(true)}
              onSelectTreatment={handleSelectItem}
              onTabChange={setCurrentTab}
            />
          ) : (
            <DesktopHomeView
              onOpenBooking={handleOpenBooking}
              onOpenNavigator={() => setIsNavigatorOpen(true)}
              onOpenCostPlanner={() => setIsCostPlannerOpen(true)}
              onSelectTreatment={handleSelectItem}
              onTabChange={setCurrentTab}
            />
          )
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
          <BlogPage
            onOpenBooking={handleOpenBooking}
            onNavigatePage={setCurrentTab}
            onSelectTreatment={handleSelectItem}
          />
        )}

        {(currentTab === 'local' || currentTab === 'areas-we-serve') && (
          <LocalSeoPage initialLocality="yelachenahalli" onOpenBooking={handleOpenBooking} onNavigatePage={setCurrentTab} />
        )}

        {currentTab.startsWith('local-') && (
          <LocalSeoPage initialLocality={currentTab.replace('local-', '')} onOpenBooking={handleOpenBooking} onNavigatePage={setCurrentTab} />
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

        {currentTab === 'q-switched-laser' && (
          <QSwitchedLaserTreatmentPage
            onOpenBooking={handleOpenBooking}
            onNavigatePage={setCurrentTab}
            onSelectTreatment={handleSelectItem}
          />
        )}

        {currentTab === 'hydrafacial' && (
          <HydraFacialTreatmentPage
            onOpenBooking={handleOpenBooking}
            onNavigatePage={setCurrentTab}
            onSelectTreatment={handleSelectItem}
          />
        )}

        {currentTab === 'comparison' && (
          <div style={{ padding: '40px 0 60px' }}>
            <TreatmentComparisonSection
              onOpenBooking={handleOpenBooking}
              onNavigatePage={setCurrentTab}
              onSelectTreatment={handleSelectItem}
            />
          </div>
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
        initialConcern={initialBookingConcern}
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
