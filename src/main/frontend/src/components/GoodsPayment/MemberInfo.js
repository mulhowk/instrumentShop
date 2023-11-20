import React, {useState} from 'react';
import "../../styles/GoodsPayment/MemberInfo.css"
import DaumPostcode from "react-daum-postcode"

function MemberInfo(){

    const [address, setAddress] = useState('');
    const [postcode, setPostcode] = useState('');
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

        setAddress(selectedAddress);
        setPostcode(selectedPostcode);
        setPopupOpen(false);
    };

    const handleClosePopup = () => {
        setPopupOpen(false);
    };


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
                        <input type="text" id="name"></input>
                    </div>
                </div>
                <div className="member-orderInfo-email">
                    <div className="member-orderInfo-email-title">
                        <p>이메일</p>
                    </div>
                    <div className="member-orderInfo-email-email">
                        <input type="text" id="email"></input>
                    </div>
                </div>
                <div className="member-orderInfo-num">
                    <div className="member-orderInfo-num-title">
                        <p>연락처</p>
                    </div>
                    <div className="member-orderInfo-num-num">
                        <input type="text" id="num"></input>
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
                        <input type="text" id="name"></input>
                    </div>
                </div>
                <div className="member-orderInfo-num">
                    <div className="member-orderInfo-num-title">
                        <p>연락처</p>
                    </div>
                    <div className="member-orderInfo-num-num">
                        <input type="text" id="num"></input>
                    </div>
                </div>
                <div className="member-orderInfo-address">
                    <div className="member-orderInfo-address-title">
                        <p>주소</p>
                    </div>
                    <div className="member-orderInfo-address-address">
                        <div className="member-orderInfo-address-address-num">
                            <input type="text" id="address-num" value={postcode} readOnly></input>
                            <button onClick={() => setPopupOpen(true)}>주소검색</button>
                        </div>
                        <div className="member-orderInfo-address-address-detail">
                            <input type="text" id="address-content" value={address} readOnly></input>
                            <input type="text" id="detail" style={{marginLeft : "10px"}} readOnly></input>
                        </div>
                    </div>
                </div>
                <div className="member-orderInfo-ordermsg">
                    <div className="member-orderInfo-ordermsg-title">
                        <p>주문메세지</p>
                    </div>
                    <div className="member-orderInfo-ordermsg-ordermsg">
                        <input type="text" id="ordermsg"></input>
                    </div>
                </div>
                <div className="member-orderInfo-delivermsg">
                    <div className="member-orderInfo-delivermsg-title">
                        <p>배송메세지</p>
                    </div>
                    <div className="member-orderInfo-delivermsg-delivermsg">
                        <input type="text" id="delivermsg"></input>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MemberInfo;