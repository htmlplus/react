/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/
import { Browse as BrowseCore } from '@htmlplus/core/browse';
import type { BrowseElement, BrowseJSX as BrowseJSX } from '@htmlplus/core/types/components/browse/browse';

import { proxy } from '../proxy';
import type { Rename } from '../proxy';

type Renamed = Rename<
  BrowseJSX,
  {
    onPlusChange: 'onChange';
    onPlusError: 'onError';
    onPlusSuccess: 'onSuccess';
  }
>;

export const Browse = proxy<BrowseElement, Renamed>(
  BrowseCore.TAG, 
  ['accept', 'disabled', 'droppable', 'min', 'max', 'minSize', 'maxSize', 'multiple', ], 
  ['plusChange', 'plusError', 'plusSuccess', ],
);