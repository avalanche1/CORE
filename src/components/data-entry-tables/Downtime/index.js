// @flow strict

import {create_data_entry_table} from "../helpers";

import {data} from "./fixtures";
import {columns} from "./columns.js";

const tableProps = {
  title: "Downtime",
  width: 1200,
};

// eslint-disable-next-line no-undef
export function DowntimeTable(): React$Node {
  return create_data_entry_table(data, columns, tableProps);
}
