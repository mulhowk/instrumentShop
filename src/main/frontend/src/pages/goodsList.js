import React from 'react';
import Header from "../components/Header";
import MainCategory from "../components/MainCategory";
import Footer from "../components/Footer";
import GoodsListCategory from "../components/GoodsList/GoodsListCategory";

function goodsList(){
    return(
        <>
        <Header/>
        <MainCategory/>
        <GoodsListCategory/>
        <Footer/>
        </>
    );
}

export default goodsList;