import React, { useState } from 'react';
import './couponForm.css';
import axios from "axios";
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker, {registerLocale} from 'react-datepicker';
import ko from 'date-fns/locale/ko'; // 한국어 로케일

registerLocale('ko', ko); // 로케일 등록

const CouponForm = () => {


    const [couponData, setCouponData] = useState({
        couponName: '', // 이름
        couponLimit: '', // 최대할인값
        couponDiscount: '', // 할인율
        couponStartAt: new Date(), // 사용 시작일을 오늘 날짜로 초기화
        couponEndAt: new Date(), // 사용 종료일을 오늘 날짜로 초기화
    });

    const handleInputChange = (eventOrDate, name) => {
        if (eventOrDate instanceof Date) {
            setCouponData({
                ...couponData,
                [name]: eventOrDate
            });
        } else {
            const { name, value } = eventOrDate.target;
            setCouponData({
                ...couponData,
                [name]: value
            });
        }
    };
    const handleSubmit = async () => {

        const formattedCouponData = {
            ...couponData,
            couponStartAt: couponData.couponStartAt.toISOString().split('T')[0],
            couponEndAt: couponData.couponEndAt.toISOString().split('T')[0],
        };

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
            <div>
                <span>쿠폰종류</span>
                <div className='coupon-form-select custom-input-white'>
                    <select>
                        <option>자동배포</option>
                        <option>지정배포</option>
                    </select>
                </div>
            </div>
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
                    <span>할인 최대가격</span>
                    <div className='coupon-qty-input custom-input-white'
                         style={{width: '83px', height: '40px'}}>
                        <input
                            style={{width: '78px'}}
                            name="couponLimit"
                            value={couponData.couponLimit}
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
                               name="couponDiscount"
                               value={couponData.couponDiscount}
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
{/*                        <input placeholder='사용시작일을 입력하세요'
                               style={{width: '162px'}}
                               name="couponStartAt"
                               value={couponData.couponStartAt}
                               onChange={handleInputChange}
                        ></input>*/}
                        <DatePicker
                            style={{width: '162px'}}
                            locale="ko" // 한국어 설정
                            dateFormat="yyyy/MM/dd" // 날짜 포맷 설정
                            selected={couponData.couponStartAt}
                            onChange={(date) => handleInputChange(date, 'couponStartAt')}
                        />
                    </div>
                </div>
                <div className='coupon-user-end'>
                    <span>사용종료일</span>
                    <div className='coupon-user-end-input custom-input-white'
                         style={{width:'166px', height:'40px'}}>
{/*                        <input placeholder='사용종료일을 입력하세요'
                               style={{width: '162px'}}
                               name="couponEndAt"
                               value={couponData.couponEndAt}
                               onChange={handleInputChange}
                        ></input>*/}
                        <DatePicker
                            style={{width: '162px'}}
                            locale="ko" // 한국어 설정
                            dateFormat="yyyy/MM/dd" // 날짜 포맷 설정
                            selected={couponData.couponEndAt}
                            onChange={(date) => handleInputChange(date, 'couponEndAt')}
                        />
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