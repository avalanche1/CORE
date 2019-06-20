// @flow strict

import {create_data_entry_table} from "../helpers";

import {data} from "./fixtures";
import {columns} from "./columns.js";

const tableProps = {
  title: "Gold Refined",
  width: 2000,
};

// eslint-disable-next-line no-undef
export function GoldRefinedTable(): React$Node {
  return create_data_entry_table(data, columns, tableProps);
}
