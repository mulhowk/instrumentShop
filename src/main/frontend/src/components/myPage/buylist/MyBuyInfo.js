import "../../../styles/myInfo/buyList/buyListContent.css"
import { useState,useEffect  } from "react";
import MyBuyList from "./MyBuyList";

function MyBuyInfo() {

      // 상태를 선언합니다.
  const [points, setPoints] = useState(null);
  const [coupons, setCoupons] = useState(null);
  const [reviews, setReviews] = useState(null);

  // 더미 데이터
  const dummyData = {
    points: [
        {amount: "1000" },
    ],
    coupons: [
        { name: '10% 할인 쿠폰' }, 
        { name: '무료 배송 쿠폰' }
    ],
    reviews: [
        { title: '좋은 제품이에요' }, 
        { title: '만족합니다' }
    ]
  };

    // 컴포넌트가 마운트될 때 더미 데이터를 상태로 설정합니다.
    useEffect(() => {
        // 포인트 정보를 설정합니다.
        setPoints(dummyData.points);
        // 쿠폰 정보를 설정합니다.
        setCoupons(dummyData.coupons);
        // 리뷰 정보를 설정합니다.
        setReviews(dummyData.reviews);
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
                                    <div className="t-small-span">{dummyData.points[0].amount} 원</div>
                                </div>
                            </div>
                        </div>
                        <div className="m-c-g-tab-small">
                            <div className="m-c-g-t-header">
                                <p>내 쿠폰</p>
                            </div>
                            <div className="m-c-g-t-content-small">
                                <div className="m-c-g-t-c-tab first">
                                    <div className="t-small-span">{dummyData.coupons.length} 장</div>
                                </div>
                            </div>
                        </div>
                        <div className="m-c-g-tab-small">
                            <div className="m-c-g-t-header">
                                <p>내 리뷰보기</p>
                            </div>
                            <div className="m-c-g-t-content-small">
                                <div className="m-c-g-t-c-tab first">
                                    <div className="t-small-span">{dummyData.reviews.length} 건</div>
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
                            <MyBuyList />
                        </div>                        
                    </div>
                    <div className="null-space" />
                </div>
            </div>
        </>
    );
}

export default MyBuyInfo;