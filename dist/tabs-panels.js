import { _ as __decorate, u as uhtml, P as Property, W as Watch, a as Element, l as createLink } from './index-8131a6bb.js';
import { proxy } from './proxy.js';
import 'react';

var css_248z = "*,:after,:before{box-sizing:border-box}:host,:host:after,:host:before{box-sizing:border-box}:host([hidden]:not([hidden=false])){display:none}:host{display:block}";

const { reconnect } = createLink({
    crawl: true,
    namespace: ({ connector }) => connector ? `Tabs:${connector}` : undefined
});
/**
 * TODO: This component contains panels.
 * @slot default - The default slot.
 */
let TabsPanels$1 = class TabsPanels {
    /**
     * Watchers
     */
    watcher() {
        reconnect(this);
    }
    render() {
        return uhtml.html `<slot />`;
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
var TabsPanels = proxy(TabsPanels$1.TAG, ['connector'], []);

export { TabsPanels };
