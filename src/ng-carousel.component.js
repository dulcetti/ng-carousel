'use strict';

import { NgCarouselComponentController } from './ng-carousel.controller';

export const NgCarouselComponent = {
    bindings: {
        arrayCarousel: '<',
        options: '<'
    },
    controller: NgCarouselComponentController,
    templateUrl: 'ng.carousel.template'
};
