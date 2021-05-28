import {normalizedUsers} from '../../fixtures';
import { ADD_REVIEW } from '../constants';
import {arrToMap} from '../utils';

export default (state = arrToMap(normalizedUsers), action) => {
    const {type, userId, review} = action;

    switch (type) {  
        case ADD_REVIEW:
            const {name} = review;
            return {
                ...state,
                [userId]: {id: userId, name}
            } 
        default:
            return state
    }
}