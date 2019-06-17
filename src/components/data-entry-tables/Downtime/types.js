// @flow strict

export type Fields = Array<Field>;
export type Field = {
  id: string,
  title: string | Function,
  type: "Input" | "Dropdown",
  valueHandler?: Function,
  dropdownValues?: Array<{
    id: string,
    name: string,
  }>,
};

export type downtimeRecord = {
  id: string,
  date: Date,
  machinery: "Crusher" | "Mill",
  group: "Operational" | "Mechanical" | "Electrical" | "Mining" | "Uncontrolled" | "",
  advent: "Planned" | "Unplanned" | "",
  equipment: string,
  downtimeInfo: string,
  timeOffOn: string,
  minutesOff: number | "",
};
