import {Set} from 'immutable'
import {ADD_CITY,REMOVE_LAST_CITY} from '../constants/actionConstants'

const initValue = new Set();



const cites = (state = initValue, action)=>{
    switch(action.type){
        case ADD_CITY:
            return state.add(action.city);
        case REMOVE_LAST_CITY:
            return state.slice(0,-1);
        default:
            return state;
    }
};

export default cites;