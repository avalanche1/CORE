/* eslint-disable lines-around-comment,fp/no-this,fp/no-mutation,fp/no-class,no-shadow */
// @flow strict
import React from "react";
import {produce} from "immer";

import {Header} from "semantic-ui-react";
import {Grid, Input, Select} from "react-spreadsheet-grid";
import "./EntryTable.css";

import type {Columns, Column} from "./types.js";

type Cell = {
  id: string,
  title: string | Function,
  value: Function,
};
type Props = {
  data: Array<Object>,
  columns: Columns,
  title: string,
  disabledColumnIds: Array<string>,
  widths: {
    table: number,
    columns: {},
  },
};
type State = {
  rows: $PropertyType<Props, "data">, // eslint-disable-line no-undef
  columns: Array<Cell>,
  blurFocus: boolean,
};
export class EntryTable extends React.PureComponent<Props, State> {
  render() {
    const {widths} = this.props;
    return (
      <div
        className="DataTable"
        style={{
          width: widths.table,
          marginBottom: 200,
        }}>
        <Header as={"span"}>{this.props.title} &nbsp;</Header>
        <button onClick={this.add_row}>Add row</button>
        <Grid
          columns={this.state.columns}
          rows={this.state.rows}
          // focusOnSingleClick
          isColumnsResizable
          rowHeight={35}
          columnWidthValues={widths.columns}
          blurCurrentFocus={this.state.blurFocus}
          getRowKey={(row) => row.id}
          disabledCellChecker={(row, columnId) => {
            return this.props.disabledColumnIds.includes(columnId);
            // return columnId === "date";
          }}
        />
      </div>
    );
  }

  add_row() {
    const nextState = produce(this.state.rows, (draft) => {
      const lastRowId = draft[draft.length - 1].id;
      const newRowId = (parseInt(lastRowId) + 1).toString();
      // eslint-disable-next-line fp/no-mutating-methods
      draft.push({
        id: newRowId,
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
    this.setState({rows: nextState});
    return null;
  }

  constructor(props: Props) {
    super(props);

    this.state = {
      rows: props.data,
      columns: this.initColumns(),
      blurFocus: false,
    };
    this.add_row = this.add_row.bind(this);
    this.determine_column_element = this.determine_column_element.bind(this);
  }

  initColumns() {
    return this.props.columns.map<Cell>((column: Column) => {
      return {
        id: column.id,
        title: column.title,
        value: (row, {focus}) => this.determine_column_element(column, row, focus),
      };
    });
  }

  determine_column_element(column: Column, row: Object, focus: boolean) {
    if (column.type === "Input") {
      return (
        <Input
          value={
            // If there is a reducer in this column's props - pass it this row
            // and column values; otherwise set cell value equal to this row and
            // this column (column.id) intersection value
            column.reducer ? column.reducer(row, column) : row[column.id]
          }
          /*Binding is nec. for onFieldChange to be able to see the 3rd arg -
           'value' - see it's implementation*/
          onChange={this.onFieldChange.bind(this, row.id, column.id)}
          focus={focus}
        />
      );
      // eslint-disable-next-line no-else-return
    } else if (column.type === "Dropdown") {
      return (
        <Select
          items={
            column.dropdownValues
              ? column.dropdownValues
              : column.getDropdownValues(row.machinery)
          }
          // items={getEquipmentList(row.type)}
          selectedId={row[column.id]}
          onChange={this.onFieldChange.bind(this, row.id, column.id)}
          isOpen={focus}
        />
      );
    } else {
      return <div>Incorrect column.type!</div>;
    }
  }

  onFieldChange(rowId: string, columnId: string, value: string) {
    const nextState = produce(this.state.rows, (draft) => {
      // eslint-disable-next-line no-param-reassign
      draft.find(({id}) => id === rowId)[columnId] = value;
      return draft;
    });
    this.setState({
      rows: nextState,
      blurFocus: true,
    });
  }
}
