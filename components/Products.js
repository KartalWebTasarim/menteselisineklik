"use client";
import { useEffect, useRef } from "react";

const products = [
  {
    id: "menteseli-sineklik",
    name: "Menteşeli Sineklik",
    tag: "En Çok Tercih",
    color: "#83bd81",
    desc: "Kapı ve pencere açıklıklarına menteşeyle sabitlenen bu sistem, normal kanatlara özdeş bir kullanım sunar. Alüminyum profil gövdesi hafif ama rijit bir yapı oluşturur; fiberglas ağı ise boyutsal kararlılığını yıllarca korur. Sık geçiş gereken noktalarda güçlü tercih.",
    specs: [
      "Çift taraflı açılım",
      "Çocuk kilidi dahil",
      "Ölçüye özel üretim",
      "Tüm profil renklerinde",
    ],
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="6" width="36" height="36" rx="4" stroke="currentColor" strokeWidth="2.5" />
        <rect x="24" y="6" width="1.5" height="36" fill="currentColor" opacity="0.5" />
        <line x1="12" y1="14" x2="21" y2="14" stroke="currentColor" strokeWidth="1.5" />
        <line x1="12" y1="20" x2="21" y2="20" stroke="currentColor" strokeWidth="1.5" />
        <line x1="12" y1="26" x2="21" y2="26" stroke="currentColor" strokeWidth="1.5" />
        <line x1="12" y1="32" x2="21" y2="32" stroke="currentColor" strokeWidth="1.5" />
        <rect x="39" y="20" width="3" height="8" rx="1.5" fill="currentColor" />
        <circle cx="42" cy="16" r="2.5" fill="currentColor" />
        <circle cx="42" cy="32" r="2.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: "plise-sineklik",
    name: "Plise Sineklik",
    tag: "Tasarım Odaklı",
    color: "#5a8c8a",
    desc: "Akordiyon benzeri katlanan yapısıyla kullanılmadığı anlarda neredeyse görünmez hale gelir. Dar boşluklara mükemmel uyum sağlayan bu sistem; balkon kapılarında ve arka bahçe geçişlerinde özellikle işlevseldir. Tül hareketi manyetik kilitleme mekanizmasıyla desteklenir.",
    specs: [
      "Çift ve tek kanat",
      "Manyetik kapanma",
      "Balkon kapıları için ideal",
      "18 renk paleti",
    ],
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="8" width="36" height="32" rx="3" stroke="currentColor" strokeWidth="2.5" />
        {[0,1,2,3,4].map(i => (
          <line key={i} x1={13 + i * 5} y1="8" x2={13 + i * 5} y2="40" stroke="currentColor" strokeWidth="1.5" opacity={0.4 + i*0.1} />
        ))}
        <rect x="6" y="22" width="12" height="4" rx="2" fill="currentColor" opacity="0.3" />
      </svg>
    ),
  },
  {
    id: "plise-perde",
    name: "Plise Perde",
    tag: "Işık Kontrolü",
    color: "#7a8fa6",
    desc: "Güneş ışığını kırarak iç mekana konforlu bir filtre sunar. Hem ışık geçirgen hem de tam opak seçenekleriyle cam yüzeylerin tamamına kurulabilir. Işığı yönlendiren katmanlı yapısı sayesinde kör nokta bırakmadan odayı sarar.",
    specs: [
      "Opak / yarı saydam seçenek",
      "Paslanmaz mekanizma",
      "Kademesiz ayar",
      "Çerçeveli / çerçevesiz",
    ],
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="6" width="32" height="36" rx="3" stroke="currentColor" strokeWidth="2.5" />
        {[0,1,2,3,4].map(i => (
          <rect key={i} x="8" y={6 + i * 7} width="32" height="5" fill="currentColor" opacity={0.15 + i*0.05} />
        ))}
        <circle cx="40" cy="24" r="3" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: "jaluzi-perde",
    name: "Jaluzi Perde",
    tag: "Klasik & Modern",
    color: "#8a7a9e",
    desc: "Alüminyum ya da ahşap lameller arasında seçim sunan jaluzi sistemleri; ışık açısını 180 derece boyunca hassas biçimde kontrol eder. Kurumsal ofislerden ev kullanımına geniş bir yelpazede tercih edilir. Profil kalınlığı 16–50 mm arasında değişir.",
    specs: [
      "Alüminyum / ahşap lam",
      "Açı kontrolü 0°–180°",
      "Motorize opsiyonu",
      "Antibakteriyel kaplama",
    ],
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="6" width="32" height="4" rx="2" fill="currentColor" />
        {[0,1,2,3,4,5,6].map(i => (
          <rect key={i} x="10" y={14 + i * 5} width="28" height="2.5" rx="1.25" fill="currentColor" opacity={0.6} />
        ))}
        <line x1="24" y1="10" x2="24" y2="44" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      </svg>
    ),
  },
  {
    id: "duet-perde",
    name: "Düet Perde",
    tag: "Çift Katmanlı",
    color: "#b07050",
    desc: "Şeffaf ve opak bantların dönüşümlü sıralandığı bu sistem; gün içinde ışık yönetimini mükemmel hale getirir. Bantlar iç içe geçtiğinde odaya yıldız ışığı filtresi girer; üst üste geldiğinde tam karartma elde edilir. Tasarım esnekliği son derece yüksektir.",
    specs: [
      "Çift bant sistemi",
      "Tam karartma özelliği",
      "Sılent mekanizma",
      "100+ renk kombinasyonu",
    ],
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="6" width="32" height="36" rx="3" stroke="currentColor" strokeWidth="2.5" />
        {[0,1,2,3,4].map(i => (
          <rect key={i} x="9" y={7 + i * 7} width="30" height="3.5" rx="1" fill="currentColor" opacity="0.5" />
        ))}
        {[0,1,2,3,4].map(i => (
          <rect key={`b${i}`} x="9" y={11 + i * 7} width="30" height="2.5" rx="1" fill="currentColor" opacity="0.2" />
        ))}
      </svg>
    ),
  },
  {
    id: "honeycomb-perde",
    name: "Honeycomb Perde",
    tag: "Isı & Ses Yalıtımı",
    color: "#c8961e",
    desc: "Petek hücre yapısı sayesinde camla mekan arasında hava tamponu oluşturur. Bu tampon hem ısı kayıplarını hem de dışarıdan gelen gürültüyü belirgin biçimde düşürür. Enerji verimliliğine katkısı en yüksek perde kategorisi olarak öne çıkar.",
    specs: [
      "Tek / çift hücre seçenek",
      "R-değeri en yüksek perde",
      "Yangın dayanımı sınıfı B1",
      "Renkler solmaz",
    ],
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polygon points="24,6 36,13 36,27 24,34 12,27 12,13" stroke="currentColor" strokeWidth="2.5" fill="none" />
        <polygon points="24,14 30,17.5 30,24.5 24,28 18,24.5 18,17.5" fill="currentColor" opacity="0.2" />
        <circle cx="24" cy="21" r="3" fill="currentColor" opacity="0.5" />
        <line x1="24" y1="34" x2="24" y2="42" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    id: "zip-perde",
    name: "Zip Perde",
    tag: "Rüzgar & UV Koruması",
    color: "#3a7a6a",
    desc: "Fermuar şeridinin yanlarda profil kanallarına oturmasıyla oluşan bu sistem; kuvvetli rüzgarda bile tülün şişmesini engeller. Dış cephe uygulamalarında UV-A ile UV-B ışınlarını filtreleyerek iç mekan döşemelerini ve mobilyaları korur. Yüzde seksene kadar güneş engelleme katsayısı mümkündür.",
    specs: [
      "Fermuar kanalı sistemi",
      "Rüzgar sınıfı 4",
      "%80 UV engelleme",
      "Motorlu / kumandalı",
    ],
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="6" width="32" height="36" rx="3" stroke="currentColor" strokeWidth="2.5" />
        <rect x="8" y="6" width="3" height="36" fill="currentColor" opacity="0.3" rx="1" />
        <rect x="37" y="6" width="3" height="36" fill="currentColor" opacity="0.3" rx="1" />
        {[0,1,2,3,4,5].map(i => (
          <circle key={i} x1="11" cx={11} cy={12 + i * 6} r="1.5" fill="currentColor" opacity="0.5" />
        ))}
        {[0,1,2,3,4,5].map(i => (
          <circle key={`r${i}`} cx={37} cy={12 + i * 6} r="1.5" fill="currentColor" opacity="0.5" />
        ))}
        <rect x="12" y="10" width="24" height="28" fill="currentColor" opacity="0.08" />
      </svg>
    ),
  },
];

