// @flow strict

import is from "is_js";

export function handle_date_string(dateObj: Date | string): string {
  const result = is.date(dateObj) ? dateObj.toDateString() : dateObj;
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
