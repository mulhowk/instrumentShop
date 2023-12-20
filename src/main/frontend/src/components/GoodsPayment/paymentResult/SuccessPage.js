import {Link, useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";


export function SuccessPage() {
    const [searchParams] = useSearchParams();
    const [orderInfo, setOrderInfo] = useState([]);
    {console.log(orderInfo)}
    useEffect(() => {
        const orderInfoParams = searchParams.get('orderInfo');
        if(orderInfoParams){
            try{
                const parsedOrderInfo = JSON.parse(decodeURIComponent(orderInfoParams));
                setOrderInfo(parsedOrderInfo);
            } catch (error){
                console.error('Error parsing orderInfo : ', error);
            }
        }
    }, []);

    useEffect(() => {
        if(orderInfo.length !==0){
            {console.log(orderInfo.goodsId)}
        const formOrdersData = new FormData();

        formOrdersData.append('goods', orderInfo.goodsId);
        formOrdersData.append('users', orderInfo.MEMBERUID);
        formOrdersData.append('goodsQuantity', orderInfo.goodsQuantity);
        formOrdersData.append('options', orderInfo.goodsOption);
        formOrdersData.append('totalPrice', orderInfo.pay);
        formOrdersData.append('orderMsg', orderInfo.orderMsg);
        formOrdersData.append('deliverMsg', orderInfo.deliverMsg);
        formOrdersData.append('orderName', orderInfo.orderName);
        formOrdersData.append('orderEmail', orderInfo.orderEmail);
        formOrdersData.append('orderPhone', orderInfo.orderPhone);
        formOrdersData.append('deliverName', orderInfo.deliverName);
        formOrdersData.append('deliverPhone', orderInfo.deliverPhone);
        formOrdersData.append('payInformation', orderInfo.payInformation);

        axios.post(`/orders/post`, formOrdersData, {
            headers : {
                'Content-Type' : 'application/x-www-form-urlencoded'
            }
        }).then(createdOrders => {
            console.log("주문 정보 등록 완료");
        })
            .catch(error => console.log('Error creating order: ', error));
        }
    }, [orderInfo]);



    return(
      <div style={{color : "white", display : "grid", placeContent : "center", marginTop : "200px"}}>
          <h1>결제 성공!</h1>
          <div>
              <div>
                  <p>주문자 : {orderInfo.orderName}</p>
              </div>
              <div>
                  <p>결제 금액 : {`${Number(
                      searchParams.get("amount")
                  ).toLocaleString()}`} 원</p>
              </div>
              <br/>
              <div>
                  <p>(무통장 입금으로 결제하신 고객님께서는 계좌 이체를 하셔야 배송이 가능합니다!)</p>
              </div>
              <br/>
              <div>
                  <p>계좌 번호 : 기업은행 01077534135</p>
              </div>
              <div>
                  <p>예금주 : 강태혁</p>
              </div>
              <div>
                  <Link to="/">
                  <button className="modal-button">
                      홈페이지로
                  </button>
                  </Link>
              </div>
          </div>
      </div>
    );
}