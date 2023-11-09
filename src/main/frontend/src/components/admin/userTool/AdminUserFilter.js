import React, { useState } from 'react';
import './adminUserFilter.css';
import aMain from '../../../img/info/search_img.png';

const AdminUserFilter = () => {
    // 데이터를 상태로 설정
    const [users, setUsers] = useState([]);

    const userItems = [
        {
            nickname: "홍길동",
            email: "nelp1234@gmail.com",
            userType: "일반사용자",
            registrationDate: "2023-10-30",
            point: 3000,
            amount: 1700000,
            date: "2023/10/25"
        },
        {
            nickname: "한팀장",
            email: "oasdj124@gmail.com",
            userType: "일반사용자",
            registrationDate: "2023-10-30",
            point: 5000,
            amount: 0,
            date: "2023/10/28"
        }
    ]


    return (
        <>
            <div className="admin-user-filter">
                <div className="a-u-header" 
                style={{backgroundImage: `url(${aMain})`, 
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
                                <th>닉네임</th>
                                <th>이메일</th>
                                <th>회원유형</th>
                                <th>가입일</th>
                                <th>적립금</th>
                                <th>누적금액</th>
                                <th>최종 로그인 일자</th>
                            </tr>
                        </thead>
                        <tbody>
                            {userItems.map((user, index) => (
                            <tr key={index}>
                                <td><input type='checkbox'/></td>
                                <td>{user.nickname}</td>
                                <td>{user.email}</td>
                                <td>{user.userType}</td>
                                <td>{user.registrationDate}</td>
                                <td>{user.point}</td>
                                <td>{user.amount}</td>
                                <td>{user.date}</td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default AdminUserFilter;