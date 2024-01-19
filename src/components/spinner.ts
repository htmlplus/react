/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/
import { Spinner as SpinnerCore } from '@htmlplus/core/spinner';
import type { SpinnerElement, SpinnerJSX as SpinnerJSX } from '@htmlplus/core/types/elements/spinner/spinner';

import { proxy } from '../proxy';
import type { Rename } from '../proxy';

type Renamed = Rename<
  SpinnerJSX,
  {
  }
>;

export const Spinner = proxy<SpinnerElement, Renamed>(
  SpinnerCore.TAG, 
  ['color', 'size', 'type', ], 
  [],
);