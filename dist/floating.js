import { _ as __decorate, P as PlusCore, t as toAxis, k as toUnit, d as styles, h as html, e as attributes$1, f as host, b as Property, c as Element } from './index-de22bbcf.js';
import { proxy } from './proxy.js';
import 'react';

/**
 * @stable
 * @slot default - The default slot.
 */
let Floating$1 = class Floating extends PlusCore {
    constructor() {
        super(...arguments);
        /**
         * Specifies the deviation from the center.
         */
        this.offset = 0;
        /**
         * Specifies the display location.
         */
        this.placement = 'end-bottom';
    }
    get style() {
        var _a;
        let placement = this.placement || '';
        if (placement.match(/^(top|bottom)$/))
            placement = `-${placement}`;
        let [x, y] = placement.split('-');
        x || (x = 'center');
        y || (y = 'center');
        x = toAxis(x, this.isRTL);
        const centeredX = x == 'center';
        const centeredY = y == 'center';
        const X = !centeredX ? x : this.isRTL ? 'right' : 'left';
        const Y = !centeredY ? y : 'top';
        const offset = [this.offset].flat().map(offset => toUnit(offset));
        const offsetX = offset[0];
        const offsetY = (_a = offset[1]) !== null && _a !== void 0 ? _a : offset[0];
        const style = {
            position: this.fixed ? 'fixed' : 'absolute'
        };
        style[X] = centeredX ? `calc(50% + ${offsetX})` : `calc(0px + ${offsetX})`;
        style[Y] = centeredY ? `calc(50% + ${offsetY})` : `calc(0px + ${offsetY})`;
        if (centeredX || centeredY) {
            style['transform'] = `translate(${centeredX ? `${this.isRTL ? '' : '-'}50%` : '0'}, ${centeredY ? '-50%' : '0'})`;
        }
        return styles(style);
    }
    render() {
        return html `${attributes$1(host(this), [{
                "style": styles(this.style)
            }])}
        <slot />
      `;
    }
};
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
Floating$1.TAG = "plus-floating";
__decorate([
    Property({
        type: 2
    })
], Floating$1.prototype, "fixed", void 0);
__decorate([
    Property({
        type: 321
    })
], Floating$1.prototype, "offset", void 0);
__decorate([
    Property({
        type: 8
    })
], Floating$1.prototype, "placement", void 0);
Floating$1 = __decorate([
    Element()
], Floating$1);

/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/
var Floating = proxy(Floating$1.TAG, ['fixed', 'offset', 'placement',], []);

export { Floating };
