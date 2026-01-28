"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useState } from "react";

export default function FeaturedSketch() {
    const [focusedCard, setFocusedCard] = useState<number | null>(null);

    return (
        <section className="w-full min-h-screen bg-linear-to-b from-stone-50 via-stone-50 via-65% to-neutral-800 flex items-center justify-center p-4 overflow-hidden relative">
            <div className="max-w-4xl w-full flex flex-col items-center pt-10">



                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-20%" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col items-center text-center mb-12"
                >
                    <h2 className="font-(family-name:--font-cursive) text-4xl md:text-5xl font-bold text-stone-800 mb-4 tracking-tight">
Togetherness                    </h2>
 <h2 className="font-(family-name:--font-cursive) text-4xl md:text-5xl font-bold text-stone-800 mb-4 tracking-tight">
&                    </h2>
 <h2 className="font-(family-name:--font-cursive) text-4xl md:text-5xl font-bold text-stone-800 mb-4 tracking-tight">
Forever❤️              </h2>
                    <p className="text-stone-500 max-w-lg mx-auto font-light text-lg">
                       Cheers to every moment we spent together ✨
                    </p>
                </motion.div>

                {/* Main Feature: Sketch 6 (Restored) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 1, ease: [0.17, 0.55, 0.55, 1], delay: 0.2 }}
                    className="mb-20"
                >
                    <Image
                        src="/photo/sketch6.png"
                        alt="Featured Sketch"
                        height={700}
                        width={700}
                        className="object-fill rounded-sm "
                    />
                </motion.div>


                {/* Floating Cards Section for Sketch 1, 2, 3 */}
                <div className="mt-10 font-(family-name:--font-geist-sans) text-stone-500 text-sm tracking-widest uppercase opacity-70">Click on an image to view</div>
                <div className="w-full max-w-6xl  relative min-h-[600px] flex items-center justify-center">
                    
                    {/* Card 1 */}
                    <motion.div 
                        initial={{ opacity: 0, x: -100, rotate: -10 }}
                        whileInView={{ opacity: 1, x: 0, rotate: -6 }}
                        whileHover={{ scale: 1.1, rotate: 0, zIndex: 10 }}
                        animate={focusedCard === 1 ? { scale: 1, rotate: 0, zIndex: 50, x: 0 } : undefined}
                        onClick={() => setFocusedCard(focusedCard === 1 ? null : 1)}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                        className="absolute left-4 md:left-20 top-10 bg-white p-4 pb-12 shadow-2xl rounded-sm transform origin-bottom-left w-[280px] md:w-[320px] cursor-pointer"
                    >
                        <div className="relative aspect-3/4 w-full overflow-hidden bg-stone-100">
                             <Image
                                src="/photo/sketch1.png"
                                alt="Sketch 1"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="mt-4 font-(family-name:--font-cursive) text-center text-stone-600 text-xl rotate-1">
                            First spark ✨
                        </div>
                    </motion.div>

                    {/* Card 2 (Sketch 2) */}
                    <motion.div 
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0, rotate: 3 }}
                        whileHover={{ scale: 1.1, rotate: 0, zIndex: 10 }}
                        animate={focusedCard === 2 ? { scale: 1, rotate: 0, zIndex: 50, y: 0 } : undefined}
                        onClick={() => setFocusedCard(focusedCard === 2 ? null : 2)}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                        className="relative z-10 bg-white p-4 pb-12 shadow-2xl rounded-sm w-[300px] md:w-[350px] cursor-pointer"
                    >
                        <div className="relative aspect-3/4 w-full overflow-hidden bg-stone-100">
                             <Image
                                src="/photo/sketch2.png"
                                alt="Sketch 2"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="mt-4 font-(family-name:--font-cursive) text-center text-stone-600 text-2xl">
                            Moments ❤️ 
                        </div>
                    </motion.div>

                    {/* Card 3 */}
                    <motion.div 
                        initial={{ opacity: 0, x: 100, rotate: 8 }}
                        whileInView={{ opacity: 1, x: 0, rotate: 6 }}
                        whileHover={{ scale: 1.1, rotate: 0, zIndex: 10 }}
                        animate={focusedCard === 3 ? { scale: 1, rotate: 0, zIndex: 50, x: 0 } : undefined}
                        onClick={() => setFocusedCard(focusedCard === 3 ? null : 3)}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                        className="absolute right-4 md:right-20 bottom-10 bg-white p-4 pb-12 shadow-2xl rounded-sm transform origin-bottom-right w-[280px] md:w-[320px] cursor-pointer"
                    >
                        <div className="relative aspect-3/4 w-full overflow-hidden bg-stone-100">
                             <Image
                                src="/photo/sketch3.png"
                                alt="Sketch 3"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="mt-4 font-(family-name:--font-cursive) text-center text-stone-600 text-xl -rotate-1">
                            Memories 🌸
                        </div>
                    </motion.div>
                  

                </div>
               <div className="font-[family-name:var(--font-cursive)] text-3xl text-red-500 drop-shadow-[0_0_8px_rgba(245,39,235,0.5)]">
  "The kind that lives in shared silence, simple smiles, and ordinary moments that somehow become unforgettable.❤️"
</div>
            </div>
        </section>
    );
}