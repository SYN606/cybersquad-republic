import React from "react";
import { FaGithub, FaInstagram, FaDiscord } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-gray-200 mt-auto border-t border-gray-700 shadow-inner">
            <div className="max-w-6xl mx-auto px-4 sm:px-8 py-8 sm:py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
                    {/* Brand Section */}
                    <div className="text-center sm:text-left">
                        <h3 className="text-lg sm:text-xl font-bold text-green-400 mb-3 sm:mb-4">
                            CyberSquad Republic
                        </h3>
                        <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                            falana fistana tagline discuss krenge
                        </p>
                    </div>

                    {/* Contact Info */}
                    <div className="flex justify-center sm:justify-center">
                        <address className="text-center not-italic">
                            <h4 className="text-base sm:text-lg font-semibold text-green-400 mb-3 sm:mb-4">
                                Contact Info
                            </h4>
                            <p className="text-gray-200 mb-2 text-sm sm:text-base">
                                Email:{" "}
                                <a
                                    href="mailto:contact@cybersquad.com"
                                    className="hover:text-green-400 underline transition-colors duration-300"
                                >
                                    contact@cybersquad.com
                                </a>
                            </p>
                            <p className="text-gray-200 text-sm sm:text-base">
                                Phone:{" "}
                                <a
                                    href="tel:+919876543210"
                                    className="hover:text-green-400 underline transition-colors duration-300"
                                >
                                    +91-987-654-3210
                                </a>
                            </p>
                        </address>
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-center sm:justify-center">
                        <div className="text-center">
                            <h4 className="text-base sm:text-lg font-semibold text-green-400 mb-3 sm:mb-4">
                                Follow Us
                            </h4>
                            <div className="flex space-x-4 justify-center">
                                <a
                                    href="https://github.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Visit our GitHub"
                                    className="text-gray-300 hover:text-green-400 transform hover:scale-110 transition-transform duration-300"
                                >
                                    <FaGithub className="w-5 h-5 sm:w-6 sm:h-6" />
                                </a>
                                <a
                                    href="https://instagram.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Visit our Instagram"
                                    className="text-gray-300 hover:text-pink-400 transform hover:scale-110 transition-transform duration-300"
                                >
                                    <FaInstagram className="w-5 h-5 sm:w-6 sm:h-6" />
                                </a>
                                <a
                                    href="https://discord.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Join us on Discord"
                                    className="text-gray-300 hover:text-purple-400 transform hover:scale-110 transition-transform duration-300"
                                >
                                    <FaDiscord className="w-5 h-5 sm:w-6 sm:h-6" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-700 pt-4 sm:pt-6 text-center">
                    <p className="text-gray-400 text-sm sm:text-base">
                        &copy; 2025 CyberSquad Republic. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
