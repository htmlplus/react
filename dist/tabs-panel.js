import { _ as __decorate, j as createLink, P as Property, A as Attributes, a as Element, u as uhtml } from './index-1398441b.js';
import { proxy } from './proxy.js';
import 'react';

var css_248z = "*,:after,:before{box-sizing:border-box}:host,:host:after,:host:before{box-sizing:border-box}:host([hidden]:not([hidden=false])){display:none}:host{display:none}:host([active]:not([active=false])){display:block}";

const { Inject } = createLink({
    crawl: true
});
/**
 * TODO: This component contains the contents of each tab and when the tab is activated the panel is displayed.
 * @slot default - The default slot.
 */
let TabsPanel$1 = class TabsPanel {
    get attributes() {
        return {
            active: this.tunnel && this.tunnel === this.value
        };
    }
    render() {
        return uhtml.html `<slot />`;
    }
};
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
TabsPanel$1.TAG = "plus-tabs-panel";
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
TabsPanel$1.STYLES = css_248z;
__decorate([
    Property({
        type: 0
    })
], TabsPanel$1.prototype, "value", void 0);
__decorate([
    Inject(true)
], TabsPanel$1.prototype, "tunnel", void 0);
__decorate([
    Attributes()
], TabsPanel$1.prototype, "attributes", null);
TabsPanel$1 = __decorate([
    Element("plus-tabs-panel")
], TabsPanel$1);

/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/
var TabsPanel = proxy('plus-tabs-panel', ['value'], []);

export { TabsPanel };
