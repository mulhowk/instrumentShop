import logo from './logo.svg';
import './App.css';

// src/main/frontend/src/App.js
import React, {useEffect, useState} from 'react';
import axios from 'axios';

function App() {
  let [hello, setHello] = useState('')

  useEffect(() => {
    axios.get('api/hello')
        .then(res => setHello(res.data))
        .catch(error => console.log(error))
  }, []);

  return (
   <MainPage/>

  );
}
function MainPage() {

    return (
        <div>
            <div className="header">
                <div className="header-search">
                    <input type="text" name="q" placeholder="검색어를 입력하세요" className="custom-input"></input>
                    <div className="marginLeft">
                    <img src="/search3.png" alt='logoImg' width="30" height="30"></img>
                    </div>
                </div>
                <div className="header-logo">
                <img src="/logo192.png" alt='logoImg' width="70" height="70"></img>
                </div>
                <div className="header-menu">
                    <ul className="menu">
                        <li id="login"><a href="/" className="header-menu-text">LOGIN</a></li>
                        <li id="logout" className="hidden">
                            <a href="/" className="header-menu-text">LOGOUT</a>
                        </li>
                        <li><a href="/" className="header-menu-text">SIGN UP</a></li>
                        <li><a href="/" className="header-menu-text">MYPAGE</a></li>
                        <li><a href="/" className="header-menu-text">ORDER</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default App;