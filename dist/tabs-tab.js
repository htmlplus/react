import { _ as __decorate, q as createLink, P as PlusCore, h as html, e as attributes$1, f as host, b as Property, B as Bind, c as Element } from './index-de22bbcf.js';
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
let TabsTab$1 = class TabsTab extends PlusCore {
    constructor() {
        super(...arguments);
        this.change = () => console.log('TODO: can not use out of tabs');
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
        return html `${attributes$1(host(this), [{
                "active": this.tunnel && this.tunnel === this.value
            }, {
                "onClick": this.onClick
            }])}
        <span>
          <slot />
        </span>
      `;
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
    Bind()
], TabsTab$1.prototype, "onClick", null);
TabsTab$1 = __decorate([
    Element()
], TabsTab$1);

/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/
var TabsTab = proxy(TabsTab$1.TAG, ['disabled', 'value',], []);

export { TabsTab };
