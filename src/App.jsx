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
import { SKIN_CONDITIONS, HAIR_CONDITIONS, COSMETIC_TREATMENTS, LASER_TREATMENTS } from './data/clinicData';

const ALL_CLINIC_TREATMENTS = [
  ...SKIN_CONDITIONS,
  ...HAIR_CONDITIONS,
  ...COSMETIC_TREATMENTS,
  ...LASER_TREATMENTS
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

  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

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
    <div className="app-root">
      {/* Header Navigation with Mega Menu */}
      <Header
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        onOpenBooking={handleOpenBooking}
        onSelectItem={handleSelectItem}
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
          <>
            <HeroSlider onOpenBooking={handleOpenBooking} />
            <BookingForm onSuccessToast={showToast} />
            <DoctorProfile onOpenBooking={handleOpenBooking} />
            <GoogleReviews />
            <FeaturedTreatments
              onSelectTreatment={handleSelectItem}
              onOpenBooking={handleOpenBooking}
            />
            <BeforeAfterBanner onOpenBooking={handleOpenBooking} />
            <SkinTreatmentsGrid onSelectCondition={handleSelectItem} />
            <HairTreatmentsGrid onSelectCondition={handleSelectItem} />
            <LocationMapSection onSuccessToast={showToast} />
          </>
        )}

        {currentTab === 'skin' && (
          <SkinTreatmentsPage
            onSelectCondition={handleSelectItem}
            onOpenBooking={handleOpenBooking}
          />
        )}

        {currentTab === 'hair' && (
          <HairTreatmentsPage
            onSelectCondition={handleSelectItem}
            onOpenBooking={handleOpenBooking}
          />
        )}

        {currentTab === 'cosmetic' && (
          <CosmeticTreatmentsPage
            onSelectTreatment={handleSelectItem}
            onOpenBooking={handleOpenBooking}
          />
        )}

        {currentTab === 'laser' && (
          <LaserTreatmentsPage
            onSelectTreatment={handleSelectItem}
            onOpenBooking={handleOpenBooking}
          />
        )}

        {currentTab === 'treatments' && (
          <AllTreatmentsPage
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

      {/* Why Choose Us Placed Directly on Top of FAQs */}
      <WhyChooseUs />

      {/* FAQs Section */}
      <FAQAccordion />

      {/* Footer */}
      <Footer onOpenBooking={handleOpenBooking} onTabChange={setCurrentTab} />

      {/* Sticky Badge & Floating WhatsApp */}
      <FloatingWidgets onOpenBooking={handleOpenBooking} />

      {/* Appointment Modal Popup */}
      {isBookingModalOpen && (
        <div className="modal-overlay" onClick={() => setIsBookingModalOpen(false)}>
          <div className="modal-content-box" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '520px' }}>
            <button className="modal-close-btn" onClick={() => setIsBookingModalOpen(false)}>
              ×
            </button>
            <BookingForm
              onSuccessToast={(msg) => {
                setIsBookingModalOpen(false);
                showToast(msg);
              }}
            />
          </div>
        </div>
      )}

      {/* Toast Notification */}
      {toastMessage && (
        <div className="toast-notification">
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
