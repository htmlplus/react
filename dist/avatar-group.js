import { _ as __decorate, P as Property, a as Element, u as uhtml } from './index-1398441b.js';
import { proxy } from './proxy.js';
import 'react';

var css_248z = "*,:after,:before{box-sizing:border-box}:host,:host:after,:host:before{box-sizing:border-box}:host([hidden]:not([hidden=false])){display:none}:host{--plus-avatar-group-box-shadow:0 0 0 2px #fff;--plus-avatar-group-gutter:0.5rem;--plus-avatar-group-overlap:-0.5rem}:host{align-items:center;display:inline-flex;flex-wrap:wrap;gap:var(--plus-avatar-group-gutter)}:host([hoverable]:not([hoverable=false])) ::slotted(:hover){z-index:1}:host([stacked]:not([stacked=false])){gap:0}:host([stacked]:not([stacked=false])) ::slotted(*){box-shadow:var(--plus-avatar-group-box-shadow)}:host([stacked]:not([stacked=false])) ::slotted(:not(:last-child)){margin-inline-end:var(--plus-avatar-group-overlap)}";

/**
 * @slot default - The default slot.
 */
let AvatarGroup$1 = class AvatarGroup {
    render() {
        return uhtml.html `<slot />`;
    }
};
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
AvatarGroup$1.TAG = "plus-avatar-group";
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
AvatarGroup$1.STYLES = css_248z;
__decorate([
    Property({
        reflect: true,
        type: 2
    })
], AvatarGroup$1.prototype, "hoverable", void 0);
__decorate([
    Property({
        reflect: true,
        type: 2
    })
], AvatarGroup$1.prototype, "stacked", void 0);
AvatarGroup$1 = __decorate([
    Element("plus-avatar-group")
], AvatarGroup$1);

/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/
var AvatarGroup = proxy('plus-avatar-group', ['hoverable', 'stacked'], []);

export { AvatarGroup };
