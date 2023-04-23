/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/
import { TabsPanel as TabsPanelCore } from '@htmlplus/core/tabs-panel';
import type { TabsPanelElement, TabsPanelJSX as TabsPanelJSX } from '@htmlplus/core/types/components/tabs-panel/tabs-panel';

import { proxy } from '../proxy';
import type { Rename } from '../proxy';

type Renamed = Rename<
  TabsPanelJSX,
  {
  }
>;

export const TabsPanel = proxy<TabsPanelElement, Renamed>(
  TabsPanelCore.TAG, 
  ['value', ], 
  [],
);