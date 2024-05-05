// Chatbox.jsx
import React from "react";
import Message from "./Message";

export default function Chatbox({ messages }) {
  return (
    <div className="pb-44 pt-20 containerWrap bg-slate-500 container">
      {messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
    </div>
  );
}
