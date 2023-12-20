import { useState } from "react";
import PopupPostCode from "./AddAddress";
import PopupDom from "./PopupDom";
import '../../styles/myInfo/addressTab.css'
function AddressTab() {
    // 팝업창 상태 관리
    const [isPopupOpen, setIsPopupOpen] = useState(false)

    // 주소 정보를 상태로 관리합니다.
    const [address, setAddress] = useState();
    const [jibunAddress, setJibunAddress] = useState();

    const [formData, setFormData] = useState({
        addressNickname: '',
        addressReceiver: '',
        memberPhone: '',
        // 다른 필드들...
    });

    // 폼 필드 변경 핸들러
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // '등록' 버튼 클릭 이벤트 핸들러
    const handleSubmit = async () => {
        try {
            const response = await fetch('/api/address', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Something went wrong');
            }

            // 성공 처리
            console.log('Address saved successfully');
        } catch (error) {
            console.error('Error saving address:', error);
        }
    };

    // PopupPostCode 컴포넌트로부터 주소 데이터를 받아 상태를 업데이트하는 함수입니다.
    const handleAddressSelect = (data) => {
        setAddress(data);
        // 이후 처리 로직이 여기에 들어갈 수 있습니다.
        // 예를 들어, 받은 주소 데이터를 폼 필드에 표시하거나 다른 상태로 저장할 수 있습니다.

        console.log(data);

        setJibunAddress(data.jibunAddress);
        setAddress(data.address);
        
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
                    <input className="input input-address-nick" />
                  </div>
                </div>
                <div className="row">
                  <div className="label-wrapper">
                    <div className="label">받는 분</div>
                  </div>
                  <div className="data-2">
                    <input className="input input-address-name" />
                    <div className="element"> 10자 이내</div>
                  </div>
                </div>
                <div className="row">
                  <div className="div-wrapper">
                    <div className="div">휴대폰</div>
                  </div>
                  <div className="data-3">
                    <div className="options">
                      <div className="div-2">
                        <div className="text-wrapper-2">선택</div>
                      </div>
                    </div>
                    <div className="text-wrapper-3"></div>
                    <input className="input-2 input-adress-phone1" />
                    <div className="text-wrapper-4"></div>
                    <input className="input-3 input-adress-phone1" />
                  </div>
                </div>
                <div className="row-2">
                  <div className="cell-3">
                    <div className="div">배송주소</div>
                  </div>
                  <div className="data-5">
                    <div className="input-6" />
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
        <div className="div-address-txt">
            <p>{address}</p>
            <p>{jibunAddress}</p>
        </div>
        </div>
        <div className="div-pop-btn-area">
          <div className="link-2">
              <button onClick={handleSubmit}>등록</button>
          </div>
            <div className="link-3" onClick={() => window.close()}>
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