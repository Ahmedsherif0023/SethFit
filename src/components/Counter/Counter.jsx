import { useState, useEffect } from "react";
import Sets from "../Sets/Sets";
import Banner from "../Banner/Banner"; // Import the Banner component

export default function Counter() {
  const [banners, setBanners] = useState(() => {
    const savedBanners = localStorage.getItem("banners");
    return savedBanners ? JSON.parse(savedBanners) : [];
  });

  // Save banners to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("banners", JSON.stringify(banners));
  }, [banners]);

  // Function to add a new banner
  const addBanner = () => {
    setBanners((prev) => [...prev, { id: Date.now(), counters: [] }]);
  };

  // Function to add a new counter to the last banner
  const addCounter = () => {
    setBanners((prev) => {
      const lastBannerIndex = prev.length - 1;
      if (lastBannerIndex >= 0) {
        const updatedBanners = [...prev];
        updatedBanners[lastBannerIndex] = {
          ...updatedBanners[lastBannerIndex],
          counters: [
            ...updatedBanners[lastBannerIndex].counters,
            { id: Date.now(), count: 0, sets: 1 },
          ],
        };
        return updatedBanners;
      }
      return prev;
    });
  };

  // Function to increment counter
  const increment = (bannerId, counterId) => {
    setBanners((prev) =>
      prev.map((banner) =>
        banner.id === bannerId
          ? {
              ...banner,
              counters: banner.counters.map((counter) =>
                counter.id === counterId
                  ? { ...counter, count: counter.count + 1 }
                  : counter
              ),
            }
          : banner
      )
    );
  };

  // Function to decrement counter
  const decrement = (bannerId, counterId) => {
    setBanners((prev) =>
      prev.map((banner) =>
        banner.id === bannerId
          ? {
              ...banner,
              counters: banner.counters.map((counter) =>
                counter.id === counterId
                  ? { ...counter, count: Math.max(0, counter.count - 1) }
                  : counter
              ),
            }
          : banner
      )
    );
  };

  // Function to update sets value
  const updateSets = (bannerId, counterId, value) => {
    setBanners((prev) =>
      prev.map((banner) =>
        banner.id === bannerId
          ? {
              ...banner,
              counters: banner.counters.map((counter) =>
                counter.id === counterId
                  ? { ...counter, sets: value }
                  : counter
              ),
            }
          : banner
      )
    );
  };

  // Function to remove a counter
  const removeCounter = (bannerId, counterId) => {
    setBanners((prev) =>
      prev.map((banner) =>
        banner.id === bannerId
          ? {
              ...banner,
              counters: banner.counters.filter((counter) => counter.id !== counterId),
            }
          : banner
      )
    );
  };

  // Save button handler
  const handleSave = () => {
    localStorage.setItem("banners", JSON.stringify(banners));
  };

  // Delete button handler
  const handleDelete = () => {
    localStorage.removeItem("banners");
    setBanners([]);
  };

  return (
    <div className="counter">
    <div className="Banner_Counter_btns">
        <button onClick={addBanner} className="AddBannerBtn">
          + Add Banner
        </button>
        <button onClick={addCounter} className="AddCounterBtn">
          + Add Counter
        </button>
    </div>
      {banners.map(({ id: bannerId, counters }) => (
        <div key={bannerId}>
          <Banner bannerId={bannerId} />
          {counters.map(({ id: counterId, count, sets }) => (
            <div key={counterId} className="ccc">
              <button onClick={() => removeCounter(bannerId, counterId)} className="ddd zzz">
                ✖
              </button>
              <span className="ddd">
                <Sets setId={`${bannerId}_${counterId}`} />
              </span>
              <button onClick={() => decrement(bannerId, counterId)} className="ddd zzz">
                -
              </button>
              <span className="xzzx">{count}</span>
              <button onClick={() => increment(bannerId, counterId)} className="ddd zzz">
                +
              </button>
              <div>
              </div>
            </div>
          ))}
        </div>
      ))}
      <br />
      <div className="save_delete">
        <button onClick={handleSave} className="ddd zzz btns bobo">
          <div className="logo">💾 </div>
          Save
        </button>
        <button onClick={handleDelete} className="ddd zzz btns zozo">
          <div className="logo">🗑 </div>
          Delete
        </button>
      </div>
    </div>
  );
}