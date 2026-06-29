import { useEffect, useRef, useState } from "react";

const CHAR_POOL = ".keshe01$#@!%&*()_+{}[]|:;<>?,/~".split("");
function getRandomChar() {
  return CHAR_POOL[Math.floor(Math.random() * CHAR_POOL.length)];
}

const TARGET_CHARS = [".", "k", "e", "s", "h", "e"];

export default function Preloader({ onComplete }) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Timeline state variables
    let currentStage = 1;
    let animationFrameId;
    let particles = [];
    let loaded = false;

    const startTime = Date.now();
    let stage2StartTime = 0;

    const minStage1Time = 2000; // Stage 1 min duration
    const stage2Duration = 5300; // Expanded to cover typing (1.8s) + stay (2s) + erasing (0.9s) + final blink (0.6s) // Stage 2 duration

    // Particle Class for Static Grid
    class Particle {
      constructor(x, y, isTextParticle, targetChar = "", charIndex = -1) {
        this.x = x;
        this.y = y;
        this.isTextParticle = isTextParticle;
        this.targetChar = targetChar;
        this.charIndex = charIndex;

        this.size = 32; // Grid character size (fixed size)
        this.alpha = 1.0;
        this.char = getRandomChar();
        this.color = Math.random() > 0.5 ? "#1a5060" : "#0a2a35"; // Identical grid colors
        this.locked = false;
      }

      update(stage) {
        if (stage === 1) {
          // Stage 1: Static grid flickering
          if (Math.random() < 0.08) {
            this.char = getRandomChar();
          }
          this.color = Math.random() > 0.5 ? "#1a5060" : "#0a2a35";
        } else if (stage === 2) {
          // Stage 2: Background dissolves, text particles decrypt, lock, and erase in sequence
          const timeInStage2 = Date.now() - stage2StartTime;
          const activeIdx = Math.floor(timeInStage2 / 300);
          const eraseStartTime = 3800; // Wait 2 seconds after typing completes
          const eraseSpeed = 150; // Speed of backspace erasing

          if (this.isTextParticle) {
            if (timeInStage2 < eraseStartTime) {
              // --- TYPING & STAY PHASE ---
              if (this.charIndex < activeIdx) {
                // Already typed, lock it
                this.char = this.targetChar;
                this.color = "#4fffff";
                this.locked = true;
              } else if (this.charIndex === activeIdx) {
                // Currently typing cursor
                const showCursor = Math.floor(Date.now() / 250) % 2 === 0;
                this.char = showCursor ? "|" : " ";
                this.color = "#4fffff";
                this.locked = false;
              } else {
                // Not typed yet: behave like grid background
                if (Math.random() < 0.08) {
                  this.char = getRandomChar();
                }
                this.color = Math.random() > 0.5 ? "#1a5060" : "#0a2a35";
              }
            } else {
              // --- ERASING PHASE ---
              const eraseTime = timeInStage2 - eraseStartTime;
              const activeEraseIdx = Math.floor(eraseTime / eraseSpeed);
              const cursorIdx = 5 - activeEraseIdx;

              if (this.charIndex > cursorIdx) {
                // Already deleted
                this.char = " ";
                this.locked = false;
                this.alpha = 0; // hide completely
              } else if (this.charIndex === cursorIdx) {
                // Active backspace cursor
                const showCursor = Math.floor(Date.now() / 250) % 2 === 0;
                this.char = showCursor ? "|" : " ";
                this.color = "#4fffff";
                this.locked = false;
                this.alpha = 1;
              } else {
                // Still visible, waiting to be erased
                this.char = this.targetChar;
                this.color = "#4fffff";
                this.locked = true;
                this.alpha = 1;
              }
            }
          } else {
            // Keep background grid active and flickering until the last letter of .keshe locks (1800ms)
            const lastLetterSettleTime = TARGET_CHARS.length * 300; // 1800ms

            if (timeInStage2 < lastLetterSettleTime) {
              if (Math.random() < 0.08) {
                this.char = getRandomChar();
              }
              this.color = Math.random() > 0.5 ? "#1a5060" : "#0a2a35";
            } else {
              // Fade out background symbols after decryption is complete
              this.alpha -= 0.04;
              if (this.alpha < 0) this.alpha = 0;
            }
          }
        }
      }

      draw(ctx) {
        if (this.alpha <= 0) return;
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = this.color;
        ctx.font = `bold ${this.size}px monospace`; // Flat monospace style
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(this.char, this.x, this.y);
        ctx.restore();
      }
    }

    // Initialize grid particles
    const initParticles = () => {
      particles = [];
      const charSpacing = 36; // spacing between grid symbols
      const cols = Math.ceil(canvas.width / charSpacing);
      const rows = Math.ceil(canvas.height / charSpacing);

      const midRow = Math.floor(rows / 2);
      const midCol = Math.floor(cols / 2);

      // Central 6 columns for the .keshe text
      const startCol = midCol - 3;
      const endCol = midCol + 2;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const px = c * charSpacing + charSpacing / 2;
          const py = r * charSpacing + charSpacing / 2;

          let isText = false;
          let targetChar = "";
          let charIndex = -1;

          if (r === midRow && c >= startCol && c <= endCol) {
            isText = true;
            charIndex = c - startCol;
            targetChar = TARGET_CHARS[charIndex];
          }

          particles.push(new Particle(px, py, isText, targetChar, charIndex));
        }
      }
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      if (currentStage === 1) {
        initParticles();
      }
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const handleLoad = () => {
      loaded = true;
    };

    if (document.readyState === "complete") {
      loaded = true;
    } else {
      window.addEventListener("load", handleLoad);
    }

    // Main animation frame loop
    const render = () => {
      // Semi-transparent overlay for motion blur trails
      ctx.fillStyle = "rgba(11, 12, 16, 0.25)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const elapsed = Date.now() - startTime;

      // Transition checks
      if (
        currentStage === 1 &&
        (loaded || elapsed > 4000) &&
        elapsed >= minStage1Time
      ) {
        currentStage = 2; // Transition to reveal/stabilization
        stage2StartTime = Date.now();
      } else if (
        currentStage === 2 &&
        Date.now() - stage2StartTime >= stage2Duration
      ) {
        setIsFadingOut(true); // Transition directly to outro fade (No shatter explosion)
        return; // Stop animation loop
      }

      particles.forEach((p) => {
        p.update(currentStage);
        p.draw(ctx);
      });

      // Extra blinking cursor right after the typed word ".keshe"
      if (currentStage === 2) {
        const timeInStage2 = Date.now() - stage2StartTime;
        const activeIdx = Math.floor(timeInStage2 / 300);
        const eraseStartTime = 3800;

        if (activeIdx >= 6 && timeInStage2 < eraseStartTime) {
          const showCursor = Math.floor(Date.now() / 250) % 2 === 0;
          if (showCursor) {
            ctx.save();
            ctx.fillStyle = "#4fffff";
            ctx.font = "bold 28px monospace";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";

            const charSpacing = 36;
            const midCol = Math.floor(canvas.width / charSpacing / 2);
            const cursorX = (midCol + 3) * charSpacing + charSpacing / 2;
            const midRow = Math.floor(canvas.height / charSpacing / 2);
            const cursorY = midRow * charSpacing + charSpacing / 2;

            ctx.fillText("|", cursorX, cursorY);
            ctx.restore();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  useEffect(() => {
    if (isFadingOut) {
      const timer = setTimeout(() => {
        onComplete();
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [isFadingOut, onComplete]);

  return (
    <div
      ref={containerRef}
      className={`preloader-container ${isFadingOut ? "fade-out" : ""}`}
    >
      <canvas ref={canvasRef} />
    </div>
  );
}
