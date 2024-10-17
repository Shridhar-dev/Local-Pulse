import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import Link from 'next/link';

const DURATION = 0.25;
const STAGGER = 0.025;

interface FlipLinkProps {
  href: string;
  children: string;
  state?:boolean
}

export const FlipLink: React.FC<FlipLinkProps> = ({ children, href,state }) => {
  const linkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!linkRef.current) return;

   

    const link = linkRef.current;
    const topChars = link.querySelectorAll('.top-chars span');
    const bottomChars = link.querySelectorAll('.bottom-chars span');

    gsap.set(bottomChars, { yPercent: 100 });

    const tl = gsap.timeline({ paused: true });

    tl.to(topChars, {
      yPercent: -100,
      duration: DURATION,
      ease: 'power2.inOut',
      stagger: STAGGER,
    })
      .to(bottomChars, {
        yPercent: 0,
        duration: DURATION,
        ease: 'power2.inOut',
        stagger: STAGGER,
      }, 0);

    link.addEventListener('mouseenter', () => tl.play());
    link.addEventListener('mouseleave', () => tl.reverse());

    return () => {
      link.removeEventListener('mouseenter', () => tl.play());
      link.removeEventListener('mouseleave', () => tl.reverse());
    };
    
  }, [children]);
useEffect(() => {
    const link = linkRef.current;
    const topChars = link?.querySelectorAll('.top-chars span');
    if (link && topChars) {
        gsap.fromTo(
            topChars,
            {
                yPercent: 100,
                opacity: 0,
            },
            {
                delay: 1.5,
                yPercent: 0,
                opacity: 1,
                duration: 0.6,
                ease: 'power4.out',
                stagger: STAGGER,
            }
        );
    }
}, [state,children]);

  return (
    <Link
      ref={linkRef}
      href={href}
      className={`relative font-grotesque overflow-hidden whitespace-nowrap flex`}
      style={{ lineHeight: 1 }}
    >
      <div className="top-chars flex overflow-hidden">
        {children.split('').map((char, index) => (
          <span key={index} className="inline-block text-[#fbfaf3]">{char}</span>
        ))}
      </div>
      <div className="bottom-chars absolute inset-0">
        {children.split('').map((char, index) => (
          <span key={index} className="inline-block text-[#ff7955]">{char}</span>
        ))}
      </div>
    </Link>
  );
};
