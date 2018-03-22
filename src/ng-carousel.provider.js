'use strict';

export class NgCarouselProvider {
    constructor() {
        this.options = {
            arrows: true,
            autoplay: false,
            autoplaySpeed: 4000,
            cssEase: 'ease',
            easing: 'linear',
            fade: false,
            indicators: true,
            infinite: true,
            initialSlide: 0,
            lazyLoad: 'ondemand',
            speedCarousel: 500,
            slidesToScrollDesktop: 1,
            slidesToShowDesktop: 3,
            slidesToScrollMobile: 1,
            slidesToShowMobile: 1,
            swipe: true,
            swipeToSlide: false,
            touchMove: true,
            visibleNext: true,
            visiblePrev: true
        };
    }

    $get() {
        return {
            setOption: (option, value) => {
                this.options[option] = value;
            },
            getOptions: () => {
                return this.options;
            }
        };
    }
};
