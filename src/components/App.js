// @flow strict

import React           from "react";

// import logo from "./logo.svg";
// import "./App.css";
import {Grid}          from "semantic-ui-react";
import {TreeMenu}      from "./TreeMenu.js";
import {DowntimeTable} from "./data-entry-tables/Downtime";
// import {DowntimeTable} from "./data-entry-tables/GoldPoured";

export function App() {
  return (
    <div className="App">
      <Grid columns="equal">
        <Grid.Column width={2}>
          <TreeMenu />
        </Grid.Column>
        <Grid.Column style={{overflowX: "scroll"}}>
          <DowntimeTable />
        </Grid.Column>
      </Grid>
      {/* eslint-disable-next-line no-inline-comments */}
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
