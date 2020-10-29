import React from "react";

const Dates = () => {
  let dt = new Date();
  return dt.toLocaleDateString();
};

export default Dates;
