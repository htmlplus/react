import { _ as __decorate, P as Property, A as Attributes, a as Element, f as toUnit, u as uhtml } from './index-76a6338f.js';
import { proxy } from './proxy.js';
import 'react';

var css_248z = "*,:after,:before{box-sizing:border-box}:host,:host:after,:host:before{box-sizing:border-box}:host([hidden]:not([hidden=false])){display:none}:host{--plus-avatar-border-radius:4px;--plus-avatar-font-size-ratio:0.35;--plus-avatar-size:auto}:host{align-items:center;background-color:#d3d3d3;border-radius:var(--plus-avatar-border-radius);color:gray;display:inline-flex;font-size:calc(var(--plus-avatar-size)*var(--plus-avatar-font-size-ratio));height:var(--plus-avatar-size);justify-content:center;position:relative;text-align:center;text-transform:uppercase;user-select:none;vertical-align:middle;width:var(--plus-avatar-size)}:host([shape=circle]){--plus-avatar-border-radius:50%}:host([shape=round]){--plus-avatar-border-radius:4px}:host([shape=tile]){--plus-avatar-border-radius:0}:host([size=xxs]){--plus-avatar-size:1rem}:host([size=xs]){--plus-avatar-size:1.5rem}:host([size=sm]){--plus-avatar-size:2rem}:host([size=md]){--plus-avatar-size:3rem}:host([size=lg]){--plus-avatar-size:4rem}:host([size=xl]){--plus-avatar-size:6rem}:host([size=xxl]){--plus-avatar-size:8rem}::slotted(*){border-radius:var(--plus-avatar-border-radius);height:100%;inset:0;position:absolute;width:100%}";

const AVATAR_SIZES = ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'];

/**
 * @slot default - The default slot.
 */
let Avatar$1 = class Avatar {
    constructor() {
        /**
         * Specifies the shape of the component.
         */
        this.shape = 'round';
        /**
         * Specifies the size of the component.
         */
        this.size = 'md';
    }
    get attributes() {
        if (AVATAR_SIZES.includes(this.size))
            return;
        return {
            style: `--plus-avatar-size: ${toUnit(this.size)}`
        };
    }
    render() {
        return uhtml.html `<slot />`;
    }
};
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
Avatar$1.TAG = "plus-avatar";
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
Avatar$1.STYLES = css_248z;
__decorate([
    Property({
        reflect: true,
        type: 8
    })
], Avatar$1.prototype, "shape", void 0);
__decorate([
    Property({
        reflect: true,
        type: 320
    })
], Avatar$1.prototype, "size", void 0);
__decorate([
    Attributes()
], Avatar$1.prototype, "attributes", null);
Avatar$1 = __decorate([
    Element("plus-avatar")
], Avatar$1);

/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/
var Avatar = proxy('plus-avatar', ['shape', 'size'], []);

export { Avatar };
