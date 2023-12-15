import MyPageCouponTab from "./MyPageCouponTab";
import './myPageCoupon.css';

const MyPageCoupon = () => {
    return (
<>
        <div className="mypage-coupon">
            <div className="mypage-coupon-header">
                <div>
                    <span>쿠폰</span>
                </div>
            </div>
            <div className="coupon-content">
                <MyPageCouponTab />
            </div>
        </div>
</>
    );
}

export default MyPageCoupon;