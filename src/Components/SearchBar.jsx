import React from 'react'
import styled from 'styled-components';

const Input = styled.input.attrs({
    // we can define static props
    type: "text",
  
    // or we can define dynamic ones
    // margin: props => props.size || "1em",
    // padding: props => props.size || "1em"
  })`
    color: black;
    font-size: 1em;
    border: 2px solid black;
    border-radius: 3px;
    justify: center;
  
    /* here we use the dynamically computed props */
    margin: ${props => props.margin};
    padding: ${props => props.padding};
  `;

  

export default function SearchBar(props) {
  return (
    <div>
         <Input placeholder="City, Country" 
         size="2em" 
         name={props.name}
         value={props.value}
         onChange={props.onChange}
         onKeyDown={props.onKeyDown}
         />
      
    </div>
  )
}
