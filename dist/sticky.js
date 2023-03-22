import { _ as __decorate, f as toUnit, b as styles, u as uhtml, P as Property, E as Event$1, S as State, A as Attributes, W as Watch, B as Bind, a as Element } from './index-8131a6bb.js';
import { proxy } from './proxy.js';
import 'react';

var css_248z = "*,:after,:before{box-sizing:border-box}:host,:host:after,:host:before{box-sizing:border-box}:host([hidden]:not([hidden=false])){display:none}:host{display:block;position:sticky;will-change:auto}.sizer-wrapper{pointer-events:none;position:relative;visibility:hidden}.sizer{position:absolute}";

/**
 * @stable
 * @slot default - The default slot.
 * @slot normal  - Activated when the state becomes `normal`. To enable, set the `watcher` property to `true`.
 * @slot stick   - Activated when the state becomes `stick`. To enable, set the `watcher` property to `true`.
 */
let Sticky$1 = class Sticky {
    constructor() {
        /**
         * Specifies the space from top.
         */
        this.top = 0;
    }
    get attributes() {
        return {
            state: this.watcher ? this.state : null,
            style: this.style
        };
    }
    get sizer() {
        const top = toUnit(this.top);
        if (!top)
            return;
        return {
            top: `calc((${top} + 1px) * -1)`
        };
    }
    get style() {
        var _a;
        return styles({
            top: toUnit(this.top),
            zIndex: (_a = this.zIndex) !== null && _a !== void 0 ? _a : null
        });
    }
    bind() {
        if (!this.watcher)
            return;
        // TODO
        // if (this.disabled) return;
        this.observer = new IntersectionObserver(this.onIntersecting, {
            threshold: [1]
        });
        this.observer.observe(this.$element);
    }
    unbind() {
        // TODO: immediately rerenders after remove `watcher` attribute
        requestAnimationFrame(() => {
            var _a;
            this.state = undefined;
            (_a = this.observer) === null || _a === void 0 ? void 0 : _a.disconnect();
        });
    }
    watchers(next, prev, key) {
        switch (key) {
            case 'disabled':
                next ? this.unbind() : this.bind();
                break;
            case 'watcher':
                next ? this.bind() : this.unbind();
                break;
        }
    }
    onIntersecting(entries) {
        const [entry] = entries;
        this.state = entry.intersectionRatio < 1 ? 'stick' : 'normal';
        this.plusChange(this.state);
    }
    loadedCallback() {
        this.bind();
    }
    disconnectedCallback() {
        this.unbind();
    }
    render() {
        return uhtml.html `<div class="sizer-wrapper">
          <div class="sizer" ref=${$element => this.$element = $element} style=${styles(this.sizer)}></div>
        </div><slot />${this.state && uhtml.html `<div class=${this.state}>
            <slot name=${this.state} />
          </div>`}`;
    }
};
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
Sticky$1.TAG = "plus-sticky";
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
Sticky$1.STYLES = css_248z;
__decorate([
    Property({
        type: 320
    })
], Sticky$1.prototype, "top", void 0);
__decorate([
    Property({
        type: 2
    })
], Sticky$1.prototype, "watcher", void 0);
__decorate([
    Property({
        type: 64
    })
], Sticky$1.prototype, "zIndex", void 0);
__decorate([
    Event$1()
], Sticky$1.prototype, "plusChange", void 0);
__decorate([
    State()
], Sticky$1.prototype, "state", void 0);
__decorate([
    Attributes()
], Sticky$1.prototype, "attributes", null);
__decorate([
    Watch(['disabled', 'watcher'])
], Sticky$1.prototype, "watchers", null);
__decorate([
    Bind()
], Sticky$1.prototype, "onIntersecting", null);
Sticky$1 = __decorate([
    Element()
], Sticky$1);

/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/
var Sticky = proxy(Sticky$1.TAG, ['top', 'watcher', 'zIndex'], ['plusChange']);

export { Sticky };
