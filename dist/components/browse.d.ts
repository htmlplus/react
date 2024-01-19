/// <reference types="react" />
import type { BrowseJSX as BrowseJSX } from '@htmlplus/core/types/elements/browse/browse';
import type { Rename } from '../proxy';
export declare const Browse: import("react").ForwardRefExoticComponent<Rename<BrowseJSX, {
    onPlusChange: 'onChange';
    onPlusError: 'onError';
    onPlusSuccess: 'onSuccess';
}> & Omit<import("react").HTMLAttributes<HTMLPlusBrowseElement>, "style"> & import("../proxy").StyleReactProps & import("react").RefAttributes<HTMLPlusBrowseElement>>;
