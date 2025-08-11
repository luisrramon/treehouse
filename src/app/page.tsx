import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function Page() {
    return (
        <>
            <Navbar />
            <main className="min-h-[60vh] flex items-center justify-center">
                <h1 className="text-3xl font-bold">Luis Ramon – Portfolio</h1>
            </main>
            <Footer />
        </>
    );
}