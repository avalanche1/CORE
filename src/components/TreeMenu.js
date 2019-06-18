/* eslint-disable object-property-newline */
// @flow strict
import React from "react";

import {Accordion} from "semantic-ui-react";

import {pipe} from "../utility-belt/fp/pipe";
import {select} from "../utility-belt/fp/select";

type Props = {
  set_active_table: Function,
};
export function TreeMenu({set_active_table}: Props) {
  return <Accordion panels={get_main_sections()} defaultActiveIndex={0} fluid styled />;
  function get_main_sections() {
    return [
      {
        key: "Data Entry",
        title: "Data Entry",
        content: get_accordion_content("entry"),
      },
      {
        key: "Calculated Data",
        title: "Calculated Data",
        content: get_accordion_content("calc"),
      },
      {
        key: "Reports",
        title: "Reports",
        content: get_accordion_content("reports"),
      },
      {
        key: "Forecasts",
        title: "Forecasts",
        content: get_accordion_content("forecast"),
      },
    ];
  }

  // * @exampleInput: "reports"
  // * @exampleOutput: [{tableName: "PRODUCTION", componentName: ""}]
  function get_accordion_content(tableType: "entry" | "calc" | "reports" | "forecast") {
    const result = {
      // prettier-ignore
      content: pipe(tableType).thru(
        get_table_component_map,
        create_link_list
      )
    };
    return result;
  }

  // * @exampleInput: "reports"
  // * @exampleOutput: [{tableName: "PRODUCTION", componentName: ""}]
  function get_table_component_map(
    tableType: "entry" | "calc" | "reports" | "forecast",
  ) {
    const result = select({
      entry: [
        {tableName: "DOWNTIME", componentName: "DowntimeTable"},
        // {tableName: "MET", componentName: ""},
        // {tableName: "CIL", componentName: ""},
        // {tableName: "STRIP", componentName: ""},
        {tableName: "GPOURED", componentName: "GoldPouredTable"},
        {tableName: "GREFINED", componentName: "GoldRefinedTable"},
        // {tableName: "KPI", componentName: ""},
        // {tableName: "REAGENT", componentName: ""},
        // {tableName: "R-STOCKTAKE", componentName: ""},
        // {tableName: "WATER", componentName: ""},
        // {tableName: "ORE BLEND", componentName: ""},
      ],
      calc: [
        // {tableName: "DOWNTIME", componentName: ""},
        // {tableName: "MET", componentName: ""},
        // {tableName: "GRAPH", componentName: ""},
      ],
      // reports: [{tableName: "PRODUCTION", componentName: "ProductionReport"}],
      forecast: [],
    })([])(tableType);
    return result;
  }

  // * @exampleInput: [{tableName: "PRODUCTION", componentName: ""}]
  // * @exampleOutput: list of links from create_link()
  function create_link_list(
    componentMapArr: Array<{
      tableName: string,
      componentName: string,
    }>,
  ) {
    const list = componentMapArr.map((componentMap, i) => (
      <div key={i}>{create_link(componentMap)}</div>
    ));
    return <div>{list}</div>;
  }

  // * @exampleInput: {tableName: "PRODUCTION", componentName: "ProductionReport"}
  // * @exampleInput: ...
  //  ...<a href={"#"} onClick={onClickHandler("ProductionReport")}>PRODUCTION</a>
  function create_link(componentMap: {tableName: string, componentName: string}) {
    const result = (
      <a href={"#"} onClick={() => onClickHandler(componentMap.componentName)}>
        {componentMap.tableName}
      </a>
    );
    return result;

    function onClickHandler(componentName: string) {
      set_active_table(componentName);
    }
  }
}
