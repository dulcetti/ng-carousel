'use strict';

import { NgCarouselComponent } from './ng-carousel.component';
import { NgCarouselStyle } from './styles/styles.sass';
import { NgCarouselTemplatesModule } from './templates/templates.module';

export const NgCarouselModule = angular
    .module('ng.carousel', [
        NgCarouselTemplatesModule,
        'ngTouch'
    ])
    .component('ngCarousel', NgCarouselComponent)
    .name;
