import React, { useState, useRef, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MessageInput from "./components/MessageInput";
import EmojiOutput from "./components/EmojiOutput";
import EmojiInput from "./components/EmojiInput";
import MessageOutput from "./components/MessageOutput";
import About from "./components/About";
import "./components/MessageInput.css"; 
import "./App.css";
import "./components/Loader.css";

function App() {
  const [emojis, setEmojis] = useState("");
  const [text, setText] = useState("");
  const [copiedContent, setCopiedContent] = useState("");
  const textToEmojiRef = useRef(null);
  const [emojiAnimate, setEmojiAnimate] = useState(false);
  const [textAnimate, setTextAnimate] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem('currentUser')
  );
  const [showRegister, setShowRegister] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  const handleEmojiConversion = (convertedEmojis) => {
    setEmojis(convertedEmojis);
    setEmojiAnimate(true);
    setTimeout(() => setEmojiAnimate(false), 500);
  };

  const handleTextConversion = (convertedText) => {
    setText(convertedText);
    setTextAnimate(true);
    setTimeout(() => setTextAnimate(false), 500);
  };

  const scrollToTextEmoji = () => {
    textToEmojiRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  const handleCopy = async (content) => {
    try {
      await navigator.clipboard.writeText(content);
      setCopiedContent(content);
      alert("Copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy:", err);
      alert("Failed to copy");
    }
  };

  const handlePaste = async (setState) => {
    try {
      const pastedText = await navigator.clipboard.readText();
      setState(pastedText);
    } catch (err) {
      console.error("Failed to paste:", err);
      alert("Failed to paste");
    }
  };

  const handleLogin = (user) => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    setIsAuthenticated(false);
    setShowRegister(false);
  };

  if (isLoading) {
    return (
      <div className="loader-container">
        <div className="wheel-and-hamster">
          <div className="wheel"></div>
          <div className="hamster">
            <div className="hamster__body">
              <div className="hamster__head">
                <div className="hamster__ear"></div>
                <div className="hamster__eye"></div>
                <div className="hamster__nose"></div>
              </div>
              <div className="hamster__limb hamster__limb--fr"></div>
              <div className="hamster__limb hamster__limb--fl"></div>
              <div className="hamster__limb hamster__limb--br"></div>
              <div className="hamster__limb hamster__limb--bl"></div>
              <div className="hamster__tail"></div>
            </div>
          </div>
          <div className="spoke"></div>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div className="button-container">
            <Link to="/" className="ui-btn">
              <span>VivekCodeX</span>
            </Link>
            <Link to="/about" className="ui-btn">
              <span>About</span>
            </Link>
          </div>
          <div className="visitor-counter">
              <p style={{ margin: 0, textAlign: 'center' }}>
                {/* Visitors */}
                <img 
                  src="https://profile-counter.glitch.me/vivekcodex/count.svg" 
                  alt="Visitor Count"
                />
              </p>
            </div>
        </header>

        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={
            <main className="converter-container">
              <div className="converter-section" ref={textToEmojiRef}>
                <h2 style={{ color: '#ffffff', fontWeight: 'bold', fontSize: '24px' }}>Text to Emoji</h2>
                <MessageInput onEmojiConversion={handleEmojiConversion} />
                <EmojiOutput emojis={emojis} animate={emojiAnimate} />
              </div>
              <div className="converter-section">
                <h2 style={{ color: '#ffffff', fontWeight: 'bold', fontSize: '24px' }}>Emoji to Text</h2>
                <EmojiInput onTextConversion={handleTextConversion} text={text} />
                <MessageOutput text={text} animate={textAnimate} />
              </div>
            </main>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
