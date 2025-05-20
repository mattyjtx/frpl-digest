import BgGradient from "@/components/common/bg-gradient";
import HeroSection from "@/components/home/hero-section";
import DemoSection from "@/components/home/demo-section";


export default function Home() {
  return (
    <div className="relative w-full">
      <BgGradient />
      <HeroSection />
      <DemoSection />
      {/* <HowItWorksSection /> */}
      {/* <PricingSection /> */}
      {/* <CTASection /> */}

    </div>
  );
}
