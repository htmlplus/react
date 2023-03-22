/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/
import { Drawer as DrawerCore } from '@htmlplus/core/drawer';
import type { DrawerElement, DrawerJSX } from '@htmlplus/core/types/components/drawer/drawer';

import { proxy } from '../proxy';
import type { Rename } from '../proxy';

type Renamed = Rename<
  DrawerJSX,
  {
    onPlusClose: 'onClose';
    onPlusClosed: 'onClosed';
    onPlusOpen: 'onOpen';
    onPlusOpened: 'onOpened';
  }
>;

export const Drawer = proxy<DrawerElement, Renamed>(
  DrawerCore.TAG,
  [
    'animation',
    'backdrop',
    'breakpoint',
    'connector',
    'mini',
    'miniSize',
    'open',
    'persistent',
    'placement',
    'flexible',
    'size',
    'temporary'
  ],
  ['plusClose', 'plusClosed', 'plusOpen', 'plusOpened']
);
