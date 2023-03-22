/// <reference types="react" />
import type { TabsJSX } from '@htmlplus/core/types/components/tabs/tabs';
import type { Rename } from '../proxy';
export declare const Tabs: import("react").ForwardRefExoticComponent<Rename<TabsJSX, {
    onPlusChange: 'onChange';
}> & Omit<import("react").HTMLAttributes<HTMLPlusTabsElement>, "style"> & import("../proxy").StyleReactProps & import("react").RefAttributes<HTMLPlusTabsElement>>;
