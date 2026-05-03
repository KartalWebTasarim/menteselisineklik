"use client";
import { useEffect, useRef } from "react";
import { Zap, Target, CheckCircle, BarChart3 } from "lucide-react";

const expertiseAreas = [
  {
    icon: Target,
    title: "Ölçü & Proje Analizi",
    items: [
      "Yerinde ölçüm ve dikdörtgenlik kontrolü",
      "Profilin kapı/pencere tipine uygunluğu",
      "Mimari planlardan uzaktan ölçü okuma",
      "Renk ve malzeme danışmanlığı",
    ],
  },
  {
    icon: Zap,
    title: "Üretim Mühendisliği",
    items: [
      "CNC kesim ile ±0,1 mm tolerans",
      "Elektrostatik toz boya",
      "Fiberglas gerdirme makinesi",
      "Köşe profil presleme teknolojisi",
    ],
  },
  {
    icon: CheckCircle,
    title: "Kalite Güvencesi",
    items: [
      "Her parti için boyut tarama protokolü",
      "Boya yapışma çekme testi",
      "Menteşe yük ve seyir testi",
      "Nem ve UV hızlandırılmış yaşlandırma",
    ],
  },
  {
    icon: BarChart3,
    title: "Sahada Sonuç",
    items: [
      "Aynı gün kurulum, aynı gün teslim",
      "Montaj ekibi sertifikalı",
      "Garanti belgesi ürünle birlikte gelir",
      "7/24 satış sonrası destek hattı",
    ],
  },
];

export default function Expertise() {
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
    <section id="uzmanlık" ref={sectionRef} className="py-24 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left – prose */}
          <div className="reveal">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-brand-green mb-3">
              Deneyim & Uzmanlık
            </span>
            <h2 className="font-display font-extrabold text-brand-dark leading-tight mb-6" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)" }}>
              18 Yılda İnşa Edilen{" "}
              <span className="gradient-text">Teknik Birikim</span>
            </h2>

            <div className="prose-content">
              <p>
                Sineklik sektöründe farklı firmalar benzer profil listesiyle çalışır.
                Fenetre Systems'ı bunlardan ayıran şey profil kataloğu değil,{" "}
                <strong>uygulamadaki derinliktir</strong>. Aynı pencere tipinde farklı
                bina yaşları, farklı yapı malzemeleri ve farklı iklim koşulları; montaj
                ekibinin on yılda öğrendiği nüansları gerektirir.
              </p>
              <p>
                Örneğin denize yakın bir lokasyonda kullanılacak menteşe tipi,{" "}
                <em>tuz sisi</em> etkisini hesaba katmak zorundadır. İstanbul'un
                tarihi yarımadasında bulunan eski taş binalarda profil bağlantısı standart
                dübelle değil, kılavuz delik yöntemiyle yapılır. Bu farklar kağıt üstünde
                görünmez; sahada birikmeden ortaya çıkmaz.
              </p>
              <p>
                Montaj ekibimiz, sahaya çıkmadan önce teorik eğitim ve{" "}
                <u>en az iki yıl yönlendirmeli saha uygulaması</u> geçirir.
                Sertifika sadece simgesel değil, belirli teknik baremlerle ölçülen
                gerçek bir yeterlilik kanıtıdır.
              </p>

              <h3>Uzmanlık Alanımızdaki Temel Veriler</h3>
              <table>
                <thead>
                  <tr>
                    <th>Konu</th>
                    <th>Veri</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Toplam üretim kapasitesi (günlük)</td>
                    <td>400 m² profil kesimi</td>
                  </tr>
                  <tr>
                    <td>Teslimat memnuniyeti</td>
                    <td>%97,4 zamanında teslim</td>
                  </tr>
                  <tr>
                    <td>Garanti sonrası arıza oranı</td>
                    <td>%0,8 (sektör ort. %3,2)</td>
                  </tr>
                  <tr>
                    <td>Ortalama kurulum süresi</td>
                    <td>45 dakika / pencere</td>
                  </tr>
                  <tr>
                    <td>İhracat ülkesi sayısı</td>
                    <td>35+ ülke</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Internal links */}
            <div className="mt-6 flex flex-wrap gap-3">
              {[
                { label: "Zip Perde", href: "/" },
                { label: "Düet Perde", href: "/" },
                { label: "Honeycomb Perde", href: "/" },
              ].map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="text-xs font-semibold text-brand-green bg-brand-mist border border-brand-greenLight hover:border-brand-green px-3 py-1.5 rounded-full transition-colors"
                >
                  {l.label} →
                </a>
              ))}
            </div>
          </div>

          {/* Right – expertise cards */}
          <div className="reveal grid sm:grid-cols-2 gap-4">
            {expertiseAreas.map((area, i) => (
              <div
                key={area.title}
                className="bg-white border border-brand-greenLight rounded-2xl p-5 hover:border-brand-green hover:shadow-lg hover:shadow-brand-green/10 transition-all duration-300 card-hover"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="w-10 h-10 rounded-xl bg-brand-green/15 flex items-center justify-center mb-3">
                  <area.icon size={20} className="text-brand-green" />
                </div>
                <h3 className="font-display font-bold text-brand-dark text-sm mb-3">
                  {area.title}
                </h3>
                <ul className="space-y-2">
                  {area.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-brand-slate">
                      <svg className="w-3 h-3 text-brand-green flex-shrink-0 mt-0.5" viewBox="0 0 12 12" fill="none">
                        <circle cx="6" cy="6" r="5.5" stroke="currentColor" strokeWidth="1" />
                        <path d="M4 6l1.5 1.5L8 4.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Achievement card */}
            <div className="sm:col-span-2 bg-gradient-to-br from-brand-green to-brand-greenDark rounded-2xl p-6 text-white">
              <div className="flex items-start gap-4">
                <div className="text-4xl font-display font-extrabold opacity-30">
                  18
                </div>
                <div>
                  <div className="font-bold text-lg mb-1">Yılda Derlenen Saha Deneyimi</div>
                  <p className="text-sm opacity-90 leading-relaxed">
                    Farklı iklim, farklı yapı ve farklı müşteri beklentileriyle biriktirilmiş bu deneyim;
                    tasarım kararlarımıza, malzeme seçimlerimize ve montaj protokollerimize doğrudan yansır.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
