import { _ as __decorate, P as PlusCore, b as Property, c as Element } from './index-de22bbcf.js';
import { proxy } from './proxy.js';
import 'react';

var css_248z = ":host,:host:after,:host:before{box-sizing:border-box}:host *,:host :after,:host :before{box-sizing:border-box}:host([hidden]:not([hidden=false])){display:none!important}:host{white-space:pre-wrap}";

/**
 * @dependencies @faker-js/faker
 * @stable
 * @thirdParty
 */
let Faker$1 = class Faker extends PlusCore {
    constructor() {
        super(...arguments);
        /**
         * Specifies the [API](https://fakerjs.dev/api).
         */
        this.api = 'lorem.paragraph';
        /**
         * Specifies the API's arguments as an array.
         */
        this.arguments = [];
    }
    get content() {
        var _a;
        const method = (_a = this.api) === null || _a === void 0 ? void 0 : _a.split('.').reduce((result, key) => result === null || result === void 0 ? void 0 : result[key], this.instance);
        if (!method)
            return null;
        this.instance.seed(this.seed);
        return method(...this.arguments) || null;
    }
    connectCallback() {
        if (this.instance)
            return;
        return import('@faker-js/faker').then(module => {
            this.instance = module.faker;
        }).catch(() => {
            throw new Error("The `faker` component depends on an external package, but it doesn't seem to be installed. Running `npm install @faker-js/faker` will fix this problem.");
        });
    }
    render() {
        return this.content;
    }
};
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
Faker$1.TAG = "plus-faker";
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
Faker$1.STYLES = css_248z;
__decorate([
    Property({
        type: 256
    })
], Faker$1.prototype, "api", void 0);
__decorate([
    Property({
        type: 1
    })
], Faker$1.prototype, "arguments", void 0);
__decorate([
    Property({
        type: 0
    })
], Faker$1.prototype, "instance", void 0);
__decorate([
    Property({
        type: 64
    })
], Faker$1.prototype, "seed", void 0);
Faker$1 = __decorate([
    Element()
], Faker$1);

/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/
var Faker = proxy(Faker$1.TAG, ['api', 'arguments', 'instance', 'seed',], []);

export { Faker };
