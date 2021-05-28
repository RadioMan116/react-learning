import React, { useState } from 'react';
import { connect } from 'react-redux';
import useForm from '../hooks/use-form';
import Rate from './rate';
import { addReview } from '../redux/actions';

const initialValues = { name: '', text: '', rating: 3 };

const ReviewForm = ({onSubmit}) => {
    const [values, setValues] = useState(initialValues);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(values);
        reset();
    };

    const handleName = (e) => {
        setValues({ ...values, name: e.target.value})
    }
    const handleText = (e) => {
        setValues({ ...values, text: e.target.value})
    }

    const reset = () => {
        setValues(initialValues)
    }
    
    return (
        <form onSubmit={handleSubmit}>
        <input value={values.name} onChange={e => handleName(e)} />
        <textarea value={values.text} onChange={e => handleText(e)} />
        <Rate />
        <button>
            PUBLISH REVIEW
        </button>
        </form>
    );
}

export default connect(null, (dispatch, props) => ({
    onSubmit: (review) => dispatch(addReview(review, props.restaurantId)),
  }))(ReviewForm);