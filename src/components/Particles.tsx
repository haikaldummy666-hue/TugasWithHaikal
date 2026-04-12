import { useMemo } from "react";

const Particles = () => {
  const particles = useMemo(
    () =>
      Array.from({ length: 20 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 10,
        duration: 8 + Math.random() * 12,
        size: 3 + Math.random() * 5,
        isYellow: Math.random() > 0.5,
      })),
    []
  );

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            background: p.isYellow ? "hsl(45, 100%, 50%)" : "hsl(210, 100%, 50%)",
            opacity: 0.4,
            animation: `particle-float ${p.duration}s linear ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
};

export default Particles;
