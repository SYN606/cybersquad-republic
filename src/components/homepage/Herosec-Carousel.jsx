import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const carouselImages = [
    { src: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg', alt: 'Cyber Illustration 1' },
    { src: 'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg', alt: 'Cyber Illustration 2' },
    { src: 'https://images.pexels.com/photos/30265371/pexels-photo-30265371.jpeg', alt: 'Cyber Illustration 3' }
];

export default function HeroCarousel() {
    return (
        <div className="flex justify-center w-full py-8 sm:py-12">
            <div className="w-[98%] sm:w-[90%] md:w-[85%] max-w-5xl">
                <Swiper
                    spaceBetween={10}
                    centeredSlides
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation
                    modules={[Autoplay, Pagination, Navigation]}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 15,
                        },
                        1024: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                    }}
                >
                    {carouselImages.map((image, index) => (
                        <SwiperSlide key={index}>
                            <div className="aspect-video rounded-xl overflow-hidden hover:scale-105 transition-transform duration-500 border-accent border-2">
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}
