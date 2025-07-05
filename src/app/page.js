import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Rates from "@/components/Rates";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import UnavailableNotice from "@/components/UnavailableNotice";
import QuoteBanner from "@/components/QuoteBanner";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <Rates />
      <UnavailableNotice />
      <QuoteBanner />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
