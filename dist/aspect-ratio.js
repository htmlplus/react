import { _ as __decorate, h as html, c as styles, P as Property, b as Element } from './index-1d9a2e38.js';
import { proxy } from './proxy.js';
import 'react';

var css_248z = ":host,:host:after,:host:before{box-sizing:border-box}:host *,:host :after,:host :before{box-sizing:border-box}:host([hidden]:not([hidden=false])){display:none!important}:host{display:block}.root{border-radius:inherit;overflow:hidden;position:relative}::slotted(*){box-sizing:border-box;height:100%;inset:0;margin:0;position:absolute;width:100%}";

/**
 * @stable
 * @slot default - The default slot.
 */
let AspectRatio$1 = class AspectRatio {
    constructor() {
        /**
         * Specifies the minimum height.
         */
        this.minHeight = undefined;
        /**
         * Specifies the maximum height.
         */
        this.maxHeight = undefined;
        /**
         * Specifies the ratio.
         */
        this.value = 1;
    }
    get ratio() {
        if (typeof this.value === 'number')
            return this.value;
        let [valueA, valueB] = `${this.value}`.split('/').map((item) => isNaN(item) ? NaN : parseFloat(item));
        valueB = valueB !== null && valueB !== void 0 ? valueB : 1;
        if (!isNaN(valueA + valueB))
            return valueA / valueB;
    }
    get style() {
        const ratio = this.ratio;
        if (!ratio)
            return;
        // TODO: parse number in @Property()
        const minHeight = isNaN(this.minHeight) ? this.minHeight : `${this.minHeight}px`;
        const maxHeight = isNaN(this.maxHeight) ? this.maxHeight : `${this.maxHeight}px`;
        const paddingTop = minHeight || maxHeight ? `clamp(${minHeight || 0}, ${100 / ratio}%, ${maxHeight || '9999px'})` : `${100 / ratio}%`;
        return {
            paddingTop
        };
    }
    render() {
        return html `<div class="root" style=${styles(this.style)}>
        <slot />
      </div>`;
    }
};
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
AspectRatio$1.TAG = "plus-aspect-ratio";
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
AspectRatio$1.STYLES = css_248z;
__decorate([
    Property({
        type: 320
    })
], AspectRatio$1.prototype, "minHeight", void 0);
__decorate([
    Property({
        type: 320
    })
], AspectRatio$1.prototype, "maxHeight", void 0);
__decorate([
    Property({
        type: 320
    })
], AspectRatio$1.prototype, "value", void 0);
AspectRatio$1 = __decorate([
    Element()
], AspectRatio$1);

/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/
var AspectRatio = proxy(AspectRatio$1.TAG, ['minHeight', 'maxHeight', 'value',], []);

export { AspectRatio };
