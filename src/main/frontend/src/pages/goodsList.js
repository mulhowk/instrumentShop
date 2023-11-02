import React from 'react';
import Header from "../components/Header";
import MainCategory from "../components/MainCategory";
import Footer from "../components/Footer";
import GoodsListCategory from "../components/GoodsList/GoodsListCategory";
import Goods from "../components/GoodsList/Goods";

function goodsList(){
    return(
        <>
        <Header/>
        <MainCategory/>
        <GoodsListCategory/>
        <Goods/>
        <Footer/>
        </>
    );
}

export default goodsList;