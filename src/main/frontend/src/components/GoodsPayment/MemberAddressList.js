import React, { useState,useEffect } from 'react';
import axios from 'axios';
import aCheck from '../../img/info/check_circle.svg'

import '../../styles/myInfo/myInfoAddress.css'

const MemberAddressList = ({userData, onSelectAddress, onClose}) => {
    const userInfoAddress = userData;


    const [addresses, setAddresses] = useState([]);
    const handleAddressData = (addressData) => {
        onSelectAddress(addressData);
        onClose();
    }


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

    return (
        <div className='react-root'>
            <div className="address-container">
                <table className="address-table">
                    <thead>
                    <tr>
                        <th>수취인명</th>
                        <th>별칭</th>
                        <th>연락처</th>
                        <th>주소</th>
                    </tr>
                    </thead>
                    <tbody>
                    {addresses.map(address => (
                        <tr key={address.addressId}
                            onClick={() => handleAddressData(address)}
                        style={{cursor : "pointer"}}> {/* key를 address.addressId로 수정 */}
                            <td className="address-name">{address.addressReceiver}</td> {/* address를 사용하도록 수정 */}
                            <td className="address-nickName">
                                {address.addressNickname}
                            </td>
                            <td>{address.memberPhone}</td>
                            <td className="address-address">{address.addressValue}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default MemberAddressList;