import {ADD_CITY, REMOVE_LAST_CITY} from '../constants/actionConstants'


export const addCity = (city)=>{
    return {
        type: ADD_CITY,
        city, //city:city
    };
};


export const removeLastCity = ()=>{
    return {
        type: REMOVE_LAST_CITY,
    };
};