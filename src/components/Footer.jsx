import { FaGithub, FaGoogle, FaDiscord } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-gradient-to-r from-[#0d0d0d] via-[#111] to-[#0d0d0d] text-gray-200 mt-auto border-t border-gray-800 shadow-inner relative overflow-hidden">
            {/* Subtle glow background */}
            <div className="absolute inset-0">
                <div className="absolute w-72 h-72 bg-[#ff004c] opacity-10 blur-3xl top-0 left-0"></div>
                <div className="absolute w-72 h-72 bg-[#00fff0] opacity-10 blur-3xl bottom-0 right-0"></div>
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-8 py-8 sm:py-12 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">

                    {/* Brand Section */}
                    <div className="text-center sm:text-left">
                        <h3 className="text-lg sm:text-xl font-bold text-accent mb-3 sm:mb-4">
                            CyberSquad Republic
                        </h3>
                        <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                            "Defend. Innovate. Evolve." — A global hub for ethical hackers,
                            cybersecurity enthusiasts, and digital defenders.
                        </p>
                    </div>

                    {/* Contact Info */}
                    <div className="flex justify-center sm:justify-center">
                        <address className="text-center not-italic">
                            <h4 className="text-base sm:text-lg font-semibold text-accent mb-3 sm:mb-4">
                                Contact Info
                            </h4>
                            <p className="text-gray-200 mb-2 text-sm sm:text-base">
                                Email:{" "}
                                <a
                                    href="mailto:contact@cybersquad.com"
                                    className="hover:text-accent underline transition-colors duration-300"
                                >
                                    contact@cybersquad.com
                                </a>
                            </p>
                            <p className="text-gray-200 text-sm sm:text-base">
                                Phone:{" "}
                                <a
                                    href="tel:+919876543210"
                                    className="hover:text-accent underline transition-colors duration-300"
                                >
                                    +91-987-654-3210
                                </a>
                            </p>
                        </address>
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-center sm:justify-center">
                        <div className="text-center">
                            <h4 className="text-base sm:text-lg font-semibold text-accent mb-3 sm:mb-4">
                                Follow Us
                            </h4>
                            <div className="flex space-x-5 justify-center">
                                <a
                                    href="https://github.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Visit our GitHub"
                                    className="text-gray-300 hover:text-[#ff004c] transform hover:scale-110 transition-all duration-300 hover:drop-shadow-[0_0_6px_#ff004c]"
                                >
                                    <FaGithub className="w-6 h-6 sm:w-7 sm:h-7" />
                                </a>

                                <a
                                    href="https://forms.gle/your-google-form-link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Fill our Google Form"
                                    className="text-gray-300 hover:text-yellow-400 transform hover:scale-110 transition-all duration-300 hover:drop-shadow-[0_0_6px_#FFD700]"
                                >
                                    <FaGoogle className="w-6 h-6 sm:w-7 sm:h-7" />
                                </a>

                                <a
                                    href="https://discord.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Join us on Discord"
                                    className="text-gray-300 hover:text-[#7289da] transform hover:scale-110 transition-all duration-300 hover:drop-shadow-[0_0_6px_#7289da]"
                                >
                                    <FaDiscord className="w-6 h-6 sm:w-7 sm:h-7" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-700 pt-4 sm:pt-6 text-center">
                    <p className="text-gray-400 text-sm sm:text-base">
                        &copy; {new Date().getFullYear()} CyberSquad Republic. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
