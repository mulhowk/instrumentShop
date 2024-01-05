import {Link, useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import { format, parseISO} from 'date-fns';
import {getAuthToken} from "../../../global/auth";


export function SuccessPage() {
    const [searchParams] = useSearchParams();
    const [orderInfo, setOrderInfo] = useState([]);
    const [orderId, setOrderId] = useState();
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
        const token =  getAuthToken() || null;

        if(token !== null){
        if(orderInfo.length !==0){
            {console.log(orderInfo.goodsId)}

        const formOrdersData = new FormData();

        formOrdersData.append('goodsId', orderInfo.goodsId);
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
            setOrderId(createdOrders.data.orderId);
            console.log("주문 정보 등록 완료");
        })
            .catch(error => console.log('Error creating order: ', error));

            function updateGoodsData(goodsId, goodsSellcount) {
                {console.log(goodsId)}
                {console.log(goodsSellcount)}
                const formGoodsData = new FormData();
                formGoodsData.append('goodsId', goodsId);
                formGoodsData.append('goodsSellcount', goodsSellcount);

                return axios.post(`/goodsPayment/update`, formGoodsData, {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                });
            }

            async function sendPostRequests() {
                if (Array.isArray(orderInfo.goodsId)) {
                    const goodsId = orderInfo.goodsId;
                    const goodsQuantity = orderInfo.goodsQuantity;
                    {
                        console.log(goodsId)
                    }
                    {
                        console.log(goodsQuantity)
                    }

                    // Promise 배열 생성
                    const promises = [];

                    for (let i = 0; i < goodsId.length; i++) {
                        const currentGoodsId = goodsId[i];
                        const currentGoodsQuantity = goodsQuantity[i];
                        const promise = await updateGoodsData(currentGoodsId, currentGoodsQuantity);
                        {
                            console.log(promise)
                        }
                        promises.push(promise);
                    }

                    try {
                        // 모든 Promise가 완료될 때까지 기다림
                        const updatedGoodsArray = await Promise.all(promises);
                        {
                            console.log(promises)
                        }
                        console.log("모든 상품 판매수, 재고 업데이트 완료");
                        // 여기에서 updatedGoodsArray를 사용하여 추가적인 처리 가능
                    } catch (error) {
                        console.error('Error updating sellCount: ', error);
                    }

                } else if(!Array.isArray(orderInfo.goodsId)){
                    const goodsId = orderInfo.goodsId;
                    const goodsQuantity = orderInfo.goodsQuantity;

                    const goodsIdArray = [goodsId];
                    const goodsQuantityArray = [goodsQuantity];

                    // Promise 배열 생성
                    const promises = [];

                    for (let i = 0; i < goodsIdArray.length; i++) {
                        const currentGoodsId = goodsIdArray[i];
                        const currentGoodsQuantity = goodsQuantityArray[i];
                        const promise = await updateGoodsData(currentGoodsId, currentGoodsQuantity);
                        {
                            console.log(promise)
                        }
                        promises.push(promise);
                    }

                    try {
                        // 모든 Promise가 완료될 때까지 기다림
                        const updatedGoodsArray = await Promise.all(promises);
                        {
                            console.log(promises)
                        }
                        console.log("모든 상품 판매수, 재고 업데이트 완료");
                        // 여기에서 updatedGoodsArray를 사용하여 추가적인 처리 가능
                    } catch (error) {
                        console.error('Error updating sellCount: ', error);
                    }

                }
            }

            sendPostRequests();

        if(orderInfo.useCoupon.length === 1){
            const formUserCouponData = new FormData();
            const dateArray = orderInfo.useCoupon[0].assignedDate;
            const localDate = format(new Date(dateArray[0], dateArray[1] - 1, dateArray[2])
                , 'yyyy-MM-dd')

            formUserCouponData.append('Id', orderInfo.useCoupon[0].id);
            formUserCouponData.append('users', orderInfo.useCoupon[0].users.memberuid);
            formUserCouponData.append('used', orderInfo.useCoupon[0].used);
            formUserCouponData.append('coupon', orderInfo.useCoupon[0].coupon.couponId);
            formUserCouponData.append('assignedDate', localDate);

            axios.post(`/api/coupons/users/coupons/update`, formUserCouponData,{
                headers : {
                    'Content-Type' : 'application/x-www-form-urlencoded'
                }
            }).then(createdOrders => {
                console.log("쿠폰 정보 등록 완료");
            })
                .catch(error => console.log('Error creating order: ', error));

        } else if(orderInfo.useCoupon.length >= 2){
            orderInfo.useCoupon.forEach((obj) => {
                const formUserCouponData = new FormData();

                formUserCouponData.append('Id', obj.id);
                formUserCouponData.append('users', obj.users);
                formUserCouponData.append('used', obj.used);
                formUserCouponData.append('coupon', obj.coupon);
                formUserCouponData.append('assignedDate', obj.assignedDate);

                axios.post(`/api/coupons/users/coupons/update`, formUserCouponData,{
                    headers : {
                        'Content-Type' : 'application/x-www-form-urlencoded'
                    }
                }).then(createdOrders => {
                    console.log("쿠폰 정보 등록 완료");
                })
                    .catch(error => console.log('Error creating order: ', error));

            })
        }

        const formUserReservesData = new FormData();

        formUserReservesData.append('MEMBERUID', orderInfo.MEMBERUID);
        formUserReservesData.append('memberReserves', orderInfo.reserves);

        axios.post(`/api/user/reserves`, formUserReservesData, {
            headers : {
                'Content-Type' : 'application/x-www-form-urlencoded'
            }
        }).then(createdOrders => {
            console.log("유저 정보 업데이트 완료");
        })
            .catch(error => console.log('Error creating order: ', error));

        }
        }
        else {
            if(orderInfo.length !==0){
                {console.log(orderInfo.goodsId)}

                const formOrdersData = new FormData();

                formOrdersData.append('goodsId', orderInfo.goodsId);
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
                    setOrderId(createdOrders.data.orderId);
                    console.log("주문 정보 등록 완료");
                })
                    .catch(error => console.log('Error creating order: ', error));

                function updateGoodsDatas(goodsId, goodsSellcount) {
                    const formGoodsData = new FormData();
                    formGoodsData.append('goodsId', goodsId);
                    formGoodsData.append('goodsSellcount', goodsSellcount);

                    return axios.post(`/goodsPayment/update`, formGoodsData, {
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded',
                        },
                    });
                }

                async function sendPostRequest() {
                    {console.log("여기 거치긴 함?")}
                    const goodsId = orderInfo.goodsId;
                    const goodsQuantity = orderInfo.goodsQuantity;

                    // Promise 배열 생성
                    const promises = [];

                    for (let i = 0; i < goodsId.length; i++) {
                        const currentGoodsId = goodsId[i];
                        const currentGoodsQuantity = goodsQuantity[i];
                        const promise = await updateGoodsDatas(currentGoodsId, currentGoodsQuantity);
                        {console.log(promise)}
                        promises.push(promise);
                    }

                    try {
                        // 모든 Promise가 완료될 때까지 기다림
                        const updatedGoodsArray = await Promise.all(promises);
                        {console.log(promises)}
                        console.log("모든 상품 판매수, 재고 업데이트 완료");
                        // 여기에서 updatedGoodsArray를 사용하여 추가적인 처리 가능
                    } catch (error) {
                        console.error('Error updating sellCount: ', error);
                    }
                }

                sendPostRequest();

                }
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
              <div>
                  <p>주문 번호 : {orderId}</p>
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