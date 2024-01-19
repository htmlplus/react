/// <reference types="react" />
import type { SwitchJSX as SwitchJSX } from '@htmlplus/core/types/elements/switch/switch';
import type { Rename } from '../proxy';
export declare const Switch: import("react").ForwardRefExoticComponent<Rename<SwitchJSX, {
    onPlusChange: 'onChange';
}> & Omit<import("react").HTMLAttributes<HTMLPlusSwitchElement>, "style"> & import("../proxy").StyleReactProps & import("react").RefAttributes<HTMLPlusSwitchElement>>;
