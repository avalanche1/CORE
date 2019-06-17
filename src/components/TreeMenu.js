// @flow strict
import React from "react";
import {Accordion} from "semantic-ui-react";

export function TreeMenu() {
  return <Accordion panels={getMainSections()} defaultActiveIndex={0} fluid styled />;

  function getMainSections() {
    return [
      {
        key: "Data Entry",
        title: "Data Entry",
        content: {content: getDataEntrySections()},
      },
      {
        key: "Calculated Data",
        title: "Calculated Data",
        content: {content: getCalculatedDataSections()},
      },
      {
        key: "Reports",
        title: "Reports",
        content: {content: getReportsSections()},
      },
      {
        key: "Forecasts",
        title: "Forecasts",
      },
    ];
  }
  function getDataEntrySections() {
    return (
      <div>
        <div>DOWNTIME</div>
        <div>MET</div>
        <div>CIL</div>
        <div>STRIP</div>
        <div>GPOURED</div>
        <div>GREFINED</div>
        <div>KPI</div>
        <div>REAGENT</div>
        <div>R-STOCKTAKE</div>
        <div>WATER</div>
        <div>ORE BLEND</div>
      </div>
    );
  }
  function getCalculatedDataSections() {
    return (
      <div>
        <div>DOWNTIME</div>
        <div>MET</div>
        <div>GRAPH</div>
      </div>
    );
  }
  function getReportsSections() {
    return (
      <div>
        <div>PRODUCTION</div>
      </div>
    );
  }
}
