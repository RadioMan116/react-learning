import React from "react";
import { connect } from "react-redux";
import { decrement, increment, remove } from "../redux/actions";

function BasketItem({product, amount, subtotal, decrement, increment, remove}) {

    return(
        <div>
          <span>{product.name}</span>
          <button onClick={decrement}>-</button>
          <span>{amount}</span>
          <button onClick={increment}>+</button>
          <span>{subtotal} $</span>
          <button onClick={remove}>X</button>
        </div>
    )
}

const mapDispatchToProps = (dispatch, props) =>({
    decrement: () => dispatch(decrement(props.product.id)),
    increment: () => dispatch(increment(props.product.id)),
    remove: () => dispatch(remove(props.product.id)),
})

export default connect(null, mapDispatchToProps)(BasketItem);