'use client';
import { useRef } from 'react';
import Link from 'next/link';

interface ConditionItem {
  id: string;
  title: string;
  image: string;
  href: string;
  bgColor: string;
}

const CONDITIONS: ConditionItem[] = [
  {
    id: 'hair-fall',
    title: 'Hair Fall & PRP',
    image: '/images/slide_hair_radiant.jpg',
    href: '/treatments/hair/hair-loss-treatment/',
    bgColor: '#F5ECE2'
  },
  {
    id: 'acne',
    title: 'Acne & Breakouts',
    image: '/images/slide_acne_clear.jpg',
    href: '/treatments/skin/acne-treatment/',
    bgColor: '#F7EFE6'
  },
  {
    id: 'pigmentation',
    title: 'Pigmentation & Melasma',
    image: '/images/slide_pigmentation_laser.jpg',
    href: '/treatments/skin/pigmentation-treatment/',
    bgColor: '#F8EFEA'
  },
  {
    id: 'hydrafacial',
    title: 'HydraFacial Glow',
    image: '/images/slide_hydrafacial_care.jpg',
    href: '/treatments/aesthetics/hydrafacial/',
    bgColor: '#F5EEF9'
  },
  {
    id: 'laser-hair',
    title: 'Laser Hair Removal',
    image: '/images/imageye___-_imgi_12_Laser-Hair-Removal.webp',
    href: '/treatments/laser/laser-hair-reduction/',
    bgColor: '#E9EEF4'
  },
  {
    id: 'scar-treatment',
    title: 'Acne Scars',
    image: '/slide-img/Scar Treatment.jpg',
    href: '/treatments/skin/acne-scar-treatment/',
    bgColor: '#ECE7F2'
  },
  {
    id: 'chemical-peels',
    title: 'Chemical Peels',
    image: '/images/imageye___-_imgi_7_Chemical-Peel.webp',
    href: '/treatments/aesthetics/chemical-peels/',
    bgColor: '#FDF4EB'
  },
  {
    id: 'allergies',
    title: 'Skin Allergies',
    image: '/images/imageye___-_imgi_23_Allergies.webp',
    href: '/treatments/medical-dermatology/skin-allergies/',
    bgColor: '#F9F1EF'
  },
  {
    id: 'vitiligo',
    title: 'Vitiligo Care',
    image: '/images/imageye___-_imgi_21_Vitiligo.webp',
    href: '/treatments/medical-dermatology/vitiligo/',
    bgColor: '#ECE6F5'
  },
  {
    id: 'anti-ageing',
    title: 'Skin Tightening',
    image: '/images/imageye___-_imgi_9_skin-tightening-01.webp',
    href: '/treatments/aesthetics/skin-tightening/',
    bgColor: '#F5EFF2'
  }
];

export function ConditionsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -340 : 340;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="conditions-section" aria-label="Browse treatments by condition">
      <div className="container">
        {/* Section Header */}
        <div className="conditions-section-header">
          <div>
            <p className="eyebrow-small">FOR YOUR</p>
            <h2 className="conditions-headline">Health &amp; Skin Conditions</h2>
          </div>
          <div className="carousel-nav-controls">
            <button
              type="button"
              className="carousel-arrow-btn"
              onClick={() => scroll('left')}
              aria-label="Previous conditions"
            >
              ‹
            </button>
            <button
              type="button"
              className="carousel-arrow-btn"
              onClick={() => scroll('right')}
              aria-label="Next conditions"
            >
              ›
            </button>
          </div>
        </div>

        {/* Carousel Track with cards matching reference image */}
        <div className="conditions-carousel-container">
          <div className="conditions-track" ref={scrollRef}>
            {CONDITIONS.map((cond) => (
              <Link 
                key={cond.id} 
                href={cond.href} 
                className="condition-card"
                style={{ backgroundColor: cond.bgColor }}
              >
                <h3 className="condition-title">{cond.title}</h3>
                <div className="condition-img-wrap">
                  <img 
                    src={cond.image} 
                    alt={cond.title} 
                    className="condition-img"
                    loading="lazy"
                  />
                </div>
              </Link>
            ))}
          </div>

          {/* Floating Next Button on right edge */}
          <button
            type="button"
            className="floating-carousel-arrow"
            onClick={() => scroll('right')}
            aria-label="Scroll next conditions"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
