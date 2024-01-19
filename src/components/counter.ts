/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/
import { Counter as CounterCore } from '@htmlplus/core/counter';
import type { CounterElement, CounterJSX as CounterJSX } from '@htmlplus/core/types/elements/counter/counter';

import { proxy } from '../proxy';
import type { Rename } from '../proxy';

type Renamed = Rename<
  CounterJSX,
  {
    onPlusComplete: 'onComplete';
  }
>;

export const Counter = proxy<CounterElement, Renamed>(
  CounterCore.TAG, 
  ['easing', 'decimal', 'decimals', 'delay', 'duration', 'from', 'numerals', 'play', 'separator', 'to', ], 
  ['plusComplete', ],
);