"use client";
import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import StatCard from "./StatCard";
import JobCard from "./JobCard";
import CareerOpportunityCard from "./CareerOpportunityCard";
import NotificationIcon from "./NotificationIcon";
import ChatInterface from "../Chatbot/ChatInterface";

function Dashboard() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [recommendedJobs, setRecommendedJobs] = useState([]); // State to store recommended jobs
  const [loading, setLoading] = useState(false); // State to manage loading state

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const fetchRecommendedJobs = async () => {
    try {
      debugger
      console.log("Fetching jobs...");
      setLoading(true);
      const response = await fetch("http://139.84.135.32:8001/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: "Hi, I am Tharun Ganesh, help me to find the suitable job roles (only the role names and don't include any preambles)",
        }),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log("API Response:", data); // Log the response to verify it's valid
  
      // Parse the response to extract job role titles
      const jobRoles = data.response
        .split("\n") // Split by newline
        .map((role) => role.replace("- ", "").trim()) // Remove "- " and trim whitespace
        .filter((role) => role); // Remove any empty strings
  
      console.log("jobroles", jobRoles); // Log the job roles after parsing
  
      // Transform job roles into JobCard-compatible data
      const jobCardsData = jobRoles.map((title) => ({
        title: title,
      }));
  
      setRecommendedJobs(jobCardsData); // Update state with transformed data
    } catch (error) {
      console.error("Error fetching recommended jobs:", error);
    } finally {
      setLoading(false);
    }
  };
  
  // Fetch recommended jobs from the API
  useEffect(() => {
    debugger
    fetchRecommendedJobs();
  }, []); // Empty dependency array ensures this effect runs once on mount
   // Fetch data when the component mounts

  return (
    <main className="flex w-full bg-gray-50 min-h-screen">
      <Sidebar />
      <section className="flex flex-col flex-1 gap-8 p-8 max-sm:p-4">
        <header className="flex justify-between items-center">
          <h1 className="text-2xl font-bold leading-6 text-black">
            {/* Welcome back, Dharani! */}
          </h1>
          <div className="flex gap-4 items-center">
            <button className="flex gap-2 items-center px-4 py-2.5 text-white bg-blue-600 rounded-lg">
              <svg
                width="14"
                height="16"
                viewBox="0 0 15 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[14px] h-[16px]"
              >
                <g clipPath="url(#clip0_1_315)">
                  <path
                    d="M8.125 2.5C8.125 1.94687 7.67813 1.5 7.125 1.5C6.57187 1.5 6.125 1.94687 6.125 2.5V7H1.625C1.07187 7 0.625 7.44687 0.625 8C0.625 8.55313 1.07187 9 1.625 9H6.125V13.5C6.125 14.0531 6.57187 14.5 7.125 14.5C7.67813 14.5 8.125 14.0531 8.125 13.5V9H12.625C13.1781 9 13.625 8.55313 13.625 8C13.625 7.44687 13.1781 7 12.625 7H8.125V2.5Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_315">
                    <path d="M0.125 0H14.125V16H0.125V0Z" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <span>Quick Apply</span>
            </button>
            <NotificationIcon count={2} />
          </div>
        </header>

        <section className="flex gap-4 max-md:flex-wrap">
          <StatCard
            title="Job Matches"
            value="24"
            description="Based on your profile"
          />
          <StatCard
            title="Applications"
            value="5"
            description="Active applications"
          />
          <StatCard
            title="Saved Jobs"
            value="12"
            description="Jobs you've bookmarked"
          />

        </section>

        <section className="flex flex-col gap-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-black">
              Recommended for You
            </h2>
            <button className="text-sm text-blue-600 cursor-pointer">
              View all
            </button>
          </div>
          <div className="flex gap-4 max-md:flex-wrap">
            {loading ? (
              <p>Loading recommended jobs...</p>
            ) : (
              recommendedJobs.slice(0, 3).map((job, index) => (
                <JobCard
                  key={index}
                  title={job.title}
                  company={job.company}
                />
              ))
            )}
          </div>
        </section>
        <section className="flex gap-4 max-md:flex-wrap">
          <article className="p-6 bg-white rounded-xl shadow-sm flex-[2] min-w-[300px]">
            <h2 className="mb-6 text-xl font-bold text-black">
              Career Growth Opportunities
            </h2>
            <div className="flex flex-col gap-4">
              <CareerOpportunityCard
                icon={
                  <svg
                    width="25"
                    height="20"
                    viewBox="0 0 25 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.5 3.75C2.5 2.37109 3.62109 1.25 5 1.25H20C21.3789 1.25 22.5 2.37109 22.5 3.75V13.75H20V3.75H5V13.75H2.5V3.75ZM0 15.75C0 15.3359 0.335938 15 0.75 15H24.25C24.6641 15 25 15.3359 25 15.75C25 17.4063 23.6563 18.75 22 18.75H3C1.34375 18.75 0 17.4063 0 15.75ZM10.9766 8.16406L9.76562 9.375L10.9766 10.5859C11.3437 10.9531 11.3437 11.5469 10.9766 11.9102C10.6094 12.2734 10.0156 12.2773 9.65234 11.9102L7.77734 10.0352C7.41016 9.66797 7.41016 9.07422 7.77734 8.71094L9.65234 6.83594C10.0195 6.46875 10.6133 6.46875 10.9766 6.83594C11.3398 7.20312 11.3437 7.79687 10.9766 8.16016V8.16406ZM15.3516 6.83594L17.2266 8.71094C17.5937 9.07812 17.5937 9.67187 17.2266 10.0352L15.3516 11.9102C14.9844 12.2773 14.3906 12.2773 14.0273 11.9102C13.6641 11.543 13.6602 10.9492 14.0273 10.5859L15.2383 9.375L14.0273 8.16406C13.6602 7.79688 13.6602 7.20313 14.0273 6.83984C14.3945 6.47656 14.9883 6.47266 15.3516 6.83984V6.83594Z"
                      fill="black"
                    />
                  </svg>
                }
                title="UI/UX to Product Management"
                description="Recommended transition path"
                actionText="Learn more"
              />
              <CareerOpportunityCard
                icon={
                  <svg
                    width="25"
                    height="20"
                    viewBox="0 0 25 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_1_364)">
                      <path
                        d="M5.625 0C6.4538 0 7.24866 0.32924 7.83471 0.915291C8.42076 1.50134 8.75 2.2962 8.75 3.125C8.75 3.9538 8.42076 4.74866 7.83471 5.33471C7.24866 5.92076 6.4538 6.25 5.625 6.25C4.7962 6.25 4.00134 5.92076 3.41529 5.33471C2.82924 4.74866 2.5 3.9538 2.5 3.125C2.5 2.2962 2.82924 1.50134 3.41529 0.915291C4.00134 0.32924 4.7962 0 5.625 0ZM20 0C20.8288 0 21.6237 0.32924 22.2097 0.915291C22.7958 1.50134 23.125 2.2962 23.125 3.125C23.125 3.9538 22.7958 4.74866 22.2097 5.33471C21.6237 5.92076 20.8288 6.25 20 6.25C19.1712 6.25 18.3763 5.92076 17.7903 5.33471C17.2042 4.74866 16.875 3.9538 16.875 3.125C16.875 2.2962 17.2042 1.50134 17.7903 0.915291C18.3763 0.32924 19.1712 0 20 0ZM0 11.668C0 9.36719 1.86719 7.5 4.16797 7.5H5.83594C6.45703 7.5 7.04687 7.63672 7.57812 7.87891C7.52734 8.16016 7.50391 8.45313 7.50391 8.75C7.50391 10.2422 8.16016 11.582 9.19531 12.5C9.1875 12.5 9.17969 12.5 9.16797 12.5H0.832031C0.375 12.5 0 12.125 0 11.668ZM15.832 12.5C15.8242 12.5 15.8164 12.5 15.8047 12.5C16.8438 11.582 17.4961 10.2422 17.4961 8.75C17.4961 8.45313 17.4688 8.16406 17.4219 7.87891C17.9531 7.63281 18.543 7.5 19.1641 7.5H20.832C23.1328 7.5 25 9.36719 25 11.668C25 12.1289 24.625 12.5 24.168 12.5H15.832ZM8.75 8.75C8.75 7.75544 9.14509 6.80161 9.84835 6.09835C10.5516 5.39509 11.5054 5 12.5 5C13.4946 5 14.4484 5.39509 15.1517 6.09835C15.8549 6.80161 16.25 7.75544 16.25 8.75C16.25 9.74456 15.8549 10.6984 15.1517 11.4017C14.4484 12.1049 13.4946 12.5 12.5 12.5C11.5054 12.5 10.5516 12.1049 9.84835 11.4017C9.14509 10.6984 8.75 9.74456 8.75 8.75ZM5 18.957C5 16.082 7.33203 13.75 10.207 13.75H14.793C17.668 13.75 20 16.082 20 18.957C20 19.5312 19.5352 20 18.957 20H6.04297C5.46875 20 5 19.5352 5 18.957Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_364">
                        <path d="M0 0H25V20H0V0Z" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                }
                title="Design Leadership"
                description="Management track"
                actionText="Learn more"
              />
            </div>
          </article>

          {/* <AiAssistant /> */}
          {isChatOpen && <ChatInterface toggleChat={toggleChat} />}
        </section>
      </section>
      {!isChatOpen && (
        <button
          className="cursor-pointer fixed bottom-4 right-4 p-3 bg-blue-500 text-white rounded-full shadow-lg"
          onClick={toggleChat}
        >
          Ask Bot
        </button>
      )}
    </main>
  );
}

export default Dashboard;