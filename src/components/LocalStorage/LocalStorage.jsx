// Function to save counters to localStorage
export const saveCounters = (counters) => {
  localStorage.setItem("counters", JSON.stringify(counters));
  alert("Counters saved! ✅");
};

// Function to load counters from localStorage
export const loadCounters = () => {
  const savedCounters = localStorage.getItem("counters");
  return savedCounters
    ? JSON.parse(savedCounters)
    : [{ id: Date.now(), count: 0 }];
};

// Function to delete counters from localStorage
export const deleteCounters = () => {
  localStorage.removeItem("counters");
  alert("Counters deleted! ❌");
};
