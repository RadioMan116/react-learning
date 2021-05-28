import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Review from './review';
import ReviewForm from './review-form';
import { loadReviews } from "../redux/actions";
import Loader from './loader';
import { reviewsLoadedSelector, reviewsLoadingSelector } from '../redux/selectors';

function Reviews({reviews, restaurantId, loadReviews, loading, loaded}) {
    useEffect(() => {
        // if(!loading && !loaded) 
        loadReviews(restaurantId)
    }, [loadReviews, restaurantId, loading, loaded])

    // if(loading) return <Loader/>;
    // if(!loaded) return 'No data :(';

    return(
        <div>
            {reviews.map( id => <Review key={id} id={id}/>)}
            <ReviewForm restaurantId={restaurantId} /> 
        </div>
    )
}

export default connect(state => ({
    loading: reviewsLoadingSelector(state),
    loaded: reviewsLoadedSelector(state),
}), (dispatch, props) => ({
    loadReviews: () => dispatch(loadReviews(props.restaurantId))
}))(Reviews);