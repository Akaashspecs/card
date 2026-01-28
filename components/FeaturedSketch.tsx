"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function FeaturedSketch() {
    return (
        <section className="w-full min-h-screen bg-linear-to-b from-stone-50 via-stone-50 via-85% to-neutral-800 flex items-center justify-center p-4 overflow-hidden relative">
            <div className="max-w-4xl w-full flex flex-col items-center">



                <motion.div
                    initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 1, ease: [0.17, 0.55, 0.55, 1], delay: 0.2 }}

                >
                    {/* Matte board effect */}



                    <Image
                        src="/photo/sketch6.png"
                        alt="Featured Sketch"

                        height={700}
                        width={700}
                        className="object-fill"
                    />


                    {/* Signature */}

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

                {/* Sketch 1 - Newspaper Layout Section */}
                <div className="flex flex-col gap-8 w-full max-w-4xl my-12 border-t border-b border-stone-200 py-12">

                    {/* Upper Row: Text Left | Image Right */}
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                        {/* Text Column */}
                        <div className="flex-1 flex flex-col gap-4">
                            <span className="text-xs font-bold tracking-widest text-stone-400 uppercase">Exhibit A</span>
                            <h3 className="font-serif text-4xl font-bold text-stone-800 leading-tight">
                                The Genesis of Form
                            </h3>
                            <p className="text-stone-600 font-serif text-lg leading-relaxed">
                                Before the final masterpiece, there was this—the first breath of inspiration captured on paper.
                                Notice the raw, unrefined lines that map out the initial energy of the subject.
                                It is here that the artist's intent is most visible, stripped of all pretension.
                            </p>
                        </div>

                        {/* Image Column */}
                        <div className="w-full md:w-5/12 relative group">
                            <div className="relative aspect-[3/4] w-full bg-stone-100 p-2 shadow-sm rotate-1 transition-transform duration-500 group-hover:rotate-0">
                                <Image
                                    src="/photo/sketch1.png"
                                    alt="First Draft Sketch"
                                    fill
                                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                                />
                                <div className="absolute bottom-2 right-2 text-[10px] font-mono text-stone-400">REF: SK-01</div>
                            </div>
                        </div>
                    </div>

                    {/* Lower Row: Multi-column Text */}
                    <div className="w-full">
                        <div className="columns-1 md:columns-2 gap-8 text-stone-500 font-light text-justify text-sm leading-6 border-t border-stone-100 pt-6">
                            <p className="mb-4 first-letter:float-left first-letter:text-3xl first-letter:font-bold first-letter:mr-2 first-letter:text-stone-800">
                                This particular piece was found in the archives, dating back to the early conceptual phase.
                                The texture of the paper suggests a hasty capture of a fleeting moment, perhaps drawn in a
                                bustling café or a quiet park bench. The shadows are heavy, indicating a strong light source
                                from the upper right, a technique the artist would later refine.
                            </p>
                            <p>
                                Critics often overlook these preliminary works, yet they hold the key to understanding the
                                evolution of the style. Note the hesitation in the curvature—a search for the perfect line
                                that would eventually define the collection. It stands as a humble yet powerful beginning
                                to what would become a celebrated series.
                            </p>
                        </div>
                    </div>

                </div>
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