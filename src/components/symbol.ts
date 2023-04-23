/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/
import { Symbol as SymbolCore } from '@htmlplus/core/symbol';
import type { SymbolElement, SymbolJSX } from '@htmlplus/core/types/components/symbol/symbol';

import { proxy } from '../proxy';
import type { Rename } from '../proxy';

type Renamed = Rename<SymbolJSX, {}>;

export const Symbol = proxy<SymbolElement, Renamed>(
  SymbolCore.TAG,
  ['color', 'defaults', 'flip', 'label', 'name', 'resolver', 'rotate', 'size'],
  []
);
