/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/
import '@htmlplus/core/signature';
import type { SignatureJSX } from '@htmlplus/core/types/components/signature/signature';

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

export const Signature = proxy<HTMLPlusSignatureElement, Renamed>(
  'plus-signature',
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
