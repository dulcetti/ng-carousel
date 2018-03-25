'use strict';

export class NgCarouselProvider {
    constructor() {
        this.options = {
            arrows: true,
            autoplay: false,
            indicators: true,
            infinite: true,
            initialSlide: 0,
            nextVisible: true,
            prevVisible: false,
            slidesToScrollDesktop: 1,
            slidesToShowDesktop: 3,
            slidesToScrollMobile: 1,
            slidesToShowMobile: 1,
            swipe: true,
            swipeToSlide: false
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
