"use client";

import { useEffect, useRef } from "react";

export default function AnimatedBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        interface Orb {
            x: number;
            y: number;
            radius: number;
            dx: number;
            dy: number;
            color: string;
            alpha: number;
            targetAlpha: number;
        }

        const orbs: Orb[] = [];
        const colors = [
            "66, 133, 244", // Blue
            "168, 85, 247", // Purple
            "236, 72, 153", // Pink
        ];

        const createOrb = (): Orb => ({
            x: Math.random() * width,
            y: Math.random() * height,
            radius: Math.random() * 100 + 50,
            dx: (Math.random() - 0.5) * 0.5,
            dy: (Math.random() - 0.5) * 0.5,
            color: colors[Math.floor(Math.random() * colors.length)],
            alpha: 0,
            targetAlpha: Math.random() * 0.2 + 0.1,
        });

        for (let i = 0; i < 6; i++) {
            orbs.push(createOrb());
        }

        const animate = () => {
            ctx.clearRect(0, 0, width, height);

            // Dark background base
            ctx.fillStyle = "#000000";
            ctx.fillRect(0, 0, width, height);

            orbs.forEach(orb => {
                // Move
                orb.x += orb.dx;
                orb.y += orb.dy;

                // Bounce
                if (orb.x < -orb.radius || orb.x > width + orb.radius) orb.dx *= -1;
                if (orb.y < -orb.radius || orb.y > height + orb.radius) orb.dy *= -1;

                // Fade in
                if (orb.alpha < orb.targetAlpha) orb.alpha += 0.005;

                // Draw
                const gradient = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.radius);
                gradient.addColorStop(0, `rgba(${orb.color}, ${orb.alpha})`);
                gradient.addColorStop(1, `rgba(${orb.color}, 0)`);

                ctx.beginPath();
                ctx.fillStyle = gradient;
                ctx.arc(orb.x, orb.y, orb.radius * 2, 0, Math.PI * 2);
                ctx.fill();
            });

            // Noise overlay (optional for texture)
            // ... (skipping for performance)

            requestAnimationFrame(animate);
        };

        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        }

        window.addEventListener("resize", handleResize);
        animate();

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 w-full h-full -z-10 pointer-events-none"
        />
    );
}
