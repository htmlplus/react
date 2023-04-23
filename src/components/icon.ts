/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/
import { Icon as IconCore } from '@htmlplus/core/icon';
import type { IconElement, IconJSX as IconJSX } from '@htmlplus/core/types/components/icon/icon';

import { proxy } from '../proxy';
import type { Rename } from '../proxy';

type Renamed = Rename<
  IconJSX,
  {
  }
>;

export const Icon = proxy<IconElement, Renamed>(
  IconCore.TAG, 
  ['color', 'flip', 'label', 'name', 'resolver', 'rotate', 'size', ], 
  [],
);