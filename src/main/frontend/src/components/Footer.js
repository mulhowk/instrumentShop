import '../styles/App.css';
import React from 'react';
import '../styles/globalStyles.css'
import '../styles/Footer.css'

function Footer(){
    return(
        <div className="footer">
            <div className="footer-logo">
                <img src="/logo2.png" alt='logoImg' width="60" height="60"></img>
            </div>
            <div className="call-center">
                <p className="color-red">CALL CENTER </p>
                <p> (본점) 010-7753-4135</p>
                <p> (지점) 010-2344-7239</p>
            </div>
            <div className="bank-info">
                <p className="color-red">BANK INFO</p>
                <p>기업은행 01077534135</p>
                <p>예금주 : 강태혁</p>
            </div>
            <div className="company-info">
                <p className="color-red">COMPANY INFO</p>
                <p>Address : </p>
                <p>(본점) : 경기도 안양시 동안구 전파로 87</p>
                <p>(지점) : 경기도 안양시 동안구 관악대로 342번길 19-8</p>
                <p>Tel : (본점) 080-335-0020</p>
                <p>Tel : (지점) 080-335-0021</p>
            </div>
            <div className="footer-category-01">
                <p className="color-red">CATEGORY</p>
                <a href="/"><p>카테고리 1</p></a>
                <a href="/"><p>카테고리 2</p></a>
                <a href="/"><p>카테고리 3</p></a>
                <a href="/"><p>카테고리 4</p></a>
            </div>
            <div className="footer-category-02">
                <a href="/"><p>카테고리 5</p></a>
                <a href="/"><p>카테고리 6</p></a>
                <a href="/"><p>카테고리 7</p></a>
                <a href="/"><p>카테고리 8</p></a>
            </div>
            <div className="company">
                <p className="color-red">COMPANY</p>
                <a href="/"><p>ABOUT US</p></a>
                <a href="/"><p>개인정보처리방침</p></a>
                <a href="/"><p>이용안내</p></a>
                <a href="/"><p>이용약관</p></a>
            </div>
        </div>
    );
}

export default Footer;