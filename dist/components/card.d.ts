/// <reference types="react" />
import type { CardJSX } from '@htmlplus/core/types/components/card/card';
import type { Rename } from '../proxy';
export declare const Card: import("react").ForwardRefExoticComponent<Rename<CardJSX, {}> & Omit<import("react").HTMLAttributes<HTMLPlusCardElement>, "style"> & import("../proxy").StyleReactProps & import("react").RefAttributes<HTMLPlusCardElement>>;
