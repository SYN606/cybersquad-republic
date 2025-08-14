import { Link } from "react-router-dom";
import { useState } from "react";
import { Typewriter } from "react-simple-typewriter";

export default function LogoLink() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Link
            to="/"
            data-text="CyberSquad Republic"
            className="text-xl sm:text-2xl font-bold text-white hover:text-accent transition-colors duration-300 font-mono tracking-wide relative group glitch-text"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {isHovered ? (
                <span>
                    <Typewriter
                        words={['CyberSquad Republic']}
                        loop={1}
                        cursor
                        typeSpeed={80}
                        deleteSpeed={0}
                        delaySpeed={0}
                    />
                </span>
            ) : (
                <span className="text-accent">CSR</span>
            )}
        </Link>
    );
}
