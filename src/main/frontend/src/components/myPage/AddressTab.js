import { useState } from "react";
import PopupPostCode from "./AddAddress";
import PopupDom from "./PopupDom";
import '../../styles/myInfo/addressTab.css'
function AddressTab() {
    // 팝업창 상태 관리
    const [isPopupOpen, setIsPopupOpen] = useState(false)
    const [postNumber, setPostNumber] = useState('')
    // 주소 정보를 상태로 관리합니다.
    const [addressData, setAddressData] = useState({
        addressNickname: '',
        addressReceiver: '',
        addressPhone1: '',
        addressPhone2: '',
        addressPhone3: '',
        addressDetail: '',
        deliveryAddress: '',
        postNumber: ''

    });
    const [jibunAddress, setJibunAddress] = useState();

    // 폼 필드 변경 핸들러
    const handleChange = (e) => {
        setAddressData({ ...addressData, [e.target.name]: e.target.value });
    };

    // '등록' 버튼 클릭 이벤트 핸들러
    const handleSubmit = async () => {

        // 전화번호 결합
        const fullPhoneNumber = `${addressData.addressPhone1}${addressData.addressPhone2}${addressData.addressPhone3}`;
        // 상세주소 결합
        const fullAddressValue = `${addressData.deliveryAddress} ${addressData.addressDetail}`;

        try {
            fetch('/api/address/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    memberUid: 2,
                    addressNickname: addressData.addressNickname,
                    addressName: addressData.addressName,
                    memberPhone: fullPhoneNumber,
                    addressPostnumber: postNumber,
                    addressValue: fullAddressValue
                })

            })
                .then(response => response.json())
                .then(data => console.log(data))
                .catch(error => console.error('Error:', error));

        } catch (error) {
            console.error('Error saving address:', error);
        }
    };

    // PopupPostCode 컴포넌트로부터 주소 데이터를 받아 상태를 업데이트하는 함수입니다.
    const handleAddressSelect = (data) => {
        console.log(data);

        setJibunAddress(data.address);
        setPostNumber(data.zonecode);
        
    };
 
    // 팝업창 열기
    const openPostCode = () => {
        setIsPopupOpen(true)
    }
    // 팝업창 닫기
    const closePostCode = () => {
        setIsPopupOpen(false)
    }

    return (    
        <>
          <div className="member-ssg-com-by" style={{backgroundColor:"white", height:"100%", overflow:"hidden", paddingBottom:"20px"}} >
      <div className="div-pop-content">
        <div className="div-delivery-reg">
          <div className="form-fieldset">
            <div className="table">
              <div className="body">
                <div className="row">
                  <div className="cell">
                    <div className="div">주소별칭</div>
                  </div>
                    <div className="data">
                        <input
                            className="input input-address-nick"
                            name="addressNickname"
                            value={addressData.addressNickname}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                  <div className="row">
                      <div className="label-wrapper">
                          <div className="label">받는 분</div>
                      </div>
                      <div className="data-2">
                          <input
                              className="input input-address-name"
                              name="addressName"
                              value={addressData.addressName}
                              onChange={handleChange}
                          />
                          <div className="element">10자 이내</div>
                      </div>
                  </div>
                  <div className="row">
                      <div className="div-wrapper">
                          <div className="div">휴대폰</div>
                      </div>
                      <div className="data-3">
                          <div className="text-wrapper-2"></div>
                          <input
                              className="input-1 input-adress-phone1"
                              name="addressPhone1"
                              value={addressData.addressPhone1}
                              onChange={handleChange}
                          />
                          <div className="text-wrapper-3"></div>
                          <input
                              className="input-2 input-adress-phone1"
                              name="addressPhone2"
                              value={addressData.addressPhone2}
                              onChange={handleChange}
                          />
                          <div className="text-wrapper-4"></div>
                          <input
                              className="input-3 input-adress-phone1"
                              name="addressPhone3"
                              value={addressData.addressPhone3}
                              onChange={handleChange}
                          />
                      </div>
                  </div>
                  <div className="row-2">
                      <div className="cell-3">
                          <div className="div">배송주소</div>
                      </div>
                      <div className="data-5">
                          <input
                              className="input-6"
                              name="addressPostNumber"
                              value={postNumber}
                              onChange={handleChange}/>
                          <div className="span-wrapper">
                              <div className="span">
                                  <div className="text-wrapper-8" onClick={openPostCode} >우편번호찾기</div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
            </div>
          </div>
            { jibunAddress && (
            <div className="div-address-txt">
                <div className="input-detail-span">
                    <span className="span-1">상세주소</span>
                </div>
                <div className="address-detail-div">
                <p>{jibunAddress}</p>
                <input
                    className="input input-address-detail"
                    name="addressName"
                    value={addressData.addressDetail}
                    onChange={handleChange}
                />
                    <span className="span-2"> 동, 호수, 상세 </span>
                </div>
            </div>
            )}
        </div>
          <div className="div-pop-btn-area">
              <div className="link-2 btnClickStyle" onClick={handleSubmit}>
                  <div className="text-wrapper-10">등록</div>
              </div>
              <div className="link-3 btnClickStyle" onClick={() => window.close()}>
            <div className="text-wrapper-10" >취소</div>
          </div>
        </div>
      </div>
    </div>
                        <div id='popupDom'>
                        {isPopupOpen && (
                            <PopupDom>
                                <PopupPostCode onClose={closePostCode}
                                            onSelect={handleAddressSelect}
                                             />
                            </PopupDom>
                            )}
                        </div>
        </>
    );
}

export default AddressTab;