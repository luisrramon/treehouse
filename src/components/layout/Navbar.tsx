"use client";
import { Button } from "@heroui/react";
export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b">
            <div className="mx-auto max-w-6xl px-6 h-14 flex items-center justify-between">
                <a href="/" className="font-bold">Luis Ramon</a>
                <div className="flex gap-4 items-center">
                    <a href="#about" className="hover:underline">About</a>
                    <a href="#experience" className="hover:underline">Experience</a>
                    <a href="#projects" className="hover:underline">Projects</a>
                    <a href="#photography" className="hover:underline">Photography</a>
                    <Button as="a" href="#contact" color="primary" size="sm">Contact</Button>
                </div>
            </div>
        </nav>
    )
}