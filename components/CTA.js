"use client";
import { useEffect, useRef } from "react";
import { ArrowRight, Phone, MessageSquare, Mail } from "lucide-react";

export default function CTA() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 100);
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
    <section id="iletisim" ref={sectionRef} className="py-24 bg-brand-dark relative overflow-hidden">
      {/* Pattern */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "28px 28px" }}
        aria-hidden="true"
      />
      {/* Accent lines */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-green via-brand-greenDark to-brand-green" />
      <div className="absolute -right-40 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand-green/5 pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div className="reveal">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-brand-green mb-4">
              Hemen Başlayın
            </span>
            <h2 className="font-display font-extrabold text-white leading-tight mb-6" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
              Ölçünüzü Paylaşın,{" "}
              <span className="text-brand-green">Teklifinizi Alın</span>
            </h2>
            <p className="text-brand-slateLight leading-relaxed mb-8 text-base">
              Kaç pencereden söz ettiğinizi ve kabaca boyutlarını bildirmeniz yeterli.{" "}
              <strong className="text-white">24 saat içinde</strong> kesin teklif hazırlanır.
              Yerinde ölçüm randevusu da ücretsizdir.
            </p>

            {/* Benefits */}
            <div className="space-y-3 mb-8">
              {[
                "Ücretsiz ölçüm ve keşif",
                "Yerinde veya online danışmanlık",
                "Montaj dahil fiyat teklifi",
                "Garanti belgesi ile teslim",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-green/20 flex items-center justify-center flex-shrink-0">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5l2 2 4-4" stroke="#83bd81" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-sm text-brand-slateLight">{item}</span>
                </div>
              ))}
            </div>

            {/* Internal links */}
            <div className="flex flex-wrap gap-2">
              {[
                { label: "Plise Sineklik", href: "/" },
                { label: "Jaluzi Perde", href: "/" },
                { label: "Sineklik", href: "/" },
              ].map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="text-xs font-medium text-brand-green/70 hover:text-brand-green transition-colors underline underline-offset-2"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right – contact cards */}
          <div className="reveal space-y-4">
            {/* WhatsApp */}
            <a
              href="https://wa.me/905403363873?text=Merhaba%2C%20menteşeli%20sineklik%20için%20teklif%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 hover:border-[#25D366] rounded-2xl p-5 transition-all duration-200 group"
              aria-label="WhatsApp ile iletişim"
            >
              <div className="w-12 h-12 rounded-xl bg-[#25D366] flex items-center justify-center flex-shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12.004 0C5.374 0 0 5.373 0 12c0 2.107.546 4.09 1.502 5.814L.057 23.776a.5.5 0 00.607.637l6.098-1.598A11.95 11.95 0 0012.004 24C18.63 24 24 18.627 24 12S18.63 0 12.004 0zm0 21.818a9.815 9.815 0 01-5.003-1.369l-.356-.213-3.712.974.992-3.618-.234-.375A9.819 9.819 0 012.182 12c0-5.42 4.402-9.818 9.822-9.818 5.419 0 9.814 4.398 9.814 9.818 0 5.42-4.395 9.818-9.814 9.818z" />
                </svg>
              </div>
              <div className="flex-1">
                <div className="font-semibold text-white text-sm mb-0.5">WhatsApp ile Yazın</div>
                <div className="text-brand-slateLight text-xs">+90 540 336 38 73 · Hızlı yanıt</div>
              </div>
              <ArrowRight size={18} className="text-brand-slateLight group-hover:text-[#25D366] group-hover:translate-x-1 transition-all duration-200" />
            </a>

            {/* Phone */}
            <a
              href="tel:+905403363873"
              className="flex items-center gap-4 bg-brand-green/10 hover:bg-brand-green/20 border border-brand-green/30 hover:border-brand-green rounded-2xl p-5 transition-all duration-200 group"
              aria-label="Telefon ile ara"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-green flex items-center justify-center flex-shrink-0">
                <Phone size={20} className="text-white" />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-white text-sm mb-0.5">Telefon</div>
                <div className="text-brand-slateLight text-xs">+90 540 336 38 73 · Hft. 08:00–19:00</div>
              </div>
              <ArrowRight size={18} className="text-brand-slateLight group-hover:text-brand-green group-hover:translate-x-1 transition-all duration-200" />
            </a>

            {/* Email */}
            <a
              href="mailto:info@fenetresystems.com"
              className="flex items-center gap-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 rounded-2xl p-5 transition-all duration-200 group"
              aria-label="E-posta gönder"
            >
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                <Mail size={20} className="text-white" />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-white text-sm mb-0.5">E-Posta</div>
                <div className="text-brand-slateLight text-xs">info@fenetresystems.com</div>
              </div>
              <ArrowRight size={18} className="text-brand-slateLight group-hover:text-white group-hover:translate-x-1 transition-all duration-200" />
            </a>

            {/* Address */}
            <div className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-2xl p-5">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <div className="font-semibold text-white text-sm mb-0.5">Fabrika Adres</div>
                <div className="text-brand-slateLight text-xs leading-relaxed">
                  Cumhuriyet Mah. 2233 Sok. No:4/A<br />
                  Gebze / Kocaeli
                </div>
              </div>
            </div>

            {/* Dealer CTA */}
            <a
              href="https://wa.me/905403363873?text=Bayilik%20başvurusu%20yapmak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-white/5 hover:bg-white/10 border border-dashed border-brand-green/40 hover:border-brand-green rounded-2xl p-4 text-brand-green text-sm font-semibold transition-all duration-200"
            >
              <MessageSquare size={16} />
              Bayilik İçin WhatsApp'tan Başvur
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
