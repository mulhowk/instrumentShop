import MyPageReview from "../../components/myPage/inMyReview/MyPageReview.js";
import MyPageReviewStar from "../../components/myPage/inMyReview/MyPageReviewStar.js";
import React, {useEffect, useState} from "react";
import axios from "axios";

function InMyReview({onClose, goodsNum}) {

    const goodsId = goodsNum;
    const [reviewScore, setReviewScore] = useState();
    const [reviewTitle, setReviewTitle] = useState();
    const [reviewContent, setReviewContent] = useState();
    const [reviewWriter, setReviewWriter] = useState();
    const [reviewFile, setReviewFile] = useState();

    // {console.log(reviewTitle)}
    // {console.log(reviewContent)}
    // {console.log(reviewScore)}
    // {console.log(reviewWriter)}
    // {console.log(reviewFile)}
    // {console.log(goodsId)}
    const [goods, setGoods] = useState([]);

    useEffect(() => {
        axios.get(`/goodsDetails/goods/${goodsId}`)
            .then(res => {
                setGoods(res.data);
            }).catch(error => {
            console.log('Error fetching data:', error );
        });
    }, []);
    const handleStarData = (reviewData) => {

        setReviewScore(reviewData.length !==0 ? reviewData.reviewScore : null);
        setReviewTitle(reviewData.length !==0 ? reviewData.reviewTitle : null);
    }

    const handleReviewData = (review) => {

        setReviewWriter(review.length !==0 ? review.reviewWriter : null)
        setReviewContent(review.length !==0 ? review.reviewContent : null)
        setReviewFile(review.length !==0 ? review.reviewFile : null)
    }

    const handleCreateReview = () => {

        const isConfirmed = window.confirm('리뷰를 작성하시겠습니까?');

        if(isConfirmed) {
            if(!reviewContent) {
                alert('리뷰 내용을 작성해주세요.');
                return;
            }
            if(!reviewTitle) {
                alert('리뷰 제목을 작성해주세요.');
                return;
            }
            if(!reviewScore) {
                alert('리뷰 점수를 입력해주세요.');
                return;
            }


        // 각 상태값을 사용해 서버에 리뷰 생성 요청을 보냄
        const formReviewData = new FormData();


        formReviewData.append('reviewScore', reviewScore);
        formReviewData.append('reviewTitle', reviewTitle);
        if(reviewFile) {
            formReviewData.append('reviewFile', reviewFile);
        }
        formReviewData.append('reviewContent', reviewContent);
        formReviewData.append('reviewWriter', reviewWriter);
        formReviewData.append('goods', goodsId);


        axios.post('/goodsDetails/reviewWrite', formReviewData, {
            headers : {
                'Content-Type' : 'application/x-www-form-urlencoded'
            }
        })
            .then(createdReviews => {
                alert('리뷰가 등록되었습니다!');
                onClose();
            })
            .then(data => console.log(data))
            .catch(error => console.error('Error creating review: ', error));
        }
    }

    return (
        <div style={{display:"flex", alignItems:"center",flexDirection:"column"}}>
            <MyPageReviewStar onStarChange = {handleStarData} goods = {goods}/>
            <MyPageReview onReviewChange = {handleReviewData}/>
            <div className="review-submit-area">
                <button onClick={handleCreateReview}>저장하기</button>
            </div>
        </div>
    );
}

export default InMyReview;