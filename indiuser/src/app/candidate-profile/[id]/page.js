"use client"
import ChatInterface from "@/components/Chatbot/ChatInterface";
import JobCard from "@/components/Dashboard/JobCard";
import NotificationIcon from "@/components/Dashboard/NotificationIcon";
import Sidebar from "@/components/Dashboard/Sidebar";
import StatCard from "@/components/Dashboard/StatCard";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";

function Dashboard() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [recommendedJobs, setRecommendedJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [candidateName, setCandidateName] = useState("");
  const { id } = useParams();

  const jobOpenings = [
    {
      title: "Software Engineer",
      experience: " Experience: 5 Years",
      location: "San Francisco, CA",
      description: "Develop and maintain scalable software solutions.",
    },
    {
      title: "Data Scientist",
      experience: "Experience: 5 Years",
      location: "New York, NY",
      description: "Analyze complex datasets to provide actionable insights.",
    },
    {
      title: "Product Manager",
      experience: "Experience: 5 Years",
      location: "Austin, TX",
      description: "Lead cross-functional teams to deliver high-quality products.",
    },
    {
      title: "UX Designer",
      experience: "Experience: 5 Years",
      location: "Seattle, WA",
      description: "Design intuitive and user-friendly interfaces.",
    },
  ];

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const fetchCandidateData = async () => {
    try {
      debugger
      const response = await fetch(
        `https://prod-00.centralindia.logic.azure.com:443/workflows/4b723b55fdd1429babac8a834ee71339/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=El6-q4PWQnERgjzNyUhQv5R80u_KeXgVnxRq4Vj3jfA&candidate_id=${id}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setCandidateName(data.data[0].name);
    } catch (error) {
      console.error("Error fetching candidate data:", error);
    }
  };

  const fetchRecommendedJobs = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://139.84.135.32:8001/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query:
            "Hi, I am Tharun Ganesh, help me to find the suitable job roles (only the role names and don't include any preambles)",
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      const jobRoles = data.response
        .split("\n")
        .map((role) => role.replace("- ", "").trim())
        .filter((role) => role);

      const jobCardsData = jobRoles.map((title) => ({
        title: title,
      }));

      setRecommendedJobs(jobCardsData);
    } catch (error) {
      console.error("Error fetching recommended jobs:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCandidateData();
    fetchRecommendedJobs();
  }, [id]);

  return (
    <main className="flex w-full bg-gray-50 min-h-screen">
      <Sidebar />
      <section className="flex flex-col flex-1 gap-8 p-8 max-sm:p-4">
        <header className="flex justify-between items-center">
          <h1 className="text-2xl font-bold leading-6 text-black">
            Welcome back, {candidateName}!
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
            <h2 className="text-xl font-bold text-black">Recommended for You</h2>
            <button className="text-sm text-blue-600 cursor-pointer">
              View all
            </button>
          </div>
          <div className="grid grid-cols-3 gap-4 max-md:grid-cols-1">
            {loading ? (
              <p>Loading recommended jobs...</p>
            ) : (
              recommendedJobs.slice(0, 6).map((job, index) => (
                <JobCard key={index} title={job.title} company={job.company} />
              ))
            )}
          </div>
        </section>

        <section className="flex flex-col gap-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-black">Job Openings</h2>
            <button className="text-sm text-blue-600 cursor-pointer">
              View all
            </button>
          </div>
          <div className="grid grid-cols-3 gap-4 max-md:grid-cols-1">
            {jobOpenings.map((job, index) => (
              <JobCard
                key={index}
                title={job.title}
                experience={job.experience}
                location={job.location}
                description={job.description}
              />
            ))}
          </div>
        </section>

        {isChatOpen && <ChatInterface toggleChat={toggleChat} />}
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