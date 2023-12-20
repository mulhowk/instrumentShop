import './myPageCouponTab.css';
import {getAuthToken, tokenUserInfo} from "../../../global/auth";
import {useEffect, useState} from "react";
import axios from "axios";

const MyPageCouponTab = () => {

    const token =  getAuthToken();
    const decodedToken = tokenUserInfo(token);
    const memberUid = decodedToken? decodedToken.UID : null;
    const [memberCoupon, setMemberCoupon] = useState([]);


    useEffect(() => {
        axios.get(`/api/coupons/users/coupons/${memberUid}`)
            .then(res => {
                setMemberCoupon(res.data);
            }).catch(error => {
            console.log('Error fetching data:', error );
        });
    }, []);

    return(
    <>
        {memberCoupon.map((coupon) => (
            <div key={coupon.coupon.couponId} className="coupon-content-tab">
                <div className="coupon-discount">
                    {coupon.coupon.couponDiscount >= 1 ?
                        <span>{coupon.coupon.couponDiscount}% 할인</span>
                        :
                        <span>{coupon.coupon.couponValue}원 할인</span>
                    }
                </div>
                <div className="coupon-title">
                    <span>{coupon.coupon.couponName}</span>
                </div>
                <div className="coupon-description">
                    {coupon.coupon.couponDiscount >= 1 ?
                        <span>최대 5만원 할인</span>
                        :
                        ""
                    }
                </div>
                <div className="coupon-date">
                    <span>{coupon.coupon.couponEndAt[0]}년&nbsp;
                         {coupon.coupon.couponEndAt[1]}월&nbsp;
                         {coupon.coupon.couponEndAt[2]}일 까지 사용 가능</span>
                </div>
            </div>
        ))}
    </>
    );
}

export default MyPageCouponTab;