import { _ as __decorate, P as Property, A as Attributes, a as Element, u as uhtml } from './index-76a6338f.js';
import { proxy } from './proxy.js';
import 'react';

var css_248z = "*,:after,:before{box-sizing:border-box}:host,:host:after,:host:before{box-sizing:border-box}:host([hidden]:not([hidden=false])){display:none}:host{speak:never;word-wrap:normal;-moz-osx-font-smoothing:grayscale;font-feature-settings:\"liga\";-webkit-font-feature-settings:\"liga\";-webkit-font-smoothing:antialiased;direction:ltr;display:inline-block;font-style:normal;font-variant:normal;font-weight:400;letter-spacing:normal;line-height:1;text-align:center;text-decoration:inherit;text-rendering:auto;text-rendering:optimizeLegibility;text-transform:none;white-space:nowrap}:host([flip]:not([flip=false])),:host([rotate]:not([rotate=false])){filter:none}:host([flip=both]){transform:scale(-1)}:host([flip=horizontal]){transform:scaleX(-1)}:host([flip=vertical]){transform:scaleY(-1)}:host([rotate=\"90\"]){transform:rotate(90deg)}:host([rotate=\"180\"]){transform:rotate(180deg)}:host([rotate=\"270\"]){transform:rotate(270deg)}:host([size=xs]){font-size:.75em}:host([size=sm]){font-size:.875em}:host([size=lg]){font-size:1.33333em}:host([size=\"1x\"]){font-size:1em}:host([size=\"2x\"]){font-size:2em}:host([size=\"3x\"]){font-size:3em}:host([size=\"4x\"]){font-size:4em}:host([size=\"5x\"]){font-size:5em}:host([size=\"6x\"]){font-size:6em}:host([size=\"7x\"]){font-size:7em}:host([size=\"8x\"]){font-size:8em}:host([size=\"9x\"]){font-size:9em}:host([size=\"10x\"]){font-size:10em}";

/**
 * @development
 * @slot default - The default slot.
 */
let Icon$1 = class Icon {
    get attributes() {
        if (!this.color)
            return;
        return {
            style: `color: ${this.color}`
        };
    }
    render() {
        return uhtml.html `<slot>${this.name}</slot>`;
    }
};
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
Icon$1.TAG = "plus-icon";
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
Icon$1.STYLES = css_248z;
__decorate([
    Property({
        reflect: true,
        type: 256
    })
], Icon$1.prototype, "color", void 0);
__decorate([
    Property({
        reflect: true,
        type: 8
    })
], Icon$1.prototype, "flip", void 0);
__decorate([
    Property({
        reflect: true,
        type: 256
    })
], Icon$1.prototype, "name", void 0);
__decorate([
    Property({
        reflect: true,
        type: 64
    })
], Icon$1.prototype, "rotate", void 0);
__decorate([
    Property({
        reflect: true,
        type: 256
    })
], Icon$1.prototype, "size", void 0);
__decorate([
    Attributes()
], Icon$1.prototype, "attributes", null);
Icon$1 = __decorate([
    Element("plus-icon")
], Icon$1);

/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/
var Icon = proxy('plus-icon', ['color', 'flip', 'name', 'rotate', 'size'], []);

export { Icon };
