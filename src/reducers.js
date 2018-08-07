import { FETCH_REQUEST } from './constants'

export const fetchWeather = (state=[], action={}) => {
    switch(action.type){
        case FETCH_REQUEST:
            return [ action.payload, ...state ];
        default:
            return state;
    }
}