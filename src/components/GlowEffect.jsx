import { useEffect, useRef } from "react";

export default function GlowEffect() {
  const glowRef = useRef(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;

    const parent = glow.parentElement;
    if (!parent) return;

    // Убедимся, что родитель имеет необходимые классы для работы эффекта
    parent.classList.add("group");
    parent.style.overflow = "hidden"; // чтобы свечение не выходило за границы
    if (window.getComputedStyle(parent).position === "static") {
      parent.style.position = "relative";
    }

    const handleMouseMove = (e) => {
      const rect = parent.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      glow.style.background = `radial-gradient(300px circle at ${x}px ${y}px, rgba(65, 73, 79, 0.32), transparent 70%)`;
    };

    parent.addEventListener("mousemove", handleMouseMove);

    return () => {
      parent.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out blur-xl z-0"
      style={{
        background:
          "radial-gradient(300px circle at 0px 0px, rgba(255,255,255,0.15), transparent 70%)",
      }}
    />
  );
}
