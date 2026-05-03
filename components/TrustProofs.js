"use client";
import { useEffect, useRef } from "react";
import { Star, ThumbsUp, ShieldCheck } from "lucide-react";

const testimonials = [
  {
    name: "Ahmet K.",
    role: "Konut Sahibi – İstanbul",
    rating: 5,
    text: "Üç farklı firmadan teklif aldım. Fenetre Systems hem fiyat hem de uygulama kalitesi açısından öne çıktı. Montaj günü tam vaat edilen saatte geldiler. Kurulum biterken birlikte test ettik; tek bir sızdırmaz nokta bırakmadılar.",
  },
  {
    name: "Zeynep A.",
    role: "Otel İşletmecisi – Antalya",
    rating: 5,
    text: "Otelimizin 48 odasına plise sineklik taktırdık. Hem sezon başında hem sezon sonunda baktık; hiçbirinde mekanizma sorunu çıkmadı. Misafirlerden şikayet gelmediği gibi bazıları özellikle övdü.",
  },
  {
    name: "Murat D.",
    role: "Mimar – Ankara",
    rating: 5,
    text: "Müşterilerime önerdiğim sineklik firmaları arasında Fenetre Systems uyumlu profil rengi yelpazesiyle ayrışıyor. Projeye göre RAL renk kodu verebildiğim firma sayısı çok az. Teknik destek ekibi mimari sorulara da yanıt veriyor.",
  },
  {
    name: "Fatma Ö.",
    role: "Villa Sahibi – Bodrum",
    rating: 5,
    text: "Sahil lokasyonumuz olduğu için tuz sisi konusunu özellikle sordum. Paslanmaz menteşe seçeneği ve bunun neden gerekli olduğunu çok net açıkladılar. İki yıl geçti, profilde ne renk değişimi ne de menteşede sertlik var.",
  },
];

const certifications = [
  { name: "CE Uyumluluğu", detail: "Avrupa pazar direktiflerine uygun" },
  { name: "ISO 9001:2015", detail: "Kalite yönetim sistemi belgelenmiş" },
  { name: "REACH Uyumu", detail: "Kimyasal güvenlik mevzuatına uyumlu tül" },
  { name: "EN 755-2", detail: "Alüminyum profil mukavemet standardı" },
  { name: "TSE Onayı", detail: "Türk standartları enstitüsü belgesi" },
  { name: "5 Yıl Garanti", detail: "Premium seride kapsamlı güvence" },
];

export default function TrustProofs() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 90);
            });
          }
        });
      },
      { threshold: 0.08 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="guven" ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-brand-green mb-3">
            Güven Kanıtları
          </span>
          <h2 className="font-display font-extrabold text-brand-dark leading-tight" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}>
            Müşterilerimiz{" "}
            <span className="gradient-text">Konuşuyor</span>
          </h2>
          <div className="section-divider mt-4" />
        </div>

        {/* Testimonials */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="reveal bg-brand-cream border border-brand-greenLight rounded-2xl p-6 hover:border-brand-green hover:shadow-md transition-all duration-300 card-hover"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={14} className="text-amber-400 fill-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm text-brand-slate leading-relaxed mb-4 italic">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-brand-green/20 flex items-center justify-center text-brand-green font-bold text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="text-xs font-bold text-brand-dark">{t.name}</div>
                  <div className="text-[10px] text-brand-slateLight">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="reveal">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-2 mb-3">
              <ShieldCheck size={20} className="text-brand-green" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-green">
                Sertifikalar & Standartlar
              </span>
            </div>
            <h3 className="font-display font-bold text-brand-dark text-2xl">
              Belgeli Kalite, Ölçülebilir Güvence
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, i) => (
              <div
                key={cert.name}
                className="flex items-start gap-4 bg-brand-mist border border-brand-greenLight rounded-xl p-4 hover:border-brand-green transition-colors"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="w-10 h-10 rounded-lg bg-brand-green/20 flex items-center justify-center flex-shrink-0">
                  <ThumbsUp size={18} className="text-brand-green" />
                </div>
                <div>
                  <div className="font-semibold text-brand-dark text-sm">{cert.name}</div>
                  <div className="text-xs text-brand-slateLight mt-0.5">{cert.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust prose */}
        <div className="mt-20 reveal prose-content">
          <h2>Sineklik Firmaları Arasından Doğru Seçimi Yapmak</h2>
          <p>
            Türkiye'de yüzlerce <a href="/" className="text-brand-green hover:underline font-medium">sineklik firmaları</a> arasında tercih yaparken fiyat tek ölçüt olmamalıdır.{" "}
            <strong>Malzeme kökenini</strong> sormak, referans görmek ve garanti kapsamını netleştirmek; uzun vadede maliyet avantajı sağlar.
          </p>
          <p>
            Ucuz ithal profil kullanan firmalar ilk yıl sorunsuz görünse de ikinci ve üçüncü yılda renk solması, köşelerde çürüme ve menteşe yıpranması baş gösterir. Yenileme maliyeti ilk tasarrufu çoğunlukla geride bırakır.
          </p>

          <h3>Kaliteli Sineklik Alırken Kontrol Listesi</h3>
          <ul>
            <li><strong>Profil kalınlığı:</strong> 1,2 mm'nin altındaki profil uzun vadede eğilme riski taşır.</li>
            <li><strong>Tül ağ boyutu:</strong> 18×16 standart koruma için yeterlidir; küçük haşereler için 18×14 tercih edilmelidir.</li>
            <li><strong>Menteşe materyali:</strong> Paslanmaz çelik veya zamak dışı menteşeler dışarıda hızla bozulur.</li>
            <li><strong>Köşe bağlantısı:</strong> Plastik köşe takozları değil, pres köşe doğru tercihtir.</li>
            <li><strong>Renk dayanımı:</strong> RAL toz boya 80 mikron üstünde kalınlıkta uygulanmalıdır.</li>
            <li><strong>Montaj ekibi sertifikası:</strong> Üretici firma montaj eğitimi vermiş mi sorgulanmalıdır.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
