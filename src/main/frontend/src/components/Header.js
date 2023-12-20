import '../styles/Header.css';
import '../styles/MainCategory.css';
import React, {useEffect, useState} from 'react';
import '../styles/globalStyles.css'
import { useNavigate } from 'react-router-dom';

import LoginContent from './login/LoginForm';
import Modal from 'react-modal';
import {Link} from "react-router-dom";
import {getAuthToken, logoutActionHandler, tokenUserInfo} from "../global/auth";
import axios from "axios";

function Header(props){

    const token =  getAuthToken();
    const decodedToken = tokenUserInfo(token);

    const memberUid = decodedToken? decodedToken.UID : null;
    const [sumCart, setSumCart] = useState(0);



    useEffect(() => {
        axios.get(`/cart/sum/${memberUid}`)
            .then(response => {
                setSumCart(response.data);
            })
            .catch(error => {
                console.log('Error fetching data:', error );
            });
    }, []);

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [isLogin, setIsLogin] = useState(false);

    useEffect(() => {
        if(decodedToken){
            setIsLogin(true);
        } else {
            setIsLogin(false);
        }
    }, []);



    const [query, setQuery] = useState("");
    const handleQueryChange = (e) => {
        setQuery(e.target.value);
    }

    const navi = useNavigate();
    const handleSearch = () => {
        if(query.trim() !== ''){
            const url = `/goodsList/query/${query}`;
            navi(url);
        }
    };

    const handleKeyPressEnter = (e) => {
        if(e.key === 'Enter'){
            handleSearch();
        }
    };

    return(
            <div className="header">
                <div className="header-search">
                    <input type="text" name="q"
                           placeholder="검색어를 입력하세요"
                           className="custom-input"
                           value={query}
                           onChange={handleQueryChange}
                           onKeyPress={handleKeyPressEnter}/>

                    <div className="marginLeft">
                            <img src="/search3.png"
                                 alt='searchImg'
                                 width="30" height="30"
                                 onClick={handleSearch}/>
                    </div>
                </div>
                <div className="header-logo">
                    <Link to="/">
                        <img src="/logo0.png" alt='logoImg' width="70" height="70"/>
                    </Link>
                </div>
                <div className="header-menu">
                    <ul className="menu">
                        {isLogin ?
                            (
                                    <li id="logout">
                                        <a href="/" onClick={logoutActionHandler}>
                                            LOGOUT
                                        </a>
                                    </li>
                            ) : (
                            <div>
                            <li id="login">
                            <a href="/" onClick={(e) => {
                            e.preventDefault();
                            setModalIsOpen(true);
                        }}>LOGIN</a>
                </li>
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
            </div>)}
                        {isLogin && decodedToken.roles[0].name === 'ROLE_MARKETER' &&
                            <li id="open-market">
                                <a href={`/openMarket/${decodedToken.brand}`}>openMarket</a>
                            </li>
                        }
                        {isLogin === false &&
                            <li>
                                <a href="/register">SIGN UP</a>
                            </li>
                        }
                        {isLogin ?
                        <li>
                            <a href="/myinfo">MYPAGE</a>
                        </li> :
                        <li>
                            <a onClick={(e) => {
                                e.preventDefault();
                                setModalIsOpen(true);
                            }} className="header-menu-text">MYPAGE</a>
                        </li>
                        }
                        {isLogin ?
                        <li><a href="/myinfo">ORDER</a></li>
                            :
                            <a onClick={(e) => {
                                e.preventDefault();
                                setModalIsOpen(true);
                            }} className="header-menu-text">ORDER</a>
                        }
                    </ul>
                </div>
                <div className="basket">
                    {decodedToken?
                    <a href={`/goodsList/cart/${memberUid}`}>
                        <img src="/basket.png" alt='basketImg' width="60" height="70"></img>
                    </a> :
                        <a href="/">
                            <img src="/basket.png" alt='basketImg' width="60" height="70"></img>
                        </a>
                    }
                    <div className="basket-count">
                        {decodedToken?
                            <input name="count" className="count-input" value={sumCart} disabled/>
                            :
                            <input name="count" className="count-input" value="0" disabled/>
                        }
                    </div>
                </div>
            </div>
    );
}

export default Header;