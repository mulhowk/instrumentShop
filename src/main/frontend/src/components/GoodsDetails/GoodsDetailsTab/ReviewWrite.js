import React, {useRef, useState} from 'react';
import '../../../styles/GoodsDetails/GoodsDetailsTab/ReviewWrite.css'
import Header from "../../Header";
import MainCategory from "../../MainCategory";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function ReviewWrite(){

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
        setContent(newContent);
    };

    const fileInputRef = useRef();
    const textInputRef = useRef();

    const handleFileChange = () => {
        const fileInput = fileInputRef.current;
        const textInput = textInputRef.current;
        const selectedFile = fileInput.files[0];

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
                        <img src="../../logo.png" alt="1" />
                    </div>
                    <div className="review-product-title">
                        <div className="review-product-name">
                            <p><span style={{fontWeight : "bold"}}>상품명 : </span>머시기저시기</p>
                        </div>
                        <div className="review-product-price">
                            <p><span style={{fontWeight : "bold"}}>상품가 : </span>
                                7,000,000 원</p>
                        </div>
                    </div>
                </div>
                <div className="review-write-area">
                    <div className="review-write-area-id">
                        <div className="review-write-area-id-title">
                            <p>아이디</p>
                        </div>
                        <div className="review-write-area-id-id">
                            <input type="text" id="username"></input>
                        </div>
                    </div>
                    <div className="review-write-area-subject">
                        <div className="review-write-area-subject-title">
                            <p>제목</p>
                        </div>
                        <div className="review-write-area-subject-subject">
                            <input type="text" id="subject"></input>
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
                                placeholder="파일을 선택해주세요"></input>
                            <input
                                type="file"
                                ref={fileInputRef}
                                onChange={handleFileChange}
                                style={{display : "none"}}/>
                            <button
                            onClick={() => fileInputRef.current.click()}>찾아보기...</button>
                        </div>
                    </div>
                    <div className="review-submit-area">
                        <button>저장하기</button>
                    </div>
                    <div className="qna-submit-area" style={{display : "none"}}>
                        <button>수정하기</button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default ReviewWrite;