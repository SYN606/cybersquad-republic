import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import './navbar.css'

export default function Navbar() {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const isActive = (path) => {
        if (path === "/") {
            return location.pathname === "/";
        }
        return location.pathname.startsWith(path);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    // Close menu when route changes
    useEffect(() => {
        setIsMenuOpen(false);
    }, [location.pathname]);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    return (
        <>
            <nav className="bg-bgcolor shadow-lg relative z-0">
                <div className="max-w-6xl mx-auto px-4 sm:px-8 py-4">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center">
                            <Link
                                to="/"
                                data-text="CyberSquad Republic"
                                className="text-xl sm:text-2xl font-bold text-white hover:text-accent transition-colors duration-300 font-mono tracking-wide relative group glitch-text"
                            >
                                <span className="text-accent">C</span>yber
                                <span className="text-accent">S</span>quad
                                <span className="text-accent"> R</span>epublic
                            </Link>
                        </div>

                        {/* Desktop Menu */}
                        <ul className="hidden md:flex space-x-8">
                            <li>
                                <Link
                                    to="/"
                                    className={`relative font-medium transition-colors duration-300 group ${isActive("/")
                                        ? "text-accent"
                                        : "text-white hover:text-white"
                                        }`}
                                >
                                    Home
                                    <span className={`absolute -bottom-1 left-0 w-0 h-px transition-all duration-300 group-hover:w-full ${isActive("/") ? "bg-accent w-full" : "bg-white"
                                        }`}></span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/about"
                                    className={`relative font-medium transition-colors duration-300 group ${isActive("/about")
                                        ? "text-accent"
                                        : "text-white hover:text-white"
                                        }`}
                                >
                                    About
                                    <span className={`absolute -bottom-1 left-0 w-0 h-px transition-all duration-300 group-hover:w-full ${isActive("/about") ? "bg-accent w-full" : "bg-white"
                                        }`}></span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/contact"
                                    className={`relative font-medium transition-colors duration-300 group ${isActive("/contact")
                                        ? "text-accent"
                                        : "text-white hover:text-white"
                                        }`}
                                >
                                    Contact
                                    <span className={`absolute -bottom-1 left-0 w-0 h-px transition-all duration-300 group-hover:w-full ${isActive("/contact") ? "bg-accent w-full" : "bg-white"
                                        }`}></span>
                                </Link>
                            </li>
                        </ul>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={toggleMenu}
                            className="md:hidden text-white hover:text-accent transition-colors duration-300 z-50"
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Off-Canvas Mobile Menu */}
            <div className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}>
                {/* Backdrop */}
                <div
                    className="absolute inset-0 bg-black bg-opacity-50"
                    onClick={closeMenu}
                ></div>

                {/* Menu Panel */}
                <div className={`absolute right-0 top-0 h-full w-80 bg-gray-900 shadow-2xl transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}>
                    <div className="flex flex-col h-full">
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b border-gray-700 z-10">
                            <h2 className="text-xl font-bold text-accent">Menu</h2>
                            <button
                                onClick={closeMenu}
                                className="text-white hover:text-accent transition-colors duration-300"
                                aria-label="Close menu"
                            >
                                <FaTimes size={24} />
                            </button>
                        </div>

                        {/* Navigation Links */}
                        <nav className="flex-1 p-6">
                            <ul className="space-y-6">
                                <li>
                                    <Link
                                        to="/"
                                        onClick={closeMenu}
                                        className={`block text-lg font-medium transition-colors duration-300 ${isActive("/")
                                            ? "text-accent"
                                            : "text-white hover:text-white"
                                            }`}
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/about"
                                        onClick={closeMenu}
                                        className={`block text-lg font-medium transition-colors duration-300 ${isActive("/about")
                                            ? "text-accent"
                                            : "text-white hover:text-accent"
                                            }`}
                                    >
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/contact"
                                        onClick={closeMenu}
                                        className={`block text-lg font-medium transition-colors duration-300 ${isActive("/contact")
                                            ? "text-accent"
                                            : "text-white hover:text-accent"
                                            }`}
                                    >
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </nav>

                        {/* Footer */}
                        <div className="p-6 border-t border-gray-700">
                            <div className="text-center">
                                <p className="text-gray-400 text-sm">CyberSquad Republic</p>
                                <p className="text-gray-500 text-xs mt-1">Building the future</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
