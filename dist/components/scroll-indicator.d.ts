/// <reference types="react" />
import type { ScrollIndicatorJSX as ScrollIndicatorJSX } from '@htmlplus/core/types/components/scroll-indicator/scroll-indicator';
import type { Rename } from '../proxy';
export declare const ScrollIndicator: import("react").ForwardRefExoticComponent<Rename<ScrollIndicatorJSX, {
    onPlusScroll: 'onScroll';
}> & Omit<import("react").HTMLAttributes<HTMLPlusScrollIndicatorElement>, "style"> & import("../proxy").StyleReactProps & import("react").RefAttributes<HTMLPlusScrollIndicatorElement>>;
