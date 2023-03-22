/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/
import { ScrollIndicator as ScrollIndicatorCore } from '@htmlplus/core/scroll-indicator';
import type {
  ScrollIndicatorElement,
  ScrollIndicatorJSX
} from '@htmlplus/core/types/components/scroll-indicator/scroll-indicator';

import { proxy } from '../proxy';
import type { Rename } from '../proxy';

type Renamed = Rename<
  ScrollIndicatorJSX,
  {
    onPlusScroll: 'onScroll';
  }
>;

export const ScrollIndicator = proxy<ScrollIndicatorElement, Renamed>(
  ScrollIndicatorCore.TAG,
  ['disabled', 'source'],
  ['plusScroll']
);
