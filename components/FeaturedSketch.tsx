"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function FeaturedSketch() {
    return (
        <section className="w-full min-h-screen bg-stone-50 flex items-center justify-center p-8 overflow-hidden relative">
            <div className="max-w-4xl w-full flex flex-col items-center">



                <motion.div
                    initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 1, ease: [0.17, 0.55, 0.55, 1], delay: 0.2 }}
                    className="relative w-full h-full shadow-2xl rounded-sm  bg-white"
                >
                    {/* Matte board effect */}



                    <Image
                        src="/photo/sketch4.png"
                        alt="Featured Sketch"

                        height={500}
                        width={500}
                        className="object-fill"
                    />


                    {/* Signature */}
                    <div className="absolute bottom-8 right-8 z-20 font-[family-name:var(--font-cursive)] text-stone-400 text-2xl opacity-70 rotate-[-5deg]">
                        Original Sketch
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-20%" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col items-center text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4 tracking-tight">
                        The Masterpiece
                    </h2>
                    <p className="text-stone-500 max-w-lg mx-auto font-light text-lg">
                        A closer look at the details that matter.
                    </p>
                </motion.div>

                <Image
                    src="/photo/sketch1.png"
                    alt="Featured Sketch"

                    height={500}
                    width={500}
                    className="object-fill rounded-2xl"
                />
                <Image
                    src="/photo/sketch2.png"
                    alt="Featured Sketch"

                    height={500}
                    width={500}
                    className="object-fill rounded-2xl"
                />
                <Image
                    src="/photo/sketch3.png"
                    alt="Featured Sketch"

                    height={500}
                    width={500}
                    className="object-fill rounded-2xl"
                />
            </div>
        </section>
    );
}
