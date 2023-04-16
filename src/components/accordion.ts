/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/
import { Accordion as AccordionCore } from '@htmlplus/core/accordion';
import type { AccordionElement, AccordionJSX } from '@htmlplus/core/types/components/accordion/accordion';

import { proxy } from '../proxy';
import type { Rename } from '../proxy';

type Renamed = Rename<
  AccordionJSX,
  {
    onPlusCollapse: 'onCollapse';
    onPlusCollapsed: 'onCollapsed';
    onPlusExpand: 'onExpand';
    onPlusExpanded: 'onExpanded';
  }
>;

export const Accordion = proxy<AccordionElement, Renamed>(
  AccordionCore.TAG,
  ['disabled', 'open', 'summary'],
  ['plusCollapse', 'plusCollapsed', 'plusExpand', 'plusExpanded']
);
