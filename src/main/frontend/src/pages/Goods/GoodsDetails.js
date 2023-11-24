import React from 'react';
import Header from "../../components/Header";
import MainCategory from "../../components/MainCategory";
import Footer from "../../components/Footer";
import GoodsDetailsProduct from "../../components/GoodsDetails/GoodsDetailsProduct";
import GoodsDetailsTab from "../../components/GoodsDetails/GoodsDetailsTab";

function GoodsDetails(){

    const product = {
        id : 201311030001,
        brand : 'YAMAHA',
        img : '/Goods/goods1.jpeg',
        title : 'selmer(셀마) Soprano SA80 II JUBILEE1asdasdsdadadsadasdsasadsada',
        price : 700000,
        deliver : '총 결제금액 5만원 미만시 배송비 3,000원이 청구됩니다.',
        optionType : '색상',
        options : ['빨강색', '초록색', '분홍색'],
        details : '상품 상세 입니다. 이미지 url이 들어올 수도 있어요. 이미지 url이 들어온다면 따로 처리를 해야겠군요.sdfdsfsdf dsf sadhsahuwahdjkshkjdhsajkdhakjshdkjsahdjksahdkjhasjkdhaskjhdjk',
        payInfo : '구매 안내에용오옹ㅇ옹ㅇ',
        review : [
            {
                writer : 'rkdxogur97',
                score : 4,
                date : '2023.11.22',
                id : '202311220945 상품명이긴한데 이러면 id로 상품명 가져와야 하나',
                file : '../../logo.png',
                title : '아주 좋소',
                content : '아주 좋은 상품이오'
            },
            {
                writer : 'rkdxogur97',
                score : 4.5,
                date : '2023.11.22',
                id : 202311220945,
                file : '../../logo.png',
                title : '아주 좋소',
                content : '아주 좋은 상품이오'
            },
            {
                writer : 'rkdxogur97',
                score : 4.5,
                date : '2023-11-22',
                id : 202311220945,
                file : '../../logo.png',
                title : '아주 좋소',
                content : '아주 좋은 상품이오'
            },
            {
                writer : 'rkdxogur97',
                score : 4.5,
                date : '2023-11-22',
                id : 202311220945,
                file : '../../logo.png',
                title : '아주 좋소',
                content : '아주 좋은 상품이오'
            },
            {
                writer : 'rkdxogur97',
                score : 4.5,
                date : '2023-11-22',
                id : 202311220945,
                file : '../../logo.png',
                title : '아주 좋소',
                content : '아주 좋은 상품이오'
            },
            {
                writer : 'rkdxogur97',
                score : 4.5,
                date : '2023-11-22',
                id : 202311220945,
                file : '../../logo.png',
                title : '아주 좋소',
                content : '아주 좋은 상품이오'
            }
        ],
        qna : ""
    };

    return(
        <>
            <Header/>
            <MainCategory/>
            <GoodsDetailsProduct product = {product}/>
            <GoodsDetailsTab product = {product} />
            <Footer/>
        </>
    );
}

export default GoodsDetails;