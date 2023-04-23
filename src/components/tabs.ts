/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/
import { Tabs as TabsCore } from '@htmlplus/core/tabs';
import type { TabsElement, TabsJSX as TabsJSX } from '@htmlplus/core/types/components/tabs/tabs';

import { proxy } from '../proxy';
import type { Rename } from '../proxy';

type Renamed = Rename<
  TabsJSX,
  {
    onPlusChange: 'onChange';
  }
>;

export const Tabs = proxy<TabsElement, Renamed>(
  TabsCore.TAG, 
  ['value', 'vertical', 'connector', ], 
  ['plusChange', ],
);