import { _ as __decorate, m as createLink, u as uhtml, P as Property, d as Attributes, W as Watch, B as Bind, b as Element } from './index-fa41da57.js';
import { proxy } from './proxy.js';
import 'react';

var css_248z = ":host,:host:after,:host:before{box-sizing:border-box}:host *,:host :after,:host :before{box-sizing:border-box}:host([hidden]:not([hidden=false])){display:none!important}:host{cursor:default;display:inline-block;user-select:none}:host([state=close]) [name=open],:host([state=open]) [name=close]{display:none}";

const { Inject, reconnect } = createLink({
    crawl: true,
    namespace: ({ connector }) => connector ? `Drawer:${connector}` : undefined
});
/**
 * @slot default - The default slot.
 * @TODO open    - Specifies the content of toggler when it's opened.
 * @TODO close   - Specifies the content of toggler when it's closed.
 */
let DrawerToggler$1 = class DrawerToggler {
    constructor() {
        this.toggle = () => console.log('TODO: can not use out of drawer');
    }
    get attributes() {
        return {
            role: 'button',
            state: this.tunnel ? 'open' : 'close',
            onClick: this.onClick
        };
    }
    get text() {
        return this.tunnel ? 'Close' : 'Open';
    }
    /**
     * Watchers
     */
    watcher() {
        reconnect(this);
    }
    /**
     * Events handler
     */
    onClick() {
        this.toggle();
    }
    render() {
        return uhtml.html `<slot>${this.text}</slot>`;
    }
};
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
DrawerToggler$1.TAG = "plus-drawer-toggler";
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
DrawerToggler$1.STYLES = css_248z;
__decorate([
    Property({
        type: 256
    })
], DrawerToggler$1.prototype, "connector", void 0);
__decorate([
    Inject()
], DrawerToggler$1.prototype, "toggle", void 0);
__decorate([
    Inject(true)
], DrawerToggler$1.prototype, "tunnel", void 0);
__decorate([
    Attributes()
], DrawerToggler$1.prototype, "attributes", null);
__decorate([
    Watch(['connector'])
], DrawerToggler$1.prototype, "watcher", null);
__decorate([
    Bind()
], DrawerToggler$1.prototype, "onClick", null);
DrawerToggler$1 = __decorate([
    Element()
], DrawerToggler$1);

/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/
var DrawerToggler = proxy(DrawerToggler$1.TAG, ['connector'], []);

export { DrawerToggler };