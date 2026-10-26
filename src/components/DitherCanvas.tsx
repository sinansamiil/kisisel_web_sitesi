'use client';

import React, { useEffect, useRef } from 'react';

export default function DitherCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement;
    if (!parent) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;
    const mouse = { x: -1000, y: -1000, active: false };
    let animationFrameId: number | null = null;

    const drawMatrix = () => {
      if (!ctx || width === 0 || height === 0) return;
      ctx.clearRect(0, 0, width, height);

      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';

      // Step grid size
      const step = 20;
      const cols = Math.ceil(width / step);
      const rows = Math.ceil(height / step);

      // Colors matching editorial lavender/dither pattern
      const dotColorBase = isDark ? 'rgba(167, 139, 250, ' : 'rgba(124, 58, 237, ';

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = c * step + step / 2;
          const y = r * step + step / 2;

          // Gradient factor: more intense in upper left and middle
          const distFromTopLeft = Math.sqrt(x * x + y * y);
          const maxDist = Math.sqrt(width * width + height * height);
          let intensity = 1 - distFromTopLeft / (maxDist * 0.85);
          if (intensity < 0.05) intensity = 0.05;

          // Mouse proximity calculation
          let mouseDist = 999;
          if (mouse.active) {
            const dx = x - mouse.x;
            const dy = y - mouse.y;
            mouseDist = Math.sqrt(dx * dx + dy * dy);
          }

          let size = intensity * 4.5;
          let alpha = intensity * 0.65;

          if (mouseDist < 120) {
            const factor = 1 - mouseDist / 120;
            size += factor * 3.5;
            alpha = Math.min(1, alpha + factor * 0.4);
          }

          ctx.fillStyle = `${dotColorBase}${alpha})`;

          if ((c + r) % 2 === 0) {
            ctx.fillRect(x - size / 2, y - size / 2, size, size);
          } else {
            ctx.beginPath();
            ctx.arc(x, y, size / 2, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }
    };

    const resize = () => {
      const rect = parent.getBoundingClientRect();
      width = canvas.width = rect.width;
      height = canvas.height = rect.height;
      drawMatrix();
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
      drawMatrix();
    };

    const handleMouseLeave = () => {
      mouse.active = false;
      drawMatrix();
    };

    const handleThemeChange = () => {
      drawMatrix();
    };

    window.addEventListener('resize', resize);
    window.addEventListener('theme-change', handleThemeChange);
    parent.addEventListener('mousemove', handleMouseMove);
    parent.addEventListener('mouseleave', handleMouseLeave);

    resize();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('theme-change', handleThemeChange);
      parent.removeEventListener('mousemove', handleMouseMove);
      parent.removeEventListener('mouseleave', handleMouseLeave);
      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return <canvas ref={canvasRef} id="dither-canvas" />;
}
