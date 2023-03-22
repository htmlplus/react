/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/
import { Card as CardCore } from '@htmlplus/core/card';
import type { CardElement, CardJSX } from '@htmlplus/core/types/components/card/card';

import { proxy } from '../proxy';
import type { Rename } from '../proxy';

type Renamed = Rename<CardJSX, {}>;

export const Card = proxy<CardElement, Renamed>(CardCore.TAG, ['elevation', 'flat', 'outlined', 'tile'], []);
