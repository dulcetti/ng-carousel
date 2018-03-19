'use strict';

import { NgCarouselModule } from './ng-carousel.module';

describe('Carousel Component', () => {
    var component,
        controller,
        scope;

    function compileComponent(template, bindings) {
        return inject(($rootScope, $compile) => {
            scope = $rootScope.$new();
            scope = Object.assign(scope, bindings);

            component = angular.element(`${ template }`);

            if (!document.getElementById('ng-carousel')) {
                document.body.appendChild(component[0]);
            }

            $compile(component)(scope);
            scope.$apply();

            controller = component.controller('ngCarousel');
        });
    }

    beforeEach(angular.mock.module(NgCarouselModule));

    afterEach(() => {
        document.body.removeChild(component[0]);

        component = null;
        controller = null;
        scope = null;
    });
});
