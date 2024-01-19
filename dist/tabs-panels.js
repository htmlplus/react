import { _ as __decorate, P as PlusCore, h as html, b as Property, W as Watch, c as Element, q as createLink } from './index-7a2d17ac.js';
import { proxy } from './proxy.js';
import 'react';

var css_248z = ":host,:host:after,:host:before{box-sizing:border-box}:host *,:host :after,:host :before{box-sizing:border-box}:host([hidden]:not([hidden=false])){display:none!important}:host{display:block}";

const { reconnect } = createLink({
    crawl: true,
    namespace: ({ connector }) => connector ? `Tabs:${connector}` : undefined
});
/**
 * TODO: This element contains panels.
 * @slot default - The default slot.
 */
let TabsPanels$1 = class TabsPanels extends PlusCore {
    watcher() {
        reconnect(this);
    }
    render() {
        return html `<slot />`;
    }
};
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
TabsPanels$1.TAG = "plus-tabs-panels";
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
TabsPanels$1.STYLES = css_248z;
__decorate([
    Property({
        type: 256
    })
], TabsPanels$1.prototype, "connector", void 0);
__decorate([
    Watch(['connector'])
], TabsPanels$1.prototype, "watcher", null);
TabsPanels$1 = __decorate([
    Element()
], TabsPanels$1);

/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/
var TabsPanels = proxy(TabsPanels$1.TAG, ['connector',], []);

export { TabsPanels };
