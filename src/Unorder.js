import React from "react";
import List from "./List";

const Unorder = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <List key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default Unorder;
