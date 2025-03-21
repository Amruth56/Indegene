import React from "react";

function ChatHeader({ toggleChat }) {
  return (
    <header className="flex justify-between items-center p-4 bg-blue-600 h-[76px] rounded-[16px_16px_0_0]">
      <div className="flex gap-3 items-center">
        <div className="flex justify-center items-center px-2 py-2.5 w-10 h-10 bg-white rounded-full">
          <AssistantIcon />
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="text-base font-bold text-white">HR Assistant</h1>
          <p className="text-sm text-blue-100">Online</p>
        </div>
      </div>
      <button
        className="p-0 cursor-pointer border-[none]"
        aria-label="Minimize"
        onClick={toggleChat}
      >
        <MinimizeIcon />
      </button>
    </header>
  );
}

function AssistantIcon() {
  return (
    <svg
      width="26"
      height="20"
      viewBox="0 0 26 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="avatar-icon"
      style={{ width: "25px", height: "20px" }}
    >
      <g clipPath="url(#clip0_612_448)">
        <path
          d="M13 0C13.6914 0 14.25 0.558594 14.25 1.25V3.75H18.9375C20.4922 3.75 21.75 5.00781 21.75 6.5625V17.1875C21.75 18.7422 20.4922 20 18.9375 20H7.0625C5.50781 20 4.25 18.7422 4.25 17.1875V6.5625C4.25 5.00781 5.50781 3.75 7.0625 3.75H11.75V1.25C11.75 0.558594 12.3086 0 13 0ZM8.625 15C8.28125 15 8 15.2812 8 15.625C8 15.9688 8.28125 16.25 8.625 16.25H9.875C10.2188 16.25 10.5 15.9688 10.5 15.625C10.5 15.2812 10.2188 15 9.875 15H8.625ZM12.375 15C12.0312 15 11.75 15.2812 11.75 15.625C11.75 15.9688 12.0312 16.25 12.375 16.25H13.625C13.9688 16.25 14.25 15.9688 14.25 15.625C14.25 15.2812 13.9688 15 13.625 15H12.375ZM16.125 15C15.7812 15 15.5 15.2812 15.5 15.625C15.5 15.9688 15.7812 16.25 16.125 16.25H17.375C17.7188 16.25 18 15.9688 18 15.625C18 15.2812 17.7188 15 17.375 15H16.125ZM10.8125 10C10.8125 9.5856 10.6479 9.18817 10.3549 8.89515C10.0618 8.60212 9.6644 8.4375 9.25 8.4375C8.8356 8.4375 8.43817 8.60212 8.14515 8.89515C7.85212 9.18817 7.6875 9.5856 7.6875 10C7.6875 10.4144 7.85212 10.8118 8.14515 11.1049C8.43817 11.3979 8.8356 11.5625 9.25 11.5625C9.6644 11.5625 10.0618 11.3979 10.3549 11.1049C10.6479 10.8118 10.8125 10.4144 10.8125 10ZM16.75 11.5625C17.1644 11.5625 17.5618 11.3979 17.8549 11.1049C18.1479 10.8118 18.3125 10.4144 18.3125 10C18.3125 9.5856 18.1479 9.18817 17.8549 8.89515C17.5618 8.60212 17.1644 8.4375 16.75 8.4375C16.3356 8.4375 15.9382 8.60212 15.6451 8.89515C15.3521 9.18817 15.1875 9.5856 15.1875 10C15.1875 10.4144 15.3521 10.8118 15.6451 11.1049C15.9382 11.3979 16.3356 11.5625 16.75 11.5625ZM2.375 8.75H3V16.25H2.375C1.33984 16.25 0.5 15.4102 0.5 14.375V10.625C0.5 9.58984 1.33984 8.75 2.375 8.75ZM23.625 8.75C24.6602 8.75 25.5 9.58984 25.5 10.625V14.375C25.5 15.4102 24.6602 16.25 23.625 16.25H23V8.75H23.625Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_612_448">
          <path d="M0.5 0H25.5V20H0.5V0Z" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

function MinimizeIcon() {
  return (
    <svg
      width="14"
      height="16"
      viewBox="0 0 14 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="minimize-icon"
      style={{ width: "14px", height: "16px" }}
    >
      <path d="M0 0H14V16H0V0Z" stroke="#E5E7EB" />
      <path
        d="M13.5 8C13.5 8.55313 13.0531 9 12.5 9H1.5C0.946875 9 0.5 8.55313 0.5 8C0.5 7.44687 0.946875 7 1.5 7H12.5C13.0531 7 13.5 7.44687 13.5 8Z"
        fill="black"
      />
    </svg>
  );
}

export default ChatHeader;