import AIFeatures from "@/components/careerPortal/AIFeatures";
import FeaturedOpportunities from "@/components/careerPortal/FeaturedOpportunities";
import SearchSection from "@/components/careerPortal/SearchSection";
import Header from "@/components/careerswitch/Header";
import HeroSection from "@/components/careerswitch/HeroSection";
import Footer from "@/components/jobDescription/Footer";
import React from "react";


function CareersPage() {
  return (
    <div className="bg-white">
      <Header />
      <HeroSection />
      <SearchSection />
      <FeaturedOpportunities />
      <AIFeatures />
      <Footer />
    </div>
  );
}

export default CareersPage;
