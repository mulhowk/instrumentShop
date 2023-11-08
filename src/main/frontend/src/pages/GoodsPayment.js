import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import MemberInfo from "../components/GoodsPayment/MemberInfo";
import MainCategory from "../components/MainCategory";

function GoodsPayment(){
    return(
        <>
            <Header/>
            <MainCategory/>
            <MemberInfo/>
            <Footer/>
        </>
    );
}

export default GoodsPayment;