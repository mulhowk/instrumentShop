import '../../components/myPage/inMyCoupon/myPageCouponTab.css';
import {getAuthToken, tokenUserInfo} from "../../global/auth";
import React, {useEffect, useState} from "react";
import axios from "axios";

const CouponList = ({coupon, useCoupon, onSelectCoupon, index = -1, onClose}) => {

    const unUsedCoupon = coupon.filter(coupon => !coupon.used);

    const [memberCoupon, setMemberCoupon] = useState(unUsedCoupon);
    const [productNum, setProductNum] = useState(index);
    const [useCouponList, setUseCouponList] = useState(useCoupon);
    // {console.log(index)}
    // {console.log(useCoupon)}
    // {console.log(coupon)}

    const selectCoupon = (coupon, index) => {
        if(productNum !== -1){
            const couponData = {coupon, productNum}
            const couponInfo = [couponData, index];
            onSelectCoupon(couponInfo);
            onClose();
        } else {
            const couponInfo = [coupon, index];
            onSelectCoupon(couponInfo);
            onClose();
        }

    }

    const handelUseCoupon = () => {
        alert("사용하고 있는 쿠폰입니다!");
    }

    return(
        <>
        <div style={{display : "block", placeContent : "center", margin : "10px"}}>
            {memberCoupon.map((coupon, index) => (
                <div>
                {useCouponList[index] === false ?
                <div key={coupon.coupon.couponId} className="coupon-content-tab"
                     onClick={() => selectCoupon(coupon, index)}>
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
        :
                    <div key={coupon.coupon.couponId} className="coupon-content-tab"
               onClick={handelUseCoupon}>
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
                }
                </div>
            ))}
        </div>
        </>
    );
}

export default CouponList;