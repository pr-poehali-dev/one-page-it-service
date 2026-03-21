import { useEffect, useRef } from "react";

interface Petal {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  rotation: number;
  rotationSpeed: number;
  opacity: number;
  color: string;
  swing: number;
  swingSpeed: number;
  swingOffset: number;
}

const COLORS = [
  "rgba(255, 182, 193, ",
  "rgba(255, 192, 203, ",
  "rgba(255, 160, 180, ",
  "rgba(230, 150, 170, ",
  "rgba(255, 210, 220, ",
  "rgba(255, 240, 245, ",
];

const Petals = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const count = 35;
    const petals: Petal[] = Array.from({ length: count }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: 6 + Math.random() * 10,
      speedY: 0.6 + Math.random() * 1.2,
      speedX: -0.5 + Math.random() * 1,
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (-0.02 + Math.random() * 0.04),
      opacity: 0.4 + Math.random() * 0.5,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      swing: 0,
      swingSpeed: 0.02 + Math.random() * 0.02,
      swingOffset: Math.random() * Math.PI * 2,
    }));

    const drawPetal = (ctx: CanvasRenderingContext2D, p: Petal) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);
      ctx.globalAlpha = p.opacity;

      ctx.beginPath();
      ctx.fillStyle = `${p.color}${p.opacity})`;

      ctx.moveTo(0, -p.size);
      ctx.bezierCurveTo(p.size * 0.8, -p.size * 0.5, p.size * 0.8, p.size * 0.5, 0, p.size);
      ctx.bezierCurveTo(-p.size * 0.8, p.size * 0.5, -p.size * 0.8, -p.size * 0.5, 0, -p.size);
      ctx.closePath();
      ctx.fill();

      ctx.restore();
    };

    let animId: number;
    let frame = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      frame++;

      petals.forEach((p) => {
        p.swing = Math.sin(frame * p.swingSpeed + p.swingOffset) * 1.5;
        p.x += p.speedX + p.swing;
        p.y += p.speedY;
        p.rotation += p.rotationSpeed;

        if (p.y > canvas.height + 20) {
          p.y = -20;
          p.x = Math.random() * canvas.width;
        }
        if (p.x > canvas.width + 20) p.x = -20;
        if (p.x < -20) p.x = canvas.width + 20;

        drawPetal(ctx, p);
      });

      animId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10"
      style={{ opacity: 0.75 }}
    />
  );
};

export default Petals;
