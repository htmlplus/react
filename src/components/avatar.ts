/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/
import { Avatar as AvatarCore } from '@htmlplus/core/avatar';
import type { AvatarElement, AvatarJSX } from '@htmlplus/core/types/components/avatar/avatar';

import { proxy } from '../proxy';
import type { Rename } from '../proxy';

type Renamed = Rename<AvatarJSX, {}>;

export const Avatar = proxy<AvatarElement, Renamed>(AvatarCore.TAG, ['shape', 'size'], []);
