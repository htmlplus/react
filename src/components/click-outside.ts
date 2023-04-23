/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/
import { ClickOutside as ClickOutsideCore } from '@htmlplus/core/click-outside';
import type { ClickOutsideElement, ClickOutsideJSX as ClickOutsideJSX } from '@htmlplus/core/types/components/click-outside/click-outside';

import { proxy } from '../proxy';
import type { Rename } from '../proxy';

type Renamed = Rename<
  ClickOutsideJSX,
  {
    onPlusClickOutside: 'onClickOutside';
  }
>;

export const ClickOutside = proxy<ClickOutsideElement, Renamed>(
  ClickOutsideCore.TAG, 
  ['capture', 'disabled', 'once', ], 
  ['plusClickOutside', ],
);