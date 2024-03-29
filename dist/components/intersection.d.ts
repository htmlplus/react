/// <reference types="react" />
import type { IntersectionJSX as IntersectionJSX } from '@htmlplus/core/types/components/intersection/intersection';
import type { Rename } from '../proxy';
export declare const Intersection: import("react").ForwardRefExoticComponent<Rename<IntersectionJSX, {
    onPlusChange: 'onChange';
}> & Omit<import("react").HTMLAttributes<HTMLPlusIntersectionElement>, "style"> & import("../proxy").StyleReactProps & import("react").RefAttributes<HTMLPlusIntersectionElement>>;
