import { useState } from "react";

export default function Banner({ bannerId }) {
  const storageKey = `bannerText_${bannerId}`; // Unique key for each banner
  const [text, setText] = useState(() => {
    return localStorage.getItem(storageKey) || 'Exercise Name'; // Load saved text or default
  });
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setIsEditing(false);
      saveText();
    }
  };

  const saveText = () => {
    localStorage.setItem(storageKey, text);
    alert("Banner text saved! ✅");
  };

  return (
    <div className="banner" onClick={() => setIsEditing(true)}>
      {isEditing ? (
        <input
          type="text"
          value={text}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onBlur={() => {
            setIsEditing(false);
            saveText();
          }}
          autoFocus
          className="banner-input"
        />
      ) : (
        <span>{text}</span>
      )}
    </div>
  );
}