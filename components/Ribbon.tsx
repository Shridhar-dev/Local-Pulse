import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const Ribbon = ({ word, className }: { word: string; className?: string }) => {
  const firstText = useRef<HTMLParagraphElement>(null);
  const secondText = useRef<HTMLParagraphElement>(null);

  let xPercent = 0; // Position for first text
  let xPercent2 = 100; // Position for second text (starts after the first)

  useEffect(() => {
    if (secondText.current) {
      gsap.set(secondText.current, {
        left: (secondText.current as HTMLElement).getBoundingClientRect().width,
      });
    }

    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    // Move the firstText and secondText independently
    xPercent -= 0.025;
    xPercent2 -= 0.025;

    // Reset positions when they move out of view
    if (xPercent <= -100) {
      xPercent = 100;
    }
    if (xPercent2 <= -100) {
      xPercent2 = 100;
    }

    gsap.set(firstText.current, { xPercent });
    gsap.set(secondText.current, { xPercent: xPercent2 });

    requestAnimationFrame(animate); // Continue the animation
  };

  return (
    <div className={`${className} font-humane`}>
      <div
        className={`w-full h-40 flex items-center space-x-6 overflow-hidden font-medium uppercase whitespace-nowrap relative`}
      >
        {/* First text */}
        <p className="flex space-x-6 tracking-wider" ref={firstText}>
          {Array(20)
            .fill(word)
            .map((item, index) => (
              <span key={index}>{item}</span>
            ))}
        </p>

        {/* Second text (starts after first one) */}
        <p className="flex space-x-6 absolute left-full tracking-wider" ref={secondText}>
          {Array(20)
            .fill(word)
            .map((item, index) => (
              <span key={index}>{item}</span>
            ))}
        </p>
      </div>
    </div>
  );
};

export default Ribbon;
