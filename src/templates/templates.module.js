'use strict';

import { NgCarouselTemplate } from './ng-carousel.template';

export const NgCarouselTemplatesModule = angular
    .module('ng.carousel.template', [])
    .run(NgCarouselTemplate)
    .name;
