/* eslint-disable line-comment-position */
// @flow strict

import React from "react";

import {handle_date_string, handle_percent} from "../helpers";

import type {Columns} from "../_EntryTable/types";

export const columns: Columns = [
  {
    id: "shippedNo",
    title: () => (<span>Shipment<br />No.</span>), // prettier-ignore
    type: "Input",
    width: 3,
  },
  {
    id: "shippedDate",
    title: "Shipped Date",
    type: "Input",
    reducer: handle_date_string,
    width: 7,
  },
  {
    id: "barStartNo",
    title: "Bar Start No.",
    type: "Input",
  },
  {
    id: "barEndNo",
    title: "Bar End No.",
    type: "Input",
  },
  {
    id: "refineryDoreMassG",
    title: () => (<span>Refinery Dore<br />Mass (g)</span>), // prettier-ignore
    type: "Input",
    width: 4,
  },
  {
    id: "refineryAu",
    title: "Refinery Au (%)",
    type: "Input",
    width: 4,
  },
  {
    id: "refineryAg",
    title: "Refinery Ag (%)",
    type: "Input",
    width: 4,
  },
  {
    id: "metalReturnAu",
    title: () => (<span>Metal Return<br />Au (%)</span>), // prettier-ignore
    type: "Input",
    width: 4,
  },
  {
    id: "metalReturnAg",
    title: () => (<span>Metal Return<br />Ag (%)</span>), // prettier-ignore
    type: "Input",
    width: 4,
  },
  {
    id: "mintReturnInputDate",
    title: "Mint Return Input Date",
    type: "Input",
    reducer: handle_date_string,
    width: 7,
  },
  {
    id: "totalBar",
    title: () => (<span>Total <br />Bar</span>), // prettier-ignore
    type: "Input",
    disabled: true,
    width: 2,
  },
  {
    id: "totalMetalAuSiteG",
    title: () => (<span>Total Metal<br />Au Site (g)</span>), // prettier-ignore
    type: "Input",
    disabled: true,
  },
  {
    id: "totalMetalAgSiteG",
    title: () => (<span>Total Metal<br />Ag Site (g)</span>), // prettier-ignore
    type: "Input",
    disabled: true,
  },
  {
    id: "totalMetalAuRefineryG",
    title: () => (<span>Total Metal<br />Au Refinery (g)</span>), // prettier-ignore
    type: "Input",
    disabled: true,
  },
  {
    id: "totalMetalAgRefineryG",
    title: () => (<span>Total Metal<br />Ag Refinery (g)</span>), // prettier-ignore
    type: "Input",
    disabled: true,
  },
  {
    id: "totalMetalAuRefineryOz",
    title: () => (<span>Total Metal<br />Au Refinery (Oz)</span>), // prettier-ignore
    type: "Input",
    disabled: true,
  },
  {
    id: "totalMetalAgRefineryOz",
    title: () => (<span>Total Metal<br />Ag Refinery (Oz)</span>), // prettier-ignore
    type: "Input",
    disabled: true,
  },
  {
    id: "totalMintReturnAuG",
    title: () => (<span>Total Mint<br />Return Au (g)</span>), // prettier-ignore
    type: "Input",
    disabled: true,
  },
  {
    id: "totalMintReturnAgG",
    title: () => (<span>Total Mint<br />Return Ag (g)</span>), // prettier-ignore
    type: "Input",
    disabled: true,
  },
  {
    id: "totalMintReturnAuOz",
    title: () => (<span>Total Mint<br />Return Au (Oz)</span>), // prettier-ignore
    type: "Input",
    disabled: true,
  },
  {
    id: "totalMintReturnAgOz",
    title: () => (<span>Total Mint<br />Return Ag (Oz)</span>), // prettier-ignore
    type: "Input",
    disabled: true,
  },
];
