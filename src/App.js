import React from "react";

import VotingTable from "./components/VotingTable";

const flavors = [
  "Vanilla",
  "Chocolate",
  "Durian",
  "Cheese",
  "Basil",
  "Blackberry",
  "Something with a shit ton of candy",
  "Other",
];

export default () => {
  return (
    <div className="ui container">
      <h1>Best Ice Cream Flavors:</h1>
      <VotingTable flavors={flavors} />
    </div>
  );
};
