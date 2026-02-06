
import Swiper from 'swiper';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const initStoriesFixed = () => {
    // Only init if element exists to avoid errors on other pages
    if (!document.querySelector('.swiperStories')) return;

    requestAnimationFrame(() => {
        const swiper = new Swiper(".swiperStories", {
            modules: [Navigation, Autoplay],
            slidesPerView: 1,
            spaceBetween: 50,
            loop: true,
            // loopAdditionalSlides helps with the smooth infinite effect even if we have duplicates manually
            loopAdditionalSlides: 3,
            speed: 800,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            },
            navigation: {
                nextEl: ".swiper-next-stories",
                prevEl: ".swiper-prev-stories",
            },
            breakpoints: {
                640: { slidesPerView: 1.5, spaceBetween: 30 },
                768: { slidesPerView: 2, spaceBetween: 40 },
                1024: { slidesPerView: 3, spaceBetween: 50 }
            },
            observer: true,
            observeParents: true,
            on: {
                init: function () {
                    console.log('Swiper Stories Initialized');
                }
            }
        });
    });
};

// Initialize on first load
initStoriesFixed();

// Initialize on view transitions
document.addEventListener('astro:page-load', initStoriesFixed);
