'use strict';

/* @ngInject */
export const NgCarouselTemplate = ($templateCache) => (
    $templateCache.put('ng.carousel.template',
        `<p ng-if="$ctrl.compilationFail" class="error-binding">{{ $ctrl.compilationDesc }}</p>
        <div id="ng-carousel" class="ng-carousel" ng-if="!$ctrl.compilationFail">
            <ul class="list-carousel">
                <li class="item" ng-repeat="item in $ctrl.arrayCarousel track by $index">
                    {{ item.name }}
                </li>
            </ul>
        </div>`
    )
);
