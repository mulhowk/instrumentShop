import React, { useState } from 'react';
import './couponForm.css';
import axios from "axios";

const CouponForm = () => {


    const [couponData, setCouponData] = useState({
        couponName: '',
        couponQuantity: '',
        discountRate: '',
        category: '',
        startDate: '',
        endDate: '',
        useStartDate: '',
        useEndDate: ''
    });

    const handleInputChange = (e) => {
        setCouponData({
            ...couponData,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = async () => {
        // 서버에 데이터 전송하는 로직
        try {
            const response = await axios.post('/api/coupons/distribute', { coupon: couponData });
            console.log(response.data);
            alert('쿠폰이 성공적으로 배포되었습니다.');
        } catch (error) {
            console.error('Error sending coupon data:', error);
        }
    };

  return (
    <>
    <div className='tab-header-coupon'>
    <div className="a-n-c-header">
                    <div className='a-n-c-header-font'>
                    <span>쿠폰배포</span>
                    </div>
                </div>  
        <div className='coupon-form'>
            <div className='coupon-title'>
                <span>쿠폰이름</span>
                <div className='coupon-title-input custom-input-white'>
                    <input placeholder='쿠폰이름을 입력하세요'
                           name="couponName"
                           value={couponData.couponName}
                           onChange={handleInputChange}
                    ></input>
                </div>
            </div>
            <div className='coupon-table-frist'>
                <div className='coupon-qty'>
                    <span>쿠폰수량</span>
                    <div className='coupon-qty-input custom-input-white'
                         style={{width: '53px', height: '40px'}}>
                        <input
                            style={{width: '48px'}}
                            name="couponQuantity"
                            value={couponData.couponQuantity}
                            onChange={handleInputChange}
                        ></input>
                    </div>
                </div>
                <div className='coupon-sale'>
                    <span>할인율(%)</span>
                    <div className='coupon-sale-input custom-input-white'
                         style={{width: '53px', height: '40px'}}>
                        <input placeholder='할인율을 입력하세요'
                               style={{width: '48px'}}
                               name="discountRate"
                               value={couponData.discountRate}
                               onChange={handleInputChange}
                        ></input>
                    </div>
                </div>
                {/* 카테고리 필드 제거 */}
            </div>
            <div className='coupon-table-date'>
                <div className='coupon-date-start'>
                    <span>배포시작일</span>
                    <div className='coupon-date-start-input custom-input-white'
                         style={{width: '166px', height: '40px'}}>
                        <input placeholder='시작일을 입력하세요'
                               style={{width: '162px'}}
                               name="startDate"
                               value={couponData.startDate}
                               onChange={handleInputChange}
                        ></input>
                    </div>
                </div>
                <div className='coupon-date-end'>
                    <span>배포종료일</span>
                    <div className='coupon-date-end-input custom-input-white'
                         style={{width: '166px', height: '40px'}}>
                        <input placeholder='종료일을 입력하세요'
                               style={{width: '162px'}}
                               name="endDate"
                               value={couponData.endDate}
                               onChange={handleInputChange}
                        ></input>
                    </div>
                </div>
            </div>
            <div className='couppon-table-user'>
                <div className='coupon-use-start'>
                    <span>사용시작일</span>
                    <div className='coupon-use-start-input custom-input-white'
                         style={{width: '166px', height: '40px'}}>
                        <input placeholder='사용시작일을 입력하세요'
                               style={{width: '162px'}}
                               name="useStartDate"
                               value={couponData.useStartDate}
                               onChange={handleInputChange}
                        ></input>
                    </div>
                </div>
                <div className='coupon-user-end'>
                    <span>사용종료일</span>
                    <div className='coupon-user-end-input custom-input-white'
                         style={{width:'166px', height:'40px'}}>
                        <input placeholder='사용종료일을 입력하세요'
                               style={{width: '162px'}}
                               name="useEndDate"
                               value={couponData.useEndDate}
                               onChange={handleInputChange}
                        ></input>
                    </div>
                </div>
            </div>
            <div className='coupon-table-button'>
                <div className='c-t-btn'>
                    <button className='c-t-btn-save' onClick={handleSubmit}>저장</button>
                    <button className='c-t-btn-cancel'>취소</button>
                </div>
            </div>
        </div>
    </div>
    </>
  );
};

export default CouponForm;