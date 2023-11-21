import '../../styles/Header.css';
import '../../styles/MainCategory.css';
import '../../styles/MainPage/MainPage.css'
import React from 'react';
import '../../styles/globalStyles.css'
import Header from "../../components/Header";
import MainCategory from "../../components/MainCategory";
import Footer from "../../components/Footer";
import RollingBanner from "../../components/MainPage/RollingBanner";
import QuickLink from "../../components/MainPage/QuickLink";
import NewArrival from "../../components/MainPage/NewArrival";


function MainPage() {

    return (
        <div className="main-page">
        <Header/>
        <MainCategory/>
        <RollingBanner/>
        <QuickLink/>
        <NewArrival/>
        <Footer/>
        </div>
    );
}

export default MainPage;