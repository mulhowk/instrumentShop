import './cartItem.css';
import React, { useState, useEffect } from 'react';
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {getAuthToken} from "../../global/auth";

const CartItem = (props) => {

    const navigate = useNavigate();
    const [selectedCartList, setSelectedCartList] = useState([]);

    const handleDeleteCarts = (key) => {

        {console.log(key)}
        const isConfirmed = window.confirm('해당 장바구니를 삭제하시겠습니까?');
        const token =  getAuthToken() || null;

        if(isConfirmed){
            if(token !== null){
            axios.delete(`/cart/delete/${key}`)
                .then(res => {
                    alert("상품이 삭제되었습니다!");
                    window.location.reload();
                })
                .catch(error => console.error('Error delete goods: ', error));
            } else{
                const cart = JSON.parse(localStorage.getItem('cart')) || null;

                const indexToRemove = cart.findIndex(cartList => cartList.cartNo === key);

                if(indexToRemove !== -1){
                    cart.splice(indexToRemove, 1);

                    localStorage.setItem('cart', JSON.stringify(cart));

                    console.log('상품 정상 삭제');
                    alert("상품이 삭제되었습니다!");
                    window.location.reload();
                } else {
                    console.log('번호에 맞는 상품 없음');
                }
            }
        }
    }

    const handlePayment = () =>{

        if(selectedCartList.length === 0){
            alert("상품을 선택해주세요!");
            return;
        }

        const products = selectedCartList.length >= 2?
            selectedCartList.map(list => ({
            goodsId : list.goods.goodsId,
            goodsName : list.goodsName,
            goodsOption : list.goodsOption,
            goodsQuantity : list.goodsQuantity,
            goodsPrice : list.goodsPrice,
            goodsImg : list.goodsImg
        }))
        : {
                goodsId : selectedCartList[0].goods.goodsId,
                goodsName : selectedCartList[0].goodsName,
                goodsOption : selectedCartList[0].goodsOption,
                goodsQuantity : selectedCartList[0].goodsQuantity,
                goodsPrice : selectedCartList[0].goodsPrice,
                goodsImg : selectedCartList[0].goodsImg
            };
        navigate(`/goodsPayment`, {state : {products}});
    }

    useEffect(() => {
        const list = props.list;
        setCarList(list);

    }, [props.list]);

    const [cartList, setCarList] = useState([]);


    const [totalPrice, setTotalPrice] = useState(0);

    const increment = (index) => {
        const updatedCartList = [...cartList];
        updatedCartList[index].goodsQuantity += 1;
        setCarList(updatedCartList);
    };

    const decrement = (index) => {
        const updatedCartList = [...cartList];
        if(updatedCartList[index].goodsQuantity > 1){
            updatedCartList[index].goodsQuantity -= 1;
            setCarList(updatedCartList);
        } else {
            alert("1개 미만은 불가능 합니다.");
        }
    };

    const [selectedItems, setSelectedItems] = useState([]);
    const [selectAll, setSelectAll] = useState(false);

    useEffect(() => {
        if(selectAll) {
            setSelectedItems(cartList.map(goods => goods.cartNo));
        } else {
            setSelectedItems([]);
        }

    }, [selectAll, cartList]);

    const handleCheckboxChange = (cartNo) => {
        if(selectedItems.includes(cartNo)) {
            setSelectedItems(selectedItems.filter(goods => goods !== cartNo));

        } else {
            setSelectedItems([...selectedItems, cartNo])
        }

    }

    useEffect(() => {
        setSelectedCartList(cartList.filter(item => selectedItems.includes(item.cartNo)));
        setTotalPrice(cartList.filter(item => selectedItems.includes(item.cartNo))
            .reduce((all, item) => all + item.goodsQuantity * item.goodsPrice, 0));
    }, [selectedItems]);

    return (
        <>
            <div className="c-c-header">
                <div className="c-c-h-check-input">
                    <input type="checkbox" checked={selectAll} onChange={() => setSelectAll(!selectAll)}/>
                </div>
                <div className="c-c-h-span">
                    <span>전체선택</span>
                </div>
            </div>
            {cartList.map((item, index) => (
                <div className="cart-item">
                    <div className="cart-item-content">
                        <div key={item.cartNo} className="cart-item-checkbox">
                            <input type="checkbox"
                                   checked={selectedItems.includes(item.cartNo)}
                                   onChange={() => handleCheckboxChange(item.cartNo)}/>
                        </div>
                        <div className="cart-itme-img">
                            <img src={item.goodsImg} alt={index} /> {/* 이미지 표시 */}
                        </div>
                        <div className="cart-item-description">
                            <span>{item.goodsName}</span> {/* 상품명 표시 */}
                            {item.goodsOption ?
                                <span>옵션 : {item.goodsOption}</span>
                                : ""
                            }{/* 옵션 표시 */}
                        </div>
                        <div className="cart-item-quantity">
                            <button onClick={() => decrement(index)}>-</button>
                            <p>{item.goodsQuantity} 개</p>
                            <button onClick={() => increment(index)}>+</button>
                        </div>
                        <div className="cart-item-price">
                            <span>{(item.goodsPrice * item.goodsQuantity).toLocaleString()} 원</span>
                        </div>
                        <div className="cart-item-delete">
                            <button key={item.cartNo}
                                    onClick={() => handleDeleteCarts(item.cartNo)}>
                                ✖
                            </button>
                        </div>
                    </div>
                </div>
            ))}
            <div className="c-c-total-price">
                <div className="c-t-p-footer">
                    <div className="cart-total-all-price">
                        <span>총 결제 금액</span>
                        <span>{totalPrice.toLocaleString()}원</span>
                    </div>
                    <button onClick={handlePayment}>구매하기
                    </button>
                </div>
            </div>
        </>
    );
}

export default CartItem;