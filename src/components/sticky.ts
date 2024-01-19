/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/
import { Sticky as StickyCore } from '@htmlplus/core/sticky';
import type { StickyElement, StickyJSX as StickyJSX } from '@htmlplus/core/types/elements/sticky/sticky';

import { proxy } from '../proxy';
import type { Rename } from '../proxy';

type Renamed = Rename<
  StickyJSX,
  {
    onPlusChange: 'onChange';
  }
>;

export const Sticky = proxy<StickyElement, Renamed>(
  StickyCore.TAG, 
  ['top', 'watcher', 'zIndex', ], 
  ['plusChange', ],
);