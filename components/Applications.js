"use client";
import { useEffect, useRef } from "react";

const applications = [
  {
    title: "Konut & Daire",
    desc: "Apartman ve müstakil konutlarda pencere ve balkon kapılarına uygulanan menteşeli sineklik; hem estetik hem işlevsel çözüm sunar. Renkler bina cephesiyle uyumlu seçilerek görsel bütünlük korunur.",
    tags: ["Pencere", "Balkon Kapısı", "Teras"],
    bg: "from-green-50 to-emerald-50",
    iconBg: "#83bd81",
  },
  {
    title: "Otel & Konaklama",
    desc: "Misafir odaları ve ortak kullanım alanlarında böcek bariyeri kritik bir konfor unsurudur. Özellikle beş yıldızlı tesislerde çerçeve rengi profil seçimiyle uyumlandırılır; montaj sabah erken saatlerde gerçekleştirilir.",
    tags: ["Misafir Odası", "Restoran", "Teras Balkon"],
    bg: "from-blue-50 to-sky-50",
    iconBg: "#7a8fa6",
  },
  {
    title: "Ofis & Kurum",
    desc: "Açık plan ofislerde havalandırma ihtiyacı yüksektir. Menteşeli sineklik, klima bağımlılığını düşürerek enerji maliyetlerini azaltır. Kurumsal projelerde toplu sipariş indirimleri geçerlidir.",
    tags: ["Ofis Camı", "Toplantı Odası", "Açık Plan"],
    bg: "from-purple-50 to-violet-50",
    iconBg: "#8a7a9e",
  },
  {
    title: "Sağlık & Eğitim",
    desc: "Hastane, klinik ve okullarda hijyen standartları gereği sineklik zorunludur. Avrupa normlarına uygun tül delik boyutları (<0,5 mm) minik haşere girişini de engeller. Kullanılan profiller antibakteriyel kaplamaya uyumludur.",
    tags: ["Hastane", "Okul", "Klinik"],
    bg: "from-red-50 to-rose-50",
    iconBg: "#c0504d",
  },
  {
    title: "Tarım & Sera",
    desc: "Açık havada faaliyet gösteren işletmelerde haşere kontrolü üretim kalitesini doğrudan etkiler. Özellikle sera ve depo kapılarında çift kanatlı menteşeli sistemler tercih edilir.",
    tags: ["Sera Kapısı", "Depo", "Çiftlik"],
    bg: "from-yellow-50 to-amber-50",
    iconBg: "#c8961e",
  },
  {
    title: "Perakende & Ticari",
    desc: "Dükkan ve mağazalarda müşteri deneyimini bozmadan havalandırma sağlamak mümkündür. Camlı alüminyum cephe sistemleriyle bütünleşen zip perde ve menteşeli sineklik kombinasyonları en çok tercih edilen çözümler arasındadır.",
    tags: ["Mağaza", "Restoran", "Kafe"],
    bg: "from-orange-50 to-amber-50",
    iconBg: "#b07050",
  },
];

export default function Applications() {
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
    <section id="uygulamalar" ref={sectionRef} className="py-24 bg-brand-mist">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-brand-green mb-3">
            Uygulama Alanları
          </span>
          <h2 className="font-display font-extrabold text-brand-dark leading-tight" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}>
            Her Ortamda{" "}
            <span className="gradient-text">Kanıtlanmış</span>{" "}
            Çözümler
          </h2>
          <div className="section-divider mt-4" />
          <p className="mt-4 text-brand-slate max-w-2xl mx-auto">
            Konuttan kurumsal projelere, tarımsal tesislerden sağlık yapılarına; sisteminizi taşıdığınız her ortamda aynı performansı bekleme hakkınız vardır.
          </p>
        </div>

        {/* Applications grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {applications.map((app, i) => (
            <div
              key={app.title}
              className="reveal bg-white rounded-2xl overflow-hidden border border-white hover:border-brand-green shadow-sm hover:shadow-lg hover:shadow-brand-green/10 transition-all duration-300 card-hover"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              {/* Color bar */}
              <div className={`h-1.5 w-full bg-gradient-to-r ${app.bg.replace("from-", "from-").replace("to-", "to-")}`}
                style={{ background: `linear-gradient(to right, ${app.iconBg}40, ${app.iconBg}80)` }}
              />

              <div className="p-6">
                {/* Icon circle */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-white text-lg font-display font-bold"
                  style={{ backgroundColor: app.iconBg }}
                >
                  {app.title.charAt(0)}
                </div>

                <h3 className="font-display font-bold text-brand-dark text-lg mb-2">
                  {app.title}
                </h3>
                <p className="text-sm text-brand-slate leading-relaxed mb-4">
                  {app.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {app.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-semibold px-2.5 py-1 rounded-full"
                      style={{
                        backgroundColor: `${app.iconBg}15`,
                        color: app.iconBg,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Prose section */}
        <div className="mt-20 reveal prose-content bg-white rounded-3xl p-8 lg:p-12 border border-brand-greenLight">
          <h2>Uygulama Öncesi Sorulması Gereken Sorular</h2>
          <p>
            Hangi ürünün nereye uyacağına karar vermeden önce bazı temel soruların yanıtlanması gerekir. Yanlış sistem seçimi; montaj sonrasında estetik ya da işlevsel sorunlara yol açar ve değişim maliyeti doğurur.
          </p>

          <ul>
            <li><strong>Pencere içe mi dışa mı açılıyor?</strong> İçe açılanlarda standart menteşeli sineklik, dışa açılanlarda ise yönlü menteşe gerekir.</li>
            <li><strong>Geçiş sıklığı ne kadar?</strong> Günde onlarca kez açılan kapılarda plise sineklik daha uzun ömürlü olabilir.</li>
            <li><strong>Çocuk veya evcil hayvan var mı?</strong> Çocuk kilidi ve güçlendirilmiş tül ek güvenlik sağlar.</li>
            <li><strong>Deniz veya endüstriyel bölge mi?</strong> Nem ve kimyasal ortamlarda paslanmaz çelik menteşe zorunludur.</li>
            <li><strong>Bina yönetmeliği kısıtı var mı?</strong> Bazı site yönetmelikleri renk ve profil tipini sınırlar.</li>
          </ul>

          <p>
            Fenetre Systems danışmanlık ekibi bu soruları yerinde veya video görüşmesiyle birlikte yanıtlar.{" "}
            <u>Ücretsiz ön danışmanlık</u> yalnızca sipariş aşamasına gelindiğinde değil, fikir aşamasında bile talep edilebilir.
          </p>
        </div>
      </div>
    </section>
  );
}
