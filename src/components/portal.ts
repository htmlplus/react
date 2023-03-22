/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/
import { Portal as PortalCore } from '@htmlplus/core/portal';
import type { PortalElement, PortalJSX } from '@htmlplus/core/types/components/portal/portal';

import { proxy } from '../proxy';
import type { Rename } from '../proxy';

type Renamed = Rename<PortalJSX, {}>;

export const Portal = proxy<PortalElement, Renamed>(PortalCore.TAG, ['disabled', 'strategy', 'target'], []);
