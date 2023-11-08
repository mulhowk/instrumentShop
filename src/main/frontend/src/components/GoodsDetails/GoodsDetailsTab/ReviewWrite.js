import React, {useRef, useState} from 'react';
import '../../../styles/GoodsDetails/GoodsDetailsTab/ReviewWrite.css'
import Header from "../../Header";
import MainCategory from "../../MainCategory";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function ReviewWrite(props){

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

    return(
        <div>
            <Header/>
            <MainCategory/>
            <div className="review">
                <div className="review-title">
                    <p>후기</p>
                </div>
                <div className="review-product-contents">
                    <div className="review-product-img">
                        <img src={props.product.img} alt="1" />
                    </div>
                    <div className="review-product-title">
                        <div className="review-product-name">
                            <p><span style={{fontWeight : "bold"}}>상품명 : </span>{props.product.title}</p>
                        </div>
                        <div className="review-product-price">
                            <p><span style={{fontWeight : "bold"}}>상품가 : </span>
                                {props.product.price.toLocaleString()} 원</p>
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