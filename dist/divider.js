import { _ as __decorate, P as PlusCore, h as html, e as attributes$1, f as host, b as Property, c as Element } from './index-0dfb4429.js';
import { proxy } from './proxy.js';
import 'react';

var css_248z = ":host,:host:after,:host:before{box-sizing:border-box}:host *,:host :after,:host :before{box-sizing:border-box}:host([hidden]:not([hidden=false])){display:none!important}:host{--plus-divider-color:grey;--plus-divider-gutter:0.5rem;--plus-divider-opacity:0.25;--plus-divider-type:unset;--plus-divider-width:unset}:host{align-items:center;color:var(--plus-divider-color);display:flex;font-size:.75rem}:host:after,:host:before{content:\"\";flex:1 1 auto;opacity:var(--plus-divider-opacity)}:host([placement=end]):after,:host([placement=start]):before{content:none}:host([type=dashed]){--plus-divider-type:dashed}:host([type=dotted]){--plus-divider-type:dotted}:host([type=double]){--plus-divider-type:double}:host([type=groove]){--plus-divider-type:groove}:host([type=inset]){--plus-divider-type:inset}:host([type=outset]){--plus-divider-type:outset}:host([type=ridge]){--plus-divider-type:ridge}:host([type=solid]){--plus-divider-type:solid}:host([width=xs]){--plus-divider-width:1px}:host([width=sm]){--plus-divider-width:2px}:host([width=md]){--plus-divider-width:3px}:host([width=lg]){--plus-divider-width:4px}:host([width=xl]){--plus-divider-width:5px}:host([aria-orientation=horizontal]){flex-direction:row}:host([aria-orientation=horizontal]):after,:host([aria-orientation=horizontal]):before{border-top:var(--plus-divider-width) var(--plus-divider-type) var(--plus-divider-color)}:host([aria-orientation=horizontal]):before{margin-inline-end:var(--plus-divider-gutter)}:host([aria-orientation=horizontal]):after{margin-inline-start:var(--plus-divider-gutter)}:host([aria-orientation=horizontal]:empty):before{margin-inline-end:0}:host([aria-orientation=horizontal]:empty):after{margin-inline-start:0}:host([aria-orientation=horizontal][variant=inset]):before{margin-inline-start:5rem}:host([aria-orientation=horizontal][variant=middle]):before{margin-inline-start:1rem}:host([aria-orientation=horizontal][variant=middle]):after{margin-inline-end:1rem}:host([aria-orientation=vertical]){align-self:stretch;flex-direction:column;height:auto;min-height:100%}:host([aria-orientation=vertical]):after,:host([aria-orientation=vertical]):before{border-left:var(--plus-divider-width) var(--plus-divider-type) var(--plus-divider-color)}:host([aria-orientation=vertical]):before{margin-block-end:var(--plus-divider-gutter)}:host([aria-orientation=vertical]):after{margin-block-start:var(--plus-divider-gutter)}:host([aria-orientation=vertical]:empty):after,:host([aria-orientation=vertical]:empty):before{margin-block:0}:host([aria-orientation=vertical][variant=inset]):before{margin-block-start:5rem}:host([aria-orientation=vertical][variant=middle]):before{margin-block-start:1rem}:host([aria-orientation=vertical][variant=middle]):after{margin-block-end:1rem}";

let Divider$1 = class Divider extends PlusCore {
    constructor() {
        super(...arguments);
        /**
         * Specifies the location of the default slot.
         */
        this.placement = 'center';
        /**
         * Specifies the width of the border.
         */
        this.width = 'md';
        /**
         * Specifies the style of the border.
         */
        this.type = 'solid';
        /**
         * Specifies the amount of indentation.
         */
        this.variant = 'full';
    }
    render() {
        return html `${attributes$1(host(this), [{
                "aria-orientation": this.vertical ? 'vertical' : 'horizontal'
            }, {
                "role": "separator"
            }])}
        <slot />
      `;
    }
};
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
Divider$1.TAG = "plus-divider";
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
Divider$1.STYLES = css_248z;
__decorate([
    Property({
        reflect: true,
        type: 8
    })
], Divider$1.prototype, "placement", void 0);
__decorate([
    Property({
        reflect: true,
        type: 8
    })
], Divider$1.prototype, "width", void 0);
__decorate([
    Property({
        reflect: true,
        type: 8
    })
], Divider$1.prototype, "type", void 0);
__decorate([
    Property({
        reflect: true,
        type: 8
    })
], Divider$1.prototype, "variant", void 0);
__decorate([
    Property({
        reflect: true,
        type: 2
    })
], Divider$1.prototype, "vertical", void 0);
Divider$1 = __decorate([
    Element()
], Divider$1);

/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/
var Divider = proxy(Divider$1.TAG, ['placement', 'width', 'type', 'variant', 'vertical',], []);

export { Divider };
