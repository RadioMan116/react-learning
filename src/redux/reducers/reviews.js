
import { ADD_REVIEW } from '../constants';
import { normalizedReviews } from '../../fixtures';
import { arrToMap } from '../utils';

export default (state = arrToMap(normalizedReviews), action) => {
  const { type, review, reviewId, userId } = action;

  switch (type) {
    case ADD_REVIEW:
      const { name, text, rating } = review;
      return {
        ...state,
        [reviewId]: { id: reviewId, userId, name, text, rating },
      };
    default:
      return state;
  }
};
