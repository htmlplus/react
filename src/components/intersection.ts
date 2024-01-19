/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/
import { Intersection as IntersectionCore } from '@htmlplus/core/intersection';
import type { IntersectionElement, IntersectionJSX as IntersectionJSX } from '@htmlplus/core/types/elements/intersection/intersection';

import { proxy } from '../proxy';
import type { Rename } from '../proxy';

type Renamed = Rename<
  IntersectionJSX,
  {
    onPlusChange: 'onChange';
  }
>;

export const Intersection = proxy<IntersectionElement, Renamed>(
  IntersectionCore.TAG, 
  ['disabled', 'once', 'root', 'rootMargin', 'threshold', ], 
  ['plusChange', ],
);