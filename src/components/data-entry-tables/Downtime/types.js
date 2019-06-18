// @flow strict

export type downtimeRecord = {
  id: string,
  date: Date,
  machinery: "Crusher" | "Mill",
  group: "Operational" | "Mechanical" | "Electrical" | "Mining" | "Uncontrolled",
  advent: "Planned" | "Unplanned",
  equipment: string,
  downtimeInfo: string,
  timeOffOn: string,
  minutesOff: number,
};
