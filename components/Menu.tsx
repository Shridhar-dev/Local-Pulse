"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { FlipLink } from "./Zoop";
import MovingTextRibbon from "./Ribbon";


interface MenuSectionProps {
  title: string;
  links: string[];
}

const MenuSection: React.FC<MenuSectionProps> = ({ title, links }) => (
  <div className="flex flex-col items-center mb-8 md:mb-0">
    <h3 className="text-3xl font-bold mb-4 text-gray-800">{title}</h3>
    <ul className="space-y-2">
      {links.map((link, index) => (
        <li key={index} className="footer-link view hover:underline">
          <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">
            {link}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const Menu = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const linkRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement[]>([]);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const container = containerRef.current;
    const circle = circleRef.current;
    const hamburger = hamburgerRef.current;
    const menu = menuRef.current;
    const cursor = document.getElementById("custom-cursor");

    buttonRef.current.forEach((div, index) => {
      gsap.fromTo(
        div,
        {
          width: 0,
          duration: 1,
          opacity: 0,
        },
        {
          width: "1.25rem",
          duration: 0.5,
          opacity: 1,
        }
      );
    });

    if (!container || !circle || !hamburger || !menu || !cursor) return;

    const handleMouseLeave = () => {
      gsap.to(container, { duration: 0.3, scale: 1 });
      gsap.to([circle, hamburger], {
        duration: 0.3,
        scale: 1,
        x: 0,
        y: 0,
        backgroundColor: "transparent",
      });
      gsap.to(cursor, { opacity: 1 });
    };

    const handleMouseEnter = () => {
      gsap.to(container, {
        duration: 0.3,
        transformOrigin: "center center",
        scale: 1.2,
      });
      gsap.to(circle, {
        duration: 0.3,
        scale: 0.85,
        backgroundColor: "#f5f1eb",
      });
      gsap.to(cursor, { opacity: 0 });
    };

    const parallaxIt = (
      e: MouseEvent,
      target: HTMLElement,
      movement: number
    ) => {
      const boundingRect = container.getBoundingClientRect();
      const relX = e.clientX - boundingRect.left;
      const relY = e.clientY - boundingRect.top;

      gsap.to(target, {
        duration: 0.3,
        x: ((relX - boundingRect.width / 2) / boundingRect.width) * movement,
        y: ((relY - boundingRect.height / 2) / boundingRect.height) * movement,
        ease: "power2.out",
      });
    };

    const handleMouseMove = (e: MouseEvent) => {
      parallaxIt(e, circle, 80);
      parallaxIt(e, hamburger, 50);
    };

    container.addEventListener("mouseleave", handleMouseLeave);
    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mousemove", handleMouseMove);

    return () => {
      container.removeEventListener("mouseleave", handleMouseLeave);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const menu = menuRef.current;
    gsap.fromTo(
      ".footer-link",
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out",
        delay: 0.8,
      }
    );

    linkAnimation();
    if (!menu) return;

    if (menuOpen) {
      gsap.to(menu, { duration: 0.5, bottom: 0, display: "flex" });
      document.body.style.overflow = "hidden";
    } else {
      gsap.to(menu, { duration: 0.5, bottom: "-100%", display: "hidden" });
      document.body.style.overflow = "";
    }
  }, [menuOpen]);

  const setButtonRef = (el: HTMLDivElement | null, index: number) => {
    if (el) {
      buttonRef.current[index] = el;
    }
  };

  const linkAnimation = () => {
    gsap.fromTo(
      ".link",
      {
        opacity: 0,
        yPercent: 40,
      },
      {
        opacity: 1,
        yPercent: 0,
        duration: 0.5,
        ease: "power4.out",
        stagger: 0.4,
        delay: 0.5,
      }
    );
  };
  return (
    <>
      <div
        className={`w-full flex justify-end fixed md:top-10 top-6 left-0 z-[99999] transition-all duration-300 mix-blend-difference`}
      >
        <div
          ref={containerRef}
          className={`w-40 h-32 flex justify-center items-center`}
        >
          <div
            ref={circleRef}
            className="circle absolute size-16 border-[1px] border-gray-600 rounded-full "
          ></div>
          <div ref={hamburgerRef} className="hamburger">
            <div
              onClick={(event) => {
                event.preventDefault();
                toggleMenu();
              }}
              className="md:size-24 size-10 flex flex-col justify-center items-center mix-blend-difference group"
            >
              <div
                className={` h-[0.14rem] rounded-md my-1 duration-500 transition-all transform ease-in-out bg-[#fbfaf3] group-hover:bg-black  ${
                  menuOpen
                    ? "rotate-[45deg] translate-y-0.5 "
                    : "translate-y-0 "
                }`}
                ref={(el) => setButtonRef(el, 0)}
              ></div>
              <div
                className={` h-[0.14rem] rounded-md my-1 duration-500 transform transition-all ease-in-out bg-[#fbfaf3] group-hover:bg-black  ${
                  menuOpen
                    ? "-rotate-[45deg] -translate-y-2  "
                    : "translate-y-0 "
                }`}
                ref={(el) => setButtonRef(el, 1)}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="menu"
        ref={menuRef}
        className={`menuBox w-full h-screen fixed transform transition-all ease-in-out z-50 bg-[#f5f1eb] hidden justify-center items-center`}
      >
        {/* <div className="flex flex-col sm:flex-row sm:justify-center justify-around items-center size-4/5 relative font-grotesque">


        </div> */}
         <div className="flex flex-col justify-center items-start w-full h-full px-4 sm:px-8 md:px-16 lg:px-24 pt-24 pb-32 font-grotesque">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
            <MenuSection
              title="Home Services"
              links={["Contractors", "Electricians", "Home Cleaners", "HVAC", "Landscaping", "Locksmiths", "Movers", "Plumbers"]}
            />
            <MenuSection
              title="Restaurants"
              links={["Takeout", "Burgers", "Chinese", "Italian", "Reservations", "Delivery", "Mexican", "Thai"]}
            />
            <MenuSection
              title="Auto Services"
              links={["Auto Repair", "Auto Detailing", "Body Shops", "Car Wash", "Car Dealers", "Oil Change", "Parking", "Towing"]}
            />
            <MenuSection
              title="More"
              links={["Dry Cleaning", "Phone Repair", "Bars", "Nightlife", "Hair Salons", "Gyms", "Massage", "Shopping"]}
            />
          </div>
        </div>
        <MovingTextRibbon
          word="LOCAL PULSE"
          className="w-screen text-[#f3e1c7] absolute bottom-0 sm:-rotate-[20deg] sm:left-24 sm:-bottom-12 md:left-96 md:bottom-0 bg-[#e9c490] sm:text-8xl text-8xl link"
        />

      </div>
    </>
  );
};

export default Menu;
