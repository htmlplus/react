import { _ as __decorate, P as Property, b as Element } from './index-1d9a2e38.js';
import { proxy } from './proxy.js';
import 'react';

var css_248z = ":host,:host:after,:host:before{box-sizing:border-box}:host *,:host :after,:host :before{box-sizing:border-box}:host([hidden]:not([hidden=false])){display:none!important}:host{display:block}";

let Spacer$1 = class Spacer {
    constructor() {
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
