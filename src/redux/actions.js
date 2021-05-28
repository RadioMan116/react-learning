import { DECREMENT, INCREMENT, REMOVE, LOAD_RESTAURANTS, ADD_REVIEW, LOAD_REVIEWS, SUCCESS, FAILURE, REQUEST, LOAD_PRODUCTS } from "./constants";

export const decrement = (id) => ({type: DECREMENT, id});
export const increment = (id) => ({type: INCREMENT, id});
export const remove = (id) => ({type: REMOVE, id});

export const addReview = (review, restaurantId) => ({
    type: ADD_REVIEW,
    review,
    restaurantId,
    generateId: ['reviewId', 'userId'],
});

export const loadRestaurants = () => ({
  type: LOAD_RESTAURANTS, 
  CallAPI: 'api/restaurants',
});

export const loadProducts = (restaurantId) => ({
  type: LOAD_PRODUCTS, 
  CallAPI: `/api/products?id=${restaurantId}`,
  restaurantId,
});

export const loadReviews = (restaurantId) => async(dispatch) => {
  dispatch({ type: LOAD_REVIEWS + REQUEST, restaurantId });

  try{
      const data = await fetch(`api/reviews?id=${restaurantId}`).then(res => res.json());
      dispatch({ type: LOAD_REVIEWS + SUCCESS, restaurantId, data});
  } catch(error){
      dispatch({ type: LOAD_REVIEWS + FAILURE, restaurantId, error});
  }
}