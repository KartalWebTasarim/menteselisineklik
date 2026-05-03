import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import BrandValue from "@/components/BrandValue";
import Expertise from "@/components/Expertise";
import Process from "@/components/Process";
import Applications from "@/components/Applications";
import TrustProofs from "@/components/TrustProofs";
import ServiceRegions from "@/components/ServiceRegions";
import MaterialQuality from "@/components/MaterialQuality";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import MobileSticky from "@/components/MobileSticky";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Products />
        <BrandValue />
        <Expertise />
        <Process />
        <Applications />
        <TrustProofs />
        <ServiceRegions />
        <MaterialQuality />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <MobileSticky />
    </>
  );
}
