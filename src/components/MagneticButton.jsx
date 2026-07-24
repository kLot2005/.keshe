import { useRef, useState } from "react";

export default function MagneticButton({
  children,
  onClick,
  href,
  className = "",
  variant = "cyan",
}) {
  const buttonRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [sparks, setSparks] = useState([]);

  const handleMouseMove = (e) => {
    const btn = buttonRef.current;
    if (!btn) return;

    const rect = btn.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    // Magnetic pulling effect
    setPosition({
      x: distanceX * 0.25,
      y: distanceY * 0.25,
    });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const triggerSparks = (e) => {
    const btn = buttonRef.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newSparks = Array.from({ length: 8 }).map((_, i) => ({
      id: Date.now() + i,
      x,
      y,
      angle: (i * 45 * Math.PI) / 180,
      speed: Math.random() * 30 + 20,
    }));

    setSparks((prev) => [...prev, ...newSparks]);

    setTimeout(() => {
      setSparks([]);
    }, 600);

    if (onClick) onClick(e);
  };

  const baseStyle =
    variant === "cyan"
      ? "bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-cyan-500/25 shadow-lg border-cyan-400"
      : variant === "emerald"
      ? "bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-emerald-500/25 shadow-lg border-emerald-400"
      : "bg-slate-800/90 hover:bg-slate-700 text-slate-200 border-slate-700 shadow-lg shadow-slate-950/40";

  const Component = href ? "a" : "button";
  const props = href
    ? { href, target: "_blank", rel: "noopener noreferrer" }
    : { onClick: triggerSparks };

  return (
    <Component
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0px)`,
        transition: "transform 0.15s cubic-bezier(0.2, 0.8, 0.2, 1)",
      }}
      className={`relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-mono text-xs font-bold border transition-colors cursor-pointer overflow-hidden group select-none ${baseStyle} ${className}`}
      {...props}
    >
      {/* Content */}
      <span className="relative z-10 flex items-center gap-2">{children}</span>

      {/* Spark Burst Effect */}
      {sparks.map((spark) => (
        <span
          key={spark.id}
          className="absolute w-1.5 h-1.5 rounded-full bg-cyan-300 pointer-events-none animate-ping"
          style={{
            left: `${spark.x}px`,
            top: `${spark.y}px`,
            transform: `translate(${Math.cos(spark.angle) * spark.speed}px, ${
              Math.sin(spark.angle) * spark.speed
            }px)`,
            opacity: 0,
            transition: "all 0.5s ease-out",
          }}
        />
      ))}
    </Component>
  );
}
