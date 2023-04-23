/// <reference types="react" />
import type { AccordionJSX as AccordionJSX } from '@htmlplus/core/types/components/accordion/accordion';
import type { Rename } from '../proxy';
export declare const Accordion: import("react").ForwardRefExoticComponent<Rename<AccordionJSX, {
    onPlusCollapse: 'onCollapse';
    onPlusCollapsed: 'onCollapsed';
    onPlusExpand: 'onExpand';
    onPlusExpanded: 'onExpanded';
}> & Omit<import("react").HTMLAttributes<HTMLPlusAccordionElement>, "style"> & import("../proxy").StyleReactProps & import("react").RefAttributes<HTMLPlusAccordionElement>>;
