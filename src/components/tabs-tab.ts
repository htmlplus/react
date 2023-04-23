/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/
import { TabsTab as TabsTabCore } from '@htmlplus/core/tabs-tab';
import type { TabsTabElement, TabsTabJSX as TabsTabJSX } from '@htmlplus/core/types/components/tabs-tab/tabs-tab';

import { proxy } from '../proxy';
import type { Rename } from '../proxy';

type Renamed = Rename<
  TabsTabJSX,
  {
  }
>;

export const TabsTab = proxy<TabsTabElement, Renamed>(
  TabsTabCore.TAG, 
  ['disabled', 'value', ], 
  [],
);