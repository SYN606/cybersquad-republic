import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import HeroCarousel from "./Herosec-Carousel";

export default function HeroSection() {
    const stats = [
        { label: "Active Members", value: 1200, color: "text-accent" },
        { label: "Workshops Conducted", value: 75, color: "text-primary" },
        { label: "CTF Challenges Solved", value: 180, color: "text-highlight-text" },
    ];

    return (
        <section className="relative min-h-screen flex items-center justify-center text-textcol overflow-hidden px-4 sm:px-6 py-16">
            {/* Left Content */}
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
                <div className="flex flex-col items-start gap-6 text-center lg:text-left">
                    {/* Badge */}
                    <motion.span
                        className="px-4 py-1 rounded-full text-xs sm:text-sm font-semibold bg-accent/20 text-accent border border-accent/30 mb-2 inline-block"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Join the Leading Cybersecurity Network
                    </motion.span>

                    {/* Title */}
                    <motion.h1
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        CyberSquad{" "}
                        <span className="bg-gradient-to-r from-accent via-highlight-text to-secondry bg-clip-text text-transparent">
                            Republic
                        </span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        className="text-sm sm:text-base md:text-lg text-gray-300 max-w-xl mx-auto lg:mx-0"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        Empowering ethical hackers, cybersecurity enthusiasts, and tech innovators
                        to collaborate, learn, and secure the digital world. Participate in
                        workshops, challenges, and live CTFs to level up your skills.
                    </motion.p>

                    {/* Buttons */}
                    <motion.div
                        className="flex gap-4 flex-wrap mt-6 justify-center lg:justify-start"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                    >
                        <a
                            href="#subscription"
                            className="px-6 py-3 rounded-lg font-semibold text-sm sm:text-base bg-gradient-to-r from-accent to-secondry text-black shadow-md hover:shadow-lg transition-all"
                        >
                            Become a Member
                        </a>
                        <a
                            href="https://chat.whatsapp.com/YOUR_INVITE_LINK"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-6 py-3 border border-accent text-accent rounded-lg font-semibold text-sm sm:text-base hover:bg-accent hover:text-black transition-all"
                        >
                            <FaWhatsapp className="text-lg" /> Join WhatsApp
                        </a>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        className="flex gap-6 flex-wrap mt-8 justify-center lg:justify-start"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                    >
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                className="text-center lg:text-left"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7 + index * 0.2, duration: 0.6 }}
                            >
                                <motion.p
                                    className={`text-lg sm:text-xl font-bold ${stat.color}`}
                                    initial={{ scale: 0.8 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 0.7 + index * 0.2, duration: 0.6 }}
                                >
                                    {stat.value}+
                                </motion.p>
                                <p className="text-gray-400 text-xs sm:text-sm">{stat.label}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Right Carousel */}
                <div className="order-first lg:order-last w-full max-w-3xl mx-auto">
                    <HeroCarousel />
                </div>
            </div>
        </section>
    );
}
