"use client";
import React from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import CareerTransitionsSection from "./CareerTransitionsSection";
import SkillGapAnalysis from "./SkillGapAnalysis";
import LearningPathsSection from "./LearningPathsSection";
import MentorsSection from "./MentorsSection";

function CareerGrowthDashboard() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
        rel="stylesheet"
      />
      <main className="box-border p-0 mx-auto my-0 w-full max-w-[1440px] font-[Poppins]">
        <Header />
        <HeroSection />
        <CareerTransitionsSection />
        <SkillGapAnalysis />
        <LearningPathsSection />
        <MentorsSection />
      </main>
    </>
  );
}

export default CareerGrowthDashboard;
