import { motion } from "framer-motion";
import { FaPaperPlane, FaUser, FaEnvelope, FaComments, FaPhone } from "react-icons/fa";

export default function ContactForm() {
    const formVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        },
        hover: {
            scale: 1.02,
            transition: { duration: 0.3 }
        }
    };

    return (
        <section className="py-12 sm:py-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

                {/* Form Content */}
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
                        Send us a{" "}
                        <span className="text-accent">Message</span>
                    </motion.h2>

                    <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-6 sm:mb-8 max-w-xl">
                        Have a question about our cybersecurity community? Want to join our
                        workshops or participate in CTF challenges? Fill out the form and
                        we'll get back to you as soon as possible.
                    </p>

                    {/* Contact Form */}
                    <motion.form
                        variants={formVariants}
                        initial="hidden"
                        whileInView="visible"
                        whileHover="hover"
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="relative">
                                <FaUser className="absolute left-3 top-3 text-accent" />
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full pl-10 pr-4 py-3 bg-bgcolor/50 border border-accent/30 rounded-lg text-textcol placeholder-gray-400 focus:border-accent focus:outline-none transition-all"
                                />
                            </div>
                            <div className="relative">
                                <FaEnvelope className="absolute left-3 top-3 text-accent" />
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="w-full pl-10 pr-4 py-3 bg-bgcolor/50 border border-accent/30 rounded-lg text-textcol placeholder-gray-400 focus:border-accent focus:outline-none transition-all"
                                />
                            </div>
                        </div>

                        <div className="relative">
                            <FaComments className="absolute left-3 top-3 text-accent" />
                            <textarea
                                placeholder="Your Message"
                                rows="5"
                                className="w-full pl-10 pr-4 py-3 bg-bgcolor/50 border border-accent/30 rounded-lg text-textcol placeholder-gray-400 focus:border-accent focus:outline-none transition-all resize-none"
                            ></textarea>
                        </div>

                        <motion.button
                            type="submit"
                            whileHover={{
                                scale: 1.05,
                                backgroundColor: "var(--color-primary)",
                                boxShadow: "0 0 15px var(--color-primary)"
                            }}
                            transition={{ duration: 0.3 }}
                            className="flex items-center gap-2 px-6 py-3 rounded-lg font-semibold bg-accent text-white shadow-md transition duration-300 text-sm sm:text-base"
                        >
                            <FaPaperPlane />
                            Send Message
                        </motion.button>
                    </motion.form>
                </motion.div>

                {/* Contact Information */}
                <div className="space-y-6">
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="bg-bgcolor/50 rounded-xl p-6 border border-accent/30"
                    >
                        <h3 className="text-textcol text-xl font-semibold mb-4">Get in Touch</h3>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="text-accent text-xl">
                                    <FaEnvelope />
                                </div>
                                <div>
                                    <p className="text-textcol font-medium">Email</p>
                                    <p className="text-gray-400 text-sm">contact@cybersquad.com</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="text-accent text-xl">
                                    <FaPhone />
                                </div>
                                <div>
                                    <p className="text-textcol font-medium">Phone</p>
                                    <p className="text-gray-400 text-sm">+91-987-654-3210</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                        className="bg-bgcolor/50 rounded-xl p-6 border border-accent/30"
                    >
                        <h3 className="text-textcol text-xl font-semibold mb-4">Response Time</h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            We typically respond to all inquiries within 24 hours during
                            business days. For urgent matters, please call us directly.
                        </p>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
