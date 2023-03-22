/// <reference types="react" />
import type { DrawerJSX } from '@htmlplus/core/types/components/drawer/drawer';
import type { Rename } from '../proxy';
export declare const Drawer: import("react").ForwardRefExoticComponent<Rename<DrawerJSX, {
    onPlusClose: 'onClose';
    onPlusClosed: 'onClosed';
    onPlusOpen: 'onOpen';
    onPlusOpened: 'onOpened';
}> & Omit<import("react").HTMLAttributes<HTMLPlusDrawerElement>, "style"> & import("../proxy").StyleReactProps & import("react").RefAttributes<HTMLPlusDrawerElement>>;
