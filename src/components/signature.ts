/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/
import { Signature as SignatureCore } from '@htmlplus/core/signature';
import type { SignatureElement, SignatureJSX } from '@htmlplus/core/types/components/signature/signature';

import { proxy } from '../proxy';
import type { Rename } from '../proxy';

type Renamed = Rename<
  SignatureJSX,
  {
    onPlusAfter: 'onAfter';
    onPlusBefore: 'onBefore';
    onPlusEnd: 'onEnd';
    onPlusStart: 'onStart';
  }
>;

export const Signature = proxy<SignatureElement, Renamed>(
  SignatureCore.TAG,
  [
    'backgroundColor',
    'clearOnResize',
    'color',
    'disabled',
    'distance',
    'dotSize',
    'maxWidth',
    'minWidth',
    'resizable',
    'throttle',
    'velocity'
  ],
  ['plusAfter', 'plusBefore', 'plusEnd', 'plusStart']
);
