import CartItem from "./CartItem";
import './cartList.css';

import { useState } from "react";

const CartList = (props) => {
    const [totalPrice, setTotalPrice] = useState(0);
    const carList = props.list;

    const handleTotalChange = (price) => {
        setTotalPrice(price);
    };

    return (
        <>
            <div className="cart-component">
                <div className="cart-component-title">
                    <div className="c-c-inner-title">
                        <h3 className="c-c-i-h3">장바구니</h3>
                    </div>
                </div>
                <div className="cart-component-conent">
                    <div className="c-c-header">
                        <div className="c-c-h-check-input">
                            <input type="checkbox"></input>
                        </div>
                        <div className="c-c-h-span">
                            <span>전체선택</span>
                        </div>
                    </div>
                    <div className="c-c-list">
                        <CartItem onTotalChange={handleTotalChange} />
                    </div>
                    <div className="c-c-total-price">
                        <div className="c-t-p-footer">
                            <div className="cart-total-price">
                                <span className="c-t-title">총 상품 금액</span>
                                <span>{totalPrice}원</span>
                            </div>
                            <div className="cart-total-sale">
                                <span>총 할인 금액</span>
                                <span>0원</span>
                            </div>
                            <div className="cart-total-all-price">
                                <span>총 결제 금액</span>
                                <span>{totalPrice}원</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CartList;