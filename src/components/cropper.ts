/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/
import { Cropper as CropperCore } from '@htmlplus/core/cropper';
import type { CropperElement, CropperJSX as CropperJSX } from '@htmlplus/core/types/elements/cropper/cropper';

import { proxy } from '../proxy';
import type { Rename } from '../proxy';

type Renamed = Rename<
  CropperJSX,
  {
    onPlusCrop: 'onCrop';
    onPlusCropEnd: 'onCropEnd';
    onPlusCropMove: 'onCropMove';
    onPlusCropStart: 'onCropStart';
    onPlusReady: 'onReady';
    onPlusZoom: 'onZoom';
  }
>;

export const Cropper = proxy<CropperElement, Renamed>(
  CropperCore.TAG, 
  ['area', 'aspectRatio', 'backdrop', 'background', 'disabled', 'guides', 'indicator', 'mode', 'resizer', 'resizerShape', 'responsive', 'shape', 'src', 'value', 'view', 'zoomable', 'zoomRatio', ], 
  ['plusCrop', 'plusCropEnd', 'plusCropMove', 'plusCropStart', 'plusReady', 'plusZoom', ],
);