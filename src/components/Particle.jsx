import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

export default function ParticleNetwork() {
  const canvasRef = useRef(null);
  const animationRef = useRef();
  const mouse = useRef({ x: null, y: null });

  const PARTICLE_COUNT = 80;
  const PARTICLE_RADIUS = 3.5; // slightly bigger
  const LINE_DISTANCE = 120;

  class Particle {
    constructor(width, height) {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.5;
      this.vy = (Math.random() - 0.5) * 0.5;
    }
    update(width, height) {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;
    }
    draw(ctx) {
      ctx.beginPath();
      ctx.arc(this.x, this.y, PARTICLE_RADIUS, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles = Array.from({ length: PARTICLE_COUNT }, () => new Particle(width, height));

    function draw() {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "#00ffe0";
      ctx.strokeStyle = "#00ffe0";
      ctx.lineWidth = 0.3;

      particles.forEach((p) => {
        p.update(width, height);
        p.draw(ctx);
      });

      // Lines between particles
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        for (let j = i + 1; j < PARTICLE_COUNT; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < LINE_DISTANCE) {
            ctx.globalAlpha = 1 - dist / LINE_DISTANCE;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Lines to mouse
      if (mouse.current.x && mouse.current.y) {
        particles.forEach((p) => {
          const dx = p.x - mouse.current.x;
          const dy = p.y - mouse.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < LINE_DISTANCE) {
            ctx.globalAlpha = 0.5 * (1 - dist / LINE_DISTANCE);
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.current.x, mouse.current.y);
            ctx.stroke();
          }
        });
      }

      ctx.globalAlpha = 1;
      animationRef.current = requestAnimationFrame(draw);
    }

    draw();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    const handleMouseMove = (e) => (mouse.current = { x: e.clientX, y: e.clientY });
    const handleMouseLeave = () => (mouse.current = { x: null, y: null });

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const controls = useAnimation();
  useEffect(() => {
    controls.start({
      scale: [1, 1.01, 1],
      transition: { duration: 12, repeat: Infinity, ease: "easeInOut" },
    });
  }, [controls]);

  return (
    <motion.canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none"
      animate={controls}
    />
  );
}
