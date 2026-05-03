"use client";
import { useEffect, useRef } from "react";

const materials = [
  {
    name: "Alüminyum Profil",
    grade: "EN AW-6063 T5",
    props: [
      "Yoğunluk: 2,70 g/cm³",
      "Akma mukavemeti: ≥145 MPa",
      "Termal iletkenlik: 200 W/m·K",
      "Nem ve korozyon direnci yüksek",
      "Geri dönüştürülebilir malzeme",
    ],
    desc: "Havacılık sanayisinde referans alınan 6063-T5 alaşımı; standart bina alüminyumlarına kıyasla yüzde kırk daha yüksek burulma direnci sunar. İnce et kalınlığına karşın rijitliği korunur; bu özellik büyük kanat boyutlarında sarkma sorununu önler.",
    color: "#83bd81",
  },
  {
    name: "Fiberglas Tül",
    grade: "18×16 / 18×14 Mesh",
    props: [
      "UV stabilitesi: 10 yıl+",
      "Gözenek boyutu: 1,0–1,4 mm",
      "Çekme mukavemeti: 270 N/5 cm",
      "PVC kaplamalı cam elyafı",
      "REACH yönetmeliğine uyumlu",
    ],
    desc: "Cam elyafından dokunan fiberglas tül; plastik alternatiflerinin aksine sararmaz ve kırılgan hale gelmez. PVC kaplama tabakası tülü neme, asit yağmuruna ve böcek salgısına karşı korur. Delik boyutu standartta 1,2 mm'dir; Akdeniz bölgesi için küçük haşere bariyeri olan 1,0 mm seçeneği sunulur.",
    color: "#6aaa68",
  },
  {
    name: "Toz Boya Kaplama",
    grade: "RAL / Poliester Baz",
    props: [
      "Kaplama kalınlığı: 80–120 mikron",
      "Tuz sisi testi: 1000 saat",
      "Akma ısısı: 200°C",
      "Çizik direnci sınıfı 1H",
      "Solmaz parlak / mat seçenek",
    ],
    desc: "Elektrostatik toz boya uygulaması, ısıl fırın ile 200°C'de pişirilir. Bu süreç boyanın profilin gözeneklerine işlemesini sağlar; yüzeysel bir film oluşturmaz. Tuz sisi testinde 1000 saat sonunda renk dönüşümü ve kabarcık gözlemlenmez.",
    color: "#7a8fa6",
  },
  {
    name: "Paslanmaz Çelik Menteşe",
    grade: "AISI 304 / 316",
    props: [
      "Krom içeriği: %18,0",
      "Nikel içeriği: %8,0",
      "Deniz ortamı için 316 sınıfı",
      "Yük kapasitesi: 15 kg/kanat",
      "Sıfır bakım 5 yıl",
    ],
    desc: "AISI 304 paslanmaz çelik; standart demir menteşenin 40 katı korozyon direnci sunar. Kıyı yapılarında ise klorür iyonlarına karşı daha yüksek molibden içeren 316 sınıfı kullanılır. Menteşe sabitleme noktaları iki vidadan dörde çıkarılarak kasaya aktarılan yük dağıtılır.",
    color: "#c8961e",
  },
];

