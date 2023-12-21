import "../../../styles/myInfo/buyList/myBuyList.css"
import React, {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import { createRoot } from 'react-dom/client';
import InMyReview from "../../../pages/myinfo/InMyReview";
import CouponList from "../../GoodsPayment/CouponList";
import Modal from "react-modal";
import InMyQnA from "../../../pages/myinfo/InMyQnA";

const MyBuyList = (props) => {

    const MEMBERUID = props.MEMBERUID;
    const navi = useNavigate();
    const [goodsNum, setGoodsNum] = useState();

    const customStyles = {
        overlay : {
            backgroundColor : 'rgba(0,0,0,0.5)'
        },
        content : {
            width : '49%',
            margin : 'auto',
            borderRadius : '8px',
            boxShadow : '0 0 10px rgba(0,0,0,0.3)'
        }
    };

    const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
    const [isQnaModalOpen, setIsQnaModalOpen] = useState(false);

    const openReviewModal = () => {
        setIsReviewModalOpen(true);
    }

    const closeReviewModal = () => {
        setIsReviewModalOpen(false);
    }

    const openQnaModal = () => {
        setIsQnaModalOpen(true);
    }

    const closeQnaModal = () => {
        setIsQnaModalOpen(false);
    }

    const [orderItem, setOrderItem] = useState([]);

    useEffect(() => {
        axios.get(`/orders/${MEMBERUID}`)
            .then(res => {
                setOrderItem(res.data);
            })
    }, []);

    const reviewPopup = (goodsId) => {
        setGoodsNum(goodsId);
        openReviewModal();

    };

    const qnaPopup = (goodsId) => {
        setGoodsNum(goodsId);
        openQnaModal();
    };


    const handelQna = (goodsId) => {
        const url = `/goodsDetails/qnaWrite/${goodsId}`;
        navi(url);
    }
    {console.log(orderItem)}

    return (
        <>
            {orderItem.length !==0 ?
                orderItem.map((orders, index) =>
                    <div>
                {orders.goods.map((goods, index) => (
        <div className="box" key={goods.goodsId}>
            <div className="c-box-user">
                <div className="name-icon">
                    <div className="overlap-group">
                        <div className="text-wrapper">
                            {goods.goodsPrice.toLocaleString()} 원
                            / {orders.goodsQuantity[index]}개
                            / {orders.orderDate} 주문
                        </div>
                        <div className="div">
                            주문상세 보러가기
                        </div>
                        <a href={`/goodsDetails/${goods.goodsId}`}>
                        <img className="element" alt="Element" src={goods.goodsImg} />
                        </a>
                        <Modal
                            isOpen = {isReviewModalOpen}
                            onRequestClose = {closeReviewModal}
                            style={customStyles}
                        >
                            <InMyReview
                                onClose = {closeReviewModal}
                                goodsNum = {goodsNum}
                            />
                            <button className="modal-button" onClick={closeReviewModal}>닫기</button>
                        </Modal>
                        <div className="overlap">
                            <div className="text-wrapper-2"
                                 onClick={() => reviewPopup(goods.goodsId)}>
                                리뷰쓰기
                            </div>
                        </div>
                        <Modal
                            isOpen = {isQnaModalOpen}
                            onRequestClose = {closeQnaModal}
                            style={customStyles}
                        >
                            <InMyQnA
                                onClose = {closeQnaModal}
                                goodsNum = {goodsNum}
                            />
                            <button className="modal-button" onClick={closeQnaModal}>닫기</button>
                        </Modal>
                        <div className="div-wrapper">
                            <div className="text-wrapper-2"
                                 onClick={() => qnaPopup(goods.goodsId)}>
                                문의하기
                            </div>
                        </div>
                        <span className="p">{goods.goodsName}</span>
                    </div>
                </div>
            </div>
        </div>
    ))}
                    </div>
        ) :
                <div className="box">
                    <p style={{color : "white"}}>구매 내역이 없습니다.</p>
                </div>}
        </>
    );
}

export default MyBuyList;