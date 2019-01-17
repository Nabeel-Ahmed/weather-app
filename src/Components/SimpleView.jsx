import React from "react";
import styled from "styled-components";


const Headings = styled.h2`
  color: white;

  transition: 0.3s;
  width: 400px;
  margin: auto;
  
  padding: 10px;
`;

const City = styled.h3`
  text-align: left;
`

const Temp = styled.h1`
  font-size: 80px
`

export default props => {
  return (
    <div>
      {/* <h2> {new Date().toLocaleString("en-GB", { timeZone: "UTC" }).slice(0,-3)} </h2>
      <h1> {props.location} </h1> */}
      <Headings>
        {/* {new Date().toLocaleString("en-GB", { timeZone: "UTC" }).slice(0, -3)} */}
        {Date().slice(0,-39)}
        <br />
        <Temp>
        {props.location}
        </Temp>
        <Temp>
        {props.temp} °
        </Temp>
        <br />
        <img src={props.icon} alt="icon" />
        <p>
          {" "}
          {props.min}° / {props.max}°{" "}
        </p>
      </Headings>
      {/* <h2> {new Date().toLocaleTimeString()} </h2> */}
    </div>
  );
};
