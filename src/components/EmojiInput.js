import React, { useState } from "react";
import { emojiToText } from "../utils/emojiConverter";

function EmojiInput({ onTextConversion, text }) {
  const [convertedText, setConvertedText] = useState("");

  const handleChange = (e) => {
    onTextConversion(e.target.value);
  };

  const handleConvert = () => {
    const converted = emojiToText(text);
    setConvertedText(converted);
    onTextConversion(converted);
  };

  const handleCopy = async () => {
    try {
      // Copy the converted text if available, otherwise copy the input text
      const textToCopy = convertedText || text;
      await navigator.clipboard.writeText(textToCopy);
      alert("Text copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  const handlePaste = async () => {
    try {
      const clipboardText = await navigator.clipboard.readText();
      onTextConversion(clipboardText); // Update the parent component's text
    } catch (err) {
      console.error("Failed to paste text: ", err);
    }
  };

  return (
    <div>
      <textarea
        className="emoji-input"
        placeholder="Paste your emojis here..."
        onChange={handleChange}
        value={text}
        rows={5}
        cols={50}
      />
      <div className="button-group">
        <button className="action-button" onClick={handleConvert}>
          Convert
        </button>
        <button className="action-button" onClick={handleCopy}>Copy</button>
        <button className="action-button" onClick={handlePaste}>Paste</button>
      </div>
    </div>
  );
}

export default EmojiInput;
