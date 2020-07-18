import React, { useState } from "react";

const Flavor = (props) => {
  const [tally, setTally] = useState(0);

  const onVote = () => setTally(tally + 1);
  return (
    <>
      <tr>
        <td data-label="flavor">{props.flavor}</td>
        <td data-label="tally">{tally}</td>
        <td onClick={() => onVote()} data-label="plus">
          <i className="plus icon"></i>
        </td>
      </tr>
    </>
  );
};
export default Flavor;
