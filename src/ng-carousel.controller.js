'use strict';

export class NgCarouselComponentController {
    constructor(ngCarouselOptions, $q, $timeout) {
        'ngInject';

        // injects
        this.ngCarouselOptions = ngCarouselOptions;
        this.$q = $q;
        this.$timeout = $timeout;

        this.compilationDesc = '';
        this.compilationFail = false;
        this.requiredBindings = [];
    }

    // 'private' methods
    _executeSlide(direction = 'next', type = 'horizontal') {
        let carousel = document.querySelector('.ng-carousel > .track > .carousel'),
            firstItem = document.querySelector('.ng-carousel > .track > .carousel > .item-carousel'),
            leftPosition = carousel.style.left,
            value = leftPosition.replace('px', '') || 0;
        
        value = parseInt(value);
        carousel.style.left = (direction == 'next') ? (value - this.itemWidth) + 'px' : (value + this.itemWidth) + 'px';
        this.currentSlide = (direction == 'next') ? this.currentSlide + 1 : this.currentSlide - 1;
        this._toggleNavigation(direction);
    }

    _getIndexOffset() {
        let scrollOffset = this.arrayCarousel.length % this.slidesToScroll !== 0,
            indexOffset = (scrollOffset) ? 0 : (this.arrayCarousel.length - this.currentSlide) % this.slidesToScroll;

        return indexOffset;
    }

    _init() {
        this._verifyRequiredBindings();
        this._mountOptions();
        this._renderItems();

        this.animType = null;
        this.currentSlide = this.options.initialSlide;
        this.nextClickable = true;
        this.prevClickable = true;
        this.isReady = true;
        this.isTrackMoving = false;
        this.itemWidth = 0;
        this.nextOk = false;
        this.prevOk = false;
        this.slideStyle = {};
        this.slidesToScroll = (this._isMobile()) ? this.options.slidesToScrollMobile : this.options.slidesToScrollDesktop;
        this.slidesToShow = (this._isMobile()) ? this.options.slidesToShowMobile : this.options.slidesToShowDesktop;
        this.trackStyle = {};
        this.transformType = null;
        this.transitionType = null;
        this.visibleIndicators = false;
        this.nextVisible = this.options.nextVisible;
        this.prevVisible = this.options.prevVisible;
        this.width = 1;

        this._mountIndicators();
    }

    _isMobile() {
        let device = navigator.userAgent || navigator.vendor || window.opera,
            isMobile = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(device) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(device.substr(0,4));

        return isMobile;
    }

    _mountIndicators() {
        const numberSlides = this.arrayCarousel.length / this.slidesToShow;
        let index = 0;
        this.numberIndicators = [];

        for (; index < numberSlides; index += 1) {
            this.numberIndicators.push(index);
        }
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

    _renderItems() {
        this.$timeout(() => {
            let allItems = document.querySelectorAll('.ng-carousel > .track > .carousel > .item-carousel'),
                allItemsLength = allItems.length,
                index = 0;

            this.itemWidth = allItems[0].clientWidth / this.slidesToShow;

            for (; index < allItemsLength; index += 1) {
                allItems[index].style.left = (index === 0) ? '0px' : `${ (this.itemWidth * index) }px`;
                allItems[index].style.width = `${ this.itemWidth }px`;
            }
        });
    }

    _toggleNavigation(type) {
        if (this.currentSlide == 0) {
            this.prevVisible = false;
        } else if (this.currentSlide == (this.arrayCarousel.length - 1)) {
            this.nextVisible = false;
        } else {
            this.prevVisible = true;
            this.nextVisible = true;
        }
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
    nextSlide() {
        if (!this.nextClickable) {
            return false;
        }

        this._executeSlide('next');
    }

    $onInit() {
        this._init();
    }

    prevSlide() {
        if (!this.prevClickable) {
            return false;
        }

        this._executeSlide('prev');
    }
}
