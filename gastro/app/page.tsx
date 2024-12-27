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
    <main className="container mx-auto p-6 space-y-32 flex flex-col items-center ">
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
