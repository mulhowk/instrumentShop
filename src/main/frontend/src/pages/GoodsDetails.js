import React from 'react';
import Header from "../components/Header";
import MainCategory from "../components/MainCategory";
import Footer from "../components/Footer";
import GoodsDetailsProduct from "../components/GoodsDetails/GoodsDetailsProduct";

function GoodsDetails(){
    return(
        <>
            <Header/>
            <MainCategory/>
            <GoodsDetailsProduct/>
            <Footer/>
        </>
    );
}

export default GoodsDetails;