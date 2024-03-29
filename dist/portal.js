import { _ as __decorate, P as PlusCore, n as Portal$2, b as Property, W as Watch, c as Element } from './index-de22bbcf.js';
import { proxy } from './proxy.js';
import 'react';

var css_248z = ":host,:host:after,:host:before{box-sizing:border-box}:host *,:host :after,:host :before{box-sizing:border-box}:host([hidden]:not([hidden=false])){display:none!important}:host{display:contents}";

/**
 * @experimental
 * @slot default - The default slot.
 */
let Portal$1 = class Portal extends PlusCore {
    constructor() {
        super(...arguments);
        /**
         * Specifies the position of the portal content relative to the target.
         */
        this.strategy = 'append';
        /**
         * Specifies the position of the portal content, It Can include css selectors,
         * node or any html elements.
         */
        this.target = 'body';
    }
    get $nodes() {
        return Array.from(this.$host.children);
    }
    watcher(next, prev, name) {
        switch (name) {
            case 'disabled':
                next ? this.terminate() : this.initialize();
                break;
            case 'strategy':
            case 'target':
                this.terminate();
                this.initialize();
                break;
        }
    }
    initialize() {
        if (typeof window === 'undefined')
            return;
        if (this.disabled)
            return;
        this.instance = new Portal$2({
            source: this.$nodes,
            strategy: this.strategy,
            target: this.target
        });
    }
    terminate() {
        var _a;
        (_a = this.instance) === null || _a === void 0 ? void 0 : _a.revert();
    }
    connectedCallback() {
        this.initialize();
    }
    disconnectedCallback() {
        this.terminate();
    }
};
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
Portal$1.TAG = "plus-portal";
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
Portal$1.STYLES = css_248z;
__decorate([
    Property({
        type: 2
    })
], Portal$1.prototype, "disabled", void 0);
__decorate([
    Property({
        type: 0
    })
], Portal$1.prototype, "strategy", void 0);
__decorate([
    Property({
        type: 0
    })
], Portal$1.prototype, "target", void 0);
__decorate([
    Watch(['disabled', 'strategy', 'target'])
], Portal$1.prototype, "watcher", null);
Portal$1 = __decorate([
    Element()
], Portal$1);

/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/
var Portal = proxy(Portal$1.TAG, ['disabled', 'strategy', 'target',], []);

export { Portal };
