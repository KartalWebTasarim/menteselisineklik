import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://menteselisineklik.com.tr"),
  title: {
    default: "Menteşeli Sineklik: Pencere Sınırlarını Keşfet",
    template: "%s | Menteşeli Sineklik",
  },
  description:
    "Menteşeli sineklik sistemleri ile evinizi böceklerden koruyun. Alüminyum profil, fiberglas ağ ve çocuk kilidi. Hızlı montaj, uzun ömürlü kullanım.",
  keywords: [
    "menteşeli sineklik",
    "sineklik",
    "plise sineklik",
    "plise perde",
    "jaluzi perde",
    "honeycomb perde",
    "zip perde",
    "düet perde",
    "sineklik firmaları",
    "pencere sinekliği",
    "kapı sinekliği",
    "alüminyum sineklik",
    "sineklik montaj",
    "sineklik fiyatları",
  ],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://menteselisineklik.com.tr",
    siteName: "Menteşeli Sineklik",
    title: "Menteşeli Sineklik: Pencere Sınırlarını Keşfet",
    description:
      "Menteşeli sineklik sistemleri ile evinizi böceklerden koruyun. Alüminyum profil, fiberglas ağ ve çocuk kilidi. Hızlı montaj, uzun ömürlü kullanım.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Menteşeli Sineklik",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Menteşeli Sineklik: Pencere Sınırlarını Keşfet",
    description:
      "Menteşeli sineklik sistemleri ile evinizi böceklerden koruyun. Alüminyum profil, fiberglas ağ ve çocuk kilidi. Hızlı montaj, uzun ömürlü kullanım.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://menteselisineklik.com.tr",
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#83bd81" />
        <meta name="geo.region" content="TR" />
        <meta name="geo.placename" content="Gebze, Kocaeli" />
        <link rel="canonical" href="https://menteselisineklik.com.tr" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Menteşeli Sineklik",
              url: "https://menteselisineklik.com.tr",
              logo: "https://menteselisineklik.com.tr/logo.png",
              description:
                "Ölçüye özel menteşeli sineklik, plise sineklik, plise perde ve panjur sistemleri. Türkiye geneli montaj dahil adrese teslim.",
              telephone: "+905403363873",
              email: "info@menteselisineklik.com.tr",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Cumhuriyet Mah. 2233 Sok. No:4/A",
                addressLocality: "Gebze",
                addressRegion: "Kocaeli",
                addressCountry: "TR",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "40.7967",
                longitude: "29.4358",
              },
              openingHours: "Mo-Sa 08:00-19:00",
              sameAs: [
                "https://www.facebook.com/menteselisineklik/",
                "https://www.instagram.com/menteselisineklik/",
              ],
              areaServed: ["TR", "EU"],
              priceRange: "₺₺",
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
