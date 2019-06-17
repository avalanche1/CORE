// @flow strict

import React from "react";

import * as ddValues                                 from "./lists.js";
import {handle_date_string, make_items_for_dropdown} from "../helpers";

import type {Fields} from "./types.js";

export const fields: Fields = [
  {
    id: "date",
    title: "Date",
    type: "Input",
    valueHandler: handle_date_string,
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
    title: "equipment",
    type: "Dropdown",
    dropdownValues: make_items_for_dropdown(ddValues.getEquipmentList("Crusher")),
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
    title: () => (
      <span>
        Minutes
        <br />
        Off
      </span>
    ),
    type: "Input",
  },
];
