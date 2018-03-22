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
        this._verifyRequiredBindings();
        this._mountOptions();

        this.animType = null;
        this.currentSlide = this.options.initialSlide;
        this.nextClickable = true;
        this.prevClickable = false;
        this.isReady = true;
        this.isTrackMoving = false;
        this.nextOk = false;
        this.prevOk = false;
        this.slideStyle = {};
        this.trackStyle = {};
        this.transformType = null;
        this.transitionType = null;
        this.visibleIndicators = false;
        this.visibleNext = this.options.visibleNext;
        this.visiblePrev = this.options.visiblePrev;
        this.width = 0;
    }

    _mountOptions() {
        let options = angular.extend({}, this.ngCarouselOptions.getOptions());
        this.options = this.options || {};

        for (const item in options) {
            if (options.hasOwnProperty(item) && this.options[item]) {
                options[item] = this.options[item];
            }
        }

        this.options = options;
    }

    _verifyRequiredBindings() {
        let i = 0,
            fieldsLength = this.requiredBindings.length;

        this.template = this.template || 'default';

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
