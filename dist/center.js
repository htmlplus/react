import { _ as __decorate, h as html, P as Property, b as Element } from './index-8a680783.js';
import { proxy } from './proxy.js';
import 'react';

var css_248z = ":host,:host:after,:host:before{box-sizing:border-box}:host *,:host :after,:host :before{box-sizing:border-box}:host([hidden]:not([hidden=false])){display:none!important}:host{align-items:center;display:flex;justify-content:center}:host([inline]:not([inline=false])){display:inline-flex}";

/**
 * @stable
 * @slot default - The default slot.
 */
let Center$1 = class Center {
    render() {
        return html `<slot />`;
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
    Element()
], Center$1);

/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/
var Center = proxy(Center$1.TAG, ['inline',], []);

export { Center };
