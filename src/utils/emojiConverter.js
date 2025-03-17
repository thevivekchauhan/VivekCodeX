const emojiMap = {
  "A": "🍎", "B": "🎸", "C": "🎪", "D": "🐉", "E": "🦅", "F": "🍟", "G": "🎭", "H": "🚁",
  "I": "🕵️", "J": "🤹", "K": "🔑", "L": "🦞", "M": "🎮", "N": "📖", "O": "🥚", "P": "🍍",
  "Q": "👑", "R": "🚀", "S": "🦂", "T": "🎺", "U": "🦄", "V": "🎻", "W": "🍉", "X": "📌",
  "Y": "🪀", "Z": "🦓",
  "a": "🥑", "b": "🍌", "c": "🎯", "d": "🐬", "e": "🎗️", "f": "🐸", "g": "🍇", "h": "🏒",
  "i": "🎈", "j": "🕹️", "k": "🥝", "l": "🦁", "m": "🥭", "n": "🎵", "o": "🔮", "p": "🎨",
  "q": "🧀", "r": "🤖", "s": "🌵", "t": "🌮", "u": "🪂", "v": "🦚", "w": "🌊", "x": "🎲",
  "y": "🥋", "z": "🦴",
  "0": "🥚", "1": "🧢", "2": "🎮", "3": "🌰", "4": "🦀", "5": "🍀", "6": "🎱", "7": "🕖",
  "8": "🕷️", "9": "🚦"
};


const textToEmoji = (text) => {
  return text
    .split("")
    .map((char) => emojiMap[char] || char) // Convert character if exists in emojiMap
    .join("");
};

const emojiToText = (emojiString) => {
  // Create reverse mapping with normalized emojis
  const emojiToTextMap = {};
  for (const [text, emoji] of Object.entries(emojiMap)) {
    // Normalize the emoji by removing variation selectors
    const normalizedEmoji = emoji.replace(/[\uFE00-\uFE0F]/g, '');
    emojiToTextMap[normalizedEmoji] = text;
  }

  // Split and normalize input emojis
  const emojiArray = Array.from(emojiString).map(char => 
    char.replace(/[\uFE00-\uFE0F]/g, '')
  );
  
  return emojiArray
    .map(char => emojiToTextMap[char] || char)
    .join('');
};

export { textToEmoji, emojiToText };
