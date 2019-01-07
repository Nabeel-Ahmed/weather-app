import React, { Component } from "react";
import axios from "axios";
import WeatherCard from "./../Components/weatherCard";
import styled from "styled-components";
import SearchBar from "./../Components/SearchBar";
import { throws } from "assert";

export default class homePage extends Component {
  state = {
    weather: [],
    main: [],
    visibility: [],
    wind: [],
    clouds: [],
    sys: [],
    name: [],
    search: "",
  };

  componentDidMount = () => {
   this.callApi()
  };


  callApi = () => {
    axios
    // .get(process.env.REACT_APP_API + process.env.REACT_APP_API_KEY )
    //   .get("api.openweathermap.org/data/2.5/weather?q={London}&appid=##APIKEY##")
    .get(
      "http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=##APIKEY##"
    )
    .then(response => {
      this.setState({
        weather: response.data.weather,
        main: response.data.main,
        visibility: response.data.visibility,
        wind: response.data.wind,
        clouds: response.data.clouds,
        sys: response.data.sys,
        name: response.data.name
      });
      console.log(JSON.stringify(response));
    })
    .catch(function(error) {
      // handle error
      console.log(error, "err");
    })
    .then(function() {
      // always executed
    });
  }



  // handleChange = (e) => {
  //   this.setState({value: e.target.value});
  //   alert("sumin hapen")
  // }

  apiClone = () => {
    axios
    // .get(process.env.REACT_APP_API + process.env.REACT_APP_API_KEY )
    //   .get("api.openweathermap.org/data/2.5/weather?q={London}&  ##APIKEY##")
    .get(
      "http://api.openweathermap.org/data/2.5/weather?q=" + this.state.search + "&units=metric" + "##APIKEY##"
      // process.env.REACT_APP_API, this.state.search, process.env.REACT_APP_API_KEY
    )
    .then(response => {
      this.setState({
        weather: response.data.weather,
        main: response.data.main,
        visibility: response.data.visibility,
        wind: response.data.wind,
        clouds: response.data.clouds,
        sys: response.data.sys,
        name: response.data.name
      });
      console.log(JSON.stringify(response));
    })
    .catch(function(error) {
      // handle error
      console.log(error, "err");
    })
    .then(function() {
      // always executed
    });
  }


  handleChange = e => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState(function () {
        // alert(value);
        return { [name]: value };
    });
};

handleKeyDown = e => {
  if (e.keyCode === 13) {
    let name = e.target.name;
    let value = e.target.value;
    this.setState(function() {
      return { [name]: value };
    });
    this.apiClone();
  }
};
 

  render() {
    return (
      <div>
        <WeatherCard
          location={this.state.weather.name}
          // weather={this.state.weather}
          temp="bread"
        />
        <h1> wo</h1>
        <p> {JSON.stringify(this.state.weather)} </p>
        {/* <p> {JSON.stringify(this.state.weather.description)} </p> */}
        <p> {JSON.stringify(this.state.main)} </p>
        <h1> {this.state.name}</h1>
        <h2> {this.state.main.temp} </h2>
        <img src={"http://openweathermap.org/img/w/" + this.state.weather.icon}/>
        <SearchBar
        name="search"
        value={this.state.search}
        onChange={this.handleChange}
        onKeyDown={this.handleKeyDown}
        />
      </div>
    );
  }
}
