import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import './navbar.css';
import { links } from './links'
import LogoLink from "./NavLogo";

export default function Navbar() {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const isActive = (path) => {
        if (path === "/") {
            return location.pathname === "/";
        }
        return location.pathname.startsWith(path);
    };

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    useEffect(() => {
        setIsMenuOpen(false);
    }, [location.pathname]);

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    return (
        <>
            <nav className="bg-bgcolor shadow-lg relative z-0">
                <div className="mx-10 sm:mx-2 px-4 sm:px-8 py-4">
                    <div className="flex justify-between items-center">
                        {/* Logo */}
                        <LogoLink />

                        {/* Desktop Menu */}
                        <ul className="hidden md:flex space-x-8">
                            {links.map((link) => (
                                <li key={link.path}>
                                    <Link
                                        to={link.path}
                                        className={`relative font-medium transition-colors duration-300 group ${isActive(link.path)
                                            ? "text-accent"
                                            : "text-white hover:text-white"
                                            }`}
                                    >
                                        {link.name}
                                        <span
                                            className={`absolute -bottom-1 left-0 w-0 h-px transition-all duration-300 group-hover:w-full ${isActive(link.path)
                                                ? "bg-accent w-full"
                                                : "bg-white"
                                                }`}
                                        ></span>
                                    </Link>
                                </li>
                            ))}
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
            <div
                className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${isMenuOpen
                    ? 'opacity-100'
                    : 'opacity-0 pointer-events-none'
                    }`}
            >
                {/* Backdrop */}
                <div
                    className="absolute inset-0 bg-black bg-opacity-50"
                    onClick={closeMenu}
                ></div>

                {/* Menu Panel */}
                <div
                    className={`absolute right-0 top-0 h-full w-80 bg-gray-900 shadow-2xl transform transition-transform duration-300 ease-in-out ${isMenuOpen
                        ? 'translate-x-0'
                        : 'translate-x-full'
                        }`}
                >
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
                                {links.map((link) => (
                                    <li key={link.path}>
                                        <Link
                                            to={link.path}
                                            onClick={closeMenu}
                                            className={`block text-lg font-medium transition-colors duration-300 ${isActive(link.path)
                                                ? "text-accent"
                                                : "text-white hover:text-accent"
                                                }`}
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
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
