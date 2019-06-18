/* eslint-disable line-comment-position */
// @flow strict

import React from "react";

import {handle_date_string, handle_percent} from "../helpers";
import {round} from "../../../utility-belt/math/round";

import type {Columns} from "../_EntryTable/types";

export const columns: Columns = [
  {
    id: "pouredDate",
    title: "Poured Date",
    type: "Input",
    reducer: handle_date_string,
  },
  {
    id: "shippedDate",
    title: "Shipped Date",
    type: "Input",
    reducer: handle_date_string,
  },
  {
    id: "barNo",
    title: "Bar No.",
    type: "Input",
  },
  {
    id: "shipmentNo",
    title: "Shipment No.",
    type: "Input",
  },
  {
    id: "pouredWeight",
    title: "Poured Weight(g)",
    type: "Input",
  },
  {
    id: "shippedWeight",
    title: "Shipped Weight(g)",
    type: "Input",
  },
  {
    id: "weightDiff",
    title: "Weight Diff",
    type: "Input",
    reducer: calc_weight_diff,
    disabled: true,
    width: 5,
  },
  {
    id: "siteAu",
    title: "Site Au",
    type: "Input",
    reducer: handle_percent,
    width: 5,
  },
  {
    id: "siteAg",
    title: "Site Ag",
    type: "Input",
    reducer: handle_percent,
    width: 5,
  },
  {
    id: "totalPouredAuGr",
    title: () => (<span>Total Metal Poured<br />Au Site(g)</span>), // prettier-ignore
    type: "Input",
    disabled: true,
  },
  {
    id: "totalPouredAgGr",
    title: () => (<span>Total Metal Poured<br />Ag Site(g)</span>), // prettier-ignore
    type: "Input",
    disabled: true,
  },
  {
    id: "totalPouredAuOz",
    title: () => (<span>Total Metal Poured<br />Au Site(Oz)</span>), // prettier-ignore
    type: "Input",
    disabled: true,
  },
  {
    id: "totalPouredAgOz",
    title: () => (<span>Total Metal Poured<br />Ag Site(Oz)</span>), // prettier-ignore
    type: "Input",
    disabled: true,
  },
];

function calc_weight_diff(row: {shippedWeight: number, pouredWeight: number}): number {
  const diff = row.shippedWeight - row.pouredWeight;
  const result = round(diff, 1);
  return result;
}
