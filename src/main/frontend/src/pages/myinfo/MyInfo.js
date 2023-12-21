import Header from "../../components/Header";
import MainCategory from "../../components/MainCategory";
import Footer from "../../components/Footer";

import MyInfoContent from "../../components/myPage/MyInfoContent";
import axios from 'axios';
import "../../styles/myInfo/myInfoSide.css"
import pImage from "../../img/info/info.svg"
import React, { useEffect , useState} from "react";
import MyWishInfo from "../../components/myPage/wishList/MyWishInfo";
import MyBuyInfo from "../../components/myPage/buyList/MyBuyInfo";
import {getAuthToken, tokenUserInfo} from "../../global/auth";


function MyInfo() {

    const token =  getAuthToken();
    const decodedToken = tokenUserInfo(token);
    const memberUid = decodedToken.UID;

    const [selectedTab, setSelectedTab] = useState('profile'); // 기본값 설정
    const [userData, setUserData] = useState();

    useEffect(() => {
        const fetchUserData = () => {
            axios.post('/api/user/info', { memberUid: memberUid })
                .then(response => {
                    setUserData(response.data);
                    console.log(response.data);
                })
                .catch(error => {
                    console.error("Error fetching user data: ", error);
                });
        };

        fetchUserData();
    }, []);

    const ProfileSettings = () => <MyInfoContent userData = {userData} />;
    const PurchaseHistory = () => <MyBuyInfo MEMBERUID = {memberUid}/>;
    const Wishlist = () => <MyWishInfo MEMBERUID = {memberUid}/>;

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
                                    <p className="p-l-i-email">{userData && userData.member_email}</p>
                                    <b className="p-l-i-nickName">{userData && userData.member_name}</b>
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
                {selectedTab === 'buyList' && <PurchaseHistory/>}
                {selectedTab === 'wishList' && <Wishlist/>}
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default MyInfo;