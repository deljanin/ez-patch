"use client";
import { useInView } from "motion/react";
import React, { useState, useEffect, useRef } from "react";

type CountUpProps = {
  end: number;
  duration?: number;
};

function easeOutQuad(t: number): number {
  return t * (2 - t);
}

const CountUp: React.FC<CountUpProps> = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState<number>(0);
  const [isComplete, setIsComplete] = useState<boolean>(false);
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (time: number) => {
      if (startTime === null) startTime = time;
      const timeElapsed = time - startTime;

      const progress = Math.min(timeElapsed / duration, 1);
      const easedProgress = easeOutQuad(progress);

      const currentCount = Math.ceil(easedProgress * end);
      setCount(currentCount);

      if (timeElapsed < duration) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setIsComplete(true); // Mark animation as complete
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    // Cleanup function to cancel the animation if the component unmounts
    return () => cancelAnimationFrame(animationFrameId);
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {count}
      {isComplete && "+"}
    </span>
  );
};

export default CountUp;
