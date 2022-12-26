import React from "react";

function Button({ btnInfo }) {
  console.log(btnInfo);
  return (
    <button className="bg-slate-400" style={{ padding: btnInfo.padding }}>
      {" "}
      {btnInfo.name}
    </button>
  );
}

export default Button;
