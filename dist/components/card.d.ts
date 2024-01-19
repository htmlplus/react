/// <reference types="react" />
import type { CardJSX as CardJSX } from '@htmlplus/core/types/elements/card/card';
import type { Rename } from '../proxy';
export declare const Card: import("react").ForwardRefExoticComponent<Rename<CardJSX, {}> & Omit<import("react").HTMLAttributes<HTMLPlusCardElement>, "style"> & import("../proxy").StyleReactProps & import("react").RefAttributes<HTMLPlusCardElement>>;
