/// <reference types="react" />
import type { FakerJSX as FakerJSX } from '@htmlplus/core/types/elements/faker/faker';
import type { Rename } from '../proxy';
export declare const Faker: import("react").ForwardRefExoticComponent<Rename<FakerJSX, {}> & Omit<import("react").HTMLAttributes<HTMLPlusFakerElement>, "style"> & import("../proxy").StyleReactProps & import("react").RefAttributes<HTMLPlusFakerElement>>;
