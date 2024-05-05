// SendMessage.jsx
"use client";
import React, { useState } from "react";

export default function SendMessage({ onSendMessage }) {
  const [inputMessage, setInputMessage] = useState(""); // State to hold the input message

  // Function to handle sending a message
  const sendMessage = () => {
    if (inputMessage.trim() !== "") {
      onSendMessage(inputMessage); // Call the parent function with the message
      setInputMessage(""); // Clear the input field
    }
  };

  return (
    <div className="bg-gray-200 fixed bottom-0 w-full py-10 shadow-lg">
      <div className="px-2 containerWrap flex">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          className="input w-full focus:outline-none bg-gray-100 rounded-r-none"
          placeholder="Type your message..."
        />
        <button
          className="w-auto bg-gray-500 text-white rounded-r-lg px-6"
          onClick={sendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
}
