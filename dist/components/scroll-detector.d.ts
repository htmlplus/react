/// <reference types="react" />
import type { ScrollDetectorJSX as ScrollDetectorJSX } from '@htmlplus/core/types/elements/scroll-detector/scroll-detector';
import type { Rename } from '../proxy';
export declare const ScrollDetector: import("react").ForwardRefExoticComponent<Rename<ScrollDetectorJSX, {
    onPlusChange: 'onChange';
}> & Omit<import("react").HTMLAttributes<HTMLPlusScrollDetectorElement>, "style"> & import("../proxy").StyleReactProps & import("react").RefAttributes<HTMLPlusScrollDetectorElement>>;
