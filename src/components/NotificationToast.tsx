import { useState, useEffect } from "react";

const notifications = [
  { name: "Emily R.", location: "Chicago" },
  { name: "Michael T.", location: "New York" },
  { name: "Sarah K.", location: "Los Angeles" },
  { name: "David L.", location: "Houston" },
  { name: "Jessica M.", location: "Phoenix" },
  { name: "Chris P.", location: "Miami" },
  { name: "Amanda W.", location: "Seattle" },
  { name: "Brian H.", location: "Denver" },
];

export const NotificationToast = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      
      setTimeout(() => {
        setIsVisible(false);
      }, 400);

      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % notifications.length);
        setIsVisible(true);
        setIsAnimating(false);
      }, 800);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const current = notifications[currentIndex];

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div
        className={`bg-card shadow-toast rounded-full px-5 py-3 flex items-center gap-3 transition-all duration-300 ${
          isVisible && !isAnimating ? "animate-slide-down" : ""
        } ${!isVisible ? "animate-slide-up" : ""}`}
      >
        <span className="text-xl">🎉</span>
        <p className="text-sm font-medium text-foreground">
          <span className="font-bold">{current.name}</span> from {current.location} just claimed their offer!
        </p>
      </div>
    </div>
  );
};
