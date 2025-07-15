import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Base() {
    return (
        <div className="min-h-screen flex flex-col bg-gray-950">
            <Navbar />
            <main className="flex-1">
                <div className="px-4 sm:px-8 py-8 sm:py-16">
                    <div className="max-w-6xl mx-auto">
                        <Outlet />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}