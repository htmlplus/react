/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/
import { ProgressBar as ProgressBarCore } from '@htmlplus/core/progress-bar';
import type { ProgressBarElement, ProgressBarJSX as ProgressBarJSX } from '@htmlplus/core/types/elements/progress-bar/progress-bar';

import { proxy } from '../proxy';
import type { Rename } from '../proxy';

type Renamed = Rename<
  ProgressBarJSX,
  {
  }
>;

export const ProgressBar = proxy<ProgressBarElement, Renamed>(
  ProgressBarCore.TAG, 
  ['buffer', 'immediate', 'label', 'min', 'max', 'variant', 'value', ], 
  [],
);