import '../styles/Header.css';
import '../styles/MainCategory.css';
import React from 'react';
import '../styles/globalStyles.css'
import Header from "../components/Header";
import MainCategory from "../components/MainCategory";


function MainPage() {

    return (
        <>
            <Header/>
            <MainCategory/>
        </>
    );
}

export default MainPage;