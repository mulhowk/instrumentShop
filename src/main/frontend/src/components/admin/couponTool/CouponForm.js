import React, { useState } from 'react';
import './couponForm.css';

const CouponForm = () => {

  return (
    <>
    <div className='tab-header-coupon'>
        <div className='t-h-c-title'>
            <span>쿠폰배포</span>
        </div>
        <div className='coupon-form'>
            <div className='coupon-title'>
                <span>쿠폰이름</span>
                <div className='coupon-title-input custom-input-white'>
                    <input placeholder='쿠폰이름을 입력하세요'></input>
                </div>
            </div>
            <div className='coupon-table-frist'>
                <div className='coupon-qty'>
                    <span>쿠폰수량</span>
                    <div className='coupon-qty-input custom-input-white'
                    style={{width:'53px', height:'40px'}}>
                        <input
                        style={{width: '48px'}}></input>
                    </div>
                </div>
                <div className='coupon-sale'>
                    <span>할인율(%)</span>
                    <div className='coupon-sale-input custom-input-white'
                    style={{width:'53px', height:'40px'}} >
                        <input placeholder='할인율을 입력하세요'
                        style={{width: '48px'}}></input>
                    </div>
                </div>
                <div className='coupon-category'>
                    <span>카테고리</span>
                    <div className='coupon-category-input custom-input-white'
                    style={{width:'166px', height:'40px'}}>
                        <input placeholder='카테고리를 입력하세요'
                        style={{width: '162px'}}></input>
                    </div>
                </div>
            </div>
            <div className='coupon-table-date'>
                <div className='coupon-date-start'>
                    <span>배포시작일</span>
                    <div className='coupon-date-start-input custom-input-white'
                    style={{width:'166px', height:'40px'}}>
                        <input placeholder='시작일을 입력하세요'
                        style={{width: '162px'}}></input>
                    </div>
                </div>
                <div className='coupon-date-end'>
                    <span>배포종료일</span>
                    <div className='coupon-date-end-input custom-input-white'
                    style={{width:'166px', height:'40px'}}>
                        <input placeholder='종료일을 입력하세요'
                        style={{width: '162px'}}></input>
                    </div>
                </div>
            </div>
            <div className='couppon-table-user'>
                <div className='coupon-use-start'>
                    <span>사용시작일</span>
                    <div className='coupon-use-start-input custom-input-white'
                    style={{width:'166px', height:'40px'}}>
                        <input placeholder='사용시작일을 입력하세요'
                        style={{width: '162px'}}></input>
                    </div>
                </div>
                <div className='coupon-user-end'>
                    <span>사용종료일</span>
                    <div className='coupon-user-end-input custom-input-white'
                    style={{width:'166px', height:'40px'}}>
                        <input placeholder='사용종료일을 입력하세요'
                        style={{width: '162px'}}></input>
                    </div>
                </div>
            </div>
            <div className='coupon-table-button'>
                <div className='c-t-btn'>
                    <button className='c-t-btn-save'>저장</button>
                    <button className='c-t-btn-cancel'>취소</button>
                </div>
            </div>
        </div>
    </div>
    </>
  );
};

export default CouponForm;