/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/
import { Grid as GridCore } from '@htmlplus/core/grid';
import type { GridElement, GridJSX as GridJSX } from '@htmlplus/core/types/elements/grid/grid';

import { proxy } from '../proxy';
import type { Rename } from '../proxy';

type Renamed = Rename<
  GridJSX,
  {
  }
>;

export const Grid = proxy<GridElement, Renamed>(
  GridCore.TAG, 
  ['alignContent', 'alignContentXs', 'alignContentSm', 'alignContentMd', 'alignContentLg', 'alignContentXl', 'alignContentXxl', 'alignItems', 'alignItemsXs', 'alignItemsSm', 'alignItemsMd', 'alignItemsLg', 'alignItemsXl', 'alignItemsXxl', 'gutter', 'gutterX', 'gutterY', 'justifyContent', 'justifyContentXs', 'justifyContentSm', 'justifyContentMd', 'justifyContentLg', 'justifyContentXl', 'justifyContentXxl', 'reverse', 'vertical', 'wrap', 'wrapXs', 'wrapSm', 'wrapMd', 'wrapLg', 'wrapXl', 'wrapXxl', ], 
  [],
);