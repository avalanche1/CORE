// @flow strict

import React from "react";

// import {Grid} from "semantic-ui-react";
import {EntryTable} from "../_EntryTable";

import {data} from "./fixtures";
import {fields} from "./fields.js";

export function DowntimeTable() {
  const widths = {
    table: 1200,
    columns: {
      downtimeInfo: 20,
      minutesOff: 5,
    },
  };
  const title = "Downtime";
  return <EntryTable data={data} fields={fields} widths={widths} title={title} />;
  // return <EntryTable data={data} fields={fields} widths={widths}/>;
  // return <EntryTable  {...{widths, fields, data}} />;
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
