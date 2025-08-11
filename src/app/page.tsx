import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";

export default function Page() {
    return (
        <>
            <Navbar />
            <main className="items-center">
                <HeroSection />
            </main>
            <Footer />
        </>
    );
}