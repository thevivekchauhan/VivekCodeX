import React from "react";

function MessageOutput({ text, animate }) {
  return (
    <div className={`message-output ${animate ? 'animate' : ''}`}>
      <span style={{ 
        fontSize: '20px', 
        fontWeight: 'bold', 
        color: '#ffffff', 
        display: 'block', 
        marginBottom: '10px' 
      }}>
        Converted Text:
      </span>
      <div className="output-text">
        {text || "Your text will appear here"}
      </div>
    </div>
  );
}

export default MessageOutput;
