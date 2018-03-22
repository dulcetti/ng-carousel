'use strict';

import { NgCarouselComponentController } from './ng-carousel.controller';

export const NgCarouselComponent = {
    bindings: {
        arrayCarousel: '<',
        options: '<',
        template: '@'
    },
    controller: NgCarouselComponentController,
    templateUrl: 'ng.carousel.template',
    transclude: true
};
