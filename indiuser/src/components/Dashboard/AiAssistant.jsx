"use client";
import React from "react";

function AiAssistant() {
  return (
    <aside className="flex-1 p-6 bg-white rounded-xl shadow-sm min-w-[300px]">
      <h2 className="mb-6 text-xl font-bold text-black">AI Assistant</h2>
      <div className="p-4 bg-gray-50 rounded-lg">
        <p className="mb-4 text-sm text-gray-600">
          Ask me anything about job openings or
          <br />
          career paths!
        </p>
        <div className="relative">
          <input
            type="text"
            placeholder="Type your question..."
            className="px-4 w-full text-base text-gray-400 rounded-lg border border h-[42px]"
            aria-label="Ask AI Assistant"
          />
          <button
            className="absolute right-4 top-[13px]"
            aria-label="Send message"
          >
            <svg
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1_372)">
                <path
                  d="M16.55 0.174997C16.8656 0.393747 17.0312 0.771872 16.9718 1.15L14.9718 14.15C14.925 14.4531 14.7406 14.7187 14.4718 14.8687C14.2031 15.0187 13.8812 15.0375 13.5968 14.9187L9.85933 13.3656L7.71871 15.6812C7.44058 15.9844 7.00308 16.0844 6.61871 15.9344C6.23433 15.7844 5.98433 15.4125 5.98433 15V12.3875C5.98433 12.2625 6.03121 12.1437 6.11558 12.0531L11.3531 6.3375C11.5343 6.14062 11.5281 5.8375 11.3406 5.65C11.1531 5.4625 10.85 5.45 10.6531 5.62812L4.29683 11.275L1.53746 9.89375C1.20621 9.72812 0.993709 9.39687 0.984334 9.02812C0.974959 8.65937 1.16871 8.31562 1.48746 8.13125L15.4875 0.131247C15.8218 -0.0593776 16.2343 -0.0406276 16.55 0.174997Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_372">
                  <path d="M0.984375 0H16.9844V16H0.984375V0Z" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
      </div>
    </aside>
  );
}

export default AiAssistant;
