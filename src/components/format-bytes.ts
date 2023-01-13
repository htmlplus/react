/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/
import '@htmlplus/core/format-bytes';
import type { FormatBytesJSX } from '@htmlplus/core/types/components/format-bytes/format-bytes';

import { proxy } from '../proxy';
import type { Rename } from '../proxy';

type Renamed = Rename<FormatBytesJSX, {}>;

export const FormatBytes = proxy<HTMLPlusFormatBytesElement, Renamed>(
  'plus-format-bytes',
  ['display', 'locale', 'decimals', 'separator', 'signed', 'standard', 'unit', 'value'],
  []
);
