import React from 'react';
import Header from "../components/Header";
import MainCategory from "../components/MainCategory";
import Footer from "../components/Footer";
import GoodsListCategory from "../components/GoodsList/GoodsListCategory";
import Goods from "../components/GoodsList/Goods";
import {useLocation} from "react-router-dom";

function GoodsList(){

    const location = useLocation();
    const isGoodsListCategory1To9
        = /^\/goodsList\/category\/[1-9]$/.test(location.pathname);

    return(
        <>
        <Header/>
        <MainCategory/>
        {isGoodsListCategory1To9 && (
           <GoodsListCategory/>
        )}
        <Goods/>
        <Footer/>
        </>
    );
}

export default GoodsList;