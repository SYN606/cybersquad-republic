import { motion } from "framer-motion";
import { FaLock, FaCode, FaUsers } from "react-icons/fa";

export default function WhoWeAre() {
    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.2, duration: 0.5, ease: "easeOut" }
        }),
        hover: {
            scale: 1.05,
            borderColor: "var(--color-accent)",
            boxShadow: "0 0 15px var(--color-accent)",
            transition: { duration: 0.3 }
        }
    };

    return (
        <section className="py-12 sm:py-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-left"
                >
                    <motion.h2
                        className="text-textcol text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
                        whileHover={{
                            color: "var(--color-accent)",
                            transition: { duration: 0.3 }
                        }}
                    >
                        Who We Are
                    </motion.h2>

                    <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-4 sm:mb-6 max-w-xl">
                        We are a passionate team of innovators, technologists, and creators
                        dedicated to building secure, cutting-edge digital solutions.
                        Our mission is to combine creativity with technology to shape the
                        future of the cyber world.
                    </p>
                    <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-6 sm:mb-8 max-w-xl">
                        With years of experience in cybersecurity, development, and
                        design, we focus on delivering meaningful solutions that
                        empower businesses and individuals alike.
                    </p>

                    {/* Read More Button */}
                    <motion.button
                        whileHover={{
                            scale: 1.05,
                            backgroundColor: "var(--color-primary)",
                            boxShadow: "0 0 15px var(--color-primary)"
                        }}
                        transition={{ duration: 0.3 }}
                        className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold bg-accent text-white shadow-md transition duration-300 text-sm sm:text-base"
                    >
                        Read More
                    </motion.button>
                </motion.div>

                {/* Icon Features */}
                <div className="grid grid-cols-3 md:grid-cols-1 gap-5 sm:gap-6">
                    {[
                        { icon: <FaLock />, title: "Security" },
                        { icon: <FaCode />, title: "Innovation" },
                        { icon: <FaUsers />, title: "Community" }
                    ].map((item, idx) => (
                        <motion.div
                            key={idx}
                            className="flex flex-col items-center text-center p-5 sm:p-6 rounded-xl border border-accent/40 bg-bgcolor/50 shadow-lg transition duration-300"
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            whileHover="hover"
                            viewport={{ once: true }}
                            custom={idx}
                        >
                            <div className="text-accent text-4xl sm:text-5xl mb-3">{item.icon}</div>
                            <h3 className="text-textcol font-semibold text-base sm:text-lg">{item.title}</h3>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
