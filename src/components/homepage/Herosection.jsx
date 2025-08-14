import { motion } from "framer-motion";
import HeroCarousel from "./Herosec-Carousel";
import './blob.css';

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center text-textcol overflow-hidden px-4 sm:px-6 py-10 sm:py-16">
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center relative z-10">

                {/* Left Content */}
                <div className="flex flex-col items-start gap-5 text-center lg:text-left">
                    <motion.h1
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        CyberSquad{" "}
                        <span className="text-accent">Republic</span>
                    </motion.h1>

                    <motion.p
                        className="text-sm sm:text-base md:text-lg text-gray-300 max-w-xl mx-auto lg:mx-0"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        Building Futuristic Techno Minds — A global community of cyber
                        warriors, ethical hackers, and digital defenders united to secure
                        the future of technology.
                    </motion.p>

                    {/* Buttons */}
                    <motion.div
                        className="flex gap-3 sm:gap-4 flex-wrap justify-center lg:justify-start"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                    >
                        <button className="px-4 sm:px-5 py-2.5 sm:py-3 bg-accent rounded-md font-semibold text-sm sm:text-base hover:bg-secondry transition-all">
                            Join the Community
                        </button>
                        <button className="px-4 sm:px-5 py-2.5 sm:py-3 border border-primary text-primary rounded-md font-semibold text-sm sm:text-base hover:bg-primary hover:text-bgcolor transition-all">
                            Learn More
                        </button>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        className="flex gap-5 sm:gap-6 mt-6 flex-wrap justify-center lg:justify-start"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                    >
                        <div className="text-center lg:text-left">
                            <p className="text-lg sm:text-xl font-bold text-accent">500+</p>
                            <p className="text-gray-400 text-xs sm:text-sm">Members</p>
                        </div>
                        <div className="text-center lg:text-left">
                            <p className="text-lg sm:text-xl font-bold text-primary">50+</p>
                            <p className="text-gray-400 text-xs sm:text-sm">Workshops</p>
                        </div>
                        <div className="text-center lg:text-left">
                            <p className="text-lg sm:text-xl font-bold text-accent">100+</p>
                            <p className="text-gray-400 text-xs sm:text-sm">CTF Challenges</p>
                        </div>
                    </motion.div>
                </div>

                {/* Right Side Illustration */}
                <div className="order-first lg:order-last w-full max-w-xl mx-auto">
                    <HeroCarousel />
                </div>
            </div>
        </section>
    );
}
