'use strict';

import { NgCarouselComponent } from './ng-carousel.component';
import { NgCarouselProvider } from './ng-carousel.provider';
import { NgCarouselStyle } from './styles/styles.sass';
import { NgCarouselTemplatesModule } from './templates/templates.module';

export const NgCarouselModule = angular
    .module('ng.carousel', [
        NgCarouselTemplatesModule,
        'ngTouch'
    ])
    .component('ngCarousel', NgCarouselComponent)
    .provider('ngCarouselOptions', NgCarouselProvider)
    .name;
