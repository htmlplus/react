import { _ as __decorate, h as host, g as toUnit, c as styles, P as Property, S as State, d as Attributes, W as Watch, b as Element } from './index-e0fc73b0.js';
import { g as getConfig, s as setConfig } from './config-1feada7c.js';
import { proxy } from './proxy.js';
import 'react';

var css_248z = ":host,:host:after,:host:before{box-sizing:border-box}:host *,:host :after,:host :before{box-sizing:border-box}:host([hidden]:not([hidden=false])){display:none!important}:host{align-items:center;display:inline-flex;height:1em;justify-content:center;vertical-align:middle;width:1em}:host([size=xs]){height:.7em;width:.7em}:host([size=sm]){height:.85em;width:.85em}:host([size=md]){height:1em;width:1em}:host([size=lg]){height:1.5em;width:1.5em}:host([size=xl]){height:1.75em;width:1.75em}:host([size=\"1x\"]){height:1em;width:1em}:host([size=\"2x\"]){height:2em;width:2em}:host([size=\"3x\"]){height:3em;width:3em}:host([size=\"4x\"]){height:4em;width:4em}:host([size=\"5x\"]){height:5em;width:5em}:host([size=\"6x\"]){height:6em;width:6em}:host([size=\"7x\"]){height:7em;width:7em}:host([size=\"8x\"]){height:8em;width:8em}:host([size=\"9x\"]){height:9em;width:9em}svg{display:block;height:100%;width:100%}";

const ICON_SIZES = [
    'xs',
    'sm',
    'md',
    'lg',
    'xl',
    '1x',
    '2x',
    '3x',
    '4x',
    '5x',
    '6x',
    '7x',
    '8x',
    '9x'
];

let domParser;
const parse = (input) => {
    var _a;
    if (input instanceof SVGElement)
        return input;
    const div = document.createElement('div');
    div.innerHTML = input;
    const element = div.firstElementChild;
    if (((_a = element === null || element === void 0 ? void 0 : element.tagName) === null || _a === void 0 ? void 0 : _a.toLowerCase()) != 'svg')
        throw new Error();
    domParser || (domParser = new DOMParser());
    const parsed = domParser.parseFromString(element.outerHTML, 'text/html').body.querySelector('svg');
    if (!parsed)
        throw new Error();
    const svg = document.adoptNode(parsed);
    svg.part.add('svg');
    svg.setAttribute('xmlns', svg.getAttribute('xmlns') || 'http://www.w3.org/2000/svg');
    return svg;
};
/**
 * @part svg - The svg element.
 */
let Icon$1 = class Icon {
    constructor() {
        /**
         * TODO
         */
        this.resolver = name => {
            return import(`@htmlplus/core/icon/names/${name}.js`).then(module => (module === null || module === void 0 ? void 0 : module['default']) || module);
        };
    }
    get attributes() {
        var _a;
        return {
            'aria-label': (_a = this.label) !== null && _a !== void 0 ? _a : null,
            'aria-hidden': this.label ? null : `${!this.label}`,
            'role': this.label ? 'img' : null,
            'style': this.style
        };
    }
    get $host() {
        return host(this);
    }
    get cache() {
        return getConfig('asset', 'icon', this.name);
    }
    set cache(cache) {
        setConfig({
            asset: {
                icon: {
                    [this.name]: cache
                }
            }
        });
    }
    get style() {
        let size, transform;
        if (!ICON_SIZES.includes(this.size)) {
            size = toUnit(this.size);
        }
        if (this.rotate) {
            transform = `${transform || ''}rotate(${this.rotate}deg) `;
        }
        if (this.flip) {
            switch (this.flip) {
                case 'both':
                    transform = `${transform || ''}scale(-1)`;
                    break;
                case 'horizontal':
                    transform = `${transform || ''}scaleX(-1)`;
                    break;
                case 'vertical':
                    transform = `${transform || ''}scaleY(-1)`;
                    break;
            }
        }
        return styles({
            color: this.color,
            height: size,
            width: size,
            transform
        });
    }
    sync(input) {
        if (input) {
            this.cache = parse(input);
        }
        if (!this.cache)
            return;
        this.svg = this.cache.cloneNode(true);
        return true;
    }
    update() {
        if (this.cache instanceof Promise) {
            this.cache.then(() => {
                this.sync();
            }).catch(() => {
                console.warn('TODO3', this.$host);
            });
            return;
        }
        try {
            if (this.sync(this.cache))
                return;
        }
        catch (_a) { }
        if (!this.resolver) {
            console.warn('TODO1', this.$host);
            return;
        }
        this.cache = this.resolver(this.name, parse).then(input => {
            this.sync(input);
        }).catch(() => {
            console.warn('TODO2', this.$host);
        });
    }
    watcher() {
        requestAnimationFrame(() => {
            this.update();
        });
    }
    render() {
        return this.svg || null;
    }
};
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
Icon$1.TAG = "plus-icon";
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
Icon$1.STYLES = css_248z;
__decorate([
    Property({
        reflect: true,
        type: 256
    })
], Icon$1.prototype, "color", void 0);
__decorate([
    Property({
        reflect: true,
        type: 8
    })
], Icon$1.prototype, "flip", void 0);
__decorate([
    Property({
        type: 256
    })
], Icon$1.prototype, "label", void 0);
__decorate([
    Property({
        type: 256
    })
], Icon$1.prototype, "name", void 0);
__decorate([
    Property({
        type: 0
    })
], Icon$1.prototype, "resolver", void 0);
__decorate([
    Property({
        reflect: true,
        type: 64
    })
], Icon$1.prototype, "rotate", void 0);
__decorate([
    Property({
        reflect: true,
        type: 256
    })
], Icon$1.prototype, "size", void 0);
__decorate([
    State()
], Icon$1.prototype, "svg", void 0);
__decorate([
    Attributes()
], Icon$1.prototype, "attributes", null);
__decorate([
    Watch('name', true)
], Icon$1.prototype, "watcher", null);
Icon$1 = __decorate([
    Element()
], Icon$1);

/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/
var Icon = proxy(Icon$1.TAG, ['color', 'flip', 'label', 'name', 'resolver', 'rotate', 'size',], []);

export { Icon };
