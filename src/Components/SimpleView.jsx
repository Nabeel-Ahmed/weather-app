import React from "react";

export default props => {
  return (
    <div>
      <h2> {new Date().toLocaleString("en-GB", { timeZone: "UTC" }).slice(0,-3)} </h2>
      <h1> {props.location} </h1>
      {/* <h2> {new Date().toLocaleTimeString()} </h2> */}
      <h2> {props.temp} ° </h2>
      <img src={props.icon} alt="icon" />
      <p> {props.min}° / {props.max}° </p>
    </div>
  );
};
