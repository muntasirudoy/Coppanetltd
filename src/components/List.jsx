import React from "react";

const List = ({ data, padding }) => {
  console.log(data);
  return (
    <li
      className="list-none cursor-pointer font-poppins"
      style={{ padding: padding }}
    >
      {data.name}
    </li>
  );
};

export default List;
