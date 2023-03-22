/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/
import { TabsBar as TabsBarCore } from '@htmlplus/core/tabs-bar';
import type { TabsBarElement, TabsBarJSX } from '@htmlplus/core/types/components/tabs-bar/tabs-bar';

import { proxy } from '../proxy';
import type { Rename } from '../proxy';

type Renamed = Rename<TabsBarJSX, {}>;

export const TabsBar = proxy<TabsBarElement, Renamed>(TabsBarCore.TAG, ['grow', 'justify', 'reverse'], []);
