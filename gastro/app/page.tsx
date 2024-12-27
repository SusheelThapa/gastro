import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { CTASection } from "@/components/sections/cta";
import { FeaturesSection } from "@/components/sections/feature";
import { HeroSection } from "@/components/sections/hero";
import { HowItWorksSection } from "@/components/sections/howitworks";
import { TestimonialsSection } from "@/components/sections/testimonial";
import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col relative bg-white dark:bg-black lg:px-64">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  );
}
