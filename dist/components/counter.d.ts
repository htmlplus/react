/// <reference types="react" />
import type { CounterJSX as CounterJSX } from '@htmlplus/core/types/components/counter/counter';
import type { Rename } from '../proxy';
export declare const Counter: import("react").ForwardRefExoticComponent<Rename<CounterJSX, {
    onPlusComplete: 'onComplete';
}> & Omit<import("react").HTMLAttributes<HTMLPlusCounterElement>, "style"> & import("../proxy").StyleReactProps & import("react").RefAttributes<HTMLPlusCounterElement>>;
