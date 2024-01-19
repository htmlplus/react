import { _ as __decorate, q as createLink, P as PlusCore, h as html, e as attributes$1, f as host, b as Property, W as Watch, B as Bind, c as Element } from './index-7a2d17ac.js';
import { proxy } from './proxy.js';
import 'react';

var css_248z = ":host,:host:after,:host:before{box-sizing:border-box}:host *,:host :after,:host :before{box-sizing:border-box}:host([hidden]:not([hidden=false])){display:none!important}:host{cursor:default;display:inline-block;user-select:none}";

const { Inject, reconnect } = createLink({
    crawl: true,
    namespace: ({ connector }) => connector ? `Dialog:${connector}` : undefined
});
/**
 * @slot default - The default slot.
 * @TODO open    - Specifies the content of toggler when it's opened.
 * @TODO close   - Specifies the content of toggler when it's closed.
 */
let DialogToggler$1 = class DialogToggler extends PlusCore {
    constructor() {
        super(...arguments);
        this.toggle = () => console.log('TODO: can not use out of dialog');
    }
    get text() {
        return this.tunnel ? 'Close' : 'Open';
    }
    /**
     * Watchers
     */
    watcher() {
        reconnect(this);
    }
    /**
     * Events handler
     */
    onClick() {
        this.toggle();
    }
    render() {
        return html `${attributes$1(host(this), [{
                "role": "button"
            }, {
                "state": this.tunnel ? 'open' : 'close'
            }, {
                "onClick": this.onClick
            }])}
        <slot>${this.text}</slot>
      `;
    }
};
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
DialogToggler$1.TAG = "plus-dialog-toggler";
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
DialogToggler$1.STYLES = css_248z;
__decorate([
    Property({
        type: 256
    })
], DialogToggler$1.prototype, "connector", void 0);
__decorate([
    Inject()
], DialogToggler$1.prototype, "toggle", void 0);
__decorate([
    Inject(true)
], DialogToggler$1.prototype, "tunnel", void 0);
__decorate([
    Watch(['connector'])
], DialogToggler$1.prototype, "watcher", null);
__decorate([
    Bind()
], DialogToggler$1.prototype, "onClick", null);
DialogToggler$1 = __decorate([
    Element()
], DialogToggler$1);

/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/
var DialogToggler = proxy(DialogToggler$1.TAG, ['connector',], []);

export { DialogToggler };
