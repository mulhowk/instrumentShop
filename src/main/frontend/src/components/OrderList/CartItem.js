import './cartItem.css';
import React, { useState, useEffect } from 'react';

const CartItem = ({ onTotalChange }) => {

    

    const product = [
        /* item data */
        {
          img: "사진링크",
          title: "SELMER(셀마) Soprano SA80 II JUBILEE AUG Gold Plated",
          option: "Basic",
          price: "1,350,000원"
        },
        {
            img: "사진링크",
            title: "야마하 퍼시파카 트럼펫 YTR-2330S",
            option: "Puprle",
            price: "850,000원"
        },
        // ... 여기에 추가 상품 데이터를 넣을 수 있습니다.
    ];

 // 각 상품의 수량을 관리하는 상태
 const [quantities, setQuantities] = useState(product.map(() => 1));

 // 수량 변경 핸들러
 const handleQuantityChange = (index, delta) => {
    const newQuantities = [...quantities];
    newQuantities[index] = Math.max(1, newQuantities[index] + delta);
    setQuantities(newQuantities);

    // 총 금액 계산 후 상위 컴포넌트에 전달
    const totalPrice = newQuantities.reduce((acc, quantity, idx) => {
        const price = parseInt(product[idx].price.replace(/원/g, "").replace(/,/g, ""));
        return acc + (price * quantity);
    }, 0);
    onTotalChange(totalPrice);
};

    return (
        <>
            {product.map((item, index) => (
                <div key={index} className="cart-item">
                    <div className="cart-item-content">
                        <div className="cart-itme-img">
                            <span>{item.img}</span> {/* 이미지 표시 */}
                        </div>
                        <div className="cart-item-description">
                            <span>{item.title}</span> {/* 상품명 표시 */}
                            <span>{item.option}</span> {/* 옵션 표시 */}
                        </div>
                        <div className="cart-item-price">
                            <span>{item.price}</span> {/* 가격 표시 */}
                            {/* 여기에 수량 선택 박스를 추가할 수 있습니다 */}
                            <div className='c-i-e-intputbox'>
                                <button className='c-i-e-i-btn' onClick={() => handleQuantityChange(index, 1)}>+</button>
                                <div className='input-box-ea'>
                                    <span>{quantities[index]}</span>
                                </div>
                                <button className='c-i-e-i-btn' onClick={() => handleQuantityChange(index, -1)}>-</button>
                            </div>
                        </div>
                        <div className="cart-item-coupon">
                            <span>쿠폰 적용하기</span>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default CartItem;