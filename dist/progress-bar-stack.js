import { _ as __decorate, P as PlusCore, h as html, c as Element } from './index-de22bbcf.js';
import { proxy } from './proxy.js';
import 'react';

var css_248z = ":host,:host:after,:host:before{box-sizing:border-box}:host *,:host :after,:host :before{box-sizing:border-box}:host([hidden]:not([hidden=false])){display:none!important}:host{background-color:#dcdcdc;border-radius:.25rem;display:flex;overflow:hidden}::slotted(plus-progress-bar){overflow:visible}";

let ProgressBarStack$1 = class ProgressBarStack extends PlusCore {
    render() {
        return html `<slot />`;
    }
};
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
ProgressBarStack$1.TAG = "plus-progress-bar-stack";
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
ProgressBarStack$1.STYLES = css_248z;
ProgressBarStack$1 = __decorate([
    Element()
], ProgressBarStack$1);

/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/
var ProgressBarStack = proxy(ProgressBarStack$1.TAG, [], []);

export { ProgressBarStack };
