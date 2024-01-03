import '../../../styles/myInfo/buyList/OrderDetails.css'
import {useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import axios from "axios";

function OrderDetails({orderNum}) {

    const orderId = orderNum;
    const [orders, setOrders] = useState([]);
    const [goods, setGoods] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`/orders/one/${orderId}`);
                const orders = response.data;
                setOrders(orders);

                const goodsIds = orders.goodsId;

                const goodsResponse = await Promise.all(
                goodsIds.map(id => axios.get(`/goodsDetails/goods/${id}`))
                );

                const goods = goodsResponse.map(response => response.data);
                {console.log(orders)}
                setGoods(goods);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    /*  */

    return (
        <>
            {orders.length !== 0 ?
        <div className="order-details">
            <div className="order-details-title">
                <p>주문조회</p>
            </div>
            <div className="order-details-goods">
                {goods?.length > 1 ?
                    (goods?.map((goodsItem, index) => (
                        <div className="box" key={goodsItem.goodsId}>
                            <div className="c-box-user">
                                <div className="name-icon">
                                    <div className="overlap-group">
                                        <div className="text-wrapper">
                                            {goodsItem.goodsPrice.toLocaleString()} 원
                                            / {orders.goodsQuantity[index]}개
                                            / {orders.orderDate} 주문
                                        </div>
                                        <a href={`/goodsDetails/${goodsItem.goodsId}`}>
                                            <img className="element" alt="Element" src={goodsItem.goodsImg} />
                                        </a>
                                        <span className="p">{goodsItem.goodsName}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))) :                   (
                        goods.length > 0 &&
                        <div className="box" key={goods[0].goodsId}>
                            <div className="c-box-user">
                                <div className="name-icon">
                                    <div className="overlap-group">
                                        <div className="text-wrapper">
                                            {goods[0].goodsPrice.toLocaleString()} 원
                                            / {orders.goodsQuantity[0]}개
                                            / {orders.orderDate} 주문
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
            <div className="order-details-title">
                <p>
                    <span style={{fontWeight : "bold"}}>총 결제금액 </span>
                    : {orders.totalPrice.toLocaleString()} 원
                </p>
            </div>
            <div className="order-details-title">
                <p>
                    <span style={{fontWeight : "bold"}}>결제 방식 </span>
                    : {orders.paymentInformation}
                </p>
            </div>
            <div className="order-details-title">
                <p>
                    <span style={{fontWeight : "bold"}}>결제자 </span>
                    : {orders.orderName}
                </p>
            </div>
            <div className="order-details-title">
                <p>
                    <span style={{fontWeight : "bold"}}>결제자 번호 </span>
                    : {orders.orderPhone}
                </p>
            </div>
            <div className="order-details-title">
                <p>
                    <span style={{fontWeight : "bold"}}>결제자 이메일 </span>
                    : {orders.orderEmail}
                </p>
            </div>
            <div className="order-details-title">
                <p>
                    <span style={{fontWeight : "bold"}}>회원여부 </span>
                    : {orders.users ? "회원 주문" : "비회원 주문"}
                </p>
            </div>
        </div>
            : "loading..."}
        </>
    );
}

export default OrderDetails;