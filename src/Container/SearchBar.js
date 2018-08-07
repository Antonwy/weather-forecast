import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchWeather } from '../actions'

class SearchBar extends Component {

    constructor(){
        super();
        this.state = {
            city: '',
            country: ''       
        }
    }

    onCityChange = (event) => {
        this.setState({
            city: event.target.value
        })
    }

    onCountryChange = (event) => {
        this.setState({
            country: event.target.value
        })
    }

    onSearch = (event) => {
        event.preventDefault();
        
        const { city, country } = this.state;

        const searchInput = {
            city: city,
            country: country
        }

        if(city === "" || country === ""){
            alert("Fill out both text fields!");
        }else{
            this.props.onRequestWeather(searchInput);
            this.setState({
                country: '',
                city: ''
            });
        }
    } 

    render() {

        const { city, country } = this.state;

        return (
            <div className="container">
                <form className="form-inline justify-content-center" onSubmit={this.onSearch}>
                    <input className="form-control mr-3 mt-3" value={city} type="text" placeholder="City" onChange={this.onCityChange} />
                    <input className="form-control mr-3 mt-3" value={country} type="text" placeholder="Country" onChange={this.onCountryChange} />
                    <button className="btn btn-primary mt-3" type="submit">Search</button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onRequestWeather: (searchInput) => dispatch(fetchWeather(searchInput))
    }
}

export default connect(null, mapDispatchToProps)(SearchBar);


