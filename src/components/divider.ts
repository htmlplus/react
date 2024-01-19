/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/
import { Divider as DividerCore } from '@htmlplus/core/divider';
import type { DividerElement, DividerJSX as DividerJSX } from '@htmlplus/core/types/elements/divider/divider';

import { proxy } from '../proxy';
import type { Rename } from '../proxy';

type Renamed = Rename<
  DividerJSX,
  {
  }
>;

export const Divider = proxy<DividerElement, Renamed>(
  DividerCore.TAG, 
  ['placement', 'width', 'type', 'variant', 'vertical', ], 
  [],
);