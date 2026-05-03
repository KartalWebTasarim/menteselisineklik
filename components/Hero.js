"use client";
import { useEffect, useRef } from "react";
import { ArrowRight, Shield, Truck, Wrench } from "lucide-react";

const badges = [
  { icon: Shield, text: "18 Yıl Deneyim" },
  { icon: Truck, text: "Türkiye Geneli Teslimat" },
  { icon: Wrench, text: "Montaj Dahil" },
];

export default function Hero() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 120);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-brand-cream via-white to-brand-mist hero-diagonal"
      aria-label="Ana Sayfa – Menteşeli Sineklik"
    >
      {/* Geometric background shapes */}
      <div className="geo-shape w-[500px] h-[500px] top-[-80px] right-[-120px] opacity-50 pointer-events-none" aria-hidden="true" />
      <div className="geo-shape w-[300px] h-[300px] bottom-[100px] left-[-80px] opacity-30 pointer-events-none" aria-hidden="true" />

      {/* Grid pattern */}
      <div className="absolute inset-0 pattern-bg opacity-40 pointer-events-none" aria-hidden="true" />

      {/* Floating vertical text */}
      <div
        className="absolute right-6 top-1/2 -translate-y-1/2 writing-mode-vertical hidden xl:flex flex-col items-center gap-3"
        style={{ writingMode: "vertical-rl" }}
        aria-hidden="true"
      >
        <span className="text-[11px] font-semibold tracking-[0.2em] text-brand-slateLight uppercase">
          Fenetre Systems
        </span>
        <span className="w-px h-16 bg-brand-green opacity-40" />
        <span className="text-[11px] font-semibold tracking-[0.2em] text-brand-green uppercase">
          Est. 2006
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left – Content */}
        <div>
          {/* Tag */}
          <div className="reveal inline-flex items-center gap-2 bg-brand-green/10 border border-brand-green/30 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
            <span className="text-xs font-semibold text-brand-green uppercase tracking-wider">
              Fenetre Systems Üretimi
            </span>
          </div>

          {/* Main heading */}
          <h1 className="reveal font-display font-extrabold text-brand-dark leading-[1.1] tracking-tight" style={{ fontSize: "clamp(2.4rem, 5vw, 3.6rem)" }}>
            <span className="gradient-text">Menteşeli</span>{" "}
            <span className="block">Sineklik</span>{" "}
            <span className="text-brand-dark block">Sistemleri</span>
          </h1>

          <p className="reveal mt-5 text-brand-slate text-lg leading-relaxed max-w-lg">
            Pencere ve kapılarınız için{" "}
            <strong className="text-brand-dark font-semibold">ölçüye özel üretilen</strong>{" "}
            menteşeli sineklikler; alüminyum profil sağlamlığı, fiberglas ağ dayanımı
            ve{" "}
            <em>çocuk kilidi güvencesiyle</em> yaşam alanlarınıza katar.
            Türkiye'nin 81 ilinde{" "}
            <u>demonte paket, adrese teslim ve montaj dahil</u> hizmet sunuyoruz.
          </p>

          {/* Badges */}
          <div className="reveal flex flex-wrap gap-3 mt-8">
            {badges.map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="flex items-center gap-2 bg-white border border-brand-greenLight rounded-xl px-4 py-2.5 shadow-sm"
              >
                <Icon size={16} className="text-brand-green" />
                <span className="text-sm font-medium text-brand-dark">{text}</span>
              </div>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="reveal flex flex-wrap gap-3 mt-8">
            <a
              href="https://wa.me/905403363873?text=Merhaba%2C%20menteşeli%20sineklik%20hakkında%20bilgi%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-brand-green hover:bg-brand-greenDark text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 shadow-lg shadow-brand-green/30 hover:shadow-brand-green/50"
              aria-label="WhatsApp ile Ücretsiz Teklif Al"
            >
              <span>Ücretsiz Teklif Al</span>
              <ArrowRight size={18} />
            </a>
            <a
              href="tel:+905403363873"
              className="flex items-center gap-2 bg-white border-2 border-brand-green text-brand-green font-semibold px-6 py-3 rounded-xl hover:bg-brand-mist transition-all duration-200"
              aria-label="Hemen Ara"
            >
              <span>+90 540 336 38 73</span>
            </a>
          </div>

          {/* Internal links */}
          <div className="reveal mt-8 flex flex-wrap gap-x-4 gap-y-2">
            <span className="text-xs text-brand-slateLight font-medium">Ürün Kategorileri:</span>
            {[
              { label: "Sineklik", href: "#urunler" },
              { label: "Plise Sineklik", href: "#urunler" },
              { label: "Plise Perde", href: "#urunler" },
              { label: "Jaluzi Perde", href: "#urunler" },
              { label: "Honeycomb Perde", href: "#urunler" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-medium text-brand-green hover:text-brand-greenDark underline underline-offset-2 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Right – Visual card */}
        <div className="reveal relative">
          {/* Main card */}
          <div className="relative bg-white rounded-3xl shadow-2xl shadow-brand-dark/10 overflow-hidden border border-brand-greenLight">
            {/* Green header bar */}
            <div className="h-2 w-full bg-gradient-to-r from-brand-green to-brand-greenDark" />

            <div className="p-8">
              {/* Window illustration */}
              <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-brand-mist to-brand-cream rounded-2xl overflow-hidden flex items-center justify-center">
                {/* Window frame SVG illustration */}
                <svg viewBox="0 0 400 300" className="w-full h-full" xmlns="http://www.w3.org/2000/svg" aria-label="Menteşeli sineklik pencere illüstrasyonu">
                  {/* Background room */}
                  <rect width="400" height="300" fill="#eef5ee" />
                  {/* Outdoor sky */}
                  <rect x="80" y="50" width="240" height="180" fill="#c5e3c4" rx="4" />
                  {/* Window outer frame */}
                  <rect x="75" y="45" width="250" height="190" fill="none" stroke="#404e5e" strokeWidth="8" rx="4" />
                  {/* Window sill */}
                  <rect x="68" y="230" width="264" height="10" fill="#404e5e" rx="2" />
                  {/* Left pane – closed */}
                  <rect x="80" y="50" width="118" height="180" fill="#e8f5e8" opacity="0.7" />
                  {/* Right pane – open (menteşeli) */}
                  <g transform="rotate(-15, 198, 140)">
                    <rect x="200" y="50" width="118" height="180" fill="#d4edda" opacity="0.85" />
                    <rect x="200" y="50" width="118" height="180" fill="none" stroke="#404e5e" strokeWidth="3" />
                    {/* Screen mesh pattern */}
                    {[0,1,2,3,4,5,6,7,8].map(i => (
                      <line key={`h${i}`} x1="201" y1={56 + i*18} x2="317" y2={56 + i*18} stroke="#83bd81" strokeWidth="0.8" opacity="0.6" />
                    ))}
                    {[0,1,2,3,4,5,6].map(i => (
                      <line key={`v${i}`} x1={206 + i*16} y1="51" x2={206 + i*16} y2="229" stroke="#83bd81" strokeWidth="0.8" opacity="0.6" />
                    ))}
                    {/* Handle */}
                    <rect x="204" y="128" width="6" height="22" fill="#83bd81" rx="3" />
                  </g>
                  {/* Center divider */}
                  <rect x="196" y="47" width="8" height="192" fill="#404e5e" rx="2" />
                  {/* Hinge indicators */}
                  <circle cx="316" cy="90" r="5" fill="#83bd81" />
                  <circle cx="316" cy="190" r="5" fill="#83bd81" />
                  {/* Label */}
                  <text x="200" y="285" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fill="#404e5e" fontWeight="600">
                    Menteşeli Sineklik Sistemi
                  </text>
                </svg>

                {/* Badge on card */}
                <div className="absolute top-3 right-3 badge-float">
                  Premium
                </div>
              </div>

              {/* Stats row */}
              <div className="mt-6 grid grid-cols-3 gap-4">
                {[
                  { val: "81", label: "İl Teslimat" },
                  { val: "48h", label: "Üretim Süresi" },
                  { val: "10+", label: "Renk Seçeneği" },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="font-display font-extrabold text-xl text-brand-green">{s.val}</div>
                    <div className="text-xs text-brand-slateLight mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Floating chips */}
          <div className="absolute -top-4 -left-4 bg-white rounded-2xl shadow-lg px-4 py-3 border border-brand-greenLight flex items-center gap-2 float">
            <div className="w-8 h-8 rounded-full bg-brand-green/20 flex items-center justify-center">
              <Shield size={16} className="text-brand-green" />
            </div>
            <div>
              <div className="text-xs font-bold text-brand-dark">ISO Kalitesi</div>
              <div className="text-[10px] text-brand-slateLight">Sertifikalı Üretim</div>
            </div>
          </div>

          <div className="absolute -bottom-4 -right-4 bg-brand-green text-white rounded-2xl shadow-lg px-4 py-3 float" style={{ animationDelay: "2s" }}>
            <div className="text-xs font-medium opacity-90">Avrupa Teslimatı</div>
            <div className="text-lg font-bold">4–10 Gün</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" aria-hidden="true">
        <span className="text-xs text-brand-slateLight tracking-widest uppercase">Keşfet</span>
        <div className="w-px h-8 bg-gradient-to-b from-brand-green to-transparent animate-pulse" />
      </div>
    </section>
  );
}
