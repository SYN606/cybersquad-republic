import { motion } from "framer-motion";
import { useState } from "react";
import { FaChevronDown, FaShieldAlt, FaUsers, FaCode, FaGraduationCap } from "react-icons/fa";

export default function FAQ() {
    const [openFaq, setOpenFaq] = useState(null);

    const faqs = [
        {
            question: "How do I join the CyberSquad Republic community?",
            answer: "Joining our community is simple! You can fill out our contact form, reach out to us via email at contact@cybersquad.com, or join our Discord server. We'll guide you through the onboarding process and help you get started with our cybersecurity community."
        },
        {
            question: "What cybersecurity skills do I need to get started?",
            answer: "We welcome members of all skill levels, from complete beginners to seasoned professionals. Our community provides comprehensive learning resources, hands-on workshops, and mentorship programs. Whether you're just starting your cybersecurity journey or looking to advance your skills, we have programs tailored for every level."
        },
        {
            question: "Are the workshops and CTF challenges free?",
            answer: "Most of our basic workshops and CTF challenges are completely free for community members. We also offer premium advanced courses and specialized training programs for those looking to dive deeper into specific areas like penetration testing, malware analysis, and incident response."
        },
        {
            question: "How often do you host events and what types?",
            answer: "We host regular events throughout the year including weekly workshops, monthly CTF challenges, quarterly cybersecurity conferences, and annual hackathons. Our events cover topics like ethical hacking, network security, cryptography, and emerging threats. Check our community calendar for upcoming events."
        },
        {
            question: "Do you offer certification preparation courses?",
            answer: "Yes! We offer comprehensive preparation courses for industry-recognized certifications including CompTIA Security+, CEH (Certified Ethical Hacker), CISSP, and OSCP. Our certified instructors provide hands-on training and practice exams to help you succeed."
        },
        {
            question: "Can I participate in real-world cybersecurity projects?",
            answer: "Absolutely! We partner with local businesses and organizations to provide real-world cybersecurity projects for our members. These projects range from security assessments to incident response simulations, giving you valuable hands-on experience while helping protect our community."
        }
    ];

    const features = [
        {
            icon: <FaShieldAlt />,
            title: "Security Training",
            desc: "Comprehensive cybersecurity education and hands-on training programs designed to build your skills from the ground up."
        },
        {
            icon: <FaUsers />,
            title: "Community Support",
            desc: "Connect with like-minded professionals and mentors in the cybersecurity field through our active community."
        },
        {
            icon: <FaCode />,
            title: "Practical Experience",
            desc: "Real-world projects and CTF challenges to build your skills and gain practical cybersecurity experience."
        },
        {
            icon: <FaGraduationCap />,
            title: "Certification Prep",
            desc: "Prepare for industry-recognized cybersecurity certifications with our expert-led training programs."
        }
    ];

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    return (
        <section className="py-16 bg-bgcolor">
            <div className="max-w-6xl mx-auto px-4 sm:px-8">
                {/* Section Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-textcol text-3xl sm:text-4xl font-bold mb-8 text-center"
                >
                    Frequently Asked{" "}
                    <span className="relative inline-block">
                        Q
                        <span className="relative inline-block">
                            <span className="relative z-10">uestions</span>
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

                {/* FAQ Grid */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    {faqs.map((faq, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                            className="bg-bgcolor/60 rounded-xl overflow-hidden border border-accent/30 shadow-lg hover:border-accent transition duration-300 cursor-pointer"
                            onClick={() => toggleFaq(idx)}
                        >
                            <div className="p-6">
                                <div className="flex items-start justify-between mb-3">
                                    <h3 className="text-textcol text-lg font-semibold hover:text-accent transition duration-300 pr-4">
                                        {faq.question}
                                    </h3>
                                    <motion.div
                                        animate={{ rotate: openFaq === idx ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="text-accent mt-1 flex-shrink-0"
                                    >
                                        <FaChevronDown />
                                    </motion.div>
                                </div>
                                <motion.div
                                    initial={false}
                                    animate={{
                                        height: openFaq === idx ? "auto" : 0,
                                        opacity: openFaq === idx ? 1 : 0
                                    }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    className="overflow-hidden"
                                >
                                    <p className="text-gray-300 text-sm leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Features Grid */}
                <motion.h3
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-textcol text-2xl sm:text-3xl font-bold mb-8 text-center"
                >
                    What We Offer
                </motion.h3>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            className="bg-bgcolor/60 rounded-xl overflow-hidden border border-accent/30 shadow-lg hover:border-accent transition duration-300 text-center"
                        >
                            <div className="p-6">
                                <div className="text-accent text-3xl mb-4 flex justify-center">
                                    {feature.icon}
                                </div>
                                <h4 className="text-textcol text-lg font-semibold mb-2">
                                    {feature.title}
                                </h4>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    {feature.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
