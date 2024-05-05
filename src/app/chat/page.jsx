// ChatApp.jsx (Parent component)

"use client";
import React, { useState } from "react";
import messagesData from "../util/data";
import Chatbox from "../components/chat-box";
import SendMessage from "../components/send-message";
// import Navbar from "../components/nav-bar";
import Navbar from "../components/nav-bar";

export default function ChatApp() {
  const [messages, setMessages] = useState(messagesData); // State to hold the array of messages

  // Function to add a new message
  const addMessage = (text) => {
    const newMessage = {
      id: messages.length + 1,
      text,
      name: "Fafi", // Assuming the sender's name is fixed for the current user
    };
    setMessages([...messages, newMessage]); // Add the new message to the array of messages
  };

  return (
    <div>
      <Chatbox messages={messages} />

      <SendMessage onSendMessage={addMessage} />
    </div>
  );
}
