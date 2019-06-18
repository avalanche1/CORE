// @flow strict

import type {Columns, Column} from "./types";

export function get_disabled_column_ids(columns: Columns): Array<string> {
  const result = columns
    .map((column: Column) => {
      return column.disabled ? column.id : null;
    })
    .filter((id: string | null) => typeof id === "string");
  return result;
}

export function get_column_widths(columns: Columns): Object {
  const result = columns
    .filter((column: Column) => Boolean(column.width))
    .reduce((acc, column) => {
      // eslint-disable-next-line fp/no-mutation, no-param-reassign
      acc[column.id] = column.width;
      return acc;
    }, {});
  return result;
}
// TODO annotate all fns with Input/Output examples
