/// <reference types="react" />
import type { ClickOutsideJSX as ClickOutsideJSX } from '@htmlplus/core/types/elements/click-outside/click-outside';
import type { Rename } from '../proxy';
export declare const ClickOutside: import("react").ForwardRefExoticComponent<Rename<ClickOutsideJSX, {
    onPlusClickOutside: 'onClickOutside';
}> & Omit<import("react").HTMLAttributes<HTMLPlusClickOutsideElement>, "style"> & import("../proxy").StyleReactProps & import("react").RefAttributes<HTMLPlusClickOutsideElement>>;
