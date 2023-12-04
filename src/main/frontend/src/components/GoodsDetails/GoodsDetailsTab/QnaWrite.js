import React, {useEffect, useRef, useState} from 'react';
import '../../../styles/GoodsDetails/GoodsDetailsTab/QnaWrite.css'
import Header from "../../Header";
import MainCategory from "../../MainCategory";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";

function QnaWrite(){

    const navigate = useNavigate();

    const params = useParams();
    const goodsId = params.goodsId;

    const [goods, setGoods] = useState([]);

    const [qnaTitle, setQnaTitle] = useState(null);
    const [qnaContent, setQnaContent] = useState(null);
    const [qnaFile, setQnaFile] = useState(null);
    const [qnaWriter, setQnaWriter] = useState(null);

    const handleQnaCreate = () => {

        const isConfirmed = window.confirm('문의를 작성하시겠습니까?');

        if(isConfirmed) {
            if(!qnaContent) {
                alert('리뷰 내용을 작성해주세요.');
                return;
            }
            if(!qnaTitle) {
                alert('리뷰 제목을 작성해주세요.');
                return;
            }
        } else return;

        const formQnaData = new FormData();

        formQnaData.append('qnaWriter', qnaWriter);
        formQnaData.append('qnaTitle', qnaTitle);
        formQnaData.append('qnaContent', qnaContent);
        if(qnaFile){
            formQnaData.append('qnaFile', qnaFile);
        }
        formQnaData.append('goods', goodsId);

        axios.post(`/goodsDetails/qnaWrite`, formQnaData, {
            headers : {
                'Content-Type' : 'application/x-www-form-urlencoded'
            }
        })
            .then(createdReviews => {
                alert('문의가 등록되었습니다!');
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
                console.error('Error fetching data :', error);
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
        setContent(newContent);
        setQnaContent(stripHtmlTags(newContent));
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

        setQnaFile(selectedFile);

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
            <div className="qna">
                <div className="qna-title">
                    <p>QnA</p>
                </div>
                <div className="qna-product-contents">
                    <div className="qna-product-img">
                        <img src={goods.goodsImg} alt={goodsId} />
                    </div>
                    <div className="qna-product-title">
                        <div className="qna-product-name">
                            <p><span style={{fontWeight : "bold"}}>상품명 : </span>{goods.goodsName}</p>
                        </div>
                        <div className="qna-product-price">
                            <p><span style={{fontWeight : "bold"}}>상품가 : </span>
                                {goods.goodsPrice} 원</p>
                        </div>
                    </div>
                </div>
                <div className="qna-write-area">
                    <div className="qna-write-area-id">
                        <div className="qna-write-area-id-title">
                            <p>아이디</p>
                        </div>
                        <div className="qna-write-area-id-id">
                            <input type="text" id="username" value={qnaWriter}
                                   onChange={e => setQnaWriter(e.target.value)}/>
                        </div>
                    </div>
                    <div className="qna-write-area-subject">
                        <div className="qna-write-area-subject-title">
                            <p>제목</p>
                        </div>
                        <div className="qna-write-area-subject-subject">
                            <input type="text" id="subject" value={qnaTitle}
                            onChange={e => setQnaTitle(e.target.value)}/>
                        </div>
                    </div>
                    <div className="qna-write-area-contents">
                        <div className="qna-write-area-contents-title">
                            <p>내용</p>
                        </div>
                        <div className="qna-write-area-contents-contents">
                            <ReactQuill
                                style={{color : "white", width : "800px", height : "280px", marginTop : "-42px"}}
                                value = {content}
                                onChange = {handleChange}
                                module = {modules}
                                formats={formats}
                            />
                        </div>
                    </div>
                    <div className="qna-write-area-file">
                        <div className="qna-write-area-file-title">
                            <p>파일</p>
                        </div>
                        <div className="qna-write-area-file-file">
                            <input
                                className="qna-write-area-file-file-input"
                                type="text"
                                id="file"
                                ref={textInputRef}
                                placeholder="파일을 선택해주세요"></input>
                            <input
                                type="file"
                                ref={fileInputRef}
                                accept="image/*"
                                onChange={handleFileChange}
                                style={{display : "none"}}/>
                            <button
                                onClick={() => fileInputRef.current.click()}>찾아보기...</button>
                        </div>
                    </div>
                    <div className="qna-submit-area">
                        <button onClick={handleQnaCreate}>저장하기</button>
                    </div>
                    <div className="qna-submit-area" style={{display : "none"}}>
                        <button>수정하기</button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default QnaWrite;