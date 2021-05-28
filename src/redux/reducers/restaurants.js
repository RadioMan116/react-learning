// import {normalizedRestaurants} from '../../fixtures';
import { LOAD_RESTAURANTS, REQUEST, SUCCESS, FAILURE, ADD_REVIEW } from '../constants';
import {arrToMap} from '../utils';
import produce from 'immer';

const initialState = {
    entities: {},
    loading: false,
    loaded: false,
    error: null,
}

export default (state = initialState, action) => {
    const {type, restaurantId, reviewId, data, error} = action;
    // console.log(reviewId);
    
    switch (type) {   
        case LOAD_RESTAURANTS + REQUEST:
            return { 
                ...state, 
                loading: true, 
                error: null
            }
        case LOAD_RESTAURANTS + SUCCESS:
            return { 
                ...state, 
                entities: arrToMap(data), 
                loading: false, 
                loaded: true
            };
        case LOAD_RESTAURANTS + FAILURE:
            return { 
                ...state, 
                loading: false, 
                loaded: false,
                error
            };
        case ADD_REVIEW: 
            return produce(state , draft => {
                draft.entities[restaurantId].reviews.push(reviewId)
            })
        //     return {
        //         ...state,
        //         [restaurantId]: {
        //             ...state[restaurantId],
        //             reviews: {...state[restaurantId].reviews, reviewId}
        //         }
        //    }
        default:
            return state;
    }
}