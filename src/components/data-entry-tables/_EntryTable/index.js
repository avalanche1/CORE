/* eslint-disable lines-around-comment,fp/no-this,fp/no-mutation,fp/no-class,no-shadow */
// @flow strict
import React from "react";
import {produce} from "immer";

import {Header} from "semantic-ui-react";
import {Grid, Input, Select} from "react-spreadsheet-grid";
import "./EntryTable.css";

import type {Fields, Field} from "../Downtime/types.js";

type Cell = {
  id: string,
  title: string | Function,
  value: Function,
};
type Props = {
  data: Array<{}>,
  fields: Fields,
  widths: {
    table: number,
    columns: {},
  },
  title: string,
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
          // disabledCellChecker={(row, columnId) => {
          //   return columnId === "date";
          // }}
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
    // prettier-ignore
    return this.props.fields.map<Cell>((field: Field) => {
      return {
        id: field.id,
        title: field.title,
        value: (row, {focus}) => this.determine_column_element(field, row, focus)
      };
    });
  }

  //$FlowFixMe
  determine_column_element(field, row, focus) {
    if (field.type === "Input") {
      return (
        <Input
          value={field.valueHandler ? field.valueHandler(row[field.id]) : row[field.id]}
          /*Binding is nec. for onFieldChange to be able to see the 3rd arg -
           'value' - see it's implementation*/
          onChange={this.onFieldChange.bind(this, row.id, field.id)}
          focus={focus}
        />
      );
      // eslint-disable-next-line no-else-return
    } else if (field.type === "Dropdown") {
      return (
        <Select
          items={
            typeof field.dropdownValues === "function"
              ? field.dropdownValues(row.machinery)
              : field.dropdownValues
          }
          // items={getEquipmentList(row.type)}
          selectedId={row[field.id]}
          onChange={this.onFieldChange.bind(this, row.id, field.id)}
          isOpen={focus}
        />
      );
    } else {
      return <div>Incorrect field.type!</div>;
    }
  }

  onFieldChange(rowId: string, field: string, value: string) {
    const nextState = produce(this.state.rows, (draft) => {
      // eslint-disable-next-line no-param-reassign
      draft.find(({id}) => id === rowId)[field] = value;
      return draft;
    });
    this.setState({
      rows: nextState,
      blurFocus: true,
    });
  }
}
