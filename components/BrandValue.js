"use client";
import { useEffect, useRef } from "react";
import { Award, Layers, Globe, Users } from "lucide-react";

const stats = [
  { value: "18+", label: "Yıllık Üretim Deneyimi", icon: Award },
  { value: "81", label: "İlde Teslimat Ağı", icon: Globe },
  { value: "35+", label: "Ülkeye İhracat", icon: Layers },
  { value: "12K+", label: "Tamamlanan Proje", icon: Users },
];

const values = [
  {
    title: "Sıfır Tolerans Kalitesi",
    desc: "Her profil, üretim bandından çıkmadan önce boyut, yüzey ve boya yapışma testine tabi tutulur. Ret oranı yüzde üçte birden fazla olan parti yeniden işleme alınır.",
  },
  {
    title: "Özel Paketleme",
    desc: "Köpük tampon, streç film ve karton çevre koruması; demonte ürünlerin en uzun nakliye rotasında bile hasarsız ulaşmasını sağlar.",
  },
  {
    title: "Avrupa Standartları",
    desc: "Alüminyum profil tedarikçilerimiz EN 755-2 belgeli, tül üreticilerimiz REACH yönetmeliğine uyumludur. Avrupa'ya gönderilen ürünler gümrük belgesiyle teslim edilir.",
  },
  {
    title: "Çevre Odaklı Üretim",
    desc: "Üretim atık suyu arıtılarak deşarj edilir; alüminyum artıklar lisanslı geri dönüşüm firmalarına aktarılır. Karbon izimizi beş yılda yüzde otuz azalttık.",
  },
];

export default function BrandValue() {
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
    <section id="neden-biz" ref={sectionRef} className="py-24 bg-brand-dark overflow-hidden relative">
      {/* Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
        backgroundSize: "32px 32px",
      }} aria-hidden="true" />
      {/* Green accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-green via-brand-greenDark to-brand-green" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top stats */}
        <div className="reveal grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map(({ value, label, icon: Icon }) => (
            <div key={label} className="text-center group">
              <div className="w-12 h-12 rounded-xl bg-brand-green/20 flex items-center justify-center mx-auto mb-3 group-hover:bg-brand-green transition-colors duration-300">
                <Icon size={22} className="text-brand-green group-hover:text-white transition-colors duration-300" />
              </div>
              <div className="font-display font-extrabold text-4xl text-white">{value}</div>
              <div className="text-sm text-brand-slateLight mt-1">{label}</div>
            </div>
          ))}
        </div>

        {/* Main grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div className="reveal">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-brand-green mb-3">
              Marka Değeri
            </span>
            <h2 className="font-display font-extrabold text-white leading-tight mb-6" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)" }}>
              Fenetre Systems'ın{" "}
              <span className="text-brand-green">Farkı</span>{" "}
              Nereden Geliyor?
            </h2>

            <div className="prose-brand space-y-5">
              <p className="text-brand-slateLight leading-relaxed">
                Gebze'deki üretim tesisimiz kurulduğundan bu yana tek bir hedef vardı:{" "}
                <strong className="text-white">ölçüye özel sineklik sistemlerini</strong>{" "}
                fabrikasyon kalitesiyle üretmek. Zanaat ve mühendisliğin aynı çatı altında buluştuğu bu yapı; bugün hem bireysel hem kurumsal siparişlere aynı titizlikle yanıt veriyor.
              </p>
              <p className="text-brand-slateLight leading-relaxed">
                <em className="text-white">Avrupa pazarındaki</em> müşterilerimiz teslimat hızını, yurt içindekiler ise montaj kalitesini öne çıkarıyor.
                Her iki kesim için ortak paydamız değişmedi:{" "}
                <u className="decoration-brand-green">ürünün kullanıldığı ilk günden son güne kadar aynı performansı vermesi</u>.
              </p>
              <p className="text-brand-slateLight leading-relaxed">
                Bayilik ağımız 12 ilde faaliyet gösteriyor. Ancak distribütörsüz bölgelerde
                fabrikadan direkt satış ve kurulum yapıyoruz. Bu sayede aracı maliyeti
                ortadan kalkar ve müşteriye yansıyan fiyat rekabetçi kalır.
              </p>
            </div>

            {/* Internal link */}
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                { label: "Sineklik Firmaları", href: "/" },
                { label: "Sineklik", href: "/" },
                { label: "Plise Perde", href: "/" },
              ].map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="text-xs font-semibold text-brand-green border border-brand-green/30 hover:border-brand-green px-3 py-1.5 rounded-full transition-colors"
                >
                  {l.label} →
                </a>
              ))}
            </div>
          </div>

          {/* Right – values grid */}
          <div className="reveal grid sm:grid-cols-2 gap-4">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-brand-green/40 rounded-2xl p-5 transition-all duration-300"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="w-8 h-8 rounded-lg bg-brand-green/20 flex items-center justify-center mb-3">
                  <span className="text-brand-green font-bold text-sm font-display">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="font-semibold text-white text-sm mb-2">{v.title}</h3>
                <p className="text-xs text-brand-slateLight leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom content */}
        <div className="mt-20 reveal">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 prose-brand">
                <h2 className="font-display font-bold text-white text-2xl mb-4">
                  Türkiye'de Üretilip Avrupa'ya Taşınan Kalite
                </h2>
                <p className="text-brand-slateLight leading-relaxed mb-4">
                  Kocaeli'nin Gebze ilçesindeki fabrika; alüminyum kesim, boyama ve montaj hatlarını tek çatı altında barındırır. Ürün, şekillendirme aşamasından nakliye paketlemesine kadar dış kaynak kullanılmadan üretilir. Bu bütünleşik yapı hem kalite takibini kolaylaştırır hem de teslimat süresini sıkıştırır.
                </p>
                <p className="text-brand-slateLight leading-relaxed">
                  Avrupa'nın 35'ten fazla ülkesine gerçekleştirilen ihracatta{" "}
                  <strong className="text-white">4 ila 10 günlük kapıya teslim</strong>{" "}
                  taahhüdü verilmektedir. Bu taahhüdü mümkün kılan, İstanbul Havalimanı ve Derince Limanı'na yakın konumun sağladığı lojistik avantajdır.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                {[
                  { label: "Türkiye Teslimat", detail: "Demonte paket, 81 il" },
                  { label: "Montaj", detail: "Uzman ekip, aynı gün" },
                  { label: "Avrupa Teslimat", detail: "4–10 iş günü" },
                  { label: "Garanti", detail: "3–5 yıl ürün garantisi" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-brand-green flex-shrink-0" />
                    <div>
                      <span className="text-white text-sm font-medium">{item.label}: </span>
                      <span className="text-brand-slateLight text-sm">{item.detail}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
