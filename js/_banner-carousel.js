// *** FUNCTION - SWIPER BANNER
const run_carousel_banner = () => {
    let swiperBanner = new Swiper('.bp-swiper', {
        observer: true,
        direction: 'horizontal',
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        autoplay: {
            delay: 5000,
            pauseOnMouseEnter: true,
        },
        speed: 800,
        loop: true,
        navigation: {
            nextEl: '.bp-swiper .swiper-button-next',
            prevEl: '.bp-swiper .swiper-button-prev',
        },
        pagination: {
            el: '.bp-swiper .swiper-pagination',
            clickable: true,
        }
    })
}