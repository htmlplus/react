/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/
import { Spinner as SpinnerCore } from '@htmlplus/core/spinner';
import type { SpinnerElement, SpinnerJSX } from '@htmlplus/core/types/components/spinner/spinner';

import { proxy } from '../proxy';
import type { Rename } from '../proxy';

type Renamed = Rename<SpinnerJSX, {}>;

export const Spinner = proxy<SpinnerElement, Renamed>(SpinnerCore.TAG, ['size', 'type'], []);
