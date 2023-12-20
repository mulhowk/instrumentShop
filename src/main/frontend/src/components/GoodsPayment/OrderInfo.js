import React, {useEffect, useState} from "react";
import '../../styles/GoodsPayment/OrderInfo.css'
import Modal from "react-modal";
import {CheckoutPage} from "./CheckoutPage.tsx";
import {getAuthToken, tokenUserInfo} from "../../global/auth";
import axios from "axios";
import InMyCoupon from "../../pages/myinfo/InMyCoupon";
import CouponList from "./CouponList";

function OrderInfo(props) {

    const [selectedOption, setSelectedOption] = useState('');

    const token =  getAuthToken();
    const decodedToken = tokenUserInfo(token);
    const MEMBERUID = decodedToken? decodedToken.UID : null;
    const goods = props.goods;
    const memberInfo = props.memberData;

    const [couponModal, setCouponModal] = useState(false);
    const [selectedCoupon, setSelectedCoupon] = useState([]);
    const [modify, setModify] = useState(new Array(goods.length).fill(false));
    const [payIndex, setPayIndex] = useState();
    {console.log(modify)}


    const openCouponModal = (index) => {
        {console.log(modify[index])}
        if(!modify[index]) {
            setCouponModal(true);
            setPayIndex(index);
        } else {
            alert("이미 쿠폰을 적용했습니다!")
        }
    }

    const openCouponModalNoIndex = () => {
        if(!modify[0]){
            setCouponModal(true);
        } else {
            alert("이미 쿠폰을 적용했습니다!");
        }
    }

    const closeCouponModal = () => {
        setCouponModal(false);
    }

    useEffect(() => {
        if(selectedCoupon.length !== 0){
            if(!Array.isArray(goods)){
                if(selectedCoupon.couponDiscount > 0){
                    const newTotalPrice = totalPrice * (1-(selectedCoupon.couponDiscount/100));
                    if(totalPrice - newTotalPrice >= selectedCoupon.couponLimit) {
                        const limitTotalPrice = totalPrice - selectedCoupon.couponLimit;
                        const newModify = [...modify];
                        setTotalPrice(limitTotalPrice);
                        alert("쿠폰이 적용되었습니다!");
                        newModify[0] = true;
                        setModify(newModify);
                    } else {
                        const newModify = [...modify];
                        setTotalPrice(newTotalPrice);
                        alert("쿠폰이 적용되었습니다!");
                        newModify[0] = true;
                        setModify(newModify);
                    }
                } else {
                    const newTotalPrice = totalPrice - selectedCoupon.couponValue;
                    const newModify = [...modify];
                    setTotalPrice(newTotalPrice);
                    alert("쿠폰이 적용되었습니다!");
                    newModify[0] = true;
                    setModify(newModify);
                }
            }
            else {
                console.log(selectedCoupon);
                const coupon = selectedCoupon.coupon;
                const index = selectedCoupon.productNum;
                if(coupon.couponDiscount > 0){
                    const newTotalPrice = [...totalPrice];

                    newTotalPrice[index] = totalPrice[index] * (1-(coupon.couponDiscount/100));

                    if(totalPrice[index] - newTotalPrice[index] >= coupon.couponLimit){
                        const newModify = [...modify];
                        newTotalPrice[index] = totalPrice[index] - coupon.couponLimit;
                        setTotalPrice(newTotalPrice);
                        alert("쿠폰이 적용되었습니다!");
                        newModify[index] = true;
                        setModify(newModify);
                    } else {
                        const newModify = [...modify];
                        setTotalPrice(newTotalPrice);
                        alert("쿠폰이 적용되었습니다!");
                        newModify[index] = true;
                        setModify(newModify);
                    }

                } else {
                    const newTotalPrice = [...totalPrice];
                    const newModify = [...modify];
                    newTotalPrice[index] = totalPrice[index] - coupon.couponValue;
                    setTotalPrice(newTotalPrice);
                    alert("쿠폰이 적용되었습니다!");
                    newModify[index] = true;
                    setModify(newModify);
                }
            }
        }
    }, [selectedCoupon]);


    const handleButtonClick = () => {
        {console.log(orderInfo)}
        if(!memberInfo.orderName){
            alert("주문자 이름을 입력해주세요");
            return;
        } else if(!memberInfo.orderEmail){
            alert("주문자 이메일을 입력해주세요");
            return;
        } else if(!memberInfo.orderPhone){
            alert("주문자 연락처를 입력해주세요");
            return;
        } else if(!memberInfo.deliverName){
            alert("받는분 성함을 입력해주세요");
            return;
        } else if(!memberInfo.deliverPhone){
            alert("받는분 연락처를 입력해주세요");
            return;
        } else if(!memberInfo.deliverAddress){
            alert("받는분 주소를 입력해주세요");
            return;
        } else if(!memberInfo.orderMsg){
            alert("주문 메세지를 입력해주세요");
            return;
        } else if(!memberInfo.deliverMsg){
            alert("배달 메세지를 입력해주세요");
            return;
        }

        if(selectedOption === '무통장입금') {
            window.location.href =
                `${window.location.origin}/success?orderInfo=${encodeURIComponent(JSON.stringify(orderInfo))}`;
        } else if (selectedOption === '토스 간편결제'){
            openModal();
            console.log({isModalOpen});
        } else {
            alert("결제방식을 선택해주세요!");
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

    const productPrice = goods.length >= 2 ? goods.map(goods => goods.goodsPrice) : goods.goodsPrice;

    const productQuantity = goods.length >= 2 ? goods.map(goods => goods.goodsQuantity) : goods.goodsQuantity;

    const [totalPrice, setTotalPrice] = useState(goods.length >=2 ?
        productPrice.map((value, index) => value * productQuantity[index])
    : productPrice * productQuantity);

    const finalPrice = goods.length >= 2 ?
        Math.round(totalPrice.reduce((sum, value) => sum + value, 0))
    : Math.round(totalPrice);

    const pay = Math.round(finalPrice + deliverPrice);

    useEffect(() => {
        {console.log(totalPrice)}
        if( finalPrice >= 50000){
            setDeliverPrice(0);
        } else setDeliverPrice(3000);

    }, []);

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

    const goodsId = goods.length >=2 ?
        goods.map(goods => goods.goodsId)
    : goods.goodsId;
    const goodsQuantity = goods.length >=2 ?
        goods.map(goods => goods.goodsQuantity)
    : goods.goodsQuantity;
    const goodsOption = goods.length >=2 ?
        goods.map(goods => goods.goodsOption)
    : goods.goodsOption;

    const orderInfo = {

        goodsId : goodsId,
        MEMBERUID : MEMBERUID,
        goodsQuantity : goodsQuantity,
        goodsOption : goodsOption,
        pay : pay,
        orderMsg : memberInfo.orderMsg,
        deliverMsg : memberInfo.deliverMsg,
        orderName : memberInfo.orderName,
        orderEmail : memberInfo.orderEmail,
        orderPhone : memberInfo.orderPhone,
        deliverName : memberInfo.deliverName,
        deliverPhone : memberInfo.deliverPhone,
        payInformation : selectedOption

    }

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
           {goods.length >= 2 ?
               goods.map((goods, index) => (
           <div className="order-info-content">
                   <div className="order-info-content-img">
                   <img src={goods.goodsImg} alt="order-img"/>
                   <div className="order-info-content-name-info">
                       <p>{goods.goodsName}</p>
                       {goods.goodsOption?
                           <div className="order-info-content-option">
                           <p>옵션 : {goods.goodsOption}</p>
                       </div> : ""
                       }
                   </div>
               </div>
               <Modal
                   appElement={document.getElementById('root')}
                   isOpen = {couponModal}
                   style={{
                       overlay: {
                           display: 'flex',
                           justifyContent: 'center',
                           alignItems: 'center'

                       },
                       content : {
                           width: '350px',
                           height: '460px',
                           position: 'absolute',
                           inset: ''
                       }
                   }}>
               <CouponList
                   onClose = {closeCouponModal}
                   onSelectCoupon = {setSelectedCoupon}
                   index = {payIndex}
                   />
               </Modal>
               <div className="order-info-content-count">
                   <p>{goods.goodsQuantity}</p>
               </div>
               <div className="order-info-content-discount">
                   <button onClick={() => openCouponModal(index)}>쿠폰 확인</button>
               </div>
               <div className="order-info-content-price">
                   <p>{totalPrice[index].toLocaleString()} 원</p>
               </div>
           </div>
           )) : <div className="order-info-content">
                   <div className="order-info-content-img">
                       <img src={goods.goodsImg} alt="order-img"/>
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
                   <Modal
                       appElement={document.getElementById('root')}
                       isOpen = {couponModal}
                       style={{
                           overlay: {
                               display: 'flex',
                               justifyContent: 'center',
                               alignItems: 'center'

                           },
                           content : {
                               width: '350px',
                               height: '460px',
                               position: 'absolute',
                               inset: ''
                           }
                       }}>
                       <CouponList
                           onClose = {closeCouponModal}
                           onSelectCoupon = {setSelectedCoupon}
                       />
                   </Modal>
                   <div className="order-info-content-discount">
                       <button onClick={openCouponModalNoIndex}>쿠폰 확인</button>
                   </div>
                   <div className="order-info-content-price">
                       <p>{totalPrice.toLocaleString()} 원</p>
                   </div>
               </div>}
           <div className="order-info-content-total">
               <div className="order-info-content-total-title">
                   <p>주문금액 {finalPrice.toLocaleString()}원
                       + 배송비 {deliverPrice.toLocaleString()}원
                       = {pay.toLocaleString()}원</p>
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
                       <p>{finalPrice.toLocaleString()} 원</p>
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
                       <p>{pay.toLocaleString()} 원</p>
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
                   <CheckoutPage orderInfo = {orderInfo}/>
                   <button className="modal-button" onClick={closeModal}>닫기</button>
               </Modal>
               <div className="pay-area-way">
                   <p>결제방법</p>
                   <div className="pay-area-way-option">
                       <label>
                           <input
                               type="radio"
                               value="tossPay"
                               name="option"
                               onChange={() => setSelectedOption('토스 간편결제')}
                           />
                           토스 간편결제
                       </label>
                       <label>
                           <input
                               type="radio"
                               value="noAccount"
                               name="option"
                               onChange={() => setSelectedOption('무통장입금')}
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