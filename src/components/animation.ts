/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/
import { Animation as AnimationCore } from '@htmlplus/core/animation';
import type { AnimationElement, AnimationJSX as AnimationJSX } from '@htmlplus/core/types/elements/animation/animation';

import { proxy } from '../proxy';
import type { Rename } from '../proxy';

type Renamed = Rename<
  AnimationJSX,
  {
    onPlusCancel: 'onCancel';
    onPlusFinish: 'onFinish';
    onPlusRemove: 'onRemove';
  }
>;

export const Animation = proxy<AnimationElement, Renamed>(
  AnimationCore.TAG, 
  ['composite', 'delay', 'direction', 'duration', 'easing', 'endDelay', 'fill', 'instance', 'iterationComposite', 'iterations', 'iterationStart', 'keyframes', 'name', 'playbackRate', 'run', ], 
  ['plusCancel', 'plusFinish', 'plusRemove', ],
);