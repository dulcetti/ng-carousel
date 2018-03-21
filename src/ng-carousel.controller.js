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

    // 'private' methods
    _init() {
        this.ngCarouselOptions.setOptions(this.options);
        this.isReady = true;
        this.template = this.template || 'default';
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

    // public methods
    $onInit() {
        this._init();
    }
}
