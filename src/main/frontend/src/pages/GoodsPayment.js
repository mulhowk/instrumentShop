import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import MemberInfo from "../components/GoodsPayment/MemberInfo";
import MainCategory from "../components/MainCategory";
import OrderInfo from "../components/GoodsPayment/OrderInfo";

function GoodsPayment(){
    return(
        <>
            <Header/>
            <MainCategory/>
            <MemberInfo/>
            <OrderInfo/>
            <Footer/>
        </>
    );
}

export default GoodsPayment;