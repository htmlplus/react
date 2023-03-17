import { _ as __decorate, P as Property, a as Element, u as uhtml } from './index-76a6338f.js';
import { proxy } from './proxy.js';
import 'react';

var css_248z = "*,:after,:before{box-sizing:border-box}:host,:host:after,:host:before{box-sizing:border-box}:host([hidden]:not([hidden=false])){display:none}:host{align-items:center;display:flex;justify-content:center}:host([inline]:not([inline=false])){display:inline-flex}";

/**
 * @stable
 * @slot default - The default slot.
 */
let Center$1 = class Center {
    render() {
        return uhtml.html `<slot />`;
    }
};
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
Center$1.TAG = "plus-center";
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
Center$1.STYLES = css_248z;
__decorate([
    Property({
        reflect: true,
        type: 2
    })
], Center$1.prototype, "inline", void 0);
Center$1 = __decorate([
    Element("plus-center")
], Center$1);

/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/
var Center = proxy('plus-center', ['inline'], []);

export { Center };
