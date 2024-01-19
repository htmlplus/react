/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/
import { ScrollDetector as ScrollDetectorCore } from '@htmlplus/core/scroll-detector';
import type { ScrollDetectorElement, ScrollDetectorJSX as ScrollDetectorJSX } from '@htmlplus/core/types/elements/scroll-detector/scroll-detector';

import { proxy } from '../proxy';
import type { Rename } from '../proxy';

type Renamed = Rename<
  ScrollDetectorJSX,
  {
    onPlusChange: 'onChange';
  }
>;

export const ScrollDetector = proxy<ScrollDetectorElement, Renamed>(
  ScrollDetectorCore.TAG, 
  ['disabled', 'reference', 'vertical', ], 
  ['plusChange', ],
);