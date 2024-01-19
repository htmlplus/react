import { _ as __decorate, P as PlusCore, h as html, b as Property, c as Element } from './index-7a2d17ac.js';
import { proxy } from './proxy.js';
import 'react';

var css_248z = ":host,:host:after,:host:before{box-sizing:border-box}:host *,:host :after,:host :before{box-sizing:border-box}:host([hidden]:not([hidden=false])){display:none!important}:host{background-clip:padding-box;background-color:#fff;border:1px solid rgba(0,0,0,.2);border-radius:.3rem;box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23);display:flex;flex-direction:column;outline:0;position:relative}";

/**
 * @slot default - The default slot.
 */
let DialogContent$1 = class DialogContent extends PlusCore {
    render() {
        return html `<slot />`;
    }
};
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
DialogContent$1.TAG = "plus-dialog-content";
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
DialogContent$1.STYLES = css_248z;
__decorate([
    Property({
        reflect: true,
        type: 2
    })
], DialogContent$1.prototype, "scrollable", void 0);
DialogContent$1 = __decorate([
    Element()
], DialogContent$1);

/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/
var DialogContent = proxy(DialogContent$1.TAG, ['scrollable',], []);

export { DialogContent };
