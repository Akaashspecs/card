"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useState } from "react";

const photos = [
       "/our/photo10.jpeg",
   
    "/our/photo1.jpeg",
    "/our/photo11.jpeg",
  
 
"/our/photo3.jpeg",
"/our/photo4.jpeg",

"/our/photo6.jpeg",

"/our/photo8.jpeg",
"/our/photo5.jpeg",
"/our/photo9.jpeg",

   "/our/photo2.jpeg",
"/our/photo12.jpeg",
 
];

export default function SketchCards() {
    const [selectedImage, setSelectedImage] = useState(photos[0]);

    return (
        <div className="flex flex-col items-center justify-center w-full gap-8 py-8 px-4">
            
            {/* Main Big Image Display */}
            <div className="relative w-full max-w-2xl aspect-[4/5] sm:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-neutral-800">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedImage}
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="absolute inset-0"
                    >
                        <Image
                            src={selectedImage}
                            alt="Selected Sketch"
                            fill
                            className="object-cover"
                            priority
                        />
                        {/* Overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                        <div className="absolute bottom-6 left-6 text-white pointer-events-none">
                            <p className="text-sm font-medium opacity-80 uppercase tracking-wider">Featured Sketch</p>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Horizontal Scrollable Thumbnails */}
            <div className="w-full max-w-4xl relative">
                 <div className="flex overflow-x-auto gap-4 p-4 pb-6 snap-x snap-mandatory scrollbar-hide mask-linear-fade">
                    {photos.map((src, index) => (
                        <button
                            key={`${src}-${index}`}
                            onClick={() => setSelectedImage(src)}
                            className={cn(
                                "relative flex-shrink-0 w-24 h-32 sm:w-32 sm:h-40 rounded-xl overflow-hidden transition-all duration-300 snap-center focus:outline-none focus:ring-2 focus:ring-pink-500",
                                selectedImage === src 
                                    ? "ring-2 ring-pink-500 scale-105 shadow-lg shadow-pink-500/20" 
                                    : "opacity-60 hover:opacity-100 hover:scale-105"
                            )}
                        >
                            <Image
                                src={src}
                                alt={`Sketch thumbnail ${index + 1}`}
                                fill
                                className="object-cover"
                            />
                        </button>
                    ))}
                 </div>
                 
                 <div className="text-center mt-2">
                    <p className="font-[family-name:var(--font-cursive)] text-2xl text-pink-500 drop-shadow-[0_0_8px_rgba(236,72,153,0.5)]">
                        Scroll left to explore
                    </p>
                 </div>
            </div>
        </div>
    );
}
