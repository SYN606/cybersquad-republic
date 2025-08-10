import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "./";

export default function Base() {
    return (
        <div className="min-h-screen bg-bgcolor">
            <Navbar />
            <main className="px-4 sm:px-8 py-6 sm:py-16">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
