import { _ as __decorate, u as uhtml, a as Element } from './index-76a6338f.js';
import { proxy } from './proxy.js';
import 'react';

var css_248z = "*,:after,:before{box-sizing:border-box}:host,:host:after,:host:before{box-sizing:border-box}:host([hidden]:not([hidden=false])){display:none}:host{flex:1 1 auto;padding:1rem}";

/**
 * @development
 * @slot default - The default slot.
 */
let CardBody$1 = class CardBody {
    render() {
        return uhtml.html `<slot />`;
    }
};
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
CardBody$1.TAG = "plus-card-body";
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
CardBody$1.STYLES = css_248z;
CardBody$1 = __decorate([
    Element("plus-card-body")
], CardBody$1);

/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/
var CardBody = proxy('plus-card-body', [], []);

export { CardBody };
