import { motion } from "framer-motion";

export default function FeaturedArticles() {
    const articles = [
        {
            title: "Cybersecurity Trends of 2025",
            desc: "Discover the top emerging threats and security measures shaping the future of the cyber world.",
            link: "#"
        },
        {
            title: "AI in Ethical Hacking",
            desc: "Learn how artificial intelligence is changing penetration testing and vulnerability assessments.",
            link: "#"
        },
        {
            title: "Protecting Data in the Cloud",
            desc: "Strategies to safeguard sensitive information and ensure privacy in cloud-based systems.",
            link: "#"
        }
    ];

    return (
        <section className="py-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-8">
                {/* Section Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-textcol text-3xl sm:text-4xl font-bold mb-8"
                >
                    Featured{" "}
                    <span className="relative inline-block">
                        A
                        <span className="relative inline-block">
                            <span className="relative z-10">rticles</span>
                            <motion.span
                                initial={{ width: 0 }}
                                whileInView={{ width: "100%" }}
                                transition={{ duration: 0.6, ease: "easeInOut" }}
                                viewport={{ once: true }}
                                className="absolute left-0 bottom-0 h-[4px] bg-accent rounded"
                            />
                        </span>
                    </span>
                </motion.h2>

                {/* Articles Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {articles.map((article, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: idx * 0.2 }}
                            whileHover={{ scale: 1.05 }}
                            className="bg-bgcolor/60 rounded-xl overflow-hidden border border-accent/30 shadow-lg hover:border-accent transition duration-300"
                        >

                            {/* Content */}
                            <div className="p-5">
                                <h3 className="text-textcol text-xl font-semibold mb-2 hover:text-accent transition duration-300">
                                    {article.title}
                                </h3>
                                <p className="text-gray-300 text-sm mb-4">
                                    {article.desc}
                                </p>
                                <a
                                    href={article.link}
                                    className="text-accent font-semibold hover:underline"
                                >
                                    Read More →
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
