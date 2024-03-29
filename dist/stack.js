import { _ as __decorate, P as PlusCore, d as styles, k as toUnit, h as html, e as attributes$1, f as host, b as Property, c as Element } from './index-de22bbcf.js';
import { proxy } from './proxy.js';
import 'react';

/**
 * @slot default - The default slot.
 */
let Stack$1 = class Stack extends PlusCore {
    constructor() {
        super(...arguments);
        /**
         * TODO.
         */
        this.alignItems = 'center';
        /**
         * TODO.
         */
        this.justifyContent = 'center';
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
        return html `${attributes$1(host(this), [{
                "style": styles(this.style)
            }])}
        <slot />
      `;
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
Stack$1 = __decorate([
    Element()
], Stack$1);

/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/
var Stack = proxy(Stack$1.TAG, ['alignItems', 'gap', 'justifyContent', 'reverse', 'vertical',], []);

export { Stack };
