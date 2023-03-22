/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/
import { Floating as FloatingCore } from '@htmlplus/core/floating';
import type { FloatingElement, FloatingJSX } from '@htmlplus/core/types/components/floating/floating';

import { proxy } from '../proxy';
import type { Rename } from '../proxy';

type Renamed = Rename<FloatingJSX, {}>;

export const Floating = proxy<FloatingElement, Renamed>(FloatingCore.TAG, ['fixed', 'offset', 'placement'], []);
