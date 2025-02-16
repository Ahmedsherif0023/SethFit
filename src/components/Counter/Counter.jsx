import { useState, useEffect } from "react";
import Sets from "../Sets/Sets";
import {
  loadCounters,
  saveCounters,
  deleteCounters,
} from "../LocalStorage/LocalStorage"; // Import utilities
export default function Counter() {
  const [counters, setCounters] = useState(() => {
    const savedCounters = localStorage.getItem("counters");
    return savedCounters
    ? JSON.parse(savedCounters)
    : [{ id: Date.now(), count: 0 }];
  });


  
  // Save counters to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("counters", JSON.stringify(counters));
  }, [counters]);
  
  // Function to add a new counter
  const addCounter = () => {
    setCounters((prev) => [...prev, { id: Date.now(), count: 0 }]);
  };
  
  // Function to increment counter
  const increment = (id) => {
    setCounters((prev) =>
      prev.map((c) => (c.id === id ? { ...c, count: c.count + 1 } : c))
    );
  };

  // Function to decrement counter
  const decrement = (id) => {
    setCounters((prev) =>
      prev.map((c) =>
        c.id === id ? { ...c, count: Math.max(0, c.count - 1) } : c
      )
    );
  };

// Function to update counterF description
const updateDescription = (id, newDescription) => {
  setCounters((prev) =>
    prev.map((c) => (c.id === id ? { ...c, description: newDescription } : c))
  );
};



  // Function to remove a counter
  const removeCounter = (id) => {
    setCounters((prev) => prev.filter((c) => c.id !== id));
  };


  // Save button handler
  const handleSave = () => {
    saveCounters(counters);
  };

  // Delete button handler
  const handleDelete = () => {
    deleteCounters();
    setCounters([{ id: Date.now(), count: 0 , description: "New Counter"}]); // Reset the state after deletion
  };
  return (
    <div className="counter">
      {counters.map(({ id, count , description}) => (
        <div key={id} className="ccc">
          <button onClick={() => removeCounter(id)} className="ddd zzz">
            ✖
          </button>
          <span className="ddd">
            <Sets />

            {/* Editable Description */}
          {/* <input
            type="text"
            value={description}
            onChange={(e) => updateDescription(id, e.target.value)}
            className="flex-1 text-center text-white bg-transparent border-b border-gray-400 mx-2 focus:outline-none"
          /> */}


          </span>




          <button onClick={() => decrement(id)} className="ddd zzz">
            -
          </button>
          <span className="xzzx">{count}</span>
          <button onClick={() => increment(id)} className="ddd zzz">
            +
          </button>
        </div>
      ))}
      <button onClick={addCounter} className="AddCounterBtn">
        + Add Counter
      </button>
      <button onClick={handleSave} className="ddd zzz btns">
        <div className="logo">💾 </div>
        Save
        </button>
      <button onClick={handleDelete} className="ddd zzz btns zozo">
        <div className="logo">🗑 </div>
        Delete
        </button>
    </div>
  );
}
