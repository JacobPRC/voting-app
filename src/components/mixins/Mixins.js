import React from "react";

const Mixins = () => {
  // Ah CRUD, we gonna crud this shit up. Make this a whole crud to do list where you can add, edit
  // and delete things you'd like in your ice cream. Hook it up with JSON Server.
  // maybe have a set price for e/ item and add it up. maybe do a whole checkout thing?
  // that would be fun! Maybe even do another component that acts as an "Ice cream builder". Not animated
  // like i was thinking before. but like choose a ice cream flavor, then some toppings and pay.
  //maybe that one could have the checkout. And this one just adds up the total. Maybe it enev doesn't
  // do that. W/ the other one, try some simple transition animation. How do I do that?
  // And set it up so you click an icon for e/ thing (ie chocolate, cookie dough, etc);

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
      <div>
        <br />
        <input />
        <br />
        <div>
          <ol className="ui list">
            <li>Something</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Mixins;
