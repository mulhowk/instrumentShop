import React, {useEffect, useState} from 'react';
import "../../styles/GoodsPayment/MemberInfo.css"
import DaumPostcode from "react-daum-postcode"
import {getAuthToken, tokenUserInfo} from "../../global/auth";
import CouponList from "./CouponList";
import Modal from "react-modal";
import axios from "axios";
import MemberAddressList from "./MemberAddressList";

function MemberInfo({ onMemberInfoChange }){

    const token =  getAuthToken();
    const decodedToken = token? tokenUserInfo(token) : null;
    const memberUid = decodedToken.UID;
    const [userData, setUserData] = useState();

    const [deliverAddress, setDeliverAddress] = useState('');
    const [address, setAddress] = useState('');
    const [postcode, setPostcode] = useState('');
    const [detailAddress, setDetailAddress] = useState('');

    const [isMemberAddress, setIsMemberAddress] = useState(false);

    useEffect(() => {
        setDeliverAddress(postcode + " " + address + " " + detailAddress);
    }, [address, postcode, detailAddress]);

    const handleAddressData = (addressData) => {
        setIsMemberAddress(true);
        setAddress(addressData.addressValue);
        setPostcode(addressData.addressPostnumber);
        setDeliverAddress("");
        setDeliverName(addressData.addressReceiver);
        setDeliverPhone(addressData.memberPhone);
    }

    useEffect(() => {
        const fetchUserData = () => {
            axios.post('/api/user/info', { memberUid: memberUid })
                .then(response => {
                    setUserData(response.data);
                    console.log(response.data);
                })
                .catch(error => {
                    console.error("Error fetching user data: ", error);
                });
        };

        fetchUserData();
    }, []);

    const [orderName, setOrderName] = useState(decodedToken? decodedToken.name : '');

    const handleOrderName = (e) => {
        setOrderName(e.target.value);

    }

    const [orderEmail, setOrderEmail] = useState(decodedToken? decodedToken.sub : '');

    const handleOrderEmail = (e) => {
        setOrderEmail(e.target.value);
    }

    const [orderPhone, setOrderPhone] = useState(decodedToken? decodedToken.phone : '');

    const handleOrderPhone = (e) => {
        setOrderPhone(e.target.value);
    }

    const [deliverName, setDeliverName] = useState('');

    const handelDeliverName = (e) => {
        setDeliverName(e.target.value);
    }

    const [deliverPhone, setDeliverPhone] = useState('');

    const handelDeliverPhone = (e) => {
        setDeliverPhone(e.target.value);
    }

    const [orderMsg, setOrderMsg] = useState('');

    const handelOrderMsg = (e) => {
        setOrderMsg(e.target.value);
    }

    const [deliverMsg, setDeliverMsg] = useState('');

    const handelDeliverMsg = (e) => {
        setDeliverMsg(e.target.value);
    }

    const handelDetailAddress = (e) => {
        setDetailAddress(e.target.value);
    }

    const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);

    const customStyles = {
        overlay : {
            backgroundColor : 'rgba(0,0,0,0.5)'
        },
        content : {
            width : '50%',
            margin : 'auto',
            borderRadius : '8px',
            boxShadow : '0 0 10px rgba(0,0,0,0.3)'
        }
    };

    const openAddressModal = () => {
        setIsAddressModalOpen(true);
    }

    const closeAddressModal = () => {
        setIsAddressModalOpen(false);
    }

    const [isPopupOpen, setPopupOpen] = useState(false);

    const daumStyle = {
        display : 'block',
        position : 'absolute',
        zIndex : 1000,
        width : '500px',
        height : '500px'
    };

    const handleComplete = (data) => {
        const fullAddress = data.address;
        const selectedAddress = data.addressType === 'R' ? data.address : data.jibunAddress;
        const selectedPostcode = data.zonecode;

        setIsMemberAddress(false);
        setAddress(selectedAddress);
        setPostcode(selectedPostcode);
        setPopupOpen(false);
    };

    const handleClosePopup = () => {
        setPopupOpen(false);
    };

    useEffect(() => {
        const memberInfo = {
            orderName : orderName,
            orderEmail : orderEmail,
            orderPhone : orderPhone,
            deliverName : deliverName,
            deliverPhone : deliverPhone,
            deliverAddress : deliverAddress,
            orderMsg : orderMsg,
            deliverMsg : deliverMsg
        }

        onMemberInfoChange(memberInfo);

    }, [orderName, orderEmail, orderPhone, deliverName, deliverPhone, deliverAddress, orderMsg, deliverMsg]);


    return(
        <div className="member-info">
            <div className="member-orderInfo">
                <div className="member-orderInfo-title">
                    <p>주문자정보</p>
                </div>
                {isPopupOpen && (
                    <div className="popup-overlay">
                        <DaumPostcode
                            onComplete={handleComplete}
                            autoClose
                            onAutoClose={handleClosePopup}
                            style={daumStyle}
                        />
                    </div>
                )}
                <div className="member-orderInfo-name">
                    <div className="member-orderInfo-name-title">
                        <p>이름</p>
                    </div>
                    <div className="member-orderInfo-name-name">
                        <input type="text" id="name" value={orderName}
                        onChange={handleOrderName}/>
                    </div>
                </div>
                <div className="member-orderInfo-email">
                    <div className="member-orderInfo-email-title">
                        <p>이메일</p>
                    </div>
                    <div className="member-orderInfo-email-email">
                        <input type="text" id="email" value={orderEmail}
                        onChange={handleOrderEmail}/>
                    </div>
                </div>
                <div className="member-orderInfo-num">
                    <div className="member-orderInfo-num-title">
                        <p>연락처</p>
                    </div>
                    <div className="member-orderInfo-num-num">
                        <input type="text" id="num" value={orderPhone}
                        onChange={handleOrderPhone}/>
                    </div>
                </div>
                <div className="member-orderInfo-title" style={{marginTop : "50px"}}>
                    <p>배송 정보</p>
                </div>
                <div className="member-orderInfo-name">
                    <div className="member-orderInfo-name-title">
                        <p>이름</p>
                    </div>
                    <div className="member-orderInfo-name-name">
                        <input type="text" id="name" value={deliverName}
                        onChange={handelDeliverName}/>
                    </div>
                </div>
                <div className="member-orderInfo-num">
                    <div className="member-orderInfo-num-title">
                        <p>연락처</p>
                    </div>
                    <div className="member-orderInfo-num-num">
                        <input type="text" id="num" value={deliverPhone}
                        onChange={handelDeliverPhone}/>
                    </div>
                </div>
                <div className="member-orderInfo-address">
                    <div className="member-orderInfo-address-title">
                        <p>주소</p>
                    </div>
                    <Modal
                        isOpen = {isAddressModalOpen}
                        onRequestClose = {closeAddressModal}
                        style={customStyles}
                    >
                        <MemberAddressList
                            onClose = {closeAddressModal}
                            userData = {userData}
                            onSelectAddress = {handleAddressData}
                        />
                        <button className="modal-button" onClick={closeAddressModal}>닫기</button>
                    </Modal>
                    <div className="member-orderInfo-address-address">
                        <div className="member-orderInfo-address-address-num">
                            <input type="text" id="address-num" value={postcode} readOnly></input>
                            <button onClick={() => setPopupOpen(true)}>주소검색</button>
                            {decodedToken?
                                <button style={{backgroundColor : "red", borderColor : "red"}}
                                onClick={openAddressModal}>
                                    저장된 주소
                                </button>
                                :
                                ""
                            }
                        </div>
                        {!isMemberAddress ?
                        <div className="member-orderInfo-address-address-detail">
                                <input type="text" id="address-content" value={address} readOnly/>
                                <input type="text" id="detail" style={{marginTop : "10px"}} value={detailAddress}
                                       onChange={handelDetailAddress}/>
                        </div>
                            :
                            <div className="member-orderInfo-address-address-detail">
                                <input type="text" id="address-content" value={address} readOnly/>
                            </div>
                        }
                    </div>
                </div>
                <div className="member-orderInfo-ordermsg">
                    <div className="member-orderInfo-ordermsg-title">
                        <p>주문메세지</p>
                    </div>
                    <div className="member-orderInfo-ordermsg-ordermsg">
                        <input type="text" id="ordermsg" value={orderMsg}
                        onChange={handelOrderMsg}/>
                    </div>
                </div>
                <div className="member-orderInfo-delivermsg">
                    <div className="member-orderInfo-delivermsg-title">
                        <p>배송메세지</p>
                    </div>
                    <div className="member-orderInfo-delivermsg-delivermsg">
                        <input type="text" id="delivermsg" value={deliverMsg}
                        onChange={handelDeliverMsg}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MemberInfo;