"use client";

import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useState } from "react";

const initialPhotos = [
    "/photo/sketch1.png",
    "/photo/sketch2.png",


    "/photo/sketch3.png",
];

export default function SketchCards() {
    const [cards, setCards] = useState(initialPhotos);

    const moveToEnd = (from: number) => {
        setCards((current) => {
            const newCards = [...current];
            const movedCard = newCards.splice(from, 1)[0];
            newCards.unshift(movedCard); // Move to bottom (start of array)
            return newCards;
        });
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-[500px] w-full relative perspective-1000 overflow-visible">

            {/* Container to center the stack */}
            <div className="relative w-72 h-96 sm:w-80 sm:h-[420px]">
                {cards.map((src, index) => {
                    const isTop = index === cards.length - 1;

                    return (
                        <Card
                            key={index} // Use src as key to maintain identity across reorders
                            src={src}
                            index={index}
                            isTop={isTop}
                            total={cards.length}
                            onSwipe={() => moveToEnd(index)}
                        />
                    );
                })}
            </div>

            <div className=" bottom-4 left-0 right-0 text-center flex flex-col items-center gap-2 pointer-events-none z-10">
                <span className="text-neutral-500 text-sm font-medium animate-pulse">
                    Swipe cards to explore
                </span>
                <span className="font-[family-name:var(--font-cursive)] text-3xl text-pink-500 drop-shadow-[0_0_8px_rgba(236,72,153,0.8)] mt-2">
                    Moment not meant to be forgotten
                </span>
            </div>
        </div>
    );
}

function Card({
    src,
    index,
    isTop,
    total,
    onSwipe
}: {
    src: string;
    index: number;
    isTop: boolean;
    total: number;
    onSwipe: () => void
}) {
    const x = useMotionValue(0);
    const rotate = useTransform(x, [-200, 200], [-25, 25]); // Rotate while dragging
    const opacity = useTransform(x, [-200, -100, 0, 100, 200], [0, 1, 1, 1, 0]); // Fade out on extreme swipe

    // Stack visuals
    // Index 0 is bottom, Index (total-1) is top.
    // We want the top card at 0 offset, others slightly behind and smaller
    const reverseIndex = total - 1 - index; // 0 for top, 1 for second...
    const scale = 1 - reverseIndex * 0.05;
    const yOffset = reverseIndex * 15; // Move visible cards down slightly to show depth

    return (
        <motion.div
            style={{
                zIndex: index,
                x: isTop ? x : 0,
                rotate: isTop ? rotate : (index % 2 === 0 ? 2 : -2), // Slight random tile for background cards
                opacity: isTop ? opacity : 1 - reverseIndex * 0.2, // Fade background cards slightly
                scale: isTop ? 1 : scale,
                y: isTop ? 0 : -yOffset, // visually stack them upwards or downwards? Let's stack them "behind"
            }}
            drag={isTop ? "x" : false}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.1}
            onDragEnd={(_, info) => {
                if (Math.abs(info.offset.x) > 100) {
                    onSwipe();
                }
            }}
            className={cn(
                "absolute top-0 left-0 w-full h-full bg-white rounded-3xl shadow-2xl overflow-hidden",
                "border border-white/20 select-none", // Glassy border feel
                isTop ? "cursor-grab active:cursor-grabbing" : "cursor-default"
            )}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 20
            }}
        >
            <div className="relative w-full h-full">
                <Image
                    src={src}
                    alt="Sketch Card"
                    fill
                    className="object-cover pointer-events-none"
                    priority={isTop}
                />
                {/* Gradient overlay for text */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <h3 className="text-white font-bold text-xl tracking-wide">
                        Sketch 0{src.match(/\d/)?.[0] || "?"}
                    </h3>
                </div>
            </div>
        </motion.div>
    );
}
