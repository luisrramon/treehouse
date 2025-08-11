"use client";

import { Button } from "@heroui/react";
import { motion } from "motion/react";

export default function HeroSection() {
    return (
        <section className="relative flex flex-col items-center justify-center min-h-screen bg-[#f3e8ff] overflow-hidden">
            {/* Animated pastel blob behind content */}
            <motion.div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
                initial={{scale: 0.9, rotate: 0 }}
                animate= {{ scale: 1.1, rotate: 360 }}
                transition={{ repeat: Infinity, duration: 16, ease: "linear" }}
                style={{
                    width: 460,
                    height: 460,
                    background: "radial-gradient(circle at 60% 40%, #a7ffe7 50%, #f3e8ff 100%)",
                    borderRadius: "50%",
                    filter: "blur(45px)",
                    opacity: 0.7
                }}
            />
            {/* Foreground content */}
            <div className="relative z-10 text-center px-6">
                <img
                    src="public/globe.svg"
                    alt="Globe Icon"
                    className="w-40 h-40 rounded-full shadow-2xl border-8 border-white mx-auto"
                />
                <h1 className="mt-8 text-5xl font-bold text-[#7c3aed]">Luis Ramon</h1>
                <p className="mt-3 text-lg text-[#6b7280]">Building modern web experiences.</p>
                <div className="mt-6 flex gap-3 justify-center">
                    <Button as="a" href="#projects" color="primary">View Projects</Button>
                    <Button as="a" href="#contact" variant="bordered">Contact</Button>
                </div>
            </div>
        </section>
    );
}