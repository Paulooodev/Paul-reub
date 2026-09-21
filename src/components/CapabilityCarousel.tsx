"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const SLIDE_EASE = [0.2, 0.7, 0.2, 1] as const;

export default function CapabilityCarousel({
    images,
    alt,
}: {
    images: string[];
    alt: string;
}) {
    const [index, setIndex] = useState(0);
    const [paused, setPaused] = useState(false);

    // Only runs when: not paused AND more than one image.
  // The cleanup return clears the timer whenever those change 

  useEffect(() => {
    // Before starting a timer, it checks two things:
    // Is the carousel paused?
    // Do we have less than 2 images?
    // If either is true, it returns immediately, stopping the auto-play before it starts.
    if(paused || images.length < 2) return;

    // setInterval starts a repeating timer that fires every 4,000 milliseconds (4 seconds). 
    // setIndex updates to show the next image.
    const timer = setInterval(() => {
        setIndex((i) => (i + 1) % images.length);
    }, 4000);

    // Cleanup function
    return () => clearInterval(timer)
  }, [paused, images.length]);

  useEffect(() => {
    images.forEach((src) => {
        const img = new window.Image();
        img.src = src
    });
  }, [images]);

  // Manual controls
  const goPrev = () =>
    setIndex((i) => (i - 1 + images.length) % images.length);
  const goNext = () => 
    setIndex((i) => (i + 1) % images.length);

  // No images → render nothing; caller shows the placeholder instead
  if (images.length === 0) return null;

  return (
    <div 
       onMouseEnter={() => setPaused(true)}
       onMouseLeave={() => setPaused(false)}
       className="relative h-full w-full overflow-hidden"
    >
            <motion.div
               className="flex h-full w-full"
               animate={{ x: `-${index * 100}%` }}
               transition={{ duration: 0.55, ease: SLIDE_EASE }}
            >
             {images.map((src, i) => (
                <div key={src} className="relative h-full w-full flex-none">
                    <Image 
                      src={src}
                      alt={`${alt} (image ${i + 1} of ${images.length})`}
                      fill
                      sizes="(max-width: 768px) 100vw, 520px"
                      priority={i === 0}
                      loading={i < 2 ? "eager" : "lazy"}
                      className="object-cover"
                    />
                </div>
             ))}
            </motion.div>

        {images.length > 1 && (
            <>
              {/* Side arrows */}
              <button
                 onClick={goNext}
                 aria-label="Next image"
                 className="absolute top-1/2 right-3 flex h-9 w-9 -translate-y-1/2 items-center
                       justify-center rounded-full border border-white/20 bg-night/50
                       text-sm text-paper backdrop-blur-[4px] transition-colors
                       hover:border-brand hover:text-brand"
              >
                <ArrowRight strokeWidth={1} size={16} />
              </button> 
              <button
                 onClick={goPrev}
                 aria-label="Previous image"
                 className="absolute top-1/2 left-3 flex h-9 w-9 -translate-y-1/2 items-center
                       justify-center rounded-full border border-white/20 bg-night/50
                       text-sm text-paper backdrop-blur-[4px] transition-colors
                       hover:border-brand hover:text-brand"
              >
                <ArrowLeft strokeWidth={1} size={16} />
              </button> 
                

             {/* Dot indicators */}
          <div className="absolute bottom-3.5 left-1/2 flex -translate-x-1/2 gap-2">
            {images.map((img, i) => (
                <button 
                  key={img}
                  onClick={() => setIndex(i)} 
                  aria-label={`Go to image ${i + 1}`}
                  className={`h-1.5 w-1.5 rounded-full transition-colors duration-300 ${
                    i === index ? "bg-brand" : "bg-white/40 hover:bg-white/70"
                  }`}
                />
            ))}
          </div>   
            </>
        )}
    </div>
  );
}

