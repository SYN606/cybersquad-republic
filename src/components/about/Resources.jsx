import { motion } from "framer-motion";
import { FaBook, FaBrain, FaFlag, FaProjectDiagram } from "react-icons/fa";

export default function Resources() {
    const resources = [
        {
            icon: <FaBook className="text-accent text-2xl" />,
            title: "Hacking Guides",
            text: "Step-by-step writeups, tool usage, and methodology.",
        },
        {
            icon: <FaBrain className="text-highlight-text text-2xl" />,
            title: "Mindset & News",
            text: "Perspectives on ethics, industry trends, and reliable updates.",
        },
        {
            icon: <FaFlag className="text-secondry text-2xl" />,
            title: "Challenges & Labs",
            text: "CTF-style problems and guided practice environments.",
        },
        {
            icon: <FaProjectDiagram className="text-accent text-2xl" />,
            title: "Community Projects",
            text: "Collaborative builds and small open-source efforts.",
        },
    ];

    return (
        <section
            id="resources"
            className="relative bg-bgcolor text-textcol py-20 px-6 overflow-hidden"
        >
            {/* background accent */}
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 via-transparent to-highlight-text/5 pointer-events-none"></div>

            <div className="relative z-10 max-w-5xl mx-auto text-center">
                {/* Heading */}
                <motion.h3
                    className="text-3xl md:text-4xl font-bold mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    What We <span className="text-accent">Share</span>
                </motion.h3>

                <p className="mb-12 text-gray-300 max-w-2xl mx-auto leading-relaxed">
                    Daily resources curated for learners and practitioners:
                </p>

                {/* Resources Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {resources.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.2, duration: 0.7, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="relative group rounded-2xl p-6 text-left shadow-lg cursor-pointer overflow-hidden"
                        >
                            {/* glass background with hover liquid effect */}
                            <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-2xl transition-all duration-500 group-hover:bg-gradient-to-br group-hover:from-accent/20 group-hover:via-highlight-text/20 group-hover:to-secondry/20 group-hover:backdrop-blur-lg"></div>

                            {/* border accent */}
                            <div className="absolute inset-0 rounded-2xl border border-white/10 group-hover:border-accent/40 transition-all duration-500"></div>

                            {/* content */}
                            <div className="relative z-10 flex flex-col gap-3">
                                {item.icon}
                                <h4 className="font-semibold text-lg">{item.title}</h4>
                                <p className="text-sm text-gray-300 leading-relaxed">
                                    {item.text}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
