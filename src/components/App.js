// @flow strict

import React, {useState as use_state} from "react";

// import logo from "./logo.svg";
// import "./App.css";
import {Grid} from "semantic-ui-react";
import {TreeMenu} from "./TreeMenu.js";
import {DowntimeTable} from "./data-entry-tables/Downtime";
import {GoldPouredTable} from "./data-entry-tables/GoldPoured";
import {GoldRefinedTable} from "./data-entry-tables/GoldRefined";

export function App() {
  const defaultTable = "DowntimeTable";
  const [activeTable, set_active_table] = use_state(defaultTable);

  // https://reactjs.org/docs/jsx-in-depth.html#choosing-the-type-at-runtime
  const availableTables = {
    DowntimeTable,
    GoldPouredTable,
    GoldRefinedTable,
  };
  const TableToDisplay = availableTables[activeTable];

  return (
    <div className="App">
      <Grid columns="equal">
        <Grid.Column width={2}>
          <TreeMenu {...{set_active_table}} />
        </Grid.Column>
        <Grid.Column style={{overflowX: "scroll"}}>
          <TableToDisplay />
        </Grid.Column>
      </Grid>
      {/*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload1111.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>*/}
    </div>
  );
}
