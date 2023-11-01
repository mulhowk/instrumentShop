import '../styles/Header.css';
import '../styles/MainCategory.css';
import '../styles/MainPage/MainPage.css'
import React from 'react';
import '../styles/globalStyles.css'
import Header from "../components/Header";
import MainCategory from "../components/MainCategory";
import Footer from "../components/Footer";
import RollingBanner from "../components/MainPage/RollingBanner";


function MainPage() {

    return (
        <div className="main-page">
        <Header/>
        <MainCategory/>
        <RollingBanner/>

        <Footer/>
        </div>
    );
}

export default MainPage;