/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/
import { Faker as FakerCore } from '@htmlplus/core/faker';
import type { FakerElement, FakerJSX as FakerJSX } from '@htmlplus/core/types/components/faker/faker';

import { proxy } from '../proxy';
import type { Rename } from '../proxy';

type Renamed = Rename<
  FakerJSX,
  {
  }
>;

export const Faker = proxy<FakerElement, Renamed>(
  FakerCore.TAG, 
  ['api', 'arguments', 'instance', 'seed', ], 
  [],
);