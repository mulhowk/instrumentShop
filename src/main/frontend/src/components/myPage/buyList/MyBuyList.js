import "../../../styles/myInfo/buyList/myBuyList.css"
import React, {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import InMyReview from "../../../pages/myinfo/InMyReview";
import Modal from "react-modal";
import InMyQnA from "../../../pages/myinfo/InMyQnA";
import OrderDetails from "./OrderDetails";

const MyBuyList = (props) => {

    const MEMBERUID = props.MEMBERUID;
    const navi = useNavigate();
    const [goodsNum, setGoodsNum] = useState();
    const [orderNum, setOrderNum] = useState();

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
    const [isOrderDetailsModalOpen, setIsOrderDetailsModalOpen] = useState(false);

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

    const openOrderDetailsModal = () => {
        setIsOrderDetailsModalOpen(true);
    }

    const closeOrderDetailsModal = () => {
        setIsOrderDetailsModalOpen(false);
    }

    const [orderItem, setOrderItem] = useState([]);
    const [goodsId, setGoodsId] = useState([]);
    const [goods, setGoods] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`/orders/${MEMBERUID}`);
                const orders = response.data;

                // 각 주문의 goodsId를 추출하여 배열을 만듭니다.
                const goodsIds = orders.map(order => order.goodsId);

                // goodsId를 이용하여 각 상품 정보를 가져오기 위한 비동기 작업을 수행합니다.
                const responses = await Promise.all(
                    goodsIds.map(goodsIdArray =>
                        Promise.all(goodsIdArray.map(id => axios.get(`/goodsDetails/goods/${id}`)))
                    )
                );

                // responses 배열을 이용하여 newGoodsArray를 생성합니다.
                const newGoodsArray = responses.map(responseArray =>
                    responseArray.map(response => response.data)
                );

                // newGoodsArray를 출력합니다.
                console.log(newGoodsArray);

                // 상태를 업데이트합니다.
                setOrderItem(orders);
                setGoodsId(goodsIds);
                setGoods(newGoodsArray);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        // fetchData 함수 호출
        fetchData();

    }, []); // 빈 의존성 배열은 한 번만 실행하도록 합니다.

    const reviewPopup = (goodsId) => {
        setGoodsNum(goodsId);
        openReviewModal();

    };

    const qnaPopup = (goodsId) => {
        setGoodsNum(goodsId);
        openQnaModal();
    };

    const orderDetailsPopup = (orderId) => {
        setOrderNum(orderId)
        openOrderDetailsModal();
    }

    const handelQna = (goodsId) => {
        const url = `/goodsDetails/qnaWrite/${goodsId}`;
        navi(url);
    }

    return (
        <>
            {orderItem.length !==0 ?
                orderItem.map((orders, index) =>
                    <div>
                        {goods[index].length > 1 ?
                            (goods[index].map((goods, index) => (
        <div className="box" key={goods.goodsId}>
            <div className="c-box-user">
                <div className="name-icon">
                    <div className="overlap-group">
                        <div className="text-wrapper">
                            {goods.goodsPrice.toLocaleString()} 원
                            / {orders.goodsQuantity[index]}개
                            / {orders.orderDate} 주문
                        </div>
                        <Modal
                            isOpen = {isOrderDetailsModalOpen}
                            onRequestClose = {closeOrderDetailsModal}
                            style={customStyles}
                        >
                            <OrderDetails
                                orderNum = {orderNum}
                            />
                            <button className="modal-button" onClick={closeOrderDetailsModal}>닫기</button>
                        </Modal>
                        <div className="div"
                             onClick={() => orderDetailsPopup(orders.orderId)}
                             style={{cursor : "pointer"}}>
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
    ))) :                   (

                            <div className="box" key={goods[index][0].goodsId}>
                                <div className="c-box-user">
                                    <div className="name-icon">
                                        <div className="overlap-group">
                                            <div className="text-wrapper">
                                                {goods[index][0].goodsPrice.toLocaleString()} 원
                                                / {orders.goodsQuantity[index]}개
                                                / {orders.orderDate} 주문
                                            </div>
                                            <Modal
                                                isOpen = {isOrderDetailsModalOpen}
                                                onRequestClose = {closeOrderDetailsModal}
                                                style={customStyles}
                                            >
                                                <OrderDetails
                                                    orderNum = {orderNum}
                                                />
                                                <button className="modal-button" onClick={closeOrderDetailsModal}>닫기</button>
                                            </Modal>
                                            <div className="div"
                                                 onClick={() => orderDetailsPopup(orders.orderId)}
                                                 style={{cursor : "pointer"}}>
                                                주문상세 보러가기
                                            </div>
                                            <a href={`/goodsDetails/${goods[index][0].goodsId}`}>
                                                <img className="element" alt="Element" src={goods[index][0].goodsImg} />
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
                                                     onClick={() => reviewPopup(goods[index][0].goodsId)}>
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
                                                     onClick={() => qnaPopup(goods[index][0].goodsId)}>
                                                    문의하기
                                                </div>
                                            </div>
                                            <span className="p">{goods[index][0].goodsName}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

            )
                        }
                    </div>
        ) :
                <div className="box">
                    <p style={{color : "white"}}>구매 내역이 없습니다.</p>
                </div>}
        </>
    );
}

export default MyBuyList;