import { _ as __decorate, c as styles, g as toUnit, u as uhtml, P as Property, d as Attributes, b as Element } from './index-e0fc73b0.js';
import { proxy } from './proxy.js';
import 'react';

/**
 * @slot default - The default slot.
 */
let Stack$1 = class Stack {
    constructor() {
        /**
         * TODO.
         */
        this.alignItems = 'center';
        /**
         * TODO.
         */
        this.justifyContent = 'center';
    }
    get attributes() {
        return {
            style: this.style
        };
    }
    get style() {
        let direction = this.vertical ? 'column' : 'row';
        if (this.reverse)
            direction += '-reverse';
        return styles({
            'align-items': this.alignItems,
            'display': 'flex',
            'flex-direction': direction,
            'gap': toUnit(this.gap),
            'justify-content': this.justifyContent
        });
    }
    render() {
        return uhtml.html `<slot />`;
    }
};
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
Stack$1.TAG = "plus-stack";
__decorate([
    Property({
        type: 264
    })
], Stack$1.prototype, "alignItems", void 0);
__decorate([
    Property({
        type: 256
    })
], Stack$1.prototype, "gap", void 0);
__decorate([
    Property({
        type: 264
    })
], Stack$1.prototype, "justifyContent", void 0);
__decorate([
    Property({
        type: 2
    })
], Stack$1.prototype, "reverse", void 0);
__decorate([
    Property({
        type: 2
    })
], Stack$1.prototype, "vertical", void 0);
__decorate([
    Attributes()
], Stack$1.prototype, "attributes", null);
Stack$1 = __decorate([
    Element()
], Stack$1);

/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/
var Stack = proxy(Stack$1.TAG, ['alignItems', 'gap', 'justifyContent', 'reverse', 'vertical',], []);

export { Stack };
