/// <reference types="react" />
import type { CropperJSX as CropperJSX } from '@htmlplus/core/types/elements/cropper/cropper';
import type { Rename } from '../proxy';
export declare const Cropper: import("react").ForwardRefExoticComponent<Rename<CropperJSX, {
    onPlusCrop: 'onCrop';
    onPlusCropEnd: 'onCropEnd';
    onPlusCropMove: 'onCropMove';
    onPlusCropStart: 'onCropStart';
    onPlusReady: 'onReady';
    onPlusZoom: 'onZoom';
}> & Omit<import("react").HTMLAttributes<HTMLPlusCropperElement>, "style"> & import("../proxy").StyleReactProps & import("react").RefAttributes<HTMLPlusCropperElement>>;
