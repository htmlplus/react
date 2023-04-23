/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/
import { Dialog as DialogCore } from '@htmlplus/core/dialog';
import type { DialogElement, DialogJSX as DialogJSX } from '@htmlplus/core/types/components/dialog/dialog';

import { proxy } from '../proxy';
import type { Rename } from '../proxy';

type Renamed = Rename<
  DialogJSX,
  {
    onPlusClose: 'onClose';
    onPlusClosed: 'onClosed';
    onPlusOpen: 'onOpen';
    onPlusOpened: 'onOpened';
  }
>;

export const Dialog = proxy<DialogElement, Renamed>(
  DialogCore.TAG, 
  ['animation', 'backdrop', 'connector', 'fullHeight', 'fullWidth', 'fullscreen', 'keyboard', 'open', 'persistent', 'placement', 'portal', 'portalStrategy', 'portalTarget', 'scrollable', 'size', 'sticky', ], 
  ['plusClose', 'plusClosed', 'plusOpen', 'plusOpened', ],
);