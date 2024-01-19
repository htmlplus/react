import { _ as __decorate, P as PlusCore, d as styles, m as isValidCSSColor, h as html, e as attributes$1, f as host, b as Property, c as Element } from './index-7a2d17ac.js';
import { proxy } from './proxy.js';
import 'react';

var css_248z = ":host,:host:after,:host:before{box-sizing:border-box}:host *,:host :after,:host :before{box-sizing:border-box}:host([hidden]:not([hidden=false])){display:none!important}:host([type=double-bounce]) .root div{animation:bounce 2s ease-in-out infinite;background-color:currentColor;border-radius:50%;height:100%;left:0;opacity:.6;position:absolute;top:0;width:100%}:host([type=double-bounce]) .root div:nth-child(2){animation-delay:-1s}@keyframes bounce{0%,to{transform:scale(0)}50%{transform:scale(1)}}:host([type=default]) .root div{animation:spinner .8s linear infinite;height:100%;left:0;position:absolute;top:0;transform-origin:50% 50%;width:100%}:host([type=default]) .root div:after{background:currentColor;border-radius:20%;content:\" \";display:block;height:25%;left:46.25%;position:absolute;top:0;width:7.5%}:host([type=default]) .root div:first-child{animation-delay:-.7s;transform:rotate(0deg)}:host([type=default]) .root div:nth-child(2){animation-delay:-.6s;transform:rotate(45deg)}:host([type=default]) .root div:nth-child(3){animation-delay:-.5s;transform:rotate(90deg)}:host([type=default]) .root div:nth-child(4){animation-delay:-.4s;transform:rotate(135deg)}:host([type=default]) .root div:nth-child(5){animation-delay:-.3s;transform:rotate(180deg)}:host([type=default]) .root div:nth-child(6){animation-delay:-.2s;transform:rotate(225deg)}:host([type=default]) .root div:nth-child(7){animation-delay:-.1s;transform:rotate(270deg)}:host([type=default]) .root div:nth-child(8){animation-delay:0s;transform:rotate(315deg)}@keyframes spinner{0%{opacity:1}to{opacity:0}}:host([type=dual-ring]) .root:after{animation:dual-ring 1.2s linear infinite;border-color:currentcolor transparent;border-radius:50%;border-style:solid;border-width:.2em;content:\" \";display:block;height:100%;width:100%}@keyframes dual-ring{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}:host([type=ring]) .root:after{animation:ring 1.2s linear infinite;border:.2em solid;border-left:.2em solid transparent;border-radius:50%;content:\" \";display:block;height:100%;width:100%}@keyframes ring{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}:host([type=ripple]) .root{animation:ripple 1s ease-in-out infinite;background-color:currentColor;border-radius:100%}@keyframes ripple{0%{transform:scale(0)}to{opacity:0;transform:scale(1)}}:host([type=square]) .root{animation:square 1.2s ease-in-out infinite;background-color:currentColor;height:85%;margin:7.5%;width:85%}@keyframes square{0%{transform:perspective(120px) rotateX(0deg) rotateY(0deg)}50%{transform:perspective(120px) rotateX(-180.1deg) rotateY(0deg)}to{transform:perspective(120px) rotateX(-180deg) rotateY(-179.9deg)}}:host{color:currentColor;color:var(--plus-color,currentColor);display:inline-block;overflow:hidden;vertical-align:middle}:host([size=inherit]){height:1em;width:1em}:host([size=sm]){height:1rem;width:1rem}:host([size=md]){height:2rem;width:2rem}:host([size=lg]){height:3rem;width:3rem}.root{display:block;height:100%;position:relative;width:100%}";

/**
 * @stable
 */
let Spinner$1 = class Spinner extends PlusCore {
    constructor() {
        super(...arguments);
        /**
         * Specifies the size of the spinner.
         */
        this.size = 'inherit';
        /**
         * Specifies which variant of the spinner to use.
         */
        this.type = 'default';
    }
    get style() {
        return styles({
            color: isValidCSSColor(this.color) ? this.color : null
        });
    }
    get elements() {
        var _a;
        const map = {
            'default': 8,
            'double-bounce': 2
        };
        const number = (_a = map[this.type]) !== null && _a !== void 0 ? _a : 1;
        return Array.from(Array(number).keys());
    }
    render() {
        return html `${attributes$1(host(this), [{
                "role": "status"
            }, {
                "style": styles(this.style)
            }])}
        <div class="root">
          ${this.elements.map(element => html `<div key=${element} />`)}
        </div>
      `;
    }
};
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
Spinner$1.TAG = "plus-spinner";
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
Spinner$1.STYLES = css_248z;
__decorate([
    Property({
        reflect: true,
        type: 256
    })
], Spinner$1.prototype, "color", void 0);
__decorate([
    Property({
        reflect: true,
        type: 8
    })
], Spinner$1.prototype, "size", void 0);
__decorate([
    Property({
        reflect: true,
        type: 8
    })
], Spinner$1.prototype, "type", void 0);
Spinner$1 = __decorate([
    Element()
], Spinner$1);

/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/
var Spinner = proxy(Spinner$1.TAG, ['color', 'size', 'type',], []);

export { Spinner };
