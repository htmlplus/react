import { _ as __decorate, P as PlusCore, r as request, h as html, e as attributes$1, f as host, b as Property, S as State, g as QueryAll, B as Bind, c as Element } from './index-de22bbcf.js';
import { proxy } from './proxy.js';
import 'react';

var css_248z = ":host,:host:after,:host:before{box-sizing:border-box}:host *,:host :after,:host :before{box-sizing:border-box}:host([hidden]:not([hidden=false])){display:none!important}:host{--plus-breadcrumb-gutter-x:0.5em;--plus-breadcrumb-gutter-y:0.5em}:host{display:inline-block}.container{align-items:center;column-gap:var(--plus-breadcrumb-gutter-x);display:flex;flex-wrap:wrap;row-gap:var(--plus-breadcrumb-gutter-y)}.expander,.separator{align-items:center;display:flex;flex-shrink:0;justify-content:center;user-select:none}.expander{background-color:#f5f5f5;border-radius:.25rem;color:currentColor;cursor:pointer}.expander:focus{outline-color:currentColor}.separator{color:currentColor}.rtl{transform:scaleX(-1)}.expander ::slotted(*),svg{fill:currentColor;height:1em}";

const BREADCRUMB_EXPANDER_QUERY = '[slot=expander]';
const BREADCRUMB_SEPARATOR_QUERY = '[slot=separator]';

/**
 * @part expander  - The expander element.
 * @part item      - The breadcrumb elements.
 * @part separator - The separator elements.
 * @slot default   - The default slot.
 * @slot expander  - The expander slot.
 * @slot separator - The separator slot.
 */
let Breadcrumb$1 = class Breadcrumb extends PlusCore {
    constructor() {
        super(...arguments);
        /**
         * Specifies the label for the expander button.
         */
        this.expanderText = 'Show path';
        /**
         * Specifies the position of the expander button.
         * The expander button is displayed when the number of items reached the maximum limit.
         */
        this.offset = 1;
        this.expand = false;
        this.observer = new MutationObserver(this.onChange);
    }
    get $children() {
        return Array.from(this.$host.children).filter($node => {
            return !$node.matches([BREADCRUMB_EXPANDER_QUERY, BREADCRUMB_SEPARATOR_QUERY].join(','));
        });
    }
    get items() {
        const $children = this.$children;
        const items = [];
        const { start, length } = (() => {
            if (this.expand)
                return {};
            if (typeof this.max !== 'number')
                return {};
            if ($children.length <= this.max)
                return {};
            let start, length;
            length = $children.length > this.max ? $children.length - this.max : $children.length;
            const mod = $children.length - length;
            start = this.offset;
            if (start >= 0) {
                start = $children.length < length + start ? mod : start;
            }
            else {
                start = mod + start + 1;
                start = start < 0 ? 0 : start;
            }
            return {
                start,
                length
            };
        })(); // TODO
        $children.forEach(($child, index) => {
            $child.setAttribute('slot', index.toString());
            if (start <= index && index < start + length)
                return;
            items.push({
                type: 'item',
                key: `${index}`,
                slot: `${index}`
            });
        });
        if (start !== undefined) {
            items.splice(start, 0, {
                type: 'expander',
                key: 'expander'
            });
        }
        if (this.template) {
            for (let i = items.length - 1; i > 0; i--) {
                items.splice(i, 0, {
                    type: 'separator',
                    key: `expander-${i}`
                });
            }
        }
        return items;
    }
    get template() {
        const $node = this.$host.querySelector(BREADCRUMB_SEPARATOR_QUERY);
        const $clone = $node === null || $node === void 0 ? void 0 : $node.cloneNode(true);
        $clone === null || $clone === void 0 ? void 0 : $clone.removeAttribute('slot');
        return ($clone === null || $clone === void 0 ? void 0 : $clone.outerHTML) || this.separator;
    }
    bind() {
        this.observer.observe(this.$host, {
            childList: true
        });
    }
    unbind() {
        this.observer.disconnect();
    }
    onChange() {
        request(this);
    }
    connectedCallback() {
        this.bind();
    }
    disconnectedCallback() {
        this.unbind();
    }
    // TODO: use 'dangerouslySetInnerHTML' instead
    updatedCallback() {
        const template = this.template;
        if (!template)
            return;
        this.$separators.forEach(element => {
            element.innerHTML = template;
        });
    }
    render() {
        return html `${attributes$1(host(this), [{
                "aria-label": "breadcrumb"
            }])}
        <div class="container">
          ${this.items.map(item => {
            switch (item.type) {
                case 'item':
                    {
                        return html `<div key=${item.key} part="item">
                    <slot name=${item.slot} />
                  </div>`;
                    }
                case 'expander':
                    {
                        return html `<div aria-disabled="false" aria-label=${this.expanderText} class="expander" key=${item.key} part="expander" role="button" tabindex=${0} onClick=${() => this.expand = true} onKeyDown=${event => event.key.match(/Enter| /) && (this.expand = true)}>
                    <slot name="expander">
                      <svg focusable="false" viewbox="0 0 24 24" aria-hidden="true">
                        <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                      </svg>
                    </slot>
                  </div>`;
                    }
                case 'separator':
                    {
                        return html `<div key=${item.key} aria-hidden="true" class="separator" part="separator" />`;
                    }
            }
        })}
        </div>
      `;
    }
};
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
Breadcrumb$1.TAG = "plus-breadcrumb";
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
Breadcrumb$1.STYLES = css_248z;
__decorate([
    Property({
        type: 256
    })
], Breadcrumb$1.prototype, "expanderText", void 0);
__decorate([
    Property({
        type: 64
    })
], Breadcrumb$1.prototype, "offset", void 0);
__decorate([
    Property({
        type: 64
    })
], Breadcrumb$1.prototype, "max", void 0);
__decorate([
    Property({
        type: 256
    })
], Breadcrumb$1.prototype, "separator", void 0);
__decorate([
    State()
], Breadcrumb$1.prototype, "expand", void 0);
__decorate([
    QueryAll('.separator')
], Breadcrumb$1.prototype, "$separators", void 0);
__decorate([
    Bind()
], Breadcrumb$1.prototype, "onChange", null);
Breadcrumb$1 = __decorate([
    Element()
], Breadcrumb$1);

/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/
var Breadcrumb = proxy(Breadcrumb$1.TAG, ['expanderText', 'offset', 'max', 'separator',], []);

export { Breadcrumb };
