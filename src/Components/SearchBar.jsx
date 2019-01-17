import React from 'react'
import styled from 'styled-components';

const Input = styled.input.attrs({
    // we can define static props
    type: "text",
  
    // or we can define dynamic ones
    // margin: props => props.size || "1em",
    // padding: props => props.size || "1em"
  })`
    box-shadow: 0 0px 2px 0px 
    color: white;
    font-size: 1em;
    background: transparent;
    border: none;
    
    border-radius: 3px;
    justify: center;
    outline: none;
  
    border-radius: 10px;
  `;

  

export default function SearchBar(props) {
  return (
    <div>
         <Input placeholder="Enter a city" 
         size="2em" 
         name={props.name}
         value={props.value}
         onChange={props.onChange}
         onKeyDown={props.onKeyDown}
         />
      
    </div>
  )
}
