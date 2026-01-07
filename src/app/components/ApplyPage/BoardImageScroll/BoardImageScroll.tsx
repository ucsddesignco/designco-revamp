'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import './BoardImageScroll.scss';

interface BoardImage {
  src: string;
  alt: string;
}

interface BoardImageScrollProps {
  images: BoardImage[];
}

export default function BoardImageScroll({ images }: BoardImageScrollProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const velocityRef = useRef(0);
  const lastXRef = useRef(0);
  const lastTimeRef = useRef(0);
  const momentumAnimationRef = useRef<number | null>(null);
  const touchVelocityHistoryRef = useRef<number[]>([]);
  const isTouchRef = useRef(false);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    isTouchRef.current = false;
    // Stop any ongoing momentum
    if (momentumAnimationRef.current) {
      cancelAnimationFrame(momentumAnimationRef.current);
      momentumAnimationRef.current = null;
    }
    setIsDragging(true);
    const x = e.pageX - scrollRef.current.offsetLeft;
    setStartX(x);
    setScrollLeft(scrollRef.current.scrollLeft);
    lastXRef.current = x;
    lastTimeRef.current = performance.now();
    velocityRef.current = 0;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const now = performance.now();
    const deltaX = x - lastXRef.current;
    const deltaTime = now - lastTimeRef.current;

    // Calculate velocity (pixels per millisecond)
    if (deltaTime > 0) {
      velocityRef.current = deltaX / deltaTime;
    }

    scrollRef.current.scrollLeft = scrollLeft - (x - startX);
    lastXRef.current = x;
    lastTimeRef.current = now;
  };

  const startMomentum = () => {
    if (!scrollRef.current) return;

    // For touch, use averaged velocity from history, but only if there's meaningful movement
    let finalVelocity = velocityRef.current;
    if (isTouchRef.current && touchVelocityHistoryRef.current.length > 0) {
      const velocities = touchVelocityHistoryRef.current;
      // Use the most recent velocities (last 2-3) for better accuracy
      const recentVelocities = velocities.slice(-2);
      finalVelocity =
        recentVelocities.reduce((a, b) => a + b, 0) / recentVelocities.length;
    }

    // Only start momentum if there's significant velocity
    if (Math.abs(finalVelocity) < 0.15) {
      touchVelocityHistoryRef.current = [];
      return;
    }

    // Different parameters for touch vs mouse
    const friction = isTouchRef.current ? 0.92 : 0.95;
    const velocityScale = isTouchRef.current ? 12 : 10; // Reduced from 15 for touch
    let currentVelocity = finalVelocity * velocityScale;

    const animate = () => {
      if (!scrollRef.current) return;

      currentVelocity *= friction;
      scrollRef.current.scrollLeft -= currentVelocity;

      if (Math.abs(currentVelocity) > 0.2) {
        momentumAnimationRef.current = requestAnimationFrame(animate);
      } else {
        momentumAnimationRef.current = null;
      }
    };

    momentumAnimationRef.current = requestAnimationFrame(animate);
    touchVelocityHistoryRef.current = []; // Reset history
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    startMomentum();
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    startMomentum();
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!scrollRef.current) return;
    isTouchRef.current = true;
    // Stop any ongoing momentum
    if (momentumAnimationRef.current) {
      cancelAnimationFrame(momentumAnimationRef.current);
      momentumAnimationRef.current = null;
    }
    setIsDragging(true);
    const x = e.touches[0].pageX - scrollRef.current.offsetLeft;
    setStartX(x);
    setScrollLeft(scrollRef.current.scrollLeft);
    lastXRef.current = x;
    lastTimeRef.current = performance.now();
    velocityRef.current = 0;
    touchVelocityHistoryRef.current = [];
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();

    const x = e.touches[0].pageX - scrollRef.current.offsetLeft;
    const now = performance.now();
    const deltaX = x - lastXRef.current;
    const deltaTime = now - lastTimeRef.current;

    // Calculate velocity (pixels per millisecond) with better precision
    if (deltaTime > 0 && deltaTime < 100) {
      // Only track if time delta is reasonable
      const velocity = deltaX / deltaTime;
      velocityRef.current = velocity;

      // Only keep recent velocities if there's actual movement
      if (Math.abs(velocity) > 0.01) {
        touchVelocityHistoryRef.current.push(velocity);
        if (touchVelocityHistoryRef.current.length > 3) {
          // Reduced from 5
          touchVelocityHistoryRef.current.shift();
        }
      } else {
        // Clear history if user has stopped
        touchVelocityHistoryRef.current = [];
      }
    }

    // Direct update for immediate response
    scrollRef.current.scrollLeft = scrollLeft - (x - startX);

    lastXRef.current = x;
    lastTimeRef.current = now;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);

    // Check if there was any movement in the last touch event
    // If the user just tapped/stopped, don't start momentum
    if (
      touchVelocityHistoryRef.current.length === 0 ||
      Math.abs(velocityRef.current) < 0.1
    ) {
      touchVelocityHistoryRef.current = [];
      velocityRef.current = 0;
      return;
    }

    startMomentum();
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (momentumAnimationRef.current) {
        cancelAnimationFrame(momentumAnimationRef.current);
      }
    };
  }, []);

  return (
    <div className="scrollWrapper">
      <div
        ref={scrollRef}
        className={`scrollContainer ${isDragging ? 'dragging' : ''}`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onWheel={handleWheel}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="imageDiv">
          {images.map((image, index) => (
            <Image
              key={index}
              src={image.src}
              alt={image.alt}
              width={1200}
              height={800}
              unoptimized
            />
          ))}
        </div>
      </div>
    </div>
  );
}
