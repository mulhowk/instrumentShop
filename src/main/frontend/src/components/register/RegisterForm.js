import "../../styles/register/registerForm.css";
import cUser from "../../img/register/c-user.svg"
import cEmail from "../../img/register/c-email.svg"
import cPassword from "../../img/register/c-password.svg"
import cPhone from "../../img/register/c-phone.svg"
import cScroll from "../../img/register/c-scroll.svg"
import cDate from "../../img/register/c-date.svg"
import cMore from "../../img/register/c-more.svg"
import CustomSelect from "./CustomSelect";

import React, {useEffect, useState} from "react";
import axios from "axios";

function RegisterForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [name, setName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('');

  const [authCode, setAuthCode] = useState('');

  // 인증번호 입력 처리 함수
  const handleAuthCodeChange = (event) => {
    setAuthCode(event.target.value);
  };
  const handleLogin = () => {
    fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        member_email: email,
        member_pwd: password,
        member_name: name,
        member_gender: name,
        member_birth: birthDate,
        member_phone: phone,
        socialRole: "USER"
      }),
    })
    .then((response) => {
        if (response.status === 200) {

          return response.text(); // 혹은 response.json()을 사용하여 JSON을 파싱
        } else if (response.status === 401) {
          
          
        } else {
        
        }
      })
      .then((data) => {
          alert("회원가입이 완료되었습니다."); // test
          // plz move home page
          window.location.href = "/";
      })
      .catch((error) => {
        // 오류 처리
      });
  };

  const [validationErrors, setValidationErrors] = useState({
    idInformation: {},
    userInformation: {},
    phoneInformation: {},
  });

  const [isValidationPassed, setIsValidationPassed] = useState(false);
  const [isAuthSuccessful, setIsAuthSuccessful] = useState(false);

    const handleRequestClick = async () => {
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
    } else {
      setIsValidationPassed(false); // 유효성 검사 실패 시 회원가입 버튼 숨김
    }

      if (isValidationPassed) {
          try {
              const response = await fetch(`/api/email/${email}/authcode`, {
                  method: 'GET',
              });

              if (response.ok) {
                  const message = await response.text();
                  console.log(message); // 또는 사용자에게 메시지 표시
              } else {
                  console.error('이메일 전송 실패');
              }
          } catch (error) {
              console.error('이메일 전송 중 오류 발생:', error);
          }
      }

  };

  const handleGenderClick = (selectedGender) => {
    setGender(selectedGender);
  };

  const authBtnClick = () => {
    axios.post(`/api/email/${email}/authcode`, { code: authCode })
        .then(response => {
          if (response.data) {
            console.log('인증 성공');
            setIsAuthSuccessful(true);
            // 추가적인 성공 처리 로직
          } else {
            console.error('인증 실패: 잘못된 코드');
            // 추가적인 실패 처리 로직
          }
        })
        .catch(error => {
          console.error('인증 요청 중 오류 발생:', error);
        });
  }

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
                     style={{
                       backgroundImage: `url(${cUser})`,
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
                     style={{
                       backgroundImage: `url(${cPassword})`,
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
                     style={{
                       backgroundImage: `url(${cPassword})`,
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
                     style={{
                       backgroundImage: `url(${cUser})`,
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
                     style={{
                       backgroundImage: `url(${cDate})`,
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
                     style={{
                       backgroundImage: `url(${cPhone})`,
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
                     style={{
                       backgroundImage: `url(${cMore})`,
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
                       style={{
                         backgroundImage: `url(${cPassword})`,
                         backgroundRepeat: 'no-repeat',
                         backgroundPosition: '10px',
                         backgroundSize: '20px'
                       }}>
                    <input
                        placeholder="인증번호"
                        value={authCode}
                        onChange={handleAuthCodeChange}
                    />
                  </div>
                </div>
            )}

            <button className="c-r-f-button" onClick={handleRequestClick}>
              인증요청
            </button>
            {isValidationPassed && (
                <button className="c-r-f-button" onClick={authBtnClick}>
                  인증완료
                </button>
            )}
            {isAuthSuccessful && (
                <button className="c-r-f-button" onClick={handleLogin}>
                  회원가입
                </button>
            )}

          </div>
        </>
    );
}

export default RegisterForm;