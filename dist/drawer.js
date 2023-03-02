import { _ as __decorate, k as createLink, P as Property, E as Event$1, S as State, A as Attributes, W as Watch, B as Bind, p as Media, a as Element, h as host, l as toAxis, i as isRTL, d as classes, b as styles, m as Animation, n as Scrollbar, c as off, o as on, u as uhtml } from './index-75149982.js';
import { proxy } from './proxy.js';
import 'react';

var css_248z = "*,:after,:before{box-sizing:border-box}:host,:host:after,:host:before{box-sizing:border-box}:host([hidden]:not([hidden=false])){display:none}:host{--plus-drawer-size:280px;--plus-drawer-mini-size:80px}:host{display:block;overflow:hidden;position:relative;z-index:1000}.backdrop{left:0;position:fixed;top:0;z-index:1}.backdrop,.backdrop *{height:100%;width:100%}.backdrop *{background-color:#000;opacity:.5}.root{height:100%;position:relative;z-index:1}.backdrop,.root{transition:inherit}.left,.right{width:var(--plus-drawer-size)}.bottom,.top{height:var(--plus-drawer-size)}.left.reverse,.right{margin:0 var(--plus-drawer-offset,0) 0 0}.left,.right.reverse{margin:0 0 0 var(--plus-drawer-offset,0)}.bottom.reverse,.top{margin:var(--plus-drawer-offset,0) 0 0 0}.bottom,.top.reverse{margin:0 0 var(--plus-drawer-offset,0) 0}:host([temporary=on-breakpoint][state=mobile]),:host([temporary]:not([temporary=false]):not([temporary=on-breakpoint])){bottom:0;left:0;position:fixed;right:0;top:0}:host([animation]:not([animation=false])){transition:.3s}:host([state=closed]){display:none}:host([state=opened][mini-state=leaved]){overflow:visible}:host([state=closing]),:host([state=open]){--plus-drawer-offset:calc(var(--plus-drawer-size)*-1)!important}:host([state=closing]) .backdrop,:host([state=open]) .backdrop{opacity:0}:host([mini-state=entered]),:host([mini-state=entering]),:host([mini-state=leave]){--plus-drawer-offset:calc(var(--plus-drawer-size)*-1 + var(--plus-drawer-mini-size))}";

const { Action, Observable, reconnect } = createLink({
    crawl: false,
    namespace: ({ connector }) => connector ? `Drawer:${connector}` : undefined
});
/**
 * @slot default - The default slot.
 */
