import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaDiscord, FaShieldAlt, FaUsers, FaCode } from "react-icons/fa";

export default function ContactHero() {
    const contactInfo = [
        {
            icon: <FaEnvelope />,
            title: "Email Us",
            info: "contact@cybersquad.com",
            link: "mailto:contact@cybersquad.com"
        },
        {
            icon: <FaPhone />,
            title: "Call Us",
            info: "+91-987-654-3210",
            link: "tel:+919876543210"
        },
        {
            icon: <FaDiscord />,
            title: "Join Discord",
            info: "cybersquad-republic",
            link: "#"
        }
    ];

    const stats = [
        { number: "1000+", label: "Active Members", icon: <FaUsers /> },
        { number: "100+", label: "Workshops", icon: <FaCode /> },
        { number: "250+", label: "CTF Challenges", icon: <FaShieldAlt /> }
    ];

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
                        Get in{" "}
                        <span className="text-accent">Touch</span>
                    </motion.h1>

                    <motion.p
                        className="text-sm sm:text-base md:text-lg text-gray-300 max-w-xl mx-auto lg:mx-0"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        Ready to join the CyberSquad Republic? Have questions about our
                        cybersecurity community? We'd love to hear from you and help you
                        get started on your cyber journey.
                    </motion.p>

                    {/* Contact Info Cards */}
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-lg mx-auto lg:mx-0"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                    >
                        {contactInfo.map((item, idx) => (
                            <motion.a
                                key={idx}
                                href={item.link}
                                className="flex flex-col items-center p-4 rounded-lg border border-accent/30 bg-bgcolor/50 hover:border-accent hover:bg-bgcolor/70 transition-all duration-300"
                                whileHover={{ scale: 1.05 }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 + idx * 0.1, duration: 0.6 }}
                            >
                                <div className="text-accent text-2xl mb-2">{item.icon}</div>
                                <h3 className="text-textcol font-semibold text-sm">{item.title}</h3>
                                <p className="text-gray-400 text-xs text-center">{item.info}</p>
                            </motion.a>
                        ))}
                    </motion.div>
                </div>

                {/* Right Side - Community Stats */}
                <div className="order-first lg:order-last w-full max-w-xl mx-auto">
                    <motion.div
                        className="bg-bgcolor/60 rounded-xl p-8 border border-accent/30"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        <h3 className="text-textcol text-2xl font-semibold mb-6 text-center">Join Our Community</h3>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-1 gap-6 mb-6">
                            {stats.map((stat, idx) => (
                                <motion.div
                                    key={idx}
                                    className="flex items-center gap-4 p-4 rounded-lg bg-bgcolor/30 border border-accent/20"
                                    initial={{ opacity: 0, x: 30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.5 + idx * 0.1, duration: 0.6 }}
                                >
                                    <div className="text-accent text-2xl">
                                        {stat.icon}
                                    </div>
                                    <div>
                                        <p className="text-textcol text-xl font-bold">{stat.number}</p>
                                        <p className="text-gray-400 text-sm">{stat.label}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <motion.button
                            className="w-full py-3 bg-accent text-white rounded-lg font-semibold hover:bg-accent/80 transition-all duration-300"
                            whileHover={{ scale: 1.02 }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.6 }}
                        >
                            Start Your Journey
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
