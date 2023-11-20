import Header from "../../components/Header";
import MainCategory from "../../components/MainCategory";
import Footer from "../../components/Footer";

import MyInfoContent from "../../components/myPage/MyInfoContent";

import "../../styles/myInfo/myInfoSide.css"
import pImage from "../../img/info/info.svg"
import React, { useState } from "react";
import MyWishInfo from "../../components/myPage/wishList/MyWishInfo";
import MyBuyInfo from "../../components/myPage/buylist/MyBuyInfo";

function MyInfo() {

    const [selectedTab, setSelectedTab] = useState('profile'); // 기본값 설정

    const ProfileSettings = () => <MyInfoContent />;
    const PurchaseHistory = () => <MyBuyInfo/>;
    const Wishlist = () => <MyWishInfo/>;

    return (
        <>
            <Header/>
            <MainCategory/>
            <div className="side-page">
                    <div className="side-page-content">
                        <div className="myInfo-side-tab">
                            <div className="profile-left">
                                <div className="p-l-info">
                                    <img className="image-icon" alt="" src={pImage} />
                                    <p className="p-l-i-email">nelap1234@gmail.com</p>  
                                    <b className="p-l-i-nickName">닉네임</b>                      
                                </div>
                            <div className="p-l-info-content">
                                <div className="p-l-i-button">
                                    <div className="p-l-i-tab" onClick={() => setSelectedTab('profile')}>프로필 설정</div>
                                </div>
                                <div className="p-l-i-button">
                                    <div className="p-l-i-tab" onClick={() => setSelectedTab('buyList')}>구매 내역</div>
                                </div>
                                <div className="p-l-i-button">
                                    <div className="p-l-i-tab" onClick={() => setSelectedTab('wishList')}>찜한 상품</div>
                                </div>
                                <hr className="p-l-i-hr" />
                            </div>
                        </div>
                    </div>
                {selectedTab === 'profile' && <ProfileSettings />}
                {selectedTab === 'buyList' && <PurchaseHistory />}
                {selectedTab === 'wishList' && <Wishlist />}
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default MyInfo;