import React, { useState,useEffect } from 'react';
import axios from 'axios';
import aCheck from '../../img/info/check_circle.svg'

import '../../styles/myInfo/myInfoAddress.css'

const MyPageAddress = (prop) => {
    const userInfoAddress = prop.userData;


    const [addresses, setAddresses] = useState([]);


    useEffect(() => {
        const fetchAddresses = async () => {
            try {
                const response = await axios.post('/api/address/info', { memberUid: userInfoAddress.memberuid });
                setAddresses(response.data);
            } catch (error) {
                console.error("Error fetching addresses: ", error);
            }
        };

        fetchAddresses();
    }, [userInfoAddress]);

    console.log(addresses);
    return (
        <div className='react-root'>
            <div className="address-container">
            <table className="address-table">
                <thead>
                    <tr>
                        <th>선택</th>
                        <th>수취인명</th>
                        <th>별칭</th>
                        <th>연락처</th>
                        <th>주소</th>
                        <th>수정/삭제</th>
                    </tr>
                </thead>
                <tbody>
    {addresses.map(address => (
        <tr key={address.addressId}> {/* key를 address.addressId로 수정 */}
            <td>
                {address.use !== 1 ? 
                    <button className="m-c-reflect-button">변경</button> 
                    : <img src={aCheck} alt="Checked" className="check-icon" />}
            </td>
            <td className="address-name">{address.addressReceiver}</td> {/* address를 사용하도록 수정 */}
            <td className="address-nickName">
                {address.addressNickname}
            </td>
            <td>{address.memberPhone}</td>
            <td className="address-address">{address.addressValue}</td>
            <td className="address-actions">
                <button className="edit-button">수정</button>
                <button className="delete-button">삭제</button>
            </td>
        </tr>
    ))}
</tbody>
            </table>
        </div>
    </div>
    );
}

export default MyPageAddress;