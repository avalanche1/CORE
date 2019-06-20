// @flow strict

import React from "react";

import {EntryTable} from "./_EntryTable";

import is from "is_js";
import {round} from "../../utility-belt/math/round";

import type {Column, Columns} from "./_EntryTable/types";

type tableProps = {
  title: string,
  width: number,
};
export function create_data_entry_table(
  data: Object,
  columns: Columns,
  props: tableProps,
) {
  const {title, width} = props;
  // eslint-disable-next-line object-property-newline
  return <EntryTable {...{data, columns, title, width}} />;
  // <>
  //   <Grid divided columns="equal" style={{width: 2060}}>
  //     <Grid.Column>
  //       <EntryTable data={data} />
  //     </Grid.Column>
  //     <Grid.Column>
  //       <EntryTable data={data} />
  //     </Grid.Column>
  //   </Grid>
  // </>
}

export function handle_date_string(row: Object, column: Column): string {
  const dateValue: Date | string = row[column.id];
  const result = is.date(dateValue) ? dateValue.toDateString() : dateValue;
  return result;
}

export function handle_percent(row: Object, column: Column): string {
  const float: number = row[column.id];
  const result = round(float, 2); // eslint-disable-line no-magic-numbers
  return result;
}

export function make_items_for_dropdown(
  list: Array<string>,
): Array<{id: string, name: string}> {
  return list.map((string) => {
    return {
      id: string,
      name: string,
    };
  });
}
