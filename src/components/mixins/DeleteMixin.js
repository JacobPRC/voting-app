import React from "react";

import axios from "../axios";

const DeleteMixin = (props) => {
  const onDelete = async () => {
    const { id } = props.match.params;
    await axios.delete(`/mixins/${id}`);
    props.history.push("/mixins");
  };

  return (
    <div>
      <h2>Are you sure you want to delete this item?</h2>
      <br />
      <div>
        <button onClick={() => onDelete()} className="ui button negative">
          Delete FOR EVER!
        </button>
        <button
          onClick={() => props.history.push("/mixins")}
          className="ui button"
        >
          Forget about it
        </button>
      </div>
    </div>
  );
};

export default DeleteMixin;
