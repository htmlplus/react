/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/
import { Tooltip as TooltipCore } from '@htmlplus/core/tooltip';
import type { TooltipElement, TooltipJSX as TooltipJSX } from '@htmlplus/core/types/elements/tooltip/tooltip';

import { proxy } from '../proxy';
import type { Rename } from '../proxy';

type Renamed = Rename<
  TooltipJSX,
  {
  }
>;

export const Tooltip = proxy<TooltipElement, Renamed>(
  TooltipCore.TAG, 
  ['arrow', 'delay', 'disabled', 'fixed', 'offset', 'placement', 'reference', 'trigger', 'z', ], 
  [],
);