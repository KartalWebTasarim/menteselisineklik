"use client";
import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    category: "Ürün & Teknik",
    items: [
      {
        q: "Menteşeli sineklik hangi pencere tiplerine uygulanabilir?",
        a: `<p>İçe açılan, dışa açılan ve sabit kanatlı her türlü pencereye uygulanabilir. Tek kanat ve çift kanat seçenekleri mevcuttur. PVC, ahşap ve alüminyum doğrama sistemleriyle uyumludur. Sadece derinliği yetersiz olan metal kepenk kasetlerine standart menteşeli sineklik sığmayabilir; bu durumda kasa dışı yerleştirme yöntemi kullanılır.</p>`,
      },
      {
        q: "Plise sineklik mi yoksa menteşeli sineklik mi tercih etmeliyim?",
        a: `<p><strong>Geçiş sıklığı</strong> belirleyici etkendir. Günde onlarca kez açılan balkon kapıları için plise sineklik daha pratik ve yer kazandırıcıdır; kanat olmadığından yanda birikmez. Pencere sineklikleri için ise menteşeli sistem tercih edilir; daha iyi sızdırmazlık sağlar ve iri tül gözeneği gerektirmeyen mekânlarda avantajlıdır.</p><ul><li>Balkon kapısı → Plise Sineklik</li><li>Standart pencere → Menteşeli Sineklik</li><li>Büyük açıklıklar → Çift kanatlı menteşeli</li><li>Dar kasa → Plise veya stor sineklik</li></ul>`,
      },
      {
        q: "Maksimum kanat boyutu nedir?",
        a: `<p>Standart seride maksimum tek kanat boyutu 150 × 220 cm'dir. Premium profil serisiyle bu boyut 200 × 280 cm'e çıkar. Daha büyük açıklıklar çift kanatlı sistem olarak çözülür; merkez profil ek bir destek noktası oluşturur ve sarkma riskini ortadan kaldırır.</p>`,
      },
      {
        q: "Renk seçenekleri nelerdir?",
        a: `<p>Standart seride <strong>beyaz, bej, antrasit, kahve, bronz ve siyah</strong> olmak üzere altı renk bulunmaktadır. Premium seride 10'dan fazla renk ve özel RAL kodu siparişe açıktır. Bina yönetiminin renk kısıtlaması varsa renk kartı ile karşılaştırma yapılarak onaylı renk üretilir.</p>`,
      },
      {
        q: "Çocuk kilidi nasıl çalışıyor?",
        a: `<p>Çocuk kilidi, kanat kolunun belirli bir açıda durdurulmasını sağlayan mekanik bir durdurucudur. Çocukların pencereyi tam açmasını engeller; güvenli havalandırma aralığı korunur. Kilit serbest bırakma hareketi tek elle yapılamaz; iki el veya belirli bir kuvvet gerektirir. Premium seride bu bileşen standarttır.</p>`,
      },
    ],
  },
  {
    category: "Teslimat & Montaj",
    items: [
      {
        q: "Sipariş verdikten kaç günde teslim alırım?",
        a: `<p>Üretim süresi sipariş miktarına göre <strong>2 ila 5 iş günü</strong> arasında değişir. Kargo teslimi Marmara bölgesinde 1–2, diğer bölgelerde 2–5 iş günü ekler. Toplu siparişlerde üretim takvimi önceden paylaşılır. Avrupa siparişlerinde toplam süre 4–10 iş günüdür.</p>`,
      },
      {
        q: "Montaj dahil mi? Montaj ücreti ayrı mı?",
        a: `<p>Türkiye genelindeki siparişlerde montaj standarttır ve ayrıca ücretlendirilmez. Montaj ekibi ürünü teslim ettiği gün kurar; test ederek teslim alır. Avrupa'ya gönderilen ürünler demonte olarak paketlenir; montaj talimatları ürünle birlikte gelir. Teknik destek hattından video destekli kurulum rehberliği sunulur.</p>`,
      },
      {
        q: "Ürün hasarlı gelirse ne olur?",
        a: `<p>Paketleme hasarı teslimat anında tutanak tutularak kargo firmasına bildirilmelidir. Üretim kaynaklı bir hata varsa ürün yeniden üretilerek ücretsiz gönderilir. Nakliye sırasında oluşan hasarlar sigorta kapsamında değerlendirilir; müşteri süreç boyunca bilgilendirilir. Tüm yazışmalar kayıt altındadır.</p>`,
      },
      {
        q: "Ölçü almadan sipariş verebilir miyim?",
        a: `<p>Yurt içi siparişlerde yerinde ölçüm önerilir; ancak müşteri kendi ölçüsünü doğru verirse buna göre üretim yapılabilir. Ölçü talimatı video formatında paylaşılır. Yurt dışı siparişlerde ölçü formu e-posta ile gönderilir. Dikdörtgenlik sapmasının 5 mm'yi geçmediği durumlarda standart ölçü üretimi güvenlidir.</p>`,
      },
    ],
  },
  {
    category: "Bakım & Ömür",
    items: [
      {
        q: "Menteşeli sineklik bakımı nasıl yapılır?",
        a: `<p>Tül, nemli yumuşak bez ya da süngerle hafifçe silinerek temizlenir. Tuz sisi, boya kalıntısı veya böcek lekesi için hafif sabunlu su yeterlidir. <em>Aşındırıcı deterjan ve çelik yün kesinlikle kullanılmamalıdır.</em> Menteşe yılda bir kez yağlanırsa hareket akıcılığı korunur. Profil için sezon başında ıslak bez temizliği yapılması önerilir.</p>`,
      },
      {
        q: "Tül eskidikçe değiştirilebilir mi?",
        a: `<p>Evet. Tül değişimi; tüm sinekliğin söküp atılmasını gerektirmez. Profil çerçevesi sağlamsa yalnızca tül yenilenir. Bu işlem montaj ekibimiz tarafından yerinde yapılabilir veya taşıma koşullarına uygunsa çerçeve fabrikaya getirilerek değiştirilir. Tül yenileme maliyeti yeni sinekliğin çok altındadır.</p>`,
      },
      {
        q: "Ne kadar ömrü var?",
        a: `<p>Standart seride profil ömrü 10–15 yıl, tül ömrü 5–8 yıldır. Premium seride profil ömrü 15–20 yıl, tül ömrü 10 yıl ve üzerine çıkar. Bu değerler Türkiye'nin farklı iklim bölgelerinde sahadan elde edilen gözlemlere dayanır. Bakım protokolüne uyan kullanıcılarda bu sürelerin üst sınırları sıkça aşılır.</p>`,
      },
    ],
  },
  {
    category: "Fiyatlandırma & Bayilik",
    items: [
      {
        q: "Fiyatlar neye göre belirleniyor?",
        a: `<p>Birim fiyat; kanat boyutu, profil serisi (standart/premium), tül türü, renk seçimi ve adet miktarına göre hesaplanır. Adet arttıkça birim maliyet düşer. İndirimli fiyatlandırma için en az 5 kanat eşiği geçerlidir. Kesin teklif için WhatsApp veya telefon üzerinden ölçü ve adet bilgisi paylaşılması yeterlidir.</p>`,
      },
      {
        q: "Bayilik başvurusu nasıl yapılır?",
        a: `<p>Bayilik taleplerini WhatsApp üzerinden değerlendiriyoruz. İlk aşamada faaliyet bölgesi, mevcut müşteri tabanı ve kapasite bilgisi alınır. Uygunluk sağlanırsa teknik eğitim, tanıtım materyali ve özel bayi fiyat listesi paylaşılır. Türkiye'nin 12 ilinde aktif bayimiz mevcut; hizmet verilmeyen bölgelerde öncelikli değerlendirme yapılır.</p>`,
      },
      {
        q: "Toplu konut veya şantiye projeleri için özel koşul var mı?",
        a: `<p>100 kanat ve üzeri siparişler proje kapsamında değerlendirilir. Bu kapsamda; özel fiyatlandırma, öncelikli üretim sıralaması, standart montaj eğitimi ve proje yönetimi desteği sunulur. Proje detaylarını mail veya WhatsApp ile iletmeniz yeterlidir.</p>`,
      },
    ],
  },
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState({});
  const sectionRef = useRef(null);

  const toggle = (catIdx, itemIdx) => {
    const key = `${catIdx}-${itemIdx}`;
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

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

  const totalFaqs = faqs.reduce((acc, cat) => acc + cat.items.length, 0);

  return (
    <section id="sss" ref={sectionRef} className="py-24 bg-brand-cream">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-brand-green mb-3">
            Sıkça Sorulan Sorular
          </span>
          <h2 className="font-display font-extrabold text-brand-dark leading-tight" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}>
            Aklınızdaki Soruların{" "}
            <span className="gradient-text">Doğrudan Yanıtları</span>
          </h2>
          <div className="section-divider mt-4" />
          <p className="mt-4 text-brand-slate max-w-xl mx-auto">
            {totalFaqs} farklı sorunun yanıtını dört kategoride derledik. Hâlâ yanıt bulamadıysanız doğrudan iletişime geçin.
          </p>
        </div>

        {/* FAQ accordion */}
        <div className="space-y-8">
          {faqs.map((cat, catIdx) => (
            <div key={cat.category} className="reveal" style={{ transitionDelay: `${catIdx * 100}ms` }}>
              {/* Category label */}
              <div className="flex items-center gap-3 mb-3">
                <div className="w-7 h-7 rounded-lg bg-brand-green/20 flex items-center justify-center">
                  <span className="text-xs font-bold text-brand-green">{catIdx + 1}</span>
                </div>
                <h3 className="font-display font-bold text-brand-dark text-lg">
                  {cat.category}
                </h3>
              </div>

              {/* Items */}
              <div className="bg-white rounded-2xl overflow-hidden border border-brand-greenLight">
                {cat.items.map((item, itemIdx) => {
                  const key = `${catIdx}-${itemIdx}`;
                  const isOpen = openItems[key];

                  return (
                    <div key={key} className="faq-item border-b border-brand-greenLight last:border-b-0">
                      <button
                        className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left hover:bg-brand-mist transition-colors duration-200 group"
                        onClick={() => toggle(catIdx, itemIdx)}
                        aria-expanded={isOpen}
                      >
                        <span className="font-semibold text-brand-dark text-sm leading-snug pr-4">
                          {item.q}
                        </span>
                        <ChevronDown
                          size={18}
                          className={`text-brand-green flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                        />
                      </button>

                      <div className={`faq-answer ${isOpen ? "open" : ""}`}>
                        <div
                          className="px-6 pb-5 prose-content text-sm"
                          dangerouslySetInnerHTML={{ __html: item.a }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 reveal text-center">
          <p className="text-brand-slate text-sm mb-4">
            Burada yanıt bulamadığınız bir sorunuz mu var?
          </p>
          <a
            href="https://wa.me/905403363873?text=SSS%20sayfasından%20ulaşıyorum%2C%20bir%20sorum%20var."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-green hover:bg-brand-greenDark text-white font-semibold px-6 py-3 rounded-xl transition-colors duration-200"
          >
            WhatsApp ile Sorun
          </a>
        </div>
      </div>
    </section>
  );
}
