import { motion } from "framer-motion";
import { FaCode, FaUserSecret, FaTerminal } from "react-icons/fa";

export default function Philosophy() {
    const cardVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.3, duration: 0.8, ease: "easeOut" },
        }),
    };

    return (
        <section
            id="philosophy"
            className="relative bg-bgcolor text-textcol py-20 px-6 overflow-hidden"
        >
            {/* background accent */}
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 via-transparent to-highlight-text/5 pointer-events-none"></div>

            <div className="relative z-10 max-w-6xl mx-auto">
                {/* Heading */}
                <motion.h3
                    className="text-3xl md:text-4xl font-bold text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    Our <span className="text-accent">Philosophy</span>
                </motion.h3>

                {/* Grid of philosophy points */}
                <div className="grid md:grid-cols-3 gap-10">
                    {[
                        {
                            icon: <FaCode className="text-accent text-4xl mb-4" />,
                            title: "Real Resources",
                            text: "We provide daily hacking resources, news, and mindset notes — creating the environment real hackers need.",
                        },
                        {
                            icon: <FaUserSecret className="text-highlight-text text-4xl mb-4" />,
                            title: "Beyond Buzzwords",
                            text: "Hacking is not hype. We reject shallow trends. A true hacker is curious, practical, and always learning.",
                        },
                        {
                            icon: <FaTerminal className="text-secondry text-4xl mb-4" />,
                            title: "Root Level Learning",
                            text: "We dive deep into systems — training hackers who understand the core, not just surface-level tutorials.",
                        },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            custom={i}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="relative group rounded-2xl p-6 shadow-lg overflow-hidden cursor-pointer"
                        >
                            {/* liquid glass hover effect */}
                            <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-2xl transition-all duration-500 group-hover:bg-gradient-to-br group-hover:from-accent/30 group-hover:via-highlight-text/20 group-hover:to-secondry/30 group-hover:backdrop-blur-lg"></div>

                            {/* subtle animated border on hover */}
                            <div className="absolute inset-0 rounded-2xl border border-white/10 group-hover:border-accent/40 transition-all duration-500"></div>

                            {/* content */}
                            <div className="relative z-10">
                                {item.icon}
                                <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                                <p className="text-gray-300 leading-relaxed">{item.text}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Closing statement */}
                <motion.p
                    className="mt-16 text-center max-w-3xl mx-auto text-gray-300 italic leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 1 }}
                    viewport={{ once: true }}
                >
                    “The world lacks enough high-quality hackers. To train the future, in
                    the shadows of code we live.”
                </motion.p>
            </div>
        </section>
    );
}
