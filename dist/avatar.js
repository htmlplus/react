import { _ as __decorate, j as isRTL, l as isSize, k as toUnit, h as html, d as attributes$1, c as styles, e as host, P as Property, b as Element } from './index-8a680783.js';
import { proxy } from './proxy.js';
import 'react';

var css_248z = ":host,:host:after,:host:before{box-sizing:border-box}:host *,:host :after,:host :before{box-sizing:border-box}:host([hidden]:not([hidden=false])){display:none!important}:host{--plus-avatar-border-radius:0.25rem;--plus-avatar-font-size-ratio:0.35;--plus-avatar-size:auto}:host{align-items:center;background-color:#d3d3d3;border-radius:var(--plus-avatar-border-radius);color:gray;display:inline-flex;font-size:calc(var(--plus-avatar-size)*var(--plus-avatar-font-size-ratio));height:var(--plus-avatar-size);justify-content:center;position:relative;text-align:center;text-transform:uppercase;user-select:none;vertical-align:middle;width:var(--plus-avatar-size)}:host([shape=circle]){--plus-avatar-border-radius:50%}:host([shape=round]){--plus-avatar-border-radius:0.25rem}:host([shape=tile]){--plus-avatar-border-radius:0}:host([size=xxs]){--plus-avatar-size:1rem}:host([size=xs]){--plus-avatar-size:1.5rem}:host([size=sm]){--plus-avatar-size:2rem}:host([size=md]){--plus-avatar-size:3rem}:host([size=lg]){--plus-avatar-size:4rem}:host([size=xl]){--plus-avatar-size:6rem}:host([size=xxl]){--plus-avatar-size:8rem}::slotted(:not([slot])){border-radius:var(--plus-avatar-border-radius);height:100%;inset:0;position:absolute;width:100%}div{position:absolute}";

/**
 * @stable
 * @slot default - The default slot.
 */
let Avatar$1 = class Avatar {
    constructor() {
        /**
         * Specifies the shape of the component.
         */
        this.shape = 'round';
        /**
         * Specifies the size of the component.
         */
        this.size = 'md';
    }
    get placements() {
        const offset = this.shape == 'circle' ? '14.64466%' : '0';
        return {
            'bottom': {
                bottom: 0,
                [isRTL(this) ? 'right' : 'left']: '50%',
                transform: 'translate(-50%, +50%)'
            },
            'center': {
                top: '50%',
                [isRTL(this) ? 'right' : 'left']: '50%',
                transform: 'translate(-50%, -50%)'
            },
            'end': {
                top: '50%',
                [isRTL(this) ? 'left' : 'right']: 0,
                transform: 'translate(+50%, -50%)'
            },
            'end-bottom': {
                bottom: offset,
                [isRTL(this) ? 'left' : 'right']: offset,
                transform: 'translate(+50%, +50%)'
            },
            'end-top': {
                top: offset,
                [isRTL(this) ? 'left' : 'right']: offset,
                transform: 'translate(+50%, -50%)'
            },
            'left': {
                top: '50%',
                left: 0,
                transform: 'translate(-50%, -50%)'
            },
            'left-bottom': {
                bottom: offset,
                left: offset,
                transform: 'translate(-50%, +50%)'
            },
            'left-top': {
                top: offset,
                left: offset,
                transform: 'translate(-50%, -50%)'
            },
            'right': {
                top: '50%',
                right: 0,
                transform: 'translate(+50%, -50%)'
            },
            'right-bottom': {
                bottom: offset,
                right: offset,
                transform: 'translate(+50%, +50%)'
            },
            'right-top': {
                top: offset,
                right: offset,
                transform: 'translate(+50%, -50%)'
            },
            'start': {
                top: '50%',
                [isRTL(this) ? 'right' : 'left']: 0,
                transform: 'translate(-50%, -50%)'
            },
            'start-bottom': {
                bottom: offset,
                [isRTL(this) ? 'right' : 'left']: offset,
                transform: 'translate(-50%, +50%)'
            },
            'start-top': {
                top: offset,
                [isRTL(this) ? 'right' : 'left']: offset,
                transform: 'translate(-50%, -50%)'
            },
            'top': {
                top: 0,
                [isRTL(this) ? 'right' : 'left']: '50%',
                transform: 'translate(-50%, -50%)'
            }
        };
    }
    get style() {
        if (isSize(this.size))
            return;
        return `--plus-avatar-size: ${toUnit(this.size)}`;
    }
    render() {
        return html `${attributes$1(host(this), [{
                "style": styles(this.style)
            }])}
        <slot />
        ${Object.keys(this.placements).map(placement => html `<div class=${placement} style=${styles(this.placements[placement])}>
            <slot name=${placement} />
          </div>`)}
      `;
    }
};
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
Avatar$1.TAG = "plus-avatar";
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
Avatar$1.STYLES = css_248z;
__decorate([
    Property({
        reflect: true,
        type: 8
    })
], Avatar$1.prototype, "shape", void 0);
__decorate([
    Property({
        reflect: true,
        type: 328
    })
], Avatar$1.prototype, "size", void 0);
Avatar$1 = __decorate([
    Element()
], Avatar$1);

/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/
var Avatar = proxy(Avatar$1.TAG, ['shape', 'size',], []);

export { Avatar };
