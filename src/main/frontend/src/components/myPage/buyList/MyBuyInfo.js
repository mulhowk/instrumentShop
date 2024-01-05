import "../../../styles/myInfo/buyList/buyListContent.css"
import { useState,useEffect  } from "react";
import MyBuyList from "./MyBuyList";
import axios from "axios";


function MyBuyInfo(props) {

    const couponPopup = () => {
        const popupWindow = window.open('/pop/couponAdd', '_blank', 'width=500,height=700');
      };

    const userData = props.userData;
    {console.log(userData)}

    const memberUid = userData.memberuid;

    const [reserves, setReserves] = useState(0);
    const [coupon, setCoupon] = useState(0);
    const [order, setOrder] = useState(0);

    useEffect(() => {
        async function fetchReserves() {
            try {
                const response = await axios.get(`/api/user/reserves/${memberUid}`);
                setReserves(response.data);
            } catch (error) {
                console.error('데이터를 가져오는 데 실패했습니다:', error);
            }
        }

        async function fetchCoupon(){
            try {
                const response = await axios.get(`/api/coupons/users/coupons/noUse/${memberUid}`);
                setCoupon(response.data);

            } catch (error) {
                console.error('데이터를 가져오는 데 실패했습니다:', error);
            }
        }

        async function fetchOrder(){
            try {
                const response = await axios.get(`/orders/count/${memberUid}`)
                setOrder(response.data);
            } catch (error) {
                console.error('데이터를 가져오는 데 실패했습니다:', error);
            }
        }


        fetchReserves();
        fetchCoupon();
        fetchOrder();
    }, []);


    return (
        
        <>
            <div className="myInfo-content-tab">
                <div className="m-c-group">
                    <div className="m-c-g-small"> 
                        <div className="m-c-g-tab-small">
                            <div className="m-c-g-t-header">
                                <p>포인트</p>
                            </div>
                            <div className="m-c-g-t-content-small">
                                <div className="m-c-g-t-c-tab first">
                                    <div className="t-small-span">{reserves}원</div>
                                </div>
                            </div>
                        </div>
                        <div className="m-c-g-tab-small">
                            <div className="m-c-g-t-header">
                                <p>내 쿠폰</p>
                            </div>
                            <div className="m-c-g-t-content-small" onClick={couponPopup}>
                                <div className="m-c-g-t-c-tab first">
                                    <div className="t-small-span">{coupon}장</div>
                                </div>
                            </div>
                        </div>
                        <div className="m-c-g-tab-small">
                            <div className="m-c-g-t-header">
                                <p>주문배송</p>
                            </div>
                            <div className="m-c-g-t-content-small">
                                <div className="m-c-g-t-c-tab first">
                                    <div className="t-small-span">{order}건</div>
                                </div>
                            </div>
                        </div>
                    </div>                                    
                    <div className="null-space" />
                    <div className="m-c-g-tab">
                        <div className="m-c-g-t-header">
                            <p>구매 내역</p>
                        </div>
                        <div className="m-c-g-t-buy-content">
                            {/* 구매내역 */}
                            <MyBuyList MEMBERUID = {memberUid}/>
                        </div>                        
                    </div>
                    <div className="null-space" />
                </div>
            </div>
        </>
    );
}

export default MyBuyInfo;