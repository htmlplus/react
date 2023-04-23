import { _ as __decorate, u as uhtml, P as Property, d as Attributes, b as Element } from './index-e0fc73b0.js';
import { proxy } from './proxy.js';
import 'react';

var css_248z = ":host,:host:after,:host:before{box-sizing:border-box}:host *,:host :after,:host :before{box-sizing:border-box}:host([hidden]:not([hidden=false])){display:none!important}:host{display:flex;flex:0 0 auto;overflow:auto}:host([reverse]:not([reverse=false])){flex-direction:row-reverse}:host([grow]:not([grow=false])) ::slotted(plus-tabs-tab){flex-grow:1}:host([justify=end][reverse]:not([reverse=false])),:host([justify=start]){justify-content:flex-start}:host([justify=center]){justify-content:center}:host([justify=end]),:host([justify=start][reverse]:not([reverse=false])){justify-content:flex-end}";

/**
 * TODO: Arranges tabs within a bar.
 * @slot default - The default slot.
 */
let TabsBar$1 = class TabsBar {
    constructor() {
        /**
         * Specifies how the tabs are aligned.
         */
        this.justify = 'start';
    }
    get attributes() {
        return {
            role: 'tablist'
        };
    }
    render() {
        return uhtml.html `<slot />`;
    }
};
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
TabsBar$1.TAG = "plus-tabs-bar";
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
TabsBar$1.STYLES = css_248z;
__decorate([
    Property({
        reflect: true,
        type: 2
    })
], TabsBar$1.prototype, "grow", void 0);
__decorate([
    Property({
        reflect: true,
        type: 8
    })
], TabsBar$1.prototype, "justify", void 0);
__decorate([
    Property({
        reflect: true,
        type: 2
    })
], TabsBar$1.prototype, "reverse", void 0);
__decorate([
    Attributes()
], TabsBar$1.prototype, "attributes", null);
TabsBar$1 = __decorate([
    Element()
], TabsBar$1);

/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/
var TabsBar = proxy(TabsBar$1.TAG, ['grow', 'justify', 'reverse'], []);

export { TabsBar };
