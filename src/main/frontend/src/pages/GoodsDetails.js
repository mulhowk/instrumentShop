import React from 'react';
import Header from "../components/Header";
import MainCategory from "../components/MainCategory";
import Footer from "../components/Footer";
import GoodsDetailsProduct from "../components/GoodsDetails/GoodsDetailsProduct";

function GoodsDetails(){

    const product = {
        id : 201311030001,
        img : '/Goods/goods1.jpeg',
        title : 'selmer(셀마) Soprano SA80 II JUBILEE1asdasdsdadadsadasdsasadsada',
        price : 700000,
        deliver : '총 결제금액 5만원 미만시 배송비 3,000원이 청구됩니다.',
        optionType : '색상',
        options : ['빨강색', '초록색', '분홍색'],
        details : '상품 상세 입니다. 이미지 url이 들어올 수도 있어요. 이미지 url이 들어온다면 따로 처리를 해야겠군요',
        review : [
            {
                num : 1,
                subject : "테스트 리뷰 1",
                name : "테스트",
                date : "2023/10/24",
                HITS : 120
            },
            {
                num : 2,
                subject : "테스트 리뷰 2",
                name : "테스트",
                date : "2023/10/24",
                HITS : 12
            }
        ],
        qna : [
            {
                num : 1,
                subject : "테스트 Q&A 1",
                name : "테스트",
                date : "2023/10/24",
                HITS : 120
            },
            {
                num : 2,
                subject : "테스트 Q&A 2",
                name : "테스트",
                date : "2023/10/24",
                HITS : 12
            }
        ]
    };

    return(
        <>
            <Header/>
            <MainCategory/>
            <GoodsDetailsProduct product = {product}/>
            <Footer/>
        </>
    );
}

export default GoodsDetails;