'use strict';

/* @ngInject */
export const NgCarouselTemplate = ($templateCache) => (
    $templateCache.put('ng.carousel.template',
        `<p ng-if="$ctrl.compilationFail" class="error-binding">{{ $ctrl.compilationDesc }}</p>
        <div class="ng-carousel -{{ $ctrl.template }}" ng-show="$ctrl.isReady" ng-if="!$ctrl.compilationFail">
            <div class="carousel">
                <ul class="carousel">
                    <li class="item" ng-repeat="item in $ctrl.arrayCarousel track by $index"></li>
                </ul>
            </div>

            <a href="javascript:;"
                class="navigation -prev"
                ng-if="$ctrl.options.arrows"
                ng-show="$ctrl.showPrev"
                ng-class="{ '-disable': !$ctrl.isClickable('prev')) }"
                ng-click="$ctrl.prevSlide()">
                <span>Anterior</span>
            </a>

            <a href="javascript:;"
                class="navigation -next"
                ng-if="$ctrl.options.arrows"
                ng-show="$ctrl.showNext"
                ng-class="{ '-disable': !$ctrl.isClickable('next')) }"
                ng-click="$ctrl.nextSlide()">
                <span>Próxima</span>
            </a>

            <ul class="indicators" ng-if="$ctrl.options.indicators">
                <li ng-repeat="indicator in $ctrl.totalIndicators"
                    ng-class="{ '-active': indicator == $ctrl.currentSlide/$ctrl.options.slidesToScroll }"
                    ng-click="$ctrl.changeSlide(indicator)">
                    <span>&sdot;</span>
                </li>
            </ul>
        </div>`
    )
);
