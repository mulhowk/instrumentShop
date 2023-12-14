import "../../../styles/myInfo/buyList/myBuyList.css"
import {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const MyBuyList = (props) => {

    const MEMBERUID = props.MEMBERUID;
    const navi = useNavigate();

    const [orderItem, setOrderItem] = useState([]);

    useEffect(() => {
        axios.get(`/orders/${MEMBERUID}`)
            .then(res => {
                setOrderItem(res.data);
            })
    }, []);

    const handelReview = (goodsId) => {
        const url = `/goodsDetails/reviewWrite/${goodsId}`;
        navi(url);
    }

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
                        <img className="element" alt="Element" src={goods.goodsImg} />
                        <div className="overlap">
                            <div className="text-wrapper-2"
                                 onClick={() => handelReview(goods.goodsId)}>
                                리뷰쓰기
                            </div>
                        </div>
                        <div className="div-wrapper">
                            <div className="text-wrapper-2"
                                 onClick={() => handelQna(goods.goodsId)}>
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