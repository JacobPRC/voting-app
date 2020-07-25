import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import VotingTable from "./components/poll/VotingTable";
import Pics from "./components/pics/Pics";
import Mixins from "./components/mixins/Mixins";
import Header from "./components/Header";
import EditMixin from "./components/mixins/EditMixin";

// so ice cream vote, then pics, maybe next ice cream to do list with mix ins for you ice cream
// last maybe an ice cream builder? Would def need help w/ that

export default () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={VotingTable} />
          <Route path="/pics" exact component={Pics} />
          <Route path="/mixins" exact component={Mixins} />
          <Route path="/mixins/edit/:id" exact component={EditMixin} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};
