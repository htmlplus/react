import { _ as __decorate, P as PlusCore, o as on, i as off, b as Property, E as Event$1, W as Watch, B as Bind, c as Element } from './index-0dfb4429.js';
import { proxy } from './proxy.js';
import 'react';

/**
 * @stable
 */
let ScrollDetector$1 = class ScrollDetector extends PlusCore {
    constructor() {
        super(...arguments);
        /**
         * Specifies the reference of the scroll.
         */
        this.reference = 'document';
    }
    get $reference() {
        if (typeof this.reference != 'string')
            return this.reference;
        if (this.reference == 'document')
            return document;
        return document.querySelector(this.reference);
    }
    watcher(next) {
        next ? this.unbind() : this.bind();
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
        // TODO
        try {
            off(this.$reference, 'scroll', this.onScroll);
        }
        catch (_a) { }
    }
    onScroll() {
        const { scrollTop, scrollLeft, scrollHeight, scrollWidth, clientHeight, clientWidth } = this.$reference.documentElement || this.$reference;
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
    Element()
], ScrollDetector$1);

/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/
var ScrollDetector = proxy(ScrollDetector$1.TAG, ['disabled', 'reference', 'vertical',], ['plusChange',]);

export { ScrollDetector };
