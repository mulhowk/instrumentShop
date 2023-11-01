import "../../styles/register/registerForm.css";
import cUser from "../../img/register/c-user.svg"
import cEmail from "../../img/register/c-email.svg"
import cPassword from "../../img/register/c-password.svg"
import cPhone from "../../img/register/c-phone.svg"
import cScroll from "../../img/register/c-scroll.svg"
import cDate from "../../img/register/c-date.svg"
import cMore from "../../img/register/c-more.svg"
import CustomSelect from "./CustomSelect";

import React, { useState } from "react";

function RegisterForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [name, setName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('');


  const [validationErrors, setValidationErrors] = useState({
    idInformation: {},
    userInformation: {},
    phoneInformation: {},
  });

  const [isValidationPassed, setIsValidationPassed] = useState(false);

  const handleRequestClick = () => {
    {/** 유효성 검사 */} 
  
    const idInformationErrors = {};
    const userInformationErrors = {};
    const phoneInformationErrors = {};
  
    if (!email) {
      idInformationErrors.email = '이메일을 입력해주세요.';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      idInformationErrors.email = '이메일 형식이 올바르지 않습니다.';
    }

    if (!password) {
      idInformationErrors.password = '비밀번호를 입력해주세요.';
    } else if (password.length < 6) {
      idInformationErrors.password = '비밀번호는 6자 이상입니다.';
    }

    if (!passwordConfirm) {
      idInformationErrors.password = '비밀번호를 입력해주세요.';
    } else if (password !== passwordConfirm) {
      idInformationErrors.password = '비밀번호가 일치하지 않습니다.';
    }

    if (!name) {
      userInformationErrors.name = '이름을 입력해주세요.';
    }

    if (!birthDate) {
      userInformationErrors.birthDate = '생년월일을 입력해주세요.';
    } 

    if (!phone) {
      phoneInformationErrors.phone = '휴대전화를 입력해주세요.';
    } 

  
    setValidationErrors({
      idInformation: idInformationErrors,
      userInformation: userInformationErrors,
      phoneInformation: phoneInformationErrors,
    });
  
    if (
      Object.keys(idInformationErrors).length === 0 &&
      Object.keys(userInformationErrors).length === 0 &&
      Object.keys(phoneInformationErrors).length === 0
    ) {
      setIsValidationPassed(true);  // 유효성 검사가 통과되었으므로 state를 true로 변경
    }
  };

  const handleGenderClick = (selectedGender) => {
    setGender(selectedGender);
  };

    return (
        <>
          <div className="content-area">
            <div className="c-header">
              <div className="c-r-f-button"> 
                로고
              </div>
            </div>

            <div className="c-r-form">
              <div className="c-r-f-id-information">
                <div className="c-r-f-i-tab-top-round"
                    style={{backgroundImage: `url(${cUser})`, 
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: '10px',
                            backgroundSize: '20px'
                    }}>
                  <input placeholder="이메일"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      ></input>
                </div>
                <div className="c-r-f-i-tab"
                    style={{backgroundImage: `url(${cPassword})`, 
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: '10px',
                    backgroundSize: '20px',
                  }}>
                    <input
                  placeholder="비밀번호"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                </div>
                <div className="c-r-f-i-tab-bottom-round"
                    style={{backgroundImage: `url(${cPassword})`, 
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: '10px',
                    backgroundSize: '20px'
                  }}>
                <input
                  placeholder="비밀번호 확인"
                  value={passwordConfirm}
                  onChange={(e) => setPasswordConfirm(e.target.value)}
                />            
                </div>
              </div>
              <div className="c-r-f-validationCheck">
                {Object.values(validationErrors.idInformation).map((error) => (
                  <div key={error}>
                    <label className="c-r-f-error">* {error}</label>
                  </div>
                ))}
              </div>
              <div className="c-r-f-user-information">
                <div className="c-r-f-i-tab-top-round"
                    style={{backgroundImage: `url(${cUser})`, 
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: '10px',
                    backgroundSize: '20px'
                  }}>
                <input
                  placeholder="이름"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                </div>
                <div className="c-r-f-i-tab-bottom-round"
                    style={{backgroundImage: `url(${cDate})`, 
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: '10px',
                    backgroundSize: '20px'
                  }}>                
                <input
                  placeholder="YYYY/MM/DD"
                  value={birthDate}
                  onChange={(e) => setBirthDate(e.target.value)}
                />
                </div>  
              </div>
              <div className="c-r-f-validationCheck">
                  {Object.values(validationErrors.userInformation).map((error) => (
                    <div key={error}>
                      <label className="c-r-f-error">* {error}</label>
                    </div>
                  ))}
                </div>
              <div className="c-r-f-phone-information"> 
                <div className="c-r-f-i-tab-top-round"
                    style={{backgroundImage: `url(${cPhone})`, 
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: '10px',
                    backgroundSize: '20px'
                  }}>                
                <input
                  placeholder="휴대전화"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                </div>
                <div className="c-r-f-i-tab"
                  style={{backgroundImage: `url(${cMore})`, 
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: '10px',
                  backgroundSize: '20px'
                  }}>                   
                  {/* dropdown 컴포넌트 추가 */}
                  <div className="t-selectbox">
                    <CustomSelect/>
                  </div>
                </div>
                <div className="c-r-f-i-tab-bottom-round">
                  <div className="t-button-group">
                  <button
                className={`t-buttom-m ${gender === 'male' ? 'active' : ''}`}
                onClick={() => handleGenderClick('male')}
              >
                남자
              </button>
              <button
                className={`t-buttom-f ${gender === 'female' ? 'active' : ''}`}
                onClick={() => handleGenderClick('female')}
              >
                여자
              </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="c-r-f-validationCheck">
              {Object.values(validationErrors.phoneInformation).map((error) => (
                <div key={error}>
                  <label className="c-r-f-error">* {error}</label>
                </div>
              ))}
            </div>

            {/* 인증번호 입력 폼 */}
            {isValidationPassed && (
              <div className="verification-form">
                {/* 인증번호 입력을 위한 input, button 등의 컴포넌트 추가 */}
                <div className="c-r-f-authenticationCode"
                    style={{backgroundImage: `url(${cPassword})`, 
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: '10px',
                    backgroundSize: '20px'
                  }}>
                <input
                  placeholder="인증번호"
                />            
                </div>
              </div>
            )}

            <button className="c-r-f-button"  onClick={handleRequestClick}>
              인증요청
            </button>
          </div>
        </>
    );
}

export default RegisterForm;