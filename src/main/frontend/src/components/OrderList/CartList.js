import CartItem from "./CartItem";
import './cartList.css';

import { useState } from "react";

const CartList = (props) => {

    const cartList = props.list;


    return (
        <>
            <div className="cart-component">
                <div className="cart-component-title">
                    <div className="c-c-inner-title">
                        <h3 className="c-c-i-h3">장바구니</h3>
                    </div>
                </div>
                <div className="cart-component-conent">
                    <div className="c-c-list">
                        <CartItem list = {cartList}/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CartList;