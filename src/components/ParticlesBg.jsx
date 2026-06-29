import { useEffect, useRef } from 'react';

export default function ParticlesBg() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let particles = [];
        let animationFrameId;
        const mouse = { x: null, y: null, radius: 160 };

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        };

        class Particle {
            constructor(x, y) {
                this.x = x;
                this.y = y;
                this.size = Math.random() * 0.8 + 0.8; // Very small vertex points
                this.vx = (Math.random() - 0.5) * 0.35; // Slower velocity
                this.vy = (Math.random() - 0.5) * 0.35;
                this.baseColor = 'rgba(79, 255, 255, 0.3)'; // Softer opacity
            }

            update() {
                // Keep moving
                this.x += this.vx;
                this.y += this.vy;

                // Screen boundaries wrap
                if (this.x < 0) this.x = canvas.width;
                if (this.x > canvas.width) this.x = 0;
                if (this.y < 0) this.y = canvas.height;
                if (this.y > canvas.height) this.y = 0;

                // Mouse interaction (gentle push)
                if (mouse.x !== null && mouse.y !== null) {
                    const dx = this.x - mouse.x;
                    const dy = this.y - mouse.y;
                    const distance = Math.hypot(dx, dy);
                    if (distance < mouse.radius) {
                        const force = (mouse.radius - distance) / mouse.radius;
                        const angle = Math.atan2(dy, dx);
                        // Push away from mouse smoothly
                        this.x += Math.cos(angle) * force * 0.5;
                        this.y += Math.sin(angle) * force * 0.5;
                    }
                }
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = this.baseColor;
                ctx.fill();
            }
        }

        const initParticles = () => {
            particles = [];
            // Scale particle density with screen area
            const particleCount = Math.min(
                180, 
                Math.round((canvas.width * canvas.height) / 9500)
            );
            for (let i = 0; i < particleCount; i++) {
                const px = Math.random() * canvas.width;
                const py = Math.random() * canvas.height;
                particles.push(new Particle(px, py));
            }
        };

        const drawLines = () => {
            const maxDistance = 115;
            for (let i = 0; i < particles.length; i++) {
                const p1 = particles[i];
                
                // Draw lines to mouse
                if (mouse.x !== null && mouse.y !== null) {
                    const dx = p1.x - mouse.x;
                    const dy = p1.y - mouse.y;
                    const mouseDistance = Math.hypot(dx, dy);
                    if (mouseDistance < mouse.radius) {
                        const alpha = (1 - mouseDistance / mouse.radius) * 0.25;
                        ctx.beginPath();
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(mouse.x, mouse.y);
                        ctx.strokeStyle = `rgba(79, 255, 255, ${alpha})`;
                        ctx.lineWidth = 1.2;
                        ctx.stroke();
                    }
                }

                // Draw lines between particles
                for (let j = i + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const dx = p1.x - p2.x;
                    const dy = p1.y - p2.y;
                    const distance = Math.hypot(dx, dy);

                    if (distance < maxDistance) {
                        // Closer particles get brighter lines
                        const alpha = (1 - distance / maxDistance) * 0.22; // Brighter lines
                        ctx.beginPath();
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.strokeStyle = `rgba(79, 255, 255, ${alpha})`;
                        ctx.lineWidth = 0.8;
                        ctx.stroke();
                    }
                }
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach(p => {
                p.update();
                p.draw();
            });
            drawLines();

            animationFrameId = requestAnimationFrame(animate);
        };

        resizeCanvas();
        animate();

        const handleMouseMove = (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };

        const handleMouseLeave = () => {
            mouse.x = null;
            mouse.y = null;
        };

        window.addEventListener('resize', resizeCanvas);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return <canvas ref={canvasRef} id="particles-canvas" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }} />;
}
