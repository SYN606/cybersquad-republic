import { motion } from "framer-motion";
import { FaWhatsapp, FaCreditCard, FaEnvelope } from "react-icons/fa";

export default function Subscription() {
    // replace with real links
    const whatsappInvite = "https://chat.whatsapp.com/YOUR_INVITE_LINK";
    const subscribeLink = "/subscribe"; // or external checkout

    return (
        <section
            id="subscription"
            className="relative bg-bgcolor text-textcol py-20 px-6 overflow-hidden"
        >
            {/* subtle background accent */}
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 via-transparent to-secondry/10 pointer-events-none"></div>

            <motion.div
                className="relative z-10 max-w-3xl mx-auto text-center bg-white/5 backdrop-blur-md rounded-2xl shadow-xl p-10"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                {/* Heading */}
                <h3 className="text-3xl md:text-4xl font-bold mb-6">
                    Subscription & <span className="text-accent">Join</span>
                </h3>

                {/* Description */}
                <p className="mb-8 text-gray-300 leading-relaxed">
                    Cybersquad Republic is a subscription-based community to keep quality,
                    commitment, and relevance high. Subscriptions help us run labs, host
                    private challenges, and curate premium resources.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                    {/* Subscribe */}
                    <a
                        href={subscribeLink}
                        className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-accent to-secondry text-black shadow-md hover:shadow-lg hover:brightness-110 transition-all duration-300"
                    >
                        <FaCreditCard /> Subscribe / Join
                    </a>

                    {/* WhatsApp */}
                    <a
                        href={whatsappInvite}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold border border-gray-700 hover:border-accent transition-all duration-300"
                    >
                        <FaWhatsapp className="text-green-400" /> WhatsApp Chat
                    </a>
                </div>

                {/* Email Contact */}
                <div className="mt-8 flex items-center justify-center gap-2 text-gray-400 text-sm">
                    <FaEnvelope className="text-accent" />
                    <span>
                        Contact us at{" "}
                        <strong className="text-highlight-text">
                            contact@cybersquad.example
                        </strong>
                    </span>
                </div>
            </motion.div>
        </section>
    );
}
