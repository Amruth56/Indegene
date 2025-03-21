"use client";

import React from "react";
import ChatHeader from "./ChatHeader";
import ChatMessage from "./ChatMessage";
import QuickActionButton from "./QuickActionButton";
import ChatInput from "./ChatInput";

export default function ChatInterface({ toggleChat }) {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
        rel="stylesheet"
      ></link>

      <div className="fixed bottom-0 right-0 p-6 bg-white rounded-2xl h-[600px] shadow-[0_25px_50px_rgba(0,0,0,0.25)] w-[400px] max-sm:w-full max-sm:h-screen flex flex-col">
        {/* Chat Interface */}
        <ChatHeader toggleChat={toggleChat} />
        <MessageArea />
        <QuickActionsArea />
        <ChatInput />
      </div>
    </>
  );
}

function MessageArea() {
  return (
    <div className="flex overflow-y-auto flex-col grow gap-4 p-4">
      <ChatMessage
        isAssistant={true}
        message="Hello! I'm your HR Assistant. How can I help you today?"
      />
      <ChatMessage
        isAssistant={false}
        message="What is the status of the Software Engineer role?"
      />
      <ChatMessage
        isAssistant={true}
        message="The Software Engineer position is currently open. 5 candidates have been shortlisted, and interviews are scheduled for next week."
        withCard={true}
      />
    </div>
  );
}

function QuickActionsArea() {
  return (
    <div className="flex overflow-x-auto gap-2 px-3 py-3.5 border-t border-solid max-sm:overflow-x-auto max-sm:flex-nowrap max-sm:px-3 max-sm:py-3.5">
      <QuickActionButton icon="calendar" text="Schedule Interview" />
      <QuickActionButton icon="user" text="Show Candidate" />
      <QuickActionButton icon="profile" text="View Profile" />
    </div>
  );
}