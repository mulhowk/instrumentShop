import '../styles/Header.css';
import '../styles/MainCategory.css';
import '../styles/MainPage.css'
import React from 'react';
import '../styles/globalStyles.css'
import Header from "../components/Header";
import MainCategory from "../components/MainCategory";


function MainPage() {

    return (
        <div className="main-page">
        <Header/>
    <MainCategory/>
        </div>
    );
}

export default MainPage;