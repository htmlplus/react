import { _ as __decorate, P as PlusCore, h as html, c as Element } from './index-de22bbcf.js';
import { proxy } from './proxy.js';
import 'react';

var css_248z = ":host,:host:after,:host:before{box-sizing:border-box}:host *,:host :after,:host :before{box-sizing:border-box}:host([hidden]:not([hidden=false])){display:none!important}:host{align-items:center;border-bottom:1px solid rgba(0,0,0,.2);border-top-left-radius:calc(.3rem - 1px);border-top-right-radius:calc(.3rem - 1px);display:flex;flex-shrink:0;justify-content:space-between;padding:1rem}";

/**
 * @slot default - The default slot.
 */
let DialogHeader$1 = class DialogHeader extends PlusCore {
    render() {
        return html `<slot />`;
    }
};
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
DialogHeader$1.TAG = "plus-dialog-header";
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
DialogHeader$1.STYLES = css_248z;
DialogHeader$1 = __decorate([
    Element()
], DialogHeader$1);

/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/
var DialogHeader = proxy(DialogHeader$1.TAG, [], []);

export { DialogHeader };
