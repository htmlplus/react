import { _ as __decorate, u as createLink, P as PlusCore, h as html, b as Property, E as Event$1, W as Watch, c as Element } from './index-7d763b00.js';
import { proxy } from './proxy.js';
import 'react';

var css_248z = ":host,:host:after,:host:before{box-sizing:border-box}:host *,:host :after,:host :before{box-sizing:border-box}:host([hidden]:not([hidden=false])){display:none!important}:host{display:flex;flex-direction:column}:host([vertical]:not([vertical=false])){flex-direction:row}:host([vertical]:not([vertical=false])) ::slotted(plus-tabs-bar){flex-direction:column}:host([vertical]:not([vertical=false])) ::slotted(plus-tabs-bar[reverse]:not([reverse=false])){flex-direction:column-reverse}";

const { Action, Observable, reconnect } = createLink({
    crawl: false,
    namespace: ({ connector }) => connector ? `Tabs:${connector}` : undefined
});
/**
 * @development
 * @slot default - The default slot.
 */
let Tabs$1 = class Tabs extends PlusCore {
    watcher(next, prev, name) {
        switch (name) {
            case 'connector':
                reconnect(this);
                break;
            case 'value':
                this.tunnel = next;
                break;
        }
    }
    broadcast(value) {
        this.tunnel = value;
    }
    change(value) {
        const event = this.plusChange(value);
        if (event.defaultPrevented)
            return;
        this.value = value;
        this.broadcast(this.value);
    }
    initialize() {
        this.broadcast(this.value);
    }
    connectedCallback() {
        this.initialize();
    }
    render() {
        return html `<slot />`;
    }
};
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
Tabs$1.TAG = "plus-tabs";
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
Tabs$1.STYLES = css_248z;
__decorate([
    Property({
        type: 0
    })
], Tabs$1.prototype, "value", void 0);
__decorate([
    Property({
        reflect: true,
        type: 2
    })
], Tabs$1.prototype, "vertical", void 0);
__decorate([
    Property({
        type: 256
    })
], Tabs$1.prototype, "connector", void 0);
__decorate([
    Event$1({
        cancelable: true
    })
], Tabs$1.prototype, "plusChange", void 0);
__decorate([
    Observable()
], Tabs$1.prototype, "tunnel", void 0);
__decorate([
    Watch(['connector', 'value'])
], Tabs$1.prototype, "watcher", null);
__decorate([
    Action()
], Tabs$1.prototype, "change", null);
Tabs$1 = __decorate([
    Element()
], Tabs$1);

/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/
var Tabs = proxy(Tabs$1.TAG, ['value', 'vertical', 'connector',], ['plusChange',]);

export { Tabs };
