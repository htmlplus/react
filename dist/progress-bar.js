import { _ as __decorate, P as PlusCore, h as html, e as attributes$1, d as styles, f as host, b as Property, c as Element } from './index-cd4ee4b1.js';
import { proxy } from './proxy.js';
import 'react';

var css_248z = ":host,:host:after,:host:before{box-sizing:border-box}:host *,:host :after,:host :before{box-sizing:border-box}:host([hidden]:not([hidden=false])){display:none!important}@keyframes indeterminate{0%{left:0;transform:translateX(-100%)}to{left:100%;transform:translateX(0)}}:host{background-color:#dcdcdc;border-radius:.25rem;display:flex;font-size:.75rem;height:1rem;overflow:hidden;position:relative}:host>*{inset:0;position:absolute}.underlay{background-color:transparent}.buffer{background-color:#add8e6}.indicator{align-items:center;background-color:#1e90ff;color:#fff;display:flex;flex-direction:column;justify-content:center;overflow:hidden;transition:width .6s ease;white-space:nowrap}:host([immediate]:not([immediate=false])) .indicator{transition:none}:host([variant=indeterminate]) .indicator{animation:indeterminate 2s linear infinite;width:50%!important}";

/**
 * @slot default - The default slot.
 */
let ProgressBar$1 = class ProgressBar extends PlusCore {
    constructor() {
        super(...arguments);
        /**
         * TODO
         */
        this.min = 0;
        /**
         * TODO
         */
        this.max = 100;
        /**
         * TODO
         */
        this.value = 0;
    }
    get percentage() {
        return this.progress + '%';
    }
    get progress() {
        return (this.value - this.min) * (100 / Math.abs(this.max - this.min));
    }
    // TODO: get from parent context
    get stacked() {
        return this.$host.parentElement.nodeName == 'PLUS-PROGRESS-BAR-STACK';
    }
    render() {
        return html `${attributes$1(host(this), [{
                "aria-valuemin": this.min
            }, {
                "aria-valuemax": this.max
            }, {
                "aria-valuenow": this.progress
            }, {
                "role": "progressbar"
            }, {
                "style": styles({
                    minWidth: this.stacked ? this.percentage : null
                })
            }])}
        <div class="underlay" part="underlay"></div>
        <div class="buffer" part="buffer" style=${styles({
            width: (this.buffer || 0) + '%'
        })}></div>
        <div class="indicator" part="indicator" style=${styles({
            width: this.stacked ? '100%' : this.percentage
        })}>
          <slot>${this.label ? this.percentage : null}</slot>
        </div>
      `;
    }
};
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
ProgressBar$1.TAG = "plus-progress-bar";
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
ProgressBar$1.STYLES = css_248z;
__decorate([
    Property({
        type: 64
    })
], ProgressBar$1.prototype, "buffer", void 0);
__decorate([
    Property({
        reflect: true,
        type: 2
    })
], ProgressBar$1.prototype, "immediate", void 0);
__decorate([
    Property({
        type: 2
    })
], ProgressBar$1.prototype, "label", void 0);
__decorate([
    Property({
        type: 64
    })
], ProgressBar$1.prototype, "min", void 0);
__decorate([
    Property({
        type: 64
    })
], ProgressBar$1.prototype, "max", void 0);
__decorate([
    Property({
        reflect: true,
        type: 256
    })
], ProgressBar$1.prototype, "variant", void 0);
__decorate([
    Property({
        type: 64
    })
], ProgressBar$1.prototype, "value", void 0);
ProgressBar$1 = __decorate([
    Element()
], ProgressBar$1);

/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/
var ProgressBar = proxy(ProgressBar$1.TAG, ['buffer', 'immediate', 'label', 'min', 'max', 'variant', 'value',], []);

export { ProgressBar };
