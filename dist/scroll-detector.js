import { _ as __decorate, P as Property, E as Event$1, W as Watch, B as Bind, a as Element, o as on, e as off } from './index-1628d3b2.js';
import { proxy } from './proxy.js';
import 'react';

/**
 * @stable
 */
let ScrollDetector$1 = class ScrollDetector {
    constructor() {
        /**
         * Specifies the source of the scroll.
         */
        this.source = 'document';
    }
    get $source() {
        if (typeof this.source != 'string')
            return this.source;
        if (this.source == 'document')
            return document.documentElement;
        return document.querySelector(this.source);
    }
    bind() {
        if (this.disabled)
            return;
        if (!this.$source)
            return;
        on(this.$source, 'scroll', this.onScroll);
        this.onScroll();
    }
    unbind() {
        off(this.$source, 'scroll', this.onScroll);
    }
    watcher(next) {
        next ? this.unbind() : this.bind();
    }
    onScroll() {
        const { scrollTop, scrollLeft, scrollHeight, scrollWidth, clientHeight, clientWidth } = this.$source;
        const offset = this.vertical ? scrollTop : scrollLeft;
        const total = this.vertical ? scrollHeight : scrollWidth;
        const viewport = this.vertical ? clientHeight : clientWidth;
        const overflow = total - viewport;
        const progress = Math.round(offset / overflow * 100);
        if (this.offset == progress)
            return;
        this.offset = offset;
        const detail = {
            offset,
            overflow,
            progress,
            total,
            viewport
        };
        this.plusChange(detail);
    }
    loadedCallback() {
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
        type: 256
    })
], ScrollDetector$1.prototype, "source", void 0);
__decorate([
    Property({
        type: 2
    })
], ScrollDetector$1.prototype, "vertical", void 0);
__decorate([
    Event$1()
], ScrollDetector$1.prototype, "plusChange", void 0);
__decorate([
    Watch(['disabled', 'source'])
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
var ScrollDetector = proxy('plus-scroll-detector', ['disabled', 'source', 'vertical'], ['plusChange']);

export { ScrollDetector };
