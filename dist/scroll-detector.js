import { _ as __decorate, P as Property, E as Event$1, W as Watch, B as Bind, a as Element, o as on, c as off } from './index-76a6338f.js';
import { proxy } from './proxy.js';
import 'react';

/**
 * @stable
 */
let ScrollDetector$1 = class ScrollDetector {
    constructor() {
        /**
         * Specifies the reference of the scroll.
         */
        this.reference = 'document';
    }
    get $reference() {
        if (typeof this.reference != 'string')
            return this.reference;
        if (this.reference == 'document')
            return document.documentElement;
        return document.querySelector(this.reference);
    }
    bind() {
        if (this.disabled)
            return;
        if (!this.$reference)
            return;
        on(this.$reference, 'scroll', this.onScroll);
        this.onScroll();
    }
    unbind() {
        off(this.$reference, 'scroll', this.onScroll);
    }
    watcher(next) {
        next ? this.unbind() : this.bind();
    }
    onScroll() {
        const { scrollTop, scrollLeft, scrollHeight, scrollWidth, clientHeight, clientWidth } = this.$reference;
        const offset = this.vertical ? scrollTop : scrollLeft;
        const total = this.vertical ? scrollHeight : scrollWidth;
        const viewport = this.vertical ? clientHeight : clientWidth;
        const overflow = total - viewport;
        const progress = overflow ? Math.round(offset / overflow * 100) : 0;
        if (this.offset == progress)
            return;
        this.offset = offset;
        this.plusChange({
            offset,
            overflow,
            progress,
            total,
            viewport
        });
    }
    connectedCallback() {
        this.bind();
    }
    disconnectedCallback() {
        this.unbind();
    }
    render() {
        return null;
    }
};
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
ScrollDetector$1.TAG = "plus-scroll-detector";
__decorate([
    Property({
        type: 2
    })
], ScrollDetector$1.prototype, "disabled", void 0);
__decorate([
    Property({
        type: 264
    })
], ScrollDetector$1.prototype, "reference", void 0);
__decorate([
    Property({
        type: 2
    })
], ScrollDetector$1.prototype, "vertical", void 0);
__decorate([
    Event$1()
], ScrollDetector$1.prototype, "plusChange", void 0);
__decorate([
    Watch(['disabled', 'reference'])
], ScrollDetector$1.prototype, "watcher", null);
__decorate([
    Bind()
], ScrollDetector$1.prototype, "onScroll", null);
ScrollDetector$1 = __decorate([
    Element("plus-scroll-detector")
], ScrollDetector$1);

/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/
var ScrollDetector = proxy('plus-scroll-detector', ['disabled', 'reference', 'vertical'], ['plusChange']);

export { ScrollDetector };
