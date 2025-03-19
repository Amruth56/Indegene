import React from "react";
import CandidateCard from "./CandidateCard";

function ChatMessage({ isAssistant, message, withCard = false }) {
  if (isAssistant) {
    return (
      <div className="flex gap-2 max-w-full">
        <div className="flex justify-center items-center px-1.5 py-2 w-8 h-8 bg-blue-100 rounded-full">
          <AssistantIcon />
        </div>
        <div>
          <p className="p-3 text-base text-gray-800 bg-gray-100 rounded-none max-w-[294px]">
            {message}
          </p>
          {withCard && <CandidateCard />}
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex gap-2 max-w-full justify-end">
        <p className="p-3 text-base text-white bg-blue-600 rounded-lg max-w-[294px]">
          {message}
        </p>
      </div>
    );
  }
}

function AssistantIcon() {
  return (
    <svg
      width="20"
      height="16"
      viewBox="0 0 20 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="assistant-icon"
      style={{ width: "20px", height: "16px" }}
    >
      <g clipPath="url(#clip0_612_451)">
        <path
          d="M10 0C10.5531 0 11 0.446875 11 1V3H14.75C15.9937 3 17 4.00625 17 5.25V13.75C17 14.9937 15.9937 16 14.75 16H5.25C4.00625 16 3 14.9937 3 13.75V5.25C3 4.00625 4.00625 3 5.25 3H9V1C9 0.446875 9.44687 0 10 0ZM6.5 12C6.225 12 6 12.225 6 12.5C6 12.775 6.225 13 6.5 13H7.5C7.775 13 8 12.775 8 12.5C8 12.225 7.775 12 7.5 12H6.5ZM9.5 12C9.225 12 9 12.225 9 12.5C9 12.775 9.225 13 9.5 13H10.5C10.775 13 11 12.775 11 12.5C11 12.225 10.775 12 10.5 12H9.5ZM12.5 12C12.225 12 12 12.225 12 12.5C12 12.775 12.225 13 12.5 13H13.5C13.775 13 14 12.775 14 12.5C14 12.225 13.775 12 13.5 12H12.5ZM8.25 8C8.25 7.66848 8.1183 7.35054 7.88388 7.11612C7.64946 6.8817 7.33152 6.75 7 6.75C6.66848 6.75 6.35054 6.8817 6.11612 7.11612C5.8817 7.35054 5.75 7.66848 5.75 8C5.75 8.33152 5.8817 8.64946 6.11612 8.88388C6.35054 9.1183 6.66848 9.25 7 9.25C7.33152 9.25 7.64946 9.1183 7.88388 8.88388C8.1183 8.64946 8.25 8.33152 8.25 8ZM13 9.25C13.3315 9.25 13.6495 9.1183 13.8839 8.88388C14.1183 8.64946 14.25 8.33152 14.25 8C14.25 7.66848 14.1183 7.35054 13.8839 7.11612C13.6495 6.8817 13.3315 6.75 13 6.75C12.6685 6.75 12.3505 6.8817 12.1161 7.11612C11.8817 7.35054 11.75 7.66848 11.75 8C11.75 8.33152 11.8817 8.64946 12.1161 8.88388C12.3505 9.1183 12.6685 9.25 13 9.25ZM1.5 7H2V13H1.5C0.671875 13 0 12.3281 0 11.5V8.5C0 7.67188 0.671875 7 1.5 7ZM18.5 7C19.3281 7 20 7.67188 20 8.5V11.5C20 12.3281 19.3281 13 18.5 13H18V7H18.5Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_612_451">
          <path d="M0 0H20V16H0V0Z" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default ChatMessage;
