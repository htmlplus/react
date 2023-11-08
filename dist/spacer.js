import { _ as __decorate, P as PlusCore, b as Property, c as Element } from './index-de22bbcf.js';
import { proxy } from './proxy.js';
import 'react';

var css_248z = ":host,:host:after,:host:before{box-sizing:border-box}:host *,:host :after,:host :before{box-sizing:border-box}:host([hidden]:not([hidden=false])){display:none!important}:host{display:block}";

let Spacer$1 = class Spacer extends PlusCore {
    constructor() {
        super(...arguments);
        /**
         * TODO
         */
        this.grow = 1;
    }
    get attributes() {
        return {
            style: `flex-grow: ${this.grow};`
        };
    }
};
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
Spacer$1.TAG = "plus-spacer";
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
Spacer$1.STYLES = css_248z;
__decorate([
    Property({
        type: 64
    })
], Spacer$1.prototype, "grow", void 0);
Spacer$1 = __decorate([
    Element()
], Spacer$1);

/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/
var Spacer = proxy(Spacer$1.TAG, ['grow',], []);

export { Spacer };
