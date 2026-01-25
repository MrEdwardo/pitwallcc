import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { Achievements } from "@/components/landing/Achievements";
import { CTA } from "@/components/landing/CTA";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-outfit">
      <Header />
      <main>
        <Hero />
        <Features />
        <Achievements />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
