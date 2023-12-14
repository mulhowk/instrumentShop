import './couponAll.css'
import '../userTool/adminUserFilter.css';
import { useState } from 'react';

const CouponAll = () => {
    // 데이터를 상태로 설정
    const [users, setUsers] = useState([]);

    const couponAll = [
        {
            번호: "1",
            이름: "전체 상품 할인",
            할인율: "20%",
            발급일: "2023-12-05",
            사용기간종료일: "2023-10-30"
        }
    ]


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
                                <th>
                                    <input type='checkbox'/>
                                </th>
                                <th>번호</th>
                                <th>이름</th>
                                <th>할인율</th>
                                <th>발급일</th>
                                <th>사용기간종료일</th>
                            </tr>
                        </thead>
                        <tbody>
                            {couponAll.map((user, index) => (
                            <tr key={index}>
                                <td><input type='checkbox'/></td>
                                <td>{user.번호}</td>
                                <td>{user.이름}</td>
                                <td>{user.할인율}</td>
                                <td>{user.발급일}</td>
                                <td>{user.사용기간종료일}</td>
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