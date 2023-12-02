import React, {useEffect, useState} from 'react';
import Header from "../../components/Header";
import MainCategory from "../../components/MainCategory";
import Footer from "../../components/Footer";
import GoodsDetailsProduct from "../../components/GoodsDetails/GoodsDetailsProduct";
import GoodsDetailsTab from "../../components/GoodsDetails/GoodsDetailsTab";
import axios from "axios";
import {useParams} from "react-router-dom";

function GoodsDetails(){

    const params = useParams();
    const goodsId = params.goodsId;

    const [goods, setGoods] = useState(null);

    const [review, setReview] = useState(null);
    const [qna,setQna] = useState(null);
    const [qnaReply, setQnaReply] = useState(null);

    useEffect(() => {
        // 상품 정보 비동기호출
        axios.get(`/goodsDetails/goods/${goodsId}`)
            .then(response => {
                setGoods(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
        // 상품 리뷰 비동기호출
        axios.get(`/goodsDetails/review/${goodsId}`)
            .then(response => {
                setReview(response.data);
            })
            .catch(error => {
                console.log('Error fetching data:', error );
            });
        // 상품 문의 비동기호출
        axios.get(`/goodsDetails/qna/${goodsId}`)
            .then(response => {
                setQna(response.data);
            })
            .catch(error => {
                console.log('Error fetching data:', error );
            });
        axios.get(`/goodsDetails/qnaReply/${goodsId}`)
            .then(response => {
                setQnaReply(response.data);
            }).catch(error => {
            console.log('Error fetching data:', error );
        });
    }, [goodsId]);

    return(
        <>
            <Header/>
            <MainCategory/>
            {goods? <GoodsDetailsProduct goods ={goods}/> : <p>Loading...</p>}
            {goods?
                (review?
                    (qna?
                        (qnaReply? (<GoodsDetailsTab review ={review} qna ={qna}
                                                     goods ={goods} qnaReply = {qnaReply}/>)
                            : (<p>Loading...</p>))
                        : (<p>Loading...</p>))
                    : (<p>Loading...</p>))
                : (<p>Loading...</p>)
            }
            <Footer/>
        </>
    );
}

export default GoodsDetails;