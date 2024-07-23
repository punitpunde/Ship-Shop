import React from "react";

function Price(props) {
  let { value, decimal = 0 } = props;
  return <>₹{Number(value).toFixed(decimal)}</>;
}

export default Price;
