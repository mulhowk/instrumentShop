import "../../../styles/myInfo/buyList/buyListContent.css"
import { useState,useEffect  } from "react";
import MyBuyList from "./MyBuyList";
import axios from "axios";


function MyBuyInfo(props) {

    const couponPopup = () => {
        const popupWindow = window.open('/pop/couponAdd', '_blank', 'width=500,height=700');
      };

    const memberUid = props.MEMBERUID;
      // 상태를 선언합니다.
    const [myInfo, setMyInfo] = useState({
        reserves: 0,
        couponCount: 0,
        orderCount: 0
    });

    useEffect(() => {
        async function fetchMyInfo() {
            try {
                const accessToken = localStorage.getItem('token');
                const response = await axios.get('/api/user/history', {
                    headers: {
                        'Authorization': `Bearer ${accessToken}`
                    }
                });
                setMyInfo(response.data);
            } catch (error) {
                console.error('데이터를 가져오는 데 실패했습니다:', error);
            }
        }

        fetchMyInfo();
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
                                    <div className="t-small-span">{myInfo.reserves}원</div>
                                </div>
                            </div>
                        </div>
                        <div className="m-c-g-tab-small">
                            <div className="m-c-g-t-header">
                                <p>내 쿠폰</p>
                            </div>
                            <div className="m-c-g-t-content-small" onClick={couponPopup}>
                                <div className="m-c-g-t-c-tab first">
                                    <div className="t-small-span">{myInfo.couponCount}장</div>
                                </div>
                            </div>
                        </div>
                        <div className="m-c-g-tab-small">
                            <div className="m-c-g-t-header">
                                <p>주문배송</p>
                            </div>
                            <div className="m-c-g-t-content-small">
                                <div className="m-c-g-t-c-tab first">
                                    <div className="t-small-span">{myInfo.orderCount}건</div>
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