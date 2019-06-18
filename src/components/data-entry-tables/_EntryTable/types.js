// @flow strict

export type Columns = Array<Column>;

export type Column = {
  id: string,
  title: string | Function,
  type: "Input" | "Dropdown",
  reducer?: Function,
  dropdownValues?: Array<dropdownValue>,
  getDropdownValues?: (string) => Array<dropdownValue>,
};

export type dropdownValue = {
  id: string,
  name: string,
};
