import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import HeroSection from "@/components/sections/HeroSection";
import { BarbersSection } from "@/components/sections/BarbersSection";

export default function Home() {
  return (
    <>
      <Header />
      < HeroSection />
      <BarbersSection />
      <Footer />
    </>
  );
}
