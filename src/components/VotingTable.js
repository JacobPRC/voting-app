import React, { useState } from "react";

import Flavor from "./Flavor";

const VotingTable = ({ flavors }) => {
  const flavorsRender = (arr) => arr.map((item) => <Flavor flavor={item} />);

  return (
    <>
      <table className="ui celled table">
        <thead>
          <tr>
            <th>Flavor</th>
            <th>Tally</th>
            <th>Vote!</th>
          </tr>
          {flavorsRender(flavors)}
        </thead>
        <tbody></tbody>
      </table>
    </>
  );
};

export default VotingTable;
