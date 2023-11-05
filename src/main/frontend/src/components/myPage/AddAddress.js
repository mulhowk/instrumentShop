import React, { useState } from 'react';
import { DaumPostcodeEmbed } from 'react-daum-postcode';

function AddAddress() {
    const [address, setAddress] = useState({
        zonecode: '',
        address: '',
        buildingName: '',
    });

    const handleComplete = (data) => {
        let fullAddress = data.address;
        let extraAddress = '';
        let zonecode = data.zonecode;
        if (data.addressType === 'R') {
            if (data.bname !== '') {
                extraAddress += data.bname;
            }
            if (data.buildingName !== '') {
                extraAddress +=
                    extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
            }
            fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
        }
        setAddress({
            zonecode: zonecode,
            address: fullAddress,
            buildingName: data.buildingName,
        });
        console.log(address);
    }

  return (
    // JSX 코드...
            <DaumPostcodeEmbed
                onComplete={handleComplete}
                autoClose
                autoResize
                width={595}
                height={450}
                animation
                />
    // 나머지 JSX 코드...
  );
}

export default AddAddress;
