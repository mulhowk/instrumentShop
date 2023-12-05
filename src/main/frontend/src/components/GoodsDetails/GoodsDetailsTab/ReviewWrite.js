import React, {useEffect, useRef, useState} from 'react';
import '../../../styles/GoodsDetails/GoodsDetailsTab/ReviewWrite.css'
import Header from "../../Header";
import MainCategory from "../../MainCategory";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";

function ReviewWrite(){

    const navigate = useNavigate();

    const params = useParams();
    const goodsId = params.goodsId;
    const [goods, setGoods] = useState(null);

    const [reviewScore, setReviewScore] = useState(null);
    const [reviewTitle, setReviewTitle] = useState(null);
    const [reviewContent, setReviewContent] = useState(null);
    const [reviewFile, setReviewFile] = useState(null);
    const [reviewWriter, setReviewWriter] = useState(null);

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
                navigate(-1);
            })
            .then(data => console.log(data))
            .catch(error => console.error('Error creating review: ', error));
        };

    useEffect(() => {
        axios.get(`/goodsDetails/goods/${goodsId}`)
            .then(response => {
                setGoods(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const modules = {
        toolbar: [
            [{ 'header': '1' }, { 'header': '2' }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            [{ 'indent': '-1' }, { 'indent': '+1' }],
            ['link'],
        ],
    };

    const formats = [
        'header',
        'bold', 'italic', 'underline', 'strike',
        'list', 'bullet', 'indent',
        'link',
    ];

    const [content, setContent] = useState('');

    const handleChange = (newContent) => {
        const noTagsContent = stripHtmlTags(newContent);

        setContent(newContent);
        setReviewContent(noTagsContent);
    };

    const stripHtmlTags = (html) => {
        const doc = new DOMParser().parseFromString(html, 'text/html');
        return doc.body.textContent || "";
    };

    const fileInputRef = useRef();
    const textInputRef = useRef();

    const handleFileChange = () => {
        const fileInput = fileInputRef.current;
        const textInput = textInputRef.current;
        const selectedFile = fileInput.files[0];

        setReviewFile(selectedFile);

        if(selectedFile) {
            textInput.value = selectedFile.name;
        }else {
            textInput.value = '';
        }
    };

    const handleStarClick = (clickedValue) => {

       const updateStars = stars.map((star) => ({
           value : star.value,
           selected : star.value <= clickedValue,
       }));
        setStars(updateStars);
        const selectedObjects = updateStars.filter(obj => obj.selected === true);
        setReviewScore(selectedObjects.length / 2);
    };


    const [stars, setStars] = useState([
        {value: 0.5, selected: false},
        {value : 1, selected: false},
        {value: 1.5, selected: false},
        {value: 2, selected: false},
        {value: 2.5, selected: false},
        {value: 3, selected: false},
        {value: 3.5, selected: false},
        {value: 4, selected: false},
        {value: 4.5, selected: false},
        {value: 5, selected: false}
    ]);

    return(
        <div>
            <Header/>
            <MainCategory/>

            {goods?  (
            <div className="review">
                <div className="review-title">
                    <p>후기</p>
                </div>
                <div className="review-score">
                    <div className="review-score-title"><p>별점을 선택해주세요.</p></div>
                    <div className="review-score-star">
                    {stars.map((star) => (
                        <div key={star.value} className="star-wrapper">
                        <span
                            className={`star ${star.selected  ? 'selected' : ''}`}
                            style={{ color: star.selected ? 'red': 'white'}}
                            onClick={() => handleStarClick(star.value)}
                        >★</span>
                            <span className="star-rating-value"
                            style={{ color: star.selected ? 'red' : 'white'}}>{star.value}</span>
                        </div>
                    ))}
                    </div>
                </div>
                <div className="review-product-contents">
                    <div className="review-product-img">
                        <img src={goods.goodsImg} alt={goodsId} />
                    </div>
                    <div className="review-product-title">
                        <div className="review-product-name">
                            <p><span style={{fontWeight : "bold"}}>상품명 : </span>{goods.goodsName}</p>
                        </div>
                        <div className="review-product-price">
                            <p><span style={{fontWeight : "bold"}}>상품가 : </span>
                                {goods.goodsPrice.toLocaleString()}</p>
                        </div>
                    </div>
                </div>
                <div className="review-write-area">
                    <div className="review-write-area-id">
                        <div className="review-write-area-id-title">
                            <p>아이디</p>
                        </div>
                        <div className="review-write-area-id-id">
                            <input type="text" id="username" value={reviewWriter}
                                   onChange={e => setReviewWriter(e.target.value)}></input>
                        </div>
                    </div>
                    <div className="review-write-area-subject">
                        <div className="review-write-area-subject-title">
                            <p>제목</p>
                        </div>
                        <div className="review-write-area-subject-subject">
                            <input type="text" id="title" value={reviewTitle}
                            onChange={e => setReviewTitle(e.target.value)}></input>
                        </div>
                    </div>
                    <div className="review-write-area-contents">
                        <div className="review-write-area-contents-title">
                            <p>내용</p>
                        </div>
                        <div className="review-write-area-contents-contents">
                            <ReactQuill
                            style={{color : "white", width : "800px", height : "280px", marginTop : "-42px"}}
                            value = {content}
                            onChange = {handleChange}
                            module = {modules}
                            formats={formats}
                            />
                        </div>
                    </div>
                    <div className="review-write-area-file">
                        <div className="review-write-area-file-title">
                            <p>파일</p>
                        </div>
                        <div className="review-write-area-file-file">
                            <input
                                className="review-write-area-file-file-input"
                                type="text"
                                id="file"
                                ref={textInputRef}
                                placeholder="파일을 선택해주세요"
                            readOnly></input>
                            <input
                                type="file"
                                ref={fileInputRef}
                                onChange={handleFileChange}
                                accept="image/*"
                                style={{display : "none"}}/>
                            <button
                            onClick={() => fileInputRef.current.click()}>찾아보기...</button>
                        </div>
                    </div>
                    <div className="review-submit-area">
                        <button onClick={handleCreateReview}>저장하기</button>
                    </div>
                    <div className="qna-submit-area" style={{display : "none"}}>
                        <button>수정하기</button>
                    </div>
                </div>
            </div>
                    ) : (<p>Loading...</p>)
                }

        </div>
    );
}

export default ReviewWrite;