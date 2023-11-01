import React, { useState } from 'react';
import '../../styles/register/customSelect.css'

const CustomSelect = () => {
    const [currentValue, setCurrentValue] = useState("SKT");
    const [showOptions, setShowOptions] = useState(false);
  
    const handleOnChangeSelectValue = (e) => {
      const { innerText } = e.target;
      setCurrentValue(innerText);
      setShowOptions(false); // 옵션을 선택하면 목록을 닫습니다.
      e.stopPropagation(); // 이벤트 버블링을 막음
    };
  
    return (
      <div className="select-box" onClick={() => setShowOptions((prev) => !prev)}>
        <label className='s-label'>{currentValue}</label>
        <ul className='select-options' style={{ maxHeight: showOptions ? '150px' : '0px' }}>
          <li className='s-option' onClick={handleOnChangeSelectValue}>SKT</li>
          <li className='s-option' onClick={handleOnChangeSelectValue}>SKT 알뜰폰</li>
          <li className='s-option' onClick={handleOnChangeSelectValue}>KT</li>
          <li className='s-option' onClick={handleOnChangeSelectValue}>KT 알뜰폰</li>
          <li className='s-option' onClick={handleOnChangeSelectValue}>LGU+</li>
          <li className='s-option' onClick={handleOnChangeSelectValue}>LGU+ 알뜰폰</li>
        </ul>
      </div>
    );
  };
  
  export default CustomSelect;
  