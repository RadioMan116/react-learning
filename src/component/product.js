import React, { useEffect } from 'react';
import style from './product.module.css';
import {connect} from 'react-redux';
import { decrement, increment, loadProducts } from "../redux/actions";
import { amountSelector, productSelector, productsLoadingSelector, productsLoadedSelector } from '../redux/selectors';
import Loader from './loader';

function Product({product, decrement, increment, amount, loadProducts, loading, loaded, restaurantId}){
    useEffect( () => {
        if(!loading && !loaded) loadProducts(restaurantId)
    }, [loadProducts, loading, loaded])

    if(loading) return <Loader/>;
    if(!loaded) return 'No data :(';

    return (
        <div className={style.card}>
            <p>{product.name}</p> 
            <p>{product.price} $</p>
            <button onClick={decrement}>-</button>
            {amount}
            <button onClick={increment}>+</button>
        </div>
    )
}

const mapStateToProps = (state, props) => ({
    amount: amountSelector(state, props),
    product: productSelector(state, props),
    loading: productsLoadingSelector(state),
    loaded: productsLoadedSelector(state),
})

// const mapDispatchToProps = ({
//     decrement, 
//     increment
// })

const mapDispatchToProps = (dispatch, props) => ({
    decrement: () => dispatch(decrement(props.id)),
    increment: () => dispatch(increment(props.id)),
    loadProducts: () => dispatch(loadProducts(props.id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Product);