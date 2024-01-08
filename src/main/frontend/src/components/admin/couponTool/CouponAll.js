import './couponAll.css'
import '../userTool/adminUserFilter.css';
import {useEffect, useState} from 'react';
import axios from "axios";

const CouponAll = () => {
    // 데이터를 상태로 설정
    const [coupons, setCoupons] = useState([]);

    useEffect(() => {
        const fetchCoupons = async () => {
            try {
                const response = await axios.get('/api/coupons/all');
                setCoupons(response.data);
            } catch (error) {
                console.error('Error fetching coupons:', error);
            }
        };

        fetchCoupons();
    }, []);

    const formatDate = (dateArray) => {
        return `${dateArray[0]}-${String(dateArray[1]).padStart(2, '0')}-${String(dateArray[2]).padStart(2, '0')}`;
    };

    return (
        <>
            <div className="user-tool-component">
                <div className="u-t-header">
                    <div className='u-t-h-font'>쿠폰목록</div>
                </div>
            </div>
            <div className="coupon-header">
                    <div className='coupon-header-font'>
 
                    </div>
            </div>  
            <div className="admin-user-filter">
                <div className="a-u-header" 
                style={{ 
                backgroundRepeat: 'no-repeat',
                backgroundPosition: '15px',
                backgroundSize: '25px'}}>
                    <input placeholder='검색'></input>
                    <button className='edit-button'>검색</button>
                </div>
                <div className='header-title'>
                </div>
                <div className="a-u-content">
                    <table className='a-u-table'>
                        <thead>
                        <tr>
                            <th>번호</th>
                            <th>이름</th>
                            <th>할인율</th>
                            <th>발급일</th>
                            <th>사용기간 종료일</th>
                        </tr>
                        </thead>
                        <tbody>
                        {coupons.map((coupon, index) => (
                            <tr key={index}>
                                <td>{coupon.couponId}</td>
                                <td>{coupon.couponName}</td>
                                <td>{`${coupon.couponDiscount}%`}</td>
                                <td>{formatDate(coupon.couponCreateAt)}</td>
                                <td>{formatDate(coupon.couponEndAt)}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default CouponAll;