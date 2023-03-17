import { _ as __decorate, P as Property, E as Event$1, W as Watch, B as Bind, a as Element, h as host, o as on, c as off, u as uhtml } from './index-76a6338f.js';
import { proxy } from './proxy.js';
import 'react';

/**
 * @stable
 * @slot default - The default slot.
 */
let ClickOutside$1 = class ClickOutside {
    get $host() {
        return host(this);
    }
    get options() {
        return {
            capture: this.capture
        };
    }
    bind() {
        on(this.$host, 'outside', this.onClickOutside, this.options);
    }
    unbind() {
        off(this.$host, 'outside', this.onClickOutside, this.options);
    }
    watcher(next, prev, name) {
        switch (name) {
            case 'disabled':
                next ? this.unbind() : this.bind();
                break;
            case 'capture':
            case 'once':
                this.unbind();
                this.bind();
                break;
        }
    }
    onClickOutside() {
        if (this.once)
            this.unbind();
        this.plusClickOutside();
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
        return uhtml.html `<slot />`;
    }
};
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
ClickOutside$1.TAG = "plus-click-outside";
__decorate([
    Property({
        type: 2
    })
], ClickOutside$1.prototype, "capture", void 0);
__decorate([
    Property({
        reflect: true,
        type: 2
    })
], ClickOutside$1.prototype, "disabled", void 0);
__decorate([
    Property({
        type: 2
    })
], ClickOutside$1.prototype, "once", void 0);
__decorate([
    Event$1({
        cancelable: true
    })
], ClickOutside$1.prototype, "plusClickOutside", void 0);
__decorate([
    Watch(['capture', 'disabled', 'once'])
], ClickOutside$1.prototype, "watcher", null);
__decorate([
    Bind()
], ClickOutside$1.prototype, "onClickOutside", null);
ClickOutside$1 = __decorate([
    Element("plus-click-outside")
], ClickOutside$1);

/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/
var ClickOutside = proxy('plus-click-outside', ['capture', 'disabled', 'once'], ['plusClickOutside']);

export { ClickOutside };
