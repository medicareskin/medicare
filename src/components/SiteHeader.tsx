import Link from "next/link";

const menu = [
  { label: "Skin", href: "/treatments/?category=Skin" },
  { label: "Hair", href: "/treatments/?category=Hair" },
  { label: "Laser", href: "/treatments/?category=Laser" },
  { label: "Aesthetics", href: "/treatments/?category=Aesthetics" },
  { label: "Medical Dermatology", href: "/treatments/?category=Medical+Dermatology" },
  { label: "Our Doctor", href: "/doctors/dr-sujay-m/" },
  { label: "Location", href: "/locations/yelachenahalli/" },
  { label: "Contact", href: "/contact/" }
];

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" href="/">
          Medicare Skin
          <span>DERMATOLOGY &amp; AESTHETICS</span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {menu.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <Link className="header-book btn-primary" href="/book-appointment/">
          Book Consultation
        </Link>
        <details className="mobile-menu">
          <summary aria-label="Open navigation menu">Menu</summary>
          <nav aria-label="Mobile navigation">
            {menu.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
            <Link href="/book-appointment/">Book Consultation</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}

