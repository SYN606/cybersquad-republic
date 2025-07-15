import { Outlet } from "react-router-dom";

export default function Base() {
    return (
        <>
            {/* Navbar */}
            <Outlet />
            {/* Footer */}
        </>
    );
}