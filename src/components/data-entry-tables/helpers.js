// @flow strict

import is from "is_js";
import {round} from "../../utility-belt/math/round";
export function handle_date_string(row: Object, column: {id: string}): string {
  const dateValue: Date | string = row[column.id];
  const result = is.date(dateValue) ? dateValue.toDateString() : dateValue;
  return result;
}

export function handle_percent(row: Object, column: {id: string}): string {
  const float: number = row[column.id];
  const result = round(float, 2); // eslint-disable-line no-magic-numbers
  return result;
}

export function make_items_for_dropdown(
  list: Array<string>,
): Array<{id: string, name: string}> {
  return list.map((string) => {
    return {
      id: string,
      name: string,
    };
  });
}
