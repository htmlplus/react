/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/
import '@htmlplus/core/scroll-detector';
import type { ScrollDetectorJSX } from '@htmlplus/core/types/components/scroll-detector/scroll-detector';

import { proxy } from '../proxy';
import type { Rename } from '../proxy';

type Renamed = Rename<
  ScrollDetectorJSX,
  {
    onPlusChange: 'onChange';
  }
>;

export const ScrollDetector = proxy<HTMLPlusScrollDetectorElement, Renamed>(
  'plus-scroll-detector',
  ['disabled', 'reference', 'vertical'],
  ['plusChange']
);
