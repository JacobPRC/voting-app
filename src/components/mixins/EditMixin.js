import React, { useState, useEffect } from "react";

import axios from "../axios";

const EditMixin = (props) => {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);
  const [initialInput, setInitialInput] = useState("");
  const { id } = props.match.params;

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("/mixins");
      setData(response.data);
    };
    getData();
  }, []);

  useEffect(() => {
    const renderData = () => {
      return data.map((item) => {
        if (item.id != id) {
          return;
        } else {
          setInitialInput(item.mixin);
        }
      });
    };
    renderData();
  }, [data]);

  const onSubmit = async (e) => {
    e.preventDefault();
    const result = { mixin: input };
    await axios.patch(`/mixins/${id}`, result);
    props.history.push("/mixins");
  };

  return (
    <div>
      <h1>Edit Me baby!</h1>
      <br />
      <h3>Here's what you originally wrote: {initialInput} </h3>
      <h5>What would you like to change it to?</h5>
      <div>
        <form className="ui form" onSubmit={(e) => onSubmit(e)}>
          <input onChange={(e) => setInput(e.target.value)} input={input} />
          <button className="ui button primary">Submit</button>
          <button
            onClick={() => props.history.push("/mixins")}
            className="ui button negative"
          >
            Exit
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditMixin;
