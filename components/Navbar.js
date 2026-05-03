"use client";
import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Ürünler", href: "#urunler" },
  { label: "Neden Biz", href: "#neden-biz" },
  { label: "Süreç", href: "#surec" },
  { label: "Hizmet Bölgeleri", href: "#bolgeler" },
  { label: "SSS", href: "#sss" },
  { label: "İletişim", href: "#iletisim" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "nav-glass shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group" aria-label="Ana Sayfa – Fenetre Systems Menteşeli Sineklik">
          <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-brand-green text-white font-bold text-lg font-display">
            F
          </span>
          <span className="hidden sm:block font-display font-700 text-brand-dark text-[15px] leading-tight">
            <span className="font-extrabold">Fenetre</span>{" "}
            <span className="text-brand-green font-semibold">Systems</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-6">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-brand-dark hover:text-brand-green transition-colors duration-200 relative group"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-green rounded transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA button */}
        <a
          href="tel:+905403363873"
          className="hidden md:flex items-center gap-2 bg-brand-green hover:bg-brand-greenDark text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors duration-200"
          aria-label="Hemen Arayın"
        >
          <Phone size={15} />
          <span>+90 540 336 38 73</span>
        </a>

        {/* Mobile menu button */}
        <button
          className="lg:hidden p-2 text-brand-dark"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menüyü Aç/Kapat"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-brand-greenLight px-4 pt-2 pb-4 shadow-lg">
          <ul className="flex flex-col gap-1">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="block py-2.5 px-3 text-sm font-medium text-brand-dark hover:text-brand-green hover:bg-brand-mist rounded-lg transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="tel:+905403363873"
            className="mt-3 flex items-center justify-center gap-2 bg-brand-green text-white text-sm font-semibold py-2.5 rounded-lg"
          >
            <Phone size={15} />
            <span>Hemen Arayın</span>
          </a>
        </div>
      )}
    </header>
  );
}
