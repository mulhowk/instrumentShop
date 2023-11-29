import React, {useEffect} from 'react';
import Header from "../../components/Header";
import MainCategory from "../../components/MainCategory";
import Footer from "../../components/Footer";
import GoodsListCategory from "../../components/GoodsList/GoodsListCategory";
import Goods from "../../components/GoodsList/Goods";
import {useLocation, useParams} from "react-router-dom";

function GoodsList(){

    const {query, categoryId, subCategoryId} = useParams();


    return(
        <>
        <Header/>
        <MainCategory/>
        {categoryId && !subCategoryId && (
           <GoodsListCategory categoryId={categoryId}/>
        )}
        <Goods categoryId={categoryId} subCategoryId={subCategoryId} query={query}/>
        <Footer/>
        </>
    );
}

export default GoodsList;