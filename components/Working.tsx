//@ts-nocheck
"use client"
import Image from "next/image"
import Disk from "@/assets/disc.png"
import StepCard from "./StepCard"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger)

const stepCardsData = [
    {
      bgColor: '#9ac5fa',
            title: '2 Step Registration',
      description: 'Using just your Aadhaar and PAN card, you can register on Local Pulse and reach a wider audience.'
    },
    {
      bgColor: '#f5c1ab',
            title: 'Easy Listing Process',
      description: 'List your products or services quickly with our user-friendly interface. Add photos, descriptions, and set your prices.'
    },
    {
      bgColor: '#f8d38b',
            title: 'Connect with Community',
      description: 'Engage with local buyers and sellers. Build relationships and grow your network within your community.'
    },
    {
      bgColor: '#a8a8ef',
            title: 'Secure Transactions',
      description: 'Enjoy safe and secure transactions with our integrated payment system. Buyer protection and seller guarantees included.'
    }
  ]

function Working() {
    const containerRef = useRef(null);
    const sectionRef = useRef(null);
    const scrollStepsRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        const section = sectionRef.current;
        const scrollSteps = scrollStepsRef.current;

        if (!container || !section || !scrollSteps) return;

        
        gsap.set(container, {
            height: () => {
                const totalScroll = scrollSteps.scrollWidth - window.innerWidth + window.innerHeight;
                return `${totalScroll}px`;
            }
        });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container,
                start: "top top",
                end: "bottom bottom",
                scrub: true,
                pin: section,
                anticipatePin: 1,
                invalidateOnRefresh: true,
            }
        });

        tl.to(scrollSteps, {
            x: () => -(scrollSteps.scrollWidth - window.innerWidth),
            ease: "none"
        });

        return () => {
            tl.kill();
        };
    }, []);

    return (
        <div ref={containerRef} className="relative">
            <div ref={sectionRef} className="pt-10 flex flex-col justify-between min-h-screen bg-[#1d1d1d] overflow-hidden" id="working">
                <div className="flex flex-col md:flex-row items-start justify-between px-10">
                    <p className="text-5xl md:text-8xl font-grotesqueBold">How does it work?</p>
                    <p className="font-thin text-2xl mt-5">Reaching your customers is more <br/> simpler than you think!</p>
                    <div className="text-4xl hidden md:block animate-spin duration-1000 self-center">
                        <Image
                            src={Disk.src}
                            height={Disk.height - 400}
                            width={Disk.width - 400}
                            alt=""
                            className="" 
                        />
                    </div>
                </div>
                <div ref={scrollStepsRef} className="flex w-full relative" id="scroll-steps">
                {stepCardsData.map((card, index) => (
        <StepCard key={index} {...card} />
      ))}
                </div>
            </div>
        </div>
    )
}

export default Working