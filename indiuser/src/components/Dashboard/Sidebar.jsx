"use client";
import React from "react";

function Sidebar() {

  const userProfileImage ="https://cdn.builder.io/api/v1/image/assets/TEMP/beb752e084ca61385da4fcf34b0a446ccc4881b6"

  return (
    <nav className="flex flex-col gap-8 py-6 pr-4 pl-4 w-64 bg-white   max-md:w-20 max-sm:hidden">
      <div className="flex gap-3 items-center h-10 max-md:justify-center">
      {userProfileImage ? (
          <img
            src={userProfileImage}
            alt="User profile"
            className="w-[40px] h-[40px] rounded-[9999px]"
          />
        ) : (
          <div className="w-[40px] h-[40px] rounded-[9999px] bg-gray-300 flex items-center justify-center">
            <span className="text-sm font-bold text-black">{userName.charAt(0)}</span>
          </div>
        )}
        <div className="flex flex-col gap-0.5 justify-center max-md:hidden">
          <h2 className="text-sm font-bold leading-4 text-black">Dharani S</h2>
          <p className="text-xs leading-3 text-gray-500">HR Manager</p>
        </div>
      </div>

      <ul className="flex flex-col gap-1">
        <li className="flex gap-3 items-center px-4 py-3 bg-blue-50 rounded-lg">
          <svg
            width="16"
            height="14"
            viewBox="0 0 16 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_1_310)">
              <path
                d="M15.7445 6.98633C15.7445 7.47852 15.3344 7.86406 14.8695 7.86406H13.9945L14.0137 12.2445C14.0137 12.3184 14.0082 12.3922 14 12.466V12.9062C14 13.5105 13.5105 14 12.9062 14H12.4688C12.4387 14 12.4086 14 12.3785 13.9973C12.3402 14 12.302 14 12.2637 14H11.375H10.7188C10.1145 14 9.625 13.5105 9.625 12.9062V12.25V10.5C9.625 10.016 9.23398 9.625 8.75 9.625H7C6.51602 9.625 6.125 10.016 6.125 10.5V12.25V12.9062C6.125 13.5105 5.63555 14 5.03125 14H4.375H3.50273C3.46172 14 3.4207 13.9973 3.37969 13.9945C3.34687 13.9973 3.31406 14 3.28125 14H2.84375C2.23945 14 1.75 13.5105 1.75 12.9062V9.84375C1.75 9.81914 1.75 9.7918 1.75273 9.76719V7.86406H0.875C0.382812 7.86406 0 7.48125 0 6.98633C0 6.74023 0.0820312 6.52148 0.273438 6.33008L7.28437 0.21875C7.47578 0.0273438 7.69453 0 7.88594 0C8.07734 0 8.29609 0.0546875 8.46016 0.191406L15.4437 6.33008C15.6625 6.52148 15.7719 6.74023 15.7445 6.98633Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_310">
                <path d="M0 0H15.75V14H0V0Z" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <span className="text-sm text-blue-600">Dashboard</span>
        </li>

        <li className="flex gap-3 items-center px-4 py-3 rounded-lg">
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_1_247)">
              <path
                d="M5.03125 1.3125H8.96875C9.08906 1.3125 9.1875 1.41094 9.1875 1.53125V2.625H4.8125V1.53125C4.8125 1.41094 4.91094 1.3125 5.03125 1.3125ZM3.5 1.53125V2.625H1.75C0.784766 2.625 0 3.40977 0 4.375V7H5.25H8.75H14V4.375C14 3.40977 13.2152 2.625 12.25 2.625H10.5V1.53125C10.5 0.686328 9.81367 0 8.96875 0H5.03125C4.18633 0 3.5 0.686328 3.5 1.53125ZM14 7.875H8.75V8.75C8.75 9.23398 8.35898 9.625 7.875 9.625H6.125C5.64102 9.625 5.25 9.23398 5.25 8.75V7.875H0V11.375C0 12.3402 0.784766 13.125 1.75 13.125H12.25C13.2152 13.125 14 12.3402 14 11.375V7.875Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_247">
                <path d="M0 0H14V14H0V0Z" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <span className="text-sm text-gray-700">Jobs</span>
        </li>

        <li className="flex gap-3 items-center px-4 py-3 rounded-lg">
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_1_252)">
              <path
                d="M1.75 1.75C1.75 1.26602 1.35898 0.875 0.875 0.875C0.391016 0.875 0 1.26602 0 1.75V10.9375C0 12.1461 0.978906 13.125 2.1875 13.125H13.125C13.609 13.125 14 12.734 14 12.25C14 11.766 13.609 11.375 13.125 11.375H2.1875C1.94687 11.375 1.75 11.1781 1.75 10.9375V1.75ZM12.868 4.11797C13.2098 3.77617 13.2098 3.22109 12.868 2.8793C12.5262 2.5375 11.9711 2.5375 11.6293 2.8793L8.75 5.76133L7.18047 4.1918C6.83867 3.85 6.28359 3.85 5.9418 4.1918L2.8793 7.2543C2.5375 7.59609 2.5375 8.15117 2.8793 8.49297C3.22109 8.83477 3.77617 8.83477 4.11797 8.49297L6.5625 6.05117L8.13203 7.6207C8.47383 7.9625 9.02891 7.9625 9.3707 7.6207L12.8707 4.1207L12.868 4.11797Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_252">
                <path d="M0 0H14V14H0V0Z" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <span className="text-sm text-gray-700">Career Insights</span>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;
