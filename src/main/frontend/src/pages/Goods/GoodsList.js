import React from 'react';
import Header from "../../components/Header";
import MainCategory from "../../components/MainCategory";
import Footer from "../../components/Footer";
import GoodsListCategory from "../../components/GoodsList/GoodsListCategory";
import Goods from "../../components/GoodsList/Goods";
import {useLocation, useParams} from "react-router-dom";

function GoodsList(){

    const {categoryId, subCategoryId} = useParams();
    const location = useLocation();

    return(
        <>
        <Header/>
        <MainCategory/>
        {categoryId && !subCategoryId && (
           <GoodsListCategory categoryId={categoryId}/>
        )}
        <Goods categoryId={categoryId} subCategoryId={subCategoryId}/>
        <Footer/>
        </>
    );
}

export default GoodsList;