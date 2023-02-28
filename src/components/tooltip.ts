/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/
import '@htmlplus/core/tooltip';
import type { TooltipJSX } from '@htmlplus/core/types/components/tooltip/tooltip';

import { proxy } from '../proxy';
import type { Rename } from '../proxy';

type Renamed = Rename<TooltipJSX, {}>;

export const Tooltip = proxy<HTMLPlusTooltipElement, Renamed>(
  'plus-tooltip',
  ['arrow', 'auto', 'delay', 'disabled', 'fixed', 'offset', 'placement', 'reference', 'trigger'],
  []
);
