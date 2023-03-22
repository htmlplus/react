import { _ as __decorate, u as uhtml, P as Property, a as Element } from './index-8131a6bb.js';
import { proxy } from './proxy.js';
import 'react';

var css_248z = "*,:after,:before{box-sizing:border-box}:host,:host:after,:host:before{box-sizing:border-box}:host([hidden]:not([hidden=false])){display:none}:host{flex:1 1 auto;padding:1rem;position:relative}:host([scrollable]:not([scrollable=false])){overflow:hidden;overflow-y:auto}";

/**
 * @slot default - The default slot.
 */
let DialogBody$1 = class DialogBody {
    render() {
        return uhtml.html `<slot />`;
    }
};
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
DialogBody$1.TAG = "plus-dialog-body";
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
DialogBody$1.STYLES = css_248z;
__decorate([
    Property({
        reflect: true,
        type: 2
    })
], DialogBody$1.prototype, "scrollable", void 0);
DialogBody$1 = __decorate([
    Element()
], DialogBody$1);

/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/
var DialogBody = proxy(DialogBody$1.TAG, ['scrollable'], []);

export { DialogBody };
