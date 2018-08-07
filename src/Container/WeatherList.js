import React, { Component } from 'react'
import { connect } from 'react-redux'
import Chart from '../Components/Chart';
import GoogleMap from '../Components/GoogleMap';


class WeatherList extends Component {

    renderWeather = (cityData) => {
        const name = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);
        const { lat, lon} = cityData.city.coord;

        return(
            <tr key={name}>
                <td><GoogleMap lat={lat} lon={lon}/></td>
                <td><Chart data={temps} color="orange" units="K" /></td>
                <td><Chart data={pressures} color="blue" units="hPa"/></td>
                <td><Chart data={humidities} color="red" units="%"/></td>
            </tr>
        )
    }

    render() {
        console.log("Weather: ",this.props.weather)
        return (
            <div className="container mt-4">
                <table className="table text-center table-hover">
                    <thead>
                        <tr>
                            <th scope="col">City</th>
                            <th>Temperature (F)</th>
                            <th>Pressure (hPa)</th>
                            <th>Humidity (%)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.weather.map(this.renderWeather)}
                    </tbody>
                </table>
            </div>
        )
    }
  
}

const mapStateToProps = ({weather}) => {
    return{weather}
} 
  
export default connect(mapStateToProps)(WeatherList);
