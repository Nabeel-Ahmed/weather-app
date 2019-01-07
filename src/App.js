import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Index from './Pages/index';
import styled from "styled-components";

const Back = styled.div`
background: linear-gradient(0deg, rgba(11,75,150,1) 0%, rgba(0,212,255,1) 100%);
height: 100%;
min-height: 1000px;

`

class App extends Component {
  
  render() {

    return (
      <Back>


      <div className="App">
        <Index/>

        
      </div>
      </Back>
    );
  }
}

export default App;
