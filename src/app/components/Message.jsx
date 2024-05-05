export default function Message({ message }) {
  const { id, name, text } = message;

  // const alignmentClass = isCurrentUser ? "chat-end" : "chat-start";
  return (
    <div className=" container">
      <div className={`chat chat-start`}>
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            />
          </div>
        </div>
        <div className="container overflow-hidden">
          <div className="chat-header">{name}</div>
          <div className="chat-bubble">{text}</div>
          <div className="chat-footer opacity-50">Delivered</div>
        </div>
      </div>
    </div>
  );
}
