import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import NewOfferSection from "@/components/NewOfferSection";
import PriceListSection from "@/components/PriceListSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import StatsSection from "@/components/StatsSection";
import FAQSection from "@/components/FAQSection";
import FooterSection from "@/components/FooterSection";
import Particles from "@/components/Particles";

const Index = () => (
  <div className="relative overflow-x-hidden">
    <Particles />
    <Navbar />
    <HeroSection />
    <StatsSection />
    <ServicesSection />
    <NewOfferSection />
    <PriceListSection />
    <HowItWorksSection />
    <TestimonialsSection />
    <FAQSection />
    <FooterSection />
  </div>
);

export default Index;
