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
            indicators: false,
            infinite: true,
            initialSlide: 0,
            lazyLoad: 'ondemand',
            speed: 500,
            slidesToScrollDesktop: 1,
            slidesToShowDesktop: 1,
            slidesToScrollMobile: 1,
            slidesToShowMobile: 1,
            swipe: true,
            swipeToSlide: false,
            touchMove: true,
            visibleNext: false,
            visiblePrev: false
        };
    }

    $get() {
        return {
            setOptions: options => {
                this.options = angular.extend(this.options, options);
            },
            getOptions: () => {
                return this.options;
            }
        };
    }
};
