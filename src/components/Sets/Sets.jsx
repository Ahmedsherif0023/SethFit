import { useState, useEffect } from "react";

export default function Sets({ setId }) {
  const storageKey = `setDescription_${setId}`; // Unique key for each set
  const [description, setDescription] = useState(() => {
    return localStorage.getItem(storageKey) || "Set";
  });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    localStorage.setItem(storageKey, description);
  }, [description, storageKey]);

  const handleChange = (e) => setDescription(e.target.value);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setIsEditing(false);
    }
  };

  return (
    <div className="zxzx" onClick={() => setIsEditing(true)}>
      {isEditing ? (
        <input
          type="text"
          value={description}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onBlur={() => setIsEditing(false)}
          autoFocus
          className="zzxxzz"
        />
      ) : (
        <span>{description}</span>
      )}
    </div>
  );
}