/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/
import { AvatarGroup as AvatarGroupCore } from '@htmlplus/core/avatar-group';
import type { AvatarGroupElement, AvatarGroupJSX as AvatarGroupJSX } from '@htmlplus/core/types/elements/avatar-group/avatar-group';

import { proxy } from '../proxy';
import type { Rename } from '../proxy';

type Renamed = Rename<
  AvatarGroupJSX,
  {
  }
>;

export const AvatarGroup = proxy<AvatarGroupElement, Renamed>(
  AvatarGroupCore.TAG, 
  ['hoverable', 'stacked', ], 
  [],
);