import React, { useState, useEffect } from "react";

import axios from "../axios";
import Link from "../Link";

const Mixins = () => {
  // Ah CRUD, we gonna crud this shit up. Make this a whole crud to do list where you can add, edit
  // and delete things you'd like in your ice cream. Hook it up with JSON Server.
  // maybe have a set price for e/ item and add it up. maybe do a whole checkout thing?
  // that would be fun! Maybe even do another component that acts as an "Ice cream builder". Not animated
  // like i was thinking before. but like choose a ice cream flavor, then some toppings and pay.
  //maybe that one could have the checkout. And this one just adds up the total. Maybe it enev doesn't
  // do that. W/ the other one, try some simple transition animation. How do I do that?
  // And set it up so you click an icon for e/ thing (ie chocolate, cookie dough, etc);
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);
  const [submissions, setSubmissions] = useState(0);

  const onSubmit = (e) => {
    e.preventDefault();
    const newCount = submissions + 1;
    setSubmissions(newCount);
    const result = { mixin: input };
    axios.post("/mixins", result);
    setInput("");
  };

  useEffect(() => {
    const getMixins = async () => {
      const response = await axios.get("/mixins");
      setItems(response.data);
    };
    getMixins();
  }, [input]);

  const renderedItems = () => {
    return items.map((item) => {
      return (
        <>
          <li key={item.id}>{item.mixin}</li>
          <i className="delete icon"></i>
          <Link to={`mixins/edit/${item.id}`}>
            <i className="edit icon"></i>
          </Link>
        </>
      );
    });
  };
  return (
    <div>
      <br />
      <div className="ui two columned centered grid">
        <h2 class="ui icon header">
          <i class="cart plus icon"></i>
          <div class="content">
            Mix whatever the hell you want in!
            <div class="sub header">
              Enter whatever you want in your ice cream. Add a lot because it
              costs $2 per item!
            </div>
          </div>
        </h2>
      </div>
      <div className="ui container">
        <br />
        <form className="ui form" onSubmit={(e) => onSubmit(e)}>
          <input value={input} onChange={(e) => setInput(e.target.value)} />
          <button className="ui button primary">Add</button>
        </form>
        <br />
        <div>
          <ol className="ui list">{renderedItems()}</ol>
        </div>
      </div>
    </div>
  );
};

export default Mixins;
