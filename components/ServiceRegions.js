"use client";
import { useEffect, useRef } from "react";
import { MapPin, Clock, ArrowRight } from "lucide-react";

const turkeyRegions = [
  {
    region: "Marmara Bölgesi",
    cities: "İstanbul, Bursa, Kocaeli, Sakarya, Tekirdağ, Edirne, Kırklareli, Yalova, Çanakkale, Balıkesir",
    delivery: "1–2 iş günü",
    note: "Fabrikaya yakın konum. Aynı gün kurulum mümkün.",
    highlight: true,
  },
  {
    region: "Ege Bölgesi",
    cities: "İzmir, Manisa, Aydın, Denizli, Muğla, Uşak, Kütahya, Afyonkarahisar",
    delivery: "1–3 iş günü",
    note: "Turizm sezonu yoğun dönemlerinde önceden randevu önerilir.",
    highlight: false,
  },
  {
    region: "Akdeniz Bölgesi",
    cities: "Antalya, Mersin, Adana, Hatay, Isparta, Burdur, Kahramanmaraş, Osmaniye",
    delivery: "2–3 iş günü",
    note: "Sahil tesisleri için tuz sisi dayanımlı paslanmaz menteşe paketi mevcut.",
    highlight: false,
  },
  {
    region: "İç Anadolu",
    cities: "Ankara, Konya, Eskişehir, Kayseri, Sivas, Aksaray, Niğde, Nevşehir, Yozgat, Kırıkkale, Kırşehir, Çankırı",
    delivery: "2–4 iş günü",
    note: "Kurumsal ve kamu projelerinde toplu sipariş kapasitesi yüksektir.",
    highlight: false,
  },
  {
    region: "Karadeniz Bölgesi",
    cities: "Trabzon, Samsun, Ordu, Giresun, Rize, Artvin, Zonguldak, Bartın, Kastamonu, Sinop, Tokat, Amasya, Çorum",
    delivery: "2–4 iş günü",
    note: "Nem yoğunluğu yüksek bölge; özel yüzey kaplamalı profil tavsiye edilir.",
    highlight: false,
  },
  {
    region: "Güneydoğu & Doğu Anadolu",
    cities: "Gaziantep, Şanlıurfa, Diyarbakır, Malatya, Elazığ, Van, Erzurum, Erzincan, Adıyaman, Batman, Mardin",
    delivery: "3–5 iş günü",
    note: "Kırsala uzak lokasyonlar için demonte paket tercih edilmektedir.",
    highlight: false,
  },
];

const europeRegions = [
  { country: "Almanya", flag: "🇩🇪", delivery: "4–6 iş günü" },
  { country: "Fransa", flag: "🇫🇷", delivery: "5–7 iş günü" },
  { country: "Hollanda", flag: "🇳🇱", delivery: "4–6 iş günü" },
  { country: "Belçika", flag: "🇧🇪", delivery: "5–7 iş günü" },
  { country: "İngiltere", flag: "🇬🇧", delivery: "6–8 iş günü" },
  { country: "İtalya", flag: "🇮🇹", delivery: "5–7 iş günü" },
  { country: "İspanya", flag: "🇪🇸", delivery: "6–9 iş günü" },
  { country: "Avusturya", flag: "🇦🇹", delivery: "4–6 iş günü" },
  { country: "İsviçre", flag: "🇨🇭", delivery: "5–7 iş günü" },
  { country: "İsveç", flag: "🇸🇪", delivery: "7–10 iş günü" },
  { country: "Norveç", flag: "🇳🇴", delivery: "7–10 iş günü" },
  { country: "Danimarka", flag: "🇩🇰", delivery: "6–8 iş günü" },
];

