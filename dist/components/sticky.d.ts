/// <reference types="react" />
import type { StickyJSX as StickyJSX } from '@htmlplus/core/types/elements/sticky/sticky';
import type { Rename } from '../proxy';
export declare const Sticky: import("react").ForwardRefExoticComponent<Rename<StickyJSX, {
    onPlusChange: 'onChange';
}> & Omit<import("react").HTMLAttributes<HTMLPlusStickyElement>, "style"> & import("../proxy").StyleReactProps & import("react").RefAttributes<HTMLPlusStickyElement>>;
