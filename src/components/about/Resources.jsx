// src/components/Resources.jsx
export default function Resources() {
    return (
        <section id="resources" className="bg-bgcolor text-textcol py-12 px-6">
            <div className="max-w-3xl mx-auto text-center">
                <h3 className="text-2xl font-bold mb-4">What We Share</h3>
                <p className="mb-4">
                    Daily resources curated for learners and practitioners:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                    <div className="bg-gray-800 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Hacking Guides</h4>
                        <p className="text-sm">Step-by-step writeups, tool usage, and methodology.</p>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Mindset & News</h4>
                        <p className="text-sm">Perspectives on ethics, industry trends, and reliable updates.</p>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Challenges & Labs</h4>
                        <p className="text-sm">CTF-style problems and guided practice environments.</p>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Community Projects</h4>
                        <p className="text-sm">Collaborative builds and small open-source efforts.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
