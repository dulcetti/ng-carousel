'use strict';

export class NgCarouselComponentController {
    constructor(ngCarouselOptions) {
        'ngInject';

        // injects
        this.ngCarouselOptions = ngCarouselOptions;

        this.compilationDesc = '';
        this.compilationFail = false;
        this.requiredBindings = ['arrayCarousel'];
    }

    _compileBindingsOptions() {
        this.ngCarouselOptions.setOptions(this.options);
        this._verifyRequiredBindings();
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
        this._compileBindingsOptions();
    }
}
