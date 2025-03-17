import React from "react";

function EmojiOutput({ emojis, animate }) {
  return (
    <div className={`emoji-output ${animate ? 'animate' : ''}`}>
      <span style={{ 
        fontSize: '20px', 
        fontWeight: 'bold', 
        color: '#ffffff', 
        display: 'block', 
        marginBottom: '10px' 
      }}>
        Converted Emojis:
      </span>
      <div className="output-text">
        {emojis || "Your emojis will appear here"}
      </div>
    </div>
  );
}

export default EmojiOutput;
