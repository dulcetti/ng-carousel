'use strict';

/* @ngInject */
export const NgCarouselTemplate = ($templateCache) => (
    $templateCache.put('ng.carousel.template',
        `<p ng-if="$ctrl.compilationFail" class="error-binding">{{ $ctrl.compilationDesc }}</p>
        <div class="ng-carousel" ng-show="$ctrl.carouselReady" ng-if="!$ctrl.compilationFail">
            <div class="carousel">
                <div class="track">
                    <div class="slide" ng-repeat="item in $ctrl.arrayCarousel track by $index">
                        <div class="item"></div>
                    </div>
                </div>
            </div>
            <div class="navigation -prev"
                ng-if="$ctrl.options.arrows"
                ng-show="$ctrl.showPrev"
                ng-class="{ '-disable': !$ctrl.isClickable('prev')) }"
                ng-click="$ctrl.prevSlide()">
                <a href="javascript:;" class="link">
                    <span>Anterior</span>
                </a>
            </div>
            <div class="navigation -next"
                ng-if="$ctrl.options.arrows"
                ng-show="$ctrl.showNext"
                ng-class="{ '-disable': !$ctrl.isClickable('next')) }"
                ng-click="$ctrl.nextSlide()">
                <a href="javascript:;" class="link">
                    <span>Próxima</span>
                </a>
            </div>
            <ul class="dots" ng-if="$ctrl.options.dots">
                <li ng-repeat="dot in $ctrl.totalDots"
                    ng-class="{ '-active': dot == $ctrl.currentSlide/$ctrl.options.slidesToScroll }"
                    ng-click="$ctrl.changeSlide(dot)">
                    <a href="javascript:;"><span>{{ dot }}</span></a>
                </li>
            </ul>
        </div>`
    )
);
