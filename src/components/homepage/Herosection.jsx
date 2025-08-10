import { motion } from "framer-motion";

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center bg-bgcolor text-textcol overflow-hidden px-6">
            <div className="container mx-auto grid lg:grid-cols-2 gap-10 items-center relative z-10">

                {/* Left Content */}
                <div className="flex flex-col items-start gap-6">
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
                        className="text-sm sm:text-base md:text-lg text-gray-300 max-w-lg"
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
                        className="flex gap-4 flex-wrap"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                    >
                        <button className="px-5 py-3 bg-accent rounded-md font-semibold hover:bg-secondry transition-all">
                            Join the Community
                        </button>
                        <button className="px-5 py-3 border border-primary text-primary rounded-md font-semibold hover:bg-primary hover:text-bgcolor transition-all">
                            Learn More
                        </button>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        className="flex gap-6 mt-6 flex-wrap"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                    >
                        <div>
                            <p className="text-lg sm:text-xl font-bold text-accent">500+</p>
                            <p className="text-gray-400 text-xs sm:text-sm">Members</p>
                        </div>
                        <div>
                            <p className="text-lg sm:text-xl font-bold text-primary">50+</p>
                            <p className="text-gray-400 text-xs sm:text-sm">Workshops</p>
                        </div>
                        <div>
                            <p className="text-lg sm:text-xl font-bold text-accent">100+</p>
                            <p className="text-gray-400 text-xs sm:text-sm">CTF Challenges</p>
                        </div>
                    </motion.div>
                </div>

                {/* Right Side Illustration */}
                <motion.div
                    className="flex justify-center"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                >
                    <img
                        src="/cyber-illustration.png"
                        alt="Cyber Illustration"
                        className="w-[70%] sm:w-[80%] max-w-xs sm:max-w-sm"
                        loading="lazy"
                    />
                </motion.div>
            </div>
        </section>
    );
}
