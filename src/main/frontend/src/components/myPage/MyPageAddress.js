import React, { useState } from 'react';

import aCheck from '../../img/info/check_circle.svg'

import '../../styles/myInfo/myInfoAddress.css'

const MyPageAddress = () => {

    const [addresses, setAddresses] = useState([
        {
            id: '1',
            name: '함형우',
            nickName: '집',
            mainAddress: '경기도 안양시 만안구 박달로 31, 25 207호',
            detailAddress: '경기도 안양시 만안구 박달로 111-1, 번영빌딩 25 207호',
            contact: '010-2344-7239',
            rank: 1
        },
        {
            id: '2',
            name: '강태혁',
            nickName: '집',
            mainAddress: '경기도 안양시 충훈로 34길 23',
            detailAddress: '경기도 안양시 만안구 3길 2학2이',
            contact: '010-1549-7842',
            rank: 0
        }
        //... 다른 주소 데이터
    ]);

    return (
        <div className="address-container">
        <table className="address-table">
            <thead>
                <tr>
                    <th>선택</th>
                    <th>수취인명</th>
                    <th>별칭</th>
                    <th>주소</th>
                    <th>수정/삭제</th>
                </tr>
            </thead>
            <tbody>
                {addresses.map(address => (
                    <tr key={address.id}>
                        <td>
                            {address.rank !== 1 ? 
                                <button className="m-c-reflect-button">변경</button> 
                                : <img src={aCheck} alt="Checked" className="check-icon" />}
                        </td>
                        <td className="address-name">{address.name}</td>
                        <td className="address-nickName">
                            {address.nickName}
                        </td>
                        <td className="address-address">{address.mainAddress}</td>
                        <td className="address-actions">
                            <button className="edit-button">수정</button>
                            <button className="delete-button">삭제</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    );
}

export default MyPageAddress;