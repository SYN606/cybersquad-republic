import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const carouselImages = [
    { src: '/cyber-illustration.png', alt: 'Cyber Illustration 1' },
    { src: '/cyber-illustration-2.png', alt: 'Cyber Illustration 2' },
    { src: '/cyber-illustration-3.png', alt: 'Cyber Illustration 3' }
];

<motion.div
    className="flex justify-center w-full"
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.3, duration: 0.6 }}
>
    <Swiper
        spaceBetween={20}
        centeredSlides={true}
        autoplay={{
            delay: 3000,
            disableOnInteraction: false,
        }}
        pagination={{
            clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-[70%] sm:w-[80%] max-w-xs sm:max-w-sm"
    >
        {carouselImages.map((image, index) => (
            <SwiperSlide key={index}>
                <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full rounded-lg shadow-lg"
                    loading="lazy"
                />
            </SwiperSlide>
        ))}
    </Swiper>
</motion.div>