let Drawer$1 = class Drawer {
    constructor() {
        /**
         * Activate the drawer's backdrop to show or not.
         */
        this.backdrop = 'auto';
        /**
         * Sets the mobile breakpoint to apply alternate styles for mobile devices
         * when the breakpoint value is met.
         */
        this.breakpoint = 'md';
        this.animations = {};
    }
    get $host() {
        return host(this);
    }
    get attributes() {
        return {
            platform: this.platform,
            style: this.styles
        };
    }
    get classes() {
        const placement = toAxis(this.placement || 'start', isRTL(this));
        return classes(['root', {
                [placement]: true,
                reverse: this.flexible
            }], true);
    }
    get hasBackdrop() {
        if (!this.isTemporary)
            return false;
        if (this.backdrop)
            return true;
        if (this.backdrop === 'auto')
            return true;
        return false;
    }
    get isTemporary() {
        if (this.temporary)
            return true;
        if (this.temporary === 'on-breakpoint' && this.platform === 'mobile')
            return true;
        return false;
    }
    get styles() {
        var _a, _b;
        return styles({
            '--plus-drawer-size': (_a = this.size) !== null && _a !== void 0 ? _a : null,
            '--plus-drawer-mini-size': (_b = this.miniSize) !== null && _b !== void 0 ? _b : null
        });
    }
    hide() {
        this.tryHide(true, false);
    }
    show() {
        this.tryShow(true, false);
    }
    toggle() {
        this.isOpen ? this.hide() : this.show();
    }
    broadcast(value) {
        this.tunnel = value;
    }
    initialize() {
        this.animations.open = new Animation({
            key: 'state',
            source: () => this.$host,
            target: () => this.$host,
            state: this.open ? 'entered' : 'leaved',
            states: {
                enter: 'open',
                entering: 'opening',
                entered: 'opened',
                leave: 'close',
                leaving: 'closing',
                leaved: 'closed'
            }
        });
        this.animations.mini = new Animation({
            key: 'mini-state',
            source: () => this.$host,
            target: () => this.$host,
            state: this.mini ? 'entered' : 'leaved',
            states: {
                enter: 'enter',
                entering: 'entering',
                entered: 'entered',
                leave: 'leave',
                leaving: 'leaving',
                leaved: 'leaved'
            }
        });
        if (!this.open)
            return;
        this.tryShow(false, true);
    }
    terminate() {
        var _a, _b;
        (_a = this.animations.open) === null || _a === void 0 ? void 0 : _a.dispose();
        (_b = this.animations.mini) === null || _b === void 0 ? void 0 : _b.dispose();
    }
    tryHide(animation, silent) {
        var _a;
        if (!this.isOpen)
            return;
        if (!silent && this.plusClose().defaultPrevented)
            return;
        if (!animation)
            return this.onHide();
        (_a = this.animations.open) === null || _a === void 0 ? void 0 : _a.leave({
            onLeave: () => {
                // TODO: experimantal new link
                this.broadcast(false);
            },
            onLeaved: () => {
                this.onHide();
                if (silent)
                    return;
                this.plusClosed();
            }
        });
    }
    tryShow(animation, silent) {
        var _a;
        if (this.isOpen)
            return;
        if (!silent && this.plusOpen().defaultPrevented)
            return;
        if (!animation)
            return this.onShow();
        (_a = this.animations.open) === null || _a === void 0 ? void 0 : _a.enter({
            onEnter: () => {
                this.onShow();
            },
            onEntered: () => {
                if (silent)
                    return;
                this.plusOpened();
            }
        });
    }
    watcher(next, prev, name) {
        var _a, _b;
        switch (name) {
            case 'connector':
                reconnect(this);
                break;
            case 'mini':
                next && ((_a = this.animations.mini) === null || _a === void 0 ? void 0 : _a.enter());
                !next && ((_b = this.animations.mini) === null || _b === void 0 ? void 0 : _b.leave());
                break;
            case 'open':
                next && !this.isOpen && this.tryShow(true, true);
                !next && this.isOpen && this.tryHide(true, true);
                break;
        }
    }
    onHide() {
        // reset document's scroll
        Scrollbar.reset(this);
        // remove outside click listener
        off(this.$root, 'outside', this.onClickOutside, true);
        // update state
        this.open = this.isOpen = false;
        // TODO: experimantal new link
        this.broadcast(false);
    }
    onShow() {
        // remove document's scroll
        this.isTemporary && Scrollbar.remove(this);
        // remove outside click listener
        on(this.$root, 'outside', this.onClickOutside, true);
        // update state
        this.open = this.isOpen = true;
        // TODO: experimantal new link
        this.broadcast(true);
    }
    onMedia(event) {
        this.platform = event.matches ? 'mobile' : 'desktop';
        if (!event.matches && this.open)
            this.open = false;
    }
    onClickOutside() {
        if (!this.isOpen || !this.isTemporary || this.persistent)
            return;
        this.tryHide(true, false);
    }
    loadedCallback() {
        this.initialize();
    }
    disconnectedCallback() {
        this.terminate();
    }
    render() {
        return uhtml.html `${this.hasBackdrop ? uhtml.html `<div class="backdrop" part="backdrop">
            <div />
          </div>` : ''}<div class=${this.classes} ref=${$element => this.$root = $element}>
          <slot />
        </div>`;
    }
};
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
Drawer$1.TAG = "plus-drawer";
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
Drawer$1.STYLES = css_248z;
__decorate([
    Property({
        reflect: true,
        type: 256
    })
], Drawer$1.prototype, "animation", void 0);
__decorate([
    Property({
        type: 10
    })
], Drawer$1.prototype, "backdrop", void 0);
__decorate([
    Property({
        type: 8
    })
], Drawer$1.prototype, "breakpoint", void 0);
__decorate([
    Property({
        type: 256
    })
], Drawer$1.prototype, "connector", void 0);
__decorate([
    Property({
        reflect: true,
        type: 2
    })
], Drawer$1.prototype, "mini", void 0);
__decorate([
    Property({
        type: 256
    })
], Drawer$1.prototype, "miniSize", void 0);
__decorate([
    Property({
        reflect: true,
        type: 2
    })
], Drawer$1.prototype, "open", void 0);
__decorate([
    Property({
        type: 2
    })
], Drawer$1.prototype, "persistent", void 0);
__decorate([
    Property({
        type: 8
    })
], Drawer$1.prototype, "placement", void 0);
__decorate([
    Property({
        type: 2
    })
], Drawer$1.prototype, "flexible", void 0);
__decorate([
    Property({
        type: 256
    })
], Drawer$1.prototype, "size", void 0);
__decorate([
    Property({
        type: 10
    })
], Drawer$1.prototype, "temporary", void 0);
__decorate([
    Event$1({
        cancelable: true
    })
], Drawer$1.prototype, "plusClose", void 0);
__decorate([
    Event$1()
], Drawer$1.prototype, "plusClosed", void 0);
__decorate([
    Event$1({
        cancelable: true
    })
], Drawer$1.prototype, "plusOpen", void 0);
__decorate([
    Event$1()
], Drawer$1.prototype, "plusOpened", void 0);
__decorate([
    State()
], Drawer$1.prototype, "platform", void 0);
__decorate([
    Observable()
], Drawer$1.prototype, "tunnel", void 0);
__decorate([
    Attributes()
], Drawer$1.prototype, "attributes", null);
__decorate([
    Action()
], Drawer$1.prototype, "toggle", null);
__decorate([
    Watch(['connector', 'mini', 'open'])
], Drawer$1.prototype, "watcher", null);
__decorate([
    Bind(),
    Media('[breakpoint]-down')
], Drawer$1.prototype, "onMedia", null);
__decorate([
    Bind()
], Drawer$1.prototype, "onClickOutside", null);
Drawer$1 = __decorate([
    Element("plus-drawer")
], Drawer$1);

/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/
var Drawer = proxy('plus-drawer', [
    'animation',
    'backdrop',
    'breakpoint',
    'connector',
    'mini',
    'miniSize',
    'open',
    'persistent',
    'placement',
    'flexible',
    'size',
    'temporary'
], ['plusClose', 'plusClosed', 'plusOpen', 'plusOpened']);

export { Drawer };
