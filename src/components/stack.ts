/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/
import { Stack as StackCore } from '@htmlplus/core/stack';
import type { StackElement, StackJSX as StackJSX } from '@htmlplus/core/types/components/stack/stack';

import { proxy } from '../proxy';
import type { Rename } from '../proxy';

type Renamed = Rename<
  StackJSX,
  {
  }
>;

export const Stack = proxy<StackElement, Renamed>(
  StackCore.TAG, 
  ['alignItems', 'gap', 'justifyContent', 'reverse', 'vertical', ], 
  [],
);