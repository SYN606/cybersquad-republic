export default function Subscription() {
    // replace the href values with your real links (payment, whatsapp invite, contact)
    const whatsappInvite = "https://chat.whatsapp.com/YOUR_INVITE_LINK";
    const subscribeLink = "/subscribe"; // or an external checkout URL

    return (
        <section id="subscription" className="bg-bgcolor text-textcol py-12 px-6">
            <div className="max-w-3xl mx-auto text-center">
                <h3 className="text-2xl font-bold mb-4">Subscription & Join</h3>
                <p className="mb-4">
                    Cybersquad Republic is a subscription-based community to keep quality, commitment, and
                    relevance high. Subscriptions help us run labs, host private challenges, and curate
                    premium resources.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <a
                        href={subscribeLink}
                        className="bg-accent px-6 py-3 rounded-lg font-semibold"
                        rel="noopener noreferrer"
                    >
                        Subscribe / Join
                    </a>

                    <a
                        href={whatsappInvite}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-gray-700 px-6 py-3 rounded-lg"
                    >
                        Join WhatsApp (community chat)
                    </a>
                </div>

                <p className="text-sm text-gray-400 mt-4">
                    If you prefer, contact us at <strong>contact@cybersquad.example</strong> (replace with your
                    real email) for invites or questions.
                </p>
            </div>
        </section>
    );
}
