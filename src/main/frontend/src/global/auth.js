import base64 from 'base-64';
import {useEffect} from "react";

  // 토큰을 로컬 스토리지에 저장하는 함수
  const setAuthToken = (token, exp) => {
    localStorage.setItem('token', token);
    localStorage.setItem('exp', exp);
  };
  
  // 로컬 스토리지에서 토큰을 가져오는 함수
  const getAuthToken = () => {
    const token = localStorage.getItem('token');
    const tokenExpiration = localStorage.getItem('exp');

    const now = parseInt(new Date().getTime() / 1000, 10);
    // 만료 시간이 있고, 현재 시간보다 미래라면 토큰 반환
    if (parseInt(tokenExpiration, 10) > now) {
      return token;
    }
    // 만료된 토큰이나 토큰이 없는 경우 null 반환
    return null;
  };
  
  // 토큰 유효성 검사
  const isAuthTokenValid = () => {
    const token = getAuthToken();
    return token !== null;
  }  

  

  const tokenUserInfo = (token) => {
    if (token) {
      const base64Url = token.split('.')[1]; // 토큰에서 payload 부분을 추출
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const decodedPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));
  
      return JSON.parse(decodedPayload);
    }

    if (!isAuthTokenValid()) {
        logoutActionHandler();
      }

    return null;
  };

 const logoutActionHandler = () => {

             localStorage.removeItem('token');
             localStorage.removeItem('exp');

  };
  
  export { setAuthToken, getAuthToken, tokenUserInfo, isAuthTokenValid, logoutActionHandler };