import { useEffect, useRef } from "react";

interface Sparkle {
  x: number;
  y: number;
  radius: number;
  speedY: number;
  speedX: number;
  opacity: number;
  pulseSpeed: number;
  pulseOffset: number;
}

const SummerSparkles = () => {
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

    const count = 30;
    const sparkles: Sparkle[] = Array.from({ length: count }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      radius: 2 + Math.random() * 4,
      speedY: -(0.3 + Math.random() * 0.6),
      speedX: -0.3 + Math.random() * 0.6,
      opacity: 0.3 + Math.random() * 0.5,
      pulseSpeed: 0.02 + Math.random() * 0.03,
      pulseOffset: Math.random() * Math.PI * 2,
    }));

    let animId: number;
    let frame = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      frame++;

      sparkles.forEach((s) => {
        s.x += s.speedX;
        s.y += s.speedY;

        if (s.y < -10) {
          s.y = canvas.height + 10;
          s.x = Math.random() * canvas.width;
        }
        if (s.x > canvas.width + 10) s.x = -10;
        if (s.x < -10) s.x = canvas.width + 10;

        const pulse = 0.5 + 0.5 * Math.sin(frame * s.pulseSpeed + s.pulseOffset);
        const alpha = s.opacity * pulse;

        ctx.save();
        ctx.globalAlpha = alpha;
        const gradient = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.radius * 3);
        gradient.addColorStop(0, "rgba(255, 245, 200, 1)");
        gradient.addColorStop(1, "rgba(255, 245, 200, 0)");
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius * 3, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
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
      style={{ opacity: 0.8 }}
    />
  );
};

export default SummerSparkles;
