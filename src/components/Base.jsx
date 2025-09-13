import { Outlet } from "react-router-dom";
import { Navbar, Footer, ParticleNetwork } from "./";

export default function Base() {
    return (
        <div className="relative min-h-screen bg-bgcolor overflow-hidden">
            {/* Particle network background */}
            <ParticleNetwork />

            <Navbar />

            {/* Main content */}
            <main className="px-4 sm:px-8 py-6 sm:py-16 relative z-10">
                <Outlet />
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}
