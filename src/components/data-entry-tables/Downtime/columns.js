/* eslint-disable line-comment-position */
// @flow strict

import React from "react";

import * as ddValues from "./lists.js";
import {handle_date_string, make_items_for_dropdown} from "../helpers";
import {pipe} from "../../../utility-belt/fp/pipe";

import type {Columns, dropdownValue} from "../_EntryTable/types";

export const columns: Columns = [
  {
    id: "date",
    title: "Date",
    type: "Input",
    reducer: handle_date_string,
  },
  {
    id: "machinery",
    title: "Machinery",
    type: "Dropdown",
    dropdownValues: make_items_for_dropdown(ddValues.typeList),
  },
  {
    id: "group",
    title: "Group",
    type: "Dropdown",
    dropdownValues: make_items_for_dropdown(ddValues.groupList),
  },
  {
    id: "advent",
    title: "Advent",
    type: "Dropdown",
    dropdownValues: make_items_for_dropdown(ddValues.adventList),
  },
  {
    id: "equipment",
    title: "Equipment",
    type: "Dropdown",
    getDropdownValues: make_items_for_equipment_dd,
  },
  {
    id: "downtimeInfo",
    title: "Downtime Info",
    type: "Input",
  },
  {
    id: "timeOffOn",
    title: "Time Off/On",
    type: "Input",
  },
  {
    id: "minutesOff",
    title: () => (<span>Minutes<br />Off</span>), // prettier-ignore
    type: "Input",
  },
];

function make_items_for_equipment_dd(machinery: string): Array<dropdownValue> {
  // prettier-ignore
  return pipe(machinery).thru(
    ddValues.getEquipmentList,
    make_items_for_dropdown,
  );
}
