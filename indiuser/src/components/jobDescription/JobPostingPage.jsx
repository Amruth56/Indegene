"use client";
import React from "react";
import Header from "./Header";
import JobDetailsCard from "./JobDetailsCard";
import JobInfoSection from "./JobInfoSection";
import JobDescription from "./JobDescription";
import CompanyInfo from "./CompanyInfo";
import AiMatchScore from "./AiMatchScore";
import ApplicationStatus from "./ApplicationStatus";
import ActionButtons from "./ActionButtons";
import Footer from "./Footer";

const JobPostingPage = () => {
  return (
    <main className="bg-gray-50">
      <Header />
      <section className="flex flex-col justify-center self-center px-3.5 py-8 w-full">
        <div className="flex gap-5 max-md:flex-col ">
          {/* Left Column - Job Details */}
          <article className="w-[67%] max-md:ml-0 max-md:w-full">
            <div className="grow p-0.5 w-full max-md:mt-7 max-md:max-w-full">
              <JobDetailsCard />
              <JobInfoSection />
              <JobDescription />
              <CompanyInfo />
            </div>
          </article>

          {/* Right Column - Application */}
          <aside className="ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="grow px-0.5 pt-px pb-72 w-full max-md:pb-24 max-md:mt-7">
              <AiMatchScore />
              <ApplicationStatus />
              <ActionButtons />
            </div>
          </aside>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default JobPostingPage;
