import { useState, useEffect, useRef } from "react";

export default function InteractivePlayground() {
  const canvasRef = useRef(null);
  const [hue, setHue] = useState(185); // Cyan default
  const [speed, setSpeed] = useState(1.5);
  const [density, setDensity] = useState(24);
  const [mode, setMode] = useState("CYBER_WAVE"); // CYBER_WAVE | MATRIX_SPARK | NEON_RING

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId;
    let t = 0;

    const render = () => {
      t += 0.02 * speed;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const w = canvas.width;
      const h = canvas.height;
      const cx = w / 2;
      const cy = h / 2;

      if (mode === "CYBER_WAVE") {
        // Sine wave plasma threads
        for (let i = 0; i < density; i++) {
          ctx.beginPath();
          const yOffset = (i - density / 2) * 6;
          for (let x = 0; x < w; x += 4) {
            const y =
              cy +
              yOffset +
              Math.sin(x * 0.02 + t + i * 0.2) * 18 * Math.cos(t * 0.5);
            if (x === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          const alpha = 0.25 + Math.sin(t + i) * 0.15;
          ctx.strokeStyle = `hsla(${hue + i * 2}, 90%, 60%, ${alpha})`;
          ctx.lineWidth = 1.5;
          ctx.stroke();
        }
      } else if (mode === "NEON_RING") {
        // Concentric expanding cyber rings
        for (let i = 0; i < density / 2; i++) {
          const r = ((t * 40 + i * 25) % (w * 0.45));
          const alpha = 1 - r / (w * 0.45);
          ctx.beginPath();
          ctx.arc(cx, cy, r, 0, Math.PI * 2);
          ctx.strokeStyle = `hsla(${hue + i * 10}, 85%, 65%, ${alpha * 0.6})`;
          ctx.lineWidth = 2;
          ctx.stroke();
        }
      } else {
        // Matrix Spark particles
        for (let i = 0; i < density * 2; i++) {
          const angle = (i / (density * 2)) * Math.PI * 2 + t * 0.5;
          const dist = 30 + Math.sin(t * 2 + i) * 45;
          const px = cx + Math.cos(angle) * dist;
          const py = cy + Math.sin(angle) * dist;

          ctx.beginPath();
          ctx.arc(px, py, 2.5, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(${hue}, 95%, 60%, 0.8)`;
          ctx.shadowBlur = 10;
          ctx.shadowColor = `hsla(${hue}, 95%, 60%, 1)`;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animId);
  }, [hue, speed, density, mode]);

  return (
    <div className="bg-slate-950/80 rounded-2xl border border-slate-800 p-4 space-y-4 font-mono text-xs">
      
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></span>
          <span className="text-cyan-300 font-bold uppercase">
            // INTERACTIVE_CANVAS_LAB
          </span>
        </div>
        <span className="text-[10px] text-slate-500">LIVE RENDER ENGINE</span>
      </div>

      {/* Canvas Viewport */}
      <div className="relative w-full h-32 bg-black/80 rounded-xl overflow-hidden border border-slate-800/80 shadow-inner flex items-center justify-center">
        <canvas
          ref={canvasRef}
          width={360}
          height={128}
          className="w-full h-full block"
        />
        <div className="absolute top-2 right-2 text-[9px] text-cyan-400/80 bg-slate-900/90 px-2 py-0.5 rounded border border-slate-800">
          HSL({hue}, 90%) // {mode}
        </div>
      </div>

      {/* Interactive Controls */}
      <div className="space-y-3 pt-1">
        
        {/* Mode Selector */}
        <div className="flex items-center gap-2">
          <span className="text-slate-500 text-[10px] w-14">MODE:</span>
          <div className="flex flex-wrap gap-1.5 grow">
            {["CYBER_WAVE", "NEON_RING", "MATRIX_SPARK"].map((m) => (
              <button
                key={m}
                onClick={() => setMode(m)}
                className={`px-2 py-1 rounded text-[10px] border transition-all cursor-pointer ${
                  mode === m
                    ? "bg-cyan-950 text-cyan-300 border-cyan-500/80 font-bold"
                    : "bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-200"
                }`}
              >
                {m}
              </button>
            ))}
          </div>
        </div>

        {/* Hue Slider */}
        <div className="flex items-center gap-2">
          <span className="text-slate-500 text-[10px] w-14">HUE:</span>
          <input
            type="range"
            min="0"
            max="360"
            value={hue}
            onChange={(e) => setHue(Number(e.target.value))}
            className="grow h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
          />
          <span className="text-cyan-400 font-mono text-[10px] w-8 text-right">
            {hue}°
          </span>
        </div>

        {/* Speed Slider */}
        <div className="flex items-center gap-2">
          <span className="text-slate-500 text-[10px] w-14">SPEED:</span>
          <input
            type="range"
            min="0.5"
            max="4"
            step="0.1"
            value={speed}
            onChange={(e) => setSpeed(Number(e.target.value))}
            className="grow h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
          />
          <span className="text-emerald-400 font-mono text-[10px] w-8 text-right">
            {speed}x
          </span>
        </div>

      </div>

    </div>
  );
}
