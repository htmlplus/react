/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/
import { FormatBytes as FormatBytesCore } from '@htmlplus/core/format-bytes';
import type { FormatBytesElement, FormatBytesJSX as FormatBytesJSX } from '@htmlplus/core/types/elements/format-bytes/format-bytes';

import { proxy } from '../proxy';
import type { Rename } from '../proxy';

type Renamed = Rename<
  FormatBytesJSX,
  {
  }
>;

export const FormatBytes = proxy<FormatBytesElement, Renamed>(
  FormatBytesCore.TAG, 
  ['display', 'locale', 'decimals', 'separator', 'signed', 'standard', 'unit', 'value', ], 
  [],
);