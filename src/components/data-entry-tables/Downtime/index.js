// @flow strict

import React from "react";

// import {Grid} from "semantic-ui-react";
import {EntryTable} from "../_EntryTable";

import {data} from "./fixtures";
import {columns} from "./columns.js";

export function DowntimeTable() {
  const title = "Downtime";
  const disabledColumnIds = [];
  const widths = {
    table: 1200,
    columns: {
      downtimeInfo: 20,
      minutesOff: 5,
    },
  };
  // eslint-disable-next-line object-property-newline
  return <EntryTable {...{data, columns, title, disabledColumnIds, widths}} />;
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
