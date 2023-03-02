import { _ as __decorate, P as Property, W as Watch, a as Element, h as host, f as Portal$2 } from './index-75149982.js';
import { proxy } from './proxy.js';
import 'react';

var css_248z = "*,:after,:before{box-sizing:border-box}:host,:host:after,:host:before{box-sizing:border-box}:host([hidden]:not([hidden=false])){display:none}:host{display:contents}";

/**
 * @experimental
 * @slot default - The default slot.
 */
let Portal$1 = class Portal {
    constructor() {
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
        return Array.from(host(this).children);
    }
    /**
     * Internal Methods
     */
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
    /**
     * Watchers
     */
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
    /**
     * Lifecycles
     */
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
    Element("plus-portal")
], Portal$1);

/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/
var Portal = proxy('plus-portal', ['disabled', 'strategy', 'target'], []);

export { Portal };
