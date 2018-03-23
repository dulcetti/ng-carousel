'use strict';

/* @ngInject */
export const NgCarouselTemplate = ($templateCache) => (
    $templateCache.put('ng.carousel.template',
        `<p ng-if="$ctrl.compilationFail" class="error-binding">{{ $ctrl.compilationDesc }}</p>
        <div class="ng-carousel -{{ $ctrl.template }}" ng-show="$ctrl.isReady" ng-if="!$ctrl.compilationFail">
            <div class="carousel" ng-transclude></div>

            <a href="javascript:;"
                class="navigation -prev"
                ng-if="$ctrl.options.arrows"
                ng-show="$ctrl.visiblePrev"
                ng-class="{ '-disable': !$ctrl.prevClickable }"
                ng-click="$ctrl.prevSlide()">
                <span>&lsaquo;</span>
            </a>

            <a href="javascript:;"
                class="navigation -next"
                ng-if="$ctrl.options.arrows"
                ng-show="$ctrl.visibleNext"
                ng-class="{ '-disable': !$ctrl.nextClickable }"
                ng-click="$ctrl.nextSlide()">
                <span>&rsaquo;</span>
            </a>

            <ul class="indicators" ng-if="$ctrl.options.indicators">
                <li ng-repeat="indicator in $ctrl.arrayCarousel track by $index"
                    class="indicator"
                    ng-class="{ '-active': $index == $ctrl.currentSlide/$ctrl.slidesToScroll }"
                    ng-click="$ctrl.changeSlide(indicator)">
                    <span>{{ $index + 1 }}</span>
                </li>
            </ul>
        </div>`
    )
);
