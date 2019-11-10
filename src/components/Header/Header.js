import React from "react";
import "./header.css";
import debounce from "../../utilities/debounce";

const Header = props => {
  const handler = evt => {
    const key = evt.target.value;
    debounce(() => props.searchHandler(key), 100)();
  };

  return (
    <div className="header">
      <input onChange={handler} />
    </div>
  );
};

export default Header;
