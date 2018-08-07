
import { 
    API_KEY,
    FETCH_REQUEST
} from './constants'

export const fetchWeather = (searchInput) => (dispatch) =>{
    fetch(`http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}&q=${searchInput.city},${searchInput.country}`)
        .then(response=> response.json())
        .then(data => dispatch({ type: FETCH_REQUEST, payload: data }))
}