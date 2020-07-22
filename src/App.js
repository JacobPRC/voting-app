import React from "react";

import VotingTable from "./components/poll/VotingTable";
import Pics from "./components/pics/Pics";
// so ice cream vote, then pics, maybe next ice cream to do list with mix ins for you ice cream
// last maybe an ice cream builder? Would def need help w/ that
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
      {/* <h1>Best Ice Cream Flavors:</h1>
      <VotingTable flavors={flavors} /> */}
      <Pics />
    </div>
  );
};
