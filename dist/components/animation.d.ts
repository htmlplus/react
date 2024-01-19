/// <reference types="react" />
import type { AnimationJSX as AnimationJSX } from '@htmlplus/core/types/elements/animation/animation';
import type { Rename } from '../proxy';
export declare const Animation: import("react").ForwardRefExoticComponent<Rename<AnimationJSX, {
    onPlusCancel: 'onCancel';
    onPlusFinish: 'onFinish';
    onPlusRemove: 'onRemove';
}> & Omit<import("react").HTMLAttributes<HTMLPlusAnimationElement>, "style"> & import("../proxy").StyleReactProps & import("react").RefAttributes<HTMLPlusAnimationElement>>;
