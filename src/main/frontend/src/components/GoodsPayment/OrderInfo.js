import React, {useEffect, useState} from "react";
import '../../styles/GoodsPayment/OrderInfo.css'
import Modal from "react-modal";
import {CheckoutPage} from "./CheckoutPage.tsx";

function OrderInfo(props) {

    const [selectedOption, setSelectedOption] = useState('');

    const goods = props.goods;

    const handleButtonClick = () => {
        if(selectedOption === 'option0') {
            console.log('option 1 선택');
        } else if (selectedOption === 'option1'){
            openModal();
            console.log({isModalOpen});
        } else {
            console.log('마지막 선택');
        }
    }

    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    }

    const closeModal = () => {
        setModalOpen(false);
    }

    const [deliverPrice, setDeliverPrice] = useState(3000);
    const productPrice = goods.goodsPrice;

    useEffect(() => {
        if(productPrice >= 50000){
            setDeliverPrice(0);
        } else setDeliverPrice(3000);
    }, []);

    const totalPrice = (productPrice*goods.goodsQuantity) + deliverPrice;

    const customStyles = {
        overlay : {
            backgroundColor : 'rgba(0,0,0,0.5)'
        },
        content : {
            width : '50%',
            margin : 'auto',
            borderRadius : '8px',
            boxShadow : '0 0 10px rgba(0,0,0,0.3)'
        }
    };

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
                   <img src={goods.goodsImg} alt="order-img"/>
                   {console.log(goods)}
                   <div className="order-info-content-name-info">
                       <p>{goods.goodsName}</p>
                       {goods.goodsOption?
                           <div className="order-info-content-option">
                           <p>옵션 : {goods.goodsOption}</p>
                       </div> : ""
                       }
                   </div>
               </div>
               <div className="order-info-content-count">
                   <p>{goods.goodsQuantity}</p>
               </div>
               <div className="order-info-content-discount">
                   <button>쿠폰 확인</button>
               </div>
               <div className="order-info-content-price">
                   <p>{totalPrice.toLocaleString()} 원</p>
               </div>
           </div>
           <div className="order-info-content-total">
               <div className="order-info-content-total-title">
                   <p>주문금액 {(goods.goodsPrice*goods.goodsQuantity).toLocaleString()}원
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
                       <p>{(goods.goodsPrice*goods.goodsQuantity).toLocaleString()} 원</p>
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
               <Modal
                   isOpen = {isModalOpen}
                   onRequestClose = {closeModal}
                   contentLabel ="Checkout Modal"
                   style={customStyles}
               >
                   <CheckoutPage pay = {totalPrice}/>
                   <button className="modal-button" onClick={closeModal}>닫기</button>
               </Modal>
               <div className="pay-area-way">
                   <p>결제방법</p>
                   <div className="pay-area-way-option">
                       <label>
                           <input
                               type="radio"
                               value="option1"
                               name="option"
                               onChange={() => setSelectedOption('option1')}
                           />
                           토스 간편결제
                       </label>
                       <label>
                           <input
                               type="radio"
                               value="option0"
                               name="option"
                               onChange={() => setSelectedOption('option0')}
                           />
                           무통장입금
                       </label>
                   </div>
               </div>
               <div className="pay-area-button">
                   <button onClick={handleButtonClick}>결제하기</button>
               </div>
           </div>
       </div>
    );
}

export default OrderInfo;