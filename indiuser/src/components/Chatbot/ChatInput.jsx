"use client";
import React, { useState } from "react";

function ChatInput() {
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      // Here you would typically handle sending the message
      // For example, updating a messages state in the parent component
      console.log("Sending message:", message);
      setMessage("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex gap-2 px-4 py-4 border-t border-solid">
      <div className="flex grow items-center px-4 py-2 bg-gray-100 rounded-full">
        <input
          type="text"
          placeholder="Type your message..."
          className="w-full text-base text-black border-[none] bg-transparent outline-none"
          value={message}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
        <button
          className="p-0 cursor-pointer border-[none] bg-transparent"
          aria-label="Add emoji"
        >
          <EmojiIcon />
        </button>
      </div>
      <button
        className="flex justify-center items-center w-10 h-10 bg-blue-600 rounded-full cursor-pointer border-[none]"
        onClick={handleSendMessage}
        aria-label="Send message"
      >
        <SendIcon />
      </button>
    </div>
  );
}

function EmojiIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="emoji-icon"
      style={{ width: "16px", height: "16px" }}
    >
      <g clipPath="url(#clip0_612_479)">
        <path
          d="M14.5 8C14.5 6.27609 13.8152 4.62279 12.5962 3.40381C11.3772 2.18482 9.72391 1.5 8 1.5C6.27609 1.5 4.62279 2.18482 3.40381 3.40381C2.18482 4.62279 1.5 6.27609 1.5 8C1.5 9.72391 2.18482 11.3772 3.40381 12.5962C4.62279 13.8152 6.27609 14.5 8 14.5C9.72391 14.5 11.3772 13.8152 12.5962 12.5962C13.8152 11.3772 14.5 9.72391 14.5 8ZM0 8C0 5.87827 0.842855 3.84344 2.34315 2.34315C3.84344 0.842855 5.87827 0 8 0C10.1217 0 12.1566 0.842855 13.6569 2.34315C15.1571 3.84344 16 5.87827 16 8C16 10.1217 15.1571 12.1566 13.6569 13.6569C12.1566 15.1571 10.1217 16 8 16C5.87827 16 3.84344 15.1571 2.34315 13.6569C0.842855 12.1566 0 10.1217 0 8ZM5.55 9.94063C6.025 10.4531 6.8375 11 8 11C9.1625 11 9.975 10.4531 10.45 9.94063C10.7312 9.6375 11.2062 9.61563 11.5094 9.89688C11.8125 10.1781 11.8344 10.6531 11.5531 10.9563C10.8656 11.7 9.67813 12.5 8.00313 12.5C6.32813 12.5 5.1375 11.7031 4.45312 10.9563C4.17188 10.6531 4.19062 10.1781 4.49687 9.89688C4.80312 9.61563 5.275 9.63438 5.55625 9.94063H5.55ZM4.5125 6.5C4.5125 6.23478 4.61786 5.98043 4.80539 5.79289C4.99293 5.60536 5.24728 5.5 5.5125 5.5C5.77772 5.5 6.03207 5.60536 6.21961 5.79289C6.40714 5.98043 6.5125 6.23478 6.5125 6.5C6.5125 6.76522 6.40714 7.01957 6.21961 7.20711C6.03207 7.39464 5.77772 7.5 5.5125 7.5C5.24728 7.5 4.99293 7.39464 4.80539 7.20711C4.61786 7.01957 4.5125 6.76522 4.5125 6.5ZM10.5125 5.5C10.7777 5.5 11.0321 5.60536 11.2196 5.79289C11.4071 5.98043 11.5125 6.23478 11.5125 6.5C11.5125 6.76522 11.4071 7.01957 11.2196 7.20711C11.0321 7.39464 10.7777 7.5 10.5125 7.5C10.2473 7.5 9.99293 7.39464 9.80539 7.20711C9.61786 7.01957 9.5125 6.76522 9.5125 6.5C9.5125 6.23478 9.61786 5.98043 9.80539 5.79289C9.99293 5.60536 10.2473 5.5 10.5125 5.5Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_612_479">
          <path d="M0 0H16V16H0V0Z" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

function SendIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="send-icon"
      style={{ width: "16px", height: "16px", fill: "#FFF" }}
    >
      <g clipPath="url(#clip0_612_482)">
        <path
          d="M15.5657 0.175119C15.8813 0.393869 16.047 0.771994 15.9876 1.15012L13.9876 14.1501C13.9407 14.4532 13.7563 14.7189 13.4876 14.8689C13.2188 15.0189 12.897 15.0376 12.6126 14.9189L8.87508 13.3657L6.73446 15.6814C6.45633 15.9845 6.01883 16.0845 5.63446 15.9345C5.25008 15.7845 5.00008 15.4126 5.00008 15.0001V12.3876C5.00008 12.2626 5.04696 12.1439 5.13133 12.0532L10.3688 6.33762C10.5501 6.14074 10.5438 5.83762 10.3563 5.65012C10.1688 5.46262 9.86571 5.45012 9.66883 5.62824L3.31258 11.2751L0.553206 9.89387C0.221956 9.72824 0.00945635 9.39699 8.13452e-05 9.02824C-0.00929366 8.65949 0.184456 8.31574 0.503206 8.13137L14.5032 0.131369C14.8376 -0.0592555 15.2501 -0.0405055 15.5657 0.175119Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_612_482">
          <path d="M0 0H16V16H0V0Z" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default ChatInput;
