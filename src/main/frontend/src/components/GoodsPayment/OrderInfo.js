import React, {useEffect, useState} from "react";
import '../../styles/GoodsPayment/OrderInfo.css'
import {Link} from "react-router-dom";

function OrderInfo() {

    const [deliverPrice, setDeliverPrice] = useState(3000);
    const productPrice = 40000;

    useEffect(() => {
        if(productPrice >= 50000){
            setDeliverPrice(0);
        } else setDeliverPrice(3000);
    }, []);

    const totalPrice = productPrice + deliverPrice;

    return (
       <div className="order-info">
            <div className="order-info-area">
                <div className="order-info-area-goods">
                    <p>상품/옵션정보</p>
                </div>
                <div className="order-info-area-count">
                    <p>수량</p>
                </div>
                <div className="order-info-area-discount">
                    <p>할인</p>
                </div>
                <div className="order-info-area-price">
                    <p>주문금액</p>
                </div>
            </div>
           <div className="order-info-content">
               <div className="order-info-content-img">
                   <img src="../logo.png" alt="order-img"/>
                   <div className="order-info-content-name-info">
                       <p>상품명123</p>
                       <div className="order-info-content-option">
                           <p>옵션 : 123</p>
                       </div>
                   </div>
               </div>
               <div className="order-info-content-count">
                   <p>1</p>
               </div>
               <div className="order-info-content-discount">
               </div>
               <div className="order-info-content-price">
                   <p>{productPrice.toLocaleString()} 원</p>
               </div>
           </div>
           <div className="order-info-content-total">
               <div className="order-info-content-total-title">
                   <p>주문금액 {productPrice.toLocaleString()}원
                       + 배송비 {deliverPrice.toLocaleString()}원
                       = {totalPrice.toLocaleString()}원</p>
               </div>
           </div>
           <div className="order-info-total">
               <div className="order-info-total-title">
                   <p>최종가</p>
               </div>
               <div className="order-info-total-area">
                   <div className="order-info-total-area-price">
                       <p>상품금액</p>
                   </div>
                   <div className="order-info-total-area-deliver">
                       <p>배송비</p>
                   </div>
                   <div className="order-info-total-area-discount">
                       <p>할인금액</p>
                   </div>
                   <div className="order-info-total-area-total">
                       <p>결제 예상금액</p>
                   </div>
               </div>
               <div className="order-info-total-pay">
                   <div className="order-info-total-pay-price">
                       <p>{productPrice.toLocaleString()} 원</p>
                   </div>
                   <div className="order-info-total-pay-plus">
                       <p>+</p>
                   </div>
                   <div className="order-info-total-pay-deliver">
                       <p>{deliverPrice.toLocaleString()} 원</p>
                   </div>
                   <div className="order-info-total-pay-minus">
                       <p>-</p>
                   </div>
                   <div className="order-info-total-pay-discount">
                       <p>0 원</p>
                   </div>
                   <div className="order-info-total-pay-equals">
                       <p>=</p>
                   </div>
                   <div className="order-info-total-pay-total">
                       <p>{totalPrice.toLocaleString()} 원</p>
                   </div>
               </div>
           </div>
           <div className="pay-area">
               <div className="pay-area-title">
                   <p>결제 정보</p>
               </div>
               <div className="pay-area-way">
                   <p>결제방법</p>
                   <div className="pay-area-way-option">
                       <label>
                           <input
                               type="radio"
                               value="creditCard"
                               name="option"
                               />
                           신용카드
                       </label>
                       <label>
                           <input
                               type="radio"
                               value="tossPay"
                               name="option"
                           />
                           토스 간편결제
                       </label>
                       <label>
                           <input
                               type="radio"
                               value="mootong"
                               name="option"
                           />
                           무통장입금
                       </label>
                   </div>
               </div>
               <div className="pay-area-button">
                   <button>결제하기</button>
               </div>
           </div>
       </div>
    );
}

export default OrderInfo;