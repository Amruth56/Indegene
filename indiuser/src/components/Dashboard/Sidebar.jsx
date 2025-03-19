"use client";
import React from "react";

function Sidebar() {
  return (
    <nav className="flex flex-col gap-8 py-6 pr-4 pl-4 w-64 h-full bg-white border border max-md:w-20 max-sm:hidden">
      <div className="flex gap-3 items-center h-10 max-md:justify-center">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/beb752e084ca61385da4fcf34b0a446ccc4881b6"
          alt="User profile"
          className="w-[40px] h-[40px] rounded-[9999px]"
        />
        <div className="flex flex-col gap-0.5 justify-center max-md:hidden">
          <h2 className="text-sm font-bold leading-4 text-black">
            Sarah Johnson
          </h2>
          <p className="text-xs leading-3 text-gray-500">UI/UX Designer</p>
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

        <li className="flex gap-3 items-center px-4 py-3 rounded-lg">
          <svg
            width="13"
            height="14"
            viewBox="0 0 13 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_1_257)">
              <path
                d="M6.125 0C5.64101 0 5.25 0.391016 5.25 0.875V1.4C3.25391 1.80469 1.75 3.57109 1.75 5.6875V6.20156C1.75 7.48672 1.27695 8.72812 0.423827 9.69062L0.221484 9.91758C-0.00820391 10.1746 -0.0628914 10.5438 0.0765617 10.8582C0.216015 11.1727 0.530468 11.375 0.874999 11.375H11.375C11.7195 11.375 12.0312 11.1727 12.1734 10.8582C12.3156 10.5438 12.2582 10.1746 12.0285 9.91758L11.8262 9.69062C10.973 8.72812 10.5 7.48945 10.5 6.20156V5.6875C10.5 3.57109 8.99609 1.80469 7 1.4V0.875C7 0.391016 6.60898 0 6.125 0ZM7.36367 13.4887C7.6918 13.1605 7.875 12.7148 7.875 12.25H6.125H4.375C4.375 12.7148 4.5582 13.1605 4.88633 13.4887C5.21445 13.8168 5.66016 14 6.125 14C6.58984 14 7.03555 13.8168 7.36367 13.4887Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_257">
                <path d="M0 0H12.25V14H0V0Z" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <span className="text-sm text-gray-700">Alerts</span>
        </li>

        <li className="flex gap-3 items-center px-4 py-3 rounded-lg">
          <svg
            width="18"
            height="14"
            viewBox="0 0 18 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_1_262)">
              <path
                d="M8.75 0C9.23398 0 9.625 0.391016 9.625 0.875V2.625H12.9062C13.9945 2.625 14.875 3.50547 14.875 4.59375V12.0312C14.875 13.1195 13.9945 14 12.9062 14H4.59375C3.50547 14 2.625 13.1195 2.625 12.0312V4.59375C2.625 3.50547 3.50547 2.625 4.59375 2.625H7.875V0.875C7.875 0.391016 8.26602 0 8.75 0ZM5.6875 10.5C5.44687 10.5 5.25 10.6969 5.25 10.9375C5.25 11.1781 5.44687 11.375 5.6875 11.375H6.5625C6.80313 11.375 7 11.1781 7 10.9375C7 10.6969 6.80313 10.5 6.5625 10.5H5.6875ZM8.3125 10.5C8.07187 10.5 7.875 10.6969 7.875 10.9375C7.875 11.1781 8.07187 11.375 8.3125 11.375H9.1875C9.42813 11.375 9.625 11.1781 9.625 10.9375C9.625 10.6969 9.42813 10.5 9.1875 10.5H8.3125ZM10.9375 10.5C10.6969 10.5 10.5 10.6969 10.5 10.9375C10.5 11.1781 10.6969 11.375 10.9375 11.375H11.8125C12.0531 11.375 12.25 11.1781 12.25 10.9375C12.25 10.6969 12.0531 10.5 11.8125 10.5H10.9375ZM7.21875 7C7.21875 6.70992 7.10352 6.43172 6.8984 6.2266C6.69328 6.02148 6.41508 5.90625 6.125 5.90625C5.83492 5.90625 5.55672 6.02148 5.3516 6.2266C5.14648 6.43172 5.03125 6.70992 5.03125 7C5.03125 7.29008 5.14648 7.56828 5.3516 7.7734C5.55672 7.97852 5.83492 8.09375 6.125 8.09375C6.41508 8.09375 6.69328 7.97852 6.8984 7.7734C7.10352 7.56828 7.21875 7.29008 7.21875 7ZM11.375 8.09375C11.6651 8.09375 11.9433 7.97852 12.1484 7.7734C12.3535 7.56828 12.4688 7.29008 12.4688 7C12.4688 6.70992 12.3535 6.43172 12.1484 6.2266C11.9433 6.02148 11.6651 5.90625 11.375 5.90625C11.0849 5.90625 10.8067 6.02148 10.6016 6.2266C10.3965 6.43172 10.2812 6.70992 10.2812 7C10.2812 7.29008 10.3965 7.56828 10.6016 7.7734C10.8067 7.97852 11.0849 8.09375 11.375 8.09375ZM1.3125 6.125H1.75V11.375H1.3125C0.587891 11.375 0 10.7871 0 10.0625V7.4375C0 6.71289 0.587891 6.125 1.3125 6.125ZM16.1875 6.125C16.9121 6.125 17.5 6.71289 17.5 7.4375V10.0625C17.5 10.7871 16.9121 11.375 16.1875 11.375H15.75V6.125H16.1875Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_262">
                <path d="M0 0H17.5V14H0V0Z" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <span className="text-sm text-gray-700">AI Assistant</span>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;
