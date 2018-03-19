'use strict';

export class NgCarouselComponentController {
    constructor() {
        'ngInject';

        this.compilationDesc = '';
        this.compilationFail = false;
        this.requiredBindings = ['arrayCarousel'];
    }

    _verifyRequiredBindings() {
        let i = 0,
            fieldsLength = this.requiredBindings.length;

        for (i; i < fieldsLength; i++) {
            let field = this.requiredBindings[i];

            if(angular.isUndefined(this[field])) {
                this.compilationFail = true;
                this.compilationDesc = `RENDER FAILURE: required attribute { ${ field } } not found.`;
            }
        }
    }

    $onInit() {
        this._verifyRequiredBindings();
    }
}
