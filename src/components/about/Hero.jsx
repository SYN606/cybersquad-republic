import { motion } from "framer-motion";
import { FaUsers } from "react-icons/fa";

export default function Hero() {
    return (
        <section className="relative bg-bgcolor text-textcol py-32 overflow-hidden">
            {/* Subtle background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-secondry/10"></div>

            {/* Content wrapper */}
            <motion.div
                className="relative z-10 text-center max-w-3xl mx-auto px-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
            >
                {/* Title */}
                <motion.h1
                    className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 1 }}
                >
                    Cybersquad{" "}
                    <span className="bg-gradient-to-r from-accent via-highlight-text to-secondry bg-clip-text text-transparent">
                        Republic
                    </span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    className="text-lg text-gray-400 mb-10 leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 1 }}
                >
                    In the <span className="text-highlight-text">shadows of code</span> we live.<br />
                    Training hackers of the future, one root shell at a time.
                </motion.p>

                {/* CTA Button */}
                <motion.a
                    href="https://chat.whatsapp.com/YOUR_INVITE_LINK"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-3 rounded-xl font-semibold bg-accent text-black shadow-md hover:shadow-lg hover:brightness-110 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                >
                    <FaUsers className="text-lg" />
                    Join on WhatsApp
                </motion.a>
            </motion.div>
        </section>
    );
}
