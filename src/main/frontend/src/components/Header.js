import '../styles/Header.css';
import '../styles/MainCategory.css';
import React, { useState } from 'react';
import '../styles/globalStyles.css'

import LoginContent from './login/LoginForm';
import Modal from 'react-modal';

function Header(){

    const [modalIsOpen, setModalIsOpen] = useState(false);

    return(
        <div>
            <div className="header">
                <div className="header-search">
                    <input type="text" name="q" placeholder="검색어를 입력하세요" className="custom-input"></input>
                    <div className="marginLeft">
                        <img src="/search3.png" alt='searchImg' width="30" height="30"></img>
                    </div>
                </div>
                <div className="header-logo">
                    <a href="http://localhost:3000/">
                        <img src="/logo0.png" alt='logoImg' width="70" height="70"></img>
                    </a>
                </div>
                <div className="header-menu">
                    <ul className="menu">
                        <li id="login"> 
                        <a href="/" className="header-menu-text" onClick={(e) => {
                            e.preventDefault();
                            setModalIsOpen(true);
                        }}>LOGIN</a></li>
                        <Modal 
                            appElement={document.getElementById('root')}
                            isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}
                            style={{
                                overlay: {
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center'

                                  },
                                content : {
                                    width: '350px',
                                    height: '460px',
                                    position: 'absolute',
                                    inset: ''
                                }
                            }}>
                            <LoginContent/>
                        </Modal>
                        <li id="logout" className="hidden">
                            <a href="/" className="header-menu-text">LOGOUT</a>
                        </li>
                        <li id="open-market"></li>
                        <li><a href="/" className="header-menu-text">SIGN UP</a></li>
                        <li><a href="/" className="header-menu-text">MYPAGE</a></li>
                        <li><a href="/" className="header-menu-text">ORDER</a></li>
                    </ul>
                </div>
                <div className="basket">
                    <a href="/">
                        <img src="/basket.png" alt='basketImg' width="60" height="70"></img>
                    </a>
                    <div className="basket-count">
                        <input name="count" className="count-input" value="10" disabled>
                        </input>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;