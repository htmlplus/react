import { _ as __decorate, h as html, d as attributes$1, e as host, P as Property, E as Event$1, H as Host, S as State, W as Watch, B as Bind, b as Element } from './index-8a680783.js';
import { proxy } from './proxy.js';
import 'react';

/**
 * @stable
 * @slot default - The default slot.
 */
let Intersection$1 = class Intersection {
    get disconnected() {
        return this.once && this.isIntersecting;
    }
    get options() {
        return {
            root: this.root,
            rootMargin: this.rootMargin,
            threshold: this.threshold
        };
    }
    watcher(next, prev, name) {
        switch (name) {
            case 'disabled':
                if (next)
                    this.unbind();
                else if (!this.disconnected)
                    this.bind();
                break;
            case 'once':
                if (next || this.disabled)
                    break;
                this.unbind();
                this.bind();
                break;
            case 'root':
            case 'rootMargin':
            case 'threshold':
                if (this.disabled || this.disconnected)
                    break;
                this.unbind();
                this.bind();
                break;
        }
    }
    bind() {
        this.observer = new IntersectionObserver(this.onIntersecting, this.options);
        this.observer.observe(this.$host);
    }
    unbind() {
        var _a;
        (_a = this.observer) === null || _a === void 0 ? void 0 : _a.disconnect();
        delete this.observer;
    }
    onIntersecting(entries) {
        const [entry] = entries;
        this.isIntersecting = entry.isIntersecting;
        this.plusChange(entry);
        if (!this.isIntersecting || !this.once)
            return;
        this.unbind();
    }
    connectedCallback() {
        if (this.disabled)
            return;
        this.bind();
    }
    disconnectedCallback() {
        this.unbind();
    }
    render() {
        return html `${attributes$1(host(this), [{
                "state": this.isIntersecting ? 'in' : 'out'
            }])}
        <slot />
      `;
    }
};
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
Intersection$1.TAG = "plus-intersection";
__decorate([
    Property({
        type: 2
    })
], Intersection$1.prototype, "disabled", void 0);
__decorate([
    Property({
        type: 2
    })
], Intersection$1.prototype, "once", void 0);
__decorate([
    Property({
        type: 0
    })
], Intersection$1.prototype, "root", void 0);
__decorate([
    Property({
        type: 256
    })
], Intersection$1.prototype, "rootMargin", void 0);
__decorate([
    Property({
        type: 65
    })
], Intersection$1.prototype, "threshold", void 0);
__decorate([
    Event$1()
], Intersection$1.prototype, "plusChange", void 0);
__decorate([
    Host()
], Intersection$1.prototype, "$host", void 0);
__decorate([
    State()
], Intersection$1.prototype, "isIntersecting", void 0);
__decorate([
    Watch(['behavior', 'disabled', 'once', 'root', 'rootMargin', 'threshold'])
], Intersection$1.prototype, "watcher", null);
__decorate([
    Bind()
], Intersection$1.prototype, "onIntersecting", null);
Intersection$1 = __decorate([
    Element()
], Intersection$1);

/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/
var Intersection = proxy(Intersection$1.TAG, ['disabled', 'once', 'root', 'rootMargin', 'threshold',], ['plusChange',]);

export { Intersection };
