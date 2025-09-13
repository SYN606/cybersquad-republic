import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"; 
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const carouselImages = [
    {
        src: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg",
        alt: "Cyber Illustration 1",
        caption: "Exploring the Shadows of Cyberspace",
    },
    {
        src: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg",
        alt: "Cyber Illustration 2",
        caption: "Breaking Limits, Building Futures",
    },
    {
        src: "https://images.pexels.com/photos/30265371/pexels-photo-30265371.jpeg",
        alt: "Cyber Illustration 3",
        caption: "Hack the World, Secure the Future",
    },
];

export default function HeroCarousel() {
    return (
        <div className="flex justify-center w-full py-8 sm:py-12">
            <div className="w-[95%] md:w-[90%] max-w-7xl relative">
                <Swiper
                    spaceBetween={30}
                    centeredSlides
                    autoplay={{ delay: 3500, disableOnInteraction: false }}
                    effect="fade"
                    pagination={{
                        clickable: true,
                        bulletClass:
                            "swiper-pagination-bullet bg-white/30 backdrop-blur-md w-3 h-3 rounded-full transition-all duration-300",
                        bulletActiveClass:
                            "swiper-pagination-bullet-active bg-accent shadow-[0_0_6px_var(--color-accent)] scale-110",
                    }}
                    navigation={{
                        nextEl: ".custom-next",
                        prevEl: ".custom-prev",
                    }}
                    modules={[Autoplay, Pagination, Navigation, EffectFade]}
                >
                    {carouselImages.map((image, index) => (
                        <SwiperSlide key={index}>
                            <div className="relative group aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 shadow-lg">
                                {/* Image with hover blur */}
                                <motion.img
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-full h-full object-cover transition-all duration-700 group-hover:blur-sm"
                                    loading="lazy"
                                />

                                {/* Dark gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

                                {/* Caption with glass effect on hover */}
                                <motion.div
                                    className="absolute bottom-6 left-6 px-5 py-3 rounded-xl transition-all duration-500
                                        bg-transparent group-hover:bg-white/10 group-hover:backdrop-blur-md 
                                        group-hover:border group-hover:border-white/20"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8 }}
                                >
                                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-highlight-text drop-shadow-lg">
                                        {image.caption}
                                    </h3>
                                </motion.div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}
