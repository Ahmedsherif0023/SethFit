import { useState } from "react";

export default function Sets() {
  const [description, setDescription] =  useState(() => {
    return localStorage.getItem("setDescription") || "Set"; // Load saved description or default to "Set"
  });
  const [isEditing, setIsEditing] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    setDescription(e.target.value);
  };

  // Handle pressing Enter to save the input
  const handleKeyDown = (e) => {
    if (e.key === "Enter") { 
      setIsEditing(false);
    }
  };

    // Function to save description to localStorage
    const saveDescription = () => {
      localStorage.setItem("setDescription", description);
      alert("Description saved! ✅");
    };

  return (
    <div
      className="zxzx"
      onClick={() => setIsEditing(true)}
    >
      {isEditing ? (
        <input
          type="text"
          value={description}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onBlur={() => setIsEditing(false)} // Save on blur
          autoFocus
          className="zzxxzz"
        />
      ) : (
        <span>{description}</span>
      )}
    </div>
  );
}
