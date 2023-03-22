/// <reference types="react" />
import type { DialogJSX } from '@htmlplus/core/types/components/dialog/dialog';
import type { Rename } from '../proxy';
export declare const Dialog: import("react").ForwardRefExoticComponent<Rename<DialogJSX, {
    onPlusClose: 'onClose';
    onPlusClosed: 'onClosed';
    onPlusOpen: 'onOpen';
    onPlusOpened: 'onOpened';
}> & Omit<import("react").HTMLAttributes<HTMLPlusDialogElement>, "style"> & import("../proxy").StyleReactProps & import("react").RefAttributes<HTMLPlusDialogElement>>;
