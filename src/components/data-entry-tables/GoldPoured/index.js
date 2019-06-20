// @flow strict

// @flow strict

import {create_data_entry_table} from "../helpers";

import {data} from "./fixtures";
import {columns} from "./columns.js";

const tableProps = {
  title: "Gold Poured",
  width: 1600,
};

// eslint-disable-next-line no-undef
export function GoldPouredTable(): React$Node {
  return create_data_entry_table(data, columns, tableProps);
}
