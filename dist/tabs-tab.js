import { _ as __decorate, l as createLink, u as uhtml, P as Property, d as Attributes, B as Bind, b as Element } from './index-e0fc73b0.js';
import { proxy } from './proxy.js';
import 'react';

var css_248z = ":host,:host:after,:host:before{box-sizing:border-box}:host *,:host :after,:host :before{box-sizing:border-box}:host([hidden]:not([hidden=false])){display:none!important}:host{align-items:center;display:flex;justify-content:center;padding:.5rem 1rem;user-select:none}:host([disabled]:not([disabled=false])) span{opacity:.5}:host([active]:not([active=false])){background-color:#d2d2d2}";

const { Inject } = createLink({
    crawl: true
});
/**
 * TODO: Tabs make it easy to switch between different views.
 * @slot default - The default slot.
 */
let TabsTab$1 = class TabsTab {
    constructor() {
        this.change = () => console.log('TODO: can not use out of tabs');
    }
    get attributes() {
        return {
            active: this.tunnel && this.tunnel === this.value,
            onClick: this.onClick
        };
    }
    /**
     * Events handler
     */
    onClick() {
        if (this.disabled)
            return;
        this.change(this.value);
    }
    render() {
        return uhtml.html `<span>
        <slot />
      </span>`;
    }
};
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
TabsTab$1.TAG = "plus-tabs-tab";
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
TabsTab$1.STYLES = css_248z;
__decorate([
    Property({
        reflect: true,
        type: 2
    })
], TabsTab$1.prototype, "disabled", void 0);
__decorate([
    Property({
        type: 0
    })
], TabsTab$1.prototype, "value", void 0);
__decorate([
    Inject(true)
], TabsTab$1.prototype, "tunnel", void 0);
__decorate([
    Inject()
], TabsTab$1.prototype, "change", void 0);
__decorate([
    Attributes()
], TabsTab$1.prototype, "attributes", null);
__decorate([
    Bind()
], TabsTab$1.prototype, "onClick", null);
TabsTab$1 = __decorate([
    Element()
], TabsTab$1);

/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/
var TabsTab = proxy(TabsTab$1.TAG, ['disabled', 'value'], []);

export { TabsTab };
