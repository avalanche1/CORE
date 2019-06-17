/* eslint-disable lines-around-comment */
// @flow strict
import React, {useEffect, useState} from "react";
import is                           from "is_js";
import {produce}                    from "immer";
import {Grid, Input, Select}        from "react-spreadsheet-grid";
// import {Grid, Select} from "react-spreadsheet-grid";
// import {Input} from "./Downtime/Input";
import type {downtimeRecord}        from "../Downtime/types.js";

type proptypes = {
  data: Array<downtimeRecord>,
};

export function CrusherEntryTable({data}: proptypes) {
  const [rows, setRows] = useState(data);
  const [blurState, setBlur] = useState(false);
  const [bar, setBar] = useState(123);
  const [columns] = useState([
    {
      id: "date",
      title: "Date",
      value: (row, {focus}) => {
        return (
          <Input
            value={row.date}
            // value={handle_date_string(row.date)}
            /*Binding is nec. for onFieldChange to be able to see the 3rd arg
               - 'value'*/
            onChange={onFieldChange.bind(this, row.id, "date")}
            focus={focus}
          />
        );
      },
    },
  ]);
  const result = (
    <>
      <button onClick={add_row}>Add row</button>
      <input onChange={onFieldChange} />
      <Grid
        rows={rows}
        columns={columns}
        focusOnSingleClick
        // columnWidthValues={{date: 70}}
        getRowKey={(row) => row.id}
        blurCurrentFocus={blurState}
        isColumnsResizable={true}
      />
    </>
  );
  function onFieldChange(rowId, field, value) {
    // Change a value of a field
    debugger;
    rows[rowId][field] = value;
    setRows([].concat(rows));
    // Blurring focus from the current cell is necessary for a correct behavior of the Grid.
    setBlur(true);
    return null;
  }
  function add_row() {
    const newRowState = produce(rows, (draft) => {
      draft.push({
        id: "11",
        date: "",
        group: "",
        advent: "",
        equipment: "",
        downtimeInfo: "",
        timeOffOn: "",
        minutesOff: "",
      });
      return draft;
    });
    setRows(newRowState);
    setBlur(true);
    setBar(456);
    return null;
  }

  return result;
}
