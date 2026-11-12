import Link from "next/link";

export default function MobileActions() {
  const whatsapp =
    "https://wa.me/919242855707?text=" +
    encodeURIComponent("Hello Medicare Skin Clinic, I would like to request a dermatology consultation.");

  return (
    <nav className="mobile-actions-bar" aria-label="Quick contact options">
      <a href="tel:+919242855707" className="mobile-action-link action-call">
        <span aria-hidden="true">☎</span>
        <span>Call</span>
      </a>
      <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="mobile-action-link action-whatsapp">
        <span aria-hidden="true">◉</span>
        <span>WhatsApp</span>
      </a>
      <Link href="/book-appointment/" className="mobile-action-link action-book">
        <span aria-hidden="true">▣</span>
        <span>Book</span>
      </Link>
    </nav>
  );
}

