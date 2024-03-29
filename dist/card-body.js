import { _ as __decorate, P as PlusCore, h as html, c as Element } from './index-de22bbcf.js';
import { proxy } from './proxy.js';
import 'react';

var css_248z = ":host,:host:after,:host:before{box-sizing:border-box}:host *,:host :after,:host :before{box-sizing:border-box}:host([hidden]:not([hidden=false])){display:none!important}:host{flex:1 1 auto;padding:1rem}";

/**
 * @development
 * @slot default - The default slot.
 */
let CardBody$1 = class CardBody extends PlusCore {
    render() {
        return html `<slot />`;
    }
};
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
CardBody$1.TAG = "plus-card-body";
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
CardBody$1.STYLES = css_248z;
CardBody$1 = __decorate([
    Element()
], CardBody$1);

/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/
var CardBody = proxy(CardBody$1.TAG, [], []);

export { CardBody };
