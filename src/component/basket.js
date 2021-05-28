import React from "react";
import { connect } from "react-redux";
import { orderProductsSelector, totalSelector } from "../redux/selectors";
import BasketItem from "./basket-item";

function Basket({total, orderProducts}){

    if(!total){
        return(
            <div className={"basket"}>
                <h2>Ваша корзина пуста</h2>
            </div>
        )
    }

    return(
        <div className={"basket"}>
           {orderProducts.map(({product, amount, subtotal}) => (
               <BasketItem product={product} amount={amount} subtotal={subtotal} key={product.id}/>
           ))}
           <hr/>
           Total: <span>{total} $</span>
        </div>
    )
}

const mapStateToProps = (state) => {

    return {
        total: totalSelector(state),
        orderProducts: orderProductsSelector(state),
    }
}

export default connect(mapStateToProps)(Basket);