export default function ServiceRegions() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 80);
            });
          }
        });
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="bolgeler" ref={sectionRef} className="py-24 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-brand-green mb-3">
            Hizmet Bölgeleri
          </span>
          <h2 className="font-display font-extrabold text-brand-dark leading-tight" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}>
            Türkiye'nin 81 İli +{" "}
            <span className="gradient-text">Avrupa'nın 35 Ülkesi</span>
          </h2>
          <div className="section-divider mt-4" />
          <p className="mt-4 text-brand-slate max-w-2xl mx-auto">
            Kocaeli'nin Gebze ilçesinden çıkan ürünler; hem doğudan batıya Anadolu'nun{" "}
            <strong>tüm coğrafyasına</strong> hem de Avrupa'nın büyük başkentlerine ulaşır.
          </p>
        </div>

        {/* Turkey regions */}
        <div className="reveal mb-5">
          <div className="flex items-center gap-2 mb-6">
            <span className="text-2xl">🇹🇷</span>
            <h3 className="font-display font-bold text-brand-dark text-xl">Türkiye – Bölgesel Teslimat ve Pazar Bilgisi</h3>
          </div>
        </div>

        <div className="reveal space-y-3 mb-16">
          {turkeyRegions.map((r, i) => (
            <div
              key={r.region}
              className={`rounded-2xl border p-5 transition-all duration-300 ${
                r.highlight
                  ? "bg-brand-green/10 border-brand-green"
                  : "bg-white border-brand-greenLight hover:border-brand-green"
              }`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="flex flex-wrap items-start gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <MapPin size={14} className="text-brand-green flex-shrink-0" />
                    <span className="font-semibold text-brand-dark text-sm">{r.region}</span>
                    {r.highlight && (
                      <span className="text-[10px] font-bold bg-brand-green text-white px-2 py-0.5 rounded-full">
                        Fabrika Bölgesi
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-brand-slate ml-5">{r.cities}</p>
                  {r.note && (
                    <p className="text-xs text-brand-slateLight ml-5 mt-1 italic">{r.note}</p>
                  )}
                </div>
                <div className="flex items-center gap-1.5 bg-brand-mist rounded-lg px-3 py-1.5 flex-shrink-0">
                  <Clock size={12} className="text-brand-green" />
                  <span className="text-xs font-semibold text-brand-dark">{r.delivery}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Europe section */}
        <div className="reveal">
          <div className="flex items-center gap-2 mb-6">
            <span className="text-2xl">🇪🇺</span>
            <h3 className="font-display font-bold text-brand-dark text-xl">Avrupa – Uluslararası Teslimat</h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-12">
            {europeRegions.map((c, i) => (
              <div
                key={c.country}
                className="bg-white border border-brand-greenLight rounded-xl p-4 hover:border-brand-green hover:shadow-sm transition-all duration-200"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <div className="text-xl mb-1">{c.flag}</div>
                <div className="font-semibold text-brand-dark text-sm">{c.country}</div>
                <div className="flex items-center gap-1 mt-1">
                  <Clock size={10} className="text-brand-green" />
                  <span className="text-[10px] text-brand-slateLight">{c.delivery}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Market share prose */}
        <div className="reveal prose-content bg-white rounded-3xl p-8 lg:p-12 border border-brand-greenLight">
          <h2>Türkiye Menteşeli Sineklik Pazarında Bölgesel Talep Dinamikleri</h2>
          <p>
            İstanbul ve çevre ilçelerde menteşeli sinekliğe yönelik talep; nüfus yoğunluğu ile doğru orantılı seyreder. Ancak ikinci konut bölgeleri olan Bodrum, Çeşme, Antalya ve Sapanca gibi destinasyonlarda birim başına sipariş miktarı çok daha yüksektir. Tatil konutu sahipleri genellikle tüm pencereyi kapsayan toplu sipariş verir.
          </p>
          <p>
            Anadolu'nun iç bölgelerinde ise <strong>ısı yalıtımı farkındalığı</strong> arttıkça honeycomb ve plise perde talepleri de yükseliyor. Kış aylarında kapalı tutulan bu perdeler; camla duvar arasındaki hava tamponunu sürdürerek ısıtma maliyetini düşürür. Doğu illerinde bu tasarruf özellikle belirgindir.
          </p>

          <h3>Bölgeye Göre En Çok Tercih Edilen Sistem</h3>
          <table>
            <thead>
              <tr>
                <th>Bölge</th>
                <th>En Popüler Ürün</th>
                <th>Tercih Sebebi</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>İstanbul Anadolu / Avrupa</td>
                <td>Menteşeli Sineklik</td>
                <td>Yüksek katlı binalarda cam açılımı</td>
              </tr>
              <tr>
                <td>Bodrum / Çeşme / Fethiye</td>
                <td>Zip Perde + Menteşeli</td>
                <td>UV koruması + rüzgar dayanımı</td>
              </tr>
              <tr>
                <td>Antalya / Alanya</td>
                <td>Plise Sineklik</td>
                <td>Balkon kapılarında pratik kullanım</td>
              </tr>
              <tr>
                <td>Ankara / Konya</td>
                <td>Honeycomb Perde</td>
                <td>Kış ısı yalıtımı</td>
              </tr>
              <tr>
                <td>Karadeniz Bölgesi</td>
                <td>Menteşeli + Gizli Menteşe</td>
                <td>Rüzgar ve nem direnci</td>
              </tr>
              <tr>
                <td>Avrupa (diaspora)</td>
                <td>Plise Perde + Düet</td>
                <td>Estetik ve ışık yönetimi</td>
              </tr>
            </tbody>
          </table>

          <p>
            Avrupa'daki Türk diasporası bu pazarın önemli bir kesimini oluşturuyor.{" "}
            <em>Almanya, Hollanda ve Fransa</em> başta olmak üzere yurt dışındaki müşteriler;
            çocukluk dönemlerinden tanıdıkları <u>Türk üretim kalitesini</u> tercih ediyor ve
            ürünü kendi ülkelerinde standart piyasada bulamıyor.
          </p>

          {/* Internal links */}
          <div className="mt-6 flex flex-wrap gap-3 not-prose">
            {[
              { label: "Sineklik", href: "/" },
              { label: "Jaluzi Perde", href: "/" },
              { label: "Sineklik Firmaları", href: "/" },
            ].map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="inline-flex items-center gap-1 text-xs font-semibold text-brand-green bg-brand-mist border border-brand-greenLight hover:border-brand-green px-3 py-1.5 rounded-full transition-colors"
              >
                {l.label} <ArrowRight size={12} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
