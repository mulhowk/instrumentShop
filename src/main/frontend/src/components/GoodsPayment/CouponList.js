import '../../components/myPage/inMyCoupon/myPageCouponTab.css';
import {getAuthToken, tokenUserInfo} from "../../global/auth";
import React, {useEffect, useState} from "react";
import axios from "axios";

const CouponList = ({onClose, onSelectCoupon, index = -1}) => {

    const token =  getAuthToken();
    const decodedToken = tokenUserInfo(token);
    const memberUid = decodedToken? decodedToken.UID : null;
    const [memberCoupon, setMemberCoupon] = useState([]);
    const [productNum, setProductNum] = useState(index);

    useEffect(() => {
        axios.get(`/api/coupons/users/coupons/${memberUid}`)
            .then(res => {
                setMemberCoupon(res.data);
            }).catch(error => {
            console.log('Error fetching data:', error );
        });
    }, []);

    const selectCoupon = (coupon) => {
        if(productNum !==-1) {
            const couponInfo = {coupon, productNum};
            onSelectCoupon(couponInfo);
            onClose();
    } else {
            onSelectCoupon(coupon);
            onClose();
        }
    }

    return(
        <>
        <div style={{display : "block", placeContent : "center", margin : "10px", border : "1px solid #AAAAAA"
        , padding : "10px", borderRadius : "5px", cursor : "pointer"}}>
            {memberCoupon.map((coupon) => (
                <div key={coupon.coupon.couponId} className="coupon-content-tab"
                     onClick={() => selectCoupon(coupon.coupon)}>
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
        </div>
            <button onClick={onClose} style={{marginLeft: "300px"}}>닫기</button>
        </>
    );
}

export default CouponList;