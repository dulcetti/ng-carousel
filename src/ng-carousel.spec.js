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

    describe('Initial configs', () => {
        beforeEach(() => {
            let tag = '<ng-carousel array-carousel="arrayCarousel"></ng-carousel>',
                bindings = {
                    arrayCarousel: [0, 1, 2]
                };

            compileComponent(tag, bindings);
        });

        it('component should behave defined', () => {
            expect(controller).toBeDefined();
            expect(component).toBeDefined();
        });
    });

    describe('Required Bindings', () => {
        beforeEach(() => {
            let tag = '<ng-carousel></ng-carousel>';
            compileComponent(tag);
        });

        it('Bindings obrigatorios devem ser declarados e componente nao compilado', () => {
            let hasComponent = document.getElementById('ng-carousel');
            let error = document.querySelector('.error-binding');
            
            expect(controller.arrayCarousel).toBeUndefined();
            expect(hasComponent).toBeFalsy();
            expect(error).toBeTruthy();
        });
    });
});
