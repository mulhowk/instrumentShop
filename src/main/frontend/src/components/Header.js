import '../styles/Header.css';
import '../styles/MainCategory.css';
import React, {useEffect, useState} from 'react';
import '../styles/globalStyles.css'
import { useNavigate } from 'react-router-dom';

import LoginContent from './login/LoginForm';
import Modal from 'react-modal';
import {Link} from "react-router-dom";
import {logoutActionHandler} from "../global/auth";

function Header(props){

    const token = props.token || null;
    {console.log(token?token.UID: null)}

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [isLogin, setIsLogin] = useState(false);

    useEffect(() => {
        if(token){
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
                                <div>
                                    <li id="logout">
                                        <a className="header-menu-text" onClick={logoutActionHandler}>LOGOUT</a>
                                    </li>
                                </div>
                            ) : (
                            <div>
                            <li id="login">
                            <a href="/" className="header-menu-text" onClick={(e) => {
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
                        {isLogin && token.roles[0].name === 'ROLE_MARKETER' &&
                            <li id="open-market">
                                <a href={`/openMarket/${token.brand}`} className="header-menu-text">openMarket</a>
                            </li>
                        }
                        {isLogin === false &&
                            <li>
                                <a href="/register" className="header-menu-text">SIGN UP</a>
                            </li>
                        }
                        <li><a href="/myinfo" className="header-menu-text">MYPAGE</a></li>
                        <li><a href="/" className="header-menu-text">ORDER</a></li>
                    </ul>
                </div>
                <div className="basket">
                    {token?
                    <a href={`/goodsList/cart/${token.UID}`}>
                        <img src="/basket.png" alt='basketImg' width="60" height="70"></img>
                    </a> :
                        <a href="/">
                            <img src="/basket.png" alt='basketImg' width="60" height="70"></img>
                        </a>
                    }
                    <div className="basket-count">
                        <input name="count" className="count-input" value="10" disabled>
                        </input>
                    </div>
                </div>
            </div>
    );
}

export default Header;