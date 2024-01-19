/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/
import { Switch as SwitchCore } from '@htmlplus/core/switch';
import type { SwitchElement, SwitchJSX as SwitchJSX } from '@htmlplus/core/types/elements/switch/switch';

import { proxy } from '../proxy';
import type { Rename } from '../proxy';

type Renamed = Rename<
  SwitchJSX,
  {
    onPlusChange: 'onChange';
  }
>;

export const Switch = proxy<SwitchElement, Renamed>(
  SwitchCore.TAG, 
  ['checked', 'disabled', ], 
  ['plusChange', ],
);