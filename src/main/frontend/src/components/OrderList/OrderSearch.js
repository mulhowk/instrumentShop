import './orderSearch.css'
import {Link} from "react-router-dom";
import React, {useState} from "react";
import axios from "axios";
import Modal from "react-modal";
import InMyReview from "../../pages/myinfo/InMyReview";
import InMyQnA from "../../pages/myinfo/InMyQnA";
import Header from "../Header";
import Footer from "../Footer";
import OrderDetails from "../myPage/buyList/OrderDetails";

function OrderSearch(){

    const [orderId, setOrderId] = useState();
    const [email, setEmail] = useState();
    const [orderData, setOrderData] = useState();
    const [orderResult, setOrderResult] = useState();
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

    const handelOrderId = (e) => {
        setOrderId(e.target.value);
    }

    const handelEmail = (e) => {
        setEmail(e.target.value);
    }

    const handelKeyPressEnter = (e) => {
        if(e.key === 'Enter'){
            handelSearchClick();
        }
    };

    const [isOrderDetailsModalOpen, setIsOrderDetailsModalOpen] = useState(false);
    const openOrderDetailsModal = () => {
        setIsOrderDetailsModalOpen(true);
    }

    const closeOrderDetailsModal = () => {
        setIsOrderDetailsModalOpen(false);
    }

    const orderDetailsPopup = (orderId) => {
        {console.log(orderId)}
        setOrderNum(orderId)
        openOrderDetailsModal();
    }

    const handelSearchClick = () => {

        const fetchData = async () => {
            try {
                const response = await axios.get(`/orders/all`);
                const AllOrders = response.data;

                const orders = AllOrders.find(order => order.orderId == orderId);
                const checkEmail = orders.orderEmail === email;
                {console.log(checkEmail)}


                if(orders && checkEmail) {
                    const goodsIds = orders.goodsId;
                    {console.log(orders)}

                    const goodsResponse = await Promise.all(
                        goodsIds.map(id => axios.get(`/goodsDetails/goods/${id}`))
                    );

                    const goods = goodsResponse.map(response => response.data);


                    setOrderResult(
                        <div>
                            {goods.length > 1 ?
                                (goods.map((goods, index) => (
                                    <div className="box" key={goods.goodsId}>
                                        <div className="c-box-user">
                                            <div className="name-icon">
                                                <div className="overlap-group">
                                                    <div className="text-wrapper">
                                                        {goods.goodsPrice.toLocaleString()} 원
                                                        / {orders.goodsQuantity[index]}개
                                                        / {orders.orderDate} 주문
                                                    </div>
                                                    <div className="div"
                                                         onClick={() => orderDetailsPopup(orders.orderId)}
                                                         style={{cursor : "pointer"}}>
                                                        주문상세 보러가기
                                                    </div>
                                                    <a href={`/goodsDetails/${goods.goodsId}`}>
                                                        <img className="element" alt="Element" src={goods.goodsImg} />
                                                    </a>
                                                    <span className="p">{goods.goodsName}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))) :                   (

                                    <div className="box" key={goods[0].goodsId}>
                                        <div className="c-box-user">
                                            <div className="name-icon">
                                                <div className="overlap-group">
                                                    <div className="text-wrapper">
                                                        {goods[0].goodsPrice.toLocaleString()} 원
                                                        / {orders.goodsQuantity[0]}개
                                                        / {orders.orderDate} 주문
                                                    </div>
                                                    <div className="div"
                                                         onClick={() => orderDetailsPopup(orders.orderId)}
                                                         style={{cursor : "pointer"}}>
                                                        주문상세 보러가기
                                                    </div>
                                                    <a href={`/goodsDetails/${goods[0].goodsId}`}>
                                                        <img className="element" alt="Element" src={goods[0].goodsImg} />
                                                    </a>
                                                    <span className="p">{goods[0].goodsName}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                )
                            }
                        </div>
                    )
                } else {
                    setOrderResult(
                        <div>
                            <p>입력하신 정보와 일치하는 주문이 없습니다.</p>
                        </div>
                    )
                }



            } catch (error) {
                console.error('Error fetching data:', error);
                setOrderResult(
                    <div>
                        <p>입력하신 정보와 일치하는 주문이 없습니다.</p>
                    </div>
                )
            }
        };

        // fetchData 함수 호출
        fetchData();

    }



    return (
        <>
            <Header/>
            <div className="order-search">
                <div className="order-search-border">
                    <p>주문 내역을 알기 원하시면 주문 번호와 이메일을 입력해주세요.</p>
                    <div className="order-search-bar">
                        <input type="text"
                               placeholder="주문번호를 입력하세요"
                               value={orderId}
                               onChange={handelOrderId}
                               onKeyPress={handelKeyPressEnter}/>
                        &nbsp;&nbsp;
                        <input type="text"
                               placeholder="이메일을 입력하세요"
                               value={email}
                               onChange={handelEmail}
                               onKeyPress={handelKeyPressEnter}/>
                        <img src="/search3.png"
                             alt='searchImg'
                             width="30" height="30"
                             style={{cursor : "pointer"}}
                             onClick={handelSearchClick}
                        />
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
                    {orderResult}
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default OrderSearch;