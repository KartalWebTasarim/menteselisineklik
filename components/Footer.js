import { Phone, Mail, MapPin } from "lucide-react";

const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/FenetreSystems/",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/fenetresystems/",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    name: "Twitter / X",
    href: "https://x.com/FenetreSystems",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/fenetresystems/",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    name: "Pinterest",
    href: "https://tr.pinterest.com/fenetresystems/",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@FenetreSystems",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z" />
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
      </svg>
    ),
  },
];

const footerLinks = [
  {
    title: "Ürünler",
    links: [
      { label: "Menteşeli Sineklik", href: "/" },
      { label: "Plise Sineklik", href: "/" },
      { label: "Plise Perde", href: "/" },
      { label: "Jaluzi Perde", href: "/" },
      { label: "Düet Perde", href: "/" },
      { label: "Honeycomb Perde", href: "/" },
      { label: "Zip Perde", href: "/" },
    ],
  },
  {
    title: "Hizmetler",
    links: [
      { label: "Ücretsiz Ölçüm", href: "#surec" },
      { label: "Türkiye Geneli Montaj", href: "#bolgeler" },
      { label: "Avrupa Teslimat", href: "#bolgeler" },
      { label: "Bayilik Başvurusu", href: "https://wa.me/905403363873?text=Bayilik%20başvurusu%20yapmak%20istiyorum." },
      { label: "Toplu Konut Projeleri", href: "#iletisim" },
    ],
  },
  {
    title: "Bilgi",
    links: [
      { label: "Sıkça Sorulan Sorular", href: "#sss" },
      { label: "Malzeme Kalitesi", href: "#malzeme" },
      { label: "Uygulama Örnekleri", href: "#uygulamalar" },
      { label: "Hizmet Bölgeleri", href: "#bolgeler" },
      { label: "Sineklik Firmaları", href: "/" },
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark text-white" role="contentinfo">
      {/* Top green bar */}
      <div className="h-1 w-full bg-gradient-to-r from-brand-green via-brand-greenDark to-brand-green" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid lg:grid-cols-4 gap-12 mb-12">
          {/* Brand col */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-brand-green text-white font-bold text-lg">
                F
              </span>
              <div>
                <div className="font-extrabold text-white text-[15px] font-display leading-none">Fenetre</div>
                <div className="text-brand-green text-[13px] font-semibold">Systems</div>
              </div>
            </div>

            <p className="text-brand-slateLight text-sm leading-relaxed mb-5">
              Menteşeli sineklik ve perde sistemleri üreticisi. Gebze'den Türkiye'ye ve Avrupa'ya premium çözümler.
            </p>

            {/* Contact */}
            <div className="space-y-2.5 mb-6">
              <a href="tel:+905403363873" className="flex items-center gap-2.5 text-sm text-brand-slateLight hover:text-brand-green transition-colors group">
                <Phone size={14} className="text-brand-green flex-shrink-0" />
                +90 540 336 38 73
              </a>
              <a href="mailto:info@fenetresystems.com" className="flex items-center gap-2.5 text-sm text-brand-slateLight hover:text-brand-green transition-colors">
                <Mail size={14} className="text-brand-green flex-shrink-0" />
                info@fenetresystems.com
              </a>
              <div className="flex items-start gap-2.5 text-sm text-brand-slateLight">
                <MapPin size={14} className="text-brand-green flex-shrink-0 mt-0.5" />
                <span>Cumhuriyet Mah. 2233 Sok. No:4/A Gebze / Kocaeli</span>
              </div>
            </div>

            {/* Social links */}
            <div className="flex flex-wrap gap-2">
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-white/10 hover:bg-brand-green flex items-center justify-center text-brand-slateLight hover:text-white transition-all duration-200"
                  aria-label={`${s.name} profili`}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links cols */}
          {footerLinks.map((col) => (
            <div key={col.title}>
              <h4 className="font-display font-bold text-white text-sm mb-4 uppercase tracking-wider">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-sm text-brand-slateLight hover:text-brand-green transition-colors duration-200 flex items-center gap-1.5 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-brand-green/40 group-hover:bg-brand-green transition-colors flex-shrink-0" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-brand-slateLight text-center sm:text-left">
            © {year} Fenetre Systems. Tüm hakları saklıdır. |{" "}
            <a href="/" className="hover:text-brand-green transition-colors">Menteşeli Sineklik</a>
            {" "}·{" "}
            <a href="/" className="hover:text-brand-green transition-colors">Sineklik Firmaları</a>
            {" "}·{" "}
            <a href="/" className="hover:text-brand-green transition-colors">Plise Perde</a>
          </div>
          <div className="text-xs text-brand-slateLight">
            Üretici:{" "}
            <a
              href="https://www.fenetresystems.com"
              target="_blank"
              rel="dofollow noopener"
              className="text-brand-green hover:text-brand-greenDark font-semibold transition-colors"
            >
              Fenetre Systems
            </a>
            {" "}· Gebze, Kocaeli
          </div>
        </div>
      </div>
    </footer>
  );
}
