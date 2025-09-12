import { motion } from "framer-motion";
import { FaUsers } from "react-icons/fa";

export default function Hero() {
    return (
        <section className="relative bg-[var(--color-bgcolor)] text-white py-32 overflow-hidden">
            {/* Background accent glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent)]/20 via-transparent to-[var(--color-highlight-text)]/10 blur-3xl"></div>

            <motion.div
                className="relative z-10 text-center max-w-3xl mx-auto px-6"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <motion.h1
                    className="text-5xl font-extrabold mb-4 tracking-tight"
                    whileHover={{ scale: 1.05 }}
                >
                    Cybersquad <span className="text-[var(--color-accent)]">Republic</span>
                </motion.h1>
                <p className="text-lg text-gray-300 mb-6">
                    In the shadows of code we live. Building hackers of the future, one root shell at a time.
                </p>

                <motion.a
                    href="https://chat.whatsapp.com/YOUR_INVITE_LINK"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[var(--color-accent)] px-6 py-3 rounded-2xl font-semibold text-black shadow-lg shadow-[var(--color-accent)]/40 hover:shadow-[var(--color-accent)]/70 transition"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <FaUsers className="text-xl" />
                    Join on WhatsApp
                </motion.a>
            </motion.div>
        </section>
    );
}