export default function Products() {
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
    <section id="urunler" ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section head */}
        <div className="text-center mb-16 reveal">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-brand-green mb-3">
            Ürün Portföyü
          </span>
          <h2 className="font-display font-extrabold text-brand-dark leading-tight" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}>
            Her Açıklık İçin{" "}
            <span className="gradient-text">Doğru Sistem</span>
          </h2>
          <div className="section-divider mt-4" />
          <p className="mt-4 text-brand-slate max-w-2xl mx-auto text-base leading-relaxed">
            Fenetre Systems çatısı altında üretilen yedi farklı sistem;{" "}
            <strong>pencereden balkona</strong>, ofis camından dış cepheye kadar
            her türlü açıklığa mühendislik bakışıyla yanıt verir.
          </p>
        </div>

        {/* Products grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {products.map((p, idx) => (
            <article
              key={p.id}
              id={p.id}
              className="reveal product-card group cursor-pointer"
              style={{ transitionDelay: `${idx * 60}ms` }}
            >
              <div className="p-6">
                {/* Tag */}
                <span
                  className="inline-block text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full mb-4"
                  style={{ backgroundColor: `${p.color}18`, color: p.color }}
                >
                  {p.tag}
                </span>

                {/* Icon */}
                <div
                  className="product-icon w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${p.color}15`, color: p.color }}
                >
                  {p.icon}
                </div>

                {/* Name */}
                <h3 className="font-display font-bold text-brand-dark text-lg mb-2">
                  {p.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-brand-slate leading-relaxed mb-4">
                  {p.desc}
                </p>

                {/* Specs */}
                <ul className="space-y-1.5">
                  {p.specs.map((s) => (
                    <li key={s} className="flex items-center gap-2 text-xs text-brand-slate">
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ backgroundColor: p.color }}
                      />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom CTA */}
              <div
                className="px-6 py-3 border-t text-xs font-semibold flex items-center gap-1 group-hover:gap-2 transition-all"
                style={{
                  borderColor: `${p.color}30`,
                  color: p.color,
                }}
              >
                Teklif Al
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom prose content */}
        <div className="mt-20 prose-content reveal">
          <h2>Menteşeli Sineklik Neden Bu Kadar Tercih Ediliyor?</h2>
          <p>
            Türkiye'nin yazları giderek daha sıcak geçiyor.{" "}
            <strong>Doğal havalandırma</strong> artık lüks değil, gündelik yaşamın vazgeçilmez bir parçası. Pencereyi açtığınızda içeri giren sinek, tatil anlarını kâbusa çevirebilir. İşte bu noktada menteşeli sineklik devreye girer; hem hava akışını korur hem de istenmeyen misafir girişini keser.
          </p>
          <p>
            Alüminyum profil seçimi rastgele değildir. Ekstrüzyon yöntemiyle üretilen profiller;{" "}
            <em>nem, korozyon ve ultraviyole</em> karşısında onlarca yıl biçimini korur.
            Fiberglas tül ise cam liflerinden dokunduğundan plastik alternatifler gibi sararmaz ve kırılgan hale gelmez.
          </p>

          <h3>Menteşeli Sineklik Teknik Özellikleri</h3>
          <table>
            <thead>
              <tr>
                <th>Özellik</th>
                <th>Standart Model</th>
                <th>Premium Model</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Profil Kalınlığı</td>
                <td>1,2 mm</td>
                <td>1,6 mm</td>
              </tr>
              <tr>
                <td>Tül Malzeme</td>
                <td>Fiberglas 18×16</td>
                <td>Fiberglas 18×14 HD</td>
              </tr>
              <tr>
                <td>Menteşe Tipi</td>
                <td>Paslanmaz çelik</td>
                <td>Gömme paslanmaz</td>
              </tr>
              <tr>
                <td>Renk Seçeneği</td>
                <td>6 renk</td>
                <td>10+ renk / RAL</td>
              </tr>
              <tr>
                <td>Maksimum Kanat Boyutu</td>
                <td>150×220 cm</td>
                <td>200×280 cm</td>
              </tr>
              <tr>
                <td>Çocuk Kilidi</td>
                <td>Opsiyonel</td>
                <td>Standart</td>
              </tr>
              <tr>
                <td>Garanti Süresi</td>
                <td>3 yıl</td>
                <td>5 yıl</td>
              </tr>
            </tbody>
          </table>

          <p>
            Ölçü alımı sırasında dikkat edilmesi gereken en kritik mesele{" "}
            <u>dikdörtgenlik kontrolüdür</u>. Yıllar içinde yerleşen binalarda pencere
            kenarlarında milimetrik sapmalar oluşur; bu farkı görmezden gelen bir sineklik birkaç ay içinde kapanmaz ya da sızdırmaz hale gelir. Fenetre Systems ölçü ekibi, sipariş öncesinde iki farklı kotadan ölçüm alarak üretim toleransını sıfıra yaklaştırır.
          </p>
        </div>
      </div>
    </section>
  );
}
