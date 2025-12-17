export const FloatingDots = () => {
  const dots = [
    { top: "10%", left: "15%", size: 8, delay: 0 },
    { top: "20%", right: "10%", size: 6, delay: 1 },
    { top: "60%", left: "8%", size: 10, delay: 2 },
    { top: "70%", right: "15%", size: 7, delay: 0.5 },
    { top: "85%", left: "20%", size: 5, delay: 1.5 },
    { top: "40%", right: "5%", size: 8, delay: 2.5 },
    { top: "30%", left: "5%", size: 6, delay: 3 },
    { top: "90%", right: "25%", size: 9, delay: 1 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {dots.map((dot, index) => (
        <div
          key={index}
          className="absolute rounded-full bg-primary/30 animate-float"
          style={{
            top: dot.top,
            left: dot.left,
            right: dot.right,
            width: dot.size,
            height: dot.size,
            animationDelay: `${dot.delay}s`,
          }}
        />
      ))}
    </div>
  );
};
