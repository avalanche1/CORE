// @flow strict
import React from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";

const rowData = [
  {id: "1", date: "20-Feb-19", group: "Mechanical", advent: "Planned"},
  // and so on...
];

export function DowntimeTable() {
  const columns = [
    {
      Header: "Date",
      accessor: "date", // String-based value accessors!
    },
    {
      Header: "Group",
      accessor: "group",
      // Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
    },
    {
      // id: 'friendName', // Required because our accessor is not a string
      Header: "Advent",
      accessor: "advent",
    },
    {
      // Header: props => <span>Friend Age</span>, // Custom header components!
      // accessor: 'friend.age'
    },
  ];
  return <ReactTable data={rowData} columns={columns} />;
}
