"use client";
import { useEffect, useRef } from "react";
import { MessageSquare, Ruler, Factory, Package, Truck, Wrench, Star } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "İlk Temas & İhtiyaç Analizi",
    desc: "Telefon, WhatsApp ya da e-posta üzerinden bağlantı kurulur. Pencere veya kapı tipi, açıklık sayısı ve mekânın niteliği sorgulanır. Bu ön görüşme sadece teklif hesabı değil; doğru ürün seçiminin başlangıcıdır.",
    color: "#83bd81",
  },
  {
    number: "02",
    icon: Ruler,
    title: "Yerinde Ölçüm",
    desc: "Saha ziyaretinde her açıklık alt ve üst kottan ayrı ayrı ölçülür. Dikdörtgenlik sapmalarının tespiti için köşegen kontrolü yapılır. Bina yaşına ve yapı malzemesine göre montaj yöntemi bu aşamada belirlenir.",
    color: "#6aaa68",
  },
  {
    number: "03",
    icon: Factory,
    title: "Üretim & Kalite Kontrolü",
    desc: "Ölçüler CNC kesim makinesine aktarılır. Profil kesimi, köşe presleme ve tül gerdirme işlemlerinin her birinde ara kontrol gerçekleştirilir. Renk uyumu son prova ile onaylanır.",
    color: "#5a8c8a",
  },
  {
    number: "04",
    icon: Package,
    title: "Özel Paketleme",
    desc: "Tamamlanan ürün kanat bazında köpük tampon, streç film ve koruyucu karton paket ile sarılır. Vidalar, menteşe kapakları ve kulplar ayrı etiketli torbalarda ambalajlanır. Paket üstündeki QR kod sipariş bilgisine link verir.",
    color: "#7a8fa6",
  },
  {
    number: "05",
    icon: Truck,
    title: "Teslimat",
    desc: "Yurt içinde anlaşmalı kargo şirketleri veya firma aracımızla kapıya ulaşılır. Avrupa siparişleri ekspres lojistik ağıyla 4 ila 10 iş günü arasında teslim edilir. Gümrük evrakları önceden hazırlanır.",
    color: "#c8961e",
  },
  {
    number: "06",
    icon: Wrench,
    title: "Montaj",
    desc: "Sertifikalı montaj ekibi ürünü yerinde kurar. Menteşe ayarı, tülün gerginliği ve çocuk kilidinin işlevi teslimatta birlikte test edilir. Müşteri onayı alınmadan ekip sahayı terk etmez.",
    color: "#b07050",
  },
  {
    number: "07",
    icon: Star,
    title: "Satış Sonrası Destek",
    desc: "Kurulumdan sonra da bağlantı kesilmez. Mevsimsel ayar gereksinimleri, menteşe yağlaması ya da tül yenileme taleplerinde 7/24 destek hattı devrededir. Garanti süresi içindeki arızalarda yerinde müdahale yapılır.",
    color: "#83bd81",
  },
];

export default function Process() {
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
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="surec" ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-brand-green mb-3">
            Nasıl Çalışıyoruz
          </span>
          <h2 className="font-display font-extrabold text-brand-dark leading-tight" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}>
            Sipariş'ten Montaja{" "}
            <span className="gradient-text">7 Adım</span>
          </h2>
          <div className="section-divider mt-4" />
          <p className="mt-4 text-brand-slate max-w-2xl mx-auto text-base leading-relaxed">
            Ürünün size ulaşması; salt bir kargo sürecinden ibaret değildir.{" "}
            <strong>Her adım belgelidir</strong>, her adımın sorumlusu nettir.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="reveal relative bg-brand-cream border border-brand-greenLight rounded-2xl p-6 hover:border-brand-green hover:shadow-lg hover:shadow-brand-green/10 transition-all duration-300"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Step number */}
              <div
                className="absolute top-5 right-5 font-display font-extrabold text-5xl leading-none opacity-10"
                style={{ color: step.color }}
              >
                {step.number}
              </div>

              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: `${step.color}18` }}
              >
                <step.icon size={22} style={{ color: step.color }} />
              </div>

              {/* Content */}
              <h3 className="font-display font-bold text-brand-dark text-base mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-brand-slate leading-relaxed">
                {step.desc}
              </p>

              {/* Connector line (not last) */}
              {i < steps.length - 1 && (
                <div
                  className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-px"
                  style={{ background: `${step.color}40` }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Bottom prose */}
        <div className="mt-20 reveal prose-content">
          <h2>Montaj Sürecinde Sıkça Yapılan Yanlışlar</h2>
          <p>
            Yanlış uygulanan bir menteşeli sineklik; birkaç ay içinde kapanmama, çerçevede oynanma ya da tülün orta noktasında sarkma sorunlarıyla baş gösterir. Bu kusurların kaynağı genellikle ürün kalitesi değil, montaj hatalarıdır.
          </p>

          <ol className="mt-4 space-y-2">
            <li><strong>Düşük ölçü takviyesi:</strong> Tek kottan alınan ölçü, eğik kasalarda yanlış üretim tetikler.</li>
            <li><strong>Yanlış dübel seçimi:</strong> Asmolen veya ytong yapılarda standart taş dübeli tutunmaz.</li>
            <li><strong>Profil sıkıştırması:</strong> Sürtünme ile tutturulan sineklik ısı genleşmesinde deforme olur.</li>
            <li><strong>Menteşe açısının ayarlanmaması:</strong> Fabrika ayarında gelen menteşe sahaya uyarlanmadan kurulursa kanat bağımsız kapanmaz.</li>
            <li><strong>Tülün aşırı gerilmesi:</strong> Fiberglas ağ gereğinden fazla gerilirse köşe pimlerinde kopma oluşur.</li>
          </ol>

          <p>
            Fenetre Systems ekibi bu hataları fabrika eğitiminde örnek vakalar üzerinden öğrenir.{" "}
            <u>Sahaya çıkan her teknisyen bu senaryoları bizzat deneyimlemiştir</u>. Bu yüzden kurulum sonrası şikayet oranımız sektör ortalamasının dörtte biri kadardır.
          </p>
        </div>
      </div>
    </section>
  );
}
