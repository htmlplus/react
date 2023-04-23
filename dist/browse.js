import { _ as __decorate, u as uhtml, P as Property, E as Event$1, S as State, d as Attributes, M as Method, B as Bind, b as Element } from './index-e0fc73b0.js';
import { proxy } from './proxy.js';
import 'react';

var css_248z = ":host,:host:after,:host:before{box-sizing:border-box}:host *,:host :after,:host :before{box-sizing:border-box}:host([hidden]:not([hidden=false])){display:none!important}:host{cursor:pointer}input[type=file]{display:none}";

/**
 * @slot default - The default slot.
 */
let Browse$1 = class Browse {
    get attributes() {
        const attributes = {};
        if (this.disabled)
            return attributes;
        attributes['onClick'] = this.onClick;
        if (!this.droppable)
            return attributes;
        attributes['dragging'] = this.dragging;
        attributes['onDragLeave'] = this.onDragLeave;
        attributes['onDragOver'] = this.onDragOver;
        attributes['onDrop'] = this.onDrop;
        return attributes;
    }
    get types() {
        return (this.accept || '').split(',').map(type => type.trim());
    }
    /**
     * Opens the browse dialog.
     */
    browse() {
        this.$input.click();
    }
    do(files) {
        const detail = {
            errors: [],
            files: []
        };
        if (this.min > files.length)
            detail.errors.push('MIN');
        if (this.max < files.length)
            detail.errors.push('MAX');
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const value = {
                errors: [],
                file
            };
            for (const type of this.types) {
                const isMime = /\//.exec(type);
                const isPattern = /\/*/.exec(type);
                if (!isMime && value.file.name.endsWith(type))
                    break;
                if (isMime && !isPattern && value.file.type === type)
                    break;
                if (isMime && isPattern && value.file.type.startsWith(type.slice(0, -1)))
                    break;
                value.errors.push('ACCEPT');
            }
            if (this.minSize > value.file.size)
                value.errors.push('MIN_SIZE');
            if (this.maxSize < value.file.size)
                value.errors.push('MAX_SIZE');
            detail.files.push(value);
        }
        const error = detail.errors.length || detail.files.some(file => file.errors.length);
        const filtered = detail.files.filter(file => !error || file.errors.length);
        const data = Object.assign({}, detail, {
            files: filtered
        });
        error ? this.plusError(data) : this.plusSuccess(data);
        this.plusChange(detail);
    }
    onClick() {
        this.$input.click();
    }
    onChange(event) {
        const files = event.target.files;
        if (!files.length)
            return;
        this.do(files);
    }
    onDragLeave() {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
            this.dragging = false;
        }, 50);
    }
    onDragOver(event) {
        clearTimeout(this.timeout);
        event.preventDefault();
        this.dragging = true;
    }
    onDrop(event) {
        event.preventDefault();
        event.stopPropagation();
        this.dragging = false;
        this.do(event.dataTransfer.files);
    }
    render() {
        return uhtml.html `<slot /><input accept=${this.accept} multiple=${this.multiple} ref=${$element => this.$input = $element} type="file" onChange=${this.onChange} onClick=${event => event.stopPropagation()} />`;
    }
};
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
Browse$1.TAG = "plus-browse";
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
Browse$1.STYLES = css_248z;
__decorate([
    Property({
        type: 256
    })
], Browse$1.prototype, "accept", void 0);
__decorate([
    Property({
        reflect: true,
        type: 2
    })
], Browse$1.prototype, "disabled", void 0);
__decorate([
    Property({
        type: 2
    })
], Browse$1.prototype, "droppable", void 0);
__decorate([
    Property({
        type: 64
    })
], Browse$1.prototype, "min", void 0);
__decorate([
    Property({
        type: 64
    })
], Browse$1.prototype, "max", void 0);
__decorate([
    Property({
        type: 64
    })
], Browse$1.prototype, "minSize", void 0);
__decorate([
    Property({
        type: 64
    })
], Browse$1.prototype, "maxSize", void 0);
__decorate([
    Property({
        type: 2
    })
], Browse$1.prototype, "multiple", void 0);
__decorate([
    Event$1()
], Browse$1.prototype, "plusChange", void 0);
__decorate([
    Event$1()
], Browse$1.prototype, "plusError", void 0);
__decorate([
    Event$1()
], Browse$1.prototype, "plusSuccess", void 0);
__decorate([
    State()
], Browse$1.prototype, "dragging", void 0);
__decorate([
    Attributes()
], Browse$1.prototype, "attributes", null);
__decorate([
    Method()
], Browse$1.prototype, "browse", null);
__decorate([
    Bind()
], Browse$1.prototype, "onClick", null);
__decorate([
    Bind()
], Browse$1.prototype, "onChange", null);
__decorate([
    Bind()
], Browse$1.prototype, "onDragLeave", null);
__decorate([
    Bind()
], Browse$1.prototype, "onDragOver", null);
__decorate([
    Bind()
], Browse$1.prototype, "onDrop", null);
Browse$1 = __decorate([
    Element()
], Browse$1);

/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/
var Browse = proxy(Browse$1.TAG, ['accept', 'disabled', 'droppable', 'min', 'max', 'minSize', 'maxSize', 'multiple',], ['plusChange', 'plusError', 'plusSuccess',]);

export { Browse };
