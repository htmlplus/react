/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/
import { Breadcrumb as BreadcrumbCore } from '@htmlplus/core/breadcrumb';
import type { BreadcrumbElement, BreadcrumbJSX as BreadcrumbJSX } from '@htmlplus/core/types/elements/breadcrumb/breadcrumb';

import { proxy } from '../proxy';
import type { Rename } from '../proxy';

type Renamed = Rename<
  BreadcrumbJSX,
  {
  }
>;

export const Breadcrumb = proxy<BreadcrumbElement, Renamed>(
  BreadcrumbCore.TAG, 
  ['expanderText', 'offset', 'max', 'separator', ], 
  [],
);