export default function MaterialQuality() {
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
      { threshold: 0.06 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="malzeme" ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-brand-green mb-3">
            Malzeme Kalitesi
          </span>
          <h2 className="font-display font-extrabold text-brand-dark leading-tight" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}>
            Performansın Arkasındaki{" "}
            <span className="gradient-text">Mühendislik</span>
          </h2>
          <div className="section-divider mt-4" />
          <p className="mt-4 text-brand-slate max-w-2xl mx-auto">
            Görünürde sadece alüminyum çerçeve ve tül olan bir sistem; aslında{" "}
            <strong>dört farklı malzeme grubunun</strong> titizlikle bir araya gelmesiyle işlev kazanır.
          </p>
        </div>

        {/* Material cards */}
        <div className="space-y-8">
          {materials.map((mat, i) => (
            <div
              key={mat.name}
              className="reveal bg-brand-cream border border-brand-greenLight rounded-3xl overflow-hidden hover:border-brand-green transition-all duration-300"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="grid lg:grid-cols-3 gap-0">
                {/* Left header */}
                <div
                  className="p-8 flex flex-col justify-center"
                  style={{ background: `linear-gradient(135deg, ${mat.color}15, ${mat.color}08)` }}
                >
                  <div
                    className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3 w-fit"
                    style={{ backgroundColor: `${mat.color}20`, color: mat.color }}
                  >
                    {mat.grade}
                  </div>
                  <h3 className="font-display font-bold text-brand-dark text-xl mb-3">{mat.name}</h3>
                  <ul className="space-y-1.5">
                    {mat.props.map((prop) => (
                      <li key={prop} className="flex items-center gap-2 text-xs text-brand-slate">
                        <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: mat.color }} />
                        {prop}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right description */}
                <div className="lg:col-span-2 p-8 flex flex-col justify-center">
                  <p className="text-brand-slate leading-relaxed text-base">
                    {mat.desc}
                  </p>

                  {/* Quality bar */}
                  <div className="mt-6 grid grid-cols-3 gap-4">
                    {[
                      { label: "Dayanıklılık", pct: 95 },
                      { label: "Estetik", pct: 90 },
                      { label: "Ömür", pct: 88 },
                    ].map((bar) => (
                      <div key={bar.label}>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-brand-slate font-medium">{bar.label}</span>
                          <span className="font-bold" style={{ color: mat.color }}>{bar.pct}%</span>
                        </div>
                        <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                          <div
                            className="h-full rounded-full transition-all duration-1000"
                            style={{ width: `${bar.pct}%`, backgroundColor: mat.color }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom prose */}
        <div className="mt-20 reveal prose-content">
          <h2>Menteşeli Sineklikte Malzeme Seçimi Neden Bu Kadar Önemli?</h2>
          <p>
            Bir menteşeli sineklik; günde belki on, belki otuz kez açılıp kapanır. Yılda yüzlerce saatlik dış hava temasına maruz kalır. Temmuz'un kavurucu sıcağında genleşen, Ocak'ın dondurucu soğuğunda büzülen alüminyum; yanlış alaşımda birkaç yıl içinde millimetrik ama kritik biçimlenmeler yaşar. Bu biçimlenmeler sinekliğin sızdırmaz çalışmasını bozar.
          </p>
          <p>
            Tülün kalitesi de göz ardı edilemez. <em>Standart polipropilen tül</em>, iki üç yılda UV etkisiyle kırılganlaşır ve tutunan böcek ya da kuş pençesi baskısıyla yırtılır. Fiberglas tül bu sorunları yapısal olarak devre dışı bırakır; gözenek boyutundaki sabit geometriyi 10 yıl ve üzerinde korur.
          </p>

          <h3>Yatırım Değeri Karşılaştırması</h3>
          <table>
            <thead>
              <tr>
                <th>Kriter</th>
                <th>Ekonomik Sınıf</th>
                <th>Fenetre Premium</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Profil alaşımı</td>
                <td>6060 T4 (standart)</td>
                <td>6063 T5 (yüksek mukavemet)</td>
              </tr>
              <tr>
                <td>Tül ömrü</td>
                <td>2–4 yıl</td>
                <td>10 yıl+</td>
              </tr>
              <tr>
                <td>Menteşe materyali</td>
                <td>Çinko alaşım</td>
                <td>AISI 304 paslanmaz</td>
              </tr>
              <tr>
                <td>Boya kalınlığı</td>
                <td>40–60 mikron</td>
                <td>80–120 mikron</td>
              </tr>
              <tr>
                <td>5 yılda toplam maliyet</td>
                <td>İlk fiyat + 1–2 yenileme</td>
                <td>Sadece ilk yatırım</td>
              </tr>
            </tbody>
          </table>

          <p>
            Uzun vadeli perspektiften bakıldığında premium malzeme; ilk kurulum maliyetinin yüzde yirmi ila kırkını daha yüksek gösterse de beş yıl içinde bu farkı aşar ve tasarruf etmeye devam eder.{" "}
            <u>Kaliteyi ilk günden hissetmek</u> ile iki yılda bir yenileme maliyeti arasındaki farkı somutlaştıran bu tablo; satın alma kararını doğru temele oturtuyor.
          </p>
        </div>
      </div>
    </section>
  );
}
