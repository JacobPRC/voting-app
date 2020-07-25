import React, { useState } from "react";

import axios from "../axios";

const EditMixin = (props) => {
  const [input, setInput] = useState("");
  const { id } = props.match.params;

  const onSubmit = async (e) => {
    e.preventDefault();
    const result = { mixin: input };
    await axios.patch(`/mixins/${id}`, result);
    props.history.push("/mixins");
  };
  console.log(window.location.pathname);
  return (
    <div>
      <h1>Edit Me baby!</h1>
      <br />
      <div>
        <form className="ui form" onSubmit={(e) => onSubmit(e)}>
          <input onChange={(e) => setInput(e.target.value)} input={input} />
          <button className="ui button primary">Submit</button>
          <button className="ui button negative">Exit</button>
        </form>
      </div>
    </div>
  );
};

export default EditMixin;
