import React, { useState } from 'react';
import DaumPostcode from 'react-daum-postcode';

const PopupPostCode = (props) => {
 
    const handleComplete = (data) => {
        // 주소 데이터를 처리하는 로직이 여기에 들어갑니다.
        // 예를 들어, 전체 주소를 구성하거나, 추가 주소 정보를 포함할 수 있습니다.

        // 완성된 주소 데이터를 부모 컴포넌트로 전달합니다.
        // 이 함수는 부모 컴포넌트에서 전달 받아야 합니다.
        if (props.onSelect) {
            props.onSelect(data);

            console.log(data.address);
            console.log(data.autoJibunAddress);
        }
    };


    const postCodeStyle = {
        display: "block",
        position: "absolute",
        top: "10%",
        width: "500px",
        height: "379px",
        padding: "7px"
      };
 
    return(
        <div>
            <DaumPostcode style={postCodeStyle}
            onComplete={handleComplete}/>
        </div>
    )
}

export default PopupPostCode;
