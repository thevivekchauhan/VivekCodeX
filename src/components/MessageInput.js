import React, { useState } from "react";
import { textToEmoji } from "../utils/emojiConverter";

const MessageInput = ({ onEmojiConversion }) => {
  const [text, setText] = useState("");
  const [convertedText, setConvertedText] = useState("");
  
  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleConvert = () => {
    const convertedMessage = textToEmoji(text);
    setConvertedText(convertedMessage);
    onEmojiConversion(convertedMessage);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(convertedText);
      alert("Emojis copied by Vivek");
    } catch (err) {
      console.error("Failed to copy emojis: ", err);
    }
  };

  const handlePaste = async () => {
    try {
      const clipboardText = await navigator.clipboard.readText();
      setText(clipboardText);
    } catch (err) {
      console.error("Failed to paste text: ", err);
    }
  };

  return (
    <div className="message-input">
      <textarea
        value={text}
        onChange={handleInputChange}
        placeholder="Enter your secret message"
        rows={5}
        cols={50}
      />
      <div className="button-group">
        <button className="action-button" onClick={handleConvert}>Convert</button>
        <button className="action-button" onClick={handleCopy}>Copy</button>
        <button className="action-button" onClick={handlePaste}>Paste</button>
      </div>
    </div>
  );
};

export default MessageInput;
