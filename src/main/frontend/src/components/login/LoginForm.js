import React, { useState } from 'react';
import { Button,Form } from "react-bootstrap";
import '../../styles/login/loginForm.css'

function LoginForm() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    return (
<>
<div className="login-main-content">
    <div className="gnb-log-main-img" />
    <div className="custom-form-group">
      <Form.Control 
        type="text"
        placeholder="아이디"
        value={email}
        onChange={(e) => setEmail(e.target.value)} 
      />
      <Form.Control 
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)} 
      />
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
          <img alt="" src={Apple} />
        </div>
      </div>
    </div>
  </div>

</>

    );
}

export default LoginForm;
