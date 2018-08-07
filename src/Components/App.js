import React, { Component } from 'react';
import SearchBar from '../Container/SearchBar'
import WeatherList from '../Container/WeatherList'
import '../App.css';

class App extends Component {

  render() {
    return (
      <div style={{height: "190px"}}>
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}

export default App;
