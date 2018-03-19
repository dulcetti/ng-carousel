'use strict';

export class NgCarouselProvider {
    constructor() {
        this.options = {
            arrows: true,
            autoplay: false,
            autoplaySpeed: 3000,
            cssEase: 'ease',
            dots: false,
            easing: 'linear',
            fade: false,
            infinite: true,
            initialSlide: 0,
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 500,
            visiblePrev: false,
            visibleNext: false,
            draggable: true,
            lazyLoad: 'ondemand',
            swipe: true,
            swipeToSlide: false,
            touchMove: true,
            vertical: false,
            verticalSwiping: false
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
