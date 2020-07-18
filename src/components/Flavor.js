import React, { useState } from "react";

const Flavor = (props) => {
  const [tally, setTally] = useState(0);

  const onVote = () => setTally(tally + 1);

  const voted = tally > 0 ? "#0AA129" : "#1BCDFB";
  return (
    <>
      <tr>
        <td data-label="flavor">{props.flavor}</td>
        <td data-label="tally">{tally}</td>
        <td onClick={() => onVote()} data-label="plus">
          <i style={{ color: voted }} className="plus icon"></i>
        </td>
      </tr>
    </>
  );
};
export default Flavor;
