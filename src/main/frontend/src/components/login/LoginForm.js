import React, { useState } from 'react';
import { Button,Form } from "react-bootstrap";
import '../../styles/login/loginForm.css';
import { setAuthToken, tokenUserInfo } from "../../global/auth";

import Kakao from '../../img/login/kakao.svg';
import Google from '../../img/login/google.svg';
import Naver from '../../img/login/naver.svg';
import cUser from "../../img/register/c-user.svg";
import cPassword from "../../img/register/c-password.svg";

function LoginForm() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');


    const handleLogin = () => {
      fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          member_email: email,
          member_pwd: password,
        }),
      })
      .then((response) => {
          if (response.status === 200) {

            return response.text(); // 혹은 response.json()을 사용하여 JSON을 파싱
          } else if (response.status === 401) {
            // 로그인 실패 (UNAUTHORIZED)
            throw new Error('아이디와 비밀번호을 확인해주세요');
            
          } else {
            // 다른 오류 처리
            throw new Error('서버 오류');
          }
        })
        .then((data) => {
          // 서버로부터 받은 데이터(data)를 처리
          const token = JSON.parse(data).token;
          const decodedToken = tokenUserInfo(token);

          setAuthToken(token,decodedToken.exp);

          // 로그인 성공
          window.location.reload();
          alert(decodedToken);
        })
        .catch((error) => {
          // 오류 처리
          console.error('로그인 오류:', error.message);
          setErrorMessage(error.message);
          // 오류 메시지를 출력하거나 다른 오류 처리 작업을 수행
        });
    };

    return (
<>
<div className="login-main-content">
    <div className="gnb-log-main-img" />
    <div className="custom-form-group">
        <div className='c-f-g-login-component-top'
        style={{backgroundImage: `url(${cUser})`, 
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '10px',
        backgroundSize: '20px'
        }}>
      <Form.Control 
        type="text"
        placeholder="아이디"
        value={email}
        onChange={(e) => setEmail(e.target.value)} 
      />
      </div>
      <div className='c-f-g-login-component-bottom'
        style={{backgroundImage: `url(${cPassword})`, 
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '10px',
        backgroundSize: '20px'
        }}>
      <Form.Control 
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)} 
      />
      </div>
    </div>
    <div className="content-item-button">
      <Button
        className="login-button"
        onClick={handleLogin}
        style={{ width: '235px' }}
      >
        로그인
      </Button>
    </div>
    <div>
      <span className="login-error">{errorMessage}</span>
    </div>
    <p className="find-account">
      <a className="find-account-link" href="#">아이디 찾기</a>
      <span className="find-account-span" />
      <a className="find-account-link" href="#">비밀번호 찾기</a>
      <span className="find-account-span" />
      <a className="find-account-link" href="#">회원가입</a>
    </p>
    <div className="hr-form-span">
      <hr />
      <span>간편 로그인</span>
      <div className="fast-login-wrapper">
        <div>
          <a href="http://localhost:8080/oauth2/authorization/kakao">
            <img alt="" src={Kakao} />
          </a>
        </div>
        <div>
          <a href="http://localhost:8080/oauth2/authorization/google">
            <img alt="" src={Google} />
          </a>
        </div>
        <div>
          <img alt="" src={Naver} />
        </div>
      </div>
    </div>
  </div>

</>

    );
}

export default LoginForm;
