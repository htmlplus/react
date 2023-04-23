/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/
import { AspectRatio as AspectRatioCore } from '@htmlplus/core/aspect-ratio';
import type { AspectRatioElement, AspectRatioJSX as AspectRatioJSX } from '@htmlplus/core/types/components/aspect-ratio/aspect-ratio';

import { proxy } from '../proxy';
import type { Rename } from '../proxy';

type Renamed = Rename<
  AspectRatioJSX,
  {
  }
>;

export const AspectRatio = proxy<AspectRatioElement, Renamed>(
  AspectRatioCore.TAG, 
  ['minHeight', 'maxHeight', 'value', ], 
  [],
);