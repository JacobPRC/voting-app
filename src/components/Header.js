import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        A Vote For Ice Cream
      </Link>
      <Link to="/pics" className="item">
        ice Cream Porn
      </Link>
      <Link to="/mixins" className="item">
        Add Goodies to Your Ice Cream
      </Link>
    </div>
  );
};

export default Header;
