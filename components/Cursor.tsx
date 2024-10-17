'use client'
import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const Cursor = () => {
  useEffect(() => {
    const cursor = document.getElementById('custom-cursor');
    const elements = document.querySelectorAll('.view');

    const onMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      gsap.to(cursor, { x: clientX, y: clientY });
    };

    const onMouseEnterElement = (event: Event) => {
      gsap.to(cursor, { scale: 4 });
    };

    const onMouseLeaveElement = () => {
      gsap.to(cursor, { scale: 1 });
    };

    document.addEventListener('mousemove', onMouseMove as EventListener);

    elements.forEach((element) => {
      element.addEventListener('mouseenter', onMouseEnterElement as EventListener);
      element.addEventListener('mouseleave', onMouseLeaveElement as EventListener);
    });

    return () => {
      document.removeEventListener('mousemove', onMouseMove as EventListener);
      elements.forEach((element) => {
        element.removeEventListener('mouseenter', onMouseEnterElement as EventListener);
        element.removeEventListener('mouseleave', onMouseLeaveElement as EventListener);
      });
    };
  }, []);

  return (
    <div id="custom-cursor" className="fixed top-0 left-0 size-[20px] rounded-full pointer-events-none z-[9999999] mix-blend-difference !cursor-none p-2 sm:flex justify-center items-center bg-white">
    </div>
  );
};

export default Cursor;