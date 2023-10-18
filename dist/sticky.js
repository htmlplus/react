import { _ as __decorate, P as PlusCore, k as toUnit, d as styles, h as html, e as attributes$1, f as host, b as Property, E as Event$1, Q as Query, S as State, W as Watch, B as Bind, c as Element } from './index-0dfb4429.js';
import { proxy } from './proxy.js';
import 'react';

var css_248z = ":host,:host:after,:host:before{box-sizing:border-box}:host *,:host :after,:host :before{box-sizing:border-box}:host([hidden]:not([hidden=false])){display:none!important}:host{display:block;position:sticky;will-change:auto}.sizer-wrapper{pointer-events:none;position:relative;visibility:hidden}.sizer{position:absolute}";

/**
 * @stable
 * @slot default - The default slot.
 * @slot normal  - Activated when the state becomes `normal`. To enable, set the `watcher` property to `true`.
 * @slot stick   - Activated when the state becomes `stick`. To enable, set the `watcher` property to `true`.
 */
let Sticky$1 = class Sticky extends PlusCore {
    constructor() {
        super(...arguments);
        /**
         * Specifies the space from top.
         */
        this.top = 0;
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
    bind() {
        if (!this.watcher)
            return;
        // TODO
        // if (this.disabled) return;
        this.observer = new IntersectionObserver(this.onIntersecting, {
            threshold: [1]
        });
        this.observer.observe(this.$sizer);
    }
    unbind() {
        // TODO: immediately rerenders after remove `watcher` attribute
        requestAnimationFrame(() => {
            var _a;
            this.state = undefined;
            (_a = this.observer) === null || _a === void 0 ? void 0 : _a.disconnect();
        });
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
        return html `${attributes$1(host(this), [{
                "state": this.watcher ? this.state : null
            }, {
                "style": styles(this.style)
            }])}
        <div class="sizer-wrapper">
          <div class="sizer" style=${styles(this.sizer)}></div>
        </div>
        <slot />
        ${this.state && html `<div class=${this.state}>
            <slot name=${this.state} />
          </div>`}
      `;
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
    Query('.sizer')
], Sticky$1.prototype, "$sizer", void 0);
__decorate([
    State()
], Sticky$1.prototype, "state", void 0);
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
var Sticky = proxy(Sticky$1.TAG, ['top', 'watcher', 'zIndex',], ['plusChange',]);

export { Sticky };
