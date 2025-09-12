import { motion } from "framer-motion";
import { FaLaptopCode, FaFlagCheckered, FaLock } from "react-icons/fa";

export default function Mission() {
    const listItems = [
        {
            icon: <FaLaptopCode className="text-accent text-xl" />,
            text: "Provide hands-on learning resources and root-level system exploration.",
        },
        {
            icon: <FaFlagCheckered className="text-highlight-text text-xl" />,
            text: "Run focused challenges and practice labs to build practical skill.",
        },
        {
            icon: <FaLock className="text-secondry text-xl" />,
            text: "Keep the community subscription-based to maintain quality and commitment.",
        },
    ];

    return (
        <section
            id="mission"
            className="relative bg-bgcolor text-textcol py-20 px-6 overflow-hidden"
        >
            {/* background accent */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-secondry/10 pointer-events-none"></div>

            <motion.div
                className="relative z-10 max-w-4xl mx-auto text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                {/* Heading */}
                <h3 className="text-3xl md:text-4xl font-bold mb-8">
                    Our{" "}
                    <span className="bg-gradient-to-r from-accent via-highlight-text to-secondry bg-clip-text text-transparent">
                        Mission
                    </span>
                </h3>

                {/* Description */}
                <p className="mb-10 text-gray-300 leading-relaxed max-w-2xl mx-auto">
                    To build a high-quality community that benefits hackers and nerds
                    alike — a place where members get real, deep information and practical
                    experience without the smoke and mirrors.
                </p>

                {/* Mission points */}
                <div className="space-y-6 text-left max-w-2xl mx-auto">
                    {listItems.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.2, duration: 0.6 }}
                            viewport={{ once: true }}
                            className="flex items-start gap-4 bg-white/5 backdrop-blur-sm rounded-xl p-4 hover:bg-gradient-to-r hover:from-accent/20 hover:to-secondry/20 transition-all duration-500"
                        >
                            <div className="flex-shrink-0">{item.icon}</div>
                            <p className="text-gray-200">{item.text}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
