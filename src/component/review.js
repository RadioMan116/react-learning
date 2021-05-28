import React from 'react';
import { connect } from 'react-redux';

function Review({review, user}) {

    return(
        <div>
            <span>{user[review.userId].name} </span>
            :
            <span> "{review.text}" </span>
            <span> Личный рейтинг: {review.rating}</span>  
        </div>
    )
}

const mapStateToProps = (state, props) => ({
    review: state.reviews[props.id],
    user: state.users,
})

export default connect(mapStateToProps)(Review);