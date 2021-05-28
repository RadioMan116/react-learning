import { createSelector } from "reselect";

const restaurantsSelector = state => state.restaurants.entities;
const orderSelector = state => state.order;
const productsSelector = state => state.products.entities;
const reviewsSelector = state => {
  // console.log(state.reviews);
  return state.reviews
};
const usersSelector = state => state.users;

export const restaurantsLoadingSelector = state => state.restaurants.loading;
export const restaurantsLoadedSelector = state => state.restaurants.loaded;

export const productsLoadingSelector = state => state.products.loading;
export const productsLoadedSelector = state => state.products.loaded;

export const reviewsLoadingSelector = state => state.reviews.loading;
export const reviewsLoadedSelector = state => state.reviews.loaded;

export const amountSelector = (state, { id }) => orderSelector(state)[id] || 0;
export const productSelector = (state, { id }) => productsSelector(state)[id];
export const reviewSelector = ( state, { id }) => reviewsSelector(state)[id]

export const orderUsersSelector = createSelector(
  usersSelector,
  (user) =>user
)

export const orderReviewsSelector = createSelector(
    reviewsSelector,
    (review) => review
)

export const restaurantsListSelector = createSelector(
    restaurantsSelector,
    Object.values
)

export const orderProductsSelector = createSelector(
    orderSelector,
    productsSelector,
    (order, product) => Object.keys(order)
    .filter( productId => order[productId] > 0)
    .map( productId => product[productId])
    .map( product => ({
        product,
        amount: order[product.id],
        subtotal: order[product.id] * product.price
    }))
) 

export const totalSelector = createSelector(
    orderProductsSelector,
    (orderProducts) => orderProducts.reduce( (acc, {subtotal}) => acc + subtotal, 0)
);

export const averageRatingSelector = createSelector(
    reviewsSelector,
    (_,  {restaurant} ) => restaurant.reviews,
    (reviews, ids) => {
      const ratings = ids.map((id) => reviews[id].rating);  
      return Math.round(
        ratings.reduce((acc, rating) => acc + rating) / ratings.length
      );
    }
  );
  
  
// const productSelector = createSelector(
//     restaurantsSelector,
//     (restaurants) => restaurants.flatMap( restaurant => restaurant.menu)
